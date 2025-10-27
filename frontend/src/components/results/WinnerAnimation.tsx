import React, { useState, useEffect } from 'react';
import { Star, Trophy, Crown, Heart, Sparkles } from 'lucide-react';
import HappyGoat from '../../assets/HappyGoat.png';

interface WinnerAnimationProps {
  playerName: string;
  onBackToStart: () => void;
}

export const WinnerAnimation = ({ playerName, onBackToStart }: WinnerAnimationProps) => {
  const [shake, setShake] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShake(Math.sin(Date.now() / 150) * 4);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FFD700, #FFA500, #FF69B4, #00CED1, #FFD700)',
        backgroundSize: '400% 400%',
        animation: 'victoryShift 4s ease infinite',
        transform: `translate(${shake * 0.5}px, ${shake * 0.3}px)`,
      }}
    >
      <style>{`
        @keyframes victoryShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes confettiFall {
          0% { transform: translateY(-100vh) rotate(0deg) scale(1); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg) scale(0.1); opacity: 0; }
        }
        @keyframes triumphBounce {
          0%, 100% { transform: scaleY(1) rotateZ(0deg); }
          25% { transform: scaleY(1.35) rotateZ(-10deg); }
          50% { transform: scaleY(0.85) rotateZ(15deg); }
          75% { transform: scaleY(1.25) rotateZ(-8deg); }
        }
        @keyframes triumphRotate {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          25% { transform: rotateX(12deg) rotateY(-18deg); }
          50% { transform: rotateX(-18deg) rotateY(25deg); }
          75% { transform: rotateX(10deg) rotateY(-12deg); }
          100% { transform: rotateX(0deg) rotateY(0deg); }
        }
        @keyframes victoryFlash {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes starTwinkle {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
          50% { transform: scale(1.4) rotate(180deg); opacity: 0.6; }
        }
        @keyframes crownGlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(360deg); }
        }
        @keyframes heartFloat {
          0% { transform: translateY(0px) scale(1); opacity: 1; }
          100% { transform: translateY(-250px) scale(0.3); opacity: 0; }
        }
        @keyframes rainbowPulse {
          0% { color: #FFD700; text-shadow: 0 0 30px rgba(255, 215, 0, 1), 0 0 60px rgba(255, 165, 0, 1); }
          20% { color: #FF69B4; text-shadow: 0 0 30px rgba(255, 105, 180, 1), 0 0 60px rgba(255, 20, 147, 1); }
          40% { color: #00CED1; text-shadow: 0 0 30px rgba(0, 206, 209, 1), 0 0 60px rgba(0, 255, 255, 1); }
          60% { color: #32CD32; text-shadow: 0 0 30px rgba(50, 205, 50, 1), 0 0 60px rgba(0, 255, 0, 1); }
          80% { color: #FF6347; text-shadow: 0 0 30px rgba(255, 99, 71, 1), 0 0 60px rgba(255, 0, 0, 1); }
          100% { color: #FFD700; text-shadow: 0 0 30px rgba(255, 215, 0, 1), 0 0 60px rgba(255, 165, 0, 1); }
        }
        @keyframes explosionStar {
          0% { transform: scale(1) rotate(0deg); opacity: 1; }
          100% { transform: scale(2.5) rotate(360deg); opacity: 0; }
        }
      `}</style>

      {/* MASSIVE Confetti Falling */}
      <div className="absolute inset-0">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[clamp(2rem,4vw,3.75rem)]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-30px`,
              animation: `confettiFall ${1.2 + Math.random() * 1.5}s ease-in forwards`,
              animationDelay: `${Math.random() * 2.5}s`,
              filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 1))',
            }}
          >
            {i % 8 === 0 ? '⭐' : i % 8 === 1 ? '🎉' : i % 8 === 2 ? '🏆' : i % 8 === 3 ? '💎' : i % 8 === 4 ? '👑' : i % 8 === 5 ? '✨' : i % 8 === 6 ? '🌟' : '💫'}
          </div>
        ))}
      </div>

      {/* Floating Twinkling Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `starTwinkle ${2.5 + i * 0.3}s ease-in-out`,
              animationIterationCount: 'infinite',
            }}
          >
            <Star className="w-[clamp(2rem,4vw,4rem)] h-[clamp(2rem,4vw,4rem)] text-yellow-300" style={{
              filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 1))',
            }} />
          </div>
        ))}
      </div>

      {/* Pulsing Victory Rings */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              animation: `pulse 2.5s ease-out`,
              animationDelay: `${i * 0.4}s`,
              animationIterationCount: 'infinite',
            }}
          >
            <div
              className="border-4 border-yellow-300 rounded-full opacity-50"
              style={{
                width: `${180 + i * 100}px`,
                height: `${180 + i * 100}px`,
                boxShadow: `0 0 ${30 + i * 10}px rgba(255, 215, 0, 0.8)`,
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* Main Content - ULTIMATE TRIUMPH */}
      <div className="relative text-center text-white z-10 flex flex-col items-center justify-center h-full px-[2vw]">
        {/* Glowing Crown Animation */}
        <div style={{ animation: `crownGlow 2.5s ease-in-out infinite`, marginBottom: '1vh' }}>
          <Crown className="w-[clamp(6rem,10vw,10rem)] h-[clamp(6rem,10vw,10rem)] text-yellow-300 mx-auto" style={{
            filter: 'drop-shadow(0 0 40px rgba(255, 215, 0, 1))',
            animation: `victoryFlash 0.8s ease-in-out infinite`,
          }} />
        </div>

        {/* Victory Subtitle */}
        <h2 className="text-[clamp(1.5rem,4vw,3rem)] font-black text-yellow-300 mb-[3vh]" style={{
          textShadow: '0 0 30px rgba(255, 215, 0, 1), 0 0 60px rgba(255, 165, 0, 1)',
          letterSpacing: '0.08em',
          animation: `victoryFlash 1s ease-in-out infinite`,
        }}>
          🐐 {playerName} IST GOATED 🐐
        </h2>

        {/* HappyGoat Image Container - EXTREME */}
        <div className="mb-[3vh] relative">
          <div
            className="w-[clamp(14rem,22vw,20rem)] h-[clamp(17rem,28vh,25rem)] bg-gradient-to-b from-yellow-300 via-orange-300 to-pink-300 rounded-2xl shadow-2xl overflow-hidden border-8 border-yellow-200 relative"
            style={{
              animation: 'triumphBounce 1.2s ease-in-out infinite',
              boxShadow: '0 0 50px rgba(255, 215, 0, 1), inset 0 0 50px rgba(255, 255, 100, 0.4)',
              filter: 'brightness(1.3) contrast(1.2) saturate(1.5)',
            }}
          >
            <img
              src={HappyGoat}
              alt="Happy Goat"
              className="w-full h-full object-cover"
              style={{
                animation: 'triumphRotate 0s ease-in-out infinite',
                filter: 'hue-rotate(15deg)',
              }}
            />
            {/* Rainbow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-yellow-200 opacity-30 mix-blend-screen"></div>
          </div>

          {/* Explosion of Stars Around Goat */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute text-[clamp(2rem,4vw,3rem)]"
              style={{
                left: `${Math.cos((i / 12) * Math.PI * 2) * 200}px`,
                top: `${Math.sin((i / 12) * Math.PI * 2) * 200}px`,
                animation: `explosionStar 1.5s ease-out`,
                animationIterationCount: 'infinite',
                animationDelay: `${i * 0.12}s`,
              }}
            >
              ✨
            </div>
          ))}

          {/* Corner Sparkles */}
          <Sparkles className="absolute -top-[2vh] -right-[2vw] w-[clamp(3rem,5vw,5rem)] h-[clamp(3rem,5vw,5rem)] text-yellow-300 animate-pulse" style={{
            filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 1))',
            animation: 'victoryFlash 0.5s ease-in-out infinite',
          }} />
          <Sparkles className="absolute -top-[2vh] -left-[2vw] w-[clamp(3rem,5vw,5rem)] h-[clamp(3rem,5vw,5rem)] text-yellow-300 animate-pulse" style={{
            filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 1))',
            animation: 'victoryFlash 0.5s ease-in-out infinite',
            animationDelay: '0.2s',
          }} />
          <Sparkles className="absolute -bottom-[2vh] -right-[2vw] w-[clamp(3rem,5vw,5rem)] h-[clamp(3rem,5vw,5rem)] text-yellow-300 animate-pulse" style={{
            filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 1))',
            animation: 'victoryFlash 0.5s ease-in-out infinite',
            animationDelay: '0.4s',
          }} />
          <Sparkles className="absolute -bottom-[2vh] -left-[2vw] w-[clamp(3rem,5vw,5rem)] h-[clamp(3rem,5vw,5rem)] text-yellow-300 animate-pulse" style={{
            filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 1))',
            animation: 'victoryFlash 0.5s ease-in-out infinite',
            animationDelay: '0.6s',
          }} />
        </div>


        {/* Icon Explosion */}
        <div className="flex justify-center gap-[2vw] mb-[1vh] flex-wrap">
          <Trophy className="w-[clamp(2.5rem,4vw,4rem)] h-[clamp(2.5rem,4vw,4rem)] text-yellow-300 animate-spin" style={{ animationDuration: '1.5s', filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 1))' }} />
          <Star className="w-[clamp(2.5rem,4vw,4rem)] h-[clamp(2.5rem,4vw,4rem)] text-white animate-bounce" style={{ animationDelay: '0.2s', filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 1))' }} />
          <Heart className="w-[clamp(2.5rem,4vw,4rem)] h-[clamp(2.5rem,4vw,4rem)] text-pink-300 animate-pulse" style={{ animationDelay: '0.4s', filter: 'drop-shadow(0 0 15px rgba(255, 105, 180, 1))' }} />
          <Sparkles className="w-[clamp(2.5rem,4vw,4rem)] h-[clamp(2.5rem,4vw,4rem)] text-yellow-200 animate-spin" style={{ animationDelay: '0.6s', animationDuration: '2s', filter: 'drop-shadow(0 0 15px rgba(255, 255, 100, 1))' }} />
          <Crown className="w-[clamp(2.5rem,4vw,4rem)] h-[clamp(2.5rem,4vw,4rem)] text-yellow-300 animate-bounce" style={{ animationDelay: '0.8s', filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 1))' }} />
        </div>

        {/* ULTIMATE Button */}
        <button
          onClick={onBackToStart}
          className="bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 text-red-600 py-[2vh] px-[4vw] rounded-full font-black text-[clamp(0.875rem,1.5vw,1.25rem)] border-6 border-red-500 shadow-2xl transform hover:scale-125 transition-all"
          style={{
            textShadow: '0 0 10px rgba(255, 215, 0, 0.8)',
            boxShadow: '0 0 40px rgba(255, 215, 0, 1), inset 0 0 20px rgba(255, 255, 255, 0.6)',
            animation: 'pulse 0.6s ease-in-out infinite',
          }}
        >
          🏠 ZURÜCK ZUM START 🏠
        </button>

      </div>
    </div>
  );
};