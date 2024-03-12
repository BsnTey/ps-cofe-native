import { Stack } from 'expo-router';

export default function OrderLayout() {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ title: 'Заказ OrderLayout' }} />
			<Stack.Screen name="change-address/index" options={{ title: 'Изменить адрес' }} />
			<Stack.Screen name="success-order/index" options={{ title: 'Заказ оформлен!' }} />
		</Stack>
	);
}
