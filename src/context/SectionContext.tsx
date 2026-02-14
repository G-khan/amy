import React, { createContext, useContext, ReactNode } from 'react';

type SectionContextType = {
  activeSection: string;
};

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const SectionProvider = ({
  children,
  activeSection,
}: {
  children: ReactNode;
  activeSection: string;
}) => (
  <SectionContext.Provider value={{ activeSection }}>{children}</SectionContext.Provider>
);

export const useSection = () => {
  const ctx = useContext(SectionContext);
  if (!ctx) {
    return { activeSection: 'home' };
  }
  return ctx;
};
