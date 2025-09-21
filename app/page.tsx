"use client"
import CreativeDrawing from "./components/creativDrawing";

export default function Home() {
  return (
    <div className="relative flex justify-center items-center w-screen h-screen overflow-hidden">
      {/* Background Creative Drawing */}

      {/* Foreground text */}
      <h1
        className="text-8xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient"
        >
        DEEPANSHU MISHRA
        <CreativeDrawing />
      </h1>

      {/* Gradient animation */}
      <style jsx>{`
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradientMove 8s ease infinite;
        }
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}
