import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import MyContext from './myContext';
import { fireDB } from '../firebase/firebaseConfig';
fireDB

function MyState({ children }) {
  // Loading State 
  const [loading, setLoading] = useState(false);

  // User State
  const [getAllUsers, setGetAllUsers] = useState([]);

  /**========================================================================
   *========================================================================**/

  const getAllUsersFunction = async () => {
      setLoading(true);
      try {
          const q = query(
              collection(fireDB, "user"),
              orderBy('time')
          );
          const data = onSnapshot(q, (QuerySnapshot) => {
              let userArray = [];
              QuerySnapshot.forEach((doc) => {
                  userArray.push({ ...doc.data(), id: doc.id });
              });
              setGetAllUsers(userArray);
              setLoading(false);
          });
          return () => data;
      } catch (error) {
          console.log(error);
          setLoading(false);
      }
  };

  useEffect(() => {
      getAllUsersFunction();
  }, []);

  return (
      <MyContext.Provider value={{
          loading,
          setLoading,
          getAllUsers,
          getAllUsersFunction
      }}>
          {children}
      </MyContext.Provider>
  );
}

export default MyState;