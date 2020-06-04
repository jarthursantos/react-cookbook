import React, {useState, useRef, useCallback} from 'react';
import {StyleSheet} from 'react-native';
import VideoPlayer, {OnProgressData} from 'react-native-video';

import {useExecOnly} from '~/hooks/exec-only';

import HUD from './HUD';
import {Wrapper} from './styles';
import {PlayerContext} from './types';

const MANUAL_SEEK_SECONDS = 10;

const Player: React.FC = () => {
  const player = useRef<VideoPlayer>(null);
  const [isPaused, setPaused] = useState(false);
  const [isOpenned, setOpenned] = useState(true);
  const [currentData, setCurrentData] = useState<OnProgressData>();

  const execOnlyContainerOpenned = useExecOnly(isOpenned, {
    onElse: () => setOpenned(true),
  });

  const handlePlay = useCallback(
    execOnlyContainerOpenned(() => {
      setPaused(false);
      setOpenned(false);
    }),
    [execOnlyContainerOpenned],
  );

  const handlePause = useCallback(
    execOnlyContainerOpenned(() => setPaused(true)),
    [execOnlyContainerOpenned],
  );

  const handleReplay = useCallback(
    execOnlyContainerOpenned(() => {
      if (player.current && currentData) {
        const {currentTime} = currentData;

        const minSeek = 0;
        const newSeek = currentTime - MANUAL_SEEK_SECONDS;

        const time = Math.max(minSeek, newSeek);

        player.current.seek(time);
        handlePlay();
      }
    }),
    [player, currentData, handlePlay, execOnlyContainerOpenned],
  );

  const handleFoward = useCallback(
    execOnlyContainerOpenned(() => {
      if (player.current && currentData) {
        const {seekableDuration, currentTime} = currentData;

        const maxSeek = seekableDuration;
        const newSeek = currentTime + MANUAL_SEEK_SECONDS;

        const time = Math.min(maxSeek, newSeek);

        player.current.seek(time);
        handlePlay();
      }
    }),
    [player, currentData, handlePlay, execOnlyContainerOpenned],
  );

  const handlePreviousEpisode = useCallback(
    execOnlyContainerOpenned(() => console.log('handlePreviousEpisode')),
    [execOnlyContainerOpenned],
  );

  const handleOpenVideoOptions = useCallback(
    execOnlyContainerOpenned(() => console.log('handleOpenVideoOptions')),
    [execOnlyContainerOpenned],
  );

  const handleNextEpisode = useCallback(
    execOnlyContainerOpenned(() => console.log('handleNextEpisode')),
    [execOnlyContainerOpenned],
  );

  return (
    <PlayerContext.Provider
      value={{
        play: handlePlay,
        pause: handlePause,
        replay: handleReplay,
        foward: handleFoward,
        previousEpisode: handlePreviousEpisode,
        openVideoOptions: handleOpenVideoOptions,
        nextEpisode: handleNextEpisode,
      }}>
      <Wrapper>
        <VideoPlayer
          ref={player}
          paused={isPaused}
          resizeMode="contain"
          onProgress={setCurrentData}
          style={StyleSheet.absoluteFill}
          source={require('../../assets/videos/video.mp4')}
        />

        <HUD
          data={currentData}
          isPaused={isPaused}
          isOpenned={isOpenned}
          onOpenStateChange={setOpenned}
        />
      </Wrapper>
    </PlayerContext.Provider>
  );
};

export default Player;
