import { makeAutoObservable } from "mobx";
import { createContext, PropsWithChildren, useContext } from "react";
import Section from "./models/sections";

class SurveyStore {
  sections: Section[] = [];
  focusedSectionId: number | null = null;

  constructor() {
    makeAutoObservable(this);
    this.sections = [new Section()];
    this.focusedSectionId = this.sections[0].id;
  }

  addSection() {
    const section = new Section();
    this.sections.push(section);
    this.focusedSectionId = section.id;
  }

  addQuestion() {
    const section = this.sections.find(
      (section) => section.id === this.focusedSectionId
    );

    if (section) {
      section.addQuestion();
    }
  }
}

const surveyStore = new SurveyStore();
const surveyStoreContext = createContext(surveyStore);

export const useSurveyStore = () => useContext(surveyStoreContext);
export const SurveyStoreProvider = ({ children }: PropsWithChildren) => (
  <surveyStoreContext.Provider value={surveyStore}>
    {children}
  </surveyStoreContext.Provider>
);
