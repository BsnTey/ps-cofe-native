import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '../../shared/tokens';
export default function BagIcon({ active = false }: { active?: boolean }) {
	return (
		<Svg width={24} height={24} fill="none">
			<Path
				fill={active ? Colors.primary : '#8D8D8D'}
				d="M14.62 20H5.38C2.69 20 .5 17.831.5 15.165v-5.33C.5 7.17 2.69 5 5.38 5h9.24c2.69 0 4.88 2.169 4.88 4.835v5.33C19.5 17.83 17.31 20 14.62 20Z"
				opacity={0.4}
			/>
			<Path
				fill={active ? Colors.primary : '#8D8D8D'}
				d="M13.755 8a.734.734 0 0 1-.745-.722V4.357c0-1.606-1.346-2.912-3.001-2.912-.762 0-1.561.297-2.13.843a2.847 2.847 0 0 0-.89 2.055v2.935A.734.734 0 0 1 6.246 8a.734.734 0 0 1-.745-.722V4.357a4.27 4.27 0 0 1 1.33-3.094C7.68.443 8.78.032 10.012 0 12.485 0 14.5 1.954 14.5 4.357v2.92a.734.734 0 0 1-.745.723Z"
			/>
		</Svg>
	);
}
