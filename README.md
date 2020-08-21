# next-jamstack-portfolio

## Patching Node_Modules

- https://stackoverflow.com/questions/13300137/how-to-edit-a-node-module-installed-via-npm

```git
npx patch-package @fortawesome/fontawesome-common-types
```

- then, add the following to scripts in package.json

```
"postinstall": "npx patch-package"
```

**_create a master svgLibrary function wrapping all svg declarations_**

- Pass Props

## Extending an abstracted functional component to an array of objects via props extension

- https://stackoverflow.com/questions/25469244/how-can-i-define-an-interface-for-an-array-of-objects-with-typescript/25470775

## SVG viewBox Exact Order of Translation and Scaling

- https://stackoverflow.com/questions/53582351/svg-viewbox-exact-order-of-translation-and-scaling

### Transformations

- https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Transformations

## SVGs in tailwindcss

- https://medium.com/swlh/reusable-svg-icon-using-figma-react-typescript-and-tailwind-css-51b8ceb86ac2
- https://tailwindcss.com/course/working-with-svg-icons

## Ico Moon custom icons

- https://icomoon.io/app/#/select
- https://www.npmjs.com/package/react-icomoon
- ssg
- svg logo libraries
- https://www.vectorlogo.zone/index.html?q=gray%20matter
- http://www.lib4dev.in/info/unicodeveloper/awesome-nextjs/75291705
- https://favicon.io/favicon-converter/
- https://picsvg.com/
- https://www.favicon-generator.org/
- add custom svg icons Yes, as long as you create a definition file in the same format as the existing icon definitions, you can import and use them in the same way as the official icons. You may want to use a custom prefix for your own icons to keep them organised, though.
- https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react#step-6-%E2%80%94-using-react-fontawesome-and-icons-outside-of-react
- https://github.com/remarkjs/remark/blob/HEAD/doc/plugins.md#list-of-plugins

- next plugins
  - https://github.com/vercel/next-plugins

```js
module.exports = {
	purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
	theme: {
		extend: {
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				}
			},
			animation: {
				wiggle: 'wiggle 1s ease-in-out infinite'
			},
			fontFamily: {
				header: ['Playfair Display', 'serif'],
				body: ['Barlow Condensed', 'sans-serif'],
				display: ['Barlow Condensed', 'sans-serif'],
				polished: ['brandon-grotesque', 'sans-serif'],
				subpolished: ['Montserrat', 'sans-serif']
			},
			colors: {
				'accent-1': '#FAFAFA',
				'accent-2': '#EAEAEA',
				'accent-7': '#333',
				black: '#000000',
				white: '#ffffff',
				success: '#0070f3',
				cyan: '#79FFE1',
				blizzardBlue: '#b3ddf2',
				chicagoRed: '#ff0000',
				cimaRed: '#B8242C',
				wcdPink: '#eb57a3',
				tinyHouseWhite: '#f0f1f2',
				customGray: '#D0D0D0',
				iconHover: '#9D9D9D',
				iconHoverTwo: '#AEAEAE',
				tailwindBlue: '#2298BD',
				tailwindGreen: '#0ED7B5'
				// tailwindBackground:
				// 	'linear-gradient(109.08deg, #2298BD 6.16%, #0ED7B5 91.66%)'
			},
			height: {
				whole: '100vh',
				nineTenths: '90vh',
				fourFifths: '80vh',
				threeFourths: '75vh',
				twoThirds: '66.67vh',
				threeFifths: '60vh',
				half: '50vh',
				nineTwentieths: '45vh',
				twoFifths: '40vh',
				sevenTwentieths: '35vh',
				oneThird: '33.33vh',
				threeTenths: '30vh',
				oneFourth: '25vh',
				oneFifth: '20vh',
				oneSixth: '16.67vh'
			},
			spacing: {
				7: '1.75rem',
				14: '3.5rem',
				18: '4.5rem',
				28: '7rem',
				44: '11rem',
				100: '25rem',
				150: '37.5rem',
				200: '50rem',
				250: '62.5rem',
				300: '75rem',
				309: '77.25rem'
			},
			letterSpacing: {
				tighter: '-.04em'
			},
			lineHeight: {
				tight: 1.2
			},
			fontSize: {
				smxmd: '0.9375rem',
				'1xl': '1.0rem',
				'3xl': '2.0rem',
				'5xl': '2.5rem',
				'6xl': '2.75rem',
				'7xl': '4.5rem',
				'8xl': '6.25rem'
			},
			boxShadow: {
				small: '0 5px 10px rgba(0, 0, 0, 0.12)',
				medium: '0 8px 30px rgba(0, 0, 0, 0.12)'
			}
		}
	}
	// variants: {
	// 	backgroundImage: ['responsive, hover, focus'], // this is for the "bg-none" utility
	// 	linearGradients: ['responsive, hover, focus'],
	// 	radialGradients: ['responsive, hover, focus'],
	// 	conicGradients: ['responsive, hover, focus'],
	// 	repeatingLinearGradients: ['responsive, hover, focus'],
	// 	repeatingRadialGradients: ['responsive, hover, focus'],
	// 	repeatingConicGradients: ['responsive, hover, focus']
	// },
	// plugins: [plugin(function(require('tailwindcss-gradients')))]
};
```

```ts
// const plugin = require('tailwindcss/plugin');

// module.exports = {
// 	plugins: [
// 		plugin(function({ addUtilities }) {
// 			const newUtilities =
// 		})
// 	]
// } https://github.com/benface/tailwindcss-gradients
```

```ts
export type IconPrefix = "fas" | "fab" | "fac" | "far" | "fal" | "fad";
export type IconPathData = string | string[]

export interface IconLookup {
  prefix: IconPrefix;
  // IconName is defined in the code that will be generated at build time and bundled with this file.
  iconName: IconName;
}

export interface IconDefinition extends IconLookup {
  icon: [
    number, // width
    number, // height
    string[], // ligatures
    string, // unicode
    IconPathData // svgPathData
  ];
}

export interface IconPack {
  [key: string]: IconDefinition;
}

export type IconName = 'graphql-icon' | 'heroku-icon' | 'next-icon' | 'vercel-icon' | 'typescript-icon' | '500px' |
```

```html
<svg
	width="200"
	height="200"
	viewBox="0 0 200 200"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M158.778 161.346L136.333 99.7192L195.088 61.6425H122.46L100.013 0.0174216L100.006 0.000696864H172.645L195.098 61.6355L195.099 61.6341L195.118 61.6251C208.157 97.3812 194.728 138.05 158.778 161.345V161.346ZM41.2409 161.346L41.2229 161.357L99.9939 199.445L158.778 161.347L100.013 123.259L41.2417 161.346H41.2409ZM4.91722 61.6265C-8.80913 99.3185 7.12421 139.257 41.2299 161.353L41.2354 161.334L63.6843 99.7108L4.94143 61.6411H77.5528L100.001 0.0167247L100.006 0H27.3622L4.91643 61.6265H4.91722Z"
		fill="black"
	/>
</svg>
```
