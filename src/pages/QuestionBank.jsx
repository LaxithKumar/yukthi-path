import React from 'react';
import { FileText, Download, Calendar } from 'lucide-react';

const QuestionBank = () => {
  const papers = [
    { year: 2023, subject: 'Physical Science', type: 'Final Exam', size: '1.2 MB' },
    { year: 2023, subject: 'Biological Science', type: 'Final Exam', size: '1.5 MB' },
    { year: 2022, subject: 'Physical Science', type: 'Final Exam', size: '1.1 MB' },
    { year: 2022, subject: 'Biological Science', type: 'Final Exam', size: '1.3 MB' },
  ];

  return (
    <div className="question-bank-page max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Previous Year Question Bank</h1>
      <p className="text-muted mb-8">Practice with official past papers to boost your confidence.</p>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <select className="bg-bg-tertiary border border-border-glass rounded-lg px-4 py-2 text-text-primary outline-none focus:border-accent-teal">
          <option>All Subjects</option>
          <option>Physical Science</option>
          <option>Biological Science</option>
        </select>
        <select className="bg-bg-tertiary border border-border-glass rounded-lg px-4 py-2 text-text-primary outline-none focus:border-accent-teal">
          <option>All Years</option>
          <option>2023</option>
          <option>2022</option>
          <option>2021</option>
        </select>
      </div>

      <div className="flex flex-col gap-4">
        {papers.map((paper, idx) => (
          <div key={idx} className="glass-card flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 hover:border-accent-teal">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[rgba(45,212,191,0.1)] rounded-lg text-accent-teal">
                <FileText size={24} />
              </div>
              <div>
                <h3 className="font-bold">{paper.subject} • {paper.year}</h3>
                <p className="text-sm text-muted flex items-center gap-2">
                  <Calendar size={14} /> {paper.type} • PDF • {paper.size}
                </p>
              </div>
            </div>
            <button className="btn btn-secondary border-accent-teal text-accent-teal flex items-center gap-2 md:w-auto w-full">
              <Download size={16} /> Download Paper
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionBank;
