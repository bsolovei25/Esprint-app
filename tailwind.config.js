/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '38': '150px',
      },
      colors: {
        'post-blue': 'rgb(29, 155, 240)',
        'post-hover-blue': 'rgb(26,140,216,1)',
        'twitter-shade':  'rgba(0, 0, 0, 0.04)',
        'twitter-shade-post':'rgba(0, 0, 0, 0.04)',
        'header-transperent':'rgba(0, 0, 0, 0.00)',
        'header-hover': 'rgba(15,20,25,0.10)',
        'grey-background': 'rgba(239,243,244,1.00)',
        'trends-categories': 'rgb(83, 100, 113)',
        'trends-name': 'rgb(15, 20, 25)',
        'transperent-white': 'rgba(255,255,255)',
        'profile-header': 'rgba(255,255,255,0.85)',
        'profile-default-bg': 'rgba(207, 217, 222, 1.00)',
        'red-unfollow':'rgb(244,33,46)',
        'pink-unfollow':'rgb(253,201,206)',
        'follow-hover': 'rgba(39,44,48,1)',
        'default-white': '#ffffff',
        'description-info' : 'rgba(83,100,113,1.00)'
      },
    },
  },
  plugins: [],
}

