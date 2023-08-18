import axios from 'axios';

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      'http://localhost:7878/api/login',
      JSON.stringify({
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

    return response.data;
  } catch (e: any) {
    if (axios.isAxiosError(e)) {
      return e.response;
    }

    return e.message;
  }
};
