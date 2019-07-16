import actionTypes from '../../actions';

const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.INCREAMENT:
        return {
            ...state,
            counter: state.counter + 1
        }
      case actionTypes.DECREAMENT:
        return {
            ...state,
            counter: state.counter - 1
        }
      case actionTypes.ADD:
        return {
            ...state,
            counter: state.counter + action.val
        }
      case actionTypes.SUBTRACT:
        return {
            ...state,
            counter: state.counter - action.val
        }
      default:
        return state;
    }
};

export default counterReducer;
