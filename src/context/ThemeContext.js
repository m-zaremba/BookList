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
  setDarkmode(!darkmode);
  window.localStorage.setItem('darkTheme', !darkmode);
};


  return <ThemeContext.Provider value={{
    darkTheme, toggleTheme,
  }}>
    {props.children}
  </ThemeContext.Provider>
}

const defaultTheme = [
  '--text: rgb(0, 0, 0)',
  '--bodyBackground: rgb(22, 167, 153)',
  '--headerBackground: rgb(255, 139, 20)',
  '--listElementBackground: rgb(255, 157, 85)',
];

const darkTheme = [
  '--text: yellow',
  '--bodyBackground: black',
  '--headerBackground: rgb(26, 26, 26)',
  '--listElementBackground: rgb(38, 38, 38)',
]
