import Listing from './components/Listing';

import itemsData from './data/itemsData.json';

function App() {
  const items = itemsData;
  return <Listing items={items} />;
}

export default App;
