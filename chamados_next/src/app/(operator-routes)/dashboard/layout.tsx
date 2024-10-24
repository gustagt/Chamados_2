import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import StoreProvider from "@/lib/providers/storeProvider";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

interface PrivateLayoutProps {
  children: ReactNode;
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {

  return <StoreProvider>{children}</StoreProvider>;
}
