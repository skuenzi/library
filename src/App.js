import Collections from "./Pages/Collections";
import starterCollections from './collections'
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {

  const [collections, setCollections] = useState(starterCollections);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="collections"
          element={
            <Collections
              collections={collections}
              setCollection={setCollections}

            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
