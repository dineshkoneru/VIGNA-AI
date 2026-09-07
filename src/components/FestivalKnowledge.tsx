import React, { useState } from "react";
import {
  BookOpen,
  Search,
  Sparkles,
  ArrowRight,
  X,
  Landmark,
  Crown,
  Flame,
  Utensils,
  Waves,
  Leaf,
  HelpCircle,
} from "lucide-react";
import { FESTIVAL_KNOWLEDGE } from "../data/festivalData";
import { KnowledgeItem, Language } from "../types";

interface FestivalKnowledgeProps {
  language: Language;
}

export const FestivalKnowledge: React.FC<FestivalKnowledgeProps> = ({ language }) => {
  const [selectedItem, setSelectedItem] = useState<KnowledgeItem | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const isTe = language === "te";

  // Map icon strings to Lucide components
  const iconMap: Record<string, React.FC<{ className?: string }>> = {
    Landmark,
    Crown,
    Sparkles,
    Flame,
    Utensils,
    Waves,
    Leaf,
    HelpCircle,
  };

  const filteredItems = FESTIVAL_KNOWLEDGE.filter((item) => {
    const q = searchQuery.toLowerCase();
    const title = (isTe ? item.titleTe : item.titleEn).toLowerCase();
    const summary = (isTe ? item.summaryTe : item.summaryEn).toLowerCase();
    return title.includes(q) || summary.includes(q);
  });

  return (
    <div className="max-w-6xl mx-auto py-6 sm:py-10 px-4">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 mb-2">
          <BookOpen className="w-3.5 h-3.5 text-orange-600" />
          <span>{isTe ? "ఆధ్యాత్మిక & సాంస్కృతిక నిధి" : "Spiritual & Cultural Heritage"}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-stone-900 font-serif">
          {isTe ? "వినాయక చవితి విశేషాలు" : "Festival Knowledge Hub"}
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 mt-2">
          {isTe
            ? "చరిత్ర, ప్రథమ పూజ విశిష్టత, గజముఖ అంతరార్థం, మోదకాల సైన్స్, మరియు పర్యావరణహిత ఆచారాలను తెలుసుకోండి."
            : "Explore deep histories, spiritual symbolism, sacred traditions, the art of Modak, and eco-friendly rituals."}
        </p>

        {/* Search Input */}
        <div className="relative mt-5 max-w-md mx-auto">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="knowledge-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isTe ? "విషయాలను వెతకండి (మోదకం, చరిత్ర...)" : "Search topics (history, modak, visarjan...)"}
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-amber-300 text-stone-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-orange-500 shadow-xs"
          />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredItems.map((item) => {
          const IconComponent = iconMap[item.icon] || Sparkles;
          return (
            <div
              key={item.id}
              id={`knowledge-card-${item.id}`}
              onClick={() => setSelectedItem(item)}
              className="cursor-pointer group rounded-3xl bg-white border border-amber-200/90 p-5 hover:border-orange-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-100 text-orange-600 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors duration-200 shadow-2xs">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200">
                    {isTe ? item.badgeTe : item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-stone-900 group-hover:text-orange-600 transition-colors line-clamp-2 mb-1.5 font-serif">
                  {isTe ? item.titleTe : item.titleEn}
                </h3>

                <p className="text-xs font-semibold text-amber-800/90 mb-2">
                  {isTe ? item.subtitleTe : item.subtitleEn}
                </p>

                <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                  {isTe ? item.summaryTe : item.summaryEn}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-amber-100 flex items-center justify-between text-xs font-bold text-orange-600 group-hover:text-orange-700">
                <span>{isTe ? "పూర్తి వివరాలు చదవండి" : "Read Full Story"}</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Detail Modal for deep reading */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div
            id="knowledge-detail-modal"
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col shadow-2xl border border-amber-300 animate-in zoom-in-95 duration-200"
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 text-white flex items-center justify-between">
              <div className="pr-4">
                <span className="text-[11px] uppercase font-extrabold tracking-wider px-2.5 py-0.5 rounded-full bg-white/20 text-white border border-white/30">
                  {isTe ? selectedItem.badgeTe : selectedItem.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-black mt-1.5 font-serif">
                  {isTe ? selectedItem.titleTe : selectedItem.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-amber-100 mt-0.5">
                  {isTe ? selectedItem.subtitleTe : selectedItem.subtitleEn}
                </p>
              </div>

              <button
                id="close-knowledge-modal-btn"
                onClick={() => setSelectedItem(null)}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-stone-800 text-sm leading-relaxed font-medium">
                {isTe ? selectedItem.summaryTe : selectedItem.summaryEn}
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-900">
                  {isTe ? "వివరణాత్మక ముఖ్యాంశాలు" : "Detailed Insights & Significance"}
                </h4>

                {(isTe ? selectedItem.contentTe : selectedItem.contentEn).map((paragraph, pIdx) => (
                  <div
                    key={pIdx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white border border-stone-100 shadow-2xs text-sm sm:text-base text-stone-800 leading-relaxed"
                  >
                    <span className="w-6 h-6 rounded-full bg-amber-100 text-orange-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {pIdx + 1}
                    </span>
                    <p className="flex-1">{paragraph}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-amber-50/80 border-t border-amber-200 flex justify-end">
              <button
                onClick={() => setSelectedItem(null)}
                className="px-5 py-2.5 rounded-xl bg-orange-600 text-white font-bold text-sm hover:bg-orange-700 transition-colors cursor-pointer"
              >
                {isTe ? "మూసివేయి" : "Close"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
