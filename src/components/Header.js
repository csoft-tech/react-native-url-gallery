import React from "react";
import { View, Text } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ss from "./styles/Header.Styles";

const Header = ({ 
    setIsSearchModalVisible,
	primaryBgColor,
	darkTextColor
}) => {

	const openModal = () => setIsSearchModalVisible(() => true);

	return (
		<View style={[ss.container, { backgroundColor: primaryBgColor }]}>
			<Text style={[ss.title, { color: darkTextColor }]}>Logo</Text>

			<MaterialIcons
				name={"search"}
				color={darkTextColor}
				size={22}
				onPress={openModal}
			/>
		</View>
	);
};

export default Header;