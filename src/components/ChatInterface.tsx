import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  Trash2,
  Sparkles,
  Bot,
  User,
  AlertCircle,
  HelpCircle,
  RefreshCw,
} from "lucide-react";
import { ChatMessage, Language } from "../types";
import { SUGGESTED_QUESTIONS } from "../data/festivalData";
import { MessageBubble } from "./MessageBubble";
import { VoiceInput } from "./VoiceInput";
import { sendChatMessage } from "../services/gemini";

interface ChatInterfaceProps {
  language: Language;
  messages: ChatMessage[];
  setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
  onStartQuizTab?: () => void;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({
  language,
  messages,
  setMessages,
  onStartQuizTab,
}) => {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorToast, setErrorToast] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const isTe = language === "te";
  const suggestedList = isTe ? SUGGESTED_QUESTIONS.te : SUGGESTED_QUESTIONS.en;

  // Auto scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query || isLoading) return;

    // Check if user specifically requested a quiz
    if (
      (query.toLowerCase().includes("quiz") || query.includes("క్విజ్")) &&
      onStartQuizTab
    ) {
      // Add user message, prompt quiz navigation
      const userMsg: ChatMessage = {
        id: `user-${Date.now()}`,
        sender: "user",
        text: query,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      const aiMsg: ChatMessage = {
        id: `ai-${Date.now() + 1}`,
        sender: "ai",
        text: isTe
          ? "తప్పకుండా! మన 'క్విజ్' విభాగంలో 10 ఆసక్తికరమైన ప్రశ్నలతో కూడిన వినాయక చవితి క్విజ్ సిద్ధంగా ఉంది. క్రింది బటన్ నొక్కి క్విజ్ ఆడండి!"
          : "Certainly! Our dedicated Quiz section features a 10-question multiple-choice challenge covering Ganesha lore, traditions, and eco-friendly practices. Let's test your knowledge!",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, userMsg, aiMsg]);
      setInputText("");
      return;
    }

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsLoading(true);
    setErrorToast(null);

