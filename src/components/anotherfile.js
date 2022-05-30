import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './FormList.css';

const FormList = () => {

  const [list, setList] = useState([]);
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);

  function handleChange(e) {
    e.preventDefault();
        const fieldName = e.target.name;

        switch (fieldName) {
            case "product-name":
                setName(e.target.value);
                break;
            case "product-price":
                setPrice(e.target.value);
                break;
        }
  }

  function handleAdd() {
    const newList = list.concat({ name, price, id: uuidv4() });

    setList(newList);

    setName('');
    setPrice('');
  }

  return (
    <div>
      <AddItem
        name={name}
        price={price}
        onChange={handleChange}
        onAdd={handleAdd}
      />

      <List list={list} />
    </div>
  );
};

const AddItem = ({ name, price, onChange, onAdd }) => (
  <div className='Form'>
    <label>Product</label><input type="text" value={name} placeholder="Product Name" name="product-name" onChange={onChange} />
    <br/><br/>
    <label>Price</label><input type="number" value={price} placeholder="Product Price" name="product-price" onChange={onChange} />
    <button type="button" onClick={onAdd}>
      Add
    </button>
  </div>
);

const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <li key={item.id}>{item.name}, ${item.price}</li>
    ))}
  </ul>
);

export default FormList;