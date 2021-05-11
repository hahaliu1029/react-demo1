// action
const ADD_PERSON = Symbol("招聘");
const REMOVE_PERSON = Symbol("裁员");

let num = 1;
const initState = {
  person: ["韦冰江", "胡汉顶"],
};

// reducer处理函数， 参数是状态和新的action
export default function AssetEditPerson(state = initState, action) {
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

export function addAssetPerson() {
  return {
    type: ADD_PERSON,
  };
}

export function removeAssetPerson() {
  return {
    type: REMOVE_PERSON,
  };
}

export function addAssetPersonAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch({type: ADD_PERSON,})
    }, 2000)
  }
}

export function removeAssetPersonAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch({type: REMOVE_PERSON,})
    }, 2000)
  }
}
