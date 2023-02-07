import app, { checkResponseStatus } from "../src/app";
import request from "supertest";

describe("integration test : create task service", () => {
    test("should create task and return 200", async () => {
        const res = await request(app)
            .post("/")
            .send({ title: "create with test" });

        console.log(res.body);
        expect(res.body).toHaveProperty("title");
        expect(res.body).toHaveProperty("id");
        expect(res.body).toHaveProperty("done");
        expect(res.body).toHaveProperty("listId");
        expect(res.status).toBe(200);
        expect(res.status).not.toBe(400);
    });
});
describe("unit test checkResponseStatus", () => {
    test("should return ok", async () => {
        const res = { ok: true };
        expect(checkResponseStatus(res)).toBe(res);
    });
    test("should return error", async () => {
        try {
            checkResponseStatus({ ok: false });
        } catch (err) {
            expect(err).not.toBe(null);
        }
    });
});
