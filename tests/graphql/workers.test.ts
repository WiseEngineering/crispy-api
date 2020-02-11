import EasyGraphQLTester from "easygraphql-tester"
import fs from "fs"
import path from "path";

const schemaCode = fs.readFileSync(path.join(__dirname, "../../src", "graphql", "schema.graphql"), "utf8");

describe("Workers", () => {
    let tester : any;

    before(() => {
        tester = new EasyGraphQLTester(schemaCode);
    });

    describe("Query", () => {
        it("Invalid query workers", () => {
            const invalidQuery = `
                {
                  workers {
                    id
                    name
                    endpoint
                    apiKey
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
                   workers {
                    id
                    name
                    endpoint
                    apiKey
                    createdAt
                    updatedAt
                  }
                }
            `;
            tester.test(true, validQuery);
        });
    });

    describe("Mutations", () => {
        it("Invalid input type createWorker", () => {
            const mutation = `
                mutation CreateWorker($name: String!, $endpoint: String!, $apiKey: String!) {
                  createWorker(name: $name, endpoint: $endpoint, apiKey: $apiKey) {
                    id
                  }
                }
            `;

            tester.test(false, mutation, {
                name: "name",
                endpoint: "endpoint",
                apiKey: 1
            });
        });

        it("createWorker should pass if the input type is valid", () => {
            const mutation = `
                 mutation CreateWorker($name: String!, $endpoint: String!, $apiKey: String!) {
                  createWorker(name: $name, endpoint: $endpoint, apiKey: $apiKey) {
                    id
                  }
                }
            `;
            tester.test(true, mutation, {
                name: "name",
                endpoint: "endpoint",
                apiKey: "key"
            });
        });

        it("Invalid input type of deleteWorker", () => {
            const mutation = `
                mutation DeleteWorker($id: String!) {
                  deleteWorker(id: $id) {
                    id
                  }
                }
            `;

            tester.test(false, mutation, {
                id: ""
            });
        });

        it("deleteWorker should pass if the input type is valid", () => {
            const mutation = `
                mutation DeleteWorker($id: ID!) {
                  deleteWorker(id: $id) {
                    id
                  }
                }
            `;
            tester.test(true, mutation, {
                id: 1
            });
        });

        it("Invalid input type of updateWorker", () => {
            const mutation = `
                mutation UpdateWorker($name: Int!, $id: String!, $apiKey: String!) {
                  updateWorker(name: $name, id: $id, apiKey: $apiKey) {
                    id
                  }
                }
            `;

            tester.test(false, mutation, {
                name: "name",
                id: "1",
                apiKey: 1
            });
        });

        it("updateWorker should pass if the input type is valid", () => {
            const mutation = `
                 mutation UpdateWorker($name: String!, $endpoint: String!, $apiKey: String!, $id: ID!) {
                  updateWorker(name: $name, endpoint: $endpoint, apiKey: $apiKey, id: $id) {
                    id
                  }
                }
            `;
            tester.test(true, mutation, {
                name: "name",
                endpoint: "endpoint",
                apiKey: "key",
                id: 1
            });
        });
    });
});
