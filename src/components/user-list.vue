<template>
	<ul class="user-list">
		<li class="user-list--item" v-for="user in []" :index="user.id">
			<div class="avatar">
				<img :src="avatarUrl" width="48" />
			</div>
			<span class="username"></span>
			<a href="#" class="btn-remove">+</a>
		</li>
	</ul>
</template>

<script>
	import vuex from 'vuex';

	export default {
		name: 'UserList',

		data() {
			return {
				avatarUrl: 'https://bit.ly/2TpLp1e'
			}
		},
	}
</script>

<style lang="scss" scoped>
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