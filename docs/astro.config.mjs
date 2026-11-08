// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://docs.githard.dev',
	integrations: [
		starlight({
			title: 'GitHard docs',
			logo: { src: './src/assets/tank-head.png', alt: 'Tank the bulldog' },
			favicon: '/favicon.png',
			customCss: ['./src/styles/githard.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/getgithard/githard' }],
			editLink: { baseUrl: 'https://github.com/getgithard/githard-site/edit/main/docs/' },
			sidebar: [
				{ label: 'Start here', items: ['getting-started', 'how-it-works'] },
				{ label: 'Skills', items: [{ autogenerate: { directory: 'skills' } }] },
				{ label: 'Reference', items: ['evals'] },
			],
		}),
	],
});
