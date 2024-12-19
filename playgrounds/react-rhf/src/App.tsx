import type { SubmitHandler } from "react-hook-form";
import { Button, Input } from "@nuko/react";
import { version } from "react";
import { Controller, useForm } from "react-hook-form";
import reactLogo from "./assets/react.svg";
import "./App.css";
import viteLogo from "/vite.svg";

interface Inputs {
  example: string;
  exampleRequired: string;
};

function App() {
  const {
    control,
    handleSubmit,
    setValue,
  } = useForm<Inputs>();

  // eslint-disable-next-line no-alert
  const onSubmit: SubmitHandler<Inputs> = data => window.confirm(JSON.stringify(data));

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="example"
            control={control}
            rules={{
              required: "This field is required",
              minLength: {
                value: 3,
                message: "Minimum length is 3 characters",
              },
              maxLength: {
                value: 10,
                message: "Maximum length is 10 characters",
              },
            }}
            render={({ field, fieldState }) => (
              <div>
                <Input
                  {...field}
                  type="text"
                  placeholder={field.name}
                  onInput={(e) => {
                    setValue("example", (e.target as HTMLInputElement)?.value);
                  }}
                />
                {fieldState.error && <p>{fieldState.error.message}</p>}
              </div>
            )}
          />
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
