"use client";

import React from "react";
import styles from "./Preloader.module.css";

export default function Preloader() {
  return (
    <div className={styles.preloader}>
      <div className={styles.loader}></div>
    </div>
  );
}
