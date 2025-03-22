<template>
  <div class="account-form">
    <div class="container">
      <div class="row">
        <div class="col col--12">
          <h1 class="account-form__title">Управление учетными записями</h1>
          <button class="account-form__add-button" @click="addAccount">Добавить учетную запись</button>
        </div>
      </div>
      <div class="row">
        <div class="col col--12">
          <AccountItem
            v-for="account in accounts"
            :key="account.id"
            :account="account"
            @delete="deleteAccount(account.id)"
            @update="updateAccount(account.id, $event)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useAccountsStore } from '@/stores/accounts';
import AccountItem from './AccountItem.vue';

const accountsStore = useAccountsStore();
const accounts = computed(() => accountsStore.accounts);

const addAccount = () => {
  accountsStore.addAccount({
    id: Date.now(),
    label: [],
    type: 'Локальная',
    login: '',
    password: '',
  });
};

const deleteAccount = (id: number) => {
  accountsStore.deleteAccount(id);
};

const updateAccount = (id: number, account: any) => {
  accountsStore.updateAccount(id, account);
};
</script>

<style scoped lang="scss">
.account-form {
  &__title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  &__add-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
}
</style>