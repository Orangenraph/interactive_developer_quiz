// src/components/BackButton.tsx
import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  onClick: () => void;
  variant?: 'light' | 'dark';
}

const BackButton: React.FC<BackButtonProps> = ({ onClick, variant = 'dark' }) => {
  const isDark = variant === 'dark';

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
        isDark 
          ? 'text-teal-600 hover:bg-teal-50' 
          : 'text-white hover:bg-white/20'
      }`}
    >
      <ArrowLeft className="w-5 h-5" />
      <span>Zurück</span>
    </button>
  );
};

export default BackButton;