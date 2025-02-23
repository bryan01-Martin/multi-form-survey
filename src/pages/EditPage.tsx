import { toJS } from "mobx";
import SectionEditorList from "../components/edit/SectionEditorList";
import { useSurveyStore } from "../store";
import callApi from "../utils/api";
import { useLocation, useParams } from "react-router";
import { useEffect, useState } from "react";
import Button from "../components/common/Button";
import SendModalContent from "../components/edit/SendModalContent";
import Modal from "../components/common/Modal";

export default function EditPage() {
  const surveyStore = useSurveyStore();
  const { surveyId = "" } = useParams<{ surveyId: string }>();
  const { hash } = useLocation();
  const [opened, setOpened] = useState<boolean>(hash === "#send");

  useEffect(() => {
    const id = parseInt(surveyId ?? "", 10);
    if (id) {
      surveyStore.fetchSurvey(id);
    }
  }, [surveyId, surveyStore]);

  const handleSubmit = () => {
    callApi(`/surveys/${surveyId}`, {
      method: "PUT",
      body: toJS({ sections: surveyStore.sections }),
    }).then(() => {
      setOpened(true);
    });
  };
  return (
    <>
      <Button className="absolute top-0 right-0 " onClick={handleSubmit}>
        보내기
      </Button>
      <SectionEditorList />
      <Modal opened={opened}>
        <SendModalContent
          emailCollected={surveyStore.emailCollected}
          surveyId={parseInt(surveyId, 10)}
          onClose={() => setOpened(false)}
        />
      </Modal>
    </>
  );
}
