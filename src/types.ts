export type Language = "en" | "te";

export interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
  source?: "gemini" | "curated_assistant" | "fallback_on_error";
}

export interface QuizQuestion {
  id: number;
  category: "Ganesh Chaturthi" | "Lord Ganesha" | "Indian culture" | "Eco-friendly celebrations";
  categoryTe: string;
  questionEn: string;
  questionTe: string;
  optionsEn: string[];
  optionsTe: string[];
  correctAnswer: number; // 0, 1, 2, 3
  explanationEn: string;
  explanationTe: string;
}

export interface KnowledgeItem {
  id: string;
  titleEn: string;
  titleTe: string;
  subtitleEn: string;
  subtitleTe: string;
  summaryEn: string;
  summaryTe: string;
  contentEn: string[];
  contentTe: string[];
  icon: string;
  badge: string;
  badgeTe: string;
}

export interface EcoTip {
  id: string;
  titleEn: string;
  titleTe: string;
  descriptionEn: string;
  descriptionTe: string;
  icon: string;
  actionEn: string;
  actionTe: string;
}

export interface CollegeEvent {
  id: string;
  time: string;
  titleEn: string;
  titleTe: string;
  venueEn: string;
  venueTe: string;
  descriptionEn: string;
  descriptionTe: string;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  titleEn: string;
  titleTe: string;
  tagEn: string;
  tagTe: string;
  year: string;
}
