import moment from "moment";

import {
  GET_CURRENT_WEATHER_REQUEST,
  GET_CURRENT_WEATHER_SUCCESS,
  GET_OTHER_DAYS_REQUEST,
  GET_OTHER_DAYS_SUCCESS,
  CHANGE_CITY_REQUEST,
} from "../Constants";

const initialState = {
  all: {
    isLoading: true,
    data: {},
  },
  activeCityId: 1512569,
  otherDaysList: {
    isLoading: true,
    data: [],
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CURRENT_WEATHER_REQUEST: {
      return {
        ...state,
        all: {
          isLoading: true,
        },
      };
    }

    case GET_CURRENT_WEATHER_SUCCESS: {
      return {
        ...state,
        all: {
          data: payload,
          isLoading: false,
        },
      };
    }

    case CHANGE_CITY_REQUEST: {
      return {
        ...state,
        activeCityId: payload
      };
    }

    case GET_OTHER_DAYS_REQUEST: {
      return {
        ...state,
        otherDaysList: {
          isLoading: true,
        },
      };
    }
    case GET_OTHER_DAYS_SUCCESS: {
      return {
        ...state,
        otherDaysList: {
          isLoading: false,

          data: payload.list.filter((item) => {
            if (
              moment.unix(item.dt).format("HH:mm") === "11:00" &&
              moment().format("DD/MM/YYYY") !==
                moment.unix(item.dt).format("DD/MM/YYYY")
            ) {
              return item;
            }
          }),
        },
      };
    }

    default:
      return state;
  }
};
