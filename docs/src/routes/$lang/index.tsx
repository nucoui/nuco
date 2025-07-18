import type { ReactNode } from "react";
import { Button } from "@nuco/react/components/Button";
import { H1 } from "@nuco/react/components/H1";
import { H4 } from "@nuco/react/components/H4";
import { createFileRoute } from "@tanstack/react-router";
import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";

export const Route = createFileRoute("/$lang/")({
  // loader: async ({ params }) => {
  //   const { lang } = params;
  // },
  component: RouteComponent,
});

/**
 * Words to be animated in the hero section.
 */
const WORDS = ["core", "react", "vue", "svelte", "angular"];

function RouteComponent(): ReactNode {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"in" | "out">("in");
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Animation durations
  const DURATION = 500;
  const INTERVAL = 2000;

  // Animate in/out using Web Animations API
  useEffect(() => {
    const el = spanRef.current;
    if (!el)
      return;
    let animation: Animation | null = null;
    if (direction === "in") {
      animation = el.animate(
        [
          { opacity: 0, transform: "translateY(30%)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        { duration: DURATION, easing: "cubic-bezier(0.4,0,0.2,1)", fill: "forwards" },
      );
    }
    else {
      animation = el.animate(
        [
          { opacity: 1, transform: "translateY(0)" },
          { opacity: 0, transform: "translateY(-30%)" },
        ],
        { duration: DURATION, easing: "cubic-bezier(0.4,0,0.2,1)", fill: "forwards" },
      );
    }
    return () => {
      animation?.cancel();
    };
  }, [index, direction]);

  // Animation loop: out→in→out...
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      if (direction === "in") {
        setDirection("out");
      }
      else {
        setIndex(prev => (prev + 1) % WORDS.length);
        setDirection("in");
      }
    }, direction === "in" ? INTERVAL : DURATION);
    return () => {
      if (timeoutRef.current)
        clearTimeout(timeoutRef.current);
    };
  }, [index, direction]);

  return (
    <main className={styles.main}>
      <div className={styles["hero-section"]}>
        <div className={styles.gradient1}></div>
        <div className={styles.gradient2}></div>

        <div className={styles.title}>
          <H1>
            @nuco/
            <span
              ref={spanRef}
              className={styles["animated-word"]}
              aria-live="polite"
              style={{ opacity: direction === "in" ? 1 : 0 }}
            >
              {WORDS[index]}
            </span>
          </H1>
        </div>
        <H4>
          Design system library
          that Transcends Framework boundaries
        </H4>
        {/* <Divider /> */}
        <div className={styles.links}>
          <Button type="anchor" href="/en/docs/">
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z" /></svg>
          </Button>
        </div>
      </div>
    </main>
  );
}
