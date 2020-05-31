import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

interface Props extends SvgProps {
  size?: number;
}

const SkipNext: React.FC<Props> = ({size = 24, ...props}) => {
  return (
    <Svg height={size} width={size} viewBox="0 0 24 24" {...props}>
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
    </Svg>
  );
};

export default SkipNext;
