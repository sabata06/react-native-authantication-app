import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonL}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonK}>
          <Text style={styles.kButtonText}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  buttonContainer: { width: "50%", marginTop: 40 },
  buttonL: {
    backgroundColor: "#0782f9",
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
  },
  buttonK: {
    backgroundColor:"white",
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
    marginTop:10,
  },
  buttonText: {
    color:"white",
    fontSize:16,
    fontWeight:"bold"
  },

  kButtonText: {   color:"#0782f9",
  fontSize:16,
  fontWeight:"bold"},
});
