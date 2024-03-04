import React from "react";

const MainPageLazy = React.lazy(
  () =>
    new Promise((res) =>
      setTimeout(() => {
        // @ts-ignore
        res(import("./MainPage"));
      }, 1000)
    )
);

export default MainPageLazy;
