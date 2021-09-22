import React from "react";
import { View } from "react-native";
import FullScreenImage from "./FullScreenImage";
import FullScreenDocument from "./FullScreenDocument";
import FullScreenVideo from "./FullScreenVideo";
import ss from "./styles/FullScreenItem.Styles";

const FullScreenListItem = (props) => {
	if (props.type === "image") {
		return (
			<View style={ss.container}>
				<FullScreenImage {...props} />
			</View>
		);
	} else if (props.type === "document") {
		return (
			<View style={ss.container}>
				<FullScreenDocument {...props} />
			</View>
		);
	} else {
		return (
			<View style={ss.container}>
				<FullScreenVideo {...props} />
			</View>
		);
	}
};

export default FullScreenListItem;