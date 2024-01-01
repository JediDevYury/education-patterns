export const createUser = (firstName: string, lastName: string) => ({
  id: crypto.randomUUID(),
  createdAt: Date.now(),
  firstName,
  lastName,
  fullName: `${firstName} ${lastName}`,
});
