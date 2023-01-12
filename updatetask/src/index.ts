import express, { json, urlencoded } from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import fetch from "node-fetch";
const PORT = "8003";
const app = express();
app.use(cors());
app.use(json({ limit: "21mb" }));
app.use(urlencoded({ extended: true, limit: "21mb" }));
app.put("/:id", async (req, res) => {
    const body = JSON.stringify(req.body);
    const id = req.params.id;
    const response = await fetch(
        `https://62c6bbd02b03e73a58d57240.mockapi.io/tasks/${id}`,
        {
            method: "PUT",
            body,
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
        .then(checkResponseStatus)
        .then(async (res) => await res.json())
        .catch((err) => console.log(err));
    console.log("Update Task with data", response);
    return res.json(response);
});
app.listen(PORT, () => {
    console.log(`Connected on port ${PORT}`);
});
function checkResponseStatus(res: any) {
    if (res.ok) {
        return res;
    } else {
        throw new Error(
            `The HTTP status of the response: ${res.status} (${res.statusText})`
        );
    }
}
