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

  // simula resposta real de backend
  return {
    token: "fake-jwt-token",
    user: {
      email: user.email,
      role: user.role,
      name: user.name,
      avatar: user.avatar,
    },
  };
}
