import app, { checkResponseStatus } from "../src/app";
import request from "supertest";

describe("integration test : get lists service", () => {
    test("should return all tasks in DB", async () => {
        const res = await request(app).get("/");
        console.log(res.body);
        expect(res.body).not.toBeNull();
        expect(res.status).toBe(200);
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
