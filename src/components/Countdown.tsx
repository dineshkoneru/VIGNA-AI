import React, { useState, useEffect } from "react";
import { Clock, Calendar, Sparkles } from "lucide-react";
import { FESTIVAL_CONFIG } from "../data/config";
import { Language } from "../types";

interface CountdownProps {
  language: Language;
}

export const Countdown: React.FC<CountdownProps> = ({ language }) => {
  const isTe = language === "te";

  const calculateTimeLeft = () => {
    const target = new Date(FESTIVAL_CONFIG.targetDate).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isPassed: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <div
      id="festival-countdown-card"
      className="relative overflow-hidden rounded-2xl bg-linear-to-br from-amber-500/10 via-orange-500/10 to-amber-600/15 border border-amber-300/80 p-5 sm:p-6 shadow-sm"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Title and Date description */}
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-900 border border-orange-300 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>{isTe ? "మహోత్సవ కౌంట్‌డౌన్" : "Festival Countdown"}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 font-serif">
            {isTe ? FESTIVAL_CONFIG.festivalNameTe : FESTIVAL_CONFIG.festivalNameEn}
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 flex items-center justify-center md:justify-start gap-1.5 mt-1 font-medium">
            <Calendar className="w-4 h-4 text-amber-700" />
            <span>
              {isTe
                ? "భాద్రపద శుద్ధ చతుర్థి • కళాశాల ప్రాంగణ మహోత్సవం"
                : "Bhadrapada Shukla Chaturthi • College Celebration"}
            </span>
          </p>
        </div>

        {/* Live Countdown Clock Blocks */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full sm:w-auto">
          {[
            { value: timeLeft.days, labelEn: "Days", labelTe: "రోజులు" },
            { value: timeLeft.hours, labelEn: "Hours", labelTe: "గంటలు" },
            { value: timeLeft.minutes, labelEn: "Mins", labelTe: "నిమిషాలు" },
            { value: timeLeft.seconds, labelEn: "Secs", labelTe: "సెకన్లు" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center bg-white/90 backdrop-blur-xs border border-amber-200/90 rounded-xl px-2.5 sm:px-4 py-2 sm:py-2.5 shadow-xs min-w-[62px] sm:min-w-[76px]"
            >
              <span className="text-xl sm:text-2xl font-black text-orange-600 tabular-nums font-mono">
                {formatNumber(item.value)}
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-stone-600 uppercase tracking-tight">
                {isTe ? item.labelTe : item.labelEn}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
