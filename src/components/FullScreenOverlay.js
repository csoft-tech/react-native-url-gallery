import React, { useState } from "react";
import { StyleSheet, View, Dimensions, FlatList, Modal } from "react-native";
import FullScreenListItem from "./FullScreenListItem";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const FullScreenOverlay = ({
	Ref,
	data,
	closeModal,
	isFullScreenModalVisible,
	primaryBgColor,
	handleMiniPlayerOpen,
}) => {
	const [isScrollEnabled, setIsScrollEnabled] = useState(true);

	const keyExtractor = (id, index) => index;

	const renderItem = (item) => (
		<FullScreenListItem
			{...item.item}
			primaryBgColor={primaryBgColor}
			handleMiniPlayerOpen={handleMiniPlayerOpen}
			index={item.index}
		/>
	);

	const toggleFullScreenListScroll = () => setIsScrollEnabled((old) => !old);

	const getItemLayout = (data, index) => ({
		length: Dimensions.get("window").width,
		offset: Dimensions.get("window").width * index,
		index,
	});

	return (
		<Modal
			visible={isFullScreenModalVisible}
			animationType={"slide"}
			onRequestClose={closeModal}
		>
			<View
				style={{
					width: Dimensions.get("window").width,
					height: Dimensions.get("window").height,
					backgroundColor: "#000",
				}}
			>
				<View style={ss.fullScreenHeader}>
					<MaterialIcons
						name={isScrollEnabled ? "lock" : "lock-open"}
						color={primaryBgColor}
						size={22}
						style={{ paddingHorizontal: 10 }}
						onPress={toggleFullScreenListScroll}
					/>
				</View>
				<FlatList
					ref={Ref}
					data={data}
					scrollEnabled={isScrollEnabled}
					renderItem={renderItem}
					keyExtractor={keyExtractor}
					horizontal
					showsHorizontalScrollIndicator={false}
					getItemLayout={getItemLayout}
					onScrollToIndexFailed={() => console.log("scroll to index failed")}
					snapToInterval={Dimensions.get("window").width}
				/>
			</View>
		</Modal>
	);
};

export default FullScreenOverlay;

const ss = StyleSheet.create({
	fullScreenHeader: {
		width: "100%",
		height: 30,
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
		paddingHorizontal: 20,
		marginTop: 20,
	},
});