const BasicPieChartData = {
    
      tooltip: {
        trigger: 'item'
      },
    
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 50, name: 'Resct Js' },
            { value: 12, name: 'Python' },
            { value: 8, name: 'HTML' },
            { value: 10, name: 'JS' },
            { value: 20, name: 'Django' }
          ]
        }
      ]
};


const DoughnutPieChartData = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Maths' },
          { value: 735, name: 'Science' },
          { value: 580, name: 'English' },
          { value: 484, name: 'SST' },
          { value: 300, name: 'Marathi' }
        ]
      }
    ]
  };



module.exports = {
    BasicPieChartData,
    DoughnutPieChartData,
}