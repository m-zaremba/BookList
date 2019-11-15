import React, {createContext, useState, useLayoutEffect} from 'react';

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
    {props.children}
  </ThemeContext.Provider>
}

const defaultTheme = [
  '--text: rgb(0, 0, 0)',
  '--bodyBackground: rgb(255, 255, 255)',
  '--headerBackground: rgb(130, 130, 130)',
  '--listElementBackground: rgb(176, 176, 176)',
];

const darkTheme = [
  '--text: yellow',
  '--bodyBackground: black',
  '--headerBackground: rgb(26, 26, 26)',
  '--listElementBackground: rgb(38, 38, 38)',
]
