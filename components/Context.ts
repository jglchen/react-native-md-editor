import React, { createContext } from 'react';

export const MdContext = createContext({
    mdinput: '',
    input: (info: string) => { },
    clear: () => { }
});
