# Claude Code → Codex 마이그레이션 가이드

Claude Code에 익숙한 사용자가 OpenAI Codex CLI, IDE 확장, Desktop App, Agent Skills, MCP, Codex Cloud 워크플로로 자연스럽게 이동할 수 있도록 정리한 한국어 학습 사이트입니다.

## 대상

- Claude Code의 slash commands, `CLAUDE.md`, hooks, subagents, skills, MCP를 이미 사용 중인 개발자
- Codex의 모델/effort, approval/sandbox, AGENTS.md, Desktop App, Automations를 비교 학습하려는 사용자
- 개인 또는 팀 단위로 Claude Code와 Codex의 병용 또는 전환 전략을 세우려는 리더

## 구성

- 11개 섹션
- 56개 MDX 챕터
- 11개 섹션별 퀴즈
- Astro 6 + Starlight + React 기반
- Mermaid 다이어그램과 전환 흐름 컴포넌트 포함

## 커리큘럼

1. 시작하기: 가이드 사용법, Codex 라인업, 진화 흐름, 마이그레이션 로드맵
2. 한눈에 보는 비교: 철학, 명령어, 파일, UI, 기능 매핑
3. 설치와 인증: CLI, IDE 확장, Desktop App, ChatGPT 인증과 API 키 차이
4. 설정 파일 마이그레이션: `settings.json`, `CLAUDE.md`, permissions, 환경 변수 전환
5. 핵심 기능 매핑: 모델, slash commands, MCP, subagents, hooks, web search, goal mode
6. Skills 마이그레이션: Claude Code Skills를 Codex Agent Skills로 변환
7. 일상 워크플로우: 코드 작성, 디버깅, 리뷰, CI, 프롬프팅 습관, best practices
8. Codex Desktop App: command center, worktree, automations, thread context
9. 고급 기능: profiles, resume/fork, Codex Cloud, orchestration, MCP server
10. 실전 시나리오: 개인/팀 전환, 병용 전략, 안티패턴
11. 트러블슈팅 & 참고: 흔한 문제, 공식 리소스, 최종 점검표

## 로컬 개발

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## 주요 경로

- 문서 본문: `src/content/docs/`
- 퀴즈 데이터: `public/data/quiz/`
- 학습 컴포넌트: `src/components/learning/`
- 이미지 자산: `src/assets/`, `public/images/`
- 사이트 설정: `astro.config.mjs`
