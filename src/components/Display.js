import React from 'react';

export default function Display(props) {
  const { text } = props;

  return (
    <span class="display">{ text }</span>
  );
}
