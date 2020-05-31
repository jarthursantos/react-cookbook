import React, {useCallback} from 'react';
import {StatusBar} from 'react-native';
import {WebView, WebViewMessageEvent} from 'react-native-webview';

const INJECTED_JAVASCRIPT = `
  (() => {
    const imgs = document.getElementsByClassName("avatar width-full height-full avatar-before-user-status");
    const avatar = imgs[0];

    window.ReactNativeWebView.postMessage(avatar.src);
  })()
;`;

const App = () => {
  const handleReceiveMessage = useCallback((event: WebViewMessageEvent) => {
    console.log({data: event.nativeEvent.data});
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <WebView
        source={{uri: 'https://github.com/jarthursantos'}}
        onMessage={handleReceiveMessage}
        injectedJavaScript={INJECTED_JAVASCRIPT}
      />
    </>
  );
};

export default App;
