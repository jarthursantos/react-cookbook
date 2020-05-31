import {createContext} from 'react';

export interface PlayerHandlers {
  play(): void;
  pause(): void;

  replay(): void;
  foward(): void;

  // seekTo(): void;

  previousEpisode(): void;
  openVideoOptions(): void;
  nextEpisode(): void;
}

export const PlayerContext = createContext<PlayerHandlers>({
  play: () => {},
  pause: () => {},
  replay: () => {},
  foward: () => {},
  previousEpisode: () => {},
  openVideoOptions: () => {},
  nextEpisode: () => {},
});
