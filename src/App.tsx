import { ChangeEvent, useEffect, useState, useMemo } from 'react'
import './App.css'
import { Search } from 'lucide-react'
import { menuItems } from './mock/menuItems';
import { ListItem } from './components/ListItem';
import { debounce } from 'lodash';
import { ItemInfo } from './components/ItemInfo';
import { MenuItem } from './models';

function App() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
  const [searchValue, setSearchValue] = useState('');
  const filteredItems = useMemo(() => {
    return items.filter((item) => item.name?.toLowerCase().includes(searchValue.toLowerCase()))
  }, [searchValue, items])

  function handleItemClick(item: MenuItem) {
    if (selectedItem?.id === item.id) {
      setSelectedItem(null);
    } else {
      setSelectedItem(item);
    }
  }

  const debouncedOnChange = debounce((newValue) => {
    setSearchValue(newValue);
  }, 300)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    debouncedOnChange(newValue);
  };

  useEffect(() => {
    // I had to mock the data because the endpoint is throwing a cors error
    async function fetchMenuItems() {
      await fetch('https://cdn-dev.preoday.com/senior-fe-menu-challenge.json', { mode: 'no-cors' })
      setItems(menuItems);
    }

    fetchMenuItems();
  }, [])

  return (
    <section>
      <header>
        <Search width={24} height={24} color="#313131" />
        <input type="text" placeholder="Search items" onChange={handleChange} />
      </header>

      <main className="dashboard">
        {filteredItems.length ? (
          <ul>
            {filteredItems.map((menuItem) => {
              return <ListItem key={menuItem.id} menuItem={menuItem} handleClick={handleItemClick} isActive={selectedItem?.id === menuItem?.id} />
            })}
          </ul>
        ) : (
          <p className="empty-list-text">{items.length ? 'No items found' : 'List is empty'}</p>
        )}

        {selectedItem && (
          <ItemInfo key={selectedItem.id} selectedItem={selectedItem} onCloseInfo={() => setSelectedItem(null)} onSaveInfo={() => setSelectedItem(null)} />
        )}
      </main>
    </section>
  )
}

export default App
