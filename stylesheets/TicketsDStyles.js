import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFF",
		paddingHorizontal: 20,
		paddingTop: 20
	},
	backButton: {
		marginBottom: 20
	},
	backButtonText: {
		fontSize: 16,
		color: "#007AFF"
	},
	detailsContainer: {
		flex: 1
	},
	detailText: {
		fontSize: 18,
		marginBottom: 15,
        fontWeight: "600"
		
	},
	qrCodeContainer: {
		flex: 1,
		alignSelf: "center",
        marginTop: 25
	}
});
