import React, {useCallback, SetStateAction, Dispatch} from 'react';
import {useTransition} from 'react-native-redash';
import Animated from 'react-native-reanimated';

import Header from './Header';
import Controls from './Controls';
import ProgressControler from './ProgressControler';
import Actions from './Actions';
import {TouchArea, Container} from './styles';
import {OnProgressData} from 'react-native-video';

interface Props {
  data?: OnProgressData;
  isOpenned: boolean;
  isPaused: boolean;
  onOpenStateChange: Dispatch<SetStateAction<boolean>>;
}

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const HUD: React.FC<Props> = ({
  data,
  isOpenned,
  isPaused,
  onOpenStateChange,
}) => {
  const transition = useTransition(isOpenned);

  const handleContainerPressed = useCallback(() => {
    onOpenStateChange((oldState) => !oldState);
  }, [onOpenStateChange]);

  return (
    <TouchArea onPress={handleContainerPressed}>
      <AnimatedContainer style={{opacity: transition}}>
        <Header />

        <Controls isPaused={isPaused} />

        <ProgressControler data={data} />

        <Actions />
      </AnimatedContainer>
    </TouchArea>
  );
};

export default HUD;
