import React, { useState, useRef, useEffect } from 'react';
import {
  Bot,
  X,
  Send,
  RefreshCw,
  Sparkles,
  Minimize2,
  Maximize2,
  AlertCircle,
  HelpCircle,
  User,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_INFO, EXPERIENCES, PROJECTS, SKILL_CATEGORIES } from '../data/portfolioData';
import {
  CHATBOT_BACKEND_URL,
  CHATBOT_ENDPOINT,
  ChatbotMessage,
  queryResumeChatbot,
} from '../config/chatbotConfig';

interface ChatbotDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}


function getLocalPortfolioAnswer(question: string): string | null {
  const q = question.toLowerCase();
  if (/education|degree|university|college|rgukt|iit madras|iitm|innomatics|diploma|study|studying/.test(q)) {
    return `${PERSONAL_INFO.name} is pursuing B.Tech in Computer Science Engineering at ${EDUCATION_INFO.primary.institution}, ${EDUCATION_INFO.primary.location}, with a CGPA of ${EDUCATION_INFO.primary.cgpa} and expected graduation in ${EDUCATION_INFO.primary.graduation}. She is also pursuing ${EDUCATION_INFO.secondary.degree} at ${EDUCATION_INFO.secondary.institution} (${EDUCATION_INFO.secondary.status}) and the ${EDUCATION_INFO.tertiary.degree} at ${EDUCATION_INFO.tertiary.institution}, ${EDUCATION_INFO.tertiary.location} (${EDUCATION_INFO.tertiary.status}).`;
  }
  if (/skill|technology|technical|programming|language|tools/.test(q)) {
    return SKILL_CATEGORIES.map((category) => `${category.category}: ${category.skills.map((skill) => skill.name).join(', ')}`).join('\n');
  }
  if (/intern|experience|infosys|student tribe|tao digital/.test(q)) {
    return EXPERIENCES.map((experience) => `${experience.role} — ${experience.organization} (${experience.period}, ${experience.location}). ${experience.summary} ${experience.bullets.join(' ')}`).join('\n\n');
  }
  if (/project|built|build|technova|chatbot|order.to.cash|email.to.action|spam|ham|eazydiner|blinkit|retention|heart disease|crop yield|shakespeare|dravidian/.test(q)) {
    const matched = PROJECTS.filter((project) => {
      const text = `${project.title} ${project.tagline} ${project.description} ${project.category}`.toLowerCase();
      const terms = q.split(/[^a-z0-9]+/).filter((word) => word.length > 3);
      return terms.some((term) => text.includes(term));
    });
    const projects = matched.length ? matched.slice(0, 4) : PROJECTS.slice(0, 4);
    return projects.map((project) => `${project.title}: ${project.description}`).join('\n\n');
  }
  if (/contact|email|phone|linkedin|github|location/.test(q)) {
    return `You can contact ${PERSONAL_INFO.name} at ${PERSONAL_INFO.email}, phone ${PERSONAL_INFO.phone}. LinkedIn: ${PERSONAL_INFO.linkedin}. GitHub: ${PERSONAL_INFO.github}. Location: ${PERSONAL_INFO.location}.`;
  }
  if (/about|who is sanjana|introduce|profile|background/.test(q)) {
    return `${PERSONAL_INFO.name} is a ${PERSONAL_INFO.role} interested in ${PERSONAL_INFO.subRole}. ${PERSONAL_INFO.academicStatus} Her portfolio includes projects in data science, machine learning, NLP, generative AI, and automation.`;
  }
  return null;
}

const STARTER_QUESTIONS = [
  "Tell me about Sanjana's education at RGUKT Ongole and IIT Madras",
  "What did Sanjana build during her Infosys Springboard AI internship?",
  "Tell me about the TechNova AI Customer Support Chatbot project",
  "What machine learning and NLP skills does Sanjana have?",
];

