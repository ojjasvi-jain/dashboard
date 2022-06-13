import React, { useEffect, useState } from "react";
import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import Cards from "./components/Cards/Cards";
import ChartsInfo from "./components/ChartsInfo/ChartsInfo";
import { getCardsData } from "./service";

function App() {
  const [cards, setCards] = useState([]);
  const [initialCards, setInitialCards] = useState([]);
  let allCards;

  useEffect(() => {
    getCardsData().then((cardsData) => {
      setInitialCards(cardsData);
      setCards(cardsData);
    });
  }, []);

  return (
    <>
      <div className="main-container">
        <SideBar />
        <main>
          <div className="wrapper">
            <div className="navbar">
              <div className="dropdown">
                <button className="dropbtn">
                  Project
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                  <a href="#">
                    Link 1<i className="fa fa-caret-down"></i>
                  </a>
                  <a href="#">
                    Link 2<i className="fa fa-caret-down"></i>
                  </a>
                  <a href="#">
                    Link 3<i className="fa fa-caret-down"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="boxed boxed-project">Start New Project +</div>
            <div className="row">
              <div className="column">
                <div ClassName="left-cloumn">
                  <ChartsInfo allCards={initialCards} setCards={setCards} />
                </div>
              </div>
              <div className="column">
                <Cards cards={cards} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
