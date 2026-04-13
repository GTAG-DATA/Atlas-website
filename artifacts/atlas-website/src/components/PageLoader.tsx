import { useEffect, useState } from "react";
import LoadingLines from "@/components/ui/loading-lines";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Start fade-out after 1.8s
    const fadeTimer = setTimeout(() => setFading(true), 1800);
    // Remove from DOM after fade completes (0.5s transition)
    const hideTimer = setTimeout(() => setVisible(false), 2300);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0c1e24]"
      style={{
        animation: fading ? "loaderFadeOut 0.5s ease-out forwards" : "none",
      }}
    >
      {/* Atlas logo mark */}
      <div className="mb-6 opacity-80">
        <img
          src="/favicon.png"
          alt="Atlas"
          className="w-10 h-10 object-contain"
        />
      </div>

      {/* Loading animation */}
      <LoadingLines />
    </div>
  );
}
