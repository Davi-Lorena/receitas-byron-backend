import { promises as fs } from "fs";

const recipesFilePath = "./data/recipes.json";

// Lê o conteúdo do arquivo JSON.
const getRecipesFromFile = async () => {
  try {
    const data = await fs.readFile(recipesFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }
    throw error;
  }
};

// Escreve os dados no arquivo JSON.
const writeRecipesToFile = async (recipes) => {
  await fs.writeFile(recipesFilePath, JSON.stringify(recipes, null, 2));
};

export const recipeService = {
  findAll: async () => {
    return await getRecipesFromFile();
  },

  findById: async (id) => {
    const recipes = await getRecipesFromFile();
    // O 'id' do parâmetro é uma string, então convertemos para número para a comparação.
    return recipes.find((recipe) => recipe.id === Number(id));
  },

  create: async (newRecipeData) => {
    const recipes = await getRecipesFromFile();

    // Encontra o ID mais alto no array atual. Se o array estiver vazio, começa com 0.
    const maxId = recipes.reduce((max, recipe) => (recipe.id > max ? recipe.id : max), 0);
    
    const newRecipe = {
      id: maxId + 1, // Define o novo ID como o máximo + 1
      ...newRecipeData,
      createdAt: new Date().toISOString(),
    };

    recipes.push(newRecipe);
    await writeRecipesToFile(recipes);
    return newRecipe;
  },

  update: async (id, updatedData) => {
    const recipes = await getRecipesFromFile();
    const recipeIndex = recipes.findIndex((recipe) => recipe.id === Number(id));

    if (recipeIndex === -1) {
      return null;
    }

    recipes[recipeIndex] = { ...recipes[recipeIndex], ...updatedData };
    await writeRecipesToFile(recipes);
    return recipes[recipeIndex];
  },



  delete: async (id) => {
    const recipes = await getRecipesFromFile();
    const recipeIndex = recipes.findIndex((recipe) => recipe.id === Number(id));

    if (recipeIndex === -1) {
      return false;
    }

    recipes.splice(recipeIndex, 1);
    await writeRecipesToFile(recipes);
    return true;
  },
};