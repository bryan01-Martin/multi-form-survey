import express from "express";
import JsonStorageStorage from "../../utils/jsonStorage";
import path from "path";
import { QuestionData, SectionData } from "../../types/app";

const router = express.Router();
const storage = new JsonStorageStorage<{
  sections: SectionData[];
  emailCollected: boolean;
  responses: SurveyResponse[];
}>(path.join(__dirname, "../data/surveys.json"));

type SurveyResponse = Record<
  SectionData["id"],
  Record<QuestionData["id"], string>
>;

router.get("/", (req, res) => {
  res.json(storage.getAll());
});

router.post("/", (req, res) => {
  const id = Date.now();
  storage.set(id, { ...req.body, emailCollected: false });
  res.json({ id });
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  storage.set(id, req.body);
  res.json({ id });
});

router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  const data = storage.get(id);

  storage.set(id, { ...data, ...req.body });
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

router.post("/:id/responses", (req, res) => {
  const id = Number(req.params.id);
  const data = storage.get(id);

  if (!data) {
    res.status(404).json({ message: "Not Found" });
    return;
  }

  storage.set(id, {
    ...data,
    responses: [...(data.responses ?? []), req.body],
  });

  res.status(201).json({ message: "Response added" });
});

export default router;
