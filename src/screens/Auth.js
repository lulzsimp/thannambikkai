import { useState } from "react"
import { auth } from "../../firebaseConfig"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth/react-native"
import { Alert, View } from "react-native"
import Input from "../components/Input"
import Button from "../components/Button"
import colors from "../colors"
import EStyleSheet from "react-native-extended-stylesheet"
import { vw, vh } from "react-native-expo-viewport-units"
const styles = EStyleSheet.create({
  container: {
    backgroundColor: colors.background,
    width: vw(100),
    height: vh(100),
    display: "flex",
    justifyContent: "center",
  },
  innerContainer: {
    display: "flex",
    height: "50%",
    width: vh(90),
    padding: ".5rem",
    alignSelf: "center",
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "25%",
    marginTop: "2rem",
    justifyContent: "space-between",
  },
})

const Auth = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const signInWithEmail = async () => {
    signInWithEmailAndPassword(auth, email, password).catch((err) => {
      Alert.alert(err.message)
    })
  }
  const signUpWithEmail = async () => {
    createUserWithEmailAndPassword(auth, email, password).catch((err) => {
      Alert.alert(err.message)
    })
  }
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(t) => setEmail(t)}
            spellCheck={false}
            autoCorrect={false}
            autoCapitalize="none"
          />
          <Input
            secure={true}
            placeholder="Password"
            value={password}
            onChangeText={(t) => setPassword(t)}
            autoCorrect={false}
            spellCheck={false}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={() => signUpWithEmail()} contents="Sign up" />
          <Button onPress={() => signInWithEmail()} contents="Sign in" />
        </View>
      </View>
    </View>
  )
}

export default Auth
