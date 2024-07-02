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
      });

      this.put('/employees/:id', (schema, request) => {
        let id = request.params.id;
        let attrs = JSON.parse(request.requestBody)
        this.db.employees.update(id, { manager: attrs.id});
        return schema.employees.find(id);
      })
    },

    seeds(server) {
        dataArr.forEach(data => {
            server.create('employee', data);
        });
    },
  })
}