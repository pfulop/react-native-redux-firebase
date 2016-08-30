import {CHANGED_ITEMS} from '../actions/items';

const initialState = [];

export default  (state = initialState, action) => {
  switch (action.type) {
    case CHANGED_ITEMS:
      return action.data;
    default:
      return state;
  }
};
