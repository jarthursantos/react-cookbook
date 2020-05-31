import React, {useMemo} from 'react';

import ProgressBar from './ProgressBar';
import {Container, RemainingTime} from './styles';
import {OnProgressData} from 'react-native-video';

interface Props {
  data?: OnProgressData;
}

const ProgressControler: React.FC<Props> = ({data}) => {
  const currentProgress = useMemo(() => {
    if (data) {
      const progressPercentage =
        (data.currentTime / data.seekableDuration) * 100;

      return progressPercentage;
    }

    return 0;
  }, [data]);

  const remainingTime = useMemo(() => {
    if (data) {
      const minutes = Math.floor(data.currentTime / 60);
      const seconds = Math.floor(data.currentTime - minutes * 60);

      const minutesFormated = minutes < 9 ? `0${minutes}` : minutes;
      const secondsFormated = seconds < 9 ? `0${seconds}` : seconds;

      return `${minutesFormated}:${secondsFormated}`;
    }

    return '00:00';
  }, [data]);

  return (
    <Container>
      <ProgressBar progress={currentProgress} />
      <RemainingTime>{remainingTime}</RemainingTime>
    </Container>
  );
};

export default ProgressControler;
