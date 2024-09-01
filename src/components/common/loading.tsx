export default function Loading() {
  const animationStyle = `
    @keyframes rotate {
      50% {
        transform: translateY(-40px)
      }
    }
  `;
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-black/70 dark:bg-white/70 flex items-center justify-center">
      <style>{animationStyle}</style>
      <div className="relative flex items-end gap-1">
        <span className="border w-[60px] h-[60px] flex items-center justify-center font-bold text-4xl bg-black/90 dark:bg-white text-white dark:text-black rounded-lg">
          T
        </span>
        <span
          className="relative text-2xl italic"
          style={{
            animation: "rotate 2s linear infinite",
          }}
        >
          movie
        </span>
      </div>
    </div>
  );
}
