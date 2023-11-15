/** @format */
import { NavigationContainer } from "@react-navigation/native";
import StackNav from "./StackNav";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
	return (
		<GestureHandlerRootView style={{flex: 1}}>
			<NavigationContainer>
				<StackNav />
			</NavigationContainer>
		</GestureHandlerRootView>
	);
}
