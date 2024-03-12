import { Link } from 'expo-router';
import { LinkProps } from 'expo-router/build/link/Link';
import CustomButton from '../CustomButton/CustomButton';
import { ICustomButton } from '../CustomButton/CustomButton.interface';

export default function LinkButton({ text, size = 'l', ...props }: LinkProps & ICustomButton) {
	return (
		<Link {...props} asChild>
			<CustomButton text={text} size={size} />
		</Link>
	);
}
