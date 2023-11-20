import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'login',
    description: 'demo'
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
