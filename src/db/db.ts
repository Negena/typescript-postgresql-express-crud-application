import {Pool} from "pg";

export const pool = new Pool({
  host : 'localhost',
  user : 'mnigina',
  port: 5432,
  password : 'password1',
  database: "tscapi"
});
