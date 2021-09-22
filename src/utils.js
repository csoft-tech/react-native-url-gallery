const findVideoSource = (url) => {
	let source = "other";

	if (url.includes("youtube.com") === true) {
		let videoId = url.substr(url.indexOf("=") + 1);
		source = "YouTube";
		return {
			source,
			videoId,
		};
	} else if (url.includes("youtu.be") === true) {
		let videoId = url.substr(url.lastIndexOf("/") + 1);
		source = "YouTube";
		return {
			source,
			videoId,
		};
	}

	return { source };
};

export { findVideoSource };