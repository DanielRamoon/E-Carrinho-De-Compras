import { createServer } from "miragejs"
import products from './products.json' 

export default function () {
  createServer(
    {
        routes() {
            this.get("/api/products", () => ({
                products
            }))
          },
        })
    }
  