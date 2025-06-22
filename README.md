# API de Receitas

Uma API RESTful básica para gerenciar um livro de receitas. Permite a criação, leitura, atualização e exclusão (CRUD) de receitas, armazenando os dados em um arquivo JSON local.

Este projeto foi construído com Node.js e Express, seguindo uma arquitetura dividida em camadas (controllers e services) para melhor organização e manutenibilidade.

## Tabela de Conteúdos

-   [Funcionalidades](#funcionalidades)
-   [Tecnologias Utilizadas](#tecnologias-utilizadas)
-   [Pré-requisitos](#pré-requisitos)
-   [Instalação](#instalação)
-   [Como Executar](#como-executar)
-   [Endpoints da API](#endpoints-da-api)
-   [Estrutura do Projeto](#estrutura-do-projeto)
-   [Licença](#licença)

## Funcionalidades

-   ✅ **CRUD Completo** para Receitas (Criar, Ler, Atualizar, Deletar).
-   💾 **Armazenamento de Dados** em um arquivo `recipes.json` local.
-   🔢 **IDs Numéricos Autoincrementais** para novas receitas.
-   📄 **Documentação Interativa** com Swagger UI para fácil visualização e teste dos endpoints.
-   🏗️ **Arquitetura em Camadas** (Rotas, Controladores, Serviços) para separação de responsabilidades.
-    CORS habilitado para permitir requisições de um frontend.

## Tecnologias Utilizadas

-   [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript.
-   [Express.js](https://expressjs.com/pt-br/) - Framework para construção da API.
-   [Nodemon](https://nodemon.io/) - Para reiniciar o servidor automaticamente em ambiente de desenvolvimento.
-   [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express) & [Swagger JSDoc](https://www.npmjs.com/package/swagger-jsdoc) - Para geração da documentação da API.
-   [CORS](https://www.npmjs.com/package/cors) - Para habilitar o Cross-Origin Resource Sharing.

## Pré-requisitos

Antes de começar, você vai precisar ter as seguintes ferramentas instaladas em sua máquina:
-   [Node.js](https://nodejs.org/en/download/) (versão 18.x ou superior é recomendada)
-   [NPM](https://www.npmjs.com/) (geralmente instalado junto com o Node.js)
-   [Git](https://git-scm.com/) (para clonar o repositório)

## Instalação

Siga os passos abaixo para configurar o ambiente de desenvolvimento:

1.  Clone o repositório:
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    ```

2.  Navegue até o diretório do projeto:
    ```bash
    cd recipe-api
    ```

3.  Instale as dependências:
    ```bash
    npm install
    ```

## Como Executar

Após a instalação, você pode iniciar o servidor de duas formas:

-   **Modo de Desenvolvimento** (com reinicialização automática ao salvar arquivos):
    ```bash
    npm run dev
    ```

-   **Modo de Produção**:
    ```bash
    npm start
    ```

Após iniciar, o terminal exibirá as seguintes mensagens:
```
🚀 Servidor rodando na porta 3001
📄 Documentação da API disponível em http://localhost:3001/api-docs
```

## Endpoints da API

A forma mais fácil de explorar e testar os endpoints é através da documentação interativa do Swagger.

🔗 **Acesse a documentação em: [http://localhost:3001/api-docs](http://localhost:3001/api-docs)**

Abaixo está um resumo dos endpoints disponíveis:

| Método HTTP | Endpoint              | Descrição                                 |
| :---------- | :-------------------- | :---------------------------------------- |
| `GET`       | `/api/recipes`        | Lista todas as receitas.                  |
| `GET`       | `/api/recipes/{id}`   | Obtém uma receita específica pelo seu ID.   |
| `POST`      | `/api/recipes`        | Cria uma nova receita.                    |
| `PUT`       | `/api/recipes/{id}`   | Atualiza uma receita existente pelo seu ID. |
| `DELETE`    | `/api/recipes/{id}`   | Deleta uma receita pelo seu ID.             |

## Estrutura do Projeto

O projeto está organizado da seguinte forma para garantir a separação de responsabilidades:

```
recipe-api/
├── data/
│   └── recipes.json      # Arquivo que funciona como banco de dados
├── src/
│   ├── config/
│   │   └── swagger.js    # Configurações do Swagger
│   ├── controllers/
│   │   └── recipe.controller.js # Camada que lida com requisições e respostas HTTP
│   ├── services/
│   │   └── recipe.service.js  # Camada que contém a lógica de negócio
│   ├── routes/
│   │   └── recipe.routes.js   # Define os endpoints da API
│   └── index.js          # Ponto de entrada da aplicação Express
├── node_modules/
├── package.json
└── README.md
```
