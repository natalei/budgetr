import express from "express"

import {
    getBudgets,
    createBudget,
    getBudgetById,
    updateBudget,
    archiveBudget,
    deleteBudget
} from "./budgets/budget.controller"

import {
    getCategories,
    createCategory,
    getCategoryById,
    updateCategory,
    deleteCategory
} from "./categories/category.controller"

import {
    getTransactions,
    createTransaction,
    getTransactionById,
    updateTransaction,
    deleteTransaction
} from "./transactions/transaction.controller"

import {
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    loginUser
} from "./users/user.controller"

const router = express.Router()

router.use((req, res, next) => {
    console.log(`
        ${req.method} - ${req.url} ${new Date()}
    `);
    if (req.method === "POST") {
        console.log("request body: ");
        console.log("JSON.stringify(req.body, null, 2");
    }
    next()
})

// budget routes
router.route("/budgets")
    .get(getBudgets)
    .post(createBudget);

router.route("/budgets/:id")
    .get(getBudgetById)
    .put(updateBudget)
    .put(archiveBudget)
    .delete(deleteBudget);

// category routes
router.route("/categories")
    .get(getCategories)
    .post(createCategory);

router.route("/categories/:id")
    .get(getCategoryById)
    .put(updateCategory)
    .delete(deleteCategory);

// transaction routes
router.route("/transactions")
    .get(getTransactions)
    .post(createTransaction);

router.route("/transactions/:id")
    .get(getTransactionById)
    .put(updateTransaction)
    .delete(deleteTransaction);

// user routes
router.route("/users")
    .post(createUser);

router.route("/users/login")
    .post(loginUser);

router.route("/users/:id")
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

export default router;
