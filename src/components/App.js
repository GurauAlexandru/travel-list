import { useState } from 'react';

import Logo from './Logo.js';
import Form from './Form.js';
import PackingList from './PackingList.js';
import Stats from './Stats.js';

function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => setItems((items) => [...items, item]);

  const handleDeleteItem = (id) =>
    setItems((items) => items.filter((item) => item.id !== id));

  const handleToggleItem = (id) =>
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );

  const handleClearList = () =>
    window.confirm('Are you sure you want to delete all items?') &&
    setItems([]);

  return (
    <div className='app'>
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        handleToggleItem={handleToggleItem}
        handleClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
