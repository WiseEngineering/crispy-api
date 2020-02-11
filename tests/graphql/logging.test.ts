import EasyGraphQLTester from "easygraphql-tester"
import fs from "fs"
import path from "path";

const schemaCode = fs.readFileSync(path.join(__dirname, "../../src", "graphql", "schema.graphql"), "utf8");

describe("Logging", () => {
    let tester : any;

    before(() => {
        tester = new EasyGraphQLTester(schemaCode);
    });

    describe("Query", () => {
        it("Invalid query logging", () => {
            const invalidQuery = `
                {
                  logging {
                    id
                    data
                    jobId
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
                  logging {
                    id
                    data
                    jobId
                    createdAt
                    updatedAt
                  }
                }
            `;
            tester.test(true, validQuery);
        });
    });

    describe("Mutations", () => {
        it("Invalid input type of createLog", () => {
            const mutation = `
                mutation CreateLog($data: String!, $jobId: Int!) {
                  createLog(data: $data, jobId: $jobId) {
                    id
                  }
                }
            `;

            tester.test(false, mutation, {
                data: 1,
                jobId: 1
            });
        });

        it("createLog should pass if the input type is valid", () => {
            const mutation = `
                 mutation CreateLog($data: String!, $jobId: Int!) {
                  createLog(data: $data, jobId: $jobId) {
                    id
                  }
                }
            `;
            tester.test(true, mutation, {
                data: "JSON string || Etc.",
                jobId: 1
            });
        });

        it("Invalid input type of deleteLog", () => {
            const mutation = `
                mutation DeleteLog($id: String!) {
                  deleteLog(id: $id) {
                    id
                  }
                }
            `;

            tester.test(false, mutation, {
                id: "1",
            });
        });

        it("deleteLog should pass if the input type is valid", () => {
            const mutation = `
                 mutation DeleteLog($id: ID!) {
                  deleteLog(id: $id) {
                    id
                  }
                }
            `;
            tester.test(true, mutation, {
                id: 1
            });
        });

        it("Invalid input type of updateLog", () => {
            const mutation = `
                mutation UpdateLog($id: String!, $data: Int!) {
                  updateLog(id: $id, data: $data) {
                    id
                  }
                }
            `;

            tester.test(false, mutation, {
                data: 1,
                id: 1
            });
        });

        it("updateLog should pass if the input type is valid", () => {
            const mutation = `
                mutation UpdateLog($id: ID!, $data: String, $jobId: Int) {
                  updateLog(id: $id, data: $data, jobId: $jobId) {
                    id
                  }
                }
            `;
            tester.test(true, mutation, {
                data: "JSON string || Etc.",
                jobId: 1,
                id: 1
            });
        });
    });
});
