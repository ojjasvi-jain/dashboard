import React, { useEffect, useState } from "react";
import { getOfficeData } from "../../service";
import "./ChartsInfo.css";

const ChartsInfo = ({ allCards, setCards }) => {
  const [officeData, setOfficeData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState({ value: 3200 });

  useEffect(() => {
    getOfficeData().then((officeData) => {
      console.log("officeData", officeData);
      setOfficeData(officeData);
    });
  }, []);

  const onChangeHandler = (e) => {
    let value = e.target.value;
    debugger;
    setText({ value });
    setIsEdit(false);
  };

  const clickHandler = (e) => {
    console.log(e.target.id);
    debugger;
    const filterCards = allCards.filter(
      (card) => card.officeId === e.target.id
    );
    console.log("filterCards", filterCards);
    setCards(filterCards);
  };

  return (
    <>
      <div className="config-office-area boxed">
        <h3 className="config-office-area-heading">Configuring Your office</h3>
        <p className="config-office-area-description">
          Based on your office Prefrence and your office area below is a
          configuration for your spave
        </p>
        <div className="row config-office-area-row">
          <div className="column">
            <div>
              <h4 className="config-office-area-total-area">Total Area</h4>
              <h5 className="config-office-area-total-area-unit">3000</h5>
            </div>
          </div>
          <div className="column">
            {isEdit ? (
              <input value={text.value} onChange={onChangeHandler}></input>
            ) : (
              <h4>{text.value}</h4>
            )}

            <i
              onClick={() => setIsEdit(true)}
              style={{ fontSize: "25px" }}
              className="'fas fa-edit'"
            >
              &#9998;
            </i>
          </div>
        </div>

        <div className="boxed config-sub-boxed">
          You have still some area to cover
        </div>
      </div>
      <div className="pie-chart-wrapper">
        <div className="pie-chart-image">
          <img src="pie-chart.png" alt="" />
        </div>
        <div className="pie-chart-description">
          {officeData.map((data) => {
            return (
              <button
                className="boxed"
                id={data.id}
                onClick={clickHandler}
                key={data.id}
              >
                <span className={`boxed-status ${data.color}-status`}></span>
                {data.name}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ChartsInfo;
