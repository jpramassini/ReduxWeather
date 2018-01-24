import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import TempChart from '../components/tempchart';
import GoogleMap from '../components/googlemap';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const tempArray = cityData.list.map(weather => weather.main.temp);
    const pressureArray = cityData.list.map(weather => weather.main.pressure);
    const humidityArray = cityData.list.map(weather => weather.main.humidity);
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;

    return(
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><TempChart data={tempArray} color = {'#16BAC5'} strokeWidth = {2.75} units = {'°F'} /></td>
        <td><Chart data={pressureArray} color={'#C52233'} strokeWidth = {2.75} units = {'hPA'}/></td>
        <td><Chart data={humidityArray} color={'#4AD687'} strokeWidth = {2.75} units = {'%'}/></td>
      </tr>
    );
  }

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°F)</th>
            <th>Pressure (hPA)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);
