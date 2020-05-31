import React, {useContext} from 'react';

import {Container, Button, ButtonLabel} from './styles';
import {VideoOptionsIcon, SkipNextIcon, SkipPreviousIcon} from '~/assets/icons';

import {PlayerContext, PlayerHandlers} from '~/components/Player/types';

const Actions: React.FC = () => {
  const {openVideoOptions, previousEpisode, nextEpisode} = useContext<
    PlayerHandlers
  >(PlayerContext);

  return (
    <Container>
      <Button onPress={previousEpisode}>
        <SkipPreviousIcon fill="#fff" />
        <ButtonLabel>Episódio Anterior</ButtonLabel>
      </Button>

      <Button onPress={openVideoOptions}>
        <VideoOptionsIcon fill="#fff" />
        <ButtonLabel>Opções do Vídeo</ButtonLabel>
      </Button>

      <Button onPress={nextEpisode}>
        <ButtonLabel>Próximo Episódio</ButtonLabel>
        <SkipNextIcon fill="#fff" />
      </Button>
    </Container>
  );
};

export default Actions;
