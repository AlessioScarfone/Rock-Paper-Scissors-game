import { createContext } from 'react';


const Context = createContext({
    isBonusMode: false,
    changeIsBonusMode: () => {}
});

Context.displayName = "Context";


export default Context;