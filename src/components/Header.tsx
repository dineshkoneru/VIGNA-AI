import React, { useState } from "react";
import {
  Sparkles,
  MessageSquare,
  BookOpen,
  HelpCircle,
  Leaf,
  GraduationCap,
  Image,
  Globe,
  Settings as SettingsIcon,
  Menu,
  X,
  Flame,
} from "lucide-react";
import { Language } from "../types";

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  openSettings: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  language,
  setLanguage,
  openSettings,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isTe = language === "te";

  const navItems = [
    { id: "welcome", labelEn: "Home", labelTe: "ప్రారంభం", icon: Flame },
    { id: "chat", labelEn: "AI Chat", labelTe: "గణేష్ AI చాట్", icon: MessageSquare },
    { id: "quiz", labelEn: "Quiz", labelTe: "క్విజ్", icon: HelpCircle },
    { id: "knowledge", labelEn: "Knowledge", labelTe: "విశేషాలు", icon: BookOpen },
    { id: "eco", labelEn: "Eco-Friendly", labelTe: "పర్యావరణహితం", icon: Leaf },
    { id: "college", labelEn: "College Fest", labelTe: "కళాశాల వేడుకలు", icon: GraduationCap },
    { id: "gallery", labelEn: "Gallery", labelTe: "ఫోటో గ్యాలరీ", icon: Image },
  ];

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-amber-50/90 backdrop-blur-md border-b border-amber-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo & Name */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick("welcome")}
            className="flex items-center gap-2.5 sm:gap-3 text-left group focus:outline-hidden focus:ring-2 focus:ring-orange-500 rounded-xl p-1"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-linear-to-br from-amber-500 via-orange-500 to-amber-600 flex items-center justify-center shadow-md shadow-orange-500/20 text-white transform group-hover:scale-105 transition-transform duration-200">
              <span className="text-xl sm:text-2xl" role="img" aria-label="Ganesha">
                🕉️
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl text-stone-900 tracking-tight font-serif">
                  GANESH <span className="text-orange-600 font-black">AI</span>
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                  <Sparkles className="w-2.5 h-2.5 mr-0.5 text-amber-600" />
                  {isTe ? "క్యాంపస్ ఫెస్ట్" : "Campus Fest"}
                </span>
              </div>
              <p className="text-[11px] text-stone-500 font-medium hidden sm:block">
                {isTe ? "మీ పండుగ సహాయకుడు" : "Your Festival Companion"}
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? "bg-orange-500 text-white shadow-sm shadow-orange-500/30"
                      : "text-stone-700 hover:text-orange-600 hover:bg-amber-100/60"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-amber-600"}`} />
                  <span>{isTe ? item.labelTe : item.labelEn}</span>
                </button>
              );
            })}
          </nav>

          {/* Language Selector, Settings & Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher Button */}
            <div className="inline-flex p-1 bg-amber-100/90 border border-amber-300 rounded-xl">
              <button
                id="lang-btn-en"
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${
                  language === "en"
                    ? "bg-orange-600 text-white shadow-xs"
                    : "text-stone-700 hover:text-stone-900"
                }`}
                title="Switch to English"
              >
                EN
              </button>
              <button
                id="lang-btn-te"
                onClick={() => setLanguage("te")}
                className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${
                  language === "te"
                    ? "bg-orange-600 text-white shadow-xs"
                    : "text-stone-700 hover:text-stone-900"
                }`}
                title="తెలుగు భాషను ఎంచుకోండి"
              >
                తెలుగు
              </button>
            </div>

            {/* Settings Button */}
            <button
              id="header-settings-btn"
              onClick={openSettings}
              className="p-2 rounded-xl text-stone-700 hover:text-orange-600 hover:bg-amber-100/80 transition-colors border border-amber-200"
              title={isTe ? "సెట్టింగ్స్" : "Settings"}
              aria-label="Settings"
            >
              <SettingsIcon className="w-5 h-5 text-stone-700" />
            </button>

            {/* Mobile menu trigger */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-stone-700 hover:text-orange-600 hover:bg-amber-100/80 transition-colors border border-amber-200"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden bg-amber-50/98 border-b border-amber-300 shadow-xl px-4 pt-3 pb-5 space-y-1.5 animate-in slide-in-from-top-2 duration-200"
        >
          <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider px-3 pb-1">
            {isTe ? "మెనూ నావిగేషన్" : "Menu Navigation"}
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  isActive
                    ? "bg-orange-500 text-white shadow-sm"
                    : "text-stone-800 hover:bg-amber-100/80"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-amber-600"}`} />
                <span>{isTe ? item.labelTe : item.labelEn}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
