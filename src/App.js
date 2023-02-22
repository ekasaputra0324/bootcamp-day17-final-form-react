import React from "react";
import "./App.css";
import unsplash from "./unsplash";
import SearchBar from "./components/SeacrhBar";
import ImageList from "./components/ImageList";


class App extends React.Component {
state = {images: []};

onSearchSubmit = async (term) => {
  const response = await unsplash.get("/search/photos", {
    params : { query: term}
  });

  this.setState({ images: response.data.results  });
  console.log(response.data.results);
}
render() {
    return(
      <div className="ui container" style={{ marginTop: "10px" }}>
        <span>Found: {this.state.images.length}</span>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList foundImages={this.state.images}  />
      </div>
    )
  }  
}

export default App;
