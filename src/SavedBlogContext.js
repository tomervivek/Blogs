import React, { createContext, useContext, useState, useEffect } from 'react';

const SavedBlogContext = createContext();

export const SavedBlogProvider = ({ children }) => {
  const [checked, setChecked] = useState(JSON.parse(localStorage.getItem('saved')) || []);

  useEffect(() => {
    localStorage.setItem('saved', JSON.stringify(checked));
  }, [checked]);

  const onChangeFun = (value) => {
    if (checked.includes(value)) {
      setChecked(checked.filter((item) => item !== value));
    } else {
      setChecked([...checked, value]);
    }
  };

  return (
    <SavedBlogContext.Provider value={{ checked, onChangeFun }}>
      {children}
    </SavedBlogContext.Provider>
  );
};

export const useSavedBlogContext = () => {
  return useContext(SavedBlogContext);
};
