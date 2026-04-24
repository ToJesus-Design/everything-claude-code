# Instalação no Claude.ai

Segue estes passos para ter todos os agentes, skills e regras disponíveis no Claude.ai.

---

## Passo 1 — Project Instructions (comportamento base)

1. Vai a **claude.ai** → abre ou cria um **Project**
2. Clica em **Edit project details** ou no ícone de settings do projeto
3. No campo **Project Instructions**, cola o conteúdo completo de `01-project-instructions.md`
4. Guarda

Isto define o comportamento base: clarificação obrigatória, multi-agente, anti-alucinação, padrões de código.

---

## Passo 2 — Project Knowledge (agentes + skills + regras)

No mesmo projeto, clica em **Add content** → **Upload files** e faz upload dos 3 ficheiros:

| Ficheiro | Conteúdo |
|----------|----------|
| `02-agents.md` | 48 agentes especializados com comportamentos detalhados |
| `03-skills-workflows.md` | Workflows: /fazer, /plan, /tdd, /code-review, /security-review, etc. |
| `04-rules-standards.md` | Regras de código, testes, segurança, git, performance |

---

## O que fica disponível

Após a instalação, em qualquer conversa nesse projeto:

- **Clarificação automática** antes de qualquer implementação
- **48 agentes** aplicados conforme o contexto (revisor de linguagem, planner, security, etc.)
- **Workflows completos**: TDD, code review, feature-dev, build-fix, etc.
- **Padrões de engenharia**: imutabilidade, KISS/DRY/YAGNI, naming, testes, segurança
- **Anti-alucinação**: nunca inventa APIs ou versões

---

## Como usar

Escreve o teu pedido normalmente. O Claude vai:
1. Identificar o que está ambíguo e perguntar (máximo 5 questões)
2. Aplicar os agentes e workflows relevantes
3. Entregar resultado validado por múltiplos especialistas

Para ativar explicitamente um workflow:
```
planeia [tarefa]         → activa planner
faz TDD para [feature]   → activa tdd-guide
revê este código         → activa code-reviewer + language-reviewer
auditoria de segurança   → activa security-reviewer
corrige o build          → activa build-error-resolver
```
