import React from "react";
import {
	View,
	Dimensions,
	FlatList,
	StyleSheet,
	Text,
	Pressable,
} from "react-native";
import { Input } from "react-native-elements";
import SearchResultItem from "./SearchResultItem";

const SearchOverlay = ({
	data,
	searchResults,
	openFullScreen,
	setSearchResults,
	isSearchModalVisible,
	setIsSearchModalVisible,
	searchPlaceholder,
	searchMethod
}) => {
	const searchTag = (input, tags) => {
		for (let i = 0; i < tags.length; i++) {
			if (tags[i].startsWith(input)) {
				return true;
			}
		}
		return false;
	};

	const handleInput = (i) => {
		setSearchResults(() => []);
		let filtered = [];
		filtered = data.filter((item, index) => {
			let x = searchTag(i.toLowerCase(), item.tags);
			return x;
		});
		setSearchResults(() => filtered);
	};

	const renderItemSearchOverlay = ({ item, index }) => {
		let actualIndex = data.findIndex((el) => el.id == item.id);

		return (
			<SearchResultItem
				{...item}
				key={item.id}
				openFullScreen={openFullScreen}
				index={actualIndex}
			/>
		);
	};

	const keyExtractor = (id, index) => index;

	return (
		<View
			style={[
				ss.container,
				{ display: isSearchModalVisible ? "flex" : "none" },
			]}
		>
			<View style={ss.closeIconContainer}>
				<TouchableOpacity
					style={ss.closeIcon}
					onPress={() => setIsSearchModalVisible(() => false)}
				>
					<Text style={{ color: "#fff" }}>X</Text>
				</TouchableOpacity>
			</View>

			<Input
				placeholder={searchPlaceholder}
				placeholderTextColor={"rgba(255, 255, 255, 0.5)"}
				inputStyle={{ color: "#fff" }}
				containerStyle={{ width: "100%" }}
				onChangeText={searchMethod ? searchMethod : handleInput}
			/>

			<FlatList
				data={searchResults}
				scrollEnabled
				renderItem={renderItemSearchOverlay}
				keyExtractor={keyExtractor}
				contentContainerStyle={{
					alignItems: "center",
				}}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default SearchOverlay;

const ss = StyleSheet.create({
	container: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		zIndex: 10,
		backgroundColor: "#000",
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
		zIndex: 10,
		elevation: 10,
	},

	closeIconContainer: {
		width: "100%",
		height: 50,
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
		paddingHorizontal: 10,
		marginVertical: 5,
	},

	closeIcon: {
		width: 40,
		height: "80%",
		backgroundColor: "grey",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 40,
	},
});