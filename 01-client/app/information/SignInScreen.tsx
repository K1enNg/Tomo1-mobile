import { SignIn } from "@/constants/informations";
import React from 'react'
import SignUpPages from "@/components/SignUpPages";
import useSignup from "./signupHelper";
import { useState } from "react";

export default function SignInScreen() {
  const {signIn, errorText} = useSignup();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const baseProps = SignIn(phoneNumber, password, setPhoneNumber, setPassword);
  const props = {
      ...baseProps,
      errorText,
      handleNext: () => 
        signIn(baseProps.fieldKey, [baseProps.value, baseProps.value2 as any], baseProps.nextScreen)  
  }

  return < SignUpPages {...props} />; 
}