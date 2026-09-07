import { ChatMessage, Language } from "../types";

export interface SendMessageOptions {
  message: string;
  language: Language;
  history?: ChatMessage[];
}

export interface ChatResponse {
  reply: string;
  source: "gemini" | "curated_assistant" | "fallback_on_error";
  note?: string;
}

/**
 * Service to interact with the backend Gemini-powered chat endpoint.
 * Keeps API keys securely on the server while offering a clean, typed client interface.
 */
export async function sendChatMessage(options: SendMessageOptions): Promise<ChatResponse> {
  const { message, language, history = [] } = options;

  if (!message.trim()) {
    throw new Error(language === "te" ? "దయచేసి సందేశాన్ని నమోదు చేయండి." : "Message cannot be empty.");
  }

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        language,
        history,
      }),
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.error || `Server responded with status ${res.status}`);
    }

    const data = await res.json();
    return {
      reply: data.reply || (language === "te" ? "నమస్కారం! గణేశుడి ఆశీస్సులు మీపై ఉండుగాక." : "Namaste! May Lord Ganesha's blessings be with you."),
      source: data.source || "gemini",
      note: data.note,
    };
  } catch (error: any) {
    console.warn("Error calling /api/chat:", error);
    // Return friendly error / fallback message without crashing the UI
    const isTe = language === "te";
    return {
      reply: isTe
        ? "నమస్కారం! నెట్‌వర్క్ లేదా సేవలలో చిన్న అంతరాయం ఏర్పడింది. మీరు వినాయక చవితి కథలు, పర్యావరణహిత పద్ధతులు మరియు క్విజ్ గురించి ఇక్కడ సులభంగా తెలుసుకోవచ్చు!"
        : "Namaste! I experienced a momentary connection hiccup. However, you can still explore all our rich festival knowledge, college celebration details, and interactive quiz right here!",
      source: "fallback_on_error",
      note: error?.message,
    };
  }
}
