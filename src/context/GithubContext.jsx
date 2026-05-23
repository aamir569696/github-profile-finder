import React, { createContext, useState } from "react";

export const GithubContext = createContext();

export const GithubProvider = ({children}) => {
  const [userdata, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <GithubContext.Provider
      value={{
        userdata,
        setUserData,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
{children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
