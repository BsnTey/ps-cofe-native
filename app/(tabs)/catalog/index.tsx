import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

const coffes = [
	{
		id: 1,
		name: 'Капучино',
		bgColor: 'powderblue',
		ref: 'capuchino',
	},
	{
		id: 2,
		name: 'Латте',
		bgColor: 'skyblue',
		ref: 'latte',
	},
	{
		id: 3,
		name: 'Маккиято',
		bgColor: 'steelblue',
		ref: 'makkiyato',
	},
	{
		id: 4,
		name: 'Раф',
		bgColor: 'deepskyblue',
		ref: 'raf',
	},
];
export default function Catalog() {
	return (
		<SafeAreaView style={styles.container}>
			{coffes.map((coffe) => {
				return (
					<Link
						href={{
							pathname: `catalog/[id]`,
							params: { id: coffe.ref },
						}}
						key={coffe.id}
					>
						<View style={{ ...styles.coffeItem, ...{ backgroundColor: coffe.bgColor } }}>
							<Text>{coffe.name}</Text>
						</View>
					</Link>
				);
			})}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		gap: 20,
		flexWrap: 'wrap',
	},
	coffeItem: {
		width: 200,
		height: 200,
	},
});
