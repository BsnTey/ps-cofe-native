import { useRouter } from 'expo-router';
import { Button, Text } from 'react-native';

export default function OrderPlaced() {
	const router = useRouter();

	return (
		<>
			<Text>Заказ оформлен</Text>
			<Button title="На главную" onPress={() => router.push('/catalog')} />
		</>
	);
}
