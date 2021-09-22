import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const RunningIcon = props => {
  return (
    <Svg width={34} height={47} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0)" fill="#91CD4B">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.328 7.427c2.078 0 3.761-1.662 3.761-3.714 0-2.05-1.683-3.713-3.761-3.713-2.075 0-3.76 1.663-3.76 3.713 0 2.052 1.685 3.714 3.76 3.714z"
        />
        <Path d="M31.264 17.338h-6.4l-3.609-5.06.012-.087a3.64 3.64 0 00-.74-2.718 3.738 3.738 0 00-2.469-1.406c-1.017-.131-2.105.287-2.905.795l-7.911 5.05a1.867 1.867 0 00-.853 1.381 1.85 1.85 0 00.556 1.521l5.492 5.334-.598 4.501-1.742 6.03-6.312-1.783c-1.202-.338-2.462.349-2.808 1.54a2.24 2.24 0 001.56 2.774l8.498 2.4a2.295 2.295 0 001.727-.196 2.25 2.25 0 001.08-1.346l2.046-7.085 2.454 3.369.623 11c.068 1.195 1.07 2.118 2.267 2.118l.128-.003c1.253-.069 2.21-1.128 2.141-2.365l-.66-11.653a2.234 2.234 0 00-.424-1.186l-3.001-4.12 1.113-8.394 1.807 2.534c.353.497.932.793 1.547.793h7.381a1.88 1.88 0 001.893-1.87 1.88 1.88 0 00-1.893-1.868zm-18.211.166l-1.771-1.721 2.185-1.398-.414 3.12z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" transform="translate(.8)" d="M0 0h32.4v46.667H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default RunningIcon;
