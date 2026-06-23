import React from 'react';
import { BarChart, TrendingUp, Award, Target } from 'lucide-react';

const Progress = () => {
  return (
    <div className="progress-page">
      <h1 className="text-3xl font-bold mb-2">Learning Progress</h1>
      <p className="text-muted mb-8">Track your performance and identify areas for improvement.</p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="glass-card flex flex-col items-center text-center p-6 border-accent-teal/30">
          <TrendingUp size={36} className="text-accent-teal mb-3" />
          <h3 className="text-2xl font-bold">85%</h3>
          <p className="text-sm text-muted">Overall Accuracy</p>
        </div>
        <div className="glass-card flex flex-col items-center text-center p-6 border-accent-purple/30">
          <Award size={36} className="text-accent-purple mb-3" />
          <h3 className="text-2xl font-bold">12</h3>
          <p className="text-sm text-muted">Chapters Mastered</p>
        </div>
        <div className="glass-card flex flex-col items-center text-center p-6 border-accent-blue/30">
          <Target size={36} className="text-accent-blue mb-3" />
          <h3 className="text-2xl font-bold">A+</h3>
          <p className="text-sm text-muted">Predicted Grade</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-panel p-6">
          <h3 className="font-bold mb-6 flex items-center gap-2">
            <BarChart size={18} /> Subject Performance
          </h3>
          
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Physics</span>
                <span className="text-accent-teal">90%</span>
              </div>
              <div className="w-full bg-bg-primary rounded-full h-2.5">
                <div className="bg-accent-teal h-2.5 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Chemistry</span>
                <span className="text-accent-purple">75%</span>
              </div>
              <div className="w-full bg-bg-primary rounded-full h-2.5">
                <div className="bg-accent-purple h-2.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Biology</span>
                <span className="text-accent-green">82%</span>
              </div>
              <div className="w-full bg-bg-primary rounded-full h-2.5">
                <div className="bg-accent-green h-2.5 rounded-full" style={{ width: '82%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6">
          <h3 className="font-bold mb-6 flex items-center gap-2">
            <Award size={18} /> Recent Achievements
          </h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 bg-bg-primary p-3 rounded-lg border border-border-glass">
              <div className="w-10 h-10 rounded-full bg-[rgba(245,158,11,0.1)] flex items-center justify-center text-yellow-500">
                <Award size={20} />
              </div>
              <div>
                <h4 className="font-medium text-sm">7-Day Streak</h4>
                <p className="text-xs text-muted">Studied consistently for a week.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-bg-primary p-3 rounded-lg border border-border-glass">
              <div className="w-10 h-10 rounded-full bg-[rgba(45,212,191,0.1)] flex items-center justify-center text-accent-teal">
                <Award size={20} />
              </div>
              <div>
                <h4 className="font-medium text-sm">Physics Master</h4>
                <p className="text-xs text-muted">Scored 100% in 3 quizzes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
