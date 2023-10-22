import toast from 'react-hot-toast';
import { toastDuration } from 'utils/vars';

// Перемикач лоудера
export const toogleLoader = state => {
  state.isLoading = !state.isLoading;
};

export const handleLogIn = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true
  toogleLoader(state);
  toast.success(`Welcome ${state.user.name}!`, toastDuration);
};

export const handleLogOut = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  toogleLoader(state);
};

export const handleRefresh = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true
  toogleLoader(state);
};

export const handleReject = text => {
  toast.error(text, toastDuration);
};
