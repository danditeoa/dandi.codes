# dandi.codes

Portfólio pessoal criado com Next.js, React e Tailwind CSS.

## 🚀 Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **React** - Biblioteca UI

## 📦 Instalação

```bash
npm install
```

## 🧞 Comandos

Todos os comandos são executados na raiz do projeto, a partir de um terminal:

| Comando                   | Ação                                           |
| :------------------------ | :--------------------------------------------- |
| `npm install`             | Instala as dependências                        |
| `npm run dev`             | Inicia o servidor de desenvolvimento em `localhost:3000` |
| `npm run build`           | Cria a build de produção em `./.next/`          |
| `npm run start`           | Inicia o servidor de produção                  |
| `npm run lint`            | Executa o linter ESLint                        |

## 📁 Estrutura do Projeto

```
├── app/              # App Router do Next.js
│   ├── layout.tsx    # Layout principal
│   ├── page.tsx      # Página inicial
│   └── globals.css   # Estilos globais
├── components/       # Componentes React
│   ├── Nav.tsx       # Navegação
│   ├── Hero.tsx      # Seção hero
│   ├── About.tsx     # Sobre mim
│   ├── Projects.tsx  # Projetos
│   ├── Skills.tsx    # Habilidades
│   ├── Contact.tsx   # Contato
│   └── Footer.tsx    # Rodapé
└── public/          # Arquivos estáticos
```

## 🎨 Personalização

Edite os componentes em `components/` para personalizar o conteúdo do portfólio:
- Adicione seus projetos em `Projects.tsx`
- Atualize suas habilidades em `Skills.tsx`
- Modifique as informações de contato em `Contact.tsx`
- Ajuste as cores e estilos no `globals.css` e nos componentes
