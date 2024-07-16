export const localStorageMiddleware = store => next => action => {
    const result = next(action);
    localStorage.setItem('todoAppState', JSON.stringify(store.getState()));
    return result;
  };