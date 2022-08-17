import React, { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    //console.log("hi")
    fetch("/api") // cuz we added the full url in our json proxy.
      .then((respon) => respon.json())
      .then((data) => {
        setBackendData(data);
        //console.log(data);
      });
  }, []);
  const submitData = async () => {
    let element = document.getElementById("inp");
    let response = await fetch("/api", {
      method: "POST",
      body: JSON.stringify({ name: element.value }),
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <div>
      {typeof backendData === "undefined" ? (
        <p>Loading ...</p>
      ) : (
        backendData.map((user, i) => <p key={i}>{user.name}</p>) // remmber the refering object!
      )}
      <input id="inp"></input>
      <button className="btn" onClick={submitData}>
        press me
      </button>
    </div>
  );
  // in shirt : 'if what ever type of data inside this object is undefind display "loading..."
  // then just call my state and display some data'
}

export default App;
