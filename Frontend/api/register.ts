import axios from 'axios';
import {apiUrl} from './api.config';

type RegisterRequest = {
  name: string;
  email: string;
  password: string;
};

type RegisterResponse = {
  data?: {
    message?: string;
  };
  token?: string;
  status?: number;
};

const endpoint = `${apiUrl}/register`;

export const register = async ({
  name,
  email,
  password,
}: RegisterRequest): Promise<RegisterResponse> => {
  try {
    const response = await axios.post(
      `${endpoint}`,
      JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000,
      },
    );

    return response as RegisterResponse;
  } catch (e: any) {
    if (axios.isAxiosError(e)) {
      return e.response as RegisterResponse;
    }

    return e.message;
  }
};
