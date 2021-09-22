import React, { useState } from "react";
import { Text, View } from "react-native";
import ss from "./styles/FullScreenVideo.Styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Video from "react-native-video";

const FullScreenVideo_Other_Source = ({
	toggleMute,
	toggleLoop,
	playPause,
	isMuted,
	isLooping,
	isPaused,
	id,
	url,
	thumbnail,
	tags,
	description,
	type,
	primaryBgColor,
	handleMiniPlayerOpen,
	index,
}) => {
	const [currentTime] = useState(0.0);

	const openMiniPlayer = () => {
		handleMiniPlayerOpen({
			id,
			url,
			thumbnail,
			tags,
			description,
			type,
			index,
		});
	};

	const onEnd = () => {
		setIsPaused(() => true);
	};

	return (
		<View style={ss.container}>
			<View style={ss.videoHeader}>
				<Text style={{ color: "#fff" }}>{description}</Text>

				<MaterialIcons
					name={"loop"}
					color={isLooping ? "red" : primaryBgColor}
					size={30}
					onPress={toggleLoop}
				/>
				<MaterialIcons
					name={"minimize"}
					color={primaryBgColor}
					size={30}
					onPress={openMiniPlayer}
				/>
			</View>

			<View
				style={[ss.videoBody, { backgroundColor: "rgba(255, 255, 255, 0.9)" }]}
			>
				<Video
					source={{ uri: url }}
					paused={isPaused}
					muted={isMuted}
					repeat={isLooping}
					resizeMode={"contain"}
					currentTime={currentTime}
					style={{ flex: 1, width: "100%", height: "100%" }}
					onEnd={onEnd}
				/>
			</View>

			<View style={ss.videoFooter}>
				<MaterialIcons
					name={isPaused ? "play-circle-outline" : "pause-circle-outline"}
					size={30}
					color={primaryBgColor}
					onPress={playPause}
				/>
				<MaterialIcons
					name={"music-off"}
					color={isMuted ? "red" : primaryBgColor}
					size={30}
					onPress={toggleMute}
				/>
			</View>
		</View>
	);
};

export default FullScreenVideo_Other_Source;
