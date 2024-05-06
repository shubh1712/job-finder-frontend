// import React, { useState,useEffect  } from 'react';
// import { AiOutlineSearch } from 'react-icons/ai';
// import Link from '../components/Link';
// // import Search from '../components/Search';

// function Links() {
  
//    const [query, setQuery] = useState('');
//    const [data, setData] = useState([]);

//   const handleSearch = () => {
//     // Perform your search functionality here
//     alert("Searching for: " + query);
//   };

  
//   useEffect(() => {
//     // Fetch data from the endpoint when the component mounts
//     fetchData();
//   }, []); // Empty dependency array ensures that this effect runs only once, equivalent to componentDidMount

//   const fetchData = () => {
//     // Make a GET request to your endpoint
//     fetch('http://127.0.0.1:5000/get_chat_data')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         // Set the fetched data to the state
//         setData(data);
//         console.log(data.links)
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   };
//   return (
//     <div className="main">
//       <div className="containers">
//       <div className="search-container">
//           <input
//             type="text"
//             className="search-input"
//             placeholder="Search..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//           />
//           <AiOutlineSearch className="search-icon" onClick={handleSearch} />
//         </div>
//         <div className="links">
//           {
//             data.map((item,index)=>(
//               <Link key={index} linkData={item}/>
//             ))
//           }
          
//         </div>
//       </div>
//     </div>
//   );
  
// }

// export default Links;


import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Link from '../components/Link';
// import Search from '../components/Search';

function Links() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (searchQuery) => {
    // Update the query state
    setQuery(searchQuery);
  
    // Filter the data based on the search query
    const filteredResults = data.filter((item) => {
      // Check if the text or date matches the search query
      const textMatch = item.text.toLowerCase().includes(searchQuery.toLowerCase());
      const dateMatch = item.date.includes(searchQuery); // Assuming date is in the format 'YYYY-MM-DD'
  
      // Return true if either the text or date matches the search query
      return textMatch || dateMatch;
    });
    setFilteredData(filteredResults);
  };

  useEffect(() => {
    // Fetch data from the endpoint when the component mounts
    fetchData();
  }, []); // Empty dependency array ensures that this effect runs only once, equivalent to componentDidMount

  const fetchData = () => {
    // Make a GET request to your endpoint
    fetch('http://127.0.0.1:5000/get_chat_data')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Set the fetched data to the state
        setData(data);
        setFilteredData(data); // Initially, display all data
        console.log(data.links);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div className="main">
      <div className="containers">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search by company name ,package or date "
            value={query}
            onChange={(e) => handleSearch(e.target.value)} // Call handleSearch on input change
          />

          <AiOutlineSearch className="search-icon" onClick={() => handleSearch(query)} /> {/* Search on icon click */}
        </div>
        <p  style={{justifyContent:"center",display: "flex",color: 'grey'}}>{data.length} Results found</p> 
        <div className="links">
          {filteredData.map((item, index) => (
            <Link key={index} linkData={item} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Links;
