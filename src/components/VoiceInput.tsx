import React, { useState } from "react";
import { Mic, MicOff, AlertCircle } from "lucide-react";
import { Language } from "../types";
import { voiceService } from "../services/voice";

interface VoiceInputProps {
  language: Language;
  onSpeechResult: (recognizedText: string) => void;
  disabled?: boolean;
}

export const VoiceInput: React.FC<VoiceInputProps> = ({
  language,
  onSpeechResult,
  disabled = false,
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const isTe = language === "te";

  const handleToggleVoice = () => {
    if (disabled) return;
    setErrorMessage(null);

    if (isRecording) {
      voiceService.stopListening();
      setIsRecording(false);
      return;
    }

    const started = voiceService.startListening(
      language,
      (text) => {
        if (text) {
          onSpeechResult(text);
        }
      },
      (error) => {
        setErrorMessage(error);
        setIsRecording(false);
      },
      () => {
        setIsRecording(false);
      }
    );

    if (started) {
      setIsRecording(true);
    }
  };

  return (
    <div className="relative inline-flex items-center">
      {/* Microphone Button */}
      <button
        id="voice-record-btn"
        type="button"
        onClick={handleToggleVoice}
        disabled={disabled}
        aria-label={isRecording ? "Stop voice recording" : "Start voice recording"}
        title={
          isRecording
            ? isTe ? "వాయిస్ రికార్డింగ్ ఆపండి" : "Stop listening"
            : isTe ? "మాట్లాడటానికి మైక్ నొక్కండి" : "Tap to speak your question"
        }
        className={`relative p-3 rounded-xl transition-all duration-200 flex items-center justify-center focus:outline-hidden focus:ring-2 focus:ring-orange-500 ${
          isRecording
            ? "bg-red-500 text-white shadow-md shadow-red-500/40 animate-pulse"
            : "bg-amber-100 text-stone-700 hover:bg-orange-500 hover:text-white border border-amber-300"
        } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
      >
        {isRecording ? (
          <>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
            </span>
            <MicOff className="w-5 h-5" />
          </>
        ) : (
          <Mic className="w-5 h-5" />
        )}
      </button>

      {/* Floating Error Tooltip if Speech Recognition Fails or Unsupported */}
      {errorMessage && (
        <div
          role="alert"
          className="absolute bottom-full mb-3 right-0 w-72 sm:w-80 p-3 rounded-xl bg-stone-900 text-white text-xs shadow-xl border border-stone-700 z-50 animate-in fade-in slide-in-from-bottom-2"
        >
          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div className="flex-1 leading-snug">{errorMessage}</div>
            <button
              onClick={() => setErrorMessage(null)}
              className="text-stone-400 hover:text-white font-bold ml-1"
              aria-label="Dismiss error"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
