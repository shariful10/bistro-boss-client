/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				cinzel: ["Cinzel", "serif"],
				inter: ["Inter", "sans-serif"],
			},
			backgroundImage: {
				"gradient-btn": "linear-gradient(90deg, #835D23 0%, #B58130 100%)",
				"gradient-purple": "linear-gradient(90deg, #BB34F5 0%, #FCDBFF 100%)",
				"gradient-gold": "linear-gradient(90deg, #D3A256 0%, #FDE8C0 100%)",
				"gradient-pink": "linear-gradient(90deg, #FE4880 0%, #FECDE9 100%)",
				"gradient-sky": "linear-gradient(90deg, #6AAEFF 0%, #B6F7FF 100%)",
			},
		},
	},
	plugins: [require("daisyui"), require("flowbite/plugin")],
};
