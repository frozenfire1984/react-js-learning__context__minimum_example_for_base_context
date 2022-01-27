import {createContext} from 'react';

export const themes = {
    // light: {
    //     background: 'hsl(0, 0%, 93%)',
    //     textColor: 'hsl(0, 0%, 10%)',
    // },
    // dark: {
    //     background: 'hsl(0, 0%, 20%)',
    //     textColor: 'hsl(0, 0%, 90%)',
    // },
    light: {
        background: 'white',
        textColor: 'black',
    },
    dark: {
        background: 'black',
        textColor: 'white',
    },
}

//export const ThemeContext = createContext();
export const ThemeContext = createContext({
    theme: themes.light,
    toggleTheme: () => {},
});
