export const selectDarkMode = () => {
  if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark')
    return 'dark';
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
    return 'light';
  }
}

export const changeDarkMode = () => {
  if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    localStorage.setItem('theme', 'light')
    document.documentElement.classList.remove('dark')
    return 'light';
  } else {
    localStorage.setItem('theme', 'dark')
    document.documentElement.classList.add('dark');
    return 'dark';
  }
}

