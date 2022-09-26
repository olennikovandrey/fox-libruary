import topImg from "../../assets/images/top-section/topImg.svg";
import React from "react";

interface IProps {
  showSignUp: (value: boolean) => void;
}

const TopSection: React.FC<IProps> = ({ showSignUp }) => {
  return (
    <section className="top-section">
      <div className="content">
        <h1 className="content__title">BIld your library</h1>
        <p className="content__description">
          Over 400.000 books from fiction to the business literature
        </p>
        <button className="content__button" onClick={() => showSignUp(true)}>
          Let&#8217;s start
        </button>
      </div>
      <img className="top-section__image" src={topImg} alt="top-img" />
    </section>
  );
};

export default TopSection;
