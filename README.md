# NLW Agents

Este projeto é chamado **NLW Agents** e foi desenvolvido durante um evento da [Rocketseat](https://rocketseat.com.br/).

## Tecnologias e Bibliotecas Utilizadas
- **React 19** — Biblioteca principal para construção da interface.
- **Vite** — Ferramenta de build e desenvolvimento rápido.
- **TypeScript** — Tipagem estática para JavaScript.
- **TailwindCSS** — Framework utilitário para estilização.
- **@tanstack/react-query** — Gerenciamento de dados assíncronos.
- **React Router DOM** — Roteamento SPA.
- **Radix UI** — Componentes acessíveis.
- **Lucide React** — Ícones SVG.
- **clsx** e **class-variance-authority** — Utilitários para manipulação de classes CSS.

## Padrões de Projeto
- **Componentização**: Interface construída em componentes reutilizáveis.
- **Hooks**: Uso extensivo de hooks para lógica de estado e efeitos.
- **Atomic Design**: Organização dos componentes por granularidade (opcional, se aplicável).
- **Aliases**: `@` aponta para o diretório `src` para facilitar imports.

## Setup e Configuração

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repo>
   cd web
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Execute o projeto em modo desenvolvimento:**
   ```bash
   npm run dev
   ```
4. **Acesse no navegador:**
   Normalmente disponível em [http://localhost:5173](http://localhost:5173)

## Scripts Principais

---

## Novidades recentes

- **Acessibilidade aprimorada:** O ícone de microfone agora utiliza a tag `<title>` dentro do SVG para garantir melhor suporte a leitores de tela, seguindo boas práticas de acessibilidade (a11y).
- **Animação visual:** Foi implementada uma animação pulsante no microfone para indicar quando a gravação está ativa e quando há detecção de fala.
- **Melhorias no controle de áudio:** O ciclo de vida do `AudioContext` e dos analisadores foi aprimorado para evitar vazamentos de recursos e comportamentos inesperados ao iniciar/parar gravações.
- **Limpeza de comentários:** Comentários desnecessários foram removidos para manter o código mais limpo e legível.

## Acessibilidade

- Sempre que possível, elementos visuais importantes (como ícones) utilizam descrições acessíveis (`aria-label` e `<title>` em SVGs).
- O projeto faz uso de componentes Radix UI, que já seguem boas práticas de acessibilidade.
- Recomenda-se manter as descrições alternativas atualizadas para garantir a melhor experiência para todos os usuários.

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Gera a build de produção
- `npm run preview`: Visualiza a build de produção localmente

---

Projeto desenvolvido durante o evento NLW da Rocketseat 🚀
