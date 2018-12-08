var dom = document.getElementById("radar");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
           }
        },
        indicator: [
           { name: 'Node.js', max: 6500},
           { name: 'HTML5&CSS3', max: 16000},
           { name: 'JavaScript', max: 30000},
           { name: 'JQuery', max: 38000},
           { name: 'React.js', max: 52000},
           { name: 'Vue.js', max: 25000}
        ]
    },
    series: [{
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [4300, 14000, 28000, 33000, 40000, 22000],
            }
        ]
    }]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}