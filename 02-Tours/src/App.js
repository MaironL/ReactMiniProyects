import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const remTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetching = async () => {
    try {
      const response = await fetch(url);
      const dataJson = await response.json();
      setLoading(false);
      setTours(dataJson);
    } catch (error) {
      setLoading(true);
    }
  };

  useEffect(() => {
    fetching();
  }, []);

  //*rendering
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  } else if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tour left</h2>
          <button className="btn" onClick={() => fetching()}>
            Refresh
          </button>
        </div>
      </main>
    );
  } else {
    return (
      <main>
        <Tours tours={tours} remTour={remTour} />
      </main>
    );
  }
}

export default App;
