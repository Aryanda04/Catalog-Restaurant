import NotificationHelper from './notification-helper';

const webSocket = null;

const WebSocketInitiator = {
  init(url) {
    webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const movie = JSON.parse(message.data);
    NotificationHelper.sendNotification({
      title: `${movie.title} is on cinema!`,
      options: {
        body: movie.overview,
        image: `${CONFIG.BASE_IMAGE_URL + movie.poster_path}`,
      },
    });
  },
};

const sendDataToWebsocket = (reviewData) => {
  const data = JSON.stringify(reviewData);

  webSocket.send(data);
};

// export default WebSocketInitiator;
export {WebSocketInitiator, sendDataToWebsocket};
