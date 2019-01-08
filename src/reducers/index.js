const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_OREDR_LIST':
      return { ...state, loading: true };
    case 'ORDER_LIST_RECEIVED':
      return { ...state, news: action.json, loading: false }
    default:
      return state;
  }
};

export default reducer;
