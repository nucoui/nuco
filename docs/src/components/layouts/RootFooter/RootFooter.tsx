import { useColorScheme } from "@nuco/react";
import { Divider } from "@nuco/react/components/Divider";
import { Option } from "@nuco/react/components/Option";
import { Select } from "@nuco/react/components/Select";
import { setColorScheme } from "@nuco/variable";
import { type ComponentProps, useMemo } from "react";
import styles from "./RootFooter.module.scss";

export const RootFooter = () => {
  const handleChange = (e: Parameters<NonNullable<ComponentProps<typeof Select>["onChange"]>>["0"]) => {
    if (e.detail?.value === "system" || e.detail?.value === "dark" || e.detail?.value === "light") {
      setColorScheme(e.detail?.value);

      return;
    }

    setColorScheme("system");
  };

  const scheme = useColorScheme();

  const ColorModes = useMemo(() => {
    const modes = [
      { value: "system", label: "System" },
      { value: "dark", label: "Dark Mode", selected: scheme === "dark" },
      { value: "light", label: "Light Mode", selected: scheme === "light" },
    ];

    return modes.map(mode => (
      <Option key={mode.value} value={mode.value} selected={mode.selected}>
        {mode.label}
      </Option>
    ));
  }, [scheme]);

  return (
    <>
      <Divider text="Powered by @nucoui" textPosition="center" />
      <footer className={styles["root-footer"]}>
        <div style={{ width: "200px" }}>
          <Select onChange={handleChange}>
            {ColorModes}
          </Select>
        </div>
      </footer>
    </>
  );
};
