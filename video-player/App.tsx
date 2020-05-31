import 'react-native-gesture-handler';

import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {
  hideNavigationBar,
  showNavigationBar,
} from 'react-native-navigation-bar-color';

import Orientation from 'react-native-orientation';
import Player from '~/components/Player';

const App = () => {
  useEffect(() => {
    StatusBar.setHidden(true);
    hideNavigationBar();
    Orientation.lockToLandscape();

    return () => {
      StatusBar.setHidden(false);
      showNavigationBar();
      Orientation.lockToPortrait();
    };
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Player />
    </>
  );
};

export default App;
