import express from 'express';
import mercadopagoController from '../controllers/mercadopagoController.js';


const router = express.Router();
const mercadopago = new mercadopagoController();

router.get('/mercadopago', mercadopago.getHolaMundo);

export default router;
