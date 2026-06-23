import React, { useState } from 'react';
import { Settings, Sparkles, FileOutput } from 'lucide-react';

const PaperGenerator = () => {
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("AI has generated a practice paper! (Demo)");
    }, 2000);
  };

  return (
    <div className="paper-generator-page max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2">
          <Sparkles className="text-accent-teal" /> AI Model Paper Generator
        </h1>
        <p className="text-muted">Create custom practice exams tailored to your weak points.</p>
      </div>

      <div className="glass-panel p-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Settings size={18} /> Configuration
            </h3>
            
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm text-muted mb-2">Subject</label>
                <select className="w-full bg-bg-primary border border-border-glass rounded-lg px-4 py-2 text-text-primary">
                  <option>Physical Science</option>
                  <option>Biological Science</option>
                  <option>Combined Science</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-muted mb-2">Difficulty Level</label>
                <input type="range" min="1" max="3" defaultValue="2" className="w-full accent-accent-teal" />
                <div className="flex justify-between text-xs text-muted mt-1">
                  <span>Easy</span>
                  <span>Medium</span>
                  <span>Hard</span>
                </div>
              </div>

              <div>
                <label className="block text-sm text-muted mb-2">Include Chapters</label>
                <div className="flex flex-col gap-2 bg-bg-primary p-3 rounded-lg border border-border-glass h-32 overflow-y-auto">
                  <label className="flex items-center gap-2 text-sm"><input type="checkbox" defaultChecked /> Ch 1: Heat</label>
                  <label className="flex items-center gap-2 text-sm"><input type="checkbox" defaultChecked /> Ch 2: Acids, Bases & Salts</label>
                  <label className="flex items-center gap-2 text-sm"><input type="checkbox" defaultChecked /> Ch 3: Kinematics</label>
                  <label className="flex items-center gap-2 text-sm"><input type="checkbox" /> Ch 4: Refraction</label>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[rgba(45,212,191,0.05)] border border-[rgba(45,212,191,0.2)] rounded-xl p-6 flex flex-col items-center justify-center text-center">
            <FileOutput size={48} className="text-accent-teal mb-4 opacity-80" />
            <h3 className="text-xl font-bold text-accent-teal mb-2">Ready to Generate</h3>
            <p className="text-sm text-muted mb-6">Based on your recent quiz scores, we recommend focusing on 'Acids, Bases & Salts'.</p>
            
            <button 
              onClick={handleGenerate} 
              disabled={loading}
              className="btn btn-primary w-full max-w-xs"
            >
              {loading ? 'Generating...' : 'Generate Paper'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaperGenerator;
