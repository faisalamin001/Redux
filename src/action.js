export const incNumber = () => {
  return {
    type: "INCREMENT",
  };
};

export const decNumber = () => {
  return {
    type: "DECREMENT",
  };
};

export const addName = (name) => {
  return {
    type: "addName",
    payload: name,
  };
};
