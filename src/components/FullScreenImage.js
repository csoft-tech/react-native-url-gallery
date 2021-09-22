import React from "react";
import { Text, View, Image } from "react-native";
import ss from "./styles/FullScreenImage.Styles";

const FullScreenImage = (props) => {
	const { id, url, thumbnail, description } = props;

	return (
		<View style={ss.container}>
			<View style={ss.header}>
				<Text style={{ color: "#FFFFFF" }} numberOfLines={1}>
					{description}
				</Text>
			</View>

			<View style={ss.body}>
				<Image source={{uri: url}} style={{flex: 1}} resizeMode="contain" />
			</View>

			<View style={ss.footer}>
				<Text style={{ color: "#FFFFFF" }} numberOfLines={1}>
					{url}
				</Text>
			</View>
		</View>
	);
};

export default FullScreenImage;