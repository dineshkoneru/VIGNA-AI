import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { ChatInterface } from "./components/ChatInterface";
import { Quiz } from "./components/Quiz";
import { FestivalKnowledge } from "./components/FestivalKnowledge";
import { EcoFriendlySection } from "./components/EcoFriendlySection";
import { CollegeCelebration } from "./components/CollegeCelebration";
import { Gallery } from "./components/Gallery";
import { FloatingDecorations } from "./components/FloatingDecorations";
import { SettingsModal } from "./components/SettingsModal";
import { ChatMessage, Language } from "./types";
import {
  MessageSquare,
  Flame,
  HelpCircle,
  BookOpen,
  Leaf,
  GraduationCap,
  Image as ImageIcon,
  Heart,
} from "lucide-react";

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>("welcome");
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("ganesh_ai_lang");
    return saved === "te" ? "te" : "en";
  });
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [voiceAudioEnabled, setVoiceAudioEnabled] = useState<boolean>(true);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  // Chat message state
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    return [
      {
        id: "initial-welcome",
        sender: "ai",
        text:
          language === "te"
            ? "నమస్కారం! నేను గణేష్ AI. వినాయక చవితి విశిష్టత, పురాణ కథలు, 21 పత్రి పూజ, మోదకాల అంతరార్థం మరియు మన కళాశాల వేడుకల గురించి నన్ను ఏదైనా అడగవచ్చు."
            : "Namaste! I am GANESH AI, your companion for Ganesh Chaturthi. Ask me anything about Lord Ganesha's stories, festival rituals, eco-friendly traditions, or our college celebrations!",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ];
  });

  // Persist language preference
  const handleSetLanguage = (newLang: Language) => {
    setLanguage(newLang);
    localStorage.setItem("ganesh_ai_lang", newLang);
  };

  const isTe = language === "te";

  // Navigation tab switcher with scroll to top
  const handleNavigate = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: `initial-${Date.now()}`,
        sender: "ai",
        text:
          language === "te"
            ? "నమస్కారం! నేను గణేష్ AI. వినాయక చవితి విశిష్టత, పూజా విధానం, మరియు మన కళాశాల వేడుకల గురించి నన్ను ఏదైనా అడగవచ్చు."
            : "Namaste! I am GANESH AI. Ask me anything about Lord Ganesha's stories, rituals, eco-friendly celebrations, or college events.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf6ef] text-stone-900 font-sans selection:bg-orange-500 selection:text-white relative pb-16 lg:pb-0">
      {/* Floating Festive Subtle Decorations */}
      <FloatingDecorations reducedMotion={reducedMotion} />

      {/* Main Sticky Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={handleNavigate}
        language={language}
        setLanguage={handleSetLanguage}
        openSettings={() => setIsSettingsOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        {currentTab === "welcome" && (
          <WelcomeScreen
            language={language}
            setLanguage={handleSetLanguage}
            onStartChat={() => handleNavigate("chat")}
            onNavigate={handleNavigate}
          />
        )}

        {currentTab === "chat" && (
          <ChatInterface
            language={language}
            messages={messages}
            setMessages={setMessages}
            onStartQuizTab={() => handleNavigate("quiz")}
          />
        )}

        {currentTab === "quiz" && (
          <Quiz
            language={language}
            onExploreKnowledge={() => handleNavigate("knowledge")}
          />
        )}

        {currentTab === "knowledge" && (
          <FestivalKnowledge language={language} />
        )}

        {currentTab === "eco" && (
          <EcoFriendlySection language={language} />
        )}

        {currentTab === "college" && (
          <CollegeCelebration
            language={language}
            onViewGallery={() => handleNavigate("gallery")}
          />
        )}

        {currentTab === "gallery" && (
          <Gallery language={language} />
        )}
      </main>

      {/* Mobile Bottom Navigation Bar for quick thumb access */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-amber-200 z-40 py-1.5 px-2 flex items-center justify-around shadow-lg">
        {[
          { id: "welcome", labelEn: "Home", labelTe: "హోమ్", icon: Flame },
          { id: "chat", labelEn: "AI Chat", labelTe: "చాట్", icon: MessageSquare },
          { id: "quiz", labelEn: "Quiz", labelTe: "క్విజ్", icon: HelpCircle },
          { id: "knowledge", labelEn: "Info", labelTe: "విశేషాలు", icon: BookOpen },
          { id: "eco", labelEn: "Eco", labelTe: "ఎకో", icon: Leaf },
          { id: "college", labelEn: "College", labelTe: "కాలేజ్", icon: GraduationCap },
        ].map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`flex flex-col items-center justify-center p-1 min-w-[50px] rounded-xl transition-all ${
                isActive ? "text-orange-600 font-extrabold" : "text-stone-500 hover:text-stone-800"
              }`}
            >
              <div
                className={`p-1 rounded-lg ${
                  isActive ? "bg-orange-100 text-orange-600" : ""
                }`}
              >
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-[10px] mt-0.5 leading-none">
                {isTe ? item.labelTe : item.labelEn}
              </span>
            </button>
          );
        })}
      </div>

      {/* Global Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        language={language}
        setLanguage={handleSetLanguage}
        voiceAudioEnabled={voiceAudioEnabled}
        setVoiceAudioEnabled={setVoiceAudioEnabled}
        reducedMotion={reducedMotion}
        setReducedMotion={setReducedMotion}
        onClearChat={handleClearChat}
      />

      {/* Respectful Cultural Footer */}
      <footer className="mt-16 border-t border-amber-200 bg-amber-100/40 py-8 px-4 relative z-10 text-stone-600 text-xs text-center space-y-3">
        <div className="flex items-center justify-center gap-2 font-serif font-bold text-amber-900 text-sm">
          <span>🕉️</span>
          <span>
            {isTe
              ? "ఓం గం గణపతయే నమః • సర్వ విఘ్నాలు తొలగి సమస్త శుభములు కలుగుగాక"
              : "Om Gam Ganapataye Namaha • May Lord Ganesha bestow wisdom, peace, and prosperity"}
          </span>
          <span>🕉️</span>
        </div>

        <p className="max-w-2xl mx-auto text-stone-500 leading-relaxed text-[11px]">
          {isTe
            ? "గమనిక: పూజా సంప్రదాయాలు మరియు ఆచారాలు ప్రాంతం, సంప్రదాయం మరియు కుటుంబ పద్ధతుల ఆధారంగా మారుతుంటాయి. గణేష్ AI విద్యార్థులకు మార్గదర్శనం కోసం రూపొందించబడిన సహచరుడు."
            : "Note: Rituals and traditions can vary across different regions, communities, and families. Ganesh AI is designed as a cultural festival guide and campus companion."}
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-[11px] font-medium text-stone-600">
          <span>
            {isTe
              ? "కళాశాల వినాయక చవితి ఉత్సవ కమిటీ"
              : "College Ganesh Chaturthi Celebration Committee"}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 text-emerald-700 font-semibold">
            <Leaf className="w-3.5 h-3.5" />
            {isTe ? "100% పర్యావరణహిత క్యాంపస్" : "100% Eco-Friendly Green Campus"}
          </span>
          <span>•</span>
          <span>Powered by Google Gemini</span>
        </div>
      </footer>
    </div>
  );
}
