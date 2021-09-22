import React from "react";
import { View, FlatList } from "react-native";
import HomeListItem from "../components/HomeListItem";
import ss from "./styles/Home.Styles";

const Home = ({ openFullScreen, data }) => {
	const keyExtractor = (id, index) => index;

	const renderItem = ({ item, index }) => (
		<HomeListItem
			{...item}
			key={item.id}
			openFullScreen={openFullScreen}
			index={index}
		/>
	);

	return (
		<View style={ss.screen}>
			<FlatList
				data={data}
				renderItem={renderItem}
				keyExtractor={keyExtractor}
				contentContainerStyle={ss.flatlistContinaer}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default Home;