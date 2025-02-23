import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import MainLayout from "./components/common/MainLayout";
import SectionEditorList from "./components/edit/SectionEditorList";
import { SurveyStoreProvider } from "./store";
import AdminPage from "./pages/AdminPage";
import CreatePage from "./pages/Createpage";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <SurveyStoreProvider>
          <Routes>
            <Route path="/surveys/new" element={<CreatePage />} />
            <Route path="/surveys/:surveyId" element={<AdminPage />}>
              <Route path="edit" element={<EditPage />} />
              <Route path="responses" element={<div>응답</div>} />
            </Route>
          </Routes>
        </SurveyStoreProvider>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
