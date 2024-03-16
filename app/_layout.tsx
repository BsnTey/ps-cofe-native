import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { SplashScreen, Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '../shared/tokens';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Asyncstorage: ...']);
LogBox.ignoreAllLogs();

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
	const [loaded, error] = useFonts({
		Sora: require('../assets/fonts/Sora-Medium.ttf'),
		SoraSemi: require('../assets/fonts/Sora-SemiBold.ttf'),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	});

	useEffect(() => {
		if (error) {
			throw error;
		}
	});

	if (!loaded) {
		return null;
	}

	return (
		<SafeAreaProvider>
			<StatusBar style="light" />
			<Stack
				screenOptions={{
					statusBarColor: Colors.black,
					contentStyle: {
						backgroundColor: Colors.black,
					},
					headerShown: false,
				}}
			>
				<Stack.Screen name="index" />
			</Stack>
		</SafeAreaProvider>
	);
}
