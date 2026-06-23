import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HealthGuardProvider } from './context/HealthGuardContext';
import Layout from './components/Layout';

// Pages
import Dashboard from './pages/Dashboard';
import Learn from './pages/Learn';
import Tutor from './pages/Tutor';
import Library from './pages/Library';
import QuestionBank from './pages/QuestionBank';
import PaperGenerator from './pages/PaperGenerator';
import Progress from './pages/Progress';
import Lab from './pages/Lab';
import Recharge from './pages/Recharge';

function App() {
  return (
    <HealthGuardProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="learn" element={<Learn />} />
            <Route path="tutor" element={<Tutor />} />
            <Route path="library" element={<Library />} />
            <Route path="question-bank" element={<QuestionBank />} />
            <Route path="paper-generator" element={<PaperGenerator />} />
            <Route path="progress" element={<Progress />} />
            <Route path="lab" element={<Lab />} />
            <Route path="recharge" element={<Recharge />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HealthGuardProvider>
  );
}

export default App;
