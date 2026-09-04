import { useEffect, useRef, useState } from 'react';
import { matchIntent, STARTER_SUGGESTIONS } from '../chatbotKnowledge';

interface Message {
  role: 'bot' | 'user';
  text: string;
}

const GREETING: Message = {
  role: 'bot',
  text: "Hey, I'm Logadeep's AI assistant 👋 Ask me about his skills, projects, experience, or how to get in touch.",
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [suggestions, setSuggestions] = useState<string[]>(STARTER_SUGGESTIONS);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || typing) return;

    setMessages((m) => [...m, { role: 'user', text: trimmed }]);
    setSuggestions([]);
    setInput('');
    setTyping(true);

    const { response, suggestions: next } = matchIntent(trimmed);
    const delay = 400 + Math.random() * 400;
    setTimeout(() => {
      setMessages((m) => [...m, { role: 'bot', text: response }]);
      setSuggestions(next ?? []);
      setTyping(false);
    }, delay);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    send(input);
  }

  return (
    <div className="chatbot-root">
      {open && (
        <div className="chatbot-panel" role="dialog" aria-label="Chat with Logadeep's AI assistant">
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <span className="chatbot-status-dot"></span>
              <div>
                <div className="chatbot-title">
                  Ask about Logadeep
                  <span className="chatbot-badge">Under Development</span>
                </div>
                <div className="chatbot-subtitle">AI assistant · answers instantly</div>
              </div>
            </div>
            <button className="chatbot-close" onClick={() => setOpen(false)} aria-label="Close chat">
              ✕
            </button>
          </div>

          <div className="chatbot-messages" ref={listRef}>
            {messages.map((m, i) => (
              <div key={i} className={`chatbot-msg chatbot-msg-${m.role}`}>
                {m.text}
              </div>
            ))}
            {typing && (
              <div className="chatbot-msg chatbot-msg-bot chatbot-typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </div>

          {suggestions.length > 0 && (
            <div className="chatbot-suggestions">
              {suggestions.map((s) => (
                <button key={s} className="chatbot-suggestion" onClick={() => send(s)}>
                  {s}
                </button>
              ))}
            </div>
          )}

          <form className="chatbot-input-row" onSubmit={handleSubmit}>
            <input
              className="chatbot-input"
              type="text"
              placeholder="Ask a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoComplete="off"
            />
            <button className="chatbot-send" type="submit" aria-label="Send message" disabled={!input.trim()}>
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                <path d="M2 12L12 2M12 2H6M12 2V8" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
              </svg>
            </button>
          </form>
        </div>
      )}

      <button
        className="chatbot-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Open chat with AI assistant'}
      >
        {open ? (
          '✕'
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        )}
      </button>
    </div>
  );
}
