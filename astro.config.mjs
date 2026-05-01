// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://9bow.github.io',
  base: '/learn-codex-from-claude-code',
  integrations: [
    starlight({
      head: [
        {
          tag: 'script',
          attrs: { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-15Q73B061J' },
        },
        {
          tag: 'script',
          content: `window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-15Q73B061J');`,
        },
      ],
      title: 'Claude Code → Codex 마이그레이션 가이드',
      description: 'Claude Code 사용자를 위한 OpenAI Codex 학습 및 전환 가이드 (GPT-5.5 시대)',
      defaultLocale: 'root',
      locales: {
        root: { label: '한국어', lang: 'ko' },
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/9bow/learn-codex-from-claude-code' },
      ],
      sidebar: [
        { label: '01. 시작하기', autogenerate: { directory: '01-getting-started' } },
        { label: '02. 한눈에 보는 비교', autogenerate: { directory: '02-comparison' } },
        { label: '03. 설치와 인증', autogenerate: { directory: '03-install' } },
        { label: '04. 설정 파일 마이그레이션', autogenerate: { directory: '04-config-migration' } },
        { label: '05. 핵심 기능 매핑', autogenerate: { directory: '05-feature-mapping' } },
        { label: '06. Skills 마이그레이션', autogenerate: { directory: '06-skills' } },
        { label: '07. 일상 워크플로우', autogenerate: { directory: '07-daily-workflow' } },
        { label: '08. Codex Desktop App', autogenerate: { directory: '08-desktop-app' } },
        { label: '09. 고급 기능', autogenerate: { directory: '09-advanced' } },
        { label: '10. 실전 시나리오', autogenerate: { directory: '10-scenarios' } },
        { label: '11. 트러블슈팅 & 참고', autogenerate: { directory: '11-troubleshooting' } },
      ],
      customCss: ['./src/styles/global.css', './src/styles/custom.css'],
    }),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
