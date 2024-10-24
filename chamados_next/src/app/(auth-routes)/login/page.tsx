"use client";
import { signIn } from "next-auth/react";

import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";
import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import LinkPrimary from "@/components/links/LinkPrimary";
import CardChamadoOne from "@/components/cards/CardChamadoOne";

export default function Page() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    const result = await signIn("client", {
      username,
      password,
      redirect: false,
      
    });

    if (result?.error) {
      console.log(result);
      return;
    }

    router.replace("/chamados");
  }

  return (
    <div className="grid gap-2 grid-rows-2 grid-cols-none md:grid-cols-2 md:grid-rows-none m-4 h-[96vh]">
      <CardChamadoOne />
      <div className="flex justify-center items-center">
        <form className="flex flex-col  w-2/5 min-w-60" onSubmit={handleSubmit}>
          <label htmlFor="username" className="font-semibold">
            Usuário:
          </label>
          <input
            id="username"
            name="username"
            type="text"
            className="outline outline-1 outlineu-black rounded-sm h-8 px-2 mb-2 "
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            maxLength={45}
          />
          <label htmlFor="password" className="font-semibold">
            Senha:
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="outline outline-1 outlineu-black rounded-sm h-8 px-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            maxLength={45}
          />
          <div className="flex mt-7 justify-between gap-3 flex-wrap 2xl:flex-nowrap ">
            <ButtonPrimary text="Entrar"></ButtonPrimary>
          </div>
        </form>
      </div>
    </div>
  );
}
