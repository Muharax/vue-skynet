<template>

	<div class="theme">
		<div>Theme</div>
		<div>
			<select v-model="selectedTheme" @change="updateTheme">
				<option value="dark">Dark</option>
				<option value="light">Light</option>
			</select>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			selectedTheme: 'dark' // Domyślnie ustawiamy na dark
		};
	},
	mounted() {
		// Sprawdź, czy jest zapisany motyw w localStorage i ustaw go jako wybrany
		const savedTheme = localStorage.getItem('isDarkMode');
		if (savedTheme !== null) {
			this.selectedTheme = savedTheme;
		} else {
			// Sprawdź preferencje kolorów systemu operacyjnego
			const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
			if (!darkModeQuery.matches) {
				this.selectedTheme = 'light'; // Jeśli preferowany motyw systemu operacyjnego nie jest dark, ustaw na light
			}
		}
		this.setTheme();
	},

	methods: {
		updateTheme() {
			// Aktualizuj wybrany motyw i zapisz go w localStorage
			localStorage.setItem('isDarkMode', this.selectedTheme);
			this.setTheme();
		},
		setTheme() {
			const root = document.documentElement;
			const isDarkMode = this.selectedTheme === 'dark';
			root.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
		}
	}
};
</script>
<style scoped>
.theme{
	background-color: var(--primary);
	padding: 0.5rem;
	margin-right: 15px;
	border-radius: 5px;
	color:var(--font-color)
}
</style>