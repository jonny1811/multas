import React from 'react';
import {Doughnut} from 'react-chartjs-2';

export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      chartData:{}
    }
  }

  callApi = async () => {
    const response = await fetch('http://143.255.143.102:3001/dashboard',{headers: {key: 'e9c4AtCp5khzw5Nt'}});
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
                '#CCC',
                '#FFCE56',
                '#AAA384',
                '#BBB384',
                '#CCC384',
                '#DDD384',
                '#EEE384',
                '#FFF384',
                '#999384',
                '#888384',
                '#FFCE56'
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
        <h2>Recuerdo General</h2>
        <Doughnut height={100} data={this.state.chartData} />
      </div>
    )
  }
}