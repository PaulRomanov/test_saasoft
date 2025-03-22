<template>
  <div class="account-form">
    <div class="account-form__container">
      <div class="account-form__row">
        <div class="account-form__col account-form__col--12">
          <h1 class="account-form__title">Управление учетными записями</h1>
          <button class="account-form__add-button" @click="addAccount">Добавить учетную запись</button>
        </div>
      </div>
      <div class="account-form__row">
        <div class="account-form__col account-form__col--12">
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
@import '@/assets/styles/_variables.scss';

.account-form {
  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  &__row {
    display: flex;
    flex-wrap: wrap;
  }

  &__col {
    flex: 1;
    padding: 10px;

    &--12 {
      flex: 0 0 100%;
    }
  }

  &__title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: $color-font-primary;
  }

  &__add-button {
    padding: 10px 20px;
    background-color: $color-accent;
    color: $color-primary;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: $color-accent-light;
    }
  }
}
</style>