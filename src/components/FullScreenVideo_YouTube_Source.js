import React from "react";
import { Dimensions } from "react-native";
import { Text, View } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";
import ss from "./styles/FullScreenVideo.Styles";

const FullScreenVideo_YouTube_Source = ({
	id,
	url,
	thumbnail,
	tags,
	description,
	type,
	youtubeVideoId,
	isMuted,
	isPaused,
}) => {
	return (
		<View style={ss.container}>
			<View style={ss.videoHeader}>
				<Text style={{ color: "#fff" }}>{description}</Text>
			</View>

			<View style={ss.videoBody}>
				<YoutubeIframe
					videoId={youtubeVideoId}
					width={Dimensions.get("window").width - 50}
					height={(Dimensions.get("window").width - 50) / 2 + 30}
					play={!isPaused}
					mute={isMuted}
					onError={(e) => console.log(e.message)}
				/>
			</View>

			<View style={ss.videoFooter}></View>
		</View>
	);
};

export default FullScreenVideo_YouTube_Source;