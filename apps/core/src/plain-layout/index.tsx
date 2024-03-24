import { React, ReactSubApp, createDynamicComponent, staticPropsFeature } from "@xarc/react";
import electrodePng from "../../static/electrode.png";
import { copyRightMessage } from "../info";
import styles from "../styles/layout.mod.styl";

const Layout = (props) => {
  return (
    <>
      <header className={styles["border"]}>
        <img src={electrodePng} />
      </header>
      <main className={styles["border"]} style={{ display: "flex" }}>
        <section id="sidenav" className={styles["border"]}>
          <ul>
            <li>
              <img src={electrodePng} />
            </li>
            <li>
              <img src={electrodePng} />
            </li>
            <li>
              <img src={electrodePng} />
            </li>
          </ul>
        </section>
        <section id="container" className={styles["border"]}></section>
      </main>
      <footer className={styles["border"]}>
        <p style={{ textAlign: "center" }}>{copyRightMessage}</p>
      </footer>
    </>
  );
};

export const subapp: ReactSubApp = {
  Component: Layout,
  wantFeatures: [
    staticPropsFeature({
      serverModule: require.resolve("./static-props"),
    }),
  ],
};
