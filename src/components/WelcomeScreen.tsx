import React from "react";
import {
  MessageSquare,
  Sparkles,
  HelpCircle,
  BookOpen,
  Leaf,
  GraduationCap,
  ArrowRight,
  Flame,
  CheckCircle2,
} from "lucide-react";
import { Language } from "../types";
import { Countdown } from "./Countdown";

interface WelcomeScreenProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onStartChat: () => void;
  onNavigate: (tab: string) => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  language,
  setLanguage,
  onStartChat,
  onNavigate,
}) => {
  const isTe = language === "te";

  return (
    <div className="relative py-6 sm:py-10 px-4 max-w-6xl mx-auto">
      {/* Top Banner / Sloka */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 text-amber-900 border border-amber-300/80 text-xs sm:text-sm font-semibold shadow-xs">
          <span>🪔</span>
          <span>
            {isTe
              ? "వక్రతుండ మహాకాయ సూర్యకోటి సమప్రభ • నిర్విఘ్నం కురు మే దేవ"
              : "Vakratunda Mahakaya Suryakoti Samaprabha • Nirvighnam Kuru Me Deva"}
          </span>
          <span>🪔</span>
        </div>
      </div>

      {/* Main Hero Card */}
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-b from-amber-50 via-white to-amber-50/80 border border-amber-200/90 p-6 sm:p-10 lg:p-12 shadow-lg shadow-orange-500/5 mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Title, Subtitle, Language Selection, Start Chatting */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-extrabold uppercase tracking-wider bg-orange-100 text-orange-800 border border-orange-200">
                <Flame className="w-3.5 h-3.5 text-orange-600" />
                <span>{isTe ? "కళాశాల వినాయక చవితి వేడుకలు" : "College Festival Edition"}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 tracking-tight font-serif leading-tight">
                GANESH <span className="text-orange-600">AI</span>
              </h1>

              <h2 className="text-xl sm:text-2xl font-bold text-amber-800 font-sans">
                {isTe
                  ? "వినాయక చవితి కోసం మీ AI సహాయకుడు"
                  : "Your AI Companion for Ganesh Chaturthi"}
              </h2>

              <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                {isTe
                  ? "వినాయక చవితి కథలు, పూజా విధానం, పర్యావరణహిత మట్టి గణపతులు, మరియు మన కళాశాల వేడుకల వివరాలను వాయిస్ & చాట్ ద్వారా తెలుసుకోండి."
                  : "Explore the divine legends of Lord Ganesha, sacred festival rituals, eco-friendly celebrations, college festivities schedule, and interactive quizzes powered by Gemini AI."}
              </p>
            </div>

            {/* Language Selection Prompt */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-100/60 border border-amber-300/80 max-w-md mx-auto lg:mx-0">
              <p className="text-xs sm:text-sm font-bold text-stone-800 mb-2.5 flex items-center justify-center lg:justify-start gap-1.5">
                <span>🌐</span>
                <span>{isTe ? "మీ భాషను ఎంచుకోండి" : "Choose your language"}</span>
              </p>
              <div className="grid grid-cols-2 gap-3">
                <button
                  id="welcome-lang-te-btn"
                  onClick={() => setLanguage("te")}
                  className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-sm sm:text-base transition-all ${
                    language === "te"
                      ? "bg-orange-600 text-white shadow-md shadow-orange-600/25 ring-2 ring-orange-500"
                      : "bg-white text-stone-800 hover:bg-amber-50 border border-amber-200"
                  }`}
                >
                  {language === "te" && <CheckCircle2 className="w-4 h-4 text-white" />}
                  <span>తెలుగు</span>
                </button>
                <button
                  id="welcome-lang-en-btn"
                  onClick={() => setLanguage("en")}
                  className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-sm sm:text-base transition-all ${
                    language === "en"
                      ? "bg-orange-600 text-white shadow-md shadow-orange-600/25 ring-2 ring-orange-500"
                      : "bg-white text-stone-800 hover:bg-amber-50 border border-amber-200"
                  }`}
                >
                  {language === "en" && <CheckCircle2 className="w-4 h-4 text-white" />}
                  <span>English</span>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 justify-center lg:justify-start pt-2">
              <button
                id="start-chatting-btn"
                onClick={onStartChat}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-linear-to-r from-orange-500 via-amber-600 to-orange-600 text-white font-extrabold text-base sm:text-lg shadow-lg shadow-orange-600/25 hover:from-orange-600 hover:to-amber-700 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-hidden focus:ring-4 focus:ring-orange-300"
              >
                <MessageSquare className="w-5 h-5 text-white" />
                <span>{isTe ? "చాట్ ప్రారంభించండి" : "Start Chatting"}</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </button>

              <button
                id="play-quiz-quick-btn"
                onClick={() => onNavigate("quiz")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white border border-amber-300 text-stone-800 font-bold text-sm sm:text-base hover:bg-amber-100/60 hover:text-orange-600 transition-all duration-150"
              >
                <HelpCircle className="w-5 h-5 text-orange-600" />
                <span>{isTe ? "క్విజ్ ఆడండి (10 ప్రశ్నలు)" : "Play Festival Quiz"}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Lord Ganesha Artwork with Glowing Aura */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-xs sm:max-w-sm w-full">
              {/* Soft decorative glow background */}
              <div className="absolute -inset-2 bg-linear-to-tr from-amber-400 via-orange-500 to-yellow-300 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500" />

              <div className="relative rounded-3xl overflow-hidden border-4 border-amber-300/80 shadow-2xl bg-amber-100">
                <img
                  id="ganesha-hero-img"
                  src="/src/assets/images/ganesha_illustration_1788784528294.jpg"
                  alt="Lord Ganesha Festive Illustration"
                  className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-103 transition-transform duration-500"
                />

                {/* Overlay Badge */}
                <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-stone-900/90 via-stone-900/50 to-transparent p-4 text-white text-center">
                  <p className="text-xs uppercase tracking-widest text-amber-300 font-bold">
                    {isTe ? "సర్వ విఘ్నహర్త" : "Vighnaharta"}
                  </p>
                  <p className="text-base font-serif font-extrabold text-white">
                    {isTe ? "శ్రీ విఘ్నేశ్వర సమేత" : "Divine Lord Ganesha"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Festival Countdown Banner */}
      <div className="mb-10">
        <Countdown language={language} />
      </div>

      {/* Quick Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            id: "chat",
            titleEn: "Ganesh AI Chat",
            titleTe: "గణేష్ AI చాట్",
            descEn: "Ask anything about traditions, stories, and mantras in English or Telugu.",
            descTe: "సంప్రదాయాలు, కథలు, మంత్రాల గురించి తెలుగు లేదా ఇంగ్లీషులో అడగండి.",
            icon: MessageSquare,
            badgeEn: "Voice & Text",
            badgeTe: "వాయిస్ & టెక్స్ట్",
            action: () => onNavigate("chat"),
          },
          {
            id: "quiz",
            titleEn: "10-Question Quiz",
            titleTe: "10 ప్రశ్నల క్విజ్",
            descEn: "Test your festival knowledge across mythology, culture, and ecology.",
            descTe: "పురాణాలు, సంస్కృతి మరియు పర్యావరణంపై మీ పరిజ్ఞానాన్ని పరీక్షించుకోండి.",
            icon: HelpCircle,
            badgeEn: "Score & Win",
            badgeTe: "స్కోర్ సాధించండి",
            action: () => onNavigate("quiz"),
          },
          {
            id: "knowledge",
            titleEn: "Festival Knowledge",
            titleTe: "పండుగ విశేషాలు",
            descEn: "History of Sarvajanik fest, 21-patri pooja, Modak science, and facts.",
            descTe: "సార్వజనిక ఉత్సవ చరిత్ర, ఏకవింశతి పత్రి పూజ, మోదకాల అంతరార్థం.",
            icon: BookOpen,
            badgeEn: "8 Deep Topics",
            badgeTe: "8 ముఖ్యాంశాలు",
            action: () => onNavigate("knowledge"),
          },
          {
            id: "eco",
            titleEn: "Eco-Friendly Guide",
            titleTe: "పర్యావరణహితం",
            descEn: "Clay idols, organic colors, bucket visarjan, and green campus pledge.",
            descTe: "మట్టి ప్రతిమలు, సహజ రంగులు, బకెట్ నిమజ్జనం మరియు గ్రీన్ ప్రతిజ్ఞ.",
            icon: Leaf,
            badgeEn: "Green Campus",
            badgeTe: "గ్రీన్ క్యాంపస్",
            action: () => onNavigate("eco"),
          },
        ].map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.id}
              onClick={feature.action}
              className="cursor-pointer group rounded-2xl bg-white/95 border border-amber-200/90 p-5 hover:border-orange-400 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-orange-600 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-100/80 text-amber-900 border border-amber-200">
                    {isTe ? feature.badgeTe : feature.badgeEn}
                  </span>
                </div>
                <h3 className="font-extrabold text-stone-900 text-base mb-1.5 group-hover:text-orange-600 transition-colors">
                  {isTe ? feature.titleTe : feature.titleEn}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {isTe ? feature.descTe : feature.descEn}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-amber-100 flex items-center justify-between text-xs font-bold text-orange-600 group-hover:text-orange-700">
                <span>{isTe ? "ప్రారంభించండి" : "Explore"}</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
