import React, {createContext, useState} from 'react';
import {v4} from 'uuid';

export const Logcontext = createContext();
function LogContextProvider({children}) {
  const [logs, setLogs] = useState([]);
  const onCreate = ({title, body, date}) => {
    const log = {id: v4(), title, body, date};
    setLogs([log, ...logs]);
  };
  return (
    <Logcontext.Provider value={{logs, onCreate}}>
      {children}
    </Logcontext.Provider>
  );
}

export default LogContextProvider;
