import { observer } from "mobx-react-lite";
import QuestionEditor from "./QuestionEditor";
import Section from "../../models/sections";
import SectionTitleEditor from "./SectionTitleEditor";

interface Props {
  section: Section;
}
function SectionEditor({ section }: Props) {
  return (
    <div className={"[&>*]:mb-24"}>
      <SectionTitleEditor capTitle={"2개 중 1번째"} section={section} />
      {section.questions.map((question) => (
        <QuestionEditor key={question.id} question={question} />
      ))}
    </div>
  );
}

export default observer(SectionEditor);
