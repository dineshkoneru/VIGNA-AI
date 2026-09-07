import React, { useState } from "react";
import { Volume2, VolumeX, Copy, Check, Sparkles } from "lucide-react";
import { ChatMessage, Language } from "../types";
import { voiceService } from "../services/voice";

interface MessageBubbleProps {
  message: ChatMessage;
  language: Language;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message, language }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const isUser = message.sender === "user";
  const isTe = language === "te";

  const handleToggleSpeech = () => {
    if (isPlaying) {
      voiceService.stopSpeaking();
      setIsPlaying(false);
    } else {
      voiceService.speak(
        message.text,
        language,
        () => setIsPlaying(true),
        () => setIsPlaying(false),
        () => setIsPlaying(false)
      );
    }
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(message.text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (e) {
      // ignore
    }
  };

  return (
    <div
      className={`flex flex-col ${
        isUser ? "items-end" : "items-start"
      } mb-4 group transition-all`}
    >
      <div
        className={`flex items-end gap-2.5 max-w-[90%] sm:max-w-[82%] md:max-w-[75%] ${
          isUser ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {/* Avatar */}
        {!isUser ? (
          <div
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-linear-to-tr from-orange-500 to-amber-500 flex items-center justify-center text-white shrink-0 shadow-xs border border-amber-300"
            title="Ganesh AI"
          >
            <span className="text-base sm:text-lg select-none">🕉️</span>
          </div>
        ) : (
          <div
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-stone-700 flex items-center justify-center text-white shrink-0 text-xs font-bold"
            title="You"
          >
            👤
          </div>
        )}

        {/* Bubble */}
        <div
          className={`relative p-3.5 sm:p-4 rounded-2xl shadow-xs text-sm sm:text-base leading-relaxed break-words ${
            isUser
              ? "bg-linear-to-r from-orange-600 to-amber-600 text-white rounded-br-xs font-medium"
              : "bg-white border border-amber-200/90 text-stone-900 rounded-bl-xs font-normal"
          }`}
        >
          {/* AI Header with Badge */}
          {!isUser && (
            <div className="flex items-center gap-1.5 text-xs font-bold text-orange-600 mb-1.5 select-none">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isTe ? "గణేష్ AI" : "Ganesh AI"}</span>
            </div>
          )}

          {/* Formatted Text Content */}
          <div className="whitespace-pre-wrap">{message.text}</div>

          {/* Footer Controls for AI message (Audio playback + Copy + Timestamp) */}
          <div
            className={`flex items-center justify-between gap-3 mt-2.5 pt-1.5 border-t text-[11px] ${
              isUser
                ? "border-orange-500/50 text-orange-100"
                : "border-amber-100 text-stone-600"
            }`}
          >
            <span>{message.timestamp}</span>

            <div className="flex items-center gap-1.5">
              {/* Copy Button */}
              <button
                onClick={handleCopyText}
                className={`p-1 rounded-md transition-colors ${
                  isUser
                    ? "hover:bg-orange-700/50 text-white"
                    : "hover:bg-amber-100 text-stone-600 hover:text-stone-900"
                }`}
                title={isTe ? "కాపీ చేయండి" : "Copy text"}
                aria-label="Copy text"
              >
                {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>

              {/* Text to Speech Speaker Button (for AI responses) */}
              {!isUser && (
                <button
                  onClick={handleToggleSpeech}
                  className={`flex items-center gap-1 px-1.5 py-0.5 rounded-md transition-colors ${
                    isPlaying
                      ? "bg-orange-100 text-orange-700 font-bold animate-pulse"
                      : "hover:bg-amber-100 text-stone-600 hover:text-stone-900"
                  }`}
                  title={
                    isPlaying
                      ? isTe ? "వాయిస్ ఆపండి" : "Stop speaking"
                      : isTe ? "వాయిస్ వినండి" : "Listen to response"
                  }
                  aria-label="Text to speech"
                >
                  {isPlaying ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5 text-orange-600" />
                      <span className="text-[10px]">{isTe ? "ఆపు" : "Stop"}</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-stone-600" />
                      <span className="text-[10px]">{isTe ? "వినండి" : "Listen"}</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
