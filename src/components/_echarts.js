import React from 'react'
import ReactEcharts from 'echarts-for-react'

const Echart = props => {
  const getOptions = () => {
    return {
      title: {
        text: props.title,
        textStyle: {
          fontFamily: "Open Sans",
          color: "#FFFFFF"
        },
        label: {
          show: true,
          position: 'center'
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b} <br/> ${c}'
      },
      legend: {
        orient: 'vertical',
        x: 'right',
        y: 'top',
        data: props.data
      },
      series: [
        {
          name: 'NameInSeries',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: false,
              textStyle: {
                fontSize: '30px',
                fontWeight: 'bold',
              }
            }
          },
          labelLine: {
            normal: {
              show: true,
            }
          },
          data: props.data
        }
      ]
    };
  };
  return <ReactEcharts
            option={getOptions()}
            style={{height: '600px', width: '60%', marginLeft: 'auto', marginRight: 'auto'}}
            className='echarts-for-react'
            notMerge={true}
            lazyUpdate={false}
            showLoading={false}
          />;
};

export default Echart;
