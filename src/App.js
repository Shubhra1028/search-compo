import React from 'react';
import './App.css';
import { ReactiveBase, CategorySearch } from '@appbaseio/reactivesearch';


function App() {
  return (
    <div className="App">
      <ReactiveBase
          app="domain_data,bi_faq"
          credentials="elastic:YjFLqw3h8lDmJUC3KhlLcxOU"
          url="https://cors-anywhere.herokuapp.com/https://9d0cd00199224ccf8ffc6a672720c299.us-east-1.aws.found.io:9243/"
          headers={{ "Content-Type": "application/x-ndjson" }}
          transformResponse={(elasticsearchResponse) => {
            console.log(elasticsearchResponse.hits.hits);
            // this.setState({
            //   suggestions : elasticsearchResponse.hits.hits
            // }, ()=>{
            //   return elasticsearchResponse.hits.hits;
            // })
            return elasticsearchResponse.hits.hits;
          }}
			>
				<CategorySearch
              componentId="SearchSensor"
              dataField={["Questions^1.2", "Similar_Questions^1.0"]}
              categoryField="s"
          >
				{/* <div>Hello ReactiveSearch!</div> */}
        </CategorySearch>
			</ReactiveBase>
    </div>
  );
}

export default App;
