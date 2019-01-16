import * as t from './actionTypes';

const initialState = {
  expandedSidebarTab: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case t.EXPAND_SIDEBAR_TAB: {
      return {
        ...state,
        expandedSidebarTab: action.tabToExpand,
      };
    }
    default: {
      return {...state};
    }
  }
}
