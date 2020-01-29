import Knex from "knex";
// @ts-ignore
import knexStringcase from "knex-stringcase";
import * as database from "../knexfile";
export const knex = Knex(knexStringcase(database));
