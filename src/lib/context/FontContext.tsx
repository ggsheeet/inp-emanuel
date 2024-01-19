'use client'
import React, { createContext, useContext } from 'react';
import { Raleway, Frank_Ruhl_Libre } from 'next/font/google';

interface FontContextProps {
  rale: ReturnType<typeof Raleway>;
  ruhl: ReturnType<typeof Frank_Ruhl_Libre>;
}

const raleFont = Raleway({ subsets: ['latin'] });
const ruhlFont = Frank_Ruhl_Libre({ subsets: ['latin'] });

const FontContext = createContext<FontContextProps | undefined>(undefined);

export const useFontContext = () => {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error('useFontContext must be used within a FontProvider');
  }
  return context;
};

interface FontProviderProps {
  children: React.ReactNode;
}

export const FontProvider: React.FC<FontProviderProps> = ({ children }) => {
  const contextValue: FontContextProps = {
    rale: raleFont,
    ruhl: ruhlFont,
  };

  return <FontContext.Provider value={contextValue}>{children}</FontContext.Provider>;
};
