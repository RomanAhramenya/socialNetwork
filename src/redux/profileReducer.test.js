import profileReducer, { addPostActionCreator } from "./profileReducer";

it("add Post", () => {
  let action = addPostActionCreator("Hello");
  let state = {
    PostsData: [
      { id: 1, text: "Heloo", like: 3 },
      { id: 2, text: "ok", like: 4 },
      { id: 3, text: "Heloo", like: 3 },
    ],
  };
  let newState=profileReducer(state,action)
  expect(newState.PostsData.length).toBe(4)
});
