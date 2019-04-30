import React from 'react';
import {Doughnut} from 'react-chartjs-2';
 
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
              labels: res[1].votosConsolidado.map(c=> c.nome +' - '+ c.count),
              datasets: [{
                data: res[1].votosConsolidado.map(c=>c.count),
                backgroundColor: [
                randomHex(),//'#CCC',
                randomHex(),//'#FFCE56',
                randomHex(),//'#AAA384',
                randomHex(),//'#BBB384',
                randomHex(),//'#CCC384',
                randomHex(),//'#DDD384',
                randomHex(),//'#EEE384',
                randomHex(),//'#FFF384',
                randomHex(),//'#999384',
                randomHex(),//'#888384',
                randomHex(),//'#FFCE56'
                ]
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
        <h2>INFRACCIONES</h2>
        <Doughnut height={100} data={this.state.chartData} />
      </div>
    )
  }
}