import React from 'react'
import ReactEcharts from 'echarts-for-react'

const Echart = props => {
  const getOptions = () => {
    return {
      title: {
        show: false,
        text: props.title,
        textStyle: {
          fontFamily: "Open Sans",
          fontSize: '30px',
          fontWeight: 'bold',
          left: 'auto',
          top: 'auto',
          right: 'auto',
          bottom: 'auto',
          color: "#32C59F"
        },
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
          name: props.savingsSum,
          type: 'pie',
          radius: ['40%', '60%'],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: 'center',
            formatter: "${a}",
            color: "#32C59F",
            fontWeight: "bold",
            fontFamily: "Open Sans",
            fontSize: "30"
          },
          data: props.data
        }
      ]
    };
  };
  return <ReactEcharts
            option={getOptions()}
            style={{height: '600px', width: '40%', marginLeft: 'auto', marginRight: 'auto'}}
            className='echarts-for-react'
            notMerge={true}
            lazyUpdate={false}
            showLoading={false}
          />;
};

export default Echart;
