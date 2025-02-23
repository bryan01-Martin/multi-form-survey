import { makeAutoObservable } from "mobx";
import { createContext, PropsWithChildren, useContext } from "react";
import Section, { SectionData } from "./models/sections";
import callApi from "./utils/api";
import sections from "./models/sections";

class SurveyStore {
  sections: Section[] = [];
  focusedSectionId: number | null = null;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
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
    callApi<{ sections: SectionData[] }>(`/surveys/${id}`, {}).then(
      ({ sections }) => {
        this.sections = sections.map((section) => new Section(section));
      }
    );
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
