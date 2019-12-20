import Knex from "knex";
import * as database from "../knexfile";
export const knex = Knex(database);
