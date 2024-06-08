/* eslint-disable no-undef -- for google client*/
import Collections from "./Pages/Collections";
import HomePage from "./Pages/HomePage";
import CurrentlyReading from "./Pages/CurrentlyReading";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "./Components/NavBar";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    if (!sessionStorage.getItem("accessToken")) {
      let client = google.accounts.oauth2.initTokenClient({
        client_id:
          "29021350434-mnnd6r0295ciucsbamh5ndrdk3383ls9.apps.googleusercontent.com",
        scope: "https://www.googleapis.com/auth/books",
        callback: (tokenResponse) => {
          sessionStorage.setItem("accessToken", JSON.stringify(tokenResponse));
        },
      });
      client.requestAccessToken();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/currentlyreading" element={<CurrentlyReading />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
