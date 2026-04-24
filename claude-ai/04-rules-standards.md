# Regras & Padrões de Engenharia

Estas regras aplicam-se a todo o código produzido. São não-negociáveis salvo instrução explícita em contrário.

---

## Estilo de Código

### Imutabilidade — CRÍTICO

```
ERRADO:  modifica(objeto, campo, valor)  → muda objeto no lugar
CORRETO: atualiza(objeto, campo, valor)  → retorna novo objeto com a mudança
```

Imutabilidade previne side effects ocultos, facilita debug e permite concorrência segura.

### Princípios Fundamentais

**KISS** — A solução mais simples que funciona. Não otimiza prematuramente. Clareza > cleverness.

**DRY** — Extrai lógica repetida para funções partilhadas. Abstrações quando a repetição é real, não especulativa.

**YAGNI** — Não constrói o que não é necessário agora. Começa simples, refatora quando há pressão real.

### Organização de Ficheiros

```
MUITOS FICHEIROS PEQUENOS > POUCOS FICHEIROS GRANDES
- Coesão alta, acoplamento baixo
- 200–400 linhas típico, 800 máximo absoluto
- Organiza por feature/domínio, não por tipo de ficheiro
```

### Naming

| Contexto | Convenção | Exemplo |
|----------|-----------|---------|
| Variáveis e funções | `camelCase` | `getUserById` |
| Booleans | prefixo `is/has/should/can` | `isLoading`, `hasPermission` |
| Tipos, Interfaces, Componentes | `PascalCase` | `UserRepository` |
| Constantes | `UPPER_SNAKE_CASE` | `MAX_RETRY_COUNT` |
| Hooks | `use` + `camelCase` | `useScrollProgress` |
| Ficheiros | `lowercase-com-hifens` | `user-repository.ts` |

### Anti-Padrões a Evitar

**Deep nesting** — Mais de 4 níveis → usar early returns:
```
// ERRADO
if (user) {
  if (user.isActive) {
    if (user.hasPermission) {
      // lógica aqui
    }
  }
}

// CORRETO
if (!user) return
if (!user.isActive) return
if (!user.hasPermission) return
// lógica aqui
```

**Magic numbers** — Usar constantes nomeadas:
```
// ERRADO: if (retries > 3)
// CORRETO: const MAX_RETRIES = 3; if (retries > MAX_RETRIES)
```

**Funções longas** — Dividir em funções com responsabilidades claras, cada uma < 50 linhas.

---

## Tratamento de Erros

- Tratar erros **explicitamente** em cada nível
- UI → mensagens user-friendly
- Servidor → log detalhado com contexto
- **Nunca** swallow silenciosamente:

```
// ERRADO
try { doSomething() } catch (_) {}

// CORRETO
try {
  doSomething()
} catch (error) {
  logger.error('Failed to do something', { error, context })
  throw new AppError('Operation failed', { cause: error })
}
```

- Validar sempre em system boundaries (input de utilizador, respostas de APIs externas)
- Fail fast com mensagens claras

---

## Testes

### Cobertura Mínima: 80%

**Tipos obrigatórios:**
1. **Unit** — funções individuais, utilities, componentes
2. **Integration** — endpoints de API, operações de base de dados
3. **E2E** — fluxos críticos de utilizador

### Workflow TDD Obrigatório

```
RED    → Escreve o teste. Corre. Deve FALHAR.
GREEN  → Implementa o mínimo para passar. Corre. Deve PASSAR.
IMPROVE → Refatora. Testes continuam a passar.
```

**Nunca pular o RED.** Um teste que nunca falha não prova nada.

### Estrutura AAA

```
test('descrição comportamental', () => {
  // Arrange — prepara dados e contexto
  const input = buildInput({ field: 'value' })

  // Act — executa a ação sob teste
  const result = functionUnderTest(input)

  // Assert — verifica o resultado
  expect(result).toEqual(expectedOutput)
})
```

### Naming de Testes

```
// Descreve comportamento, não implementação:
'returns empty array when no items match'
'throws AuthError when token is expired'
'falls back to cache when API is unavailable'
```

---

## Segurança

### Checklist Obrigatório (antes de qualquer entrega)

- [ ] Sem secrets hardcoded (API keys, passwords, tokens, connection strings)
- [ ] Todos os inputs de utilizador validados e sanitizados
- [ ] Queries SQL parametrizadas (nunca concatenação de strings)
- [ ] HTML renderizado dinamicamente sanitizado (sem XSS)
- [ ] CSRF protection em formulários com state mutation
- [ ] Autenticação e autorização verificadas em todos os endpoints
- [ ] Rate limiting em endpoints públicos
- [ ] Mensagens de erro não expõem stack traces nem dados internos

### Gestão de Secrets

```
NUNCA: const apiKey = "sk-abc123..."
SEMPRE: const apiKey = process.env.API_KEY
```

- Usar variáveis de ambiente ou secret manager
- Validar presença de secrets obrigatórios no startup
- Rodar qualquer secret que possa ter sido exposto

### Se encontrares um problema de segurança

1. PARA imediatamente
2. Aplica `security-reviewer`
3. Corrige issues CRITICAL antes de continuar
4. Verifica o resto do codebase por padrões similares

---

## Git & Controlo de Versão

### Formato de Commit

```
<type>: <descrição curta em minúsculas>

<body opcional: o porquê, não o quê>
```

**Tipos:**
- `feat` — nova funcionalidade
- `fix` — correção de bug
- `refactor` — mudança que não adiciona feature nem corrige bug
- `docs` — documentação apenas
- `test` — adicionar ou corrigir testes
- `chore` — manutenção (deps, configs)
- `perf` — melhoria de performance
- `ci` — CI/CD

**Exemplos:**
```
feat: add user authentication with JWT
fix: prevent race condition in payment processing
refactor: extract validation logic into dedicated service
test: add integration tests for user repository
```

### Boas Práticas

- Commits pequenos e focados (uma coisa por commit)
- Nunca commitar: .env, secrets, binários grandes, node_modules
- Branch names: `feat/`, `fix/`, `refactor/`, `docs/`

---

## Performance

### Core Web Vitals (targets para web)

| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| INP | < 200ms |
| CLS | < 0.1 |

### Budget de Bundle

| Tipo de página | JS (gzipped) | CSS |
|----------------|--------------|-----|
| Landing | < 150kb | < 30kb |
| App | < 300kb | < 50kb |

### Regras Gerais

- Imagens com dimensões explícitas (previne CLS)
- Lazy load below-the-fold
- Prefetch apenas o que é provável navegar
- Queries de DB com LIMIT sempre
- Índices nas colunas usadas em WHERE e JOIN frequentes
- Cache para operações caras e repetidas

---

## Checklist Final Antes de Entregar

- [ ] Código legível e bem nomeado
- [ ] Funções < 50 linhas, ficheiros < 800 linhas
- [ ] Sem deep nesting (> 4 níveis)
- [ ] Erros tratados explicitamente
- [ ] Sem secrets hardcoded
- [ ] Sem console.log ou debug statements
- [ ] Testes escritos e a passar
- [ ] Cobertura ≥ 80%
- [ ] Security checklist verificado
- [ ] Pelo menos um especialista relevante reviu