export const ChatbotDrawer: React.FC<ChatbotDrawerProps> = ({
  isOpen,
  onClose,
  onOpen,
}) => {
  const [messages, setMessages] = useState<ChatbotMessage[]>([]);
  const [inputQuestion, setInputQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [lastFailedQuestion, setLastFailedQuestion] = useState<string | null>(null);
  const [isMinimized, setIsMinimized] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom whenever messages update or loading state changes
  useEffect(() => {
    if (isOpen && !isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen, isMinimized]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, isMinimized]);

  const handleSend = async (questionToSend?: string) => {
    const question = (questionToSend || inputQuestion).trim();
    if (!question || isLoading) return;

    const userMessage: ChatbotMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: question,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputQuestion('');
    setLastFailedQuestion(null);
    setIsLoading(true);

    try {
      // Call the FastAPI backend endpoint directly
      const response = await queryResumeChatbot(question);


      const botMessage: ChatbotMessage = {
        id: `bot-${Date.now()}`,
        sender: 'assistant',
        text: response.answer?.trim() || "I don't have that information in my profile.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err: any) {
      console.error("FastAPI Chatbot Error:", err);
      setLastFailedQuestion(question);

      const localAnswer = getLocalPortfolioAnswer(question);
      const fallbackMessage: ChatbotMessage = {
        id: `bot-fallback-${Date.now()}`,
        sender: 'assistant',
        text: localAnswer
          ? `The live AI service is temporarily unavailable, so this answer uses the portfolio's saved information instead.\n\n${localAnswer}`
          : `The live AI service is currently unavailable and I couldn't find a matching saved answer for that question. Please try asking about Sanjana's education, skills, internships, projects, or contact details. The backend endpoint is ${CHATBOT_BACKEND_URL}.`,
        isError: !localAnswer,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    if (lastFailedQuestion) {
      handleSend(lastFailedQuestion);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClearChat = () => {
    setMessages([]);
    setLastFailedQuestion(null);
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom-Right) */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={onOpen}
            className="group relative flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-xs sm:text-sm rounded-full shadow-xl shadow-cyan-500/25 transition-all duration-300 hover:scale-105 active:scale-95 border border-cyan-300/40"
            aria-label="Open AI Resume Chatbot"
          >
            {/* Animated pulsing ping indicator */}
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-slate-950" />
            </span>

            <Bot className="w-5 h-5 text-slate-950" />
            <span className="font-bold tracking-tight text-slate-950">Ask me about Sanjana</span>
          </button>
        </div>
      )}

      {/* Floating Chat Panel Drawer */}
      {isOpen && (
        <div
          className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[440px] bg-[#0b1222] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 ${
            isMinimized ? 'h-16' : 'h-[620px] max-h-[88vh]'
          }`}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3.5 bg-[#070c18] border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-bold text-white truncate">
                  Ask me about Sanjana
                </h3>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400 truncate">
                  <span className="text-cyan-400 font-medium">NVIDIA Nemotron RAG</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="text-slate-500 truncate">Resume Knowledge Base</span>
                </div>
              </div>
            </div>

            {/* Header Controls */}
            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                title={isMinimized ? "Expand" : "Minimize"}
                aria-label="Toggle size"
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </button>

              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                title="Close"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Content Area (Hidden if minimized) */}
          {!isMinimized && (
            <>
              {/* Messages Stream Container */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#090f1e]/80">
                
                {/* Welcome Message Card */}
                {messages.length === 0 && (
                  <div className="space-y-4 pt-2">
                    <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2.5">
                      <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400">
                        <Sparkles className="w-4 h-4 shrink-0" />
                        <span>Interactive AI Resume Agent</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        I am Sanjana's dedicated AI assistant, powered by <strong>NVIDIA Nemotron</strong> and <strong>Retrieval-Augmented Generation (RAG)</strong> over her verified academic transcripts, projects, skills, and internship records.
                      </p>
                      <div className="text-[11px] text-slate-400 border-t border-slate-800 pt-2 flex items-center justify-between">
                        <span>Backend: FastAPI @ widow-sandblast-pasty.ngrok-free.dev</span>
                      </div>
                    </div>

                    {/* Starter Suggestions */}
                    <div className="space-y-1.5">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-1">
                        Suggested Inquiries:
                      </div>
                      <div className="space-y-1.5">
                        {STARTER_QUESTIONS.map((q, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSend(q)}
                            className="w-full text-left p-2.5 text-xs text-slate-300 hover:text-white bg-[#0c1426] hover:bg-cyan-950/40 border border-slate-800 hover:border-cyan-700/60 rounded-lg transition-all"
                          >
                            {q}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Message Bubbles */}
                {messages.map((msg) => {
                  const isUser = msg.sender === 'user';

                  return (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} space-y-1`}
                    >
                      {/* Avatar & Label */}
                      <div className="flex items-center gap-1.5 text-[10px] text-slate-500 px-1">
                        {isUser ? (
                          <>
                            <span>You</span>
                            <User className="w-3 h-3 text-slate-400" />
                          </>
                        ) : (
                          <>
                            <Bot className="w-3 h-3 text-cyan-400" />
                            <span>Sanjana's AI Assistant</span>
                          </>
                        )}
                      </div>

                      {/* Bubble */}
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                          isUser
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-medium rounded-tr-sm shadow-md shadow-cyan-500/10'
                            : msg.isError
                            ? 'bg-rose-950/40 text-rose-200 border border-rose-800/60 rounded-tl-sm'
                            : 'bg-[#0f172a] text-slate-200 border border-slate-800 rounded-tl-sm shadow-sm'
                        }`}
                      >
                        <div className="whitespace-pre-wrap">{msg.text}</div>

                        {/* Graceful Retry Action if Backend Failed */}
                        {msg.isError && lastFailedQuestion && (
                          <div className="mt-3 pt-2.5 border-t border-rose-800/50 flex items-center justify-between gap-2">
                            <span className="text-[11px] text-rose-300">FastAPI backend offline or unavailable</span>
                            <button
                              onClick={handleRetry}
                              className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold text-rose-100 bg-rose-900/60 hover:bg-rose-800 rounded border border-rose-700 transition-colors"
                            >
                              <RefreshCw className="w-3 h-3" />
                              <span>Retry Question</span>
                            </button>
                          </div>
                        )}

                        {/* Retrieved sources are intentionally hidden from visitors. */}
                      </div>

                      {/* Time info */}
                      <span className="text-[9px] text-slate-600 px-1 font-mono">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  );
                })}

                {/* Animated Typing Indicator */}
                {isLoading && (
                  <div className="flex flex-col items-start space-y-1">
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-500 px-1">
                      <Bot className="w-3 h-3 text-cyan-400" />
                      <span>Sanjana's AI Assistant is analyzing resume...</span>
                    </div>
                    <div className="bg-[#0f172a] border border-slate-800 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input & Footer Bar */}
              <div className="p-3 bg-[#070c18] border-t border-slate-800 shrink-0 space-y-2">
                <div className="flex items-center gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputQuestion}
                    onChange={(e) => setInputQuestion(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={isLoading}
                    placeholder="Ask about Sanjana's skills, projects, or degree..."
                    className="flex-1 px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-800 focus:border-cyan-500 focus:outline-none rounded-xl text-white placeholder-slate-500 disabled:opacity-50 transition-colors"
                  />

                  <button
                    onClick={() => handleSend()}
                    disabled={!inputQuestion.trim() || isLoading}
                    className="p-2.5 bg-cyan-400 hover:bg-cyan-300 disabled:bg-slate-800 text-slate-950 disabled:text-slate-600 rounded-xl transition-colors disabled:cursor-not-allowed shrink-0"
                    aria-label="Send Message"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>

                {/* Bottom Status / Clear Chat Utility */}
                <div className="flex items-center justify-between text-[10px] text-slate-500 px-1">
                  <span>Press <kbd className="font-mono text-slate-400">Enter</kbd> to submit</span>

                  {messages.length > 0 && (
                    <button
                      onClick={handleClearChat}
                      className="hover:text-slate-300 transition-colors underline"
                    >
                      Clear conversation
                    </button>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};
