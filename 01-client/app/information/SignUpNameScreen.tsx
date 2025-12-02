import React from 'react'
import SignUpPages from '@/components/SignUpPages'
import { SignUpNAME } from '@/constants/informations'
import { useState, useEffect } from 'react';
import { useSignup } from './signupHelper';

export default function ParentNameScreen() {
  const { sessionId, errorText, startSession, submitField } = useSignup();
  const [parentName, setParentName] = useState("");

  useEffect(() => {
    startSession();
  }, []);

  const baseProps = SignUpNAME(parentName, setParentName);
  const props = {
    ...baseProps,
    errorText,
    handleNext: () => 
      submitField(baseProps.fieldKey[0], parentName, baseProps.nextScreen, false)
  }

  return <SignUpPages {...props} />;
}