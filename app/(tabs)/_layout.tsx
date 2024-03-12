import { StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';
import { Colors } from '../../shared/tokens';
import MenuTabItem from '../../shared/MenuTabItem/MenuTabItem';

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors.primary,
			}}
		>
			<Tabs.Screen
				name="catalog"
				options={{
					title: '',
					headerShown: false,
					tabBarIcon: ({ focused }: { focused: boolean }) => {
						return <MenuTabItem name="main" focused={focused} />;
					},
				}}
			/>
			<Tabs.Screen
				name="order"
				options={{
					title: '',
					headerTitle: 'Заказ TabLayout',
					tabBarIcon: ({ focused }: { focused: boolean }) => {
						return <MenuTabItem name="order" focused={focused} />;
					},
				}}
			/>
		</Tabs>
	);
}

const styles = StyleSheet.create({});
