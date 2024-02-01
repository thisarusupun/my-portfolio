import React, { useState } from "react";

import ThemeContext from "./themeContext";

const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(true)

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider