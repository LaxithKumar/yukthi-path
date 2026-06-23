import React from 'react';
import { Book, Download, Eye, Search } from 'lucide-react';

const Library = () => {
  const books = [
    { id: 1, title: 'Physical Science', class: 'Class 10', cover: 'blue', chapters: 12 },
    { id: 2, title: 'Biological Science', class: 'Class 10', cover: 'green', chapters: 10 },
    { id: 3, title: 'Lab Manual: Physics', class: 'Class 10', cover: 'teal', chapters: 15 },
    { id: 4, title: 'Lab Manual: Biology', class: 'Class 10', cover: 'purple', chapters: 14 },
  ];

  return (
    <div className="library-page">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Digital Library</h1>
          <p className="text-muted">Access your official Telangana State Board textbooks and materials.</p>
        </div>
        <div className="search-bar glass-panel w-full md:w-auto">
          <Search size={18} className="text-muted" />
          <input type="text" placeholder="Search textbooks..." className="search-input" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.map(book => (
          <div key={book.id} className="glass-card flex flex-col group relative overflow-hidden">
            <div className={`h-48 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br`} 
                 style={{
                   background: book.cover === 'blue' ? 'linear-gradient(135deg, #1e3a8a, #3b82f6)' :
                               book.cover === 'green' ? 'linear-gradient(135deg, #064e3b, #10b981)' :
                               book.cover === 'teal' ? 'linear-gradient(135deg, #134e4a, #14b8a6)' :
                               'linear-gradient(135deg, #4c1d95, #8b5cf6)'
                 }}>
              <Book size={64} className="text-white opacity-50 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h3 className="font-bold text-lg mb-1">{book.title}</h3>
            <p className="text-xs text-muted mb-4">{book.class} • {book.chapters} Chapters</p>
            
            <div className="flex gap-2 mt-auto">
              <button className="flex-1 btn btn-primary py-2 text-sm flex justify-center items-center gap-2">
                <Eye size={16} /> Read
              </button>
              <button className="btn btn-secondary py-2 px-3 text-sm flex justify-center items-center">
                <Download size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 glass-panel p-8 text-center">
        <h3 className="text-xl font-bold mb-2">Offline Access Available</h3>
        <p className="text-muted mb-4 max-w-lg mx-auto">You can download textbooks and notes to access them without an internet connection. Downloaded files will be available even during Break Mode.</p>
        <button className="btn btn-secondary border-accent-teal text-accent-teal">View Downloaded Files</button>
      </div>
    </div>
  );
};

export default Library;
