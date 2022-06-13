import axios from "axios";
const GET_CARDS = `http://localhost:5000/cardsData`;
const GET_OFFICE_DATA = `http://localhost:5000/officeData`;

export const getCardsData = () => {
  return axios
    .get(`${GET_CARDS}`)
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};

export const getOfficeData = () => {
  return axios
    .get(`${GET_OFFICE_DATA}`)
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};
