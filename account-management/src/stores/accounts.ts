import { defineStore } from 'pinia';

interface Account {
  id: number;
  label: string[];
  type: 'LDAP' | 'Локальная';
  login: string;
  password?: string;
}

interface State {
  accounts: Account[];
}

export const useAccountsStore = defineStore('accounts', {
  state: (): State => ({
    accounts: [],
  }),
  actions: {
    addAccount(account: Account) {
      this.accounts.push(account);
    },
    updateAccount(id: number, account: Account) {
      const index = this.accounts.findIndex((a) => a.id === id);
      if (index !== -1) {
        this.accounts[index] = account;
      }
    },
    deleteAccount(id: number) {
      this.accounts = this.accounts.filter((a) => a.id !== id);
    },
  },
});