<template>
	<div class="nav-backdrop"></div>

	<div class="nav">
		<div class="nav_background"></div>
		<div class="nav_logo">
			<RouterLink to="/">
				<div class="nav_logo_upper gradient-text">Dankest</div>
				<div class="nav_logo_lower gradient-text">Fungeon</div>
			</RouterLink>
		</div>

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

<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped>
.nav-backdrop {
	width: 100%;
	background-color: var(--bg);
	height: 3.5rem;
	top: 0;
}

.gradient-text {
	color: rgba(0, 0, 0, 0);
	background-clip: text;
}

.nav {
	top: 0;
	position: fixed;
	z-index: 1;
	width: 100%;
	border-bottom: solid 2px black;
	height: 4rem;
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
		width: fit-content;
		background: rgba(0, 0, 0, 0);
		margin-left: 3rem;
		font-size: 1.65rem;
		font-weight: bolder;
		align-self: center;

		&_upper {
			padding-left: 1.5rem;
			background-image: linear-gradient(var(--accent), var(--accent-dark));
		}

		&_lower {
			background-image: linear-gradient(
				var(--accent),
				var(--accent-dark),
				var(--accent-darker)
			);
		}
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
