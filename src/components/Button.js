import colors from "../colors"
import { TouchableOpacity, View, Text } from "react-native"
import EStyleSheet from "react-native-extended-stylesheet"
import { useFonts, LexendDeca_400Regular } from "@expo-google-fonts/lexend-deca"
const styles = EStyleSheet.create({
  text: {
    fontFamily: "LexendDeca_400Regular",
    fontSize: "1rem",
    fontWeight: "700",
    color: colors.background,
  },
  button: {
    backgroundColor: colors.main[100],
    padding: ".65rem",
    paddingHorizontal: "1rem",
    width: "max-content",
    borderRadius: "13px",
  },
})
export default function Button({ onPress, contents }) {
  let [loaded] = useFonts({ LexendDeca_400Regular })
  return !loaded ? null : (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{contents}</Text>
      </TouchableOpacity>
    </View>
  )
}
