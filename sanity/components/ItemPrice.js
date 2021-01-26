import React, {useState} from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

function createPatchFrom(value) {
  return PatchEvent.from(value === '' ? unset() : set(Number(value)));
}
// const formatMoney = Intl.NumberFormat('en-us', {
//   style: 'currency',
//   currency: 'USD',
// }).format;

export default function ItemPrice({ type, value, onChange, itemPrice }) {
  return (
      <input
        type="name"
        value={value}
        onChange={(event) => onChange(createPatchFrom(event.target.value))}
        ref={itemPrice}
      />
    )}
