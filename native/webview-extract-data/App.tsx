import React, {useCallback, useState, useMemo} from 'react';
import {StatusBar, ActivityIndicator} from 'react-native';
import {WebView, WebViewMessageEvent} from 'react-native-webview';

import {Container, BottomBar, LoadingContainer, Label} from './styles';

const App = () => {
  const [working, setWorking] = useState(true);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<string[]>();

  const handleLoaded = useCallback(() => {
    setLoading(false);
  }, []);

  const handleReceiveMessage = useCallback((event: WebViewMessageEvent) => {
    const result: string[] = JSON.parse(event.nativeEvent.data);

    setTimeout(() => {
      setData(result);
      setWorking(false);
    }, 1000);
  }, []);

  const message = useMemo(() => {
    if (loading) {
      return 'Carregando a página';
    }

    if (!data) {
      return 'Extraindo vídeo(s)';
    }

    return `${data.length} vídeo(s) encontrado(s)`;
  }, [loading, data]);

  return (
    <Container>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <WebView
        onLoad={handleLoaded}
        onMessage={handleReceiveMessage}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        source={{uri: 'https://www.google.com/'}}
      />

      <BottomBar>
        <LoadingContainer>
          <Label>{message}</Label>
          {working && <ActivityIndicator size={24} color="#fff" />}
        </LoadingContainer>
      </BottomBar>
    </Container>
  );
};

const INJECTED_JAVASCRIPT = `
  (() => {
    let interval;
    let tryingTimes = 3;

    function extractSources(videos) {
      const sources = [];

      for (let index = 0; index < videos.length; index++) {
        const video = videos[index];

        sources.push(video.src);
      }

      return sources;
    }

    function handler() {
      const videos = document.getElementsByTagName('video');

      if (videos.length !== 0) {
        window.ReactNativeWebView.postMessage(
          JSON.stringify(extractSources(videos))
        );

        clearInterval(interval);
      } else {
        tryingTimes -= 1;

        if (tryingTimes === 0) {
          window.ReactNativeWebView.postMessage('[]');
          clearInterval(interval);
        }
      }
    }

    interval = setInterval(handler, 1000);
  })();
`;

export default App;
