import { LogOut } from "react-native-feather"
import { auth } from "../../firebaseConfig"
import { useNavigation } from "@react-navigation/native"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { useFonts, LexendDeca_400Regular } from "@expo-google-fonts/lexend-deca"
import colors from "../colors"
import EStyleSheet from "react-native-extended-stylesheet"
const styles = EStyleSheet.create({
  container: {
    backgroundColor: colors.background,
    width: "100vw",
    height: "100%",
    padding: "1rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  innerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontFamily: "LexendDeca_400Regular",
    fontSize: "1.75rem",
    fontWeight: "700",
    marginLeft: ".5rem",
    color: colors.main[300],
  },
})
export default function Title() {
  let [loaded] = useFonts({ LexendDeca_400Regular })
  return !loaded ? null : (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={require("../../assets/icon.png")}
          style={{ width: "48px", height: "48px" }}
        />
        <Text style={styles.text}>Thannambikkai</Text>
      </View>
      <TouchableOpacity
        style={{ display: auth.currentUser ? "block" : "none" }}
        onPress={() => {
          auth.signOut()
          useNavigation().navigate("Authentication")
        }}
      >
        <LogOut color={colors.main[300]} />
      </TouchableOpacity>
    </View>
  )
}
