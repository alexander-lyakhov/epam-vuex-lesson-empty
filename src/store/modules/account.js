export default {
	state: {
		accountName: 'Alexander',
		accountAvatar: 'https://bit.ly/2S11Lkn',
	},

	getters: {
		account(state) {
			return {
				name: state.accountName,
				avatar: state.accountAvatar
			}
		},
	}
}