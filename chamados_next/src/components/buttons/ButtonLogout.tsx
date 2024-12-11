"use client";

import { signOut } from "next-auth/react";

import { useRouter } from "next/navigation";
import IconX from "../Icons/IconX";
import Cookies  from 'js-cookie';

export default function ButtonLogout({

  type,
  className,
  color
}: ButtonLogoutProps) {
  const router = useRouter();
  async function logout() {
    Cookies.remove(type)
    router.refresh()
  }

  return (
    <div
      className={`flex flex-col self-start justify-self-end p-4 text-center hover:cursor-pointer ${className}`}
      onClick={logout}
    >
      <IconX color={color} width={46} height={46} />
      <span>Sair</span>
    </div>
  );
}

type ButtonLogoutProps = {

  type: string;
  className?: string;
  color: string
};
