import { Raleway, Frank_Ruhl_Libre } from 'next/font/google';

export interface FontContextProps {
    rale: ReturnType<typeof Raleway>;
    ruhl: ReturnType<typeof Frank_Ruhl_Libre>;
  }

export interface FontProviderProps {
children: React.ReactNode;
}

export interface LinkProps {
    href: string,
    children: React.ReactNode
}