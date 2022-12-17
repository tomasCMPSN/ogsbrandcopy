import { useState } from "react";
import { useAuthContext } from "../../../context/useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setError(null);

    const response = await fetch("/apiogsbrandcopy/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json()

    if (!response.ok) {
        setError(json.error)
    }
    if (response.ok) {
        localStorage.setItem('user', JSON.stringify(json))

        dispatch({type: 'LOGIN', payload: json})
    }
  };

  return { login, error }
};
