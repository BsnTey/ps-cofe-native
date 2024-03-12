import { Animated, StyleSheet } from 'react-native';
import { Colors } from '../tokens';

export default function MainTitle() {
	const animatedValueY = new Animated.ValueXY({ x: 0, y: 400 });
	const animatedValueOpacity = new Animated.Value(0);

	Animated.parallel([
		Animated.spring(animatedValueY.y, {
			toValue: 0,
			tension: 1,
			useNativeDriver: true,
		}),
		Animated.timing(animatedValueOpacity, {
			toValue: 1,
			duration: 2000,
			useNativeDriver: true,
		}),
	]).start();

	return (
		<Animated.Text
			style={[
				styles.title,
				{
					transform: [{ translateY: animatedValueY.y }],
					opacity: animatedValueOpacity,
				},
			]}
		>
			Одно из самых вкусных кофе в городе!
		</Animated.Text>
	);
}

const styles = StyleSheet.create({
	title: {
		fontFamily: 'SoraSemi',
		fontSize: 34,
		fontWeight: '800',
		lineHeight: 42,
		color: Colors.white,
		textAlign: 'center',
	},
});
