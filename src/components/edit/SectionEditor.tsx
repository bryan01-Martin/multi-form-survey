import { observer } from "mobx-react-lite";
import QuestionEditor from "./QuestionEditor";
import Section from "../../models/sections";
import SectionTitleEditor from "./SectionTitleEditor";

interface Props {
  section: Section;
  capTitle: string;
  onChangeFocus: (id: number) => void;
}
function SectionEditor({ section, capTitle, onChangeFocus }: Props) {
  const handleClickContainer = () => {
    onChangeFocus(section.id);
  };

  return (
    <div className={"[&>*]:mb-24"} onClick={handleClickContainer}>
      <SectionTitleEditor capTitle={capTitle} section={section} />
      {section.questions.map((question) => (
        <QuestionEditor
          key={question.id}
          question={question}
          onCopy={section.copyQuestion}
          onDelete={section.removeQuestion}
        />
      ))}
    </div>
  );
}

export default observer(SectionEditor);
