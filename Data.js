const BasicChart = {
    xAxis: {
      type: 'category',
      data: [2020,2021,2022,2023],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [58,65,27,45],
        type: 'bar',
        //name: 'Monthly Sales',
      },
    ],
  };


const Basicline = {
    xAxis: {
      type: 'category',
      data: [2020,2021,2022,2023],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [58,65,27,45],
        type: 'line',
        //name: 'Monthly Sales',
      },
    ],
  };
  

const BasicPie = {
    // title: {
    //     text: 'Pie Chart Example',
    //     left: 'center'
    //   },
      tooltip: {
        trigger: 'item'
      },
    //   legend: {
    //     orient: 'vertical',
    //     left: 'left'
    //   },
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
        //   emphasis: {
        //     itemStyle: {
        //       shadowBlur: 10,
        //       shadowOffsetX: 0,
        //       shadowColor: 'rgba(0, 0, 0, 0.5)'
        //     }
        //   }
        }
      ]
};

module.exports = {
    BasicChart,
    Basicline,
    BasicPie,
}