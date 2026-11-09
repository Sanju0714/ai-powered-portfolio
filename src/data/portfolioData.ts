/**
 * Source of Truth: Sanjana Gorli's Verified Academic & Technical Background
 * B.Tech CSE, Rajiv Gandhi University of Knowledge Technologies (RGUKT), Ongole (2023–2027) | CGPA: 8.88/10
 * BS in Data Science & Applications, IIT Madras (Ongoing — Diploma Level)
 */

export interface SkillItem {
  name: string;
  highlight?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'Internship';
  summary: string;
  bullets: string[];
  technologies: string[];
}

export type ProjectCategory = 
  | 'Generative AI & Automation' 
  | 'Data Science & Analytics' 
  | 'Machine Learning & NLP';

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  description: string;
  fullOverview: string;
  technologies: string[];
  measurableResults: string[];
  keyHighlight: string;
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  issueDate?: string;
}

export const RESUME_PDF_PATH = "/assets/aistudio/Resume__10__00522ca7.pdf";

export const PERSONAL_INFO = {
  name: "Sanjana Gorli",
  role: "Computer Science & Engineering Student",
  subRole: "Data Science, Artificial Intelligence, Machine Learning & Generative AI",
  tagline: "I am a Computer Science and Engineering student with a strong interest in Data Science, Artificial Intelligence, Machine Learning, and Generative AI. I work on data analysis, predictive modeling, NLP, LLM-powered applications, RAG systems, and AI automation. My projects combine Python, SQL, machine-learning libraries, business intelligence tools, and modern AI frameworks to build practical solutions.",
  intro: "I am a Computer Science and Engineering student with a strong interest in Data Science, Artificial Intelligence, Machine Learning, and Generative AI. I work on data analysis, predictive modeling, NLP, LLM-powered applications, RAG systems, and AI automation. My projects combine Python, SQL, machine-learning libraries, business intelligence tools, and modern AI frameworks to build practical solutions.",
  academicStatus: "Final-year B.Tech Computer Science and Engineering student at RGUKT Ongole, graduating in May 2027, with a CGPA of 8.88. Also pursuing the BS in Data Science & Applications at IIT Madras at the diploma level and the Data Science with GenAI program at Innomatics Research Labs, Hyderabad.",
  email: "sanjanagorli0309@gmail.com",
  phone: "7816050695",
  github: "https://github.com/Sanju0714",
  linkedin: "https://linkedin.com/in/sanjanagorli",
  location: "Ongole, Andhra Pradesh, India",
  availability: "Open to Technical Projects & Opportunities (May 2027 Grad)",
  avatarImage: "/assets/aistudio/Sanjana_Gorli_Profile.jpg",
  cgpa: "8.88 / 10",
  graduation: "May 2027",
  metrics: [
    { label: "Current CGPA", value: "8.88 / 10", detail: "RGUKT Ongole (2023–2027)" },
    { label: "Expected Graduation", value: "May 2027", detail: "B.Tech Computer Science & Eng." },
    { label: "Dual Academics", value: "RGUKT + IITM", detail: "B.Tech & BS in Data Science" },
    { label: "Technical Projects", value: "12 Projects", detail: "Data Science, ML & GenAI" },
  ],
};

