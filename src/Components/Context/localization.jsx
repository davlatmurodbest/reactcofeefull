import React from "react";

let Context = React.createContext(null)

function Provider({children}) {

    let [lang, setlang] = React.useState('en')


return <Context.Provider value={{lang, setlang}}>{children}</Context.Provider>
}

export {Context, Provider}