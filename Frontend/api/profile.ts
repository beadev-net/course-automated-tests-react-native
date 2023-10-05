import axios, {AxiosResponse} from 'axios';
import {apiUrl} from './api.config';

type Profile = {
  email: string;
  birthday: string;
  name: string;
  password?: string;
};

const endpoint = `${apiUrl}/users`;

export const updateProfile = async (
  token: string,
  {email, birthday, name, password}: Profile,
) => {
  try {
    const response = await axios.put(
      `${endpoint}?token=${token}`,
      {
        email: email,
        birthday: birthday,
        name: name,
        password: password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000,
      },
    );

    return response.data;
  } catch (e: any) {
    if (axios.isAxiosError(e)) {
      return e.response;
    }

    throw e;
  }
};

export const getProfile = async (token: string): Promise<Profile | any> => {
  try {
    const response = await axios.get(`${endpoint}?token=${token}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000,
    });

    return response.data;
  } catch (e: any) {
    if (axios.isAxiosError(e)) {
      return e.response;
    }

    throw e;
  }
};
