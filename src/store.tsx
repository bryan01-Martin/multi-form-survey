import { makeAutoObservable } from "mobx";
import { createContext, PropsWithChildren, useContext } from "react";
import Section from "./models/sections";
import callApi from "./utils/api";
import sections from "./models/sections";
import { SectionData } from "./types/app";

class SurveyStore {
  emailCollected: boolean;
  sections: Section[] = [];
  focusedSectionId: number | null = null;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    this.emailCollected = false;
    this.sections = [new Section()];
    this.focusedSectionId = this.sections[0].id;
  }

  setFocusedSectionId(id: number) {
    this.focusedSectionId = id;
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

  fetchSurvey(id: number) {
    callApi<{ sections: SectionData[]; emailCollected: boolean }>(
      `/surveys/${id}`,
      {}
    ).then(({ sections, emailCollected }) => {
      this.sections = sections.map((section) => new Section(section));
      this.emailCollected = emailCollected ?? false;
    });
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
