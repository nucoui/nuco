import type { LinkProps } from "@tanstack/react-router";
import type { AnchorHTMLAttributes } from "react";
import { CustomAnchor } from "@/components/common/CustomAnchor/CustomAnchor";
import { useColorScheme } from "@nuco/react";
import { Header } from "@nuco/react/components/Header";
import { Link } from "@tanstack/react-router";
import FileIconsNpm from "~icons/file-icons/npm?width=1.06rem&height=1.26rem";
import MdiGithub from "~icons/mdi/github?width=1.5rem&height=1.5rem";
import styles from "./Header.module.scss";

const MIDDLE_ANCHOR_LINKS = [
  {
    to: "/$lang/docs",
    params: { lang: "en" },
    children: "Docs",
  },
] as const satisfies Array<LinkProps>;

const RIGHT_ANCHOR_LINKS = [
  {
    href: "https://github.com/nucoui/nuco",
    target: "_blank",
    children: <MdiGithub />,
  },
  {
    href: "https://www.npmjs.com/org/nuco",
    target: "_blank",
    children: <FileIconsNpm />,
  },
] as const satisfies Array<AnchorHTMLAttributes<HTMLAnchorElement>>;

export const RootHeader = () => {
  const scheme = useColorScheme();

  return (
    <Header isLogo isNavToggle isMiddle>
      <div slot="left" className={styles["left-container"]}>
        <Link to="/">
          <img src={scheme === "dark" ? "/nuco-dark.png" : "/nuco-light.png"} alt="logo" />
        </Link>
      </div>
      <div slot="center" className={styles["center-container"]}>
        {MIDDLE_ANCHOR_LINKS.map(link => (
          <CustomAnchor
            key={link.to}
            underline="none"
            {...link}
          />
        ))}
      </div>
      <div slot="right" className={styles["right-container"]}>
        {RIGHT_ANCHOR_LINKS.map(link => (
          <a
            key={link.href}
            className={styles.anchor}
            {...link}
          />
        ))}
      </div>
    </Header>
  );
};
