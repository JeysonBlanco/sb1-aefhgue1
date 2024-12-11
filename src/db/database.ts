// Simulated database using localStorage
interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  created_at: string;
}

const USERS_KEY = 'users';

const getUsers = (): User[] => {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
};

const saveUsers = (users: User[]) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const createUser = async (email: string, password: string, name: string) => {
  const users = getUsers();
  
  // Check if email already exists
  if (users.some(user => user.email === email)) {
    throw new Error('Email already exists');
  }

  const newUser = {
    id: Date.now(),
    email,
    password,
    name,
    created_at: new Date().toISOString()
  };

  users.push(newUser);
  saveUsers(users);
  return newUser;
};

export const getUserByEmail = async (email: string) => {
  const users = getUsers();
  return users.find(user => user.email === email) || null;
};

export const getAllUsers = async () => {
  const users = getUsers();
  return users.map(({ password, ...user }) => user); // Exclude password from results
};