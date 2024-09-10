'use client'

import { signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ButtonLogout() {
  const router = useRouter();
  async function logout() {
    await signOut({
      redirect: false,
    });

    router.replace("/login");
  }

  return (
    <div className="self-start justify-self-end p-4 text-center hover:cursor-pointer" onClick={logout}>
      <Image
        src="/icons/logout-w.svg"
        alt="Informatica Icone"
        width={46}
        height={46}
      ></Image>
      <span>Sair</span>
    </div>
  );
}
