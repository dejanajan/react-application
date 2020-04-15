import React, { useState, useEffect } from 'react';

function App() {
  //dataReposList used define repos, setSearchReposData set array
  const [dataReposList, setSearchReposData] = useState([]);
  // inputValue keep track the change in the input field, setSearch saves the data from search input
  const [inputValue, setSearch] = useState('');
  // status of loading data 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     (async function(){
      try {
        // get the API call
        const response = await fetch(
          `https://api.github.com/users/dejanajan/repos?per_page=10`
        );
        // API response in json format
        const responseJson = await response.json();
        // save the data from response
        setSearchReposData(responseJson);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

    //runs every time when there is a change
    const handleChangeInput = (event: { target: { value: string }; }) => {
      setSearch(event.target.value);
   }

  if(loading){
    return <p>Loading repos...</p>
  } 


  return (
      <div className="App">
        <h1>Hello world</h1>
        <div>
          <label htmlFor="filterRepos">Filter Repos</label><br/>
          <input type="text" id="filterRepos" value={inputValue} onChange={handleChangeInput} />
        </div>
        <div>
          <ul>
            {dataReposList.filter((item: any) => item.name.includes(inputValue))
            .map((item: { id: number; name: string; html_url: string}) => (
              <li key={item.id}>
                <a href={item.html_url}>{item.name}</a></li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

export default App;