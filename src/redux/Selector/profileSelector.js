export const profileSelector = (state) => {
  return state.profile;
};
export const idSelector = (state) => {
  return state.auth.id;
};
export const postSelector = (state) => {
  return state.profile.PostsData;
};
