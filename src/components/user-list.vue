﻿<template>
	<div>
		<section>
			<a class="load-users" href="#" @click.prevent="loadUsers">Load users</a>
			<h2>Count: 0</h2>
		</section>

		<ul class="user-list">
			<li class="user-list--item" v-for="user in []" :key="user.id">
				<div class="avatar">
					<img src="@/assets/user-avatar.png" width="48" />
				</div>
				<span class="username">{{user.name}}</span>
				<a href="#" class="btn-remove" @click.prevent="removeUser(user.id)">+</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'UserList',

		computed: {
		},

		methods: {
		}
	}
</script>

<style lang="scss" scoped>

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

	.user-list {
		margin-bottom: 16px;
		background: $vue-dark-minus-5;
		padding: 0 8px;

		.user-list--item {
			font-size: 24px;
			border-bottom: 1px solid $vue-dark-plus-15;
			height: 80px;
			display: flex;
			align-items: center;

			&:last-child {
				border: none;
			}
		}

		.avatar {
			background: $vue-dark-plus-15;
			width: 56px;
			height: 56px;
			padding: 4px;
		}

		.username {
			padding: 0 12px;
		}

		.btn-remove {
			font-size: 32px;
			color: #f99;
			transform: rotate(45deg);
			margin: 12px;
			margin-left: auto;
		}
	}
</style>