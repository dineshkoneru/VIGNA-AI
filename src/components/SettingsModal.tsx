import React from "react";
import { X, Globe, Volume2, Trash2, Sparkles, Sliders, CheckCircle2 } from "lucide-react";
import { Language } from "../types";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  voiceAudioEnabled: boolean;
  setVoiceAudioEnabled: (val: boolean) => void;
  reducedMotion: boolean;
  setReducedMotion: (val: boolean) => void;
  onClearChat: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  language,
  setLanguage,
  voiceAudioEnabled,
  setVoiceAudioEnabled,
  reducedMotion,
  setReducedMotion,
  onClearChat,
}) => {
  if (!isOpen) return null;

  const isTe = language === "te";

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-amber-300 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-amber-200" />
            <h3 className="text-lg font-bold font-serif">
              {isTe ? "యాప్ సెట్టింగ్స్" : "Application Settings"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
            aria-label="Close settings"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Settings Body */}
        <div className="p-6 space-y-5 text-sm">
          {/* Language Preference */}
          <div>
            <label className="font-bold text-stone-800 flex items-center gap-2 mb-2 text-xs uppercase tracking-wider">
              <Globe className="w-4 h-4 text-orange-600" />
              <span>{isTe ? "భాష ఎంపిక (Language)" : "Language Selection"}</span>
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                onClick={() => setLanguage("te")}
                className={`py-2.5 px-3 rounded-xl font-bold flex items-center justify-center gap-1.5 transition-all text-sm ${
                  language === "te"
                    ? "bg-orange-600 text-white shadow-xs"
                    : "bg-amber-50 text-stone-700 hover:bg-amber-100 border border-amber-200"
                }`}
              >
                {language === "te" && <CheckCircle2 className="w-4 h-4 text-white" />}
                <span>తెలుగు</span>
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`py-2.5 px-3 rounded-xl font-bold flex items-center justify-center gap-1.5 transition-all text-sm ${
                  language === "en"
                    ? "bg-orange-600 text-white shadow-xs"
                    : "bg-amber-50 text-stone-700 hover:bg-amber-100 border border-amber-200"
                }`}
              >
                {language === "en" && <CheckCircle2 className="w-4 h-4 text-white" />}
                <span>English</span>
              </button>
            </div>
          </div>

          <div className="border-t border-amber-100 pt-4">
            {/* Voice Audio Speech Toggle */}
            <div className="flex items-center justify-between py-1">
              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-orange-600" />
                <div>
                  <p className="font-bold text-stone-800 text-xs sm:text-sm">
                    {isTe ? "వాయిస్ రీడర్ (Text-to-Speech)" : "Voice Read-Out"}
                  </p>
                  <p className="text-[11px] text-stone-500">
                    {isTe ? "సమాధానాల వద్ద స్పీకర్ బటన్" : "Enable voice controls for AI replies"}
                  </p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={voiceAudioEnabled}
                onChange={(e) => setVoiceAudioEnabled(e.target.checked)}
                className="w-5 h-5 accent-orange-600 rounded-md cursor-pointer"
              />
            </div>
          </div>

          <div className="border-t border-amber-100 pt-4">
            {/* Reduced Motion Toggle */}
            <div className="flex items-center justify-between py-1">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-orange-600" />
                <div>
                  <p className="font-bold text-stone-800 text-xs sm:text-sm">
                    {isTe ? "సులభ మోషన్ (కనిష్ట యానిమేషన్స్)" : "Reduced Motion"}
                  </p>
                  <p className="text-[11px] text-stone-500">
                    {isTe ? "తేలికపాటి పనితీరు కోసం" : "Dim background floating particles"}
                  </p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={reducedMotion}
                onChange={(e) => setReducedMotion(e.target.checked)}
                className="w-5 h-5 accent-orange-600 rounded-md cursor-pointer"
              />
            </div>
          </div>

          <div className="border-t border-amber-100 pt-4">
            {/* Clear Chat Button */}
            <div className="flex items-center justify-between py-1">
              <div>
                <p className="font-bold text-stone-800 text-xs sm:text-sm">
                  {isTe ? "చాట్ హిస్టరీ తొలగించు" : "Clear Chat Session"}
                </p>
                <p className="text-[11px] text-stone-500">
                  {isTe ? "ప్రస్తుత సందేశాలను రీసెట్ చేయండి" : "Reset active conversation history"}
                </p>
              </div>
              <button
                onClick={() => {
                  onClearChat();
                  onClose();
                }}
                className="px-3 py-1.5 rounded-lg bg-rose-50 text-rose-700 border border-rose-200 text-xs font-bold hover:bg-rose-100 transition-colors flex items-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>{isTe ? "రీసెట్" : "Clear"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-amber-50/80 border-t border-amber-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-orange-600 text-white font-bold text-xs sm:text-sm hover:bg-orange-700 transition-colors cursor-pointer"
          >
            {isTe ? "పూర్తయింది" : "Done"}
          </button>
        </div>
      </div>
    </div>
  );
};
