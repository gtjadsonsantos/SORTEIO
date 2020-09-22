import knex from "knex";
import knexfile from "../../knexfile";

const conn = knex(knexfile.local);

export default conn;