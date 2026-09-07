import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  Leaf,
  ShieldCheck,
  Palette,
  Ban,
  Droplets,
  ShoppingBag,
  Volume2,
  CheckCircle,
  Sparkles,
  Heart,
} from "lucide-react";
import { ECO_TIPS } from "../data/festivalData";
import { Language } from "../types";

interface EcoFriendlySectionProps {
  language: Language;
}

export const EcoFriendlySection: React.FC<EcoFriendlySectionProps> = ({ language }) => {
  const [pledged, setPledged] = useState(false);
  const [pledgeCount, setPledgeCount] = useState(487);

  const isTe = language === "te";

  const iconMap: Record<string, React.FC<{ className?: string }>> = {
    ShieldCheck,
    Palette,
    Ban,
    Droplets,
    ShoppingBag,
    Volume2,
  };

  const handlePledge = () => {
    if (!pledged) {
      setPledged(true);
      setPledgeCount((prev) => prev + 1);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          colors: ["#10b981", "#34d399", "#f59e0b", "#fbbf24"],
        });
      } catch (e) {
        // ignore
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-6 sm:py-10 px-4">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-300 mb-2">
          <Leaf className="w-3.5 h-3.5 text-emerald-600" />
          <span>{isTe ? "గ్రీన్ గణేష్ ఉద్యమం" : "Prakriti Seva • Green Ganesha"}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-stone-900 font-serif">
          {isTe ? "పర్యావరణహిత వినాయక చవితి" : "Eco-Friendly Ganesh Celebration"}
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
          {isTe
            ? "మట్టి విగ్రహాలు, సహజ రంగులు, ప్లాస్టిక్ నివారణ మరియు సురక్షిత నిమజ్జనం ద్వారా ప్రకృతికి హాని కలగకుండా భక్తిని చాటుకుందాం."
            : "Protect lakes, marine life, and campus soil by celebrating with 100% natural clay idols, non-toxic organic colors, and zero-plastic decorations."}
        </p>
      </div>

      {/* 7 Core Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {ECO_TIPS.map((tip) => {
          const IconComp = iconMap[tip.icon] || Leaf;
          return (
            <div
              key={tip.id}
              className="rounded-3xl bg-white border border-emerald-100 p-6 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4 border border-emerald-200 shadow-2xs">
                  <IconComp className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-stone-900 mb-2 font-serif">
                  {isTe ? tip.titleTe : tip.titleEn}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                  {isTe ? tip.descriptionTe : tip.descriptionEn}
                </p>
              </div>

              <div className="pt-3 border-t border-emerald-50 flex items-center gap-2 text-xs font-bold text-emerald-700">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{isTe ? tip.actionTe : tip.actionEn}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Comparison Infographic Table: Clay vs PoP */}
      <div className="rounded-3xl bg-linear-to-br from-emerald-50/70 via-white to-amber-50/50 border border-emerald-200/80 p-6 sm:p-8 mb-12 shadow-sm">
        <h3 className="text-xl sm:text-2xl font-black text-stone-900 font-serif text-center mb-6">
          {isTe
            ? "సహజ మట్టి వినాయకుడు vs ప్లాస్టర్ ఆఫ్ ప్యారిస్ (PoP)"
            : "Natural Clay Idol vs Plaster of Paris (PoP)"}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Natural Clay (Mitti) */}
          <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-300">
            <div className="flex items-center gap-2 text-emerald-800 font-extrabold text-base mb-3">
              <span className="text-xl">🌱</span>
              <h4>{isTe ? "సహజ మట్టి విగ్రహం (Mitti Idol)" : "Natural Clay (Mitti Idol)"}</h4>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>{isTe ? "1 నుండి 2 గంటల్లో నీటిలో పూర్తిగా కరుగుతుంది" : "Dissolves in water within 1-2 hours completely"}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>{isTe ? "ఎలాంటి విష రసాయనాలు లేదా లెడ్ ఉండదు" : "Zero toxic chemicals, heavy metals, or barium"}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>{isTe ? "మట్టి నీటిని కళాశాల మొక్కలకు ఎరువుగా వాడవచ్చు" : "Enriches garden soil and plant vegetation"}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>{isTe ? "జలచరాల ప్రాణాలను కాపాడుతుంది" : "Protects fish and aquatic biodiversity"}</span>
              </li>
            </ul>
          </div>

          {/* PoP (Plaster of Paris) */}
          <div className="p-5 rounded-2xl bg-rose-50/80 border border-rose-200">
            <div className="flex items-center gap-2 text-rose-800 font-extrabold text-base mb-3">
              <span className="text-xl">⚠️</span>
              <h4>{isTe ? "ప్లాస్టర్ ఆఫ్ ప్యారిస్ (PoP)" : "Plaster of Paris (PoP)"}</h4>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
              <li className="flex items-center gap-2">
                <span className="text-rose-600 font-bold">✗</span>
                <span>{isTe ? "కరగడానికి నెలల సమయం పడుతుంది" : "Takes several months or years to decompose"}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose-600 font-bold">✗</span>
                <span>{isTe ? "కెమికల్ రంగులు నీటిని కలుషితం చేస్తాయి" : "Chemical paints release toxic cadmium and lead"}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose-600 font-bold">✗</span>
                <span>{isTe ? "నదులు, సరస్సులలో ఆక్సిజన్‌ను తగ్గిస్తుంది" : "Depletes dissolved oxygen, suffocating marine life"}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose-600 font-bold">✗</span>
                <span>{isTe ? "విరిగిపోయిన ప్రతిమలు ఒడ్డుకు కొట్టుకొస్తాయి" : "Dismembered fragments float back, hurting sanctity"}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* College Student Green Devotion Pledge */}
      <div className="rounded-3xl bg-linear-to-r from-emerald-600 via-teal-700 to-emerald-800 text-white p-6 sm:p-10 shadow-xl text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="w-12 h-12 mx-auto rounded-full bg-white/20 flex items-center justify-center">
            <Heart className="w-6 h-6 text-emerald-300" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-black font-serif">
            {isTe
              ? "కళాశాల గ్రీన్ గణేష్ ప్రతిజ్ఞ"
              : "College Student Green Ganesha Pledge"}
          </h3>

          <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed font-normal">
            {isTe
              ? "“ఈ వినాయక చవితికి నేను కేవలం సహజ మట్టి వినాయకుడినే పూజిస్తాను. ప్లాస్టిక్, థర్మోకోల్ నివారించి, పవిత్ర ప్రకృతిని పరిరక్షిస్తానని ప్రతిజ్ఞ చేస్తున్నాను.”"
              : "“I pledge to celebrate this Ganesh Chaturthi with a 100% natural clay idol, refuse plastic/thermocol decorations, and practice clean immersion to preserve our mother earth.”"}
          </p>

          <div className="pt-2">
            <button
              id="eco-pledge-btn"
              onClick={handlePledge}
              disabled={pledged}
              className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl font-extrabold text-sm sm:text-base transition-all duration-200 shadow-lg ${
                pledged
                  ? "bg-emerald-300 text-emerald-950 cursor-default"
                  : "bg-white text-emerald-900 hover:bg-emerald-50 hover:scale-105 cursor-pointer shadow-emerald-950/20"
              }`}
            >
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>
                {pledged
                  ? isTe
                    ? "ప్రతిజ్ఞ పూర్తి చేశారు! 🌿"
                    : "Pledge Taken! 🌿"
                  : isTe
                  ? "నేను ప్రతిజ్ఞ చేస్తున్నాను"
                  : "Take the Green Pledge"}
              </span>
            </button>
          </div>

          <p className="text-xs text-emerald-200">
            {isTe
              ? `${pledgeCount} మంది విద్యార్థులు మరియు అధ్యాపకులు ఇప్పటికే ఈ ప్రతిజ్ఞ చేశారు!`
              : `${pledgeCount} students & campus members have pledged so far!`}
          </p>
        </div>
      </div>
    </div>
  );
};
