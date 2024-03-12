import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

export default function CoffeItem() {
	const { id } = useLocalSearchParams();
	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Text>{id}</Text>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: 'white',
	},
});
