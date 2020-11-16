import { takeLatest, put, call } from "redux-saga/effects";
import {
  GET_CURRENT_WEATHER_REQUEST,
  GET_CURRENT_WEATHER_SUCCESS,
  GET_CURRENT_WEATHER_FAILURE,
  GET_OTHER_DAYS_SUCCESS,
  GET_OTHER_DAYS_FAILURE,
  CHANGE_CITY_REQUEST,
} from "../Constants";
import { api } from "../Services";
import config from "../Services/config";

function* getCurrentWeather(action) {
  try {
    const { data } = yield call(
      api.request.get,
      `/data/2.5/weather?id=${action.payload}`,
      {
        params: {
          APPID: config.API_KEY,
          units: config.API_UNITS,
        },
      }
    );

    yield put({
      type: GET_CURRENT_WEATHER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: GET_CURRENT_WEATHER_FAILURE,
      payload: error,
    });
  }
}

function* getOtherDays(action) {
  try {
    const { data } = yield call(
      api.request.get,
      `/data/2.5/forecast?id=${action.payload}`,
      {
        params: {
          APPID: config.API_KEY,
          units: config.API_UNITS,
        },
      }
    );
    yield put({
      type: GET_OTHER_DAYS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: GET_OTHER_DAYS_FAILURE,
      payload: error,
    });
  }
}

function* changeCity(action) {
  console.log('clicked')
}

export default function* root() {
  yield takeLatest(GET_CURRENT_WEATHER_REQUEST, getCurrentWeather);
  yield takeLatest(GET_CURRENT_WEATHER_REQUEST, getOtherDays);
  yield takeLatest(CHANGE_CITY_REQUEST, changeCity);
}
