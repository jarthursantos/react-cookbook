import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

interface Props extends SvgProps {
  size?: number;
}

const Play: React.FC<Props> = ({size = 24, ...props}) => {
  return (
    <Svg height={size} width={size} viewBox="0 0 24 24" {...props}>
      <Path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 000-1.69L9.54 5.98A.998.998 0 008 6.82z" />
    </Svg>
  );
};

export default Play;
