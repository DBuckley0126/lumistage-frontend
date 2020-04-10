import { put, call, takeEvery, takeLatest, delay } from "redux-saga/effects";

import * as actions from "./appSagaActions";

export default function* appSagas() {
  yield takeEvery("testButtonGet", testButtonGet);
}

function* testButtonGet(action) {
  const data = { payload: action.payload };
  const fetchPayload = {
    method: "POST",
    mode: "no-cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data)
  };

  let response = false;

  try {
    if (window.location.hostname === "localhost") {
      response = yield fetch("http://localhost:5000/test", fetchPayload);
    } else {
      response = yield fetch(
        "https://final-project-ai-wars-backend.herokuapp.com/ping???????????????????????????????????????"
      );
    }
    debugger
    if (!response.ok) throw new Error("ERROR: No Response from backend sever");
  } catch (error) {
    console.log(error);
  }

  if (response.ok) {
    const data = yield response.json();
    if (data) {
      yield put(actions.updateTest1(data));
    }
  }
}
