import React from "react";




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
                        {/* <label>Imgae Seacrh</label> */}
                        <input
                        type="text"
                        value={this.state.term}
                        onChange={(e) => this.setState({term: e.target.value})}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;