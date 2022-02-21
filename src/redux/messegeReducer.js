
const ADD_MESSEGE = "ADD_MESSEGE";
let initialState = {
  HumenData: [
    { id: 1, name: "Roman" },
    { id: 2, name: "Roman" },
    { id: 3, name: "Roman" },
    { id: 4, name: "Roman" },
    { id: 5, name: "Roman" },
    { id: 6, name: "Roman" },
    { id: 7, name: "Roman" },
  ],
  MassegesData: [
    { masseges: "hello" },
    { masseges: "ok" },
    { masseges: "hello" },
    { masseges: "ok" },
  ],
};
let messegeReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case ADD_MESSEGE:
      return {
        ...state,
        MassegesData: [...state.MassegesData, { masseges: action.text }],
        
      };
    default:
      return state;
  }
};

export const addMessegeActionCreator = (text) => ({ type: ADD_MESSEGE,text });
export const addMessegeThunk=text=>dispatch=>{
  return dispatch(addMessegeActionCreator(text))
}
export default messegeReducer;
