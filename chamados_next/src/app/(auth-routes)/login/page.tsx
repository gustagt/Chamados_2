"use client";
import { signIn } from "next-auth/react";

import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";
import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import CardChamadoOne from "@/components/cards/CardChamadoOne";
import CardError from "@/components/cards/CardError";
import authService from "@/lib/services/auth.service";
import Cookies from 'js-cookie';

export default function Page() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const router = useRouter();

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    setError(false);

    const result = await authService.login({
      username,
      password,
    });

    if (!result.user) {
      console.error(error);
      setError(true);
      return;
    } else {
      Cookies.set('user', JSON.stringify(result),{ expires: 5 })
      router.push('chamados')
    }
  }

  return (
    <div className="grid gap-2 grid-rows-2 grid-cols-none md:grid-cols-2 md:grid-rows-none m-4 h-[96vh]">
      <CardChamadoOne />
      <div className="flex justify-center items-center">
        <form className="flex flex-col  w-2/5 min-w-60" onSubmit={handleSubmit}>
          {error && (
            <CardError
              title="Falha ao realizar login"
              textOne="Verificar se as informações de login estão corretas"
              textTwo="Para efetuar o login, utilizar o mesmo acesso usado para entrar na
          máquina"
            />
          )}
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
            required
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
            required
          />
          <div className="flex mt-7 justify-between gap-3 flex-wrap 2xl:flex-nowrap ">
            <ButtonPrimary text="Entrar"></ButtonPrimary>
          </div>
        </form>
      </div>
    </div>
  );
}
