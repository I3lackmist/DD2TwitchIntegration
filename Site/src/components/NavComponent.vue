<script lang="ts">
import Vue from "vue";
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="nav-backdrop"></div>

  <div class="nav">
    <div class="nav_background"></div>
    <RouterLink to="/">
      <div class="nav_logo">Dankest Fungeon</div>
    </RouterLink>

    <div class="nav_button-field">
      <RouterLink to="/start-lobby">
        <div class="nav_button-field_button">Start a lobby</div>
      </RouterLink>

      <RouterLink to="/join-lobby">
        <div class="nav_button-field_button">Join a lobby</div>
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-backdrop {
  width: 100%;
  background-color: var(--bg);
  height: 3.5rem;
  top: 0;
}

.nav {
  top: 0;
  position: fixed;
  z-index: 1;
  width: 100%;
  border-bottom: solid 2px black;
  height: 3.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  a {
    text-decoration: none;
  }

  &_background {
    background-color: var(--bg);
    position: absolute;
    opacity: 85%;
    width: inherit;
    height: inherit;
  }

  &_logo {
    color: var(--text);
    height: 100%;
    width: fit-content;
    background: rgba(0, 0, 0, 0);
    display: flex;
    align-items: center;
    margin-left: 3rem;
  }

  &_button-field {
    display: flex;
    flex-direction: row;
    margin-right: 3rem;

    &_button {
      align-items: center;
      background-color: var(--key);
      border-left: solid 4px var(--key-dark);
      border-right: solid 4px var(--key-dark);
      display: flex;
      font-family: GermaniaOne;
      font-size: 2rem;
      height: 100%;
      justify-content: center;
      margin: 0 0.5rem;
      text-transform: uppercase;
      width: 14rem;
      color: var(--text);
      text-decoration: none;
    }
  }
}
</style>
