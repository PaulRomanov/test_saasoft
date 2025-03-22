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
    accounts: JSON.parse(localStorage.getItem('accounts') || '[]'),
  }),
  actions: {
    addAccount(account: Account) {
      this.accounts.push(account);
      this.saveAccounts();
    },
    updateAccount(id: number, account: Account) {
      const index = this.accounts.findIndex((a) => a.id === id);
      if (index !== -1) {
        this.accounts[index] = account;
        this.saveAccounts();
      }
    },
    deleteAccount(id: number) {
      this.accounts = this.accounts.filter((a) => a.id !== id);
      this.saveAccounts();
    },
    saveAccounts() {
      localStorage.setItem('accounts', JSON.stringify(this.accounts));
    },
  },
});