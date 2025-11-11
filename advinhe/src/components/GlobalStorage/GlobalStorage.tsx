import React from "react";

export interface GlobalType {
   input: string[],  
   setInput: React.Dispatch<React.SetStateAction<string[]>>,
}

interface GlobalStorageProps {
  children: React.ReactNode;
}

export const GlobalContext = React.createContext({});

export const GlobalStorage = ({ children }: GlobalStorageProps) => {
  const [input, setInput] = React.useState([]);

  console.log(input);

  return (
    <GlobalContext.Provider value={{ input, setInput }}>
         {children}
    </GlobalContext.Provider>
  );
};