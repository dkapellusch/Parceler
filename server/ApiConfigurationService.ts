import { Express } from "express-serve-static-core";
import * as cors from "cors";
import { Server } from "http";

export function InitializeApi(app: Express, server: Server) {
    app.use(cors());

    app.get("/api/test", async(err, res) => {
        res.json({ message: "I am responding to your fetch" });
    });
}