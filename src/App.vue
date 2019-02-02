<template>
	<div id="app">
		<nav-bar></nav-bar>
		<main>
			<section>
				<a class="load-users" href="#" @click.prevent="loadUsers">Load users</a>
				<h2>Count: 0</h2>
			</section>
			<user-list></user-list>
		</main>
	</div>
</template>

<script>
	import navBar from '@/components/nav-bar.vue';
	import userList from '@/components/user-list.vue';

	export default {
		name: 'App',

		components: {
			navBar,
			userList
		},
	}
</script>

<style lang="scss" scoped>
	#app {
		height: 100vh;
	}

	main {
		background: $vue-dark-plus-5;
		box-sizing: border-box;
		max-width: $page-width;
		max-width: $page-width;
		min-height: 100%;
		margin: auto;
		padding: 76px 12px 32px;

		section {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.load-users {
				font-size: 16px;
				color: $vue-green-plus-25;
			}

			h2 {
				margin-left: auto;
			}
		}
	}
</style>
