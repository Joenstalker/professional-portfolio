"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Message {
  role: "assistant" | "user";
  content: string;
}

interface AIChatbotProps {
  inline?: boolean;
}

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;/g, "'");
}

function renderInlineMarkdown(text: string, keyPrefix: string): React.ReactNode {
  const decoded = decodeHtmlEntities(text);
  const segments: React.ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|https?:\/\/[^\s]+)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let idx = 0;
  while ((match = regex.exec(decoded)) !== null) {
    if (match.index > last) {
      segments.push(decoded.slice(last, match.index));
    }
    const token = match[0];
    // **bold**
    if (token.startsWith("**") && token.endsWith("**") && token.length > 4) {
      segments.push(
        <strong key={`${keyPrefix}-b-${idx}`} className="font-semibold text-white">
          {token.slice(2, -2)}
        </strong>
      );
    }
    // [label](url) markdown link
    else if (token.startsWith("[") && token.includes("](") && token.endsWith(")")) {
      const bracketClose = token.indexOf("](");
      const label = token.slice(1, bracketClose);
      const url = token.slice(bracketClose + 2, -1);
      segments.push(
        <a
          key={`${keyPrefix}-l-${idx}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 hover:underline underline-offset-2"
        >
          {label}
        </a>
      );
    }
    // raw URL
    else if (token.startsWith("http://") || token.startsWith("https://")) {
      segments.push(
        <a
          key={`${keyPrefix}-u-${idx}`}
          href={token}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 hover:underline break-all"
        >
          {token}
        </a>
      );
    } else {
      segments.push(token);
    }
    last = match.index + token.length;
    idx++;
  }
  if (last < decoded.length) segments.push(decoded.slice(last));
  return segments;
}

const TypewriterMessage = ({ content }: { content: string }) => {
  const [displayedText, setDisplayedText] = React.useState("");
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    setDisplayedText("");
    setCurrentIndex(0);
  }, [content]);

  React.useEffect(() => {
    if (currentIndex < content.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + content[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 5);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, content]);

  return (
    <div className="whitespace-pre-wrap">
      {displayedText.split(/(!\[.*?\]\(.*?\))/g).map((part, i) => {
        const imgMatch = part.match(/!\[(.*?)\]\((.*?)\)/);
        if (imgMatch) {
          return (
            <div key={i} className="mt-4 rounded-xl overflow-hidden border border-white/10 shadow-lg">
              <img
                src={imgMatch[2]}
                alt={imgMatch[1]}
                className="w-full h-auto object-cover max-h-[200px]"
                onLoad={() => {
                  window.dispatchEvent(new CustomEvent("chat-scroll"));
                }}
              />
            </div>
          );
        }
        return (
          <React.Fragment key={i}>
            {renderInlineMarkdown(part, `seg-${i}`)}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export function AIChatbot({ inline = false }: AIChatbotProps) {
  const [isOpen, setIsOpen] = React.useState(inline);
  const [input, setInput] = React.useState("");
  const [messages, setMessages] = React.useState<Message[]>([
    { role: "assistant", content: "Hi! 👋 I'm Joenil's AI Assistant. How can I help you today?" }
  ]);
  const [isLoading, setIsLoading] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    };
    
    window.addEventListener("chat-scroll", handleScroll);
    if (scrollRef.current) {
      handleScroll();
    }
    return () => window.removeEventListener("chat-scroll", handleScroll);
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) throw new Error("Failed to get response");

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.content }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, I encountered an error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const ChatContent = (
    <div className={cn(
      "flex flex-col overflow-hidden h-full",
      !inline && "mb-4 w-[calc(100vw-2rem)] sm:w-[400px] h-[500px] max-h-[calc(100dvh-120px)] glass-dark border border-white/10 rounded-2xl shadow-2xl"
    )}>
      {/* Header - only if floating */}
      {!inline && (
        <div className="p-4 border-b border-white/10 flex items-center justify-between bg-sky-500/10 shrink-0">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Portfolio Assistant</h3>
              <p className="text-[10px] text-sky-400 font-bold uppercase tracking-widest">AI Power</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors p-2 -mr-2">
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-transparent scrollbar-hide">
        {messages.map((m, i) => (
          <div key={i} className={cn("flex flex-col", m.role === "user" ? "items-end" : "items-start")}>
            <div className={cn(
              "max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed",
              m.role === "user" 
                ? "bg-sky-500 text-white rounded-tr-none" 
                : "bg-white/5 text-slate-300 border border-white/5 rounded-tl-none"
            )}>
              {m.role === "assistant" && i === messages.length - 1 ? (
                <TypewriterMessage content={m.content} />
              ) : (
                <div className="whitespace-pre-wrap">{m.content}</div>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none border border-white/5">
              <Loader2 className="w-4 h-4 text-sky-400 animate-spin" />
            </div>
          </div>
        )}
      </div>

      {/* Quick Suggestions - Always visible for first message or when idle */}
      {messages.length === 1 && (
         <div className="px-6 pb-4 flex flex-wrap gap-2 max-h-[120px] overflow-y-auto scrollbar-hide shrink-0">
            {[
              "Can I download your CV?",
              "Show me your location.",
              "Show me your projects.",
              "Where is the source code?",
              "What is the date today?",
              "Give me a random interview question.",
              "Does Joenil know React and Laravel?",
              "Show programming certificates.",
              "Which projects use Laravel?",
              "Tell me about TOPCIT.",
              "Tell me about the Dental Clinic System.",
              "What tech stack do you use?",
              "How can I contact you?",
              "What services do you offer?",
              "Do you install CCTV?",
              "Why should we hire you?"
            ].map(s => (
               <button 
                  key={s}
                  onClick={() => setInput(s)}
                  className="text-[10px] bg-white/5 hover:bg-white/10 border border-white/5 px-3 py-1.5 rounded-full text-slate-400 hover:text-white transition-all whitespace-nowrap"
               >
                  {s}
               </button>
            ))}
         </div>
      )}

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 bg-transparent flex space-x-2 shrink-0">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
          className="flex-1 bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-500/50 transition-colors placeholder:text-slate-600"
        />
        <Button type="submit" size="icon" disabled={isLoading} className="bg-sky-500 hover:bg-sky-600 rounded-xl h-11 w-11 shrink-0">
          <Send className="w-4 h-4" />
        </Button>
      </form>
    </div>
  );

  if (inline) return ChatContent;

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
          >
            {ChatContent}
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          size="icon"
          className="w-14 h-14 rounded-2xl shadow-2xl bg-sky-500 hover:bg-sky-600 transition-transform active:scale-95"
        >
          <MessageSquare className="w-6 h-6" />
        </Button>
      )}
    </div>
  );
}
