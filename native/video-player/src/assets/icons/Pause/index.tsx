import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

interface Props extends SvgProps {
  size?: number;
}

const Pause: React.FC<Props> = ({size = 24, ...props}) => {
  return (
    <Svg height={size} width={size} viewBox="0 0 24 24" {...props}>
      <Path d="M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2zm6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2z" />
    </Svg>
  );
};

export default Pause;
