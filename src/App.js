import Collections from "./Pages/Collections";
import starterCollections from "./collections";
import HomePage from "./Pages/HomePage";
import CurrentlyReading from "./Pages/CurrentlyReading";
import { Routes, Route, useNavigate, redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import * as jose from "jose";
import NavBar from "./Components/NavBar";

function App() {
  const [collections, setCollections] = useState(starterCollections);
  const [authKey, setAuthKey] = useState(
    localStorage.getItem("oauth2-test-params") || ""
  );
  const navigate = useNavigate();

  const oauthSignIn = () => {
    debugger;
    if (localStorage.getItem("oauth2-test-params")) {
      console.log(
        "already got a key",
        localStorage.getItem("oauth2-test-params")
      );
      navigate("/home");
      return;
    }

    // eslint-disable-next-line no-restricted-globals
    const fragmentString = location.hash.substring(1);

    if (fragmentString) {
      let p = {};
      let regex = /([^&=]+)=([^&]*)/g,
        m;
      while ((m = regex.exec(fragmentString))) {
        p[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
      }
      if (Object.keys(p).length > 0) {
        localStorage.setItem("oauth2-test-params", JSON.stringify(p));
      }
    }

    const oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";

    const form = document.createElement("form");
    form.setAttribute("method", "GET");
    form.setAttribute("action", oauth2Endpoint);

    const params = {
      client_id:
        "29021350434-mnnd6r0295ciucsbamh5ndrdk3383ls9.apps.googleusercontent.com",
      redirect_uri: "http://localhost:3000/library/",
      response_type: "token",
      scope: "https://www.googleapis.com/auth/books",
      include_granted_scopes: "true",
      state: "pass-through value",
    };

    for (var p in params) {
      var input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", p);
      // @ts-ignore
      input.setAttribute("value", params[p]);
      form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
  };

  useEffect(() => {
    oauthSignIn();
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
