// import { gogo } from "../index";
import app, { checkResponseStatus } from "../app";
import request from "supertest";

describe("integration test : create list service", () => {
    test("should create list and return 200", async () => {
        const res = await request(app)
            .post("/")
            .send({ title: "create with test" });
        expect(res.body).toHaveProperty("title");
        expect(res.body).toHaveProperty("id");
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

// test("blah", () => {
//     expect(true).toBe(true);
// });
