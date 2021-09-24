import { Dimensions, Platform } from "react-native";

module.exports = {
	container: {
		position: "absolute",
		left: 20,
		right: 20,
		bottom: Platform.OS === "ios" ? 0 : 64,
		width: Dimensions.get("window").width - 40,
		height: 60,
		backgroundColor: "black",
		zIndex: 99,
		elevation: 99,
		borderRadius: 5,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 20,
	},

	playerContainer: {
		height: "100%",
		width: "30%",
		backgroundColor: "rgba(255, 255, 255, 0.4)",
		justifyContent: "center",
		alignItems: "center",
	},

	iconsContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "60%",
		height: "100%",
		paddingHorizontal: 40,
	},

	iconContainer: {
		width: 40,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: 5,
	},
}