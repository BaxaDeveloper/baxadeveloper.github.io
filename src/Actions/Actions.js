import {
  GET_CURRENT_WEATHER_REQUEST,
  GET_OTHER_DAYS_REQUEST,
  CHANGE_CITY_REQUEST,
} from "../Constants";

export const getCurrentWeather = (cityId) => {
  return {
    type: GET_CURRENT_WEATHER_REQUEST,
    payload: cityId,
  };
};

export const changeCity = (cityId) => ({
  type: CHANGE_CITY_REQUEST,
  payload: cityId,
});

export const getOtherDays = () => {
  return {
    type: GET_OTHER_DAYS_REQUEST,
  };
};
