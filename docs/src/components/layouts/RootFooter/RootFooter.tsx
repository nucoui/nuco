import type { ComponentProps } from "react";
import { Divider } from "@nuco/react/components/Divider";
import { Option } from "@nuco/react/components/Option";
import { Select } from "@nuco/react/components/Select";
import { setColorScheme } from "@nuco/variable";
import styles from "./RootFooter.module.scss";

export const RootFooter = () => {
  const handleChange = (e: Parameters<NonNullable<ComponentProps<typeof Select>["onChange"]>>["0"]) => {
    if (e.detail?.value === "system" || e.detail?.value === "dark" || e.detail?.value === "light") {
      setColorScheme(e.detail?.value);

      return;
    }

    setColorScheme("system");
  };

  return (
    <>
      <Divider text="Powered by @nucoui" textPosition="center" />
      <footer className={styles["root-footer"]}>
        <div style={{ width: "200px" }}>
          <Select onChange={handleChange}>
            <Option value="light">Light Mode</Option>
            <Option value="dark">Dark Mode</Option>
            <Option value="system">System</Option>
          </Select>
        </div>
      </footer>
    </>
  );
};
