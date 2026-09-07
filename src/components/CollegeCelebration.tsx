import React, { useState } from "react";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Clock,
  Utensils,
  Waves,
  Edit3,
  Check,
  Sparkles,
  Info,
  Phone,
} from "lucide-react";
import { FESTIVAL_CONFIG } from "../data/config";
import { Language } from "../types";

interface CollegeCelebrationProps {
  language: Language;
  onViewGallery?: () => void;
}

export const CollegeCelebration: React.FC<CollegeCelebrationProps> = ({
  language,
  onViewGallery,
}) => {
  const isTe = language === "te";

  // Editable state loaded from config defaults
  const [collegeDetails, setCollegeDetails] = useState({
    collegeNameEn: FESTIVAL_CONFIG.collegeInfo.collegeNameEn,
    collegeNameTe: FESTIVAL_CONFIG.collegeInfo.collegeNameTe,
    departmentEn: FESTIVAL_CONFIG.collegeInfo.departmentEn,
    departmentTe: FESTIVAL_CONFIG.collegeInfo.departmentTe,
    celebrationDatesEn: FESTIVAL_CONFIG.collegeInfo.celebrationDatesEn,
    celebrationDatesTe: FESTIVAL_CONFIG.collegeInfo.celebrationDatesTe,
    venueEn: FESTIVAL_CONFIG.collegeInfo.venueEn,
    venueTe: FESTIVAL_CONFIG.collegeInfo.venueTe,
    pandalThemeEn: FESTIVAL_CONFIG.collegeInfo.pandalThemeEn,
    pandalThemeTe: FESTIVAL_CONFIG.collegeInfo.pandalThemeTe,
    annaprasadhamMenuEn: FESTIVAL_CONFIG.collegeInfo.annaprasadham.menuEn,
    annaprasadhamMenuTe: FESTIVAL_CONFIG.collegeInfo.annaprasadham.menuTe,
    annaprasadhamTimeEn: FESTIVAL_CONFIG.collegeInfo.annaprasadham.timeEn,
    annaprasadhamTimeTe: FESTIVAL_CONFIG.collegeInfo.annaprasadham.timeTe,
    visarjanDateEn: FESTIVAL_CONFIG.collegeInfo.visarjan.dateEn,
    visarjanDateTe: FESTIVAL_CONFIG.collegeInfo.visarjan.dateTe,
    visarjanRouteEn: FESTIVAL_CONFIG.collegeInfo.visarjan.processionRouteEn,
    visarjanRouteTe: FESTIVAL_CONFIG.collegeInfo.visarjan.processionRouteTe,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editSuccessMessage, setEditSuccessMessage] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    setEditSuccessMessage(true);
    setTimeout(() => setEditSuccessMessage(false), 3000);
  };

  return (
    <div className="max-w-5xl mx-auto py-6 sm:py-10 px-4">
      {/* Header with Title and Edit Placeholder Toggle */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 mb-2">
            <GraduationCap className="w-3.5 h-3.5 text-orange-600" />
            <span>{isTe ? "క్యాంపస్ సంబరాలు" : "Campus Celebrations"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 font-serif">
            {isTe ? "మన కళాశాల వినాయక చవితి వేడుకలు" : "Our College Ganesh Celebration"}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            {isTe
              ? "విద్యార్థులు మరియు అధ్యాపకుల ఆధ్వర్యంలో 5 రోజుల సాంస్కృతిక & ఆధ్యాత్మిక మహోత్సవం."
              : "5 days of cultural vibrancy, student unity, and eco-friendly festivities."}
          </p>
        </div>

        {/* Edit Placeholder Button */}
        <button
          id="toggle-edit-college-btn"
          onClick={() => setIsEditing(!isEditing)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-amber-300 text-stone-800 text-xs sm:text-sm font-bold shadow-xs hover:bg-amber-100/60 hover:text-orange-600 transition-colors"
        >
          <Edit3 className="w-4 h-4 text-orange-600" />
          <span>
            {isEditing
              ? isTe ? "ఎడిటింగ్ రద్దు" : "Close Editor"
              : isTe ? "వివరాలు సవరించండి" : "Edit College Details"}
          </span>
        </button>
      </div>

      {/* Edit Success Toast */}
      {editSuccessMessage && (
        <div
          role="alert"
          className="mb-6 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs sm:text-sm font-semibold flex items-center gap-2 animate-in fade-in"
        >
          <Check className="w-4 h-4 text-emerald-600" />
          <span>
            {isTe
              ? "కళాశాల వివరాలు విజయవంతంగా అప్‌డేట్ చేయబడ్డాయి!"
              : "College celebration details updated successfully!"}
          </span>
        </div>
      )}

      {/* Live Editor Form when isEditing is active */}
      {isEditing && (
        <div className="mb-8 p-6 rounded-3xl bg-amber-50 border-2 border-orange-300 shadow-md">
          <div className="flex items-center gap-2 text-stone-900 font-bold mb-4 pb-2 border-b border-amber-200">
            <Info className="w-4 h-4 text-orange-600" />
            <span>
              {isTe
                ? "కళాశాల ప్లేస్‌హోల్డర్ వివరాలను ఇక్కడ సులభంగా మార్చుకోండి"
                : "Customize your College Celebration Placeholders"}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div>
              <label className="block font-bold text-stone-700 mb-1">
                {isTe ? "కళాశాల పేరు (English)" : "College Name (English)"}
              </label>
              <input
                type="text"
                value={collegeDetails.collegeNameEn}
                onChange={(e) =>
                  setCollegeDetails({ ...collegeDetails, collegeNameEn: e.target.value })
                }
                className="w-full p-2.5 rounded-xl border border-amber-300 bg-white"
              />
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">
                {isTe ? "కళాశాల పేరు (తెలుగు)" : "College Name (Telugu)"}
              </label>
              <input
                type="text"
                value={collegeDetails.collegeNameTe}
                onChange={(e) =>
                  setCollegeDetails({ ...collegeDetails, collegeNameTe: e.target.value })
                }
                className="w-full p-2.5 rounded-xl border border-amber-300 bg-white"
              />
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">
                {isTe ? "విభాగం / కమిటీ" : "Department / Committee"}
              </label>
              <input
                type="text"
                value={collegeDetails.departmentEn}
                onChange={(e) =>
                  setCollegeDetails({ ...collegeDetails, departmentEn: e.target.value })
                }
                className="w-full p-2.5 rounded-xl border border-amber-300 bg-white"
              />
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">
                {isTe ? "వేడుక తేదీలు" : "Celebration Dates"}
              </label>
              <input
                type="text"
                value={collegeDetails.celebrationDatesEn}
                onChange={(e) =>
                  setCollegeDetails({ ...collegeDetails, celebrationDatesEn: e.target.value })
                }
                className="w-full p-2.5 rounded-xl border border-amber-300 bg-white"
              />
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">
                {isTe ? "అన్నప్రసాదం మెనూ" : "Annaprasadham Menu"}
              </label>
              <input
                type="text"
                value={collegeDetails.annaprasadhamMenuEn}
                onChange={(e) =>
                  setCollegeDetails({
                    ...collegeDetails,
                    annaprasadhamMenuEn: e.target.value,
                  })
                }
                className="w-full p-2.5 rounded-xl border border-amber-300 bg-white"
              />
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">
                {isTe ? "నిమజ్జనం సమయం & రూట్" : "Visarjan Date & Route"}
              </label>
              <input
                type="text"
                value={collegeDetails.visarjanRouteEn}
                onChange={(e) =>
                  setCollegeDetails({
                    ...collegeDetails,
                    visarjanRouteEn: e.target.value,
                  })
                }
                className="w-full p-2.5 rounded-xl border border-amber-300 bg-white"
              />
            </div>
          </div>

          <div className="mt-5 flex justify-end gap-2">
            <button
              onClick={handleSave}
              className="px-5 py-2 rounded-xl bg-orange-600 text-white font-bold text-xs sm:text-sm hover:bg-orange-700 cursor-pointer"
            >
              {isTe ? "సేవ్ చేయండి" : "Save Changes"}
            </button>
          </div>
        </div>
      )}

      {/* College Hero Overview Card */}
      <div className="rounded-3xl bg-linear-to-br from-amber-500/10 via-orange-500/10 to-amber-600/15 border border-amber-300/90 p-6 sm:p-8 mb-8 shadow-xs">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase bg-orange-600 text-white">
              {isTe ? "కళాశాల మండపం" : "College Pandal"}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-stone-700 border border-amber-200">
              {isTe ? collegeDetails.pandalThemeTe : collegeDetails.pandalThemeEn}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif">
            {isTe ? collegeDetails.collegeNameTe : collegeDetails.collegeNameEn}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-stone-700 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-orange-600 shrink-0" />
              <span>{isTe ? collegeDetails.departmentTe : collegeDetails.departmentEn}</span>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-orange-600 shrink-0" />
              <span>
                {isTe ? collegeDetails.celebrationDatesTe : collegeDetails.celebrationDatesEn}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-orange-600 shrink-0" />
              <span>{isTe ? collegeDetails.venueTe : collegeDetails.venueEn}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule of Events (Daily Plan) */}
      <div className="mb-10">
        <h3 className="text-xl sm:text-2xl font-black text-stone-900 font-serif mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-orange-600" />
          <span>{isTe ? "పండుగ ముఖ్య కార్యక్రమాలు" : "Key Event Schedule"}</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FESTIVAL_CONFIG.collegeInfo.events.map((event) => (
            <div
              key={event.id}
              className="p-5 rounded-2xl bg-white border border-amber-200/90 hover:border-orange-400 transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-extrabold px-2.5 py-1 rounded-lg bg-orange-100 text-orange-800 font-mono">
                    {event.time}
                  </span>
                  <span className="text-[11px] font-semibold text-stone-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-600" />
                    {isTe ? event.venueTe : event.venueEn}
                  </span>
                </div>

                <h4 className="text-base font-bold text-stone-900 mb-1.5 font-serif">
                  {isTe ? event.titleTe : event.titleEn}
                </h4>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {isTe ? event.descriptionTe : event.descriptionEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Annaprasadham & Visarjan Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Annaprasadham Card */}
        <div className="p-6 rounded-3xl bg-linear-to-br from-amber-50 to-orange-50/60 border border-amber-200 shadow-xs">
          <div className="w-10 h-10 rounded-2xl bg-orange-500 text-white flex items-center justify-center mb-4 shadow-xs">
            <Utensils className="w-5 h-5" />
          </div>

          <h4 className="text-xl font-black text-stone-900 font-serif mb-2">
            {isTe ? "మహా అన్నప్రసాదం" : "Annaprasadham (Feast)"}
          </h4>

          <div className="space-y-2.5 text-xs sm:text-sm text-stone-700">
            <p>
              <span className="font-bold text-stone-900">
                {isTe ? "సమయం:" : "Timings:"}{" "}
              </span>
              {isTe
                ? collegeDetails.annaprasadhamTimeTe
                : collegeDetails.annaprasadhamTimeEn}
            </p>
            <p>
              <span className="font-bold text-stone-900">
                {isTe ? "ప్రసాదం మెనూ:" : "Special Menu:"}{" "}
              </span>
              {isTe
                ? collegeDetails.annaprasadhamMenuTe
                : collegeDetails.annaprasadhamMenuEn}
            </p>
            <p className="text-[11px] text-stone-500 pt-1">
              * {isTe ? "విస్తరాకులలో పరిశుభ్రమైన వాతావరణంలో ప్రసాద వితరణ జరుగుతుంది." : "Served on compostable banana/sal leaves with zero plastic policy."}
            </p>
          </div>
        </div>

        {/* Visarjan (Immersion) Card */}
        <div className="p-6 rounded-3xl bg-linear-to-br from-amber-50 to-orange-50/60 border border-amber-200 shadow-xs">
          <div className="w-10 h-10 rounded-2xl bg-amber-600 text-white flex items-center justify-center mb-4 shadow-xs">
            <Waves className="w-5 h-5" />
          </div>

          <h4 className="text-xl font-black text-stone-900 font-serif mb-2">
            {isTe ? "గణేష్ నిమజ్జనం & శోభాయాత్ర" : "Ganesh Visarjan Procession"}
          </h4>

          <div className="space-y-2.5 text-xs sm:text-sm text-stone-700">
            <p>
              <span className="font-bold text-stone-900">
                {isTe ? "తేదీ & సమయం:" : "Schedule:"}{" "}
              </span>
              {isTe ? collegeDetails.visarjanDateTe : collegeDetails.visarjanDateEn}
            </p>
            <p>
              <span className="font-bold text-stone-900">
                {isTe ? "యాత్రా మార్గం:" : "Procession Route:"}{" "}
              </span>
              {isTe ? collegeDetails.visarjanRouteTe : collegeDetails.visarjanRouteEn}
            </p>
            <p className="text-[11px] text-stone-500 pt-1">
              * {isTe ? "విద్యార్థుల సాంప్రదాయ ధోల్-తాషా మరియు సహజ ఎకో-పాండ్ నిమజ్జనం." : "Featuring college Dhol-Tasha band and clean on-campus eco pond immersion."}
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Callout banner */}
      {onViewGallery && (
        <div className="p-5 rounded-2xl bg-white border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="text-2xl">📸</div>
            <div>
              <h5 className="font-bold text-stone-900 text-sm sm:text-base">
                {isTe ? "వేడుకల ఫోటో గ్యాలరీ చూడండి" : "Explore College Celebration Photos"}
              </h5>
              <p className="text-xs text-stone-500">
                {isTe ? "గత మరియు ప్రస్తుత సంవత్సరాల జ్ఞాపకాలు" : "Moments from previous years and current preparations"}
              </p>
            </div>
          </div>

          <button
            onClick={onViewGallery}
            className="px-5 py-2 rounded-xl bg-orange-600 text-white font-bold text-xs sm:text-sm hover:bg-orange-700 cursor-pointer transition-colors shrink-0"
          >
            {isTe ? "గ్యాలరీ చూడండి" : "View Photo Gallery"}
          </button>
        </div>
      )}
    </div>
  );
};
