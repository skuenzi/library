/* eslint-disable no-undef -- for google client library */
import Collections from "./Pages/Collections";
import starterCollections from "./collections";
import HomePage from "./Pages/HomePage";
import CurrentlyReading from "./Pages/CurrentlyReading";
import { Routes, Route, useNavigate, redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";

function App() {
  const [collections, setCollections] = useState(starterCollections);

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      let client = google.accounts.oauth2.initTokenClient({
        client_id:
          "29021350434-mnnd6r0295ciucsbamh5ndrdk3383ls9.apps.googleusercontent.com",
        scope: "https://www.googleapis.com/auth/books",
        callback: (tokenResponse) => {
          console.log(tokenResponse);
          localStorage.setItem("accessToken", tokenResponse.access_token);
        },
      });
      client.requestAccessToken();
    }
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/collections"
          element={
            <Collections
              collections={collections}
              setCollection={setCollections}
            />
          }
        />
        <Route path="/currentlyreading" element={<CurrentlyReading />} />
      </Routes>
    </div>
  );
}

export default App;
