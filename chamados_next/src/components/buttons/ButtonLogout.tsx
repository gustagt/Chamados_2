'use client'

import { signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ButtonLogout({pathIcon, className}: ButtonLogoutProps) {
  const router = useRouter();
  async function logout() {
    await signOut({
      redirect: false,
    });

    router.replace("/login");
  }

  return (
    <div className={`self-start justify-self-end p-4 text-center hover:cursor-pointer ${className}`} onClick={logout}>
      <Image
        src={pathIcon}
        alt="Logout"
        width={46}
        height={46}
      ></Image>
      <span>Sair</span>
    </div>
  );
}

type ButtonLogoutProps = {
  pathIcon: string;
  className?:string;
};
