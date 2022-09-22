import React, {createContext, useState} from 'react';
import {v4} from 'uuid';

export const Logcontext = createContext();
function LogContextProvider({children}) {
  const [logs, setLogs] = useState([]);

  const onCreate = ({title, body, date}) => {
    const log = {id: v4(), title, body, date};
    setLogs([log, ...logs]);
  };

  const onModify = target => {
    const nextLogs = logs.map(log => (log.id === target.id ? target : log));
    setLogs(nextLogs);
  };

  const onRemove = id => {
    const nextLogs = logs.filter(log => log.id !== id);
    setLogs(nextLogs);
  };

  return (
    <Logcontext.Provider value={{logs, onCreate, onModify, onRemove}}>
      {children}
    </Logcontext.Provider>
  );
}

export default LogContextProvider;
