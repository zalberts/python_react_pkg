import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:5000');


function subscribeTopic(topic, cb) {
  socket.on(topic, data => cb(null, data));
  socket.emit(topic + '_subscribed', 1000);
}

function unsubscribeTopic(topic, cb) {
  socket.off(topic, data => cb(null, data));
  socket.emit(topic + '_unsubscribed', 1000);
}

export { subscribeTopic, unsubscribeTopic }
