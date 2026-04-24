# Skills & Workflows

Quando o utilizador mencionar um destes workflows ou o contexto da tarefa corresponder, aplicar o workflow completo descrito.

---

## /fazer — Execução com Clareza Total

**Ativar quando:** Qualquer pedido de implementação, criação ou mudança significativa.

**Fase 1 — Diagnóstico:**
```
Antes de começar, preciso de esclarecer:

1. [objetivo real / resultado esperado]
2. [stack e versões]
3. [contexto: o que existe, o que não pode mudar]
4. [quem usa / onde é usado]
5. [critério de sucesso]
```
AGUARDAR resposta. Não avançar sem ela.

**Fase 2 — Plano Multi-Agente:**
Com as respostas, identificar e aplicar em paralelo:
- planner → decompõe em fases
- architect → valida decisões de design
- tdd-guide → define testes primeiro
- security-reviewer → identifica riscos antecipados

**Fase 3 — Execução Verificada:**
- Implementa seguindo o plano
- code-reviewer + language-reviewer revisam
- Entrega com lista do que foi feito e validado

---

## /plan — Planeamento Antes de Código

**Ativar quando:** "planeia", "como implementar", "por onde começar", "que arquitetura usar"

**Output obrigatório:**
1. Restatement dos requisitos (confirma entendimento)
2. Fases de implementação com ordem e dependências
3. Riscos e blockers identificados
4. Estimativa de complexidade (Alta/Média/Baixa)
5. **AGUARDAR confirmação** antes de escrever qualquer código

---

## /tdd — Test-Driven Development

**Ativar quando:** Nova funcionalidade, bug fix, refactoring.

**Ciclo obrigatório:**
```
RED   → Escreve o teste. Corre. Deve FALHAR.
GREEN → Implementa o mínimo para passar. Corre. Deve PASSAR.
IMPROVE → Refatora mantendo testes verdes.
```

**Estrutura de teste (AAA):**
```
// Arrange — prepara o contexto
// Act — executa a ação
// Assert — verifica o resultado
```

**Naming:** `"returns X when Y"`, `"throws error when Z"`, `"falls back to A when B unavailable"`

**Cobertura mínima:** 80% — Unit + Integration + E2E

---

## /code-review — Revisão Completa

**Ativar quando:** Código escrito, antes de commit, antes de merge.

**Checklist obrigatório:**
- [ ] Código legível e bem nomeado
- [ ] Funções < 50 linhas
- [ ] Ficheiros < 800 linhas
- [ ] Sem deep nesting (> 4 níveis)
- [ ] Erros tratados explicitamente
- [ ] Sem secrets hardcoded
- [ ] Sem console.log ou debug statements
- [ ] Testes existem para nova funcionalidade
- [ ] Cobertura ≥ 80%

**Níveis de severidade:**
| Nível | Ação |
|-------|------|
| CRITICAL | BLOQUEIA — corrigir antes de merge |
| HIGH | WARN — deve corrigir |
| MEDIUM | INFO — considerar |
| LOW | NOTE — opcional |

---

## /security-review — Auditoria de Segurança

**Ativar SEMPRE quando código lida com:** input de utilizadores, auth, APIs, dados sensíveis, ficheiros, cripto, pagamentos.

**OWASP Top 10 — verificar:**
1. Broken Access Control
2. Cryptographic Failures
3. Injection (SQL, NoSQL, Command, LDAP)
4. Insecure Design
5. Security Misconfiguration
6. Vulnerable Components
7. Authentication Failures
8. Integrity Failures
9. Logging Failures
10. SSRF

**Checklist imediato:**
- [ ] Secrets hardcoded? (API keys, passwords, tokens)
- [ ] SQL/NoSQL injection possível?
- [ ] XSS — HTML não sanitizado?
- [ ] CSRF protection em formulários?
- [ ] Auth/authz verificado?
- [ ] Rate limiting nos endpoints?
- [ ] Erros expõem stack traces?

---

## /feature-dev — Desenvolvimento Completo de Feature

**Ativar quando:** Pedido de nova funcionalidade completa.

**Sequência:**
```
1. Research → existe algo já feito? Não reinventar
2. /plan    → decomposição e confirmação
3. /tdd     → testes primeiro
4. Implement → código mínimo que passa os testes
5. /code-review → revisão + security-review
6. Commit   → conventional commits
```

---

## /build-fix — Corrigir Erros de Build

**Ativar quando:** Build falha, erros de compilação, erros de tipos.

**Regras:**
- Apenas correções mínimas — sem refactoring
- Sem mudanças arquiteturais enquanto build está vermelho
- Corrigir um erro de cada vez
- Verificar após cada correção

**Routing por linguagem:**
- TypeScript/JS → build-error-resolver
- Go → go-build-resolver
- Rust → rust-build-resolver
- Java/Spring → java-build-resolver
- Kotlin/Android → kotlin-build-resolver
- C++/CMake → cpp-build-resolver
- Flutter/Dart → dart-build-resolver
- PyTorch/CUDA → pytorch-build-resolver

---

## /e2e — Testes End-to-End

**Ativar quando:** Fluxos críticos de utilizador precisam de validação.

**Fluxos obrigatórios a cobrir:**
- Happy path do fluxo principal
- Caso de erro mais provável
- Estado edge/boundary mais crítico

**Boas práticas:**
- Waits determinísticos (não `sleep`)
- Assertions em elementos visíveis
- Screenshots em falha para debug

---

## Council — Decisão com Múltiplas Perspetivas

**Ativar quando:** Há múltiplos caminhos válidos e precisas de escolher um.

**4 vozes a aplicar:**
1. **In-context** — análise direta do contexto atual
2. **Skeptic** — questiona premissas, aponta o que pode falhar
3. **Pragmatist** — foca no que funciona agora, não no ideal
4. **Critic** — avalia a decisão contra o longo prazo

**Output:** tabela de trade-offs + recomendação fundamentada.

---

## Workflow de Documentação

**Ativar quando:** "atualiza docs", "cria README", "documenta", "gera guia"

**doc-updater faz:**
- Analisa o código real (não o que estava documentado)
- Atualiza READMEs para refletir estado atual
- Gera codemaps de arquitetura
- Marca claramente o que mudou

---

## Research-First Workflow

**Ativar SEMPRE antes de implementar algo novo:**

1. Procura implementações existentes (GitHub, npm, PyPI)
2. Verifica documentação atual da biblioteca (não training data)
3. Avalia se adaptar > criar do zero
4. Só então planeia e implementa

**Regra:** Uma solução existente que resolve 80% do problema é preferível a uma solução custom que resolve 100%.

---

## Commit & PR Workflow

**Formato de commit:**
```
<type>: <description em minúsculas>

<body opcional — o porquê, não o quê>
```
**Tipos:** `feat`, `fix`, `refactor`, `docs`, `test`, `chore`, `perf`, `ci`

**Para PRs:**
```
## Summary
- [bullet 1]
- [bullet 2]

## Test plan
- [ ] Testar X
- [ ] Verificar Y
- [ ] Confirmar Z
```
