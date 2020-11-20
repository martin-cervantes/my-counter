export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export function counterIncrement() {
  return ({ type: INCREMENT });
}

export function counterDecrement() {
  return ({ type: DECREMENT });
}
