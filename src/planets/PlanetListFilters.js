import React from 'react';

export default class PlanetListFilters extends React.Component {

  render() {
    return (
      <div className="planet-list-filters">
        <div className="text-filter">
          <label>Search planet</label>
          <input id="filter" type="text" value={this.props.filter} onChange={this.props.setFilter} className="form-control"/>
        </div>
        <div className="sort-by">
          <label>Sort by</label>
          <select id="sort-by" value={this.props.sortBy} onChange={this.props.setSortBy} className="form-control-lg">
            <option value="name-a-to-z">Name: A to Z</option>
            <option value="name-z-to-a">Name: Z to A</option>
            <option value="population-high-to-low">Population: High to Low</option>
            <option value="population-low-to-high">Population: Low to High</option>
          </select>
        </div>
      </div>
    );
  }
} 