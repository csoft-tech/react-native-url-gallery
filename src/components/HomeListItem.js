import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import ss from "./styles/HomeListItem.Styles";

const HomeListItem = (props) => {
	const { id, url, thumbnail, type, description, tags, openFullScreen, index } = props;

	const onPress = () => {
		openFullScreen(index);
	};

	return (
		<>
			<TouchableOpacity onPress={onPress}>
				<ImageBackground
					style={ss.container}
					source={{ uri: thumbnail }}
					resizeMode={"cover"}
					imageStyle={ss.imgStyle}
					blurRadius={5}
				>
					<View style={ss.innerContainer}>
						<Text style={ss.type}>{type}</Text>

						<Text style={ss.desc}>{description}</Text>
					</View>
				</ImageBackground>
			</TouchableOpacity>
		</>
	);
};

export default HomeListItem;