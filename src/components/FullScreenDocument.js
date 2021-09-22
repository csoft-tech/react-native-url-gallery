import React from "react";
import { Dimensions, View, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";
import ss from "./styles/FullScreenDocument.Styles";

const FullScreenDocument = (props) => {
	const { url, primaryBgColor } = props;

	const showIndicator = () => {
		return (
			<View style={ss.loadingContainer}>
				<ActivityIndicator size={44} color={primaryBgColor} />
			</View>
		);
	};

	return (
		<View style={ss.container}>
			<WebView
                source={{ uri: url }}
                cacheEnabled
                cacheMode={'LOAD_CACHE_ELSE_NETWORK'}
                scrollEnabled
                style={{
                    width: Dimensions.get("window").width - 10,
                    height: '100%',
                }}
                startInLoadingState={true}
                renderLoading={showIndicator}
            />
		</View>
	);
};

export default FullScreenDocument;