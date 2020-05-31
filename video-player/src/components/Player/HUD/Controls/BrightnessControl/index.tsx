import React from 'react';

import {BrightnessHighIcon} from '~/assets/icons';
import VerticalBarControl from '~/components/VerticalBarControl';

const BrightnessControl: React.FC = () => {
  return (
    <VerticalBarControl
      icon={<BrightnessHighIcon fill="#FFF" />}
      progress={50}
    />
  );
};

export default BrightnessControl;
