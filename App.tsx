import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { CustomButton } from './shared/Button/Button';
import { Colors, Fonts, Gaps } from './shared/tokens';
import MainTitle from './shared/MainTitle/MainTitle';

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<ImageBackground
					source={require('./assets/cofeBack.png')}
					resizeMode="contain"
					style={styles.image}
				></ImageBackground>
				<View style={styles.descript}>
					<MainTitle />
					<Text style={styles.titleDesk}>Свежие зерна, настоящая арабика и бережная обжарка</Text>
				</View>
				<CustomButton text="Начать" />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.black,
		justifyContent: 'flex-end',
	},
	content: {
		paddingHorizontal: 30,
		paddingBottom: 71,
		gap: Gaps.g24,
	},
	image: {
		position: 'absolute',
		top: -800,
		left: -80,
		width: 600,
		height: 850,
	},
	descript: {
		alignItems: 'center',
		gap: Gaps.g16,
	},
	titleDesk: {
		fontSize: Fonts.f14,
		lineHeight: 21,
		color: Colors.graySec,
		textAlign: 'center',
		width: 315,
	},
});
