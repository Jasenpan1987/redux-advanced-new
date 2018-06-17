export default ({ dispatch, getState }) => next => async action => {
  if (!action.payload || !action.payload.then) {
    // action.payload is not a promise
    return next(action);
  }

  try {
    const response = await action.payload;

    dispatch({
      ...action,
      payload: response
    });
  } catch (error) {
    dispatch({
      type: `error/${action.type}`,
      payload: error
    });
  }
};
