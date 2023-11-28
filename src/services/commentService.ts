import { IPagination } from '@/types/common';
import { dummyApi } from './axiosInstance';
import { ICommentResponse } from '@/types/comment';

export const getComments = async ({ page, perPage }: IPagination) => {
    await new Promise((rosolve) => setTimeout(rosolve, 1000));

    const limit = perPage;
    const skip = perPage * (page - 1);

    try {
        const res = await dummyApi.get<ICommentResponse>(`/comments`, {
            params: {
                limit: limit,
                skip: skip
            }
        });

        return res.data;
    } catch (error) {
        console.log('error', error);
    }
};
