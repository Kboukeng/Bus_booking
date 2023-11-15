import { Text, View, Image } from "react-native";
import Styles from "../stylesheets/HomeStyle";
import { ScrollView } from "react-native-gesture-handler";
import DropDown from "../components/DropDown";

export default function Home() {
  return (
    <ScrollView style={Styles.body}>
      <>
        <View>
          <Image
            style={Styles.HomeImg}
            source={require("../assets/home.png")}
          />
          <Text style={Styles.R_text}> Book a saet</Text>
        </View>

        <View>
          <DropDown />
        </View>
      </>
    </ScrollView>
  );
}
