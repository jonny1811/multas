import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

const options = {
  legend: {
      display: false,
  },
  scales: {
    xAxes: [{
      ticks: {
        beginAtZero: true,
        callback: function(value) {if (value % 1 === 0) {return value;}}
      }
    }]
  }
}

function randomHex(){
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      chartData:{}
    }
  }

  callApi = async () => {
    const response = await fetch('http://localhost:3001/dashboard',{headers: {key: 'e9c4AtCp5khzw5Nt'}});
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body.data;
  }
  
  componentWillMount() {this.getChartData();}

  getChartData(){
      this.callApi().then(res => 
        {
          this.setState({ 
            chartData: {
              labels: res[9].senadores.map(c=>c.apelido),
              datasets: [{
                backgroundColor: [randomHex(), randomHex(), randomHex(), randomHex(), randomHex(), randomHex()] ,
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: '#AAA384',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: res[9].senadores.map(c=>c.total)
              }]
            }
          })
        }
      )
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h2>Siniestros de Tránsito</h2>
        <HorizontalBar height={100} options={options} data={this.state.chartData} />
      </div>
    )
  }
}