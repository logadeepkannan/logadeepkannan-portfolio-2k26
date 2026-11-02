export interface ChatIntent {
  id: string;
  patterns: string[];
  response: string;
  suggestions?: string[];
}

export const STARTER_SUGGESTIONS = [
  'What do you do?',
  'What are your skills?',
  'Show me your projects',
  'How can I contact you?',
];

export const INTENTS: ChatIntent[] = [
  {
    id: 'greeting',
    patterns: ['hi', 'hello', 'hey', 'yo', 'sup', 'good morning', 'good evening', 'good afternoon'],
    response:
      "Hey, I'm Logadeep's AI assistant 👋 Ask me about his skills, projects, experience, or how to get in touch.",
    suggestions: STARTER_SUGGESTIONS,
  },
  {
    id: 'about',
    patterns: [
      'who are you', 'about you', 'about logadeep', 'introduce yourself', 'what do you do',
      'tell me about', 'who is logadeep', 'background', 'bio',
    ],
    response:
      "I'm Logadeep Kannan, a Microsoft Power Platform Developer based in Chennai, Tamil Nadu, India. I build intelligent, low-code solutions with Power Apps, Power Automate, and Power BI, and I'm also comfortable across Microsoft 365, Copilot Studio, and frontend development with React. 2+ years of professional experience, 12+ projects delivered, 4+ clients served.",
    suggestions: ['What are your skills?', 'Where have you worked?', 'Show me your projects'],
  },
  {
    id: 'skills-general',
    patterns: [
      'skill', 'skills', 'tech stack', 'technologies', 'what can you do', 'what do you know',
      'expertise', 'tools', 'capabilities',
    ],
    response:
      "My core stack: Power Apps, Power Automate, Power BI, Power Pages, and Dataverse for the Power Platform; Copilot Studio, Azure OpenAI, and Bot Framework for AI/Copilot work; SharePoint, Teams, and Azure AD for Microsoft 365; SPFx, PnP JS, and Fluent UI for custom SharePoint add-ins; plus React, TypeScript, and Python/MySQL on the dev side.",
    suggestions: ['Do you know Power Apps?', 'Do you know React?', 'Do you know Copilot Studio?'],
  },
  {
    id: 'skills-power-platform',
    patterns: ['power app', 'power automate', 'power bi', 'power pages', 'dataverse', 'power fx', 'flows'],
    response:
      "Yes — Power Platform is my main focus. I build Canvas Apps and model-driven apps on Dataverse, design multi-stage Power Automate workflows, and publish Power BI dashboards with row-level security and custom DAX measures.",
    suggestions: ['Show me your projects', 'Where have you worked?'],
  },
  {
    id: 'skills-copilot',
    patterns: ['copilot studio', 'copilot', 'chatbot', 'generative ai', 'conversational ai', 'bot framework', 'azure openai', 'prompt engineering'],
    response:
      "I work with Copilot Studio, Azure OpenAI, and the Bot Framework to build conversational AI bots — including an AI-powered chatbot integrated with Microsoft Teams and SharePoint that answers questions using content across an entire intranet.",
    suggestions: ['Show me your projects', 'What are your skills?'],
  },
  {
    id: 'skills-m365',
    patterns: ['sharepoint', 'microsoft 365', 'm365', 'teams', 'outlook', 'azure ad', 'onedrive', 'spfx', 'pnp js'],
    response:
      "I do a lot of SharePoint and Microsoft 365 development — custom SPFx web parts, intranet sites, Teams integrations, and Azure AD-secured apps, built with PnP JS and Fluent UI.",
    suggestions: ['Show me your projects', 'What are your skills?'],
  },
  {
    id: 'skills-frontend',
    patterns: ['react', 'typescript', 'javascript', 'html', 'css', 'frontend', 'front-end', 'front end', 'python', 'mysql', 'backend', 'back-end'],
    response:
      "On the frontend I work with React, TypeScript, HTML5, and CSS3 — I've built responsive web interfaces and SPFx web parts with React. On the backend/data side I use Python and MySQL.",
    suggestions: ['Show me your projects', 'Where have you worked?'],
  },
  {
    id: 'certifications',
    patterns: [
      'certification', 'certifications', 'certified', 'credential', 'credentials', 'pl-900', 'pl 900',
      'badge', 'badges', 'microsoft certified',
    ],
    response:
      "I'm Microsoft Certified: Power Platform Fundamentals (PL-900), earned in 2026, and I also hold the Copilot Studio Agent Academy — Recruit badge from Microsoft (2026). You can see both in the Certifications section of this page.",
    suggestions: ['What are your skills?', 'Where have you worked?'],
  },
  {
    id: 'experience',
    patterns: [
      'experience', 'work history', 'where have you worked', 'career', 'job', 'jobs', 'employer',
      'employment', 'itrident', 'freelance',
    ],
    response:
      "Currently I'm a Microsoft 365 Developer at ItTrident Solutions (2024–Present), where I've deployed 20+ Canvas/model-driven apps serving 500+ daily active users and cut manual processing time by 65% with Power Automate. Before that I freelanced as a frontend developer (React/TypeScript, 2023–2024) and a graphic designer (2022–2024), and I've been running technical workshops and talks on Microsoft 365 since 2022.",
    suggestions: ['What are your skills?', 'How can I contact you?'],
  },
  {
    id: 'projects-general',
    patterns: [
      'project', 'projects', 'portfolio', 'what have you built', 'built', 'work samples', 'case studies',
    ],
    response:
      "A few highlights: an IT Help Desk Portal that cut response time via Power Automate + SharePoint automation, a Customer Relationship Management Canvas App, a corporate SharePoint intranet, an AI-powered Copilot chatbot (AskHub), a Power Automate timelog automation, and a custom SPFx announcement board deployed to 3,000+ users. Scroll down to the Projects section to see them all with the tech stack for each.",
    suggestions: ['Tell me about the chatbot project', 'What are your skills?'],
  },
  {
    id: 'projects-chatbot',
    patterns: ['askhub', 'chatbot project', 'chat bot project'],
    response:
      "AskHub is an AI-powered Copilot chatbot I built using Copilot Studio, integrated with Microsoft Teams and SharePoint. It gives instant, accurate answers by pulling content from across an entire intranet ecosystem, including all associated subsites.",
    suggestions: ['Show me your other projects', 'What are your skills?'],
  },
  {
    id: 'contact',
    patterns: [
      'contact', 'email', 'reach you', 'get in touch', 'reach out', 'message', 'connect', 'talk',
    ],
    response:
      "You can email me directly at logadeepkannan2024@gmail.com, or use the contact form at the bottom of this page — I usually respond within 24 hours. I'm based in Chennai, Tamil Nadu, India.",
    suggestions: ['Are you available for work?', 'Where can I find your LinkedIn?'],
  },
  {
    id: 'linkedin',
    patterns: ['linkedin', 'social', 'github', 'social media'],
    response:
      "You'll find links to my LinkedIn and GitHub in the Contact section at the bottom of this page.",
    suggestions: ['How can I contact you?'],
  },
  {
    id: 'availability',
    patterns: [
      'available', 'hire', 'hiring', 'freelance work', 'open to work', 'looking for work', 'rates', 'pricing', 'cost',
    ],
    response:
      "Yes, I'm currently available for work! For rates and project scoping, the best next step is to drop a message through the contact form or email me directly — I usually respond within 24 hours.",
    suggestions: ['How can I contact you?'],
  },
  {
    id: 'location',
    patterns: ['location', 'where are you based', 'where are you from', 'city', 'country', 'based in'],
    response: "I'm based in Chennai, Tamil Nadu, India.",
    suggestions: ['Are you available for work?', 'How can I contact you?'],
  },
  {
    id: 'resume',
    patterns: ['resume', 'cv', 'curriculum vitae'],
    response:
      "There's a resume link in the Contact section — or just email me at logadeepkannan2024@gmail.com and I'll send it over directly.",
    suggestions: ['How can I contact you?'],
  },
  {
    id: 'thanks',
    patterns: ['thanks', 'thank you', 'thx', 'appreciate it', 'cheers'],
    response: "You're welcome! Anything else you'd like to know about Logadeep's work?",
    suggestions: STARTER_SUGGESTIONS,
  },
  {
    id: 'bye',
    patterns: ['bye', 'goodbye', 'see you', 'later'],
    response: "Thanks for stopping by! Feel free to reach out through the contact form anytime. 👋",
  },
  {
    id: 'joke',
    patterns: ['joke', 'funny', 'are you human', 'are you real', 'are you ai', 'robot'],
    response:
      "I'm a lightweight bot running entirely in your browser — no server, no API keys, just keyword matching against Logadeep's portfolio content. For real conversation, the contact form gets you the actual human.",
    suggestions: ['How can I contact you?'],
  },
];

const FALLBACK_RESPONSE =
  "I'm not sure about that one — I can only answer questions about Logadeep's skills, projects, experience, and contact info. Try one of these, or use the contact form for anything else.";

function normalize(text: string): string {
  return text.toLowerCase().replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

export function matchIntent(input: string): { response: string; suggestions?: string[] } {
  const normalized = normalize(input);
  if (!normalized) {
    return { response: FALLBACK_RESPONSE, suggestions: STARTER_SUGGESTIONS };
  }

  let best: ChatIntent | null = null;
  let bestScore = 0;

  for (const intent of INTENTS) {
    let score = 0;
    for (const pattern of intent.patterns) {
      if (normalized.includes(pattern)) {
        score += pattern.split(' ').length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      best = intent;
    }
  }

  if (best) {
    return { response: best.response, suggestions: best.suggestions };
  }
  return { response: FALLBACK_RESPONSE, suggestions: STARTER_SUGGESTIONS };
}
