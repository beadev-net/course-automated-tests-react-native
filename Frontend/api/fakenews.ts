import axios from 'axios';
import {apiUrl} from './api.config';
import {FakeNews} from '../components/Item';

interface FakenewsResponse {
  message?: string;
  data?: FakeNews[];
  status?: number;
}

export const fakenews = async (token: string): Promise<FakenewsResponse> => {
  try {
    console.log(token);
    const response = await axios.get(`${apiUrl}/fakenews?token=${token}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000,
    });

    return response;
  } catch (e: any) {
    if (axios.isAxiosError(e)) {
      return e.response as FakenewsResponse;
    }

    return e.message;
  }
};
