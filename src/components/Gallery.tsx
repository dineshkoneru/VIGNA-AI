import React, { useState } from "react";
import { Image as ImageIcon, X, ZoomIn, Sparkles, Filter } from "lucide-react";
import { GalleryPhoto, Language } from "../types";

interface GalleryProps {
  language: Language;
}

export const Gallery: React.FC<GalleryProps> = ({ language }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const isTe = language === "te";

  // Gallery items with clear placeholder URLs and generated assets
  const photos: GalleryPhoto[] = [
    {
      id: "gal-1",
      url: "/src/assets/images/college_celebration_1788784550284.jpg",
      titleEn: "Campus Pandal & Students Devotional Aarti",
      titleTe: "కళాశాల మండపం & విద్యార్థుల హారతి",
      tagEn: "Celebration",
      tagTe: "వేడుకలు",
      year: "2026",
    },
    {
      id: "gal-2",
      url: "/src/assets/images/ganesha_illustration_1788784528294.jpg",
      titleEn: "Lord Ganesha Divine Prakriti Icon",
      titleTe: "శ్రీ వినాయక దివ్య ప్రతిమ",
      tagEn: "Idol",
      tagTe: "విగ్రహం",
      year: "2026",
    },
    {
      id: "gal-3",
      url: "https://images.unsplash.com/photo-1567591370504-20b1784f187a?auto=format&fit=crop&w=800&q=80",
      titleEn: "100% Eco-Friendly Clay Ganesha Crafting",
      titleTe: "సహజ మట్టి వినాయక ప్రతిమ తయారీ",
      tagEn: "Eco-Clay",
      tagTe: "మట్టి ప్రతిమ",
      year: "2025",
    },
    {
      id: "gal-4",
      url: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",
      titleEn: "Grand Deepotsav & 108 Diya Illumination",
      titleTe: "108 మట్టి ప్రమిదల దీపోత్సవం",
      tagEn: "Aarti",
      tagTe: "హారతి",
      year: "2025",
    },
    {
      id: "gal-5",
      url: "https://images.unsplash.com/photo-1599818816933-4f964a781b08?auto=format&fit=crop&w=800&q=80",
      titleEn: "Traditional Student Rangoli Competition",
      titleTe: "రంగురంగుల ముగ్గుల పోటీలు",
      tagEn: "Cultural",
      tagTe: "సాంస్కృతికం",
      year: "2025",
    },
    {
      id: "gal-6",
      url: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=800&q=80",
      titleEn: "Handcrafted Steamed Modak Prasadam",
      titleTe: "రుచికరమైన ఆవిరి మోదక ప్రసాదం",
      tagEn: "Prasadam",
      tagTe: "ప్రసాదం",
      year: "2025",
    },
  ];

  const filteredPhotos =
    selectedFilter === "all"
      ? photos
      : photos.filter((p) => p.tagEn.toLowerCase() === selectedFilter.toLowerCase());

  return (
    <div className="max-w-6xl mx-auto py-6 sm:py-10 px-4">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 mb-2">
          <ImageIcon className="w-3.5 h-3.5 text-orange-600" />
          <span>{isTe ? "చిత్రమాలిక" : "Festive Memories"}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-stone-900 font-serif">
          {isTe ? "పండుగ ఫోటో గ్యాలరీ" : "Festival Photo Gallery"}
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 mt-1">
          {isTe
            ? "మన కళాశాల ప్రాంగణంలో గణేష్ ఉత్సవాల మధుర క్షణాలు మరియు అలంకరణల సంగ్రహం."
            : "Highlights from our college Ganesha pandal, eco-workshops, aartis, and student celebrations."}
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
          {[
            { id: "all", labelEn: "All Photos", labelTe: "అన్ని చిత్రాలు" },
            { id: "celebration", labelEn: "Celebrations", labelTe: "వేడుకలు" },
            { id: "eco-clay", labelEn: "Eco Idols", labelTe: "మట్టి ప్రతిమలు" },
            { id: "aarti", labelEn: "Aarti & Diya", labelTe: "దీపారాధన" },
            { id: "cultural", labelEn: "Cultural", labelTe: "సాంస్కృతికం" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedFilter === tab.id
                  ? "bg-orange-600 text-white shadow-xs"
                  : "bg-white text-stone-700 hover:bg-amber-100/70 border border-amber-200"
              }`}
            >
              {isTe ? tab.labelTe : tab.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            id={`gallery-item-${photo.id}`}
            onClick={() => setSelectedPhoto(photo)}
            className="group relative cursor-pointer overflow-hidden rounded-3xl bg-amber-100 border border-amber-200 shadow-xs hover:shadow-lg transition-all duration-300"
          >
            <div className="aspect-4/3 w-full overflow-hidden bg-stone-200">
              <img
                src={photo.url}
                alt={isTe ? photo.titleTe : photo.titleEn}
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-500"
                onError={(e) => {
                  // Graceful fallback image if external URL fails
                  (e.target as HTMLImageElement).src =
                    "/src/assets/images/college_celebration_1788784550284.jpg";
                }}
              />
            </div>

            {/* Hover overlay with title and zoom icon */}
            <div className="absolute inset-0 bg-linear-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
              <div className="flex justify-end">
                <span className="p-2 rounded-full bg-white/20 backdrop-blur-xs text-white">
                  <ZoomIn className="w-4 h-4" />
                </span>
              </div>

              <div>
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-orange-600 text-white inline-block mb-1">
                  {isTe ? photo.tagTe : photo.tagEn}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white font-serif line-clamp-1">
                  {isTe ? photo.titleTe : photo.titleEn}
                </h4>
              </div>
            </div>

            {/* Bottom Caption always visible on mobile */}
            <div className="p-3 bg-white border-t border-amber-100 flex items-center justify-between text-xs">
              <span className="font-bold text-stone-800 line-clamp-1">
                {isTe ? photo.titleTe : photo.titleEn}
              </span>
              <span className="text-[10px] font-mono text-stone-500 shrink-0 ml-2">
                {photo.year}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Preview Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-stone-800 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors cursor-pointer"
              aria-label="Close preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image display */}
            <div className="max-h-[75vh] flex items-center justify-center bg-black">
              <img
                src={selectedPhoto.url}
                alt={isTe ? selectedPhoto.titleTe : selectedPhoto.titleEn}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Lightbox Caption */}
            <div className="p-4 sm:p-5 bg-stone-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-stone-800">
              <div>
                <span className="text-xs uppercase font-extrabold px-2.5 py-0.5 rounded-md bg-orange-600 text-white mr-2">
                  {isTe ? selectedPhoto.tagTe : selectedPhoto.tagEn}
                </span>
                <span className="text-sm sm:text-base font-bold">
                  {isTe ? selectedPhoto.titleTe : selectedPhoto.titleEn}
                </span>
              </div>
              <span className="text-xs text-stone-400 font-mono">
                {isTe ? `సంవత్సరం: ${selectedPhoto.year}` : `Year: ${selectedPhoto.year}`}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
