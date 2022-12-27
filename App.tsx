import { useState } from 'react';
import { MdContext } from './components/Context';
import { MdContextType } from './lib/types';
import AppNavigator from './AppNavigator';

export default function App() {
  const [inputData, setInputData] = useState<string>('');

  const input = (info: string) => {
    setInputData(info);
  };

  const clear = () => {
    setInputData('');
  };

  const mdContext: MdContextType = {
    mdinput: inputData, 
    input: input, 
    clear: clear
  };
  
  return (
    <MdContext.Provider value={mdContext}>
       <AppNavigator />
    </MdContext.Provider>
  );

}

