import { config } from "dotenv"; config();
const ACCESS_TOKEN = process.env.ACCESS_TOKEN || 3001;


class mercadopagoController {
 

  async allPaymentMethods(req, res) {
    
    let reqHeader = new Headers();
    reqHeader.append("Authorization", "Bearer " + ACCESS_TOKEN);
    reqHeader.append("content-type", "application/json'");

    let reqOptions = {
      method: 'GET',
      headers: reqHeader,
      redirect: 'follow'
    };

    fetch("https://api.mercadopago.com/v1/payment_methods", reqOptions)
      .then(response => response.json())
      .then(result => res.status(200).json(result))
      .catch(error => console.log('error', error));


  }


  async pseMethod(req, res) {
    
    let reqHeader = new Headers();
    reqHeader.append("Authorization", "Bearer " + ACCESS_TOKEN);
    reqHeader.append("content-type", "application/json'");

    let reqOptions = {
      method: 'GET',
      headers: reqHeader,
      redirect: 'follow'
    };

    fetch("https://api.mercadopago.com/v1/payment_methods", reqOptions)
      .then(response => response.json())
      .then(result => {
        const pse = result.find(item => item.id === 'pse');

        if (pse) {
          res.status(200).json(pse);
        } else {
          res.status(404).json({ 
            mensaje: 'No se encontró pse',
            "result": result
          
          });
        }
      })
      .catch(error => console.log('error', error));
  }


  async psePayment(req, res) {
    const data = req.body;

    let reqHeader = new Headers();
    reqHeader.append("X-Idempotency-Key", "1234");
    reqHeader.append("Content-Type", "application/json");

    let exampleBody = JSON.stringify({
      "transaction_amount": 5000,
      "description": "Product description",
      "payment_method_id": "pse",
      "payer": {
        "email": "test_user_629105950@test.com",
        "entity_type": "individual",
        "identification": {
          "type": "CC",
          "number": "76262349"
        }
      },
      "additional_info": {
        "ip_address": "127.0.0.1"
      },
      "transaction_details": {
        "financial_institution": "1507"
      },
      "callback_url": "https://www.google.com"
    });

    let requestOptions = {
      method: 'POST',
      headers: reqHeader,
      body: exampleBody,
      redirect: 'follow'
    };

    fetch("https://api.mercadopago.com/v1/payments?access_token="+ ACCESS_TOKEN, requestOptions)
      .then(response => response.json())
      .then(result => res.status(200).json(result))
      .catch(error => console.log('error', error));
  }


}

export default mercadopagoController;
