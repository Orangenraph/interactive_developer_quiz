import React, { useState, useEffect } from 'react';
import { XCircle, Skull, AlertTriangle, Zap } from 'lucide-react';
import GoatWithGlasses from '../../assets/GoatWithGlasses.png';

interface LoserAnimationProps {
  playerName: string;
  onBackToStart: () => void;
}

export const LoserAnimation = ({ playerName, onBackToStart }: LoserAnimationProps) => {
  const [shakeIntensity, setShakeIntensity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShakeIntensity(Math.sin(Date.now() / 100) * 8);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #000000, #8B0000, #000000, #DC143C)',
        backgroundSize: '400% 400%',
        animation: 'apocalypseShift 4s ease infinite',
        transform: `translate(${shakeIntensity}px, ${shakeIntensity * 0.7}px)`,
      }}
    >
      <style>{`
        @keyframes apocalypseShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes catastrophicFall {
          0% { transform: translateY(-100vh) rotate(0deg) scale(1); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg) scale(0.1); opacity: 0; }
        }
        @keyframes goofyBounceExtreme {
          0%, 100% { transform: scaleY(1) rotate(-5deg); }
          25% { transform: scaleY(1.2) rotate(8deg); }
          50% { transform: scaleY(0.8) rotate(-10deg); }
          75% { transform: scaleY(1.15) rotate(6deg); }
        }
        @keyframes goofyRotateExtreme {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          25% { transform: rotateX(15deg) rotateY(-20deg); }
          50% { transform: rotateX(-20deg) rotateY(25deg); }
          75% { transform: rotateX(10deg) rotateY(-15deg); }
          100% { transform: rotateX(0deg) rotateY(0deg); }
        }
        @keyframes glitchFlash {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes implosion {
          0% { transform: scale(1) rotate(0deg); opacity: 1; }
          100% { transform: scale(0) rotate(360deg); opacity: 0; }
        }
        @keyframes explosionPulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(3); opacity: 0; }
        }
      `}</style>

      {/* Catastrophic Falling Elements */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-6xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-20px`,
              animation: `catastrophicFall ${1.5 + Math.random() * 2}s ease-in forwards`,
              animationDelay: `${Math.random() * 3}s`,
              filter: 'drop-shadow(0 0 10px #ff0000)',
            }}
          >
            {i % 5 === 0 ? '💀' : i % 5 === 1 ? '❌' : i % 5 === 2 ? '💥' : i % 5 === 3 ? '⚡' : '🔥'}
          </div>
        ))}
      </div>

      {/* Pulsing Red Alert Circles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `explosionPulse ${0.8 + i * 0.1}s ease-out`,
              animationDelay: `${i * 0.15}s`,
              animationIterationCount: 'infinite',
            }}
          >
            <div className="w-32 h-32 border-4 border-red-500 rounded-full opacity-50"></div>
          </div>
        ))}
      </div>

      {/* Flashing Skull Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <Skull
            key={i}
            className="absolute w-24 h-24 text-red-600 opacity-30"
            style={{
              left: `${20 + i * 12}%`,
              top: `${5 + (i % 3) * 30}%`,
              animation: `glitchFlash 0.3s ease-in-out`,
              animationDelay: `${i * 0.1}s`,
              animationIterationCount: 'infinite',
              filter: 'drop-shadow(0 0 20px #ff0000)',
            }}
          />
        ))}
      </div>

      {/* Main Content - ABSOLUTE CHAOS */}
      <div className="relative text-center text-white z-10 flex flex-col items-center justify-center h-full">
        {/* CATASTROPHIC TITLE */}
        <h1
          className="text-9xl font-black mb-2 drop-shadow-2xl"
          style={{
            textShadow: '0 0 30px rgba(255, 0, 0, 1), 0 0 60px rgba(220, 20, 60, 1), 0 0 90px rgba(139, 0, 0, 1)',
            color: '#ffffff',
            letterSpacing: '0.1em',
            animation: 'glitchFlash 0.2s ease-in-out infinite, pulse 1.5s ease-in-out infinite',
            transform: `scale(${1 + Math.sin(Date.now() / 200) * 0.05})`,
            textTransform: 'uppercase',
          }}
        >
          GAMEOVER!!!
        </h1>

        {/* Disaster Text */}
        <h2 className="text-5xl font-black text-red-300 mb-12" style={{
          textShadow: '0 0 20px rgba(255, 0, 0, 0.8)',
          letterSpacing: '0.05em',
        }}>
          💀 TOTALE KATASTROPHE 💀
        </h2>

        {/* Goat Image Container - EXTREME */}
        <div className="mb-12 relative">
          <div
            className="w-96 h-[500px] bg-gradient-to-b from-red-600 via-red-700 to-black rounded-lg shadow-2xl overflow-hidden border-8 border-red-300 relative"
            style={{
              animation: 'goofyBounceExtreme 1s ease-in-out infinite',
              boxShadow: '0 0 40px rgba(255, 0, 0, 0.9), inset 0 0 40px rgba(255, 0, 0, 0.5)',
              filter: 'brightness(1.2) contrast(1.3)',
            }}
          >
            <img
              src={GoatWithGlasses}
              alt="Goat with Glasses"
              className="w-full h-full object-cover"
              style={{
                animation: 'goofyRotateExtreme 0s ease-in-out infinite',
                filter: 'hue-rotate(-20deg) saturate(2)',
              }}
            />
            {/* Implosion Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-transparent opacity-40 mix-blend-screen"></div>
          </div>

          {/* Multiple Sparkle Effects */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute text-5xl animate-pulse"
              style={{
                left: `${Math.random() * 100 - 50}px`,
                top: `${Math.random() * 100 - 50}px`,
                animation: `explosionPulse ${0.6 + i * 0.1}s ease-out`,
                animationIterationCount: 'infinite',
                animationDelay: `${i * 0.1}s`,
              }}
            >
              💥
            </div>
          ))}

          {/* Corner Explosions */}
          <Zap className="absolute -top-8 -right-8 w-16 h-16 text-yellow-300 animate-pulse" style={{
            filter: 'drop-shadow(0 0 15px #FFD700)',
            animation: 'glitchFlash 0.15s ease-in-out infinite',
          }} />
          <Zap className="absolute -top-8 -left-8 w-16 h-16 text-yellow-300 animate-pulse" style={{
            filter: 'drop-shadow(0 0 15px #FFD700)',
            animation: 'glitchFlash 0.15s ease-in-out infinite',
            animationDelay: '0.1s',
          }} />
        </div>

        {/* Disaster Messages */}
        <div className="mb-4 text-2xl font-black text-red-200 text-center" style={{
          textShadow: '0 0 10px rgba(255, 0, 0, 0.8)',
          animation: 'glitchFlash 0.3s ease-in-out infinite',
        }}>
          <p>🔥 {playerName} IST VERNICHTET! 🔥</p>
          <p className="text-lg mt-2">😂 BEI RAIFFEISEN ZÄHLT PRÄZISION 😂</p>
        </div>

        {/* EXTREME Button */}
        <button
          onClick={onBackToStart}
          className="bg-gradient-to-r from-red-600 via-red-500 to-red-700 text-white py-6 px-16 rounded-full font-black text-2xl border-6 border-yellow-300 shadow-2xl transform hover:scale-125 transition-all"
          style={{
            textShadow: '0 0 10px rgba(0, 0, 0, 0.8)',
            boxShadow: '0 0 30px rgba(255, 0, 0, 1), inset 0 0 15px rgba(255, 255, 0, 0.5)',
            animation: 'pulse 0.5s ease-in-out infinite',
          }}
        >
          🔥🔄 ZURÜCK ZUM START 🔄🔥
        </button>
      </div>
    </div>
  );
};