# BigBasket E-commerce

Um aplicativo de e-commerce desenvolvido com Angular 19, oferecendo uma experiência de compra online completa com áreas para clientes e administradores.

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Tecnologias](#tecnologias)
- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Executando o Projeto](#executando-o-projeto)
  - [Desenvolvimento](#desenvolvimento)
  - [Produção](#produção)
  - [Docker](#docker)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Testes](#testes)
- [Contribuição](#contribuição)
- [Licença](#licença)

## 🔍 Visão Geral

BigBasket é uma plataforma de e-commerce completa que permite aos usuários navegar por produtos, adicionar itens ao carrinho e finalizar compras. O sistema também inclui um painel administrativo para gerenciamento de produtos, pedidos e usuários.

## 💻 Tecnologias

- **Frontend**: Angular 19
- **Estilização**: CSS
- **Gerenciamento de Estado**: RxJS
- **Banco de Dados**: MongoDB
- **Testes**: Jasmine e Karma

## 📋 Requisitos

- Node.js (v18 ou superior)
- npm (v9 ou superior)
- Angular CLI (v19.2.4)

## 🚀 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/bigbasket-ecommerce.git
   cd bigbasket-ecommerce
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

## ⚙️ Executando o Projeto

### Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm start
```

ou

```bash
ng serve
```

Acesse a aplicação em `http://localhost:4200/`.

### Produção

Para compilar o projeto para produção:

```bash
npm run build
```

ou

```bash
ng build
```

Os arquivos de build serão armazenados no diretório `dist/`.

### Docker

Para executar o projeto usando Docker Compose (recomendado):

1. Inicie a aplicação e o banco de dados:
   ```bash
   docker-compose up -d
   ```

2. Acesse a aplicação em `http://localhost:8080/`.

3. O MongoDB estará disponível em `localhost:27017`.

4. Para parar os contêineres:
   ```bash
   docker compose down
   ```

Alternativamente, para executar apenas a aplicação sem o banco de dados:

```bash
docker build -t bigbasket-ecommerce .
docker run -p 8080:80 bigbasket-ecommerce
```

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── pages/
│   │   ├── admin/       # Componentes da área administrativa
│   │   └── website/     # Componentes da área do cliente
│   ├── app.component.*  # Componente principal
│   ├── app.config.ts    # Configurações do Angular
│   └── app.routes.ts    # Configuração de rotas
├── assets/              # Recursos estáticos (imagens, fontes, etc.)
├── index.html           # Página HTML principal
└── main.ts              # Ponto de entrada da aplicação
```

## 🧪 Testes

### Testes Unitários

Para executar os testes unitários:

```bash
npm test
```

ou

```bash
ng test
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.
