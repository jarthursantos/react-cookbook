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
          source={{
            uri:
              'https://r1---sn-q5u5jvooxjupvo-j28e.googlevideo.com/videoplayback?expire=1591071290&ei=umHVXqK2HMn5zLUPgbST0AU&ip=2607:5300:60:7317::&id=e15314e8f2b2d00e&itag=22&source=blogger&susc=bl&mime=video/mp4&dur=1427.144&lmt=1590953409199909&sparams=expire,ei,ip,id,itag,source,susc,mime,dur,lmt&sig=AOq0QJ8wRQIhAPmiCo1j6gtkofMP2jjBjtZKwS9OnlIR_nQIvmBS3mfVAiBV8l8xqDI2MmeemlZ4sca7QnNPrAQ_l7f9rIDIrfNHQw%3D%3D&redirect_counter=1&rm=sn-p5qyr7e&req_id=27a8d13d9e1536e2&cms_redirect=yes&ipbypass=yes&mh=bb&mip=177.70.176.178&mm=31&mn=sn-q5u5jvooxjupvo-j28e&ms=au&mt=1591048355&mv=m&mvi=0&pcm2cms=yes&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pcm2cms,pl&lsig=AG3C_xAwRQIhAJWRAwd8A_hd6O3JjvMVrIVlSYQuCamx-NsPHnEZbQluAiAymmZclp3W6zBwnfySaqQ2j953lAcKxSV-qC6vXiYYxA%3D%3D',
          }}
          // source={require('../../assets/videos/video.mp4')}
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
