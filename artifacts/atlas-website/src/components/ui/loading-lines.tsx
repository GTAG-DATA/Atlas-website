import React from "react";

const LoadingLines: React.FC = () => {
  const letters = "Loading".split("");

  return (
    <div className="relative flex items-center justify-center h-[120px] w-auto m-8 font-sans text-[1.6em] font-semibold select-none scale-[2]">
      {/* Animated letters */}
      {letters.map((letter, idx) => (
        <span
          key={idx}
          className="relative inline-block opacity-0 z-[2] text-white"
          style={{
            animation: "letterAnim 4s linear infinite",
            animationDelay: `${0.1 + idx * 0.105}s`,
          }}
        >
          {letter}
        </span>
      ))}

      {/* Loader background */}
      <div
        className="absolute top-0 left-0 w-full h-full z-[1] bg-transparent"
        style={{
          mask: "repeating-linear-gradient(90deg,transparent 0,transparent 6px,black 7px,black 8px)",
          WebkitMask: "repeating-linear-gradient(90deg,transparent 0,transparent 6px,black 7px,black 8px)",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: [
              "radial-gradient(circle at 50% 50%,#ff0 0%,transparent 50%)",
              "radial-gradient(circle at 45% 45%,#f00 0%,transparent 45%)",
              "radial-gradient(circle at 55% 55%,#0ff 0%,transparent 45%)",
              "radial-gradient(circle at 45% 55%,#0f0 0%,transparent 45%)",
              "radial-gradient(circle at 55% 45%,#00f 0%,transparent 45%)",
            ].join(","),
            mask: "radial-gradient(circle at 50% 50%,transparent 0%,transparent 10%,black 25%)",
            WebkitMask: "radial-gradient(circle at 50% 50%,transparent 0%,transparent 10%,black 25%)",
            animation:
              "transformAnim 2s infinite alternate cubic-bezier(0.6,0.8,0.5,1), opacityAnim 4s infinite",
          }}
        />
      </div>
    </div>
  );
};

export default LoadingLines;
