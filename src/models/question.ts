import { makeAutoObservable } from "mobx";
import { QuestionType } from "../types/app";

type QuestionData = {
  id: number;
  title: string;
  type: QuestionType;
  required: boolean;
  options?: string[];
};

export default class Question {
  id: number;
  title: string;
  type: QuestionType;
  required: boolean;
  options?: string[];

  constructor(
    data: QuestionData = {
      id: Date.now(),
      title: "",
      type: "shortText",
      required: false,
    }
  ) {
    makeAutoObservable(this);

    this.id = data.id;
    this.title = data.title;
    this.type = data.type;
    this.required = data.required;
    this.options = data.options;
  }

  setTitle(title: string) {
    this.title = title;
  }

  setType(type: QuestionType) {
    this.type = type;
    if (
      type === "multipleChoice" ||
      type === "checkbox" ||
      type === "dropdown"
    ) {
      this.options = this.options || [];
    } else {
      this.options = undefined;
    }
  }

  setRequired(required: boolean) {
    this.required = required;
  }

  //TODO: 하나의 옵션을 변경 할 수 있도록 하는 함수 추가
  setOptions(options: string[]) {
    this.options = options;
  }
}
