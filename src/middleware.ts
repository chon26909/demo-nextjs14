export { default } from 'next-auth/middleware';

export const config = {
    matcher: ['/v2/protected']
};
