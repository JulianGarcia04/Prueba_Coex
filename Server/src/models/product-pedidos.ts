import { Schema, model } from "mongoose";

class ProductPedido {
  private productPedidoSchema:Schema;

  constructor() {
    //CREATE SCHEMA OF THE DATABASES
    this.productPedidoSchema = new Schema({
      id_products: {
        type: Array,
        required: true
      },
      id_pedido: {
        type: String,
        required: true
      },
      subtotal: {
        type: Number,
        required: true
      }
    }, {
      versionKey: false,
      timestamps: true
    })
  }

  //EXPORT SCHEMA OUTSIDE THE CLASS
  public getSchema(){
    return this.productPedidoSchema;
  }
}

//INSTANCE TO CLASS FOR GET THE SCHEMA
const modelProductPedido = new ProductPedido().getSchema();

//CREATE MODEL THE SCHEMA
export default model('productPedido', modelProductPedido);
