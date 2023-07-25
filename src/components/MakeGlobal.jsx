import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setArray } from '../store/slices/makeGlobalSlices';

const GlobalArrayComponent = () => {
  const dispatch = useDispatch();
  const globalArray = useSelector((state) => state?.global);
  useEffect(() => {
    // Simulate fetching data and updating the global array
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
       console.log("data", data)

      dispatch(setArray(data)); // Dispatching the action to update the global array
    };

    fetchData();
  }, [dispatch]);



  return (
    <div>
      <h1>Global Array:</h1>
      <ul>
        {globalArray?.map((item) => (
          <li key={item.id}>{item?.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default GlobalArrayComponent;
