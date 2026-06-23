import React from 'react';
import { Play, CheckCircle, ChevronDown } from 'lucide-react';

const Learn = () => {
  return (
    <div className="learn-page h-full flex flex-col md:flex-row gap-6">
      {/* Video Player Section */}
      <div className="flex-1 flex flex-col">
        <div className="video-player-wrapper aspect-video bg-black rounded-xl overflow-hidden relative mb-4 shadow-soft">
          {/* Placeholder for AI Animated Video */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-bg-tertiary to-bg-primary">
            <Play size={64} className="text-accent-teal mb-4 opacity-80" />
            <p className="text-muted font-medium">Interactive AI Video Lesson</p>
            <p className="text-xs text-muted mt-2">Refraction of Light at Curved Surfaces</p>
          </div>
        </div>
        
        <div className="glass-panel p-6 flex-1 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-2">1. Introduction to Curved Surfaces</h2>
          <p className="text-muted mb-6">Learn how light behaves when passing through lenses and other curved transparent materials.</p>
          
          <h3 className="font-bold text-lg mb-3 border-b border-border-glass pb-2">Concept Explanation</h3>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            A curved surface can either converge (bring together) or diverge (spread apart) light rays. 
            Convex lenses are thicker in the middle and converge light, whereas concave lenses are thinner 
            in the middle and diverge light. This fundamental principle is used in human eyes, cameras, 
            microscopes, and telescopes.
          </p>
          
          <div className="bg-[rgba(45,212,191,0.05)] border border-[rgba(45,212,191,0.2)] p-4 rounded-lg">
            <h4 className="font-bold text-accent-teal mb-2 text-sm flex items-center gap-2">
              <CheckCircle size={16} /> Key Takeaway
            </h4>
            <p className="text-sm">Refraction is the bending of light as it passes from one transparent medium to another.</p>
          </div>
        </div>
      </div>

      {/* Chapters Sidebar */}
      <div className="w-full md:w-80 flex flex-col gap-4">
        <div className="glass-panel p-4">
          <h3 className="font-bold mb-4 flex items-center justify-between">
            <span>Course Content</span>
            <span className="text-xs bg-bg-primary px-2 py-1 rounded text-accent-teal">12 / 16</span>
          </h3>
          
          <div className="chapter-list flex flex-col gap-2">
            <div className="chapter-item bg-bg-tertiary rounded-lg overflow-hidden border border-border-glass">
              <div className="p-3 flex justify-between items-center cursor-pointer bg-bg-glass-hover">
                <span className="font-medium text-sm">Ch 4: Refraction of Light</span>
                <ChevronDown size={16} />
              </div>
              <div className="p-2 flex flex-col gap-1 bg-[rgba(0,0,0,0.2)]">
                <div className="p-2 rounded text-sm text-accent-teal bg-[rgba(45,212,191,0.1)] flex items-center gap-2">
                  <Play size={14} /> 1. Intro to Curved Surfaces
                </div>
                <div className="p-2 rounded text-sm text-muted hover:bg-bg-tertiary cursor-pointer flex items-center gap-2">
                  <CheckCircle size={14} className="text-accent-green" /> 2. Convex vs Concave Lenses
                </div>
                <div className="p-2 rounded text-sm text-muted hover:bg-bg-tertiary cursor-pointer flex items-center gap-2">
                  <Play size={14} className="opacity-50" /> 3. Ray Diagrams
                </div>
              </div>
            </div>
            
            <div className="chapter-item bg-bg-tertiary rounded-lg p-3 flex justify-between items-center cursor-pointer border border-border-glass opacity-70">
              <span className="font-medium text-sm">Ch 5: Human Eye & Colorful World</span>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
