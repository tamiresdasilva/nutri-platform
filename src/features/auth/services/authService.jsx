const mockUsers = [
  {
    email: "nutri@teste.com",
    password: "nutrisenha",
    role: "nutricionista",
  },
  {
    email: "paciente@teste.com",
    password: "pacisenha",
    role: "paciente",
  },
];

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
    },
  };
}
