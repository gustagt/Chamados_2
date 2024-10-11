"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import IconX from "../Icons/IconX";

export default function ButtonLogout({
  path,
  className,
}: ButtonLogoutProps) {
  const router = useRouter();
  async function logout() {
    await signOut({
      redirect: false,
    });

    router.replace(path);
  }

  return (
    <div
      className={`flex flex-col self-start justify-self-end p-4 text-center hover:cursor-pointer ${className}`}
      onClick={logout}
    >
      <IconX color="white" width={46} height={46} />
      <span>Sair</span>
    </div>
  );
}

type ButtonLogoutProps = {
  path: string;
  className?: string;
};
