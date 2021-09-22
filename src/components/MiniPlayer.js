import React, { useState } from "react";
import {
	View,
	Pressable,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Video from "react-native-video";
import ss from './styles/MiniPlayer.Styles'

const MiniPlayer = (props) => {
	const {
		id,
		url,
		description,
		type,
		tags,
		setIsMiniPlayerVisible,
		openFullScreen,
		setMiniPlayerVideo,
		index,
	} = props;
	const [isPaused, setIsPaused] = useState(false);
	const [currentTime, setCurrentTime] = useState(0.0);

	const closeMiniPlayer = () => {
		setMiniPlayerVideo(() => {});
		setIsMiniPlayerVisible(() => false);
	};

	const maximizeVideo = () => {
		openFullScreen(index);
	};

	const onEnd = () => {
		setCurrentTime(() => 0.0);
	};

	const playPause = () => setIsPaused((old) => !old);

	return (
		<View style={ss.container}>
			<View style={ss.playerContainer}>
				<Video
					source={{ uri: url }}
					paused={isPaused}
					muted={false}
					repeat={false}
					style={{ flex: 1, width: "100%", height: "100%" }}
					resizeMode={"contain"}
					onEnd={onEnd}
					currentTime={currentTime}
				/>
			</View>

			<View style={ss.iconsContainer}>
				<Pressable>
					<View style={ss.iconContainer}>
						<MaterialIcons
							name={isPaused ? "play-circle-outline" : "pause-circle-outline"}
							color={"#fff"}
							size={22}
							onPress={playPause}
						/>
					</View>
				</Pressable>

				<Pressable>
					<View style={ss.iconContainer}>
						<MaterialIcons
							name={"maximize"}
							color={"#fff"}
							size={22}
							onPress={maximizeVideo}
						/>
					</View>
				</Pressable>

				<Pressable onPress={closeMiniPlayer}>
					<View style={ss.iconContainer}>
						<MaterialIcons name={"close"} color={"#fff"} size={22} />
					</View>
				</Pressable>
			</View>
		</View>
	);
};

export default MiniPlayer;