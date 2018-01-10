import { Express } from "express-serve-static-core";
import * as cors from "cors";

export function InitializeApi(app: Express) {
    app.use(cors());

    app.get("/api/test", async(err, res) => {
        res.json({ message: "hi!!!" });
    });
}