export const EDUCATION_INFO = {
  primary: {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Rajiv Gandhi University of Knowledge Technologies (RGUKT)",
    location: "Ongole",
    period: "08/2023 – 05/2027",
    graduation: "Expected May 2027",
    cgpa: "8.88 / 10",
  },
  secondary: {
    degree: "BS in Data Science & Applications",
    institution: "Indian Institute of Technology, Madras (IITM)",
    location: "Online / Hybrid",
    status: "Ongoing (Diploma Level)",
  },
  tertiary: {
    degree: "Data Science with GenAI Program",
    institution: "Innomatics Research Labs",
    location: "Hyderabad",
    status: "Ongoing",
  },
  coreFundamentals: [
    "Object-Oriented Programming (OOP)",
    "Database Management Systems (DBMS)",
    "Problem-Solving",
  ],
  bio: `I am a Computer Science and Engineering student with a strong interest in Data Science, Artificial Intelligence, Machine Learning, and Generative AI. I work on data analysis, predictive modeling, NLP, LLM-powered applications, RAG systems, and AI automation. My projects combine Python, SQL, machine-learning libraries, business intelligence tools, and modern AI frameworks to build practical solutions. I am a final-year B.Tech Computer Science and Engineering student at RGUKT Ongole, graduating in May 2027, with a CGPA of 8.88, and I am also pursuing the BS in Data Science & Applications at IIT Madras at the diploma level and the Data Science with GenAI program at Innomatics Research Labs, Hyderabad.`,
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming Languages",
    description: "Core languages for software, data science, and algorithmic development.",
    skills: [
      { name: "Python", highlight: "Primary language for data science, ML & GenAI" },
      { name: "SQL", highlight: "Database querying, data aggregation & manipulation" },
    ],
  },
  {
    category: "Technical Tools",
    description: "Tools for version control, code editing, and rapid web prototyping.",
    skills: [
      { name: "Git", highlight: "Version control & repository management" },
      { name: "GitHub", highlight: "Collaborative coding & code hosting" },
      { name: "VS Code", highlight: "Development environment & debugging" },
      { name: "Streamlit", highlight: "Interactive web applications for AI & data projects" },
      { name: "Power BI", highlight: "Business intelligence dashboards & retail analytics" },
    ],
  },
  {
    category: "Software Development",
    description: "Core software engineering practices and practical deployment.",
    skills: [
      { name: "Basic Application Development", highlight: "End-to-end practical software solutions" },
      { name: "API Integration", highlight: "Connecting LLM & external service APIs" },
      { name: "Debugging and Troubleshooting", highlight: "Code review, issue tracing & test fixes" },
    ],
  },
  {
    category: "Computer Science Fundamentals",
    description: "Theoretical and algorithmic grounding.",
    skills: [
      { name: "Object-Oriented Programming (OOP)", highlight: "Modular, reusable code design" },
      { name: "Database Management Systems (DBMS)", highlight: "Relational data structures & queries" },
      { name: "Problem-Solving", highlight: "Algorithmic thinking & analytical debugging" },
    ],
  },
  {
    category: "Analytical Skills",
    description: "Problem formulation and solution engineering.",
    skills: [
      { name: "Analytical Thinking", highlight: "Structured reasoning & logic" },
      { name: "Technical Issue Identification", highlight: "Pinpointing bottlenecks & discrepancies" },
      { name: "Solution Development", highlight: "Designing practical technical workflows" },
    ],
  },
  {
    category: "Professional Skills",
    description: "Workplace collaboration and continuous learning.",
    skills: [
      { name: "Communication & Team Collaboration", highlight: "Technical clarity & teamwork" },
      { name: "Time Management & Adaptability", highlight: "Delivering milestones reliably" },
      { name: "Willingness to Learn New Technologies", highlight: "Fast learner & active experimenter" },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-infosys",
    role: "AI Intern – Sales Call Assistant",
    organization: "Infosys Springboard",
    location: "Remote",
    period: "08/2025 – 10/2025",
    type: "Internship",
    summary: "Built an AI-powered Sales Call Assistant with real-time speech recognition, CRM integration, and automated post-call analytics.",
    bullets: [
      "Attained 89.7% transcription accuracy using Groq Whisper-large-v3 for real-time sales call speech recognition.",
      "Connected Google Sheets CRM data to retrieve customer profiles and automate call-data logging.",
      "Enabled 4 core capabilities: sentiment analysis, personalized product recommendations, objection handling, and automated post-call summaries through Streamlit.",
    ],
    technologies: ["Python", "Groq Whisper-large-v3", "Streamlit", "Google Sheets CRM", "Sentiment Analysis"],
  },
  {
    id: "exp-studenttribe",
    role: "AI Data Annotation Intern",
    organization: "Student Tribe (In Association with Tao Digital)",
    location: "Hyderabad",
    period: "06/2026 – 07/2026",
    type: "Internship",
    summary: "Validated multi-attribute video datasets frame by frame for machine learning vision models.",
    bullets: [
      "Validated video datasets frame by frame, checking 6 attributes: head, face, torso, occlusion, yaw, and pitch.",
      "Identified and corrected video annotation inconsistencies by following labeling guidelines and reviewing attribute values to maintain dataset quality.",
      "Prepared quality-checked video data for machine learning model training and evaluation.",
    ],
    technologies: ["Video Annotation", "Computer Vision QA", "Attribute Labeling", "Data Quality Control"],
  },
];

