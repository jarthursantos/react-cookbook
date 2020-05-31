import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

interface Props extends SvgProps {
  size?: number;
}

const ArrowBack: React.FC<Props> = ({size = 24, ...props}) => {
  return (
    <Svg height={size} width={size} viewBox="0 0 24 24" {...props}>
      <Path d="M0 0h24v24H0V0z" fill="none" />
      <Path d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.996.996 0 00-1.41 0l-6.59 6.59a.996.996 0 000 1.41l6.59 6.59a.996.996 0 101.41-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z" />
    </Svg>
  );
};

export default ArrowBack;
