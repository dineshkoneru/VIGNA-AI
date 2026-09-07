import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Trophy,
  Award,
  Sparkles,
  ArrowRight,
  BookOpen,
  Share2,
} from "lucide-react";
import { QUIZ_QUESTIONS } from "../data/quizData";
import { Language, QuizQuestion } from "../types";

interface QuizProps {
  language: Language;
  onExploreKnowledge?: () => void;
}

export const Quiz: React.FC<QuizProps> = ({ language, onExploreKnowledge }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<{ questionId: number; selected: number; correct: boolean }[]>([]);

  const isTe = language === "te";
  // Always take 10 questions for the quiz
  const questions: QuizQuestion[] = QUIZ_QUESTIONS.slice(0, 10);
  const currentQ = questions[currentIdx];

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || isAnswerSubmitted) return;

    const isCorrect = selectedOption === currentQ.correctAnswer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setUserAnswers((prev) => [
      ...prev,
      {
        questionId: currentQ.id,
        selected: selectedOption,
        correct: isCorrect,
      },
    ]);

    setIsAnswerSubmitted(true);
  };

  const handleNextQuestion = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsQuizCompleted(true);
      // Trigger festive celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#ea580c", "#f59e0b", "#10b981", "#fbbf24"],
        });
      } catch (e) {
        // ignore
      }
    }
  };

  const handlePlayAgain = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsQuizCompleted(false);
    setUserAnswers([]);
  };

  const getScoreBadge = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) {
      return {
        titleEn: "Ganesha Vidya Ratna (Grand Scholar)",
        titleTe: "గణేశ విద్యా రత్న (విశేష మేధావి)",
        descEn: "Outstanding knowledge of Lord Ganesha traditions and eco-friendly principles!",
        descTe: "గణేశుడి వైభవం మరియు పర్యావరణహిత ఆచారాలపై మీ పరిజ్ఞానం ప్రశంసనీయం!",
        color: "text-amber-600 bg-amber-100 border-amber-300",
      };
    }
    if (percentage >= 50) {
      return {
        titleEn: "Bhakti Praveena (Festival Enthusiast)",
        titleTe: "భక్తి ప్రవీణ (పండుగ ప్రేమికుడు)",
        descEn: "Good grasp of festival customs. Explore our knowledge cards to master more!",
        descTe: "పండుగ సంప్రదాయాలపై మంచి అవగాహన ఉంది. మరిన్ని విషయాల కోసం నాలెడ్జ్ సెక్షన్ చూడండి.",
        color: "text-orange-600 bg-orange-100 border-orange-300",
      };
    }
    return {
      titleEn: "Jnana Jijnasu (Curious Seeker)",
      titleTe: "జ్ఞాన జిజ్ఞాసు (ఉత్సాహవంతమైన అభ్యాసకుడు)",
      descEn: "A great start! Dive into Lord Ganesha's stories to learn more for next time.",
      descTe: "మంచి ప్రయత్నం! వినాయక చవితి కథలు, విశేషాలను చదివి మీ స్కోరును మెరుగుపరచుకోండి.",
      color: "text-stone-700 bg-stone-100 border-stone-300",
    };
  };

  return (
    <div className="max-w-3xl mx-auto py-6 px-4">
      {/* Quiz Header Title */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 mb-2">
          <Sparkles className="w-3.5 h-3.5 text-orange-600" />
          <span>{isTe ? "10 ప్రశ్నల పోటీ" : "10 Questions Challenge"}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif">
          {isTe ? "వినాయక చవితి పండుగ క్విజ్" : "Ganesh Chaturthi Festival Quiz"}
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-lg mx-auto">
          {isTe
            ? "పురాణాలు, విశేషాలు, భారతీయ సంస్కృతి మరియు పర్యావరణహితంపై మీ విజ్ఞానాన్ని పరీక్షించుకోండి."
            : "Test your understanding of Lord Ganesha, mythological legends, Indian traditions, and eco-friendly practices."}
        </p>
      </div>

      {!isQuizCompleted ? (
        /* Active Quiz Card */
        <div className="rounded-3xl bg-white border border-amber-200 shadow-lg overflow-hidden p-5 sm:p-8">
          {/* Progress and Category Bar */}
          <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-amber-100">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold uppercase px-2.5 py-1 rounded-lg bg-orange-100 text-orange-800 border border-orange-200">
                {isTe ? currentQ.categoryTe : currentQ.category}
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-stone-500">
                {isTe ? "ప్రశ్న" : "Question"}{" "}
                <span className="text-orange-600 text-sm font-extrabold font-mono">
                  {currentIdx + 1}
                </span>{" "}
                / {questions.length}
              </span>
            </div>
          </div>

          {/* Progress Bar Line */}
          <div className="w-full bg-amber-100 h-2 rounded-full mb-6 overflow-hidden">
            <div
              className="bg-linear-to-r from-orange-500 to-amber-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Question Text */}
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug mb-6">
            {isTe ? currentQ.questionTe : currentQ.questionEn}
          </h3>

          {/* 4 Options */}
          <div className="space-y-3 mb-6">
            {(isTe ? currentQ.optionsTe : currentQ.optionsEn).map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrectAnswer = idx === currentQ.correctAnswer;

              let optionStyle =
                "bg-amber-50/40 border-amber-200 text-stone-800 hover:bg-orange-50 hover:border-orange-300";

              if (isAnswerSubmitted) {
                if (isCorrectAnswer) {
                  optionStyle =
                    "bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-400";
                } else if (isSelected && !isCorrectAnswer) {
                  optionStyle =
                    "bg-rose-50 border-rose-500 text-rose-950 font-bold ring-2 ring-rose-400";
                } else {
                  optionStyle = "bg-stone-50 border-stone-200 text-stone-400 opacity-60";
                }
              } else if (isSelected) {
                optionStyle =
                  "bg-orange-50 border-orange-500 text-orange-950 font-bold ring-2 ring-orange-400";
              }

              return (
                <button
                  key={idx}
                  id={`quiz-option-${idx}`}
                  type="button"
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswerSubmitted}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-150 flex items-center justify-between gap-3 ${optionStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-white/80 border border-stone-200 flex items-center justify-center text-xs font-bold font-mono shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-sm sm:text-base leading-snug">{option}</span>
                  </div>

                  {isAnswerSubmitted && isCorrectAnswer && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {isAnswerSubmitted && isSelected && !isCorrectAnswer && (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Feedback Card after submit */}
          {isAnswerSubmitted && (
            <div
              className={`p-4 rounded-2xl mb-6 text-sm animate-in fade-in duration-200 border ${
                selectedOption === currentQ.correctAnswer
                  ? "bg-emerald-50/90 border-emerald-200 text-emerald-900"
                  : "bg-amber-50/90 border-amber-200 text-amber-950"
              }`}
            >
              <div className="font-bold flex items-center gap-1.5 mb-1 text-xs uppercase tracking-wide">
                {selectedOption === currentQ.correctAnswer ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{isTe ? "సరైన సమాధానం! 🎉" : "Correct Answer! 🎉"}</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-rose-600" />
                    <span>{isTe ? "సరికాని సమాధానం" : "Incorrect Answer"}</span>
                  </>
                )}
              </div>
              <p className="leading-relaxed">
                {isTe ? currentQ.explanationTe : currentQ.explanationEn}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-2">
            <div className="text-xs text-stone-500 font-semibold">
              {isTe ? "ప్రస్తుత స్కోరు:" : "Current Score:"}{" "}
              <span className="font-bold text-orange-600 font-mono text-sm">{score}</span>
            </div>

            {!isAnswerSubmitted ? (
              <button
                id="submit-quiz-answer-btn"
                type="button"
                onClick={handleSubmitAnswer}
                disabled={selectedOption === null}
                className={`px-6 py-3 rounded-xl font-extrabold text-sm transition-all ${
                  selectedOption !== null
                    ? "bg-orange-600 text-white shadow-md shadow-orange-600/25 hover:bg-orange-700 cursor-pointer"
                    : "bg-amber-100 text-stone-400 cursor-not-allowed border border-amber-200"
                }`}
              >
                {isTe ? "సమాధానం సరిచూడండి" : "Submit Answer"}
              </button>
            ) : (
              <button
                id="next-quiz-question-btn"
                type="button"
                onClick={handleNextQuestion}
                className="px-6 py-3 rounded-xl font-extrabold text-sm bg-linear-to-r from-orange-500 to-amber-600 text-white shadow-md shadow-orange-500/25 hover:from-orange-600 hover:to-amber-700 flex items-center gap-2 cursor-pointer"
              >
                <span>
                  {currentIdx + 1 < questions.length
                    ? isTe
                      ? "తదుపరి ప్రశ్న"
                      : "Next Question"
                    : isTe
                    ? "ఫలితాలు చూడండి"
                    : "View Results"}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Final Score Screen */
        <div className="rounded-3xl bg-white border border-amber-200 shadow-xl p-6 sm:p-10 text-center animate-in zoom-in-95 duration-300">
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full bg-linear-to-br from-amber-400 via-orange-500 to-amber-600 flex items-center justify-center text-white shadow-xl shadow-orange-500/30">
            <Trophy className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif mb-2">
            {isTe ? "క్విజ్ పూర్తయింది!" : "Quiz Completed!"}
          </h3>

          <div className="inline-block px-5 py-2 rounded-2xl bg-amber-50 border border-amber-200 text-stone-800 mb-6">
            <p className="text-xs uppercase font-bold tracking-wider text-stone-500">
              {isTe ? "మీ తుది స్కోరు" : "Your Final Score"}
            </p>
            <p className="text-3xl sm:text-4xl font-black text-orange-600 font-mono mt-1">
              {score} <span className="text-stone-400 text-xl font-normal">/ {questions.length}</span>
            </p>
          </div>

          {/* Badge Title */}
          {(() => {
            const badge = getScoreBadge();
            return (
              <div
                className={`max-w-md mx-auto p-4 rounded-2xl border mb-8 ${badge.color}`}
              >
                <div className="flex items-center justify-center gap-2 font-black text-base sm:text-lg mb-1">
                  <Award className="w-5 h-5" />
                  <span>{isTe ? badge.titleTe : badge.titleEn}</span>
                </div>
                <p className="text-xs sm:text-sm">{isTe ? badge.descTe : badge.descEn}</p>
              </div>
            );
          })()}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              id="quiz-play-again-btn"
              onClick={handlePlayAgain}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-orange-600 text-white font-extrabold text-sm sm:text-base hover:bg-orange-700 shadow-md shadow-orange-600/25 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{isTe ? "మళ్ళీ ఆడండి" : "Play Again"}</span>
            </button>

            {onExploreKnowledge && (
              <button
                id="quiz-explore-knowledge-btn"
                onClick={onExploreKnowledge}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-50 border border-amber-300 text-stone-800 font-bold text-sm sm:text-base hover:bg-amber-100 transition-all"
              >
                <BookOpen className="w-4 h-4 text-orange-600" />
                <span>{isTe ? "పండుగ విశేషాలు చదవండి" : "Read Knowledge Cards"}</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