export const PROJECTS: ProjectItem[] = [
  // Generative AI and Automation (Projects 1-4)
  {
    id: "proj-technova",
    title: "TechNova Production-Ready AI Customer Support Chatbot",
    tagline: "LangGraph-based chatbot using NVIDIA NIM and tool calling for automated support workflows",
    category: "Generative AI & Automation",
    description: "Built a chatbot supporting order status, returns, warranty, and shipping workflows. Achieved 100% correctness on a 10-question test set and reduced input tokens by 78.81% through conversation-history optimization. Implemented fallback and retry mechanisms.",
    fullOverview: "Built a LangGraph-based chatbot using NVIDIA NIM and tool calling for 4 workflows: order status, returns, warranty, and shipping. Achieved 100% correctness on a 10-question test set while monitoring latency, token usage, failures, and user feedback. Implemented fallback and retry mechanisms, reducing input tokens by 78.81% through conversation history optimization; deployed on Streamlit Community Cloud.",
    technologies: ["Python", "LangChain", "LangGraph", "NVIDIA NIM", "LangSmith", "Streamlit"],
    measurableResults: [
      "100% correctness on a 10-question test set",
      "Reduced input tokens by 78.81% through conversation-history optimization",
      "Automated 4 customer workflows: order status, returns, warranty, shipping",
      "Implemented fallback and retry mechanisms with LangSmith observability",
    ],
    keyHighlight: "100% correctness on test set & 78.81% token reduction",
    image: "/src/assets/images/project_rag_ai_1792593659120.jpg",
    githubUrl: "https://github.com/Sanju0714",
    demoUrl: "https://widow-sandblast-pasty.ngrok-free.dev/docs",
    featured: true,
  },
  {
    id: "proj-order-to-cash",
    title: "AI-Powered Order-to-Cash Multi-Agent System",
    tagline: "Collaborative 4-agent system for order validation, inventory, invoices, and risk checks",
    category: "Generative AI & Automation",
    description: "Built a workflow with specialized agents for order validation, inventory verification, payment-risk assessment, and AI reasoning. Designed a 5-stage automated process and a Streamlit interface.",
    fullOverview: "Orchestrated 4 specialized agents for order validation, inventory verification, payment-risk assessment, and AI reasoning. Designed a 5-stage workflow for order validation, inventory checks, invoice generation, risk assessment, and AI-generated explanations. Created an interactive Streamlit interface to process sample orders, generate invoices, and display risk levels and agent outputs.",
    technologies: ["Python", "Groq API", "LLMs", "Multi-Agent AI", "Streamlit"],
    measurableResults: [
      "4 specialized agents for order validation, inventory, risk & reasoning",
      "Designed a 5-stage automated workflow from order checks to invoice generation",
      "Interactive Streamlit interface with dynamic invoice generation & risk display",
    ],
    keyHighlight: "4 specialized agents across 5-stage automated process",
    image: "/src/assets/images/project_vision_ai_1792593660834.jpg",
    githubUrl: "https://github.com/Sanju0714",
    featured: true,
  },
  {
    id: "proj-email-to-action",
    title: "Email-to-Action AI Agent",
    tagline: "LLM-powered email processing system with 5 intent categories and 70% confidence threshold",
    category: "Generative AI & Automation",
    description: "Classified customer emails into 5 intent categories and triggered automated actions for invoice logging, draft replies, spam marking, and human review using a 70% confidence threshold. Included audit logging for traceability.",
    fullOverview: "Built an LLM-powered email processing system to classify messages into 5 intent categories: Invoice Submission, Payment Query, Dispute, Spam, and Ambiguous. Configured 5 automated actions for invoice logging, draft replies, follow-up tasks, spam marking, and human review, using a 70% confidence threshold to flag uncertain classifications. Developed an interactive Streamlit interface and JSON-based audit logging to record email classifications, confidence scores, reasons, and actions for traceability.",
    technologies: ["Python", "Groq API", "LLMs", "Streamlit", "JSON"],
    measurableResults: [
      "5 intent categories: Invoice Submission, Payment Query, Dispute, Spam, Ambiguous",
      "5 automated operational actions: invoice logging, draft replies, follow-up, spam, review",
      "70% confidence threshold to flag uncertain classifications",
      "JSON-based audit logging for confidence scores, reasons, and actions",
    ],
    keyHighlight: "70% confidence threshold & JSON audit logging",
    image: "/src/assets/images/project_rag_ai_1792593659120.jpg",
    githubUrl: "https://github.com/Sanju0714",
    featured: true,
  },
  {
    id: "proj-customer-retention",
    title: "Customer Retention & Campaign Automation System",
    tagline: "Predictive churn modeling combined with LLM-generated retention strategies and campaigns",
    category: "Generative AI & Automation",
    description: "Built a customer retention tool predicting churn risk using machine learning, generating tailored retention strategies with an LLM, and generating marketing campaigns.",
    fullOverview: "Developed an end-to-end customer retention and marketing automation tool using Python, machine learning, and the Groq API. Predicts customer churn risk from behavioral features, analyzes churn drivers, and prompts an LLM to generate personalized customer retention strategies and multi-channel campaign messaging, presented in an interactive Streamlit application.",
    technologies: ["Python", "Machine Learning", "Groq API", "Streamlit"],
    measurableResults: [
      "Predicts customer churn risk using machine learning classification",
      "Generates personalized retention strategies via LLM reasoning",
      "Automates tailored marketing campaign copy across customer segments",
      "Interactive Streamlit dashboard for customer profile inspection",
    ],
    keyHighlight: "Churn prediction & LLM-tailored campaign automation",
    image: "/src/assets/images/project_analytics_ai_1792593659438.jpg",
    featured: false,
  },

  // Data Science and Analytics (Projects 5-7)
  {
    id: "proj-eazydiner-eda",
    title: "EazyDiner Restaurant Data Analysis",
    tagline: "Exploratory data analysis on 1,077 restaurant records across top Indian cities",
    category: "Data Science & Analytics",
    description: "Exploratory data analysis on 1,077 restaurant records across top Indian cities. Analyzed ratings, costs, cuisines, and location trends. Found weak correlation (r ≈ 0.036) between dining cost and restaurant rating.",
    fullOverview: "Conducted comprehensive exploratory data analysis on 1,077 restaurant records across major Indian metropolitan areas using Python, Pandas, NumPy, Matplotlib, and Seaborn. Analyzed ratings, costs, popular cuisines, and geographical trends. Uncovered a weak correlation (r ≈ 0.036) between dining cost and restaurant rating, demonstrating that higher pricing does not correspond to higher diner satisfaction.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    measurableResults: [
      "1,077 restaurant records analyzed across top Indian cities",
      "Identified weak correlation (r ≈ 0.036) between dining cost and rating",
      "Synthesized cuisine distribution, location patterns, and pricing tiers",
      "Comprehensive visualizations created with Matplotlib and Seaborn",
    ],
    keyHighlight: "1,077 records analyzed & r ≈ 0.036 cost-rating correlation",
    image: "/src/assets/images/project_analytics_ai_1792593659438.jpg",
    featured: true,
  },
  {
    id: "proj-blinkit-sales",
    title: "BlinkIT Sales Dashboard",
    tagline: "Business analytics dashboard analyzing 1.20M in sales and 75.11K avg outlet sales",
    category: "Data Science & Analytics",
    description: "Analyzed 1.20M in sales across multiple outlet tiers and locations, tracking average sales of 75.11K per outlet, customer ratings, item visibility, and fat-content distributions.",
    fullOverview: "Developed a comprehensive sales analytics dashboard evaluating 1.20M in total sales across diverse outlet sizes, tiers, and locations. Tracked average sales of 75.11K per outlet, customer rating distributions, item visibility metrics, and sales segmented by fat content. Delivered actionable retail insights into outlet performance and inventory optimization.",
    technologies: ["Power BI", "Excel", "SQL", "Python"],
    measurableResults: [
      "Analyzed 1.20M in total grocery and retail sales",
      "Tracked 75.11K average sales across multiple outlet locations and tiers",
      "Segmented items by fat content, visibility score, and customer ratings",
      "Interactive business intelligence visual dashboard for retail KPIs",
    ],
    keyHighlight: "1.20M sales analyzed & 75.11K avg outlet sales tracked",
    image: "/src/assets/images/project_analytics_ai_1792593659438.jpg",
    featured: true,
  },
  {
    id: "proj-crop-yield",
    title: "Agricultural Crop Yield Analysis",
    tagline: "Data cleaning, exploratory analysis, and feature correlation across seasonal weather and soil data",
    category: "Data Science & Analytics",
    description: "Conducted data cleaning, exploratory analysis, and feature correlation to examine factors impacting crop yield across seasonal weather and soil datasets.",
    fullOverview: "Analyzed agricultural datasets by conducting rigorous data cleaning, missing value handling, and exploratory analysis. Evaluated feature correlations between seasonal weather parameters (temperature, rainfall), soil quality metrics, and crop yields to extract agricultural insights for yield prediction and crop management.",
    technologies: ["Python", "Pandas", "Scikit-Learn", "Matplotlib"],
    measurableResults: [
      "Evaluated feature correlations between weather, soil, and crop yield",
      "Cleaned and preprocessed multi-attribute agricultural datasets",
      "Visualized seasonal rainfall and temperature impacts on harvest yields",
    ],
    keyHighlight: "Weather & soil feature correlation on seasonal yield data",
    image: "/src/assets/images/project_analytics_ai_1792593659438.jpg",
    featured: false,
  },

  // Machine Learning and NLP (Projects 8-12)
  {
    id: "proj-sms-classifier",
    title: "Spam & Ham SMS Classifier",
    tagline: "Machine learning text preprocessing and classification evaluated on 5,157 messages",
    category: "Machine Learning & NLP",
    description: "Processed 5,572 SMS records, removed duplicates to retain 5,157 messages, and extracted 5,000 TF-IDF features. Evaluated Naive Bayes, Logistic Regression, and Linear SVM, achieving 97.48% accuracy, 84.38% recall, and 89.26% F1-score with Linear SVM.",
    fullOverview: "Processed 5,572 SMS records, removed duplicates to retain 5,157 messages, and performed text preprocessing for spam detection. Extracted 5,000 TF-IDF features and evaluated 3 machine learning models: Naive Bayes, Logistic Regression, and Linear SVM. Recorded 97.48% accuracy, 84.38% recall, and 89.26% F1-score with Linear SVM on a 1,032-message test set.",
    technologies: ["Python", "NLP", "Scikit-Learn", "TF-IDF", "Streamlit"],
    measurableResults: [
      "97.48% accuracy with Linear SVM on a 1,032-message test set",
      "84.38% recall and 89.26% F1-score with Linear SVM",
      "Extracted 5,000 TF-IDF features from 5,157 deduplicated messages",
      "Compared 3 models: Naive Bayes, Logistic Regression, and Linear SVM",
    ],
    keyHighlight: "97.48% accuracy & 89.26% F1-score with Linear SVM",
    image: "/src/assets/images/project_rag_ai_1792593659120.jpg",
    githubUrl: "https://github.com/Sanju0714",
    featured: true,
  },
  {
    id: "proj-heart-disease",
    title: "Heart Disease Prediction",
    tagline: "Predictive modeling on patient clinical indicators achieving 86.1% accuracy with Random Forest",
    category: "Machine Learning & NLP",
    description: "Built and evaluated classification models on patient clinical indicators to predict cardiac risk, achieving 86.1% accuracy with Random Forest as an academic predictive modeling project.",
    fullOverview: "Conducted an academic predictive modeling project to assess heart disease risk from clinical health indicators (including blood pressure, cholesterol, heart rate, and chest pain type). Cleaned patient data, performed exploratory data analysis and feature scaling, and trained classification models, achieving 86.1% accuracy with Random Forest.",
    technologies: ["Python", "Scikit-Learn", "Pandas", "Random Forest"],
    measurableResults: [
      "Achieved 86.1% classification accuracy using Random Forest",
      "Analyzed clinical attributes including resting BP, cholesterol, and max heart rate",
      "Evaluated model precision, recall, and confusion matrix metrics",
    ],
    keyHighlight: "86.1% accuracy with Random Forest classifier",
    image: "/src/assets/images/project_vision_ai_1792593660834.jpg",
    featured: false,
  },
  {
    id: "proj-ecommerce-return",
    title: "E-commerce Return Prediction",
    tagline: "Product return propensity modeling on 34,500 orders comparing XGBoost and ANN",
    category: "Machine Learning & NLP",
    description: "Analyzed 34,500 e-commerce orders to predict product return propensity, comparing tree-based algorithms (XGBoost F1 0.1349) and Artificial Neural Networks (77.55% accuracy) on imbalanced data.",
    fullOverview: "Analyzed 34,500 real-world e-commerce orders to predict product return likelihood under class imbalance conditions. Handled skewed return distributions, engineered customer and product level features, and compared gradient-boosted trees against deep learning architectures. Evaluated performance, recording an XGBoost F1-score of 0.1349 and an Artificial Neural Network (ANN) accuracy of 77.55%.",
    technologies: ["Python", "Scikit-Learn", "XGBoost", "Artificial Neural Networks (ANN)"],
    measurableResults: [
      "Analyzed 34,500 order records with class-imbalanced return rates",
      "Benchmarked XGBoost (F1-score: 0.1349) and ANN architecture (77.55% accuracy)",
      "Applied specialized preprocessing and feature scaling for imbalanced classification",
    ],
    keyHighlight: "34,500 orders evaluated & ANN 77.55% benchmark",
    image: "/src/assets/images/project_analytics_ai_1792593659438.jpg",
    featured: false,
  },
  {
    id: "proj-shakespeare-lstm",
    title: "Shakespeare Next Word Prediction using LSTM",
    tagline: "Sequential language model trained on Shakespeare corpus with 204,088 tokens",
    category: "Machine Learning & NLP",
    description: "Trained an LSTM language model on Shakespeare's Hamlet corpus comprising 204,088 tokens, achieving 9.21% validation accuracy in character/word sequential prediction.",
    fullOverview: "Developed a deep learning sequential next-word prediction model using Long Short-Term Memory (LSTM) recurrent neural networks in TensorFlow and Keras. Tokenized and preprocessed Shakespeare's Hamlet corpus comprising 204,088 tokens. Designed an embedding and stacked LSTM architecture, achieving 9.21% validation accuracy on challenging open-vocabulary archaic text prediction.",
    technologies: ["Python", "TensorFlow", "Keras", "LSTM", "NLP"],
    measurableResults: [
      "Trained on Shakespeare's corpus comprising 204,088 tokens",
      "9.21% validation accuracy on open-vocabulary sequential prediction",
      "Implemented sequence tokenization, sliding-window generators, and word embeddings",
    ],
    keyHighlight: "Trained on 204,088 tokens with 9.21% validation accuracy",
    image: "/src/assets/images/project_rag_ai_1792593659120.jpg",
    featured: false,
  },
  {
    id: "proj-dravidian-stopwords",
    title: "Stopword Removal in Dravidian Languages",
    tagline: "Custom multilingual NLP preprocessing pipelines across Telugu, Tamil, Kannada, and Malayalam",
    category: "Machine Learning & NLP",
    description: "Built custom NLP preprocessing pipelines for stopword identification and removal across Dravidian languages (Telugu, Tamil, Kannada, Malayalam) to enhance text classification and retrieval tasks.",
    fullOverview: "Engineered custom natural language processing pipelines specifically focused on low-resource and morphologically rich Dravidian languages, including Telugu, Tamil, Kannada, and Malayalam. Curated frequency-based and linguistically validated stopword lexicons, designed tokenizers, and demonstrated reduction in noise for downstream text classification and semantic retrieval.",
    technologies: ["Python", "NLP", "NLTK", "Indic NLP"],
    measurableResults: [
      "Supported 4 Dravidian languages: Telugu, Tamil, Kannada, Malayalam",
      "Curated linguistically verified stopword dictionaries for Indian languages",
      "Integrated custom tokenization pipelines for morphological root preservation",
    ],
    keyHighlight: "Custom multilingual preprocessing across 4 Dravidian languages",
    image: "/src/assets/images/project_vision_ai_1792593660834.jpg",
    featured: false,
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "cert-amazon-ml",
    name: "Amazon Machine Learning Summer School 2026",
    issuer: "Amazon",
    issueDate: "2026",
  },
  {
    id: "cert-iit-madras",
    name: "IIT Madras Foundation Level - B.S. in Data Science and Applications",
    issuer: "Indian Institute of Technology, Madras (IITM)",
  },
  {
    id: "cert-innomatics-ann",
    name: "Artificial Neural Network",
    issuer: "Innomatics Research Labs",
  },
  {
    id: "cert-innomatics-ml",
    name: "Applied Machine Learning",
    issuer: "Innomatics Research Labs",
  },
  {
    id: "cert-innomatics-eda",
    name: "Exploratory Data Analysis (EDA)",
    issuer: "Innomatics Research Labs",
  },
  {
    id: "cert-innomatics-sql",
    name: "Data Analysis with MySQL",
    issuer: "Innomatics Research Labs",
  },
];

