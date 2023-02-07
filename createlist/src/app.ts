import express, { json, urlencoded } from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(json({ limit: "21mb" }));
app.use(urlencoded({ extended: true, limit: "21mb" }));
app.post("/", async (req, res) => {
    const body = JSON.stringify(req.body);
    const response = await fetch(
        "https://62c6bbd02b03e73a58d57240.mockapi.io/lists",
        {
            method: "POST",
            body,
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
        .then(checkResponseStatus)
        .then(async (res) => await res.json())
        .catch((err) => console.log(err));
    console.log("create List with data", response);
    return res.status(200).json(response);
});

export function checkResponseStatus(res: any) {
    if (res.ok) {
        return res;
    } else {
        throw new Error(
            `The HTTP status of the reponse: ${res.status} (${res.statusText})`
        );
    }
}

export default app;
