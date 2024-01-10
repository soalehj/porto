import React from "react";
import "./about.css";

function IntroAbout(props) {
  return (
    <div className="section-intro">
      <div className="container">
        <div className="row">
          <div className="intro-about">
            <div className="header-about-left col-lg-1 col-sm-1">
              <span className="intro">Introduction</span>
            </div>
            <div className="content-about">
              <div className="header-about col-lg-11 col-sm-auto">
                <h2>Hi, I’m Soaleh! Front-end Developer from Makassar, Indonesia</h2>
                <p>
                  Saya seorang lulusan fakultas Syariah dan Hukum UIN Alauddin Makassar tahun 2017. Jelas basic pendidikan saya berseberangan dengan apa yang saya lakukan saat ini namun itu tidak menghalangi saya untuk menjadi seorang
                  front-end developer. Saya memiliki banyak pengalaman kerja diberbagai bidang dan industri, namun ketertarikan saya dalam dunia industri digital tidak menghalangi saya untuk mempelajari hal baru dan memantapkan diri untuk
                  menjadi seorang front-end developer.
                  <br />
                  <br />
                  Saya sangat senang berkolaborasi dengan orang yeng memiliki peran dalam suatu bisnis/project demi menciptakan sebuah produk digital yang bermanfaat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroAbout;
