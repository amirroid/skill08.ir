import React, { useState, useRef } from 'react';
import { Play, Pause, ExternalLink, Code2, Layers, CheckCircle2 } from 'lucide-react';

export default function VideoHoverCard({ title, category, duration, description, codeSnippet, badge, isRtl, onActionClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`theme-card p-6 relative overflow-hidden transition-all duration-300 group cursor-pointer ${
        isHovered ? 'border-blue-500/50 shadow-lg scale-[1.01]' : 'border-[#21262D]'
      }`}
    >
      {/* Top Header Row */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
          {badge}
        </span>
        <span className="text-xs font-mono text-slate-400">
          {duration}
        </span>
      </div>

      {/* Title & Description */}
      <div className="space-y-2 mb-4">
        <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>

      {/* Video Preview Container with Hover Mask Reveal */}
      <div className="relative rounded-lg overflow-hidden bg-[#0D1117] border border-[#21262D] h-44 mb-4 flex items-center justify-center">
        
        {/* Animated Simulated Interactive Canvas / Code Preview */}
        <div className={`w-full h-full p-4 font-mono text-[11px] bg-slate-950 transition-all duration-500 ${
          isHovered ? 'scale-105 opacity-90' : 'opacity-70'
        } dir-ltr`} dir="ltr">
          <div className="flex items-center justify-between text-slate-500 border-b border-slate-800 pb-2 mb-2">
            <span className="flex items-center gap-1">
              <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-400 animate-ping' : 'bg-slate-600'}`} />
              <span>{category}</span>
            </span>
            <span>WorldSkills Skill 08</span>
          </div>

          <pre className="text-blue-300 leading-relaxed overflow-hidden">
            <code>{codeSnippet}</code>
          </pre>

          {/* Progress Bar Indicator when playing on hover */}
          {isPlaying && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600/30 overflow-hidden">
              <div className="h-full bg-blue-500 w-full animate-pulse" />
            </div>
          )}
        </div>

        {/* Hover Overlay Play Icon Indicator */}
        <div className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`}>
          <div className="w-10 h-10 rounded-full bg-[#161B22]/90 border border-slate-700 flex items-center justify-center text-white">
            <Play className="w-4 h-4 translate-x-0.5" />
          </div>
        </div>

      </div>

      {/* Footer Callout */}
      <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-[#21262D]">
        <span className="group-hover:text-white transition-colors">
          {isRtl ? 'پیش‌نمایش تعاملی پودمان' : 'Interactive Module Preview'}
        </span>
        <ExternalLink className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-[-2px] transition-transform" />
      </div>

    </div>
  );
}
