import { Model } from "objection";
import connection from "../database/connection";
import UserType from "../types/index";

Model.knex(connection);

interface User extends UserType {}

class User extends Model {
  static get tableName() {
    return "users";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "email"],

      properties: {
        id: { type: "integer" },
        name: { type: "string", minLength: 1, maxLength: 255 },
        email: { type: "string", minLength: 1, maxLength: 255 },
      },
    };
  }
}

export default User;
