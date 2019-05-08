import { ThunkAction } from "redux-thunk";

// ICalendarEvents interface
export interface ICalendarEvents {
  //   kind?: string;
  //   etag?: string;
  //   summary?: string;
  //   description?: string;
  //   updated?: Date;
  //   timeZone?: string;
  //   accessRole?: string;
  //   defaultReminders?: object[];
  //   nextSyncToken?: string;
  //   items: IItems;
  // }

  // export interface IItems {
  kind?: string;
  etag?: string;
  id?: string;
  status?: string;
  htmlLink?: string;
  created?: Date;
  updated?: Date;
  summary: string;
  creator?: {
    email: string;
  };
  organizer: IOrganizer;
  start: {
    date?: string;
    dateTime?: string;
  };
  end: {
    date?: string;
    dateTime?: string;
  };
  transparency?: string;
  iCalUID?: string;
  sequence?: number;
  extendedPropertie?: {
    private: {
      everyoneDeclinedDismissed: string;
    };
  };
}

export interface IOrganizer {
  email?: string;
  displayName: string;
  self?: true;
}
// action types
export const FETCH_CALENDAR_EVENTS = "FETCH_CALENDAR_EVENTS";
export const FETCH_CALENDAR_EVENTS_SUCCESS = "FETCH_CALENDAR_EVENTS_SUCCESS";
export const FETCH_CALENDAR_EVENTS_FAILURE = "FETCH_CALENDAR_EVENTS_FAILURE";
export const SEARCH_TEXT = "SEARCH_TEXT";
export const SET_FILTER_DATES = "SET_FILTER_DATES";

// action creators
export const getCalendarEvents = (): IGetCalendarEventsAction => ({
  type: FETCH_CALENDAR_EVENTS
});
export const getCalendarEventsSuccess = (
  calendarEvents: ICalendarEvents[]
): IGetCalendarEventsSuccessAction => ({
  type: FETCH_CALENDAR_EVENTS_SUCCESS,
  calendarEvents
});
export const getCalendarEventsFailure = (
  error: Error
): IGetCalendarEventsFailureAction => ({
  type: FETCH_CALENDAR_EVENTS_FAILURE,
  error
});
export const onSearch = (searchText: string): IOnSearch => ({
  type: SEARCH_TEXT,
  searchText
});
export const onDateSelect = (
  startDate: string,
  endDate: string
): IOnDateSelect => ({
  type: SET_FILTER_DATES,
  startDate,
  endDate
});

type ThunkResult<R> = ThunkAction<
  R,
  ICalendarState,
  null,
  ICalendarEventsActions
>;
// https://www.googleapis.com/calendar/v3/calendars/nology.io_5smheaincm2skd1tcmvv7m37d8@group.calendar.google.com/events?maxResults=20&key=AIzaSyCHZijg8vL_s_cSjdz3Pc-mOz4aswss9WU
export const fetchCalendar = (): ThunkResult<void> => {
  const calendarId =
    "nology.io_5smheaincm2skd1tcmvv7m37d8@group.calendar.google.com";
  const apiKey = "AIzaSyCHZijg8vL_s_cSjdz3Pc-mOz4aswss9WU";
  return dispatch => {
    dispatch(getCalendarEvents());
    fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?maxResults=20&key=${apiKey}`
    )
      .then(res => res.json())
      .then(data => dispatch(getCalendarEventsSuccess(data.items)))
      .catch(error => dispatch(getCalendarEventsFailure(error)));
  };
};

// action interfaces
export interface IGetCalendarEventsAction {
  type: typeof FETCH_CALENDAR_EVENTS;
}
export interface IGetCalendarEventsSuccessAction {
  type: typeof FETCH_CALENDAR_EVENTS_SUCCESS;
  calendarEvents: ICalendarEvents[];
}
export interface IGetCalendarEventsFailureAction {
  type: typeof FETCH_CALENDAR_EVENTS_FAILURE;
  error: Error;
}
export interface IOnSearch {
  type: typeof SEARCH_TEXT;
  searchText: string;
}
export interface IOnDateSelect {
  type: typeof SET_FILTER_DATES;
  startDate: string;
  endDate: string;
}

// combining action creators

type ICalendarEventsActions =
  | IOnDateSelect
  | IOnSearch
  | IGetCalendarEventsAction
  | IGetCalendarEventsSuccessAction
  | IGetCalendarEventsFailureAction;

export interface ICalendarState {
  calendarEvents: ICalendarEvents[];
  error: null | Error;
  loading: boolean;
  searchText: string;
  startDate: string;
  endDate: string;
}

// reducer with initial state
const initialState: ICalendarState = {
  calendarEvents: [],
  error: null,
  loading: false,
  searchText: "",
  startDate: "",
  endDate: ""
};

const calendarReducer = (
  state = initialState,
  action: ICalendarEventsActions
) => {
  switch (action.type) {
    case FETCH_CALENDAR_EVENTS:
      return { ...state, loading: true, error: null };
    case FETCH_CALENDAR_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        calendarEvents: action.calendarEvents
      };
    case FETCH_CALENDAR_EVENTS_FAILURE:
      return { ...state, loading: false, error: action.error };
    case SEARCH_TEXT:
      return { ...state, searchText: action.searchText };
    case SET_FILTER_DATES:
      return {
        ...state,
        startDate: action.startDate,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

export default calendarReducer;
