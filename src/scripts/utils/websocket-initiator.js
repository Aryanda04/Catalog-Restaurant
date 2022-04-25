import NotificationHelper from './notification-helper';

let socket = null;

const WebSocketInitiator = {
  init(url) {
    socket = new WebSocket(url);
    console.log('ws connected to => ', socket.url);

    socket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    console.log('websocket onmessage handler => ', message);
    const restaurant = JSON.parse(message.data);
    NotificationHelper.sendNotification({
      title: `${restaurant.title} is open!`,
      options: {
        body: restaurant.review,
        image: `${CONFIG.BASE_IMAGE_URL}`,
      },
    });
  },


};

const sendDataToWebsocket = (reviewData) => {
  const data = JSON.stringify(reviewData);

  socket.send(data);
};

export {WebSocketInitiator, sendDataToWebsocket};
