import { Language } from "../types";

// Declarations for Web Speech API
declare global {
  interface Window {
    SpeechRecognition?: any;
    webkitSpeechRecognition?: any;
  }
}

export interface SpeechRecognitionResultState {
  transcript: string;
  isFinal: boolean;
}

export class VoiceService {
  private recognition: any = null;
  private isListening: boolean = false;
  private activeUtterance: SpeechSynthesisUtterance | null = null;

  public isSpeechRecognitionSupported(): boolean {
    if (typeof window === "undefined") return false;
    return Boolean(window.SpeechRecognition || window.webkitSpeechRecognition);
  }

  public isTextToSpeechSupported(): boolean {
    if (typeof window === "undefined") return false;
    return Boolean(window.speechSynthesis);
  }

  /**
   * Start speech recognition with callbacks
   */
  public startListening(
    language: Language,
    onResult: (text: string, isFinal: boolean) => void,
    onError: (errorMsg: string) => void,
    onEnd: () => void
  ): boolean {
    if (!this.isSpeechRecognitionSupported()) {
      onError("Voice input is not supported in this browser. Please use Chrome or type your message.");
      return false;
    }

    try {
      this.stopListening();

      const SpeechRecognitionClass = window.SpeechRecognition || window.webkitSpeechRecognition;
      this.recognition = new SpeechRecognitionClass();

      // Configure speech recognition
      this.recognition.continuous = false;
      this.recognition.interimResults = true;
      // Use Telugu locale if language is Telugu, else Indian English
      this.recognition.lang = language === "te" ? "te-IN" : "en-IN";

      this.recognition.onstart = () => {
        this.isListening = true;
      };

      this.recognition.onresult = (event: any) => {
        let interimTranscript = "";
        let finalTranscript = "";

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const item = event.results[i];
          if (item.isFinal) {
            finalTranscript += item[0].transcript;
          } else {
            interimTranscript += item[0].transcript;
          }
        }

        const currentText = finalTranscript || interimTranscript;
        onResult(currentText, Boolean(finalTranscript));
      };

      this.recognition.onerror = (event: any) => {
        console.warn("Speech recognition error:", event.error);
        this.isListening = false;
        let message = "Could not capture audio.";
        if (event.error === "not-allowed" || event.error === "permission-denied") {
          message =
            language === "te"
              ? "మైక్రోఫోన్ అనుమతి నిరాకరించబడింది. దయచేసి బ్రౌజర్ సెట్టింగ్స్‌లో మైక్ అనుమతించండి."
              : "Microphone permission denied. Please allow microphone access in your browser settings.";
        } else if (event.error === "no-speech") {
          message =
            language === "te"
              ? "ఎలాంటి శబ్దం వినబడలేదు. దయచేసి మళ్ళీ మాట్లాడండి."
              : "No speech was detected. Please try speaking into your mic again.";
        } else {
          message =
            language === "te"
              ? `వాయిస్ సమస్య: ${event.error}`
              : `Voice error: ${event.error}. Please try again or type.`;
        }
        onError(message);
      };

      this.recognition.onend = () => {
        this.isListening = false;
        onEnd();
      };

      this.recognition.start();
      return true;
    } catch (err: any) {
      console.error("Failed to start speech recognition:", err);
      onError(err?.message || "Failed to initialize microphone.");
      return false;
    }
  }

  public stopListening(): void {
    if (this.recognition) {
      try {
        this.recognition.stop();
      } catch (e) {
        // ignore
      }
      this.recognition = null;
    }
    this.isListening = false;
  }

  public getIsListening(): boolean {
    return this.isListening;
  }

  /**
   * Speak text using Web SpeechSynthesis
   */
  public speak(
    text: string,
    language: Language,
    onStart?: () => void,
    onEnd?: () => void,
    onError?: (err: any) => void
  ): void {
    if (!this.isTextToSpeechSupported()) {
      return;
    }

    this.stopSpeaking();

    try {
      // Clean markdown tags or bullets so speech is natural
      const cleaned = text
        .replace(/[*#_`~[\]]/g, "")
        .replace(/https?:\/\/\S+/g, "")
        .trim();

      if (!cleaned) return;

      const utterance = new SpeechSynthesisUtterance(cleaned);
      utterance.lang = language === "te" ? "te-IN" : "en-IN";
      utterance.rate = 0.95; // Slightly slower for clarity
      utterance.pitch = 1.0;

      // Try finding appropriate voice
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        const matchingVoice = voices.find((v) =>
          language === "te"
            ? v.lang.startsWith("te")
            : v.lang.includes("en-IN") || v.lang.includes("en-US") || v.name.includes("India")
        );
        if (matchingVoice) {
          utterance.voice = matchingVoice;
        }
      }

      utterance.onstart = () => {
        this.activeUtterance = utterance;
        onStart?.();
      };

      utterance.onend = () => {
        this.activeUtterance = null;
        onEnd?.();
      };

      utterance.onerror = (e) => {
        this.activeUtterance = null;
        onError?.(e);
      };

      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.warn("TTS Error:", err);
      onError?.(err);
    }
  }

  public stopSpeaking(): void {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {
        // ignore
      }
    }
    this.activeUtterance = null;
  }
}

export const voiceService = new VoiceService();
