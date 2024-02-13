import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://randomuser.me/api/?page=1&results=1&seed=abc");
        setUserData(response.data.results[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {userData && (
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs">
          <img
            className="w-24 h-24 rounded-full mx-auto"
            src={userData.picture.large}
            alt="User"
          />
          <div className="text-center mt-4">
            <p className="text-lg font-semibold">
              {userData.name.first} {userData.name.last}
            </p>
            <p className="text-gray-600">{userData.gender}</p>
            <p className="mt-2">{userData.email}</p>
            <p className="mt-2">{userData.phone}</p>
            <p className="mt-2">{userData.location.city}, {userData.location.country}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
