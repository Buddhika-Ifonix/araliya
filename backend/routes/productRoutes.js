import express from 'express'
const router = express.Router()
import { protect, admin } from '../middleware/authMiddleware.js'
import {
  getProductById,
  getProducts,
  getProductListInAdmin,
  getProductListOutAdmin,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
  email,
  deleteManyProducts,
} from '../controllers/productControllers.js'

router
  .route('/')
  .get(getProducts)
  .post(protect, admin, createProduct)
  .delete(protect, admin, deleteManyProducts)
router.route('/:id/reviews').post(protect, createProductReview)
router.get('/top', getTopProducts)
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)

router.get('/admin/productList/in',protect, admin, getProductListInAdmin)
router.get('/admin/productList/out',protect, admin, getProductListOutAdmin)

//testing mail
router.post('/email', email)



export default router
