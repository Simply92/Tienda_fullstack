import { Router } from "express";
import { body, param } from 'express-validator'
import { createProduct, getProducts, getProductById, updateProduct, updateAvailability, deleteProduct } from "./handlers/product";
import { handleInputErrors } from "./middleware";

const router = Router()

router.get('/', getProducts)

router.get('/:id',
    param('id').isInt().withMessage('Id no válida'),
    handleInputErrors,
    getProductById)

router.post('/',
    body('name')
        .notEmpty().withMessage('El nombre del producto no puede ir vacio'),

    body('price')
        .isNumeric().withMessage('Valor no válido')
        .notEmpty().withMessage('El precio del producto no puede ir vacio')
        .custom(value => value > 0).withMessage('Precio no válido'),
    handleInputErrors,

    createProduct)

router.put('/:id',
    param('id').isInt().withMessage('Id no válida'),
    body('name')
        .notEmpty().withMessage('El nombre del producto no puede ir vacio'),
    body('price')
        .isNumeric().withMessage('Valor no válido')
        .notEmpty().withMessage('El precio del producto no puede ir vacio')
        .custom(value => value > 0).withMessage('Precio no válido'),
    body('availability')
        .isBoolean().withMessage('Valor para disponibilidad no valido'),
    handleInputErrors,
    updateProduct)

router.patch('/:id',
    param('id').isInt().withMessage('Id no válida'),
    handleInputErrors,
    updateAvailability)

router.delete('/:id',
    param('id').isInt().withMessage('Id no válida'),
    handleInputErrors,
    deleteProduct
)

export default router