// action
const ADD_PERSON = "招聘";
const REMOVE_PERSON = "裁员";

let num = 1;
const initState = {
  person: ["贾伟", "田琳", "张玉峰"],
};

// reducer处理函数， 参数是状态和新的action
export function editPerson(state = initState, action) {
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

export function addPerson() {
  return {
    type: ADD_PERSON,
  };
}

export function removePerson() {
  return {
    type: REMOVE_PERSON,
  };
}

export function addPersonAsync() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: ADD_PERSON,
      });
    }, 2000);
  };
}
