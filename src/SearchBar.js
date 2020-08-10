import React, { Component } from "react";
class SearchBar extends Component {
    state = {
        searchValue: '',
        meals: []
    };
    handleOnChange = event => {
        this.setState({ searchValue: event.target.value });
    };
    handleSearch = () => {
        this.makeApiCall(this.state.searchValue);
    }
    makeApiCall = searchInput => {
        var searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
        fetch(searchUrl)
        .then(response => {
        return response.json();
        })
        .then(jsonData => {
        console.log(jsonData.meals);
        this.setState({ meals: jsonData.meals });
        });
        };
render() {
    return (
    <div>
        <h1>Welcome to the search app</h1>
        <input name="text" type="text" placeholder="Search" onChange={event => this.handleOnChange(event)} value={this.state.searchValue} />
        <button onClick={this.handleSearch}>Search</button>
        {this.state.meals ? (
            <div>
            {this.state.meals.map((meal, index) => (
            <div className="show" key={index}>
            <h2>{meal.strMeal}</h2>
            </div>
            ))}
            </div>
            ) : (
            <p>Nothing found</p>
        )}
    </div>
    )}
}
export default SearchBar;