    try {
      const response = await sendChatMessage({
        message: query,
        language,
        history: messages,
      });

      const aiMessage: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: response.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        source: response.source,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err: any) {
      setErrorToast(err?.message || "Failed to communicate with AI");
    } finally {
      setIsLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleClearChat = () => {
    const initialGreeting: ChatMessage = {
      id: "initial-welcome",
      sender: "ai",
      text: isTe
        ? "నమస్కారం! నేను గణేష్ AI. వినాయక చవితి విశిష్టత, పూజా విధానం, మోదకాల ప్రాముఖ్యత మరియు మన కళాశాల వేడుకల గురించి నన్ను ఏదైనా అడగవచ్చు."
        : "Namaste! I am GANESH AI. Ask me anything about Lord Ganesha's stories, rituals, eco-friendly celebrations, or our college festival events.",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages([initialGreeting]);
  };

  const handleSuggestedClick = (question: string) => {
    setInputText(question);
    handleSendMessage(question);
  };

  const handleVoiceRecognized = (recognizedText: string) => {
    setInputText((prev) => (prev ? `${prev} ${recognizedText}` : recognizedText));
  };

  return (
    <div className="max-w-4xl mx-auto py-4 px-3 sm:px-4">
      {/* Chat Container Card */}
      <div className="rounded-3xl bg-white/95 border border-amber-200/90 shadow-xl overflow-hidden flex flex-col h-[78vh] sm:h-[82vh]">
        {/* Chat Header Bar */}
        <div className="px-4 sm:px-6 py-3.5 bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 text-white flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center border border-white/30 text-lg">
              🕉️
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-extrabold text-base sm:text-lg tracking-tight font-serif">
                  {isTe ? "గణేష్ AI చాట్" : "Ganesh AI Assistant"}
                </h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-200/30 text-white border border-white/30">
                  {isTe ? "సహాయకుడు" : "Online"}
                </span>
              </div>
              <p className="text-[11px] text-amber-100 font-medium hidden sm:block">
                {isTe ? "సంప్రదాయాలు • కథలు • పర్యావరణహితం • కాలేజ్ ఫెస్ట్" : "Traditions • Stories • Eco-Friendly • College Schedule"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="clear-chat-btn"
              onClick={handleClearChat}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-semibold transition-colors border border-white/20"
              title={isTe ? "చాట్ క్లియర్ చేయండి" : "Clear conversation"}
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isTe ? "క్లియర్" : "Clear Chat"}</span>
            </button>
          </div>
        </div>

        {/* Messages Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-linear-to-b from-amber-50/40 via-white to-amber-50/30 space-y-3">
          {messages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} language={language} />
          ))}

          {/* Typing / Loading animation */}
          {isLoading && (
            <div className="flex items-center gap-2 text-stone-500 text-xs sm:text-sm italic py-2 pl-2">
              <div className="w-7 h-7 rounded-full bg-amber-500/20 text-orange-600 flex items-center justify-center">
                <Sparkles className="w-4 h-4 animate-spin text-orange-600" />
              </div>
              <span>
                {isTe
                  ? "గణేష్ AI సమాధానం సిద్ధం చేస్తోంది..."
                  : "Ganesh AI is thinking with wisdom..."}
              </span>
            </div>
          )}

          {/* Error Notification Banner if any */}
          {errorToast && (
            <div
              role="alert"
              className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2"
            >
              <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
              <span>{errorToast}</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Questions Carousel / Pill Bar */}
        <div className="px-4 py-2 bg-amber-50/80 border-t border-amber-200/70 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-amber-800 shrink-0 flex items-center gap-1">
              <HelpCircle className="w-3 h-3 text-orange-600" />
              {isTe ? "సూచించిన ప్రశ్నలు:" : "Suggested:"}
            </span>
            {suggestedList.slice(0, 5).map((q, idx) => (
              <button
                key={idx}
                id={`suggested-q-${idx}`}
                onClick={() => handleSuggestedClick(q)}
                disabled={isLoading}
                className="whitespace-nowrap px-3 py-1 rounded-full text-xs font-semibold bg-white text-stone-700 hover:text-orange-600 hover:bg-orange-50 border border-amber-200 shadow-2xs transition-all shrink-0 cursor-pointer disabled:opacity-50"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Message Input & Voice Controls Bar */}
        <div className="p-3 sm:p-4 bg-white border-t border-amber-200/80">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2 sm:gap-3"
          >
            {/* Voice Input Microphone Button */}
            <VoiceInput
              language={language}
              onSpeechResult={handleVoiceRecognized}
              disabled={isLoading}
            />

            {/* Text Input Field */}
            <div className="relative flex-1">
              <input
                ref={inputRef}
                id="chat-message-input"
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={
                  isTe
                    ? "గణేశుడి కథలు, ఆచారాలు లేదా వేడుకల గురించి అడగండి..."
                    : "Ask about Ganesha stories, rituals, eco-friendly tips..."
                }
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-2xl bg-amber-50/50 border border-amber-300 text-stone-900 placeholder-stone-400 text-sm sm:text-base focus:outline-hidden focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
              />
            </div>

            {/* Send Button */}
            <button
              id="send-message-btn"
              type="submit"
              disabled={!inputText.trim() || isLoading}
              className={`p-3 sm:px-5 rounded-2xl font-bold flex items-center justify-center gap-1.5 transition-all duration-150 ${
                inputText.trim() && !isLoading
                  ? "bg-linear-to-r from-orange-500 to-amber-600 text-white shadow-md shadow-orange-500/20 hover:from-orange-600 hover:to-amber-700 cursor-pointer"
                  : "bg-amber-100 text-stone-400 cursor-not-allowed border border-amber-200"
              }`}
              title={isTe ? "సందేశం పంపండి" : "Send message"}
              aria-label="Send message"
            >
              <Send className="w-5 h-5" />
              <span className="hidden sm:inline text-sm">{isTe ? "పంపు" : "Send"}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
