import React from "react";
import { Link } from "react-router-dom";
const Cards = () => {
  return (
    <div className="container-fluid shadow-lg ">
      <div
        className="row px-0 mx-0"
        style={{
          // padding:30,
          backgroundColor: "#fff",
          borderRadius: 15,
          paddingRight: 25,
          paddingLeft: 25,
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <div className="col-sm-12">
          <div className="row ">
            <div className="col-sm-12 fs-4 fw-bold">
              Projects
              <br />
              with 100% satisfaction
            </div>
          </div>
          <div className="row px-0 mx-0">
            <div
              className="col-sm-12 "
              style={{ fontWeight: 900, fontSize: 70, color: "#fd4a36" }}
            >
              2.5K
            </div>
          </div>
          <div className="row px-0 mx-0">
            <div className="col-sm-12 fs-4 fw-bold">
              Power of choices when nothing what we like best principle.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ImgCard = ({ img_src }) => {
  return (
    <div className="card_con">
      <div className="inner_card_con">
        <img src={img_src} alt="no image" width={320} height={250} />
      </div>
    </div>
  );
};

export const ProgCard = ({ p_h, p_pic, p_l }) => {
  return (
    <div className="p_card">
      <div className="p_inner_card">
        <div className="f_p_inner_card">
          <div className="p_lines"></div>
          <h4>{p_h}</h4>
          <div className="p_lines"></div>
        </div>
        <div className="m_p_inner_card">
          <img src={p_pic} alt="" />
        </div>
        <div className="l_p_inner_card">
          <h2>{p_l}</h2>
        </div>
      </div>
    </div>
  );
};

export const HeaderCard = ({ header, path }) => {
  return (
    <>
      <div className="main_img_container">
        <div className="img_title">
          <div className="title_text">
            <h1>{header}</h1>
            <p>{path}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export const ContactCards = () => {
  return (
    // <div className="row px-0 mx-0">
    <div className="col-sm-3 bg-light shadow-lg ">
      <div className="row  py-4 px-3 ">
        <div className="col-sm-2">
          <img src="./img/icon-50.png" alt="" />
        </div>
        <div
          className="col-sm-10 ps-5 "
          style={{
            verticalAlign: "center",
          }}
        >
          <h1 className="fs-2 fw-bold">Houston</h1>
          <p className="fs-4">
            3333 Raleigh St, Houston, <br />
            TX 77021, USA.
          </p>
        </div>
      </div>
    </div>
    //  </div>
  );
};

export default Cards;
