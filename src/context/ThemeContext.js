import React, { createContext, useState, useLayoutEffect } from 'react';

export const ThemeContext = createContext({
  isDarkmodeActive: false,
  toggleTheme: () => {},
});

export const ThemeProvider = (props) => {
  const [darkmode, setDarkmode] = useState(false);

  useLayoutEffect(() => {
    const lastTheme = window.localStorage.getItem('darkTheme');

    if (lastTheme === 'true') {
      setDarkmode(true);
      applyTheme(darkTheme);
    } else {
      setDarkmode(false);
      applyTheme(defaultTheme);
    }

  }, [darkmode]);

  const applyTheme = theme => {
    const root = document.getElementsByTagName('html')[0];
    root.style.cssText = theme.join(';');
}

  const toggleTheme = () => {
    const body = document.getElementsByTagName('body')[0];
    body.style.cssText = 'transition: background .5s ease';
    setDarkmode(!darkmode);
    window.localStorage.setItem('darkTheme', !darkmode);
};


  return <ThemeContext.Provider value={{
    darkTheme, toggleTheme, darkmode
  }}>
    { props.children }
  </ThemeContext.Provider>
}

const defaultTheme = [
  '--text: #203d3c',
  '--bodyBackground: rgb(255, 255, 255)',
  '--headerBackground: #FFDA5B',
  '--oddListElementBackground: rgba(255, 218, 91, 0.54)',
  '--evenListElementBackground: rgba(255, 218, 91, 0.65)',
  '--addBookFormBackground: #FFDA5B',
];

const darkTheme = [
  '--text: rgb(212, 212, 212)',
  '--bodyBackground: rgb(56, 56, 56)',
  '--headerBackground: rgb(27, 27, 27)',
  '--oddListElementBackground: rgba(0, 0, 0, 0.44)',
  '--evenListElementBackground: rgba(0, 0, 0, 0.65)',
  '--addBookFormBackground: rgb(27, 27, 27)',
]
