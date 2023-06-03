/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		animation: {
			pulse: "pulse 1s infinite",
		},
		keyframes: {
			pulse: {
				"0%, 100%": { opacity: "0" },
				"50%": { opacity: "1" },
			},
		},
	},
	plugins: [require("daisyui")],
};
