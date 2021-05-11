// action
const ADD_PERSON = Symbol("招聘");
const REMOVE_PERSON = Symbol("裁员");

let num = 1;
const initState = {
  person: ["王勇旭", "董金波"],
};

// reducer处理函数， 参数是状态和新的action
export default function AlertEditPerson(state = initState, action) {
  switch (action.type) {
    case ADD_PERSON:
      return {
        person: [...state.person, `员工${num++}`],
      };
    case REMOVE_PERSON:
      state.person.pop();
      return {
        person: [...state.person],
      };
    default:
      return state;
  }
}

export function addAlertPerson() {
  return {
    type: ADD_PERSON,
  };
}

export function removeAlertPerson() {
  return {
    type: REMOVE_PERSON,
  };
}

export function addAlertPersonAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch({type: ADD_PERSON,})
    }, 2000)
  }
}

export function removeAlertPersonAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch({type: REMOVE_PERSON,})
    },2000)
  }
}
