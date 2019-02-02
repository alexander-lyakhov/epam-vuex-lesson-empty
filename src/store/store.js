import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',

	state: {
		accountName: 'Alexander',
		accountAvatar: 'https://bit.ly/2S11Lkn',
		userList: [],
	},

	getters: {
		account(state) {
			return {
				name: state.accountName,
				avatar: state.accountAvatar
			}
		},

		userCount(state) {
			return state.userList.length;
		},
	},
	
	mutations: {
		addUser(state, name) {
			const id = Math.floor(Math.random() * new Date().getTime()).toString(16);
			state.userList = [{id, name}, ...state.userList];
		},

		removeUser(state, id) {
			this.state.userList = this.state.userList.filter(item => item.id !== id);
		},

		populateUserList(state, data) {
			state.userList = [...data, ...state.userList];
		}
	},

	actions: {
		fetchUsers({commit}) {
			return fetch('https://jsonplaceholder.typicode.com/users')
				.then(res => res.json())
				.then(users => commit('populateUserList', users))
		}
	}
});
