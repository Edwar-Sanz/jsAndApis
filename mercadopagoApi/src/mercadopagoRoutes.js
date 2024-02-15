import express from 'express';
import mercadopagoController from './mercadopagoController.js';

const router = express.Router();
const mercadopago = new mercadopagoController();

router.get('/mercadopago-all-payment-methods', 
  (req, res) => { mercadopago.allPaymentMethods(req, res);
});
router.get('/mercadopago-pse-method', 
  (req, res) => { mercadopago.pseMethod(req, res);
});
router.post('/mercadopago-pse-payment', 
  (req, res) => { mercadopago.psePayment(req, res);
});


export default router;
