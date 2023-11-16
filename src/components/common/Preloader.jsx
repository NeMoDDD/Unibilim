import React from "react";
import s from "./Common.module.css";
import { Spinner } from "@chakra-ui/react";
const Preloader = () => {
  return (
    <div className={s.preloader}>
      <Spinner
        className={s.spinner}
      />
    </div>
  );
};

export default Preloader;
