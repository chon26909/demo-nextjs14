import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Demo Nextjs 14',
    description: 'demo'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={[inter.className, 'flex min-h-screen flex-col'].join()}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
