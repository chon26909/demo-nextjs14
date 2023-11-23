import { dummyApi } from './axiosInstance';

interface IRequestLogin {
    username: string;
    password: string;
}

export const login = (body: IRequestLogin) => {
    return dummyApi.post('/auth/login', body);
};
