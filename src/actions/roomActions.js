import messageApi from '../api/messageApi';

export function joinRoom(roomData) {
  const payload = roomData.data;
  return { type: 'JOIN_ROOM', payload };
}

export function newRoom(room) {
  const newRoom = { title: room, messages: [{ user: 'bot', message: 'Selamat datang' }] };
  return (dispatch) => {
    return messageApi.createRoom(newRoom)
      .then((response) => {
        dispatch(newRoomSuccess(newRoom));
      });
    return response;
  };
}

export function newRoomSuccess(payload) {
  return { type: 'NEW_ROOM', payload };
}

export function updateRoomList(payload) {
  return { type: 'UPDATE_ROOM_LIST', payload };
}

export function fetchRoomData(user) {
  console.log('in fetch room');
  return (dispatch) => {
    return messageApi.fetchRoom(user)
      .then((response) => {
        dispatch(joinRoom(response));
      });
    return response;
  };
}

export function fetchMessage(user) {
  console.log('in fetch room');
  return (dispatch) => {
    return messageApi.fetchRoom(user)
      .then((response) => {
        dispatch(joinRoom(response));
      });
    return response;
  };
}
