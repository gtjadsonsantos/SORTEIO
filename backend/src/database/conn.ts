import knex from "knex";
import knexfile from "../../knexfile";

const conn = knex(knexfile.development);

export default conn;