/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";

const DataFetchingComponent = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
        );
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts or when userId changes

    // If you want to clean up any resources when the component unmounts or when userId changes, return a cleanup function
    return () => {
      // Cleanup logic (if needed)
    };
  }, [userId]); // Dependency array - useEffect will re-run if userId changes

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>User Data:</h2>
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default DataFetchingComponent;
