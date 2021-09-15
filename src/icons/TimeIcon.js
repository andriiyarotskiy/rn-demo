import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function TimeIcon(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12 20.25a8.25 8.25 0 100-16.5 8.25 8.25 0 000 16.5z"
        stroke="#fff"
        strokeWidth={1.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M12.125 11.25V6M9.75.75h4.5"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default TimeIcon;
