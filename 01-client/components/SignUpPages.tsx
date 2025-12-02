import { Text, View, StyleSheet, Pressable, ImageSourcePropType, TextInput, TouchableOpacity, } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export interface SignUpPageProps {
    title: string;                    
    placeholder: string[];      
    fieldKey: string[];                 
    value: string;   
    value2?: string,     
    onChange: (text: string) => void; 
    onChange2?: (text: string) => void; 
    nextScreen: string;          
    prevScreen?: string;         
    buttonLabel: string;
    errorText: string;
    footNote?: string;
    source?: ImageSourcePropType;
    clear?: ImageSourcePropType;
    handleNext?: () => void;
}

const SignUpPages: React.FC<SignUpPageProps> = ({
    title,
    placeholder,
    fieldKey,
    value,
    value2,
    onChange,
    onChange2,
    prevScreen,
    buttonLabel,
    errorText,
    footNote,
    source,
    clear,
    handleNext
}) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
 
  return (
    <View style={styles.container}>
      {source && (
        <Pressable onPress={() => prevScreen && router.push(prevScreen as any)}>
          <Image source={source} style={[styles.image]} />
        </Pressable>
      )}

      <Text style={[styles.nunitoLarge, {textAlign: "center"}]}>{title}</Text>

       <View style={[styles.inputWrapper]}>
        <TextInput
            key = {fieldKey[0]}
            style={[styles.input, {borderColor: errorText ? "red" : "white"}]}
            placeholder={placeholder[0]}
            placeholderTextColor={errorText ? "red" : "#aaa"}
            value={value}
            secureTextEntry={fieldKey[0] === "password" ? showPassword: false}
            onChangeText={onChange}
        />

        {value.length > 0 && fieldKey[0] !== "password" && (
          <Pressable  style = {styles.clearButton} onPress={() => onChange("")}>
              <Image  style = {{
                      width: 24, 
                      height: 24
                  }} 
                  source={clear}>
              </Image>
          </Pressable>
        )}

         {fieldKey[0] === "password" && <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}
            >
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={22}
            color="#555"
          />
        </TouchableOpacity>}

    </View>

    {errorText ? <Text style={{ color: "red" }}>{errorText}</Text> : null}

    {value2 !== undefined && onChange2 !== undefined && <View style={[styles.inputWrapper]}>
        <TextInput
            key={fieldKey[1]}
            style={[styles.input, {borderColor: errorText ? "red" : "white"}]}
            placeholder={placeholder[1]}
            placeholderTextColor={errorText ? "red" : "#aaa"}
            secureTextEntry={showConfirm}
            value={value2}
            onChangeText={onChange2}
        />

         <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowConfirm(!showConfirm)}
        >
          <Ionicons
            name={showConfirm ? "eye-off" : "eye"}
            size={22}
            color="#555"
          />
        </TouchableOpacity>

    </View>}

     {errorText && placeholder[1]?  <Text style={{position: "relative", color: "red" }}>{errorText}</Text> : null}
    
       <View style = {styles.fixedBottom}>
        <View>
            <Pressable
              style = {styles.button}
               onPress={ () => {
                handleNext && handleNext();
              }}
            >
                <Text style={styles.nunitoSemiBold}>{buttonLabel}</Text>
            </Pressable>
        </View>

        { footNote && <Text style = {[styles.nunitoLight, { position: "relative", textAlign: "center", marginTop: 20}]}> { footNote } </Text> }
      </View>
    </View> 
  );
};

export default SignUpPages;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 80,         
    gap: 24,
  },
   eyeIcon: {
    position: "absolute",
    right: 15,
    top: 20,
  },
  fixedBottom: {
    position: "absolute",   
    top: 740,
    left: 24,
    right: 24,
    alignItems: "center",
  },
  image: {
    width: 24,
    height: 24,
  },
   inputWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    position: "relative",
  },
  input: {
    width: 350,
    height: 60,
    borderRadius: 12,
    backgroundColor: "white",
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingRight: 40,
    fontSize: 18,
    fontFamily: "Nunito-Light",
    color: "black"
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fcc555",
    width: 350,
    height: 55,
    borderRadius: 20,
  },
  nunitoLight: {
    fontFamily: "Nunito-Light",
    color: "#555",
    fontSize: 16,
  },
  nunitoSemiBold: {
    fontFamily: "Nunito-SemiBold",
    color: "#555",
    fontSize: 20,
  },
  nunitoLarge: {
    fontFamily: "Nunito-Bold",
    color: "#555",
    fontSize: 25,
  },
  clearButton: {
    position: "absolute",
    right: 12,  
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  }
});