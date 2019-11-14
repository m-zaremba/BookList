import React, {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';

export const Header = () => {
  const {toggleTheme} = useContext(ThemeContext);
  return (
    <div>
      <button onClick={() => toggleTheme()}>Change theme</button>
    </div>
  )
}
