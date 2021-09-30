const app = Vue.createApp({
	data() {
		return {
			hobbies: [],
			resultHobbies: [],
			enteredHobbyValue: '',
			userDetails: {
				firstName: 'Leela',
				lastName: 'Web Dev',
				age: 34
			},
			showSubmmit: false,
			showResult: false
		};
	},
	methods: {
		onHobbySubmit() {
			this.hobbies.push(this.enteredHobbyValue);
			this.enteredHobbyValue = '';
			this.showResult = false;
			this.resultHobbies = [];
		},
		removeHobby(index) {
			this.hobbies.splice(index, 1);
			this.showResult = false;
		},
		submmitDone() {
			this.showResult = true;
			this.hobbies.forEach(hobby => {
				this.resultHobbies.push(hobby);
			});
			this.hobbies = [];
		}
	},
	watch: {
		hobbies: {
			handler(hobbies) {
				if (hobbies.length > 0) {
					this.showSubmmit = true;
				} else {
					this.showSubmmit = false;
				}
			},
			deep: true
		}
	}
});

app.mount('#app');