export const UPLOADED_RESUME = {
  name: PERSONAL_INFO.name,
  email: PERSONAL_INFO.email,
  phone: PERSONAL_INFO.phone,
  linkedin: PERSONAL_INFO.linkedin,
  github: PERSONAL_INFO.github,
  profile: EDUCATION_INFO.bio,
  education: [
    {
      degree: EDUCATION_INFO.primary.degree,
      institution: EDUCATION_INFO.primary.institution,
      location: EDUCATION_INFO.primary.location,
      period: EDUCATION_INFO.primary.period,
      cgpa: EDUCATION_INFO.primary.cgpa,
    },
    {
      degree: EDUCATION_INFO.secondary.degree,
      institution: EDUCATION_INFO.secondary.institution,
      location: EDUCATION_INFO.secondary.location,
      period: EDUCATION_INFO.secondary.status,
      cgpa: "",
    },
    {
      degree: EDUCATION_INFO.tertiary.degree,
      institution: EDUCATION_INFO.tertiary.institution,
      location: EDUCATION_INFO.tertiary.location,
      period: EDUCATION_INFO.tertiary.status,
      cgpa: "",
    },
  ],
  skills: SKILL_CATEGORIES.map((cat) => ({
    category: cat.category,
    items: cat.skills.map((s) => s.name).join(", "),
  })),
  internships: EXPERIENCES.map((exp) => ({
    role: exp.role,
    company: exp.organization,
    period: exp.period,
    location: exp.location,
    bullets: exp.bullets,
  })),
  projects: PROJECTS.map((proj) => ({
    title: proj.title,
    stack: proj.technologies.join(", "),
    bullets: proj.fullOverview ? [proj.fullOverview] : proj.measurableResults,
  })),
  certificates: CERTIFICATIONS.map((cert) => ({
    title: cert.name,
    issuer: cert.issuer,
  })),
};
