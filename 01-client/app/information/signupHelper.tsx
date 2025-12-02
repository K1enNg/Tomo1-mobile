import { useState } from "react";
import { useRouter } from "expo-router"
import { useSession } from './SessionContext';

export const useSignup = () => {
 
  const router = useRouter();
  const port = process.env.EXPO_PUBLIC_PORT;

  const { sessionId, setSessionId } = useSession();
  const [errorText, setErrorText] = useState("");

  const startSession = async () => {
    if (!sessionId) {
      const res = await fetch(`http://localhost:5555/signup/start`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      setSessionId(data.sessionId);
    }
  };

  const signIn = async (fieldKeys: string[], values: string[], nextScreen: string) => {
    try{
      console.log("Called");
      const res = await fetch (`http://localhost:5555/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          [fieldKeys[0]] : values[0],
          [fieldKeys[1]] : values[1],
        }),
      })

      if (!res.ok) {
        const err = await res.text();
        setErrorText(err);
        console.log(err);
        return;
      }

      console.log("Navigating to", nextScreen);
      setErrorText("")
      router.push(nextScreen as any);
      return;

    } catch (err){
        setErrorText("Connection error.");
        console.log(err);
        return;
    } 
  };

  const saveField = async (fieldKey: string, value: string) => {
    if (!sessionId) return false; 

    try {
      const response = await fetch(`http://localhost:5555/signup/${sessionId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [fieldKey]: value }),
      });

      if (!response.ok) {
        const err = await response.text();
        setErrorText(err);
        console.log(err);
        return false;
      }

      return true;
    } catch (err) {
        setErrorText("Connection error.");
        console.log(err);
        return false;
    }
  };

   const signUp = async () => {
    if(!sessionId) return;

    try {
      const response = await fetch(`http://localhost:5555/signup/complete/${sessionId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if(!response.ok){
        const err = await response.text();
        setErrorText(err);
        return null;
      }

      const data = await response.json();
      return data;
    }
    catch{ 
      setErrorText("Đã xảy ra lỗi!");
      return null;
    }
  }

  const submitField = async (fieldKey: string, value: string, nextScreen: string, isFinal: boolean) => {
    console.log("Submitting field:", fieldKey, value, nextScreen);
    const success = await saveField(fieldKey, value);
    console.log("Success?", success);

    if(!success) return;
    
    if(isFinal){
      const result = await signUp();
      
      if (!result) {
        return;
      } 

      console.log("Navigating to", nextScreen);
      setErrorText("")
      router.push(nextScreen as any);
      return;
    } 

    console.log("Navigating to", nextScreen);
    setErrorText("")
    router.push(nextScreen as any);
  };

  return {
    sessionId,
    errorText,
    signIn,
    startSession,
    submitField,
    signUp
  };
};

export default useSignup;