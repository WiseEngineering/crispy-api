import EasyGraphQLTester  from "easygraphql-tester"
import fs from "fs"
import path from "path";

const schemaCode = fs.readFileSync(path.join(__dirname, "../../src", "graphql", "schema.graphql"), "utf8");

describe("Jobs", () => {
    let tester : any;

    before(() => {
        tester = new EasyGraphQLTester(schemaCode);
    });

    describe("Query", () => {
        it("Invalid query jobs", () => {
            const invalidQuery = `
                {
                  jobs {
                    id
                    migrationId
                    workerId
                    createdAt
                    updatedAt
                    status
                    invalid
                  }
                }
            `;
            tester.test(false, invalidQuery);
        });

        it("Should pass with a valid query", () => {
            const validQuery = `
                {
                  jobs {
                    id
                    migrationId
                    workerId
                    createdAt
                    updatedAt
                    status
                  }
                }
            `;
            tester.test(true, validQuery);
        });
    });

    describe("Mutations", () => {
        it("Invalid input types of createJob", () => {
            const mutation = `
                mutation CreateJob($migrationId: Int!, $workerId: String!) {
                  createJob(migrationId: $migrationId, workerId: $workerId) {
                    id
                  }
                }
            `;

            tester.test(false, mutation, {
                migrationId: 1,
                workerId: ""
            });
        });

        it("createJob should pass if the input type is valid", () => {
            const mutation = `
                 mutation CreateJob($migrationId: Int!, $workerId: Int!) {
                  createJob(migrationId: $migrationId, workerId: $workerId) {
                    id
                  }
                }
            `;
            tester.test(true, mutation, {
                migrationId: 1,
                workerId: 1
            });
        });

        it("createJob should pass if the input type is valid and with custom status", () => {
            const mutation = `
                 mutation CreateJob($migrationId: Int!, $workerId: Int!, $status: String!) {
                  createJob(migrationId: $migrationId, workerId: $workerId, status: $status) {
                    id
                  }
                }
            `;
            tester.test(true, mutation, {
                migrationId: 1,
                workerId: 1,
                status: "finished"
            });
        });

        it("Invalid input types of deleteJob", () => {
            const mutation = `
                mutation DeleteJob($id: String!) {
                  deleteJob(id: $id) {
                    id
                  }
                }
            `;

            tester.test(false, mutation, {
                id: ""
            });
        });

        it("deleteJob should pass if the input type is valid", () => {
            const mutation = `
                 mutation DeleteJob($id: ID!) {
                  deleteJob(id: $id) {
                    id
                  }
                }
            `;
            tester.test(true, mutation, {
                id: 1
            });
        });

        it("Invalid input types of updateJob", () => {
            const mutation = `
                mutation UpdateJob($id: String!, $migrationId: Int) {
                  updateJob(id: $id, migrationId: $migrationId) {
                    id
                  }
                }
            `;

            tester.test(false, mutation, {
                id: "",
                migrationId: "1"
            });
        });

        it("updateJob should pass if the input type is valid", () => {
            const mutation = `
                 mutation UpdateJob($id: ID!, $migrationId: Int, $workerId: Int, $status: String) {
                  updateJob(id: $id, migrationId: $migrationId, workerId: $workerId, status: $status) {
                    id
                  }
                }
            `;
            tester.test(true, mutation, {
                id: 1,
                migrationId: 1,
                workerId: 1,
                status: "pending"
            });
        });
    });
});
