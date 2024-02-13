
class mercadopagoController {
  //---------------------------------------------------------------
  async getHolaMundo(req, res) {
    
    const docs = {
      "Hola": "mundo"
    }

    res.json(docs);
  }

}

export default mercadopagoController;
