import React, {useState} from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

function createPatchFrom(value) {
  return PatchEvent.from(value === '' ? unset() : set(Number(value)));
}

// const [dimensionValue, setDimensionValue] = useState(null)

const formatMoney = Intl.NumberFormat('en-us', {
  style: 'currency',
  currency: 'USD',
}).format;


const dimensions = [
  {
    name: '11 x 14',
    width: 11,
    height: 14,
    isTall: false

  },
  {
    name: '16 x 20',
    width: 16,
    height: 20,
    isTall: false

  },
  {
    name: '20 x 24',
    width: 20,
    height: 24,
    isTall: false
  }
]
export default function ItemPrice({ type, value, onChange, itemPrice, dimensionInput }) {
  return (
    // <>
    // <select value={dimensionValue} onChange={(event)=> setDimensionValue({value: event.target.value})}>
    //         <option value="grapefruit">Grapefruit</option>
    //         <option value="lime">Lime</option>
    //         <option value="coconut">Coconut</option>
    //         <option value="mango">Mango</option>
    //       </select>
      <input
        type="name"
        value={value}
        onChange={(event) => onChange(createPatchFrom(event.target.value))}
        ref={itemPrice}
      />
    )}
