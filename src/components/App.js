
import React from "react";
import './../styles/App.css';
import axios from "axios";
import { useState } from "react";
import 'regenerator-runtime/runtime';

const api= "https://reqres.in/api/users"

const App = () => {
  const [loading,setLoading]=useState(false);
  const [data,setData]=useState([]);
  const [success,setSuccess]=useState(false);
  const clicked=async ()=>{
    setLoading(true);
      try{
        const response=await axios.get(api);
        setLoading(false);
        // console.log(response.data.data);
        setData(response.data.data);
        setSuccess(true);
      }
      catch{
        setLoading(false);
      }
  };
  return (
    <div>
        <div className="header">
          <h1>Blue Whale</h1>
          <button onClick={clicked}>{
            loading?<p>Loading...</p>:<p>Get User List</p>}</button>
        </div>
        <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {success? (
            data.map((user) => (
              <tr key={user.id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>
                  <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No data found to display</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default App

// const App = () => {
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState([]);
//   const [error, setError] = useState('');

  // const clicked = async () => {
  //   setLoading(true);
  //   setError('');
  //   try {
  //     const response = await axios.get(api);
  //     setData(response.data.data); // reqres.in returns data in a 'data' field
  //     setLoading(false);
  //   } catch (error) {
  //     setError('Failed to fetch user data');
  //     setLoading(false);
  //   }
  // };

//   return (
//     <div>
//       <div className="header">
//         <h1>Blue Whale</h1>
//         <button className="btn" onClick={clicked}>
//           {loading ? 'Loading...' : 'Get User List'}
//         </button>
//       </div>
//       {error && <div className="error">{error}</div>}
      // <table>
      //   <thead>
      //     <tr>
      //       <th>First Name</th>
      //       <th>Last Name</th>
      //       <th>Email</th>
      //       <th>Avatar</th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //     {data.length > 0 ? (
      //       data.map((user) => (
      //         <tr key={user.id}>
      //           <td>{user.first_name}</td>
      //           <td>{user.last_name}</td>
      //           <td>{user.email}</td>
      //           <td>
      //             <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      //           </td>
      //         </tr>
      //       ))
      //     ) : (
      //       <tr>
      //         <td colSpan="4">No data found to display</td>
      //       </tr>
      //     )}
      //   </tbody>
      // </table>
//     </div>
//   );
// }

