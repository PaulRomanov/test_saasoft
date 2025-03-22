<template>
  <header class="header">
    <div class="header__left">
      <a href="https://saasoft.ru" class="header__logo-link">SaaSoft</a>
    </div>
    <div class="header__right">
      <span class="header__name">
        <a href="https://github.com/PaulRomanov" class="header__link">Павел Романов</a>
      </span>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/_variables.scss' as variables;

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: variables.$color-secondary;
  color: variables.$color-font-primary;

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  &__logo-link {
    font-size: 24px;
    font-weight: bold;
    margin-right: 16px;
    color: variables.$color-font-primary;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: variables.$color-accent-light;
    }
  }

  &__name {
    font-size: 18px;
  }

  &__link {
    color: variables.$color-accent;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: variables.$color-accent-light;
    }
  }
}
</style>