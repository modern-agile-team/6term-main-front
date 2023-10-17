import io, { Socket } from 'socket.io-client';
import { useCallback } from 'react';

const backUrl = 'http://13.209.21.62:3000';

const sockets: { [key: string]: Socket } = {};
const useSocket = (chatspace?: string): [Socket | undefined, () => void] => {
  console.log('rerender', chatspace);
  const disconnect = useCallback(() => {
    if (chatspace) {
      sockets[chatspace].disconnect();
      delete sockets[chatspace];
    }
  }, [chatspace]);
  if (!chatspace) {
    return [undefined, disconnect];
  }
  if (!sockets[chatspace]) {
    sockets[chatspace] = io(`${backUrl}/ws-${chatspace}`, {
      transports: ['websocket'],
    });
  }

  return [sockets[chatspace], disconnect];
};

export default useSocket;
