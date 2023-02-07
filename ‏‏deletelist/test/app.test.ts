import app, { checkResponseStatus } from "../src/app";
import request from "supertest";

describe("integration test : delete list service", () => {
    test("should not delete list and return 400 because id do not exist in DB", async () => {
        const res = await request(app).delete("/123456");

        console.log(res.body);
        expect(res.status).toBe(400);
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
