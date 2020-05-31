import React from 'react';

import {VolumeHighIcon} from '~/assets/icons';
import VerticalBarControl from '~/components/VerticalBarControl';

const VolumeControl: React.FC = () => {
  return (
    <VerticalBarControl icon={<VolumeHighIcon fill="#FFF" />} progress={99} />
  );
};

export default VolumeControl;
