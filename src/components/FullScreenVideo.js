import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import FullScreenVideo_Other_Source from "./FullScreenVideo_Other_Source";
import FullScreenVideo_YouTube_Source from "./FullScreenVideo_YouTube_Source";
import { findVideoSource } from "../utils";

const FullScreenVideo = (props) => {
	const [isPaused, setIsPaused] = useState(true);
	const [isLooping, setIsLooping] = useState(false);
	const [isMuted, setIsMuted] = useState(false);

	// 0 - loading, 1 - other source, 2 - youtube source
	const [source, setSource] = useState(0);

	const [youtubeVideoId, setYoutubeVideoId] = useState("");

	const { id, url, thumbnail, tags, description, type, primaryBgColor } = props;

	useEffect(() => {
		const x = findVideoSource(url);
		if (x.source === "YouTube") {
			setYoutubeVideoId(() => x.videoId);
			setSource(() => 2);
		} else {
			setSource(() => 1);
		}
	}, []);

	const toggleMute = () => setIsMuted((old) => !old);

	const toggleLoop = () => setIsLooping((old) => !old);

	const playPause = () => setIsPaused((old) => !old);

	if (source === 0) {
		return <ActivityIndicator size={44} color={primaryBgColor} />;
	} else if (source === 1) {
		return (
			<FullScreenVideo_Other_Source
				playPause={playPause}
				toggleLoop={toggleLoop}
				toggleMute={toggleMute}
				isPaused={isPaused}
				isMuted={isMuted}
				isLooping={isLooping}
				key={id}
				{...props}
			/>
		);
	} else {
		return (
			<FullScreenVideo_YouTube_Source
				{...props}
				isMuted={isMuted}
				isPaused={isPaused}
				youtubeVideoId={youtubeVideoId}
				key={id}
			/>
		);
	}
};

export default FullScreenVideo;