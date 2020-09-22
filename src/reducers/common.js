import { handleActions } from '../modules/helpers';

import { ActionTypes } from '../constants/index';

export const appState = {
  showAlert: false,
};

export default {
  app: handleActions(
    {
      [ActionTypes.SHOW_ALERT]: draft => {
        draft.showAlert = true;
      },
      [ActionTypes.HIDE_ALERT]: draft => {
        draft.showAlert = false;
      },
    },
    appState,
  ),
};
