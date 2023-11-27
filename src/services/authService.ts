import { dummyApi } from './axiosInstance';

interface IRequestLogin {
    username: string;
    password: string;
}

export const login = async (body: IRequestLogin) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return dummyApi.post('/auth/login', body);
};
