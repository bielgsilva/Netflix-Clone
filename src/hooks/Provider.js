import React from 'react';
import Context from '../context/Context';
import ValuesProvider from './ValueProvider';

export default function Provider({ children }) {
  return (
    <Context.Provider value={ ValuesProvider()}>
      {children}
    </Context.Provider>
  );
}
