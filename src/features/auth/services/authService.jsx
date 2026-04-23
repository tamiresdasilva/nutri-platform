import { mockUsers } from "../../../mocks/users";

export async function loginRequest(email, password) {
  // simula delay de API
  await new Promise((res) => setTimeout(res, 800));

  const user = mockUsers.find(
    (u) => u.email === email && u.password === password,
  );

  if (!user) {
    throw new Error("Credenciais inválidas");
  }

  // ✅ retorna o usuário COMPLETO (não cortar campos!)
  return {
    token: "fake-jwt-token",
    user: user,
  };
}
