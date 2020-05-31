import React, {useContext} from 'react';
import {PlayIcon, Foward10Icon, Replay10Icon, PauseIcon} from '~/assets/icons';

import BrightnessControl from '~/components/Player/HUD/Controls/BrightnessControl';
import VolumeControl from '~/components/Player/HUD/Controls/VolumeControl';

import {PlayerContext, PlayerHandlers} from '~/components/Player/types';
import {Wrapper, Container, Button} from './styles';

interface Props {
  isPaused: boolean;
}

const Controls: React.FC<Props> = ({isPaused}) => {
  const {play, pause, foward, replay} = useContext<PlayerHandlers>(
    PlayerContext,
  );

  return (
    <Wrapper>
      <Container>
        <BrightnessControl />

        <Button onPress={replay}>
          <Replay10Icon fill="#fff" size={40} />
        </Button>

        <Button onPress={isPaused ? play : pause}>
          {isPaused ? (
            <PlayIcon fill="#fff" size={80} />
          ) : (
            <PauseIcon fill="#fff" size={80} />
          )}
        </Button>

        <Button onPress={foward}>
          <Foward10Icon fill="#fff" size={40} />
        </Button>

        <VolumeControl />
      </Container>
    </Wrapper>
  );
};

export default Controls;
