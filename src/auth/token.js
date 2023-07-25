import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import reduxStore from "../store/store";
const persistor = reduxStore.persistor;

const TokenShow = () => {
  // Access the token from the Redux store using useSelector
  const token = useSelector((state) => state.auth.token);

  const [persistedToken, setPersistedToken] = useState(null);

  useEffect(() => {
    // Subscribe to the persist event to get the persisted state
    const unsubscribe = persistor.subscribe(() => {
      const persistedState = persistor.getState();
      const persistedToken = persistedState?.auth?.token;
      setPersistedToken(persistedToken);
    });

    // Unsubscribe from the persist event when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  // Use the tokens as needed
  return (
    <div>
      {token ? (
        <p>User is authenticated. Token from store: {token}</p>
      ) : (
        <p>User is not authenticated.</p>
      )}
    </div>
  );
};

export default TokenShow;
