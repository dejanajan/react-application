import React, { useState, useEffect } from "react";
import { InputField } from "../../components/atoms/Input/Input.component";
import { Loader } from "../../components/molecules/Loader/Loader.component";
import { List } from "../../components/organisms/List/List.component";
import { PageContainer } from "../../components/templates/Page/Page.component";

import { Source } from '../../models/repos';
import { getRepos } from '../../service/api/repos-service'


export function filterList(dataReposList: any[], inputValue: string){
  return dataReposList.filter((item: any) => 
    item.name.includes(inputValue)
  );
}

function HomePage() {
    //dataReposList used define repos, setSearchReposData set array
    const [dataReposList, setSearchReposData] = useState<Source[] | any>([]);
    // inputValue keep track the change in the input field, setSearch saves the data from search input
    const [inputValue, setSearch] = useState<string>("");
    // status of loading data 
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        getRepos().then((repos: Source[] | undefined)=> {
            setSearchReposData(repos);
            setLoading(false);
        });
    }, []);
    
    if(loading){
      return <Loader />
    } 
  
    return (
      <PageContainer>
          <h1>GitHub Repositories</h1>
          
          <InputField value={inputValue} onChange={input => setSearch(input)} />
          <div>        
            <List list={filterList(dataReposList, inputValue)}/>
          </div>
      </PageContainer>
      );
    }
  
  export default HomePage;