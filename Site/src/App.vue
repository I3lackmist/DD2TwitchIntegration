<script lang="ts" setup>
import { RouterView } from "vue-router";
import FooterComponent from "@/components/FooterComponent.vue";
import NavComponent from "@/components/NavComponent.vue";
</script>

<template>
	<div class="backdrop"></div>

	<nav>
		<NavComponent></NavComponent>
	</nav>

	<main>
		<RouterView />
	</main>

	<footer>
		<FooterComponent></FooterComponent>
	</footer>
</template>

<style lang="scss">
@import "@/assets/base.scss";

.backdrop {
	background-image: linear-gradient(
		to right,
		rgba(0, 0, 0, 1),
		rgba(6, 22, 33, 15),
		rgba(6, 22, 33, 15),
		rgba(0, 0, 0, 50),
		rgba(6, 22, 33, 50),
		rgba(0, 0, 0, 50),
		rgba(6, 22, 33, 1)
	);
	width: 100vw;
	height: 100vh;
	position: fixed;
	opacity: 50%;
	z-index: 0;
}

main {
	min-height: calc(100vh - 6.5rem);
	padding: 3rem;
}
</style>
