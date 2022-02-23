export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const counterIncrement = () => ({
  type: INCREMENT
});

export const counterDecrement = () => ({
  type: DECREMENT
});
