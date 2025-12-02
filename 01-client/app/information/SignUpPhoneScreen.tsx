import React from 'react'
import SignUpPages from '@/components/SignUpPages'
import { SignUpPHONE } from '@/constants/informations'
import { useState } from 'react';
import useSignup from './signupHelper';
import { useEffect } from 'react';


export default function PhoneNumberScreen() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const { sessionID, errorText, submitField, startSession } = useSignup();
  useEffect(() => {
    startSession();
  }, []);

  const baseProps = SignUpPHONE(phoneNumber, setPhoneNumber);
  const props = {
    ...baseProps,
    errorText,
    handleNext: () => 
      submitField(baseProps.fieldKey[0], phoneNumber, baseProps.nextScreen, false)
  }


  return <SignUpPages {...props} />;
}