import EasyGraphQLTester from "easygraphql-tester"
import fs from "fs"
import path from "path";

const schemaCode = fs.readFileSync(path.join(__dirname, "../../src", "graphql", "schema.graphql"), "utf8");

describe("Migrations", () => {
    let tester : any;

    before(() => {
        tester = new EasyGraphQLTester(schemaCode);
    });

    describe("Query", () => {
        it("Invalid query migration", () => {
            const invalidQuery = `
                {
                  migrations {
                    id
                    name
                    createdAt
                    updatedAt
                    invalid
                  }
                }
            `;
            tester.test(false, invalidQuery);
        });

        it("Should pass with a valid query", () => {
            const validQuery = `
                {
                  migrations {
                    id
                    name
                    createdAt
                    updatedAt
                  }
                }
            `;
            tester.test(true, validQuery);
        });
    });

    describe("Mutations", () => {
        it("Invalid input type of createMigration", () => {
            const mutation = `
                mutation CreateMigration($name: String!) {
                  createMigration(name: $name) {
                    id
                  }
                }
            `;

            tester.test(false, mutation, {
                name: 1,
            });
        });

        it("createMigration should pass if the input type is valid", () => {
            const mutation = `
                mutation CreateMigration($name: String!) {
                  createMigration(name: $name) {
                    id
                  }
                }
            `;
            tester.test(true, mutation, {
                name: "name",
            });
        });

        it("Invalid input type of deleteMigration", () => {
            const mutation = `
                mutation DeleteMigration($id: String!) {
                  deleteMigration(id: $id) {
                    id
                  }
                }
            `;

            tester.test(false, mutation, {
                id: "1",
            });
        });

        it("deleteMigration should pass if the input type is valid", () => {
            const mutation = `
                mutation DeleteMigration($id: ID!) {
                  deleteMigration(id: $id) {
                    id
                  }
                }
            `;
            tester.test(true, mutation, {
                id: 1,
            });
        });

        it("Invalid input type of updateMigration", () => {
            const mutation = `
                mutation UpdateMigration($id: String,  $name: String!) {
                  updateMigration(id: $id, name: $name) {
                    id
                  }
                }
            `;

            tester.test(false, mutation, {
                name: 1,
                id: "1"
            });
        });

        it("updateMigration should pass if the input type is valid", () => {
            const mutation = `
                mutation UpdateMigration($id: ID!,  $name: String!) {
                  updateMigration(id: $id, name: $name) {
                    id
                  }
                }
            `;
            tester.test(true, mutation, {
                name: "name",
                id: 1
            });
        });
    });
});
