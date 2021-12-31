module.exports = {
  darkMode : 'darkMode',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {

      //light-colors
      'primary': '#6200EE',
      'primary-900': '#3700B3',
      'secondary' : '#03DAC6',
      'secondary-variant' : '#018786',
      'gray-500' : '#DCDCDC',
      'gray-800' : '#DCDCDC',
      'on-gray-500' : '#000',
      'on-gray-800' : '#000',
      'background' : '#fff',
      'surface': '#F6F6F6',
      'error': '#B00020',
      'on-primary' : '#fff',
      'on-primary-900': '#fff',
      'on-secondary' : '#000',
      'on-background' : '#000',
      'on-surface' : '#000',
      'on-error' : '#fff',
      'white' : '#fff',

      //dark-colors
      'primary-dark': '#BB86FC',
      'primary-900-dark': '#3700B3',
      'secondary-dark' : '#03DAC6',
      'secondary-variant-dark' : '#03DAC6',
      'gray-500-dark': '#595959',
      'gray-800-dark': '#141414',
      'on-gray-500-dark' : '#fff',
      'on-gray-800-dark' : '#fff',
      'background-dark' : '#212121',
      'surface-dark': '#181818',
      'error-dark': '#CF6679',
      'on-primary-dark' : '#000',
      'on-primary-900-dark' : '#fff',
      'on-secondary-dark' : '#000',
      'on-background-dark' : '#fff',
      'on-surface-dark' : '#fff',
      'on-error-dark' : '#000',

    },
    extend: {
      width: {
        
        '90vw'  : '90vw',
        '85vw'  : '85vw',
        '80vw'  : '80vw',

        '90vh' : '90vh',
        '85vh' : '85vh',
        '80vh'  : '80vh',
      }
    },
  },
  plugins: [],
};
