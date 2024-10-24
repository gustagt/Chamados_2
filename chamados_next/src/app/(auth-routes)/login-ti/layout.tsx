
import { getServerSession } from 'next-auth';
import { ReactNode } from 'react';

import { redirect } from 'next/navigation';
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route';


interface PrivateLayoutProps{
    children: ReactNode
}

export default async function PrivateLayout({children}: PrivateLayoutProps) {

    return <>{children}</>
}
