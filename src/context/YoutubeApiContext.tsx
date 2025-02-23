import { createContext, useContext, ReactNode } from 'react';
import Youtube from '../api/youtube';
import YoutubeClient from '../api/youtubeClient';
import JsonYoutubeClient from '../api/jsonYoutubeClient';

const useMock = import.meta.env.VITE_USE_MOCK; // real data 체크 시  === true 로 설정해주기

const client = useMock ? new JsonYoutubeClient() : new YoutubeClient();
const youtube = new Youtube(client);

export const YoutubeApiContext = createContext({ youtube });

export const YoutubeApiProvider = ({ children }: { children: ReactNode }) => {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
};

export const useYoutubeApi = () => {
  return useContext(YoutubeApiContext);
};
