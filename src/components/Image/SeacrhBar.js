import React from "react";



// seacrbar di gunakan untuk mencari gambar dengan key yang sudah di tentukan
class SearchBar extends React.Component {
    state = {term: ""}

    onFormSumit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    
    render(){
        return (
            <div className="ui Segment">
                <form onSubmit={this.onFormSumit} className="ui form">
                    <div className="filed">
                        <input
                        type="text"
                        value={this.state.term}
                        onChange={(e) => this.setState({term: e.target.value})}
                        placeholder="Search Images..."
                        />
                    </div>
                </form>      
            </div>
        )
    }
}

export default SearchBar;