import * as express from "express";
import * as cors from "cors";


const app = express();
const PORT = process.env.PORT || 8081;

app.use(cors());

app.get("/api/test", async (err, res) => {
    res.json({message: "hi"});
  });

app.listen(PORT, () => {
    console.log(`Node server listening on http://localhost:${PORT}`);
  });