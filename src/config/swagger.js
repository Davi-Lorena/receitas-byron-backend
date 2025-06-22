import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Receitas",
      version: "1.0.0",
      description: "Uma API simples para gerenciar receitas (CRUD).",
    },
    servers: [
      {
        url: "http://localhost:3001/api",
      },
    ],
    components: {
      schemas: {
        Recipe: {
          type: "object",
          required: [
            "title",
            "category",
            "description",
            "image",
            "prepTime",
            "cookTime",
            "servings",
            "ingredients",
            "instructions",
          ],
          properties: {
            id: {
              type: "integer",
              description: "ID único da receita gerado automaticamente.",
              readOnly: true,
            },
            title: {
              type: "string",
              description: "O título da receita.",
            },
            category: {
              type: "string",
              description: "A categoria da receita (e.g., Sobremesa, Jantar).",
            },
            description: {
              type: "string",
              description: "Uma breve descrição da receita.",
            },
            image: {
              type: "string",
              format: "uri",
              description: "URL da imagem da receita.",
            },
            prepTime: {
              type: "string",
              description: "Tempo de preparo (e.g., '20 minutos').",
            },
            cookTime: {
              type: "string",
              description: "Tempo de cozimento (e.g., '45 minutos').",
            },
            servings: {
              type: "number",
              format: "integer",
              description: "Número de porções que a receita rende.",
              minimum: 1,
            },
            ingredients: {
              type: "array",
              description: "Lista de ingredientes.",
              items: {
                type: "object",
                properties: {
                  value: {
                    type: "string",
                    description: "Descrição do ingrediente.",
                  },
                },
              },
            },
            instructions: {
              type: "array",
              description: "Passo a passo do modo de preparo.",
              items: {
                type: "object",
                properties: {
                  value: {
                    type: "string",
                    description: "Descrição da instrução.",
                  },
                },
              },
            },
            createdAt: {
                type: "string",
                format: "date-time",
                description: "Data de criação da receita.",
                readOnly: true,
            }
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
};

export const swaggerSpec = swaggerJsdoc(options);