import * as actionTypes from "./actionTypes";
function keepAliveReducer(state, action) {
  const { type, payload } = action;
  const { keepAliveId, reactElement, nodes } = payload;
  switch (type) {
    // * state = {
    // *  home1: {
    // *    keepAliveId: "home1",
    // *    reactElement,
    // *    nodes,
    // *    status: create | created
    // *  },
    // *  home2: {
    // *    keepAliveId: "home2",
    // *    reactElement,
    // *    nodes,
    // *    status: create | created
    // *  },
    // * }
    case actionTypes.CREATING:
      console.log("reducer creating");
      return {
        ...state,
        [keepAliveId]: {
          keepAliveId,
          reactElement,
          status: type,
          nodes: null,
        },
      };
    case actionTypes.CREATED:
      console.log("reducer created");
      return {
        ...state,
        [keepAliveId]: {
          ...state[keepAliveId],
          status: type,
          nodes,
        },
      };
    default:
      return state;
  }
}
export default keepAliveReducer;
