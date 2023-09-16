const initialState = {
    // Define your initial state here
    data: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_DATA':
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;