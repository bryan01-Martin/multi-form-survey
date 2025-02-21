import { makeAutoObservable } from "mobx/dist/api/makeObservable";
import Question from "./models/question";

class Store {
  questions: Question[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addQuestion() {
    this.questions.push(new Question());
  }

  removeQuestion(id: number) {
    this.questions = this.questions.filter((question) => question.id !== id);
  }

  copyQuestion(id: number) {
    const question = this.questions.find((question) => question.id === id);
    if (question) {
      this.questions.push(new Question({ ...question, id: Date.now() }));
    }
  }
}
