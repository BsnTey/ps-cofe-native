import { useRouter } from 'expo-router';
import { Button, View, Text } from 'react-native';

export default function ChangeAddress() {
	const router = useRouter();

	return (
		<View>
			<Text>Экран корзины</Text>
			<Button
				title="Изменить адрес доставки экран"
				onPress={() => router.push('order/change-address')}
			/>
			<Button title="Подтвердить заказ экран" onPress={() => router.push('order/success-order')} />
		</View>
	);
}
