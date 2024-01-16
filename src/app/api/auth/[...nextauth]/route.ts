import NextAuth, { AuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: AuthOptions = {
    session: {
        strategy: 'jwt'
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET
    },
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {
                username: { label: 'username', type: 'text' },
                password: { label: 'password', type: 'password' }
            },
            async authorize(credentials, req) {
                const { username, password } = credentials as {
                    username: string;
                    password: string;
                };
                // validate here your username and password
                if (username !== 'chon' && password !== '1234') {
                    throw new Error('invalid credentials');
                }

                const user = new Promise<User>((resolve) =>
                    resolve({ id: '1', name: 'Hichon', email: 'chon@gmail.com', image: '' })
                );

                // confirmed users
                return user;
            }
        })
    ],
    pages: {
        signIn: '/v2/login'
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.user = {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    image: user.image
                };
            }

            console.log('callback token', token);
            console.log('callback user', user);

            return token;
        },
        async session({ token, session }) {
            session.user.name = token.name;

            console.log('session', session);

            return session;
        }
    }
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
