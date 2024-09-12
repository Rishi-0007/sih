import { create } from "zustand";

interface User {
  id: number;
  name: string;
}

interface Store {
  users: User[];
  addUser: (user: User) => void;
}

const useUsersStore = create<Store>((set) => ({
  users: [],
  addUser: (user: User) => set((state) => ({ users: [...state.users, user] })),
}));

export default useUsersStore;
