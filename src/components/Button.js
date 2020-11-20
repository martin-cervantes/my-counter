import React from 'react';

export default function Button(props) {
  const { text, clickHandle } = props;

  return (
    <button class="button" onClick={clickHandle}>{ text }</button>
  );
}
