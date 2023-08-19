import React from "react";
import "./Tablle.css";
import { useTranslation } from "react-i18next";

function Tablle() {
  const { t } = useTranslation();
  return (
    <div className="tablebg ">
      <div className="container py-5">
        <div className="row  justify-content-center justify-content-center ">
          <div className="col-3  col-md-3 col-lg-2  p-3 tableh1 test  tpbg">
            {" "}
            {t("Level")}{" "}
          </div>
          <div className="col-3  col-md-3 col-lg-2 tableborder p-3  tableh1 tpbg">
            {t("Point")}{" "}
          </div>
          <div className="col-5  col-lg-4 tableborder brids1 test1 p-3 tableh1 tpbg">
            {t("Rewads")}
          </div>{" "}
        </div>

        <div className="row  justify-content-center">
          <div className="col-3  col-md-3 col-lg-2   tableborder p-3 tableP">
            {" "}
            1{" "}
          </div>
          <div className="col-3  col-md-3 col-lg-2  tableborder p-3 tableP">
            1{" "}
          </div>
          <div className="col-5  col-lg-4 tableborder p-3 tableP">
            QB {t("Badge")} I
          </div>
        </div>
        <div className="row  justify-content-center">
          <div className="col-3  ol-md-3 col-lg-2  tableborder p-3 tableP tableP">
            {" "}
            2{" "}
          </div>
          <div className="col-3  ol-md-3 col-lg-2   tableborder p-3 tableP tableP">
            2{" "}
          </div>
          <div className="col-5  col-lg-4  tableborder p-3 tableP tableP">
            QB {t("Badge")} II
          </div>
        </div>
        <div className="row  justify-content-center">
          <div className="col-3  ol-md-3 col-lg-2  tableborder p-3 brids2  tableP tableP test2 ">
            {" "}
            3{" "}
          </div>
          <div className="col-3 ol-md-3 col-lg-2   tableborder p-3 tableP tableP">
            7~{" "}
          </div>
          <div className="col-5 col-lg-4 tableborder p-3 brids3 tableP tableP test3">
            QB {t("Badge")} III
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tablle;
