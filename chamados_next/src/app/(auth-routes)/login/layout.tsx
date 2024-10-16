
import { getServerSession } from 'next-auth';
import { ReactNode } from 'react';

import { redirect } from 'next/navigation';
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route';


interface PrivateLayoutProps{
    children: ReactNode
}

export default async function PrivateLayout({children}: PrivateLayoutProps) {
    const session = await getServerSession(nextAuthOptions)

    if(session?.user.role === "client"){
        redirect('/chamados')
    }

    return <>{children}</>
}
