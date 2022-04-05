import React, { Fragment, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import UseTitle from "hooks/useTitle";

import HomeContent from "./Content";
import AlertTimeOut from "./AlertTimeOut";

const Home = () => {
  const actualContent = useSelector(
    (state) => state.resources.selectedResource
  );

  const updateContent = () => {
    if (typeof actualContent === "undefined" || actualContent === null) {
      UseTitle({ title: "Inicio" });
      return <HomeContent />;
    }
    UseTitle({ title: actualContent.titleTab });

    
  };

  
  useEffect(() => {
  }, []);

  return (
    <Fragment>
      <main>
        <AlertTimeOut percentageWarnigTimeOut={25} />
        {updateContent()}
      </main>
    </Fragment>
  );
};

export default Home;
