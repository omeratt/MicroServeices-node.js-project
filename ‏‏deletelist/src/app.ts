import express, { json, urlencoded } from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import fetch from "node-fetch";
export function checkResponseStatus(res: any) {
    if (res.ok) {
        return res;
    } else {
        throw new Error(
            `The HTTP status of the reponse: ${res.status} (${res.statusText})`
        );
    }
}
const app = express();
app.use(cors());
app.use(json({ limit: "21mb" }));
app.use(urlencoded({ extended: true, limit: "21mb" }));
app.delete("/:id", async (req, res) => {
    const id = req.params.id;
    if (!id) return res.status(400).json({ success: false });
    console.log(id);
    const response = await fetch(
        `https://62c6bbd02b03e73a58d57240.mockapi.io/lists/${id}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
        .then(checkResponseStatus)
        .then(async (res) => await res.json())
        .catch((err) => false);
    console.log("deleteList with data", response);
    if (!response) return res.status(400).json({ success: false });
    return res.status(200).json(response);
});

export default app;
