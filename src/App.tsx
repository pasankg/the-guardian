import Guardian from "guardian-js";
import Form from "./FormComponent/Form";
import { createContext } from "react";

interface GuardianApi {
  content: unknown;
  tags: unknown;
  sections: unknown;
  editions?: unknown;
  item: unknown;
  custom?: unknown;
}

export const searchContext = createContext<GuardianApi | undefined>(undefined);

function App() {
  const apiKey: string = import.meta.env.VITE_GUARDIAN_API_KEY || "";
  const guardian = new Guardian(apiKey, false);

  return (
    <>
      <searchContext.Provider value={guardian}>
        <Form />
      </searchContext.Provider>
    </>
  );
}

export default App;
