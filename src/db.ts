import Knex from "knex";
import knexStringcase from "knex-stringcase";
import * as database from "../knexfile";
export const knex = Knex(knexStringcase(database));
