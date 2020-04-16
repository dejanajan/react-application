import React, { useState, useEffect } from 'react';
import { InputField } from "./components/atoms/Input/Input.component";
import { Loader } from "./components/molecules/Loader/Loader.component";
import { List } from "./components/organisms/List/List.component";
import { PageContainer } from "./components/templates/Page/Page.component";


function App() {
  //dataReposList used define repos, setSearchReposData set array
  const [dataReposList, setSearchReposData] = useState([]);
  // inputValue keep track the change in the input field, setSearch saves the data from search input
  const [inputValue, setSearch] = useState<string>("");
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


  if(loading){
    return <Loader />
  } 


  return (
    <PageContainer>
        <h1>GitHub Repositories</h1>
        
        <InputField value={inputValue} onChange={input => setSearch(input)} />
        <div>
          <List list={dataReposList} inputValue={inputValue}/>
        </div>
    </PageContainer>
    );
  }

export default App;