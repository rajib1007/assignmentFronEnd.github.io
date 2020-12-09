import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import { CartesianAxis } from 'recharts';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels: [1,2, 3, 4,5,6,7,8,9,10],
        
        datasets:[
          {
            label:'%',
            data:[
              50,
              100,
              200,
              300,
              400,
              500,
              600,
              700,
              800,
              1000,
              1200
            ],
            backgroundColor:[
              'rgba(77,5,232, 1)',
              'rgba(77,5,232, 1)',
              'rgba(77,5,232, 1)',
              'rgba(77,5,232, 1)',
              'rgba(77,5,232, 1)',
              'rgba(77,5,232, 1)',
              'rgba(77,5,232, 1)',
              'rgba(77,5,232, 1)',
              'rgba(77,5,232, 1)',
              'rgba(77,5,232, 1)'
            ]
          }
        ]
      }
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    //legendPosition:'right',
    legend: false,
    //location:'City'
    
  }

  render(){
    return (
      <div className="chart ">
        <Bar
          data={this.state.chartData}
          options={{
                scales:{
                  xAxes:[{
                    scaleLabel:{
                      display: true,
                      labelString:"No of years"
                    }

                  }],
                  yAxes:[{
                    scaleLabel:{
                      display: true,
                      labelString:"Asset Balance(In Lakhs)"
                    }

                  }]
                },
                title:{
                    display:true,
                    text:"Annual Projection",
                    fontSize: 15,
                    color: 'rgba(255,255,255, 0.6)',
                },
                legend:{
                    display: false,
                    
                },
                layout:{
                    padding:{
                        left:250,
                        right:250,
                        bottom:350,
                        top:0
                    },
                    
                    responsive:false

                    
                }


          }}
        />

        


      </div>
    )
  }
}

export default Chart;