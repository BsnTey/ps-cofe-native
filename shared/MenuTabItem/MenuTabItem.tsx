import { Text, View } from 'react-native';
import { Colors, Fonts, Gaps } from '../tokens';
import BagIcon from '../../assets/icons/Bag';
import HomeIcon from '../../assets/icons/Home';

interface IMenuTabItem {
	name: 'main' | 'order';
	focused?: boolean;
}

export default function MenuTabItem({ name, focused }: IMenuTabItem) {
	return (
		<View
			style={{
				alignItems: 'center',
				justifyContent: 'center',
				paddingTop: 24,
				flexDirection: 'row',
				gap: Gaps.g8,
			}}
		>
			{focused ? (
				name == 'main' ? (
					<HomeIcon active={true} />
				) : (
					<BagIcon active={true} />
				)
			) : name == 'order' ? (
				<BagIcon />
			) : (
				<HomeIcon />
			)}
			<Text
				style={{
					fontFamily: 'Sora',
					fontSize: Fonts.f14,
					color: Colors.grayLight,
				}}
			>
				{name == 'main' ? 'Главная' : 'Заказ'}
			</Text>
		</View>
	);
}
