import { Button } from "@nuco/react/components/Button";
import { Input } from "@nuco/react/components/Input";
import { version } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import viteLogo from "/vite.svg";

interface Inputs {
  example: string;
  exampleRequired: string;
};

function App() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: Inputs = {
      example: formData.get("example") as string,
      exampleRequired: formData.get("exampleRequired") as string,
    };
    // eslint-disable-next-line no-alert
    window.confirm(JSON.stringify(data));
  };

  return (
    <>
      <div>
        <a
          href="https://vite.dev"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src={viteLogo}
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>
        Vite + React@
        {version}
      </h1>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <Input name="example" type="text" />
          <Button type="submit">Submit</Button>
        </form>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
