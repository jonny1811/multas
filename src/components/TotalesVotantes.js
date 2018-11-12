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
              labels: ['Totales - '+res[0].geral[0].total, 'Votantes - '+res[0].geral[0].votantes],
              datasets: [{
                data: [res[0].geral[0].total, res[0].geral[0].votantes],
                backgroundColor: [
                '#CCC',
                '#FFCE56'
                ],
                hoverBackgroundColor: [
                '#FF6384',
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
        <h2>Totales</h2>
        <Doughnut height={100} data={this.state.chartData} />
      </div>
    )
  }
}