import express from "express";
import JsonStorageStorage from "../../utils/jsonStorage";
import path from "path";

const router = express.Router();
const storage = new JsonStorageStorage(
  path.join(__dirname, "../data/surveys.json")
);

router.get("/", (req, res) => {
  res.json(storage.getAll());
});

router.post("/", (req, res) => {
  const id = Date.now();
  storage.set(id, req.body);
  res.json({ id });
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  storage.set(id, req.body);
  res.json({ id });
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const data = storage.get(id);

  if (!data) {
    res.status(404).json({ message: "Not found" });
  }

  res.json(data);
});

export default router;
