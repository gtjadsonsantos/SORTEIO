import knex from "knex";
import knexfile from "../../knexfile";

const conn = knex(knexfile.production);

export default conn;