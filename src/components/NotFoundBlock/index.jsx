import React from "react";

import styles from "./NotFoundBlock.module.scss";

export const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span> :( </span>
        <br />
        Ничего не найдено
      </h1>
      <br />
      <p className={styles.description}>
        К сожалению данная страница отсутствует в нашем интернет магазине
      </p>
    </div>
  );
};

export default NotFoundBlock;
