import {
	Animated,
	GestureResponderEvent,
	Pressable,
	PressableProps,
	StyleSheet,
	Text,
} from 'react-native';
import { Colors, Fonts, Radius } from '../tokens';

export const CustomButton = ({
	text,
	size = 'l',
	...props
}: PressableProps & {
	text: string;
	size?: 's' | 'm' | 'l';
}) => {
	const animatedValue = new Animated.Value(100);
	const color = animatedValue.interpolate({
		inputRange: [0, 100],
		outputRange: [Colors.primaryPress, Colors.primary],
	});

	const fadeIn = (e: GestureResponderEvent) => {
		Animated.timing(animatedValue, {
			toValue: 0,
			duration: 100,
			useNativeDriver: false,
		}).start();
		props.onPressIn && props.onPressIn(e);
	};

	const fadeOut = (e: GestureResponderEvent) => {
		Animated.timing(animatedValue, {
			toValue: 100,
			duration: 100,
			useNativeDriver: false,
		}).start();
		props.onPressOut && props.onPressOut(e);
	};

	return (
		<Pressable {...props} onPressIn={fadeIn} onPressOut={fadeOut}>
			<Animated.View
				style={{
					...styles.button,
					...(size == 's' ? styles.buttonS : {}),
					...(size == 'm' ? styles.buttonM : {}),
					...(size == 'l' ? styles.buttonL : {}),
					backgroundColor: color,
				}}
			>
				<Text style={styles.text}>{text}</Text>
			</Animated.View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonS: {
		height: 32,
		backgroundColor: Colors.primary,
		borderRadius: Radius.r8,
	},
	buttonM: {
		height: 38,
		backgroundColor: Colors.primary,
		borderRadius: Radius.r12,
	},
	buttonL: {
		height: 62,
		// backgroundColor: Colors.primary,
		backgroundColor: Colors.black,
		borderRadius: Radius.r16,
	},
	text: {
		color: Colors.white,
		fontSize: Fonts.f18,
	},
});
