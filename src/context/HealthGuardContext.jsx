import React, { createContext, useContext, useState, useEffect } from 'react';

const HealthGuardContext = createContext();

export const useHealthGuard = () => {
  return useContext(HealthGuardContext);
};

export const HealthGuardProvider = ({ children }) => {
  const [isBreakMode, setIsBreakMode] = useState(false);
  const [sessionTime, setSessionTime] = useState(0); // in seconds
  const [breakTimeRemaining, setBreakTimeRemaining] = useState(0); // in seconds
  
  // Configuration
  const SESSION_LIMIT = 45 * 60; // 45 minutes
  const BREAK_DURATION = 5 * 60; // 5 minutes

  // Timer for tracking active session
  useEffect(() => {
    let interval;
    if (!isBreakMode) {
      interval = setInterval(() => {
        setSessionTime((prev) => {
          if (prev + 1 >= SESSION_LIMIT) {
            triggerBreak();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isBreakMode, SESSION_LIMIT]);

  // Timer for break mode
  useEffect(() => {
    let interval;
    if (isBreakMode && breakTimeRemaining > 0) {
      interval = setInterval(() => {
        setBreakTimeRemaining((prev) => {
          if (prev <= 1) {
            setIsBreakMode(false);
            setSessionTime(0);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isBreakMode, breakTimeRemaining]);

  const triggerBreak = () => {
    setIsBreakMode(true);
    setBreakTimeRemaining(BREAK_DURATION);
  };

  const skipBreak = () => {
    // For demonstration/testing purposes
    setIsBreakMode(false);
    setSessionTime(0);
    setBreakTimeRemaining(0);
  };

  return (
    <HealthGuardContext.Provider value={{ 
      isBreakMode, 
      sessionTime, 
      breakTimeRemaining,
      triggerBreak,
      skipBreak,
      SESSION_LIMIT,
      BREAK_DURATION
    }}>
      {children}
    </HealthGuardContext.Provider>
  );
};
