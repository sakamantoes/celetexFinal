// components/ui/SkeletonLoader.jsx
import React from 'react';

export const SkeletonLoader = ({ 
  type = 'section', 
  height = '400px', 
  width = '100%',
  className = '' 
}) => {
  const getSkeletonContent = () => {
    switch (type) {
      case 'card':
        return (
          <div className="flex flex-col gap-4 w-full">
            <div className="w-full h-[200px] rounded-xl bg-gradient-to-r from-charcoal via-[#2a2a2a] to-charcoal animate-pulse" />
            <div className="space-y-3 px-2">
              <div className="h-4 w-3/4 rounded bg-gradient-to-r from-charcoal via-[#2a2a2a] to-charcoal animate-pulse" />
              <div className="h-3 w-1/2 rounded bg-gradient-to-r from-charcoal via-[#2a2a2a] to-charcoal animate-pulse" />
              <div className="h-3 w-full rounded bg-gradient-to-r from-charcoal via-[#2a2a2a] to-charcoal animate-pulse" />
            </div>
          </div>
        );

      case 'stats':
        return (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-6 rounded-xl bg-charcoal border border-white/6 animate-pulse">
                <div className="h-8 w-16 bg-gradient-to-r from-charcoal via-[#2a2a2a] to-charcoal rounded mb-2" />
                <div className="h-4 w-24 bg-gradient-to-r from-charcoal via-[#2a2a2a] to-charcoal rounded" />
              </div>
            ))}
          </div>
        );

      case 'brand':
        return (
          <div className="bg-charcoal rounded-2xl overflow-hidden border border-white/6 animate-pulse">
            <div className="h-[200px] bg-gradient-to-r from-charcoal via-[#2a2a2a] to-charcoal" />
            <div className="p-6 space-y-3">
              <div className="h-6 w-3/4 bg-gradient-to-r from-charcoal via-[#2a2a2a] to-charcoal rounded" />
              <div className="h-4 w-full bg-gradient-to-r from-charcoal via-[#2a2a2a] to-charcoal rounded" />
              <div className="h-4 w-2/3 bg-gradient-to-r from-charcoal via-[#2a2a2a] to-charcoal rounded" />
            </div>
          </div>
        );

      default:
        return (
          <div 
            className="w-full rounded-2xl bg-gradient-to-r from-charcoal via-[#2a2a2a] to-charcoal animate-pulse"
            style={{ minHeight: height }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-gold/20 rounded-full">
                <div className="w-12 h-12 border-4 border-t-gold border-r-transparent border-b-transparent border-l-transparent 
                  rounded-full animate-spin" />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`w-full ${className}`} style={{ width, minHeight: height }}>
      {getSkeletonContent()}
    </div>
  );
};