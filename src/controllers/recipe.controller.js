import { recipeService } from "../services/recipe.service.js";

export const recipeController = {
  getAll: async (req, res) => {
    try {
      const recipes = await recipeService.findAll();
      res.status(200).json(recipes);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar receitas." });
    }
  },

  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const recipe = await recipeService.findById(id);
      if (!recipe) {
        return res.status(404).json({ message: "Receita não encontrada." });
      }
      res.status(200).json(recipe);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar receita." });
    }
  },

  create: async (req, res) => {
    try {
      const newRecipe = await recipeService.create(req.body);
      res.status(201).json(newRecipe);
    } catch (error) {
      res.status(500).json({ message: "Erro ao criar receita." });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const updatedRecipe = await recipeService.update(id, req.body);
      if (!updatedRecipe) {
        return res.status(404).json({ message: "Receita não encontrada." });
      }
      res.status(200).json(updatedRecipe);
    } catch (error) {
      res.status(500).json({ message: "Erro ao atualizar receita." });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const wasDeleted = await recipeService.delete(id);
      if (!wasDeleted) {
        return res.status(404).json({ message: "Receita não encontrada." });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Erro ao deletar receita." });
    }
  },
};