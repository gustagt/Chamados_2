
import StoreProvider from "@/lib/providers/storeProvider";
import { ReactNode } from "react";

interface PrivateLayoutProps {
  children: ReactNode;
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {

  return <StoreProvider>{children}</StoreProvider>;
}
