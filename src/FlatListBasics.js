import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component{
	render() {
		return(
			<View style={styles.container}>
				<FlatList
					data={[
						{key: "Davin"},
						{key: "Cris"},
						{key: "Mike"},
						{key: "Shun"},
						{key: 'James'},
						{key: 'Joel'},
						{key: 'John'},
						{key: 'Jillian'},
						{key: 'Jimmy'},
						{key: 'Julie'},
					]}
					renderItem={({item}) => <Text style={styles.items}>{item.key}</Text>}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 22
	},
	items: {
		padding: 10,
		fontSize: 18,
		height: 44,
	}
});
