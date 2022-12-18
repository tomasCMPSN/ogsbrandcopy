import { useState } from "react";
import { useAuthContext } from "../../../context/useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext()

  const signup = async (email, password) => {
    setError(null);

    const response = await fetch("/apiogsbrandcopy/signup", {
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

  return { signup, error }
};