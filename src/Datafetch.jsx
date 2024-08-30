import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      setData({ name: 'John Doe', age: 30 });
      setLoading(false);
    }, 2000);

    // Cleanup function (optional, used for cleanup like unsubscribing or clearing timers)
    return () => {
      console.log('Cleanup on unmount or before next effect run');
    };
  }, []); // The empty array makes this effect run only once after the initial render

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Fetched Data:</h1>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
    </div>
  );
}

export default DataFetcher;
