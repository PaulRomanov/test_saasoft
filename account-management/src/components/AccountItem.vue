<template>
  <div class="account-item account-item--mb-4">
    <div class="account-item__content">
      <label class="account-item__label">Метка</label>
      <input class="account-item__input" v-model="account.label" :rules="labelRules" />

      <label class="account-item__label">Тип записи</label>
      <select class="account-item__select" v-model="account.type" :items="['LDAP', 'Локальная']">
        <option value="LDAP">LDAP</option>
        <option value="Локальная">Локальная</option>
      </select>

      <label class="account-item__label">Логин</label>
      <input class="account-item__input" v-model="account.login" :rules="loginRules" />

      <label class="account-item__label" v-if="account.type === 'Локальная'">Пароль</label>
      <div class="account-item__password-wrapper" v-if="account.type === 'Локальная'">
        <input class="account-item__input" :type="passwordVisible ? 'text' : 'password'" v-model="account.password" :rules="passwordRules" />
        <button class="account-item__password-toggle" @click="togglePasswordVisibility">
          <svg v-if="passwordVisible" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
          <svg v-else xmlns="http://www.w3.org/20://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-off"><path d="M17.94 17.94a10.07 10.07 0 0 1-4.94 2.06c-7 0-10-7-10-7a9.5 9.5 0 0 1 3.22-5.63M18.36 18.36A9.96 9.96 0 0 0 22 12c0-7-3-7-10-7a9.5 9.5 0 0 0-1.22.12"/><line x1="2" x2="22" y1="2" y2="22"/></svg>
        </button>
      </div>

      <button class="account-item__delete-button" @click="$emit('delete')">Удалить</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  account: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['update', 'delete']);

const labelRules = [(v: any) => v.length <= 50 || 'Метка должна быть не более 50 символов'];
const loginRules = [(v: any) => !!v || 'Логин обязателен', (v: any) => v.length <= 100 || 'Логин должен быть не более 100 символов'];
const passwordRules = [(v: any) => !!v || 'Пароль обязателен', (v: any) => v.length <= 100 || 'Пароль должен быть не более 100 символов'];

const passwordVisible = ref(false);

const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};

watch(props.account, (newAccount) => {
  emit('update', newAccount);
}, { deep: true });
</script>

<style scoped lang="scss">
@use '@/assets/styles/_variables.scss' as variables;

.account-item {
  &--mb-4 {
    margin-bottom: 1rem;
  }

  &__content {
    padding: 20px;
    border: 1px solid variables.$color-quaternary;
    background-color: variables.$color-secondary;
    color: variables.$color-font-primary;
  }

  &__label {
    display: block;
    margin-bottom: 5px;
  }

  &__input,
  &__select {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid variables.$color-quaternary;
    background-color: variables.$color-tertiary;
    color: variables.$color-font-secondary;
  }

  &__password-wrapper {
    position: relative;
  }

  &__password-toggle {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
  }

  &__delete-button {
    padding: 10px 20px;
    background-color: variables.$color-red;
    color: variables.$color-font-primary;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: variables.$color-red-hover;
    }
  }
}
</style>