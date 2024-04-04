// import { ref } from 'vue';

// export const selectedTheme = ref(''); // Nie ustawiamy domyślnie żadnego motywu

// export const initializeTheme = () => {
//   // Sprawdź, czy jest zapisany motyw w localStorage i ustaw go jako wybrany
//   const savedTheme = localStorage.getItem('isDarkMode');
//   if (savedTheme !== null) {
//     selectedTheme.value = savedTheme;
//     setTheme();
//   } else {
//     // Sprawdź preferencje kolorów systemu operacyjnego
//     const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
//     selectedTheme.value = darkModeQuery.matches ? 'dark' : 'light';
//     updateTheme();
//   }
// };

// export const updateTheme = () => {
//   // Aktualizuj wybrany motyw i zapisz go w localStorage
//   localStorage.setItem('isDarkMode', selectedTheme.value);
//   setTheme();
// };

// const setTheme = () => {
//   const root = document.documentElement;
//   const isDarkMode = selectedTheme.value === 'dark';
//   root.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
// };


// ===================================
import { ref } from 'vue';
export const selectedTheme = ref(''); // Nie ustawiamy domyślnie żadnego motywu

export const initializeTheme = () => {
  // Sprawdź, czy jest zapisany motyw w localStorage i ustaw go jako wybrany
  const savedTheme = localStorage.getItem('isDarkMode');
  if (savedTheme !== null) {
    selectedTheme.value = savedTheme;
    setTheme();
  } else {
    // Sprawdź preferencje kolorów systemu operacyjnego
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    selectedTheme.value = darkModeQuery.matches ? 'true' : 'false';
    console.log(selectedTheme.value);
    updateTheme();
  }

};

export const updateTheme = () => {
  // Aktualizuj wybrany motyw i zapisz go w localStorage
  localStorage.setItem('isDarkMode', selectedTheme.value);
  setTheme();
};

const setTheme = () => {
  const root = document.documentElement;
  const isDarkMode = selectedTheme.value;
  root.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
};

