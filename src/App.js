import { useEffect, useState } from 'react';
import Table from './Table';

function App() {
  const [items, setItems] = useState({});

  useEffect(() => {
    const request = () =>
      fetch(`http://localhost:8081/temperatures`)
        .then((response) => response.json())
        .then((response) => setItems((prevItems) => ({ ...prevItems, ...response }))
      );

    setInterval(request, 5000);

    request();
  }, []);

  return (
    <div className="App">
      <h2>Beers</h2>
      <Table
       columns={[
         { name: 'Product', field: 'name' },
         { name: 'Temperature', field: 'temperature' },
         { name: 'Status', field: 'status' },
        ]}
        items={items}
      />
    </div>
  );
}

export default App;
