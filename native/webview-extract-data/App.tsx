import React from 'react';
import {StatusBar} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <WebView source={{uri: 'https://github.com/jarthursantos'}} />
    </>
  );
};

export default App;
