import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase'


export default function HomeScreen() {
  return (
    <View>
      <Text>Geçerli Kullanıcı Email</Text>
      <Text>{auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.buttonL}>
          <Text style={styles.buttonText}>Çıkış Yap</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})