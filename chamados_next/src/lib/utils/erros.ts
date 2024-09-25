import { signOut } from "next-auth/react";

// Inicia o timer para o logout
export default function logoutError(error?: string) {
  if (!error) return;
  if (
    error.includes("signature") ||
    error.includes("jwt") ||
    error.includes("Token")
  ) {
    timer();
  }
}

const timer = () => {
  setTimeout(async () => {
    await signOut();
  }, 4000);
};
