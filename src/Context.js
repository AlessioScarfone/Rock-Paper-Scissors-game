import { createContext } from 'react';


const Context = createContext({
    isBonusMode: false
});

Context.displayName = "Context";


export default Context;