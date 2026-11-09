/**
 * Configuration and API client for Sanjana Gorli's Portfolio Chatbot
 * Backend: FastAPI + NVIDIA Nemotron + RAG over Resume Knowledge Base
 */

// Clearly named backend URL constant as specified in the requirements
export const CHATBOT_BACKEND_URL = "https://widow-sandblast-pasty.ngrok-free.dev";
export const CHATBOT_ENDPOINT = `${CHATBOT_BACKEND_URL}/chat`;

export interface ChatResponse {
  answer: string;
  sources?: string[] | string | Array<{ title?: string; text?: string; source?: string; document?: string }>;
}

export interface ChatbotMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  sources?: string[];
  timestamp: Date;
  isError?: boolean;
}

/**
 * Send question to the FastAPI RAG backend
 * Uses ngrok-skip-browser-warning to prevent ngrok interstitial HTML pages
 */
export async function queryResumeChatbot(question: string, signal?: AbortSignal): Promise<ChatResponse> {
  const response = await fetch(CHATBOT_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "ngrok-skip-browser-warning": "true",
    },
    body: JSON.stringify({ question }),
    signal,
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    throw new Error(
      `Backend responded with status ${response.status}${errorText ? `: ${errorText.slice(0, 150)}` : ""}`
    );
  }

  const data = await response.json();
  return data as ChatResponse;
}

/**
 * Normalize sources returned by the backend into a clean array of strings
 */
export function normalizeSources(sourcesRaw?: ChatResponse['sources']): string[] {
  if (!sourcesRaw) return [];
  if (Array.isArray(sourcesRaw)) {
    return sourcesRaw
      .map((item) => {
        if (typeof item === 'string') return item.trim();
        if (typeof item === 'object' && item !== null) {
          return item.title || item.source || item.document || item.text || JSON.stringify(item);
        }
        return String(item);
      })
      .filter((s) => s.length > 0);
  }
  if (typeof sourcesRaw === 'string') {
    const trimmed = sourcesRaw.trim();
    if (!trimmed) return [];
    // If it's a newline or comma-separated list
    if (trimmed.includes('\n')) {
      return trimmed.split('\n').map(s => s.trim()).filter(Boolean);
    }
    return [trimmed];
  }
  return [];
}
