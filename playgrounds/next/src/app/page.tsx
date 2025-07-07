import Image from "next/image";
import styles from "./page.module.css";
import { Breadcrumb } from "@nuco/react/components/Breadcrumb";
import { Button } from "@nuco/react/components/Button";
import { H1 } from "@nuco/react/components/H1";
import { Li } from "@nuco/react/components/Li";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Breadcrumb>
          <Li>Root</Li>
          <Li>Home</Li>
        </Breadcrumb>

        <H1>@nuco/react on {" "}
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js logo"
            width={90*2}
            height={15*2}
            priority
          />
        </H1>

        <div className={styles.ctas}>
          <p>
            Playgrounds running @nuco/react on Next.js (App router)
          </p>
        </div>
        <hr />
        <div style={{ display: "flex", flexFlow: "column", gap: "0.5rem" }}>
          <Button>Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="tertiary">Tertiary Button</Button>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
