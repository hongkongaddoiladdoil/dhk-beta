import io from 'socket.io-client';
import feathers from '@feathersjs/client';
// Socket.io is exposed as the `io` global.
const socket = io(window.location.href);
// @feathersjs/client is exposed as the `feathers` global.
const feathersClient = feathers();
feathersClient.configure(feathers.socketio(socket));
feathersClient.configure(feathers.authentication({storage:window.localStorage}));

export default feathersClient;
