import React from 'react'
import SignUpPages from '@/components/SignUpPages';
import { useState, useEffect } from 'react';
import { useSignup } from './signupHelper';
import { SignUpPASSWORD } from '@/constants/informations';

export default function PasswordsScreen() {
    const { sessionId, submitField, errorText, startSession } = useSignup();
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");
    
     useEffect(() => {
        startSession();
      }, []);
    

    const baseProps = SignUpPASSWORD(password, verifyPassword, setPassword, setVerifyPassword);
    const props = {
    ...baseProps,
    errorText,
    handleNext: () => {
      submitField(baseProps.fieldKey[0], password, "", false);
      submitField(baseProps.fieldKey[1], verifyPassword, baseProps.nextScreen, true)
    }
  }

  return <SignUpPages {...props} />;
}