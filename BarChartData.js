const BasicBarChartData = {
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


const StackedHorizontalBarChartData = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    series: [
      {
        name: 'Maths',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [301, 302, 303, 304, 305, 300, 290]
      },
      {
        name: 'Science',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'English',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'SST',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [150, 212, 201, 154, 190, 330, 410]
      },
      {
        name: 'Marathi',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [820, 832, 901, 934, 1290, 1330, 1320]
      }
    ]
  };


const WaterfallBarChartData = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function (params) {
        var tar = params[1];
        return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      splitLine: { show: false },
      data: ['Total', 'Rent', 'Utilities', 'Transportation', 'Meals', 'Other']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Placeholder',
        type: 'bar',
        stack: 'Total',
        itemStyle: {
          borderColor: 'transparent',
          color: 'transparent'
        },
        emphasis: {
          itemStyle: {
            borderColor: 'transparent',
            color: 'transparent'
          }
        },
        data: [0, 1700, 1400, 1200, 300, 0]
      },
      {
        name: 'Life Cost',
        type: 'bar',
        stack: 'Total',
        label: {
          show: true,
          position: 'inside'
        },
        data: [2900, 1200, 300, 200, 900, 300]
      }
    ]
  };

const NegativeValueBarChartData = {
    
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      top: 80,
      bottom: 30
    },
    xAxis: {
      type: 'value',
      position: 'top',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
    },
    yAxis: {
      type: 'category',
      axisLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      data: [
        'ten',
        'nine',
        'eight',
        'seven',
        'six',
        'five',
        'four',
        'three',
        'two',
        'one'
      ]
    },
    series: [
      {
        name: 'Cost',
        type: 'bar',
        stack: 'Total',
        label: {
          show: true,
          formatter: '{b}'
        },
        data: [
          { value: -0.07, label: "labelRight" },
          { value: -0.09, label: "labelRight" },
          0.2,
          0.44,
          { value: -0.23, label: "labelRight" },
          0.08,
          { value: -0.17, label: "labelRight" },
          0.47,
          { value: -0.36, label: "labelRight" },
          0.18
        ]
      }
    ]
  };


module.exports = {
    BasicBarChartData,
    StackedHorizontalBarChartData,
    WaterfallBarChartData,
    NegativeValueBarChartData
}