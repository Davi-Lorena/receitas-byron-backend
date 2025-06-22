import { Router } from "express";
import { recipeController } from "../controllers/recipe.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Recipes
 *     description: API para gerenciamento de receitas
 */

/**
 * @swagger
 * /recipes:
 *   get:
 *     summary: Retorna todas as receitas
 *     tags: [Recipes]
 *     responses:
 *       '200':
 *         description: Lista de todas as receitas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Recipe'
 */
router.get("/recipes", recipeController.getAll);

/**
 * @swagger
 * /recipes/{id}:
 *   get:
 *     summary: Obtém uma receita pelo ID
 *     tags: [Recipes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da receita
 *     responses:
 *       '200':
 *         description: Detalhes da receita
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Recipe'
 *       '404':
 *         description: Receita não encontrada
 */
router.get("/recipes/:id", recipeController.getById);

/**
 * @swagger
 * /recipes:
 *   post:
 *     summary: Cria uma nova receita
 *     tags: [Recipes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Recipe'
 *     responses:
 *       '201':
 *         description: Receita criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Recipe'
 *       '500':
 *         description: Erro no servidor
 */
router.post("/recipes", recipeController.create);

/**
 * @swagger
 * /recipes/{id}:
 *   put:
 *     summary: Atualiza uma receita existente
 *     tags: [Recipes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da receita
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Recipe'
 *     responses:
 *       '200':
 *         description: Receita atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Recipe'
 *       '404':
 *         description: Receita não encontrada
 */
router.put("/recipes/:id", recipeController.update);

/**
 * @swagger
 * /recipes/{id}:
 *   delete:
 *     summary: Deleta uma receita
 *     tags: [Recipes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da receita
 *     responses:
 *       '204':
 *         description: Receita deletada com sucesso
 *       '404':
 *         description: Receita não encontrada
 */
router.delete("/recipes/:id", recipeController.delete);

export default router;
