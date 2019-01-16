import * as t from './actionTypes';

export const expandSidebarTab = tab => ({
  type: t.EXPAND_SIDEBAR_TAB,
  tabToExpand: tab,
});
