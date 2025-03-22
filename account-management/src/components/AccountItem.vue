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
      <input class="account-item__input" v-model="account.password" v-if="account.type === 'Локальная'" :rules="passwordRules" />

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

watch(props.account, (newAccount) => {
  emit('update', newAccount);
}, { deep: true });
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.account-item {
  &--mb-4 {
    margin-bottom: 1rem;
  }

  &__content {
    padding: 20px;
    border: 1px solid $color-quaternary;
    background-color: $color-secondary;
    color: $color-font-primary;
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
    border: 1px solid $color-quaternary;
    background-color: $color-tertiary;
    color: $color-font-secondary;
  }

  &__delete-button {
    padding: 10px 20px;
    background-color: $color-red;
    color: $color-font-primary;
    border: none;
    cursor: pointer;
  }
}
</style>