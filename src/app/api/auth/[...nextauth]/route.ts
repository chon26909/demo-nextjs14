import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
    // session: {
    //     strategy: 'jwt'
    // },
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {
                username: { label: 'username', type: 'text' },
                password: { label: 'password', type: 'password' }
            },
            authorize: async (credentials, req) => {
                const { username, password } = credentials as {
                    username: string;
                    password: string;
                };
                // validate here your username and password
                if (username !== 'chon' && password !== '1234') {
                    throw new Error('invalid credentials');
                }

                // confirmed users
                return { id: 1, name: 'HiChon', email: 'chon@gmail.com' } as any;
            }
        })
    ],
    pages: {
        signIn: '/v2/login'
    }
});

export { handler as GET, handler as POST };
