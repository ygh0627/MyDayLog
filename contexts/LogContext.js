import React, {createContext, useState} from 'react';

export const Logcontext = createContext();
function LogContextProvider({children}) {
  const [logs, setLogs] = useState([]);
  return <Logcontext.Provider value={{logs}}>{children}</Logcontext.Provider>;
}

export default LogContextProvider;
