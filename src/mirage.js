import { createServer, Model } from "miragejs"
import dataArr from './data.json'

export function startMirage(environment = "development") {
  return createServer({
    environment,
    models: {
        employee: Model,
    },

    routes() {
      this.namespace = "api"

      this.get("/employees", (schema, _) => {
            return schema.employees.all();
        })
    },

    seeds(server) {
        dataArr.forEach(data => {
            server.create('employee', data);
        });
    },
  })
}