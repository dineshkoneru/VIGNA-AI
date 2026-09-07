import React from "react";

interface FloatingDecorationsProps {
  reducedMotion?: boolean;
}

export const FloatingDecorations: React.FC<FloatingDecorationsProps> = ({ reducedMotion = false }) => {
  if (reducedMotion) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none opacity-45"
    >
      {/* Soft golden aura radial glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-amber-300/20 blur-3xl" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-orange-400/15 blur-3xl" />
      <div className="absolute -bottom-32 left-1/4 w-[30rem] h-[30rem] rounded-full bg-amber-400/15 blur-3xl" />

      {/* Floating flower petals and diyas with subtle CSS animation */}
      <div className="absolute top-12 left-10 text-xl animate-float-slow text-amber-500/80">
        🪔
      </div>
      <div className="absolute top-28 right-16 text-lg animate-float-medium text-orange-400/80">
        🌼
      </div>
      <div className="absolute top-2/3 left-6 text-xl animate-float-slow text-amber-600/70">
        ✨
      </div>
      <div className="absolute bottom-20 right-12 text-2xl animate-float-medium text-amber-500/80">
        🪔
      </div>
      <div className="absolute bottom-1/3 right-1/4 text-sm animate-float-fast text-orange-400/70">
        🌸
      </div>
      <div className="absolute top-1/2 left-1/5 text-base animate-float-slow text-yellow-500/70">
        🌺
      </div>
    </div>
  );
};
