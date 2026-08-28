# 용어 기준

이 문서는 이 저장소에서 새로 사용하는 Codex·에이전트 작업 용어를 일관되게 쓰기 위한 기준입니다. 2026-08-28에 [terms.kr AI/ML 용어집](https://poc.terms.kr/llms.txt)을 확인했으며, 아래 용어는 해당 PoC 용어집에 수록되어 있지 않아 이 저장소에서 정의합니다. `agent`는 용어집의 번역인 **에이전트**를 따릅니다.

제품명과 프로토콜명은 원문 대소문자를 유지하고, 처음 나올 때는 한국어와 영어를 함께 적습니다.

| 영어 | 이 저장소의 표기 | 뜻 | 공식 근거 |
| --- | --- | --- | --- |
| Agent Skills | 에이전트 스킬(Agent Skills) | 특정 작업에 필요한 지침·스크립트·참고 자료를 묶은 재사용 단위 | [Build skills](https://learn.chatgpt.com/docs/build-skills) |
| approval policy | 승인 정책 | 명령·권한 요청에서 Codex가 사용자 승인을 요구하는 방식 | [Configuration Reference](https://learn.chatgpt.com/docs/config-file/config-reference) |
| sandbox mode | 샌드박스 모드 | 에이전트가 명령으로 접근할 수 있는 파일·실행 범위를 제한하는 방식 | [Configuration Reference](https://learn.chatgpt.com/docs/config-file/config-reference) |
| reasoning effort | 추론 수준(reasoning effort) | 작업에 사용할 추론 강도를 선택하는 설정 | [Codex CLI](https://learn.chatgpt.com/docs/codex/cli) |
| subagent | 하위 에이전트(subagent) | 주 작업이 독립적인 하위 작업을 병렬로 위임하는 전문 에이전트 | [Subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents) |
| worktree | Git 워크트리(Git worktree) | 하나의 Git 저장소에서 여러 checkout을 병렬로 작업하게 하는 Git 기능 | [Worktrees](https://learn.chatgpt.com/docs/environments/git-worktrees) |
| plugin | 플러그인(plugin) | skills, connectors, MCP servers 등 재사용 기능을 묶은 배포 단위 | [Plugins](https://learn.chatgpt.com/docs/plugins) |
| connector | 커넥터(connector) | 외부 서비스의 도구와 데이터에 연결하는 통합 구성 요소 | [Plugins](https://learn.chatgpt.com/docs/plugins) |
| Model Context Protocol (MCP) | 모델 컨텍스트 프로토콜(MCP) | AI 애플리케이션이 로컬 또는 원격 도구 서버와 연결하는 프로토콜 | [MCP and connectors](https://developers.openai.com/api/docs/guides/tools-connectors-mcp) |
| WebMCP | 웹MCP(WebMCP) | 방문한 웹사이트가 브라우저 안 에이전트에 제공하는 도구 방식 | [Site tools](https://learn.chatgpt.com/docs/webmcp) |
| Record & Replay | 기록 및 재생(Record & Replay) | 사용자가 시연한 안정된 업무 흐름을 skill 초안으로 만드는 기능 | [Record & Replay](https://learn.chatgpt.com/docs/extend/record-and-replay) |
| scheduled task | 예약 작업(scheduled task) | 정해진 일정 또는 지원되는 앱 이벤트에 따라 실행하는 백그라운드 작업 | [Scheduled tasks](https://learn.chatgpt.com/docs/automations) |
| long-running work | 장기 실행 작업(long-running work) | 여러 단계와 완료 기준을 두고 이어 가는 작업 | [Long-running work](https://learn.chatgpt.com/docs/long-running-work) |
| Handoff | 핸드오프(Handoff) | 작업 스레드를 Local 환경과 Worktree 환경 사이에서 옮기는 기능 | [Worktrees](https://learn.chatgpt.com/docs/environments/git-worktrees) |
| Goal mode | 목표 모드(Goal mode) | 목표와 완료 기준을 같은 스레드에서 관리하는 작업 흐름 | [Long-running work](https://learn.chatgpt.com/docs/long-running-work) |
| app server | 앱 서버(app server) | Codex 앱·통합 클라이언트가 Codex 기능과 통신하도록 제공하는 서버 인터페이스 | [Codex CLI](https://learn.chatgpt.com/docs/codex/cli) |
| context pollution | 컨텍스트 오염(context pollution) | 중요한 요구사항이 불필요한 로그·중간 결과에 묻히는 현상 | [Subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents) |
| context rot | 컨텍스트 열화(context rot) | 대화에 덜 관련된 정보가 쌓이면서 작업 신뢰도가 떨어지는 현상 | [Subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents) |

## 표기 원칙

- **Codex**, **Codex CLI**, **ChatGPT**, **ChatGPT desktop app**은 제품명이라 번역하지 않습니다. 처음에는 `ChatGPT 데스크톱 앱(ChatGPT desktop app)`처럼 병기합니다.
- `MCP`, `WebMCP`, `Agent Skills`처럼 고유한 기술명은 약어·원문을 유지합니다.
- `자동화(automation)`는 일반 개념으로 쓰고, 제품 기능명은 `예약 작업(scheduled task)`으로 구분합니다.
- 기존 용어집에 새 번역이 추가되면 해당 용어집 표기를 우선하고, 이 파일의 정의는 갱신합니다.
