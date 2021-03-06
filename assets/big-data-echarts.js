function townLayout() {

    $.getJSON("nzs.json", function (data) {
        echarts.registerMap('HK', data);

        var e = echarts.init(document.getElementById("province-towns-amount"));

        var geoCoordMap = {
            "碾子山区政府": [122.894136, 47.523318],
            "奥悦碾子山国际滑雪场": [122.853716, 47.548165],
            "碾子山站": [122.889829, 47.521966],
            "客运站": [122.903747, 47.516209],
            "金长城遗址公园": [122.872062, 47.684459],
            "重山园": [122.893449, 47.528754],
            "世纪广场": [122.89816, 47.52293],
            "雅鲁河": [122.891787, 47.490317],
            "蛇仙洞": [122.860041, 47.56056],
            "军工旅游区": [122.896275, 47.524308]
        };

        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }

            for (var i = 0; i < res.length; i++) {
                console.log("res[" + i + "]===" + res[i].name);
                console.log("res[" + i + "]===" + res[i].value);
            }
            return res;
        };


        option = {

            backgroundColor: '#404a59',
            // title: {
            //     text: '碾子山景点分布图',
            //     x:'center',
            //     textStyle: {
            //         color: '#fff'
            //     }
            // },
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    return params.name + ' : ' + params.value[2];
                }
            },
            legend: {
                orient: 'vertical',
                y: 'bottom',
                x: 'right',
                data: ['pm2.5'],
                textStyle: {
                    color: '#fff'
                }
            },
            visualMap: {
                min: 0,
                max: 200,
                calculable: true,
                inRange: {
                    color: ['#50a3ba', '#eac736', '#d94e5d']
                },
                textStyle: {
                    color: '#fff'
                }
            },
            geo: {
                map: 'HK',
                zoom: 1.16,
                roam: true,
                // center:[122.93303,47.58376],
                label: {
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: '#323c48',
                        borderColor: '#111'
                    },
                    emphasis: {
                        areaColor: '#2a333d'
                    }
                }
            },
            series: [
                {

                    // zoom:1.5,
                    name: '香港18区人口密度',

                    type: 'scatter',
                    coordinateSystem: 'geo',
                    itemStyle: {
                        normal: {label: {show: true}},
                        emphasis: {label: {show: true}}
                    },
                    data: convertData([
                        {name: "碾子山区政府", value: 99},
                        {name: "奥悦碾子山国际滑雪场", value: '奥悦碾子山国际滑雪场'},
                        {name: "金长城遗址公园", value: 10},
                        {name: "碾子山站", value: 30},
                        {name: "客运站", value: 50},
                        {name: "重山园", value: 70},
                        {name: "世纪广场", value: 90},
                        {name: "雅鲁河", value: 110},
                        {name: "蛇仙洞", value: 130},
                        {name: "军工旅游区", value: 150}
                    ]),
                    symbolSize: 10,
                    label: {
                        normal: {
                            show: true,
                            position: [10, 10],
                            formatter: function (convertData) {
                                console.log(convertData.name);
                                return convertData.name;
                            }
                        },
                        emphasis: {
                            show: true
                        }
                    }
                }
            ]
        }, e.setOption(option)
    })

}
function chinaTownNumber() {
    var e = echarts.init(document.getElementById("province-towns-amount"));
    option = {
        xAxis: {
            type: 'category',
            data: ['碾子山', '旅游', '风景', '滑雪', '越野', '自行车', '马拉松', '石碑山', '蛇洞山', '雅鲁河'],
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            }
        },
        series: [{
            data: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
            barWidth: 40,//柱图宽度
            itemStyle: {
                normal: {
                    color: function (params) {
                        var colorList = [
                            ['#C33531', '#EFE42A', '#64BD3D', '#EE9201', '#29AAE3',
                                '#B74AE5', '#0AAF9F', '#E89589', '#0AAF9F', '#E89589'],
                            ['#483D8B', '#556B2F', '#F0FFF0', '#EE9201', '#29AAE3',
                                '#B74AE5', '#0AAF9F', '#E89589', '#0AAF9F', '#E89589']
                        ];
                        return new echarts.graphic.LinearGradient(0, 0, 0, 1,

                            [
                                {offset: 0, color: colorList[0][params.dataIndex]},
                                {offset: 1, color: colorList[1][params.dataIndex]}
                            ]);
                    },
                    barBorderRadius: 5  //柱状角成椭圆形
                }
            },
            type: 'bar'
        }],
        label: {
            normal: {
                show: true,
                position: 'inside',
                textStyle: {
                    color: '#fff'
                }
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#283b56'
                }
            }
        },
        toolbox: {
            show: true,
            feature: {
                dataView: {readOnly: false},
                saveAsImage: {}
            }
        },
    }, e.setOption(option)
}
//近一天
function chinaTownNumberY() {
    var e = echarts.init(document.getElementById("province-towns-amount"));
    option = {
        xAxis: {
            type: 'category',
            data: ['碾子山', '旅游', '风景', '滑雪', '越野', '自行车', '马拉松', '石碑山', '蛇洞山', '雅鲁河']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [1, 2, 3, 4, 5, 5, 4, 3, 2, 1],
            itemStyle: {
                normal: {
                    color: function (params) {
                        var colorList = [
                            ['#C33531', '#EFE42A', '#64BD3D', '#EE9201', '#29AAE3',
                                '#B74AE5', '#0AAF9F', '#E89589', '#0AAF9F', '#E89589'],
                            ['#483D8B', '#556B2F', '#F0FFF0', '#EE9201', '#29AAE3',
                                '#B74AE5', '#0AAF9F', '#E89589', '#0AAF9F', '#E89589']
                        ];
                        return new echarts.graphic.LinearGradient(0, 0, 0, 1,

                            [
                                {offset: 0, color: colorList[0][params.dataIndex]},
                                {offset: 1, color: colorList[1][params.dataIndex]}
                            ]);
                    },
                    barBorderRadius: 5  //柱状角成椭圆形
                }
            },
            type: 'bar',
            barWidth: 40//柱图宽度
        }]
    }, e.setOption(option)
}
////近一月
function chinaTownNumberN() {
    var e = echarts.init(document.getElementById("province-towns-amount"));
    option = {
        xAxis: {
            type: 'category',
            data: ['碾子山', '旅游', '风景', '滑雪', '越野', '自行车', '马拉松', '石碑山', '蛇洞山', '雅鲁河']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            itemStyle: {
                normal: {
                    color: function (params) {
                        var colorList = [
                            ['#C33531', '#EFE42A', '#64BD3D', '#EE9201', '#29AAE3',
                                '#B74AE5', '#0AAF9F', '#E89589', '#0AAF9F', '#E89589'],
                            ['#483D8B', '#556B2F', '#F0FFF0', '#EE9201', '#29AAE3',
                                '#B74AE5', '#0AAF9F', '#E89589', '#0AAF9F', '#E89589']
                        ];
                        return new echarts.graphic.LinearGradient(0, 0, 0, 1,

                            [
                                {offset: 0, color: colorList[0][params.dataIndex]},
                                {offset: 1, color: colorList[1][params.dataIndex]}
                            ]);
                    },
                    barBorderRadius: 5  //柱状角成椭圆形
                }
            },
            type: 'bar',
            barWidth: 40//柱图宽度
        }]
    }, e.setOption(option)
}

//旅游热点 景点排行
function felling() {
    var e = echarts.init(document.getElementById("public-sentiment-1"));
    option = {
        yAxis: {
            type: 'category',
            data: ['奥越滑雪场', '世纪广场', '文化宫', '蛇洞山', '重山园', '雅鲁河'],
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            }
        },
        xAxis: {
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            }
        },
        series: [{
            data: [10, 9, 8, 7, 6, 5],
            barWidth: 40,//柱图宽度
            itemStyle: {
                normal: {
                    color: function (params) {
                        var colorList = [
                            ['#C33531', '#EFE42A', '#64BD3D', '#EE9201', '#29AAE3',
                                '#B74AE5', '#0AAF9F', '#E89589', '#0AAF9F', '#E89589'],
                            ['#483D8B', '#556B2F', '#F0FFF0', '#EE9201', '#29AAE3',
                                '#B74AE5', '#0AAF9F', '#E89589', '#0AAF9F', '#E89589']
                        ];
                        return new echarts.graphic.LinearGradient(0, 0, 0, 1,

                            [
                                {offset: 0, color: colorList[0][params.dataIndex]},
                                {offset: 1, color: colorList[1][params.dataIndex]}
                            ]);
                    },
                    barBorderRadius: 5  //柱状角成椭圆形
                }
            },
            type: 'bar'
        }],
        label: {
            normal: {
                show: true,
                position: 'inside',
                textStyle: {
                    color: '#fff'
                }
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#283b56'
                }
            }
        },
        toolbox: {
            show: true,
            feature: {
                dataView: {readOnly: false},
                saveAsImage: {}
            }
        },
    }, e.setOption(option)
}
function fellingY() {
    var e = echarts.init(document.getElementById("public-sentiment-1"));
    option = {
        yAxis: {
            type: 'category',
            data: ['奥越滑雪场', '世纪广场', '文化宫', '蛇洞山', '重山园', '雅鲁河'],
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            }
        },
        xAxis: {
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            }
        },
        series: [{
            data: [5, 6, 8, 7, 6, 5],
            barWidth: 40,//柱图宽度
            itemStyle: {
                normal: {
                    color: function (params) {
                        var colorList = [
                            ['#C33531', '#EFE42A', '#64BD3D', '#EE9201', '#29AAE3',
                                '#B74AE5', '#0AAF9F', '#E89589', '#0AAF9F', '#E89589'],
                            ['#483D8B', '#556B2F', '#F0FFF0', '#EE9201', '#29AAE3',
                                '#B74AE5', '#0AAF9F', '#E89589', '#0AAF9F', '#E89589']
                        ];
                        return new echarts.graphic.LinearGradient(0, 0, 0, 1,

                            [
                                {offset: 0, color: colorList[0][params.dataIndex]},
                                {offset: 1, color: colorList[1][params.dataIndex]}
                            ]);
                    },
                    barBorderRadius: 5  //柱状角成椭圆形
                }
            },
            type: 'bar'
        }],
        label: {
            normal: {
                show: true,
                position: 'inside',
                textStyle: {
                    color: '#fff'
                }
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#283b56'
                }
            }
        },
        toolbox: {
            show: true,
            feature: {
                dataView: {readOnly: false},
                saveAsImage: {}
            }
        },
    }, e.setOption(option)
}
function fellingN() {
    var e = echarts.init(document.getElementById("public-sentiment-1"));
    option = {
        yAxis: {
            type: 'category',
            data: ['奥越滑雪场', '世纪广场', '文化宫', '蛇洞山', '重山园', '雅鲁河'],
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            }
        },
        xAxis: {
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            }
        },
        series: [{
            data: [5, 9, 8, 7, 6, 5],
            barWidth: 40,//柱图宽度
            itemStyle: {
                normal: {
                    color: function (params) {
                        var colorList = [
                            ['#C33531', '#EFE42A', '#64BD3D', '#EE9201', '#29AAE3',
                                '#B74AE5', '#0AAF9F', '#E89589', '#0AAF9F', '#E89589'],
                            ['#483D8B', '#556B2F', '#F0FFF0', '#EE9201', '#29AAE3',
                                '#B74AE5', '#0AAF9F', '#E89589', '#0AAF9F', '#E89589']
                        ];
                        return new echarts.graphic.LinearGradient(0, 0, 0, 1,

                            [
                                {offset: 0, color: colorList[0][params.dataIndex]},
                                {offset: 1, color: colorList[1][params.dataIndex]}
                            ]);
                    },
                    barBorderRadius: 5  //柱状角成椭圆形
                }
            },
            type: 'bar'
        }],
        label: {
            normal: {
                show: true,
                position: 'inside',
                textStyle: {
                    color: '#fff'
                }
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#283b56'
                }
            }
        },
        toolbox: {
            show: true,
            feature: {
                dataView: {readOnly: false},
                saveAsImage: {}
            }
        },
    }, e.setOption(option)
}



function scale() {
    var e = echarts.init(document.getElementById("town-build-scale"));
    option = {
        color: ["#35ac84", "#2b5cee"],
        title: {text: "", x: "center", textStyle: {color: "#fff"}},
        tooltip: {
            trigger: "axis", alwaysShowContent: !0, showDelay: 0, formatter: function (e) {
                return e.value.length > 1 ? e.seriesName + " :<br/>规划面积:" + e.value[0] + "km² &nbsp;&nbsp;建设面积:" + e.value[1] + "km² " : e.seriesName + " :<br/>" + e.name + " : " + e.value + "km² "
            }, axisPointer: {show: !0, type: "cross", lineStyle: {type: "dashed", width: 1}}
        },
        toolbox: {show: !1, feature: {dataZoom: {}, brush: {type: ["rect", "polygon", "clear"]}}},
        brush: {},
        xAxis: [{
            type: "value",
            name: "规划面积",
            scale: !0,
            axisLabel: {formatter: "{value} km²"},
            splitLine: {show: !1},
            axisLine: {lineStyle: {color: "#a7a7a7"}}
        }],
        yAxis: [{
            type: "value",
            name: "建设面积",
            scale: !0,
            axisLabel: {formatter: "{value} km²"},
            splitLine: {show: !1},
            axisLine: {lineStyle: {color: "#a7a7a7"}}
        }],
        series: [{name: "安吉天使小镇", type: "scatter", data: [[3.17, 1]]}, {
            name: "滨江物联网小镇",
            type: "scatter",
            data: [[3.66, 1]]
        }, {name: "苍南台商小镇", type: "scatter", data: [[2.7, 1]]}, {
            name: "常山赏石小镇",
            type: "scatter",
            data: [[3, 1]]
        }, {name: "德清地理信息小镇", type: "scatter", data: [[3.6, 1]]}, {
            name: "定海远洋渔业小镇",
            type: "scatter",
            data: [[3.18, 1]]
        }, {name: "东阳木雕小镇", type: "scatter", data: [[4, 1]]}, {
            name: "富阳硅谷小镇",
            type: "scatter",
            data: [[3.1, 1]]
        }, {name: "富阳药谷小镇", type: "scatter", data: [[3.62, .75]]}, {
            name: "拱墅运河财富小镇",
            type: "scatter",
            data: [[3.3, 1]]
        }, {name: "海宁皮革时尚小镇", type: "scatter", data: [[3.5, .45]]}, {
            name: "海盐核电小镇",
            type: "scatter",
            data: [[3.25, 1]]
        }, {name: "杭州湾花田小镇", type: "scatter", data: [[3.4, 1]]}, {
            name: "杭州湾新区滨海欢乐假期小镇",
            type: "scatter",
            data: [[4.22, 1]]
        }, {name: "湖州丝绸小镇", type: "scatter", data: [[6.38, .95]]}, {
            name: "黄岩智能模具小镇",
            type: "scatter",
            data: [[3.47, 1]]
        }, {name: "嘉善巧克力甜蜜小镇", type: "scatter", data: [[3.17, 1]]}, {
            name: "嘉兴马家浜健康食品小镇",
            type: "scatter",
            data: [[3.05, 1]]
        }, {name: "建德航空小镇", type: "scatter", data: [[3.1, 1]]}, {
            name: "江北动力小镇",
            type: "scatter",
            data: [[3.3, 1.5]]
        }, {name: "江干丁兰智慧小镇", type: "scatter", data: [[2.5, 1.3]]}, {
            name: "江山光谷小镇",
            type: "scatter",
            data: [[3.51, 1]]
        }, {name: "金华新能源汽车小镇", type: "scatter", data: [[3.6, 1]]}, {
            name: "缙云机床小镇",
            type: "scatter",
            data: [[3.56, 1]]
        }, {name: "景宁畲乡小镇", type: "scatter", data: [[3.9, 1]]}, {
            name: "开化根缘小镇",
            type: "scatter",
            data: [[3.78, 1.12]]
        }, {name: "柯桥酷玩小镇", type: "scatter", data: [[3.7, 1]]}, {
            name: "莲都古堰画乡小镇",
            type: "scatter",
            data: [[3.91, 1]]
        }, {name: "临安云制造小镇", type: "scatter", data: [[3.17, 1]]}, {
            name: "龙泉宝剑小镇",
            type: "scatter",
            data: [[3, 1]]
        }, {name: "龙泉青瓷小镇", type: "scatter", data: [[3.21, 1.36]]}, {
            name: "龙游红木小镇",
            type: "scatter",
            data: [[3.5, 1.48]]
        }, {name: "路桥沃尔沃小镇", type: "scatter", data: [[6.9, 2.23]]}, {
            name: "梅山海洋金融小镇",
            type: "scatter",
            data: [[3.5, 1]]
        }, {name: "南湖基金小镇", type: "scatter", data: [[2.04, 1]]}, {
            name: "南浔善琏湖笔小镇",
            type: "scatter",
            data: [[4.08, 3.39]],
            markArea: {
                silent: !0,
                itemStyle: {normal: {color: "transparent", borderWidth: 1, borderType: "dashed"}},
                data: [[{name: "标准建设规模分布区间", xAxis: "2.75", yAxis: "0.75"}, {xAxis: "3.5", yAxis: "1.25"}]]
            }
        }, {
            name: "平均值",
            type: "scatter",
            silent: !0,
            data: [[3, 1]],
            markLine: {lineStyle: {normal: {type: "solid"}}, data: [{xAxis: 3}, {yAxis: 1}]}
        }, {name: "宁海智能汽车小镇", type: "scatter", data: [[3.47, 1.5]]}, {
            name: "瓯海生命健康小镇",
            type: "scatter",
            data: [[3.5, .9]]
        }, {name: "瓯海时尚智造小镇", type: "scatter", data: [[3, .77]]}, {
            name: "磐安江南药镇",
            type: "scatter",
            data: [[4, 1]]
        }, {name: "平湖九龙山航空运动小镇", type: "scatter", data: [[3.45, 1.05]]}, {
            name: "平阳宠物小镇",
            type: "scatter",
            data: [[3.3, 1]]
        }, {name: "普陀沈家门渔港小镇", type: "scatter", data: [[4.75, 1]]}, {
            name: "青田石雕小镇",
            type: "scatter",
            data: [[3.3, 1]]
        }, {name: "庆元香菇小镇", type: "scatter", data: [[3.57, 1]]}, {
            name: "衢州循环经济小镇",
            type: "scatter",
            data: [[2.7, 1]]
        }, {name: "上城玉皇山南基金小镇", type: "scatter", data: [[3.2, 1]]}, {
            name: "上虞e游小镇",
            type: "scatter",
            data: [[2.8, 1]]
        }, {name: "松阳茶香小镇", type: "scatter", data: [[3.5, .84]]}, {
            name: "天台天台山和合小镇",
            type: "scatter",
            data: [[3.5, 1]]
        }, {name: "天子岭静脉小镇", type: "scatter", data: [[3.8, 1]]}, {
            name: "桐庐健康小镇",
            type: "scatter",
            data: [[2.6, 1]]
        }, {name: "桐庐智慧安防小镇", type: "scatter", data: [[3.48, 1]]}, {
            name: "桐乡毛衫时尚小镇",
            type: "scatter",
            data: [[3.6, 1.5]]
        }, {name: "桐乡乌镇互联网小镇", type: "scatter", data: [[3.13, 1]]}, {
            name: "温岭泵业智造小镇",
            type: "scatter",
            data: [[3.6, 1]]
        }, {name: "文成森林氧吧小镇", type: "scatter", data: [[5.2, 1]]}, {
            name: "吴兴美妆小镇",
            type: "scatter",
            data: [[3.5, 1]]
        }, {name: "武义温泉小镇", type: "scatter", data: [[3.8, 1]]}, {
            name: "西湖龙坞茶镇",
            type: "scatter",
            data: [[3.2, 1.4]]
        }, {name: "西湖艺创小镇", type: "scatter", data: [[3.5, 1]]}, {
            name: "西湖云栖小镇",
            type: "scatter",
            data: [[3.5, 1]]
        }, {name: "下城跨贸小镇", type: "scatter", data: [[3.58, 1]]}, {
            name: "仙居神仙氧吧小镇",
            type: "scatter",
            data: [[5, 1]]
        }, {name: "萧山信息港小镇", type: "scatter", data: [[3.12, 1]]}, {
            name: "新昌智能装备小镇",
            type: "scatter",
            data: [[3.46, 1]]
        }, {name: "秀洲光伏小镇", type: "scatter", data: [[2.9, 1.99]]}, {
            name: "义乌丝路金融小镇",
            type: "scatter",
            data: [[3.8, 1]]
        }, {name: "鄞州四明金融小镇", type: "scatter", data: [[3, 1]]}, {
            name: "永康赫灵方岩小镇",
            type: "scatter",
            data: [[3.1, 1.1]]
        }, {name: "余杭梦栖小镇", type: "scatter", data: [[2.96, .75]]}, {
            name: "余杭梦想小镇",
            type: "scatter",
            tooltip: {alwaysShowContent: !0},
            data: [[3, 1]]
        }, {name: "余杭艺尚小镇", type: "scatter", data: [[3, 1]]}, {
            name: "余姚模客小镇",
            type: "scatter",
            data: [[3.32, 1]]
        }, {name: "越城黄酒小镇", type: "scatter", data: [[4.6, 1.23]]}, {
            name: "长兴新能源小镇",
            type: "scatter",
            data: [[3.3, 1.2]]
        }, {name: "朱家尖禅意小镇", type: "scatter", data: [[3.8, 2.38]]}, {
            name: "诸暨袜艺小镇",
            type: "scatter",
            data: [[2.98, 1]]
        }]
    }, e.setOption(option)
}
function economyIndustry() {
    function e(e, t) {
        economy2(e, t)
    }

    var t = echarts.init(document.getElementById("economy-list"));
    option = {
        width: "900",
        title: {
            text: "",
            x: "center",
            y: "top",
            textStyle: {color: "#fff", fontFamily: "微软雅黑", fontSize: 18, fontWeight: "bolder"}
        },
        tooltip: {trigger: "axis", axisPointer: {type: "shadow"}, textStyle: {color: "#fff"}},
        legend: {x: "left", y: "bottom", data: ["拟投资额"], textStyle: {color: "#fff"}},
        grid: {
            left: "2%",
            right: "4%",
            bottom: "3%",
            containLabel: !0,
            backgroundColor: "red",
            textStyle: {color: "#fff"}
        },
        xAxis: {
            type: "value",
            name: "单位（亿元）",
            nameGap: 16,
            nameTextStyle: {color: "#a7a7a7", fontSize: 14},
            axisLine: {lineStyle: {color: "#a7a7a7"}}
        },
        yAxis: {type: "category", data: [], textStyle: {color: "#fff"}, axisLine: {lineStyle: {color: "#a7a7a7"}}},
        series: [{
            name: "拟投资额 (单位：亿元)",
            type: "bar",
            stack: "总量",
            label: {normal: {show: !0, position: "insideRight"}},
            tooltip: {
                trigger: "item", formatter: function (e) {
                    if ("bar" != e.componentSubType) {
                        var t = e.value.toString().split(",");
                        return "  " + e.name + "拟投资额: " + t[2] + "亿"
                    }
                    return "  " + e.name + "拟投资额: " + e.value + "亿"
                }
            },
            itemStyle: {
                normal: {
                    color: function (e) {
                        var t = ["#c339f7", "#a539f1", "#883bed", "#6f3be8", "#5b3be4", "#463ce1", "#333cdd", "#093dd6"];
                        return t[e.dataIndex]
                    }
                }
            },
            data: []
        }]
    }, t.setOption(option), window.serviceFacilityName = [], window.serviceFacilityCount = [], $.get(requestUrl + "big-data/get-industry-investment-want").done(function (e) {
        getStatus(e);
        for (var a = 0; a < e.result.length; a++)serviceFacilityName.unshift(e.result[a].name), serviceFacilityCount.unshift(e.result[a].value);
        t.setOption({
            yAxis: {type: "category", data: serviceFacilityName},
            series: [{name: "销量", data: serviceFacilityCount}]
        })
    }), t.on("click", function (t) {
        e(t.name, t.color)
    })
}
function economyCity() {
    function e(e, t) {
        economy(e, t)
    }

    var t = echarts.init(document.getElementById("economy-list"));
    option = {
        width: "900",
        title: {
            text: "小镇经济",
            x: "center",
            y: "top",
            textStyle: {color: "#fff", fontFamily: "微软雅黑", fontSize: 18, fontWeight: "bolder"}
        },
        tooltip: {trigger: "axis", axisPointer: {type: "shadow"}, textStyle: {color: "#fff"}},
        legend: {x: "left", y: "bottom", data: ["拟投资额"], textStyle: {color: "#fff"}},
        grid: {
            left: "2%",
            right: "4%",
            bottom: "3%",
            containLabel: !0,
            backgroundColor: "red",
            textStyle: {color: "#fff"}
        },
        xAxis: {
            type: "value",
            name: "单位（亿元）",
            nameGap: 16,
            nameTextStyle: {color: "#a7a7a7", fontSize: 14},
            axisLine: {lineStyle: {color: "#a7a7a7"}}
        },
        yAxis: {type: "category", data: [], textStyle: {color: "#fff"}, axisLine: {lineStyle: {color: "#a7a7a7"}}},
        series: [{
            name: "拟投资额 (单位：亿元)",
            type: "bar",
            stack: "总量",
            label: {normal: {show: !0, position: "insideRight"}},
            tooltip: {
                trigger: "item", formatter: function (e) {
                    if ("bar" != e.componentSubType) {
                        var t = e.value.toString().split(",");
                        return "  " + e.name + "拟投资额: " + t[2] + "亿"
                    }
                    return "  " + e.name + "拟投资额: " + e.value + "亿"
                }
            },
            itemStyle: {
                normal: {
                    color: function (e) {
                        var t = ["#028847", "#00905f", "#00906c", "#008b6f", "#00917f", "#029092", "#0083a0", "#0073ae", "#0075cb", "#0764db", "#0854d6", "#083dd6"];
                        return t[e.dataIndex]
                    }
                }
            },
            data: []
        }]
    }, t.setOption(option), window.serviceFacilityName = [], window.serviceFacilityCount = [], $.get(requestUrl + "big-data/get-city-investment-want").done(function (e) {
        getStatus(e);
        for (var a = 0; a < e.result.length; a++)serviceFacilityName.unshift(e.result[a].name), serviceFacilityCount.unshift(e.result[a].value);
        t.setOption({
            yAxis: {type: "category", data: serviceFacilityName},
            series: [{name: "销量", data: serviceFacilityCount}]
        })
    }), t.on("click", function (t) {
        e(t.name, t.color)
    })
}
function economy2(e, t) {
    var a = echarts.init(document.getElementById("economy-list"));
    $.get(encodeURI(requestUrl + "big-data/get-industry-investment-want?industry=" + e), function (e) {
        getStatus(e);
        for (var o = [], n = [], r = 0; r < e.result.length; r++) {
            var l = e.result[r].name, i = e.result[r].value;
            o.unshift(l), n.unshift(i)
        }
        option = {
            width: 700,
            tooltip: {trigger: "item"},
            title: {
                text: "小镇经济",
                x: "center",
                y: "top",
                textStyle: {color: "#fff", fontFamily: "微软雅黑", fontSize: 18, fontWeight: "bolder"}
            },
            toolbox: {
                show: !1,
                feature: {
                    mark: {show: !0},
                    dataView: {show: !0, readOnly: !1},
                    magicType: {show: !0, type: ["line", "bar"]},
                    restore: {show: !0},
                    saveAsImage: {show: !0}
                }
            },
            calculable: !0,
            legend: {data: ["Growth", "特色小镇拟投资金额", "Budget 2012"], itemGap: 5, textStyle: {color: "white"}},
            grid: {top: "12%", left: "1%", right: "10%", containLabel: !0, color: "white", textStyle: {color: "white"}},
            xAxis: [{
                type: "value", name: "单位：亿元", axisLabel: {
                    formatter: function (e) {
                        return e = +e, isFinite(e) ? echarts.format.addCommas(+e) : ""
                    }
                }, axisLine: {lineStyle: {color: "#a7a7a7"}}
            }],
            yAxis: [{type: "category", data: o, axisLine: {lineStyle: {color: "#a7a7a7"}}}],
            dataZoom: [{show: !1, start: 0, end: 100}, {type: "inside", start: 94, end: 100}, {
                show: !0,
                yAxisIndex: 0,
                filterMode: "empty",
                width: 30,
                height: "80%",
                showDataShadow: !1,
                left: "90%",
                textStyle: {color: "#a7a7a7", backgroundColor: "#2B5CEE"}
            }],
            series: [{
                name: "特色小镇拟投资金额（单位 ：亿元）",
                type: "bar",
                data: n,
                tooltip: {
                    trigger: "item", formatter: function (e) {
                        if ("bar" != e.componentSubType) {
                            var t = e.value.toString().split(",");
                            return "  " + e.name + "拟投资额: " + t[2] + " 亿元"
                        }
                        return "  " + e.name + "拟投资额: " + e.value + " 亿元"
                    }
                },
                itemStyle: {normal: {color: t}}
            }]
        }, a.setOption(option)
    })
}
function economy(e, t) {
    var a = echarts.init(document.getElementById("economy-list"));
    $.get(encodeURI(requestUrl + "big-data/get-city-investment-want?city=" + e), function (e) {
        getStatus(e);
        for (var o = [], n = [], r = 0; r < e.result.length; r++) {
            var l = e.result[r].name, i = e.result[r].value;
            o.unshift(l), n.unshift(i)
        }
        option = {
            width: 700,
            tooltip: {trigger: "item"},
            title: {
                text: "小镇经济",
                x: "center",
                y: "top",
                textStyle: {color: "#fff", fontFamily: "微软雅黑", fontSize: 18, fontWeight: "bolder"}
            },
            toolbox: {
                show: !1,
                feature: {
                    mark: {show: !0},
                    dataView: {show: !0, readOnly: !1},
                    magicType: {show: !0, type: ["line", "bar"]},
                    restore: {show: !0},
                    saveAsImage: {show: !0}
                }
            },
            calculable: !0,
            legend: {data: ["Growth", "特色小镇拟投资金额", "Budget 2012"], itemGap: 5, textStyle: {color: "white"}},
            grid: {top: "12%", left: "1%", right: "10%", containLabel: !0, color: "white", textStyle: {color: "white"}},
            xAxis: [{
                type: "value", name: "单位：亿元", axisLabel: {
                    formatter: function (e) {
                        return e = +e, isFinite(e) ? echarts.format.addCommas(+e) : ""
                    }
                }, axisLine: {lineStyle: {color: "#a7a7a7"}}
            }],
            yAxis: [{type: "category", data: o, axisLine: {lineStyle: {color: "#a7a7a7"}}}],
            dataZoom: [{show: !1, start: 0, end: 100}, {type: "inside", start: 94, end: 100}, {
                show: !0,
                yAxisIndex: 0,
                filterMode: "empty",
                width: 30,
                height: "80%",
                showDataShadow: !1,
                left: "90%",
                textStyle: {color: "#a7a7a7", backgroundColor: "#2B5CEE"}
            }],
            series: [{
                name: "特色小镇拟投资金额（单位 ：亿元）",
                type: "bar",
                data: n,
                tooltip: {
                    trigger: "item", formatter: function (e) {
                        if ("bar" != e.componentSubType) {
                            var t = e.value.toString().split(",");
                            return "  " + e.name + "拟投资额: " + t[2] + " 亿元"
                        }
                        return "  " + e.name + "拟投资额: " + e.value + " 亿元"
                    }
                },
                itemStyle: {normal: {color: t}}
            }]
        }, a.setOption(option)
    })
}
function facility() {
    function e(e) {
        var t = echarts.init(document.getElementById("service-right"));
        option = {
            title: {
                text: serviceFacilityName[e] + "小镇",
                x: "240",
                y: "135",
                textStyle: {color: "#fff", fontSize: 12}
            },
            tooltip: {trigger: "item", formatter: "{a} <br/>{b}: {d}%"},
            legend: {orient: "vertical", left: "left"},
            color: ["#4d5dc7", "#35ac84", "#1b53ce", "#2ea5da", "#00dbfe"],
            series: [{
                name: "",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [],
                itemStyle: {emphasis: {shadowBlur: 10, shadowOffsetX: 0, shadowColor: "rgba(0, 0, 0, 0.5)"}}
            }]
        }, t.setOption(option), t.setOption({
            series: [{
                data: [{
                    value: hotelNumber[e],
                    name: "酒店"
                }, {value: restaurantNumber[e], name: "餐厅"}, {value: bankNumber[e], name: "银行"}, {
                    value: hospitalNumber[e],
                    name: "医院"
                }, {value: transitNumber[e], name: "交通设施"}]
            }]
        })
    }

    var t = echarts.init(document.getElementById("service-facility"));
    option = {
        width: "600",
        title: {
            text: "",
            x: "center",
            y: "top",
            textStyle: {color: "#fff", fontFamily: "微软雅黑", fontSize: 18, fontWeight: "bolder"}
        },
        tooltip: {trigger: "axis", axisPointer: {type: "shadow"}, textStyle: {color: "#fff"}},
        legend: {x: "left", y: "bottom", data: ["服务设施数"], textStyle: {color: "#fff"}},
        grid: {
            left: "2%",
            right: "4%",
            bottom: "3%",
            containLabel: !0,
            backgroundColor: "red",
            textStyle: {color: "#fff"}
        },
        xAxis: {
            type: "value",
            name: "单位（个）",
            nameGap: 16,
            nameTextStyle: {color: "#a7a7a7", fontSize: 14},
            axisLine: {lineStyle: {color: "#a7a7a7"}}
        },
        yAxis: {type: "category", data: [], textStyle: {color: "#fff"}, axisLine: {lineStyle: {color: "#a7a7a7"}}},
        series: [{
            name: "服务设施数 (单位：个)",
            type: "bar",
            stack: "总量",
            label: {normal: {show: !0, position: "insideRight"}},
            tooltip: {
                trigger: "item", formatter: function (e) {
                    if ("bar" != e.componentSubType) {
                        var t = e.value.toString().split(",");
                        return "  " + e.name + "服务设施数: " + t[2] + " 个"
                    }
                    return "  " + e.name + "服务设施数: " + e.value + " 个"
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#26a47b"
                    }, {offset: 1, color: "#06de96"}])
                }
            },
            data: []
        }]
    }, t.setOption(option), window.serviceFacilityName = [], window.serviceFacilityCount = [], window.bankNumber = [], window.hospitalNumber = [], window.hotelNumber = [], window.restaurantNumber = [], window.transitNumber = [], window.hospitalNumber = [], window.hotelNumber = [], window.restaurantNumber = [], window.transitNumber = [], $.get(requestUrl + "big-data/get-all-towns-facality").done(function (a) {
        getStatus(a);
        for (var o = (a.result.length - 1, 0); o < a.result.length; o++)bankNumber.unshift(a.result[o].bankNumber), hospitalNumber.unshift(a.result[o].hospitalNumber), hotelNumber.unshift(a.result[o].hotelNumber), restaurantNumber.unshift(a.result[o].restaurantNumber), transitNumber.unshift(a.result[o].transitNumber), serviceFacilityName.unshift(a.result[o].name), serviceFacilityCount.unshift(a.result[o].count), 9 == o && e(9), t.setOption({
            yAxis: {
                type: "category",
                data: serviceFacilityName
            }, series: [{name: "销量", data: serviceFacilityCount}]
        })
    }), t.on("click", function (t) {
        e(t.dataIndex)
    })
}
function facilityY() {
    function e(e) {
        var t = echarts.init(document.getElementById("service-right"));
        option = {
            title: {
                text: serviceFacilityName[e] + "小镇",
                x: "240",
                y: "135",
                textStyle: {color: "#fff", fontSize: 12}
            },
            tooltip: {trigger: "item", formatter: "{a} <br/>{b}: {d}%"},
            legend: {orient: "vertical", left: "left"},
            color: ["#4d5dc7", "#35ac84", "#1b53ce", "#2ea5da", "#00dbfe"],
            series: [{
                name: "",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [],
                itemStyle: {emphasis: {shadowBlur: 10, shadowOffsetX: 0, shadowColor: "rgba(0, 0, 0, 0.5)"}}
            }]
        }, t.setOption(option), t.setOption({
            series: [{
                data: [{
                    value: hotelNumber[e],
                    name: "酒店"
                }, {value: restaurantNumber[e], name: "餐厅"}, {value: bankNumber[e], name: "银行"}, {
                    value: hospitalNumber[e],
                    name: "医院"
                }, {value: transitNumber[e], name: "交通设施"}]
            }]
        })
    }

    var t = echarts.init(document.getElementById("service-facility"));
    option = {
        width: "600",
        title: {
            text: "",
            x: "center",
            y: "top",
            textStyle: {color: "#fff", fontFamily: "微软雅黑", fontSize: 18, fontWeight: "bolder"}
        },
        tooltip: {trigger: "axis", axisPointer: {type: "shadow"}, textStyle: {color: "#fff"}},
        legend: {x: "left", y: "bottom", data: ["服务设施数"], textStyle: {color: "#fff"}},
        grid: {
            left: "2%",
            right: "4%",
            bottom: "3%",
            containLabel: !0,
            backgroundColor: "red",
            textStyle: {color: "#fff"}
        },
        xAxis: {
            type: "value",
            name: "单位（个）",
            nameGap: 16,
            nameTextStyle: {color: "#a7a7a7", fontSize: 14},
            axisLine: {lineStyle: {color: "#a7a7a7"}}
        },
        yAxis: {type: "category", data: [], textStyle: {color: "#fff"}, axisLine: {lineStyle: {color: "#a7a7a7"}}},
        series: [{
            name: "服务设施数 (单位：个)",
            type: "bar",
            stack: "总量",
            label: {normal: {show: !0, position: "insideRight"}},
            tooltip: {
                trigger: "item", formatter: function (e) {
                    if ("bar" != e.componentSubType) {
                        var t = e.value.toString().split(",");
                        return "  " + e.name + "服务设施数: " + t[2] + " 个"
                    }
                    return "  " + e.name + "服务设施数: " + e.value + " 个"
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#26a47b"
                    }, {offset: 1, color: "#06de96"}])
                }
            },
            data: []
        }]
    }, t.setOption(option), window.serviceFacilityName = [], window.serviceFacilityCount = [], window.bankNumber = [], window.hospitalNumber = [], window.hotelNumber = [], window.restaurantNumber = [], window.transitNumber = [], window.hospitalNumber = [], window.hotelNumber = [], window.restaurantNumber = [], window.transitNumber = [], $.get(requestUrl + "big-data/get-all-towns-facality?type=2").done(function (a) {
        getStatus(a);
        for (var o = 0; o < a.result.length; o++)bankNumber.unshift(a.result[o].bankNumber), hospitalNumber.unshift(a.result[o].hospitalNumber), hotelNumber.unshift(a.result[o].hotelNumber), restaurantNumber.unshift(a.result[o].restaurantNumber), transitNumber.unshift(a.result[o].transitNumber), serviceFacilityName.unshift(a.result[o].name), serviceFacilityCount.unshift(a.result[o].count), 9 == o && e(9), t.setOption({
            yAxis: {
                type: "category",
                data: serviceFacilityName
            }, series: [{name: "销量", data: serviceFacilityCount}]
        })
    }), t.on("click", function (t) {
        e(t.dataIndex)
    })
}
function facilityN() {
    function e(e) {
        var t = echarts.init(document.getElementById("service-right"));
        option = {
            title: {
                text: serviceFacilityName[e] + "小镇",
                x: "240",
                y: "135",
                textStyle: {color: "#fff", fontSize: 12}
            },
            tooltip: {trigger: "item", formatter: "{a} <br/>{b}: {d}%"},
            legend: {orient: "vertical", left: "left"},
            color: ["#4d5dc7", "#35ac84", "#1b53ce", "#2ea5da", "#00dbfe"],
            series: [{
                name: "",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [],
                itemStyle: {emphasis: {shadowBlur: 10, shadowOffsetX: 0, shadowColor: "rgba(0, 0, 0, 0.5)"}}
            }]
        }, t.setOption(option), t.setOption({
            series: [{
                data: [{
                    value: hotelNumber[e],
                    name: "酒店"
                }, {value: restaurantNumber[e], name: "餐厅"}, {value: bankNumber[e], name: "银行"}, {
                    value: hospitalNumber[e],
                    name: "医院"
                }, {value: transitNumber[e], name: "交通设施"}]
            }]
        })
    }

    var t = echarts.init(document.getElementById("service-facility"));
    option = {
        width: "600",
        title: {
            text: "",
            x: "center",
            y: "top",
            textStyle: {color: "#fff", fontFamily: "微软雅黑", fontSize: 18, fontWeight: "bolder"}
        },
        tooltip: {trigger: "axis", axisPointer: {type: "shadow"}, textStyle: {color: "#fff"}},
        legend: {x: "left", y: "bottom", data: ["服务设施数"], textStyle: {color: "#fff"}},
        grid: {
            left: "2%",
            right: "4%",
            bottom: "3%",
            containLabel: !0,
            backgroundColor: "red",
            textStyle: {color: "#fff"}
        },
        xAxis: {
            type: "value",
            name: "单位（个）",
            nameGap: 16,
            nameTextStyle: {color: "#a7a7a7", fontSize: 14},
            axisLine: {lineStyle: {color: "#a7a7a7"}}
        },
        yAxis: {type: "category", data: [], textStyle: {color: "#fff"}, axisLine: {lineStyle: {color: "#a7a7a7"}}},
        series: [{
            name: "服务设施数 (单位：个)",
            type: "bar",
            stack: "总量",
            label: {normal: {show: !0, position: "insideRight"}},
            tooltip: {
                trigger: "item", formatter: function (e) {
                    if ("bar" != e.componentSubType) {
                        var t = e.value.toString().split(",");
                        return "  " + e.name + "服务设施数: " + t[2] + " 个"
                    }
                    return "  " + e.name + "服务设施数: " + e.value + " 个"
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: "#26a47b"
                    }, {offset: 1, color: "#06de96"}])
                }
            },
            data: []
        }]
    }, t.setOption(option), window.serviceFacilityName = [], window.serviceFacilityCount = [], window.bankNumber = [], window.hospitalNumber = [], window.hotelNumber = [], window.restaurantNumber = [], window.transitNumber = [], window.hospitalNumber = [], window.hotelNumber = [], window.restaurantNumber = [], window.transitNumber = [], $.get(requestUrl + "big-data/get-all-towns-facality?type=1").done(function (a) {
        getStatus(a);
        for (var o = (a.result.length - 1, 0); o < a.result.length; o++)bankNumber.unshift(a.result[o].bankNumber), hospitalNumber.unshift(a.result[o].hospitalNumber), hotelNumber.unshift(a.result[o].hotelNumber), restaurantNumber.unshift(a.result[o].restaurantNumber), transitNumber.unshift(a.result[o].transitNumber), serviceFacilityName.unshift(a.result[o].name), serviceFacilityCount.unshift(a.result[o].count), 9 == o && e(9), t.setOption({
            yAxis: {
                type: "category",
                data: serviceFacilityName
            }, series: [{name: "销量", data: serviceFacilityCount}]
        })
    }), t.on("click", function (t) {
        e(t.dataIndex)
    })
}
function pmData() {
    var e = [], t = [];
    $.get(requestUrl + "big-data/get-all-towns-air-quality?type=0", function (a) {
        getStatus(a);
        for (var o = 0; o < a.result.length; o++)e.push(a.result[o].pm25Avg), t.push(a.result[o].xy);
        var n = echarts.init(document.getElementById("pm-data")), r = function (a) {
            for (var o = [], n = 0; n < t.length; n++) {
                var r = String(t[n]).split(","), l = [parseFloat(r[0]), parseFloat(r[1])];
                o.push(l.concat(parseFloat(e[n])))
            }
            return o
        };
        option = {
            title: {text: "", left: "center", textStyle: {color: "#fff"}},
            visualMap: {
                min: 0,
                precision: 0,
                pieces: [{gte: 301, lte: 500, label: "301-500      有毒害"}, {
                    gte: 201,
                    lte: 300,
                    label: "201-300      非常不健康"
                }, {gte: 151, lte: 200, label: "151-200      不健康"}, {
                    gte: 101,
                    lte: 150,
                    label: "101-150      对敏感人群不健康"
                }, {gte: 51, lte: 100, label: "51-100        中等"}, {gt: 0, lte: 50, label: "0-50            良好"}],
                left: 30,
                bottom: 30,
                inRange: {color: ["#7E0123", "#981C71", "#EE352C", "#DF7D09", "#C5BE0E", "#6AA24F"].reverse()},
                textStyle: {color: "#fff", fontSize: 12}
            },
            geo: {
                map: "china",
                label: {emphasis: {show: !1}},
                roam: !0,
                itemStyle: {normal: {areaColor: "#152451", borderColor: "#111"}, emphasis: {areaColor: "#1a3788"}}
            },
            series: [{
                name: "",
                type: "scatter",
                roam: "scale",
                scaleLimit: {min: 1, max: 1},
                coordinateSystem: "geo",
                data: r(),
                symbolSize: 10,
                label: {normal: {show: !1}, emphasis: {show: !1}},
                itemStyle: {emphasis: {borderColor: "#fff", borderWidth: 1}}
            }]
        }, n.setOption(option)
    })
}
function pmDataY() {
    var e = [], t = [];
    $.get(requestUrl + "big-data/get-all-towns-air-quality?type=2", function (a) {
        getStatus(a);
        for (var o = 0; o < a.result.length; o++)e.push(a.result[o].pm25Avg), t.push(a.result[o].xy);
        var n = echarts.init(document.getElementById("pm-data")), r = function (a) {
            for (var o = [], n = 0; n < t.length; n++) {
                var r = String(t[n]).split(","), l = [parseFloat(r[0]), parseFloat(r[1])];
                o.push(l.concat(parseFloat(e[n])))
            }
            return o
        };
        option = {
            title: {text: "", left: "center", textStyle: {color: "#fff"}},
            visualMap: {
                min: 0,
                left: 30,
                bottom: 30,
                precision: 0,
                pieces: [{gte: 301, lte: 500, label: "301-500      有毒害"}, {
                    gte: 201,
                    lte: 300,
                    label: "201-300      非常不健康"
                }, {gte: 151, lte: 200, label: "151-200      不健康"}, {
                    gte: 101,
                    lte: 150,
                    label: "101-150      对敏感人群不健康"
                }, {gte: 51, lte: 100, label: "51-100        中等"}, {gt: 0, lte: 50, label: "0-50            良好"}],
                inRange: {color: ["#7E0123", "#981C71", "#EE352C", "#DF7D09", "#C5BE0E", "#6AA24F"].reverse()},
                textStyle: {color: "#fff", fontSize: 12}
            },
            geo: {
                map: "china",
                label: {emphasis: {show: !1}},
                roam: !0,
                itemStyle: {normal: {areaColor: "#152451", borderColor: "#111"}, emphasis: {areaColor: "#1a3788"}}
            },
            series: [{
                name: "",
                type: "scatter",
                roam: "scale",
                scaleLimit: {min: 1, max: 1},
                coordinateSystem: "geo",
                data: r(),
                symbolSize: 10,
                label: {normal: {show: !1}, emphasis: {show: !1}},
                itemStyle: {emphasis: {borderColor: "#fff", borderWidth: 1}}
            }]
        }, n.setOption(option)
    })
}
function pmDataN() {
    var e = [], t = [];
    $.get(requestUrl + "big-data/get-all-towns-air-quality?type=1", function (a) {
        getStatus(a);
        for (var o = 0; o < a.result.length; o++)e.push(a.result[o].pm25Avg), t.push(a.result[o].xy);
        var n = echarts.init(document.getElementById("pm-data")), r = function (a) {
            for (var o = [], n = 0; n < t.length; n++) {
                var r = String(t[n]).split(","), l = [parseFloat(r[0]), parseFloat(r[1])];
                o.push(l.concat(parseFloat(e[n])))
            }
            return o
        };
        option = {
            title: {text: "", left: "center", textStyle: {color: "#fff"}},
            visualMap: {
                min: 0,
                precision: 0,
                left: 30,
                bottom: 30,
                pieces: [{gte: 301, lte: 500, label: "301-500      有毒害"}, {
                    gte: 201,
                    lte: 300,
                    label: "201-300      非常不健康"
                }, {gte: 151, lte: 200, label: "151-200      不健康"}, {
                    gte: 101,
                    lte: 150,
                    label: "101-150      对敏感人群不健康"
                }, {gte: 51, lte: 100, label: "51-100        中等"}, {gt: 0, lte: 50, label: "0-50            良好"}],
                inRange: {color: ["#7E0123", "#981C71", "#EE352C", "#DF7D09", "#C5BE0E", "#6AA24F"].reverse()},
                textStyle: {color: "#fff", fontSize: 12}
            },
            geo: {
                map: "china",
                label: {emphasis: {show: !1}},
                roam: !0,
                itemStyle: {normal: {areaColor: "#152451", borderColor: "#111"}, emphasis: {areaColor: "#1a3788"}}
            },
            series: [{
                name: "",
                type: "scatter",
                roam: "scale",
                scaleLimit: {min: 1, max: 1},
                coordinateSystem: "geo",
                data: r(),
                symbolSize: 10,
                label: {normal: {show: !1}, emphasis: {show: !1}},
                itemStyle: {emphasis: {borderColor: "#fff", borderWidth: 1}}
            }]
        }, n.setOption(option)
    })
}
function invest_contrast() {
    var e = echarts.init(document.getElementById("capital-investment-scale"));
    $.get("json/big-data/data.json", function (t) {
        option = {
            tooltip: {trigger: "item"},
            width: 600,
            toolbox: {
                show: !1,
                feature: {
                    mark: {show: !0},
                    dataView: {show: !0, readOnly: !1},
                    magicType: {show: !0, type: ["line", "bar"]},
                    restore: {show: !0},
                    saveAsImage: {show: !0}
                }
            },
            calculable: !0,
            legend: {
                data: ["Growth", "2015-2015年度特色产业投资额", "2015-2016年度完成投资额"],
                itemGap: 5,
                textStyle: {color: "#a7a7a7"}
            },
            grid: {top: "12%", left: "12%", right: "10%", containLabel: !0},
            xAxis: [{
                type: "category",
                offset: 100,
                data: t.names,
                axisLine: {lineStyle: {color: "#a7a7a7"}, textStyle: {color: "red"}}
            }],
            yAxis: [{
                type: "value", name: "本年度特色资产与固定资产投资对比 (单位：亿元)", axisLabel: {
                    formatter: function (e) {
                        return e = +e, isFinite(e) ? echarts.format.addCommas(+e) : ""
                    }
                }, axisLine: {lineStyle: {color: "#a7a7a7"}}
            }],
            dataZoom: [{
                show: !0,
                start: 0,
                end: 100,
                textStyle: {backgroundColor: "#4b5773", color: "#a7a7a7"}
            }, {
                type: "inside",
                start: 94,
                end: 100,
                textStyle: {backgroundColor: "#4b5773", color: "#a7a7a7"}
            }, {
                show: !0,
                yAxisIndex: 0,
                filterMode: "empty",
                width: 30,
                height: "80%",
                showDataShadow: !1,
                left: "90%",
                textStyle: {backgroundColor: "#4b5773", color: "#a7a7a7"}
            }],
            series: [{
                name: "2015-2016年度特色产业投资额",
                type: "bar",
                data: t.budget2011List,
                itemStyle: {normal: {color: "#33c999"}},
                tooltip: {
                    trigger: "item", formatter: function (e) {
                        if ("bar" != e.componentSubType) {
                            var t = e.value.toString().split(",");
                            return "  " + e.name + "2015-2016年度特色产业投资额: " + t[2] + " 亿元"
                        }
                        return "  " + e.name + "2015-2016年度特色产业投资额: " + e.value + " 亿元"
                    }
                }
            }, {
                name: "2015-2016年度完成投资额",
                type: "bar",
                data: t.budget2012List,
                tooltip: {
                    trigger: "item", formatter: function (e) {
                        if ("bar" != e.componentSubType) {
                            var t = e.value.toString().split(",");
                            return "  " + e.name + "2015-2015年度完成投资额: " + t[2] + " 亿元"
                        }
                        return "  " + e.name + "2015-2016年度完成投资额: " + e.value + " 亿元"
                    }
                },
                itemStyle: {normal: {color: "#2b5cee"}}
            }]
        }, e.setOption(option)
    })
}
function getTownViewDistribute() {
    function e(e) {
        var t = [], a = [];
        t.sort(function (e, t) {
            return e.value[2] - t.value[2]
        }), this.setOption({title: {id: "statistic", text: ""}, series: {id: "bar", data: a}})
    }

    var t = echarts.init(document.getElementById("town-view-distribute-left")), a = echarts.init(document.getElementById("town-view-distribute-right")), o = {
        "安吉天使小镇": [119.744717, 30.627134],
        "滨江物联网小镇": [120.227383, 30.21441],
        "苍南台商小镇": [120.455166, 27.543001],
        "常山赏石小镇": [118.572728, 28.901324],
        "德清地理信息小镇": [119.985871, 30.525694],
        "定海远洋渔业小镇": [122.158666, 30.116246],
        "东阳木雕小镇": [120.343624, 29.318309],
        "富阳硅谷小镇": [119.98539, 30.143848],
        "富阳药谷小镇": [119.658407, 30.00932],
        "拱墅运河财富小镇": [120.14808, 30.324182],
        "海宁皮革时尚小镇": [120.669938, 30.508407],
        "海盐核电小镇": [120.953979, 30.517054],
        "杭州湾花田小镇": [120.785056, 30.19571],
        "杭州湾新区滨海欢乐假期小镇": [121.235544, 30.331837],
        "湖州丝绸小镇": [120.179521, 30.868914],
        "黄岩智能模具小镇": [121.198315, 28.667378],
        "嘉善巧克力甜蜜小镇": [120.995109, 30.795507],
        "嘉兴马家浜健康食品小镇": [120.712457, 30.707731],
        "建德航空小镇": [119.19131, 29.360297],
        "江北动力小镇": [121.444572, 29.969154],
        "江干丁兰智慧小镇": [120.22332, 30.364214],
        "江山光谷小镇": [118.53855, 28.527085],
        "金华新能源汽车小镇": [119.607028, 29.037413],
        "缙云机床小镇": [120.234563, 28.804538],
        "景宁畲乡小镇": [119.651457, 28.010333],
        "开化根缘小镇": [118.405375, 29.143204],
        "柯桥酷玩小镇": [120.452437, 30.082033],
        "莲都古堰画乡小镇": [119.751861, 28.302023],
        "临安云制造小镇": [119.851323, 30.262666],
        "龙泉宝剑小镇": [119.128866, 28.060639],
        "龙泉青瓷小镇": [118.879928, 27.971714],
        "龙游红木小镇": [119.250677, 29.080524],
        "路桥沃尔沃小镇": [121.52535, 28.576073],
        "梅山海洋金融小镇": [121.961953, 29.781676],
        "南湖基金小镇": [120.824943, 30.712296],
        "南浔善琏湖笔小镇": [120.323786, 30.702215],
        "宁海智能汽车小镇": [121.588006, 29.277404],
        "瓯海生命健康小镇": [120.701357, 27.94405],
        "瓯海时尚智造小镇": [120.66406, 27.881358],
        "磐安江南药镇": [120.40852, 28.964723],
        "平湖九龙山航空运动小镇": [121.143716, 30.610745],
        "平阳宠物小镇": [120.455182, 27.542984],
        "普陀沈家门渔港小镇": [122.37422, 29.952084],
        "青田石雕小镇": [120.328892, 28.076231],
        "庆元香菇小镇": [119.022002, 27.624964],
        "衢州循环经济小镇": [118.861508, 28.893794],
        "上城玉皇山南基金小镇": [120.156404, 30.215006],
        "上虞e游小镇": [120.83433, 30.04273],
        "松阳茶香小镇": [119.385578, 28.542576],
        "天台天台山和合小镇": [121.05221, 29.153341],
        "天子岭静脉小镇": [120.210356, 30.394772],
        "桐庐健康小镇": [119.725876, 29.785922],
        "桐庐智慧安防小镇": [119.718384, 29.80291],
        "桐乡毛衫时尚小镇": [120.634861, 30.674804],
        "桐乡乌镇互联网小镇": [120.49036, 30.756535],
        "温岭泵业智造小镇": [121.321281, 28.462936],
        "文成森林氧吧小镇": [119.846044, 27.865182],
        "吴兴美妆小镇": [120.039445, 30.683295],
        "武义温泉小镇": [119.820363, 28.841401],
        "西湖龙坞茶镇": [120.065525, 30.1872],
        "西湖艺创小镇": [120.083659, 30.161702],
        "西湖云栖小镇": [120.09071, 30.135791],
        "下城跨贸小镇": [120.202527, 30.330093],
        "仙居神仙氧吧小镇": [120.615267, 28.740146],
        "萧山信息港小镇": [120.263763, 30.21105],
        "新昌智能装备小镇": [120.823069, 29.49035],
        "秀洲光伏小镇": [120.653457, 30.764473],
        "义乌丝路金融小镇": [120.112936, 29.33307],
        "鄞州四明金融小镇": [121.547792, 29.815901],
        "永康赫灵方岩小镇": [120.194911, 28.946198],
        "余杭梦栖小镇": [120.039187, 30.369942],
        "余杭梦想小镇": [120.009172, 30.300306],
        "余杭艺尚小镇": [120.309323, 30.392231],
        "余姚模客小镇": [121.100352, 30.157707],
        "越城黄酒小镇": [120.542272, 30.05755],
        "长兴新能源小镇": [119.897668, 30.987995],
        "朱家尖禅意小镇": [122.402215, 29.933914],
        "诸暨袜艺小镇": [120.158585, 29.696636]
    }, n = [{name: "安吉天使小镇", value: 5}, {name: "滨江物联网小镇", value: 3}, {name: "苍南台商小镇", value: 3}, {
        name: "常山赏石小镇",
        value: 4
    }, {name: "德清地理信息小镇", value: 3}, {name: "定海远洋渔业小镇", value: 3}, {name: "东阳木雕小镇", value: 3}, {
        name: "富阳硅谷小镇",
        value: 3
    }, {name: "富阳药谷小镇", value: 3}, {name: "拱墅运河财富小镇", value: 5}, {name: "海宁皮革时尚小镇", value: 3}, {
        name: "海盐核电小镇",
        value: 4
    }, {name: "杭州湾花田小镇", value: 5}, {name: "杭州湾新区滨海欢乐假期小镇", value: 3}, {name: "湖州丝绸小镇", value: 3}, {
        name: "黄岩智能模具小镇",
        value: 3
    }, {name: "嘉善巧克力甜蜜小镇", value: 5}, {name: "嘉兴马家浜健康食品小镇", value: 3}, {name: "建德航空小镇", value: 3}, {
        name: "江北动力小镇",
        value: 3
    }, {name: "江干丁兰智慧小镇", value: 3}, {name: "江山光谷小镇", value: 3}, {name: "金华新能源汽车小镇", value: 3}, {
        name: "缙云机床小镇",
        value: 3
    }, {name: "景宁畲乡小镇", value: 5}, {name: "开化根缘小镇", value: 5}, {name: "柯桥酷玩小镇", value: 5}, {
        name: "莲都古堰画乡小镇",
        value: 5
    }, {name: "临安云制造小镇", value: 3}, {name: "龙泉宝剑小镇", value: 3}, {name: "龙泉青瓷小镇", value: 4}, {
        name: "龙游红木小镇",
        value: 3
    }, {name: "路桥沃尔沃小镇", value: 3}, {name: "梅山海洋金融小镇", value: 3}, {name: "南湖基金小镇", value: 3}, {
        name: "南浔善琏湖笔小镇",
        value: 3
    }, {name: "宁海智能汽车小镇", value: 3}, {name: "瓯海生命健康小镇", value: 3}, {name: "瓯海时尚智造小镇", value: 3}, {
        name: "磐安江南药镇",
        value: 3
    }, {name: "平湖九龙山航空运动小镇", value: 3}, {name: "平阳宠物小镇", value: 3}, {name: "普陀沈家门渔港小镇", value: 5}, {
        name: "青田石雕小镇",
        value: 4
    }, {name: "庆元香菇小镇", value: 3}, {name: "衢州循环经济小镇", value: 3}, {name: "上城玉皇山南基金小镇", value: 3}, {
        name: "上虞e游小镇",
        value: 3
    }, {name: "松阳茶香小镇", value: 4}, {name: "天台天台山和合小镇", value: 5}, {name: "天子岭静脉小镇", value: 3}, {
        name: "桐庐健康小镇",
        value: 3
    }, {name: "桐庐智慧安防小镇", value: 3}, {name: "桐乡毛衫时尚小镇", value: 5}, {name: "桐乡乌镇互联网小镇", value: 3}, {
        name: "温岭泵业智造小镇",
        value: 3
    }, {name: "文成森林氧吧小镇", value: 3}, {name: "吴兴美妆小镇", value: 3}, {name: "武义温泉小镇", value: 5}, {
        name: "西湖龙坞茶镇",
        value: 5
    }, {name: "西湖艺创小镇", value: 3}, {name: "西湖云栖小镇", value: 3}, {name: "下城跨贸小镇", value: 3}, {
        name: "仙居神仙氧吧小镇",
        value: 5
    }, {name: "萧山信息港小镇", value: 3}, {name: "新昌智能装备小镇", value: 3}, {name: "秀洲光伏小镇", value: 3}, {
        name: "义乌丝路金融小镇",
        value: 3
    }, {name: "鄞州四明金融小镇", value: 3}, {name: "永康赫灵方岩小镇", value: 5}, {name: "余杭梦栖小镇", value: 3}, {
        name: "余杭梦想小镇",
        value: 3
    }, {name: "余姚模客小镇", value: 3}, {name: "越城黄酒小镇", value: 3}, {name: "长兴新能源小镇", value: 4}, {
        name: "朱家尖禅意小镇",
        value: 5
    }, {name: "诸暨袜艺小镇", value: 3}], r = function (e) {
        for (var t = [], a = 0; a < e.length; a++) {
            var n = o[e[a].name];
            n && t.push({name: e[a].name, value: n.concat(e[a].value)})
        }
        return t
    }, l = [r(n), r(n.sort(function (e, t) {
        return t.value - e.value
    }).slice(0, 16))];
    option1 = {
        animation: !0,
        animationDuration: 1e3,
        animationEasing: "cubicInOut",
        animationDurationUpdate: 1e3,
        animationEasingUpdate: "cubicInOut",
        title: [{text: "", left: "center", textStyle: {color: "#fff"}}, {
            id: "statistic",
            right: 120,
            top: 40,
            width: 100,
            textStyle: {color: "#fff", fontSize: 12}
        }],
        toolbox: {iconStyle: {normal: {borderColor: "#fff"}, emphasis: {borderColor: "#b1e4ff"}}},
        visualMap: {
            min: 1,
            max: 5,
            calculable: !0,
            inRange: {color: ["#00DDFF", "#BB0069", "#35ac84", "#F3CE30", "#2A5cee"]},
            textStyle: {color: "#fff"}
        },
        geo: {
            map: "china",
            left: "10",
            right: "35%",
            center: [120.159321, 29.073447],
            zoom: 10,
            label: {emphasis: {show: !1}},
            roam: !0,
            itemStyle: {normal: {areaColor: "#162453", borderColor: "#111"}, emphasis: {areaColor: "#19348a"}}
        },
        tooltip: {
            trigger: "item", formatter: function (e) {
                if ("pie" != e.componentSubType) {
                    var t = e.value.toString().split(",");
                    return "  " + e.name + " : " + t[2] + " A级     "
                }
                return "  " + e.name + " : " + e.value + " A级"
            }
        },
        series: [{
            name: "浙江省特色小镇数",
            type: "scatter",
            coordinateSystem: "geo",
            data: l[0],
            symbolSize: function (e) {
                return Math.max(e[2] / 10, 8)
            },
            label: {normal: {formatter: "{b}", position: "right", show: !1, textStyle: {color: "#fff"}}},
            itemStyle: {normal: {color: "#3b57ed"}, emphasis: {show: !0}}
        }, {
            name: "Top 10",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: l[1],
            symbolSize: function (e) {
                return Math.max(e[2] / 10, 8)
            },
            rippleEffect: {brushType: "stroke"},
            hoverAnimation: !0,
            label: {normal: {formatter: "{b}", position: "right", show: !0, textStyle: {color: "#fff"}}},
            itemStyle: {normal: {color: "#3b57ed", shadowBlur: 12, shadowColor: "#333"}},
            zlevel: 1
        }, {
            id: "bar",
            zlevel: 2,
            name: "特色小镇景区等级",
            type: "pie",
            radius: "30%",
            center: ["80%", "50%"],
            data: [],
            itemStyle: {emphasis: {shadowBlur: 10, shadowOffsetX: 0, shadowColor: "rgba(0, 0, 0, 0.5)"}}
        }]
    };
    var i = -1;
    setInterval(function () {
        var e = option1.series[0].data.length;
        t.dispatchAction({
            type: "downplay",
            seriesIndex: 2,
            dataIndex: i
        }), i = (i + 1) % e, t.dispatchAction({
            type: "highlight",
            seriesIndex: 2,
            dataIndex: i
        }), t.dispatchAction({type: "showTip", seriesIndex: 2, dataIndex: i})
    }, 2e3);
    t.on("brushselected", e), setTimeout(function () {
        t.dispatchAction({
            type: "brush", areas: [{
                geoIndex: 0,
                brushType: "polygon",
                coordRange: [[121.84912109375, 30.0848999023438], [121.85791015625, 30.0974731445313], [121.869689941406, 30.1058959960938], [121.880126953125, 30.1162719726563], [121.897705078125, 30.12451171875], [121.912902832031, 30.1350708007813], [121.919921875, 30.1456909179688], [121.928100585938, 30.160888671875], [121.932922363281, 30.1679077148438], [121.934326171875, 30.1735229492188], [121.944702148438, 30.172119140625], [121.941711425781, 30.1781005859375], [121.946472167969, 30.1854858398438], [121.9619140625, 30.1776733398438], [121.973510742188, 30.171875], [122.007873535156, 30.156494140625], [122.035807171344, 30.1470704262475], [122.048098361069, 30.1461924841243], [122.058049904775, 30.1468276890417], [122.06392854184, 30.1489013757993], [122.070007531263, 30.1510457367672], [122.093307373442, 30.1592647463183], [122.095520019531, 30.1605224609375], [122.141296386719, 30.1912841796875], [122.151886818672, 30.2426477746593], [122.109159276803, 30.2725824776266], [122.082027726375, 30.2843394828119], [122.077855917391, 30.2861472667051], [122.066535145657, 30.2910529344567], [122.057755724425, 30.2954426450728], [122.051610129562, 30.2989544135657], [122.050732187439, 30.3042220663051], [122.057755724425, 30.3086117769212], [122.06477926141, 30.3103676611676], [122.077948393259, 30.3121235454141], [122.091117525107, 30.3130014875373], [122.103088378906, 30.3142700195313], [122.112359505335, 30.3202436834674], [122.117154870865, 30.3209981090158], [122.157647317954, 30.3273685382175], [122.176719173558, 30.3364552634983], [122.182678222656, 30.3392944335938], [122.185485839844, 30.3297119140625], [122.201477050781, 30.3333129882813], [122.205501700765, 30.3341179182781], [122.243221537982, 30.3715218047952], [122.248901367188, 30.3796997070313], [122.256286621094, 30.3934936523438], [122.262084960938, 30.4093017578125], [122.275329589844, 30.4246826171875], [122.284729003906, 30.4287109375], [122.285888671875, 30.4384765625], [122.277282714844, 30.444091796875], [122.274719238281, 30.4505004882813], [122.28271484375, 30.4525146484375], [122.277526855469, 30.4569091796875], [122.284118652344, 30.4603271484375], [122.276306152344, 30.4688720703125], [122.270690917969, 30.4766845703125], [122.281127929688, 30.4793090820313], [122.290283203125, 30.4702758789063], [122.302124023438, 30.4627075195313], [122.309509277344, 30.4700927734375], [122.324096679688, 30.469482421875], [122.327697753906, 30.4600830078125], [122.333679199219, 30.4644775390625], [122.346496582031, 30.4583129882813], [122.358276367188, 30.457275390625], [122.353881835938, 30.4683227539063], [122.361694335938, 30.469482421875], [122.369506835938, 30.4796752929688], [122.37890625, 30.4716796875], [122.366882324219, 30.4655151367188], [122.3720703125, 30.4578857421875], [122.380676269531, 30.4598999023438], [122.381713867188, 30.4522705078125], [122.399719238281, 30.4558715820313], [122.407104492188, 30.4492797851563], [122.414306640625, 30.4503173828125], [122.417114257813, 30.4425048828125], [122.432495117188, 30.4478759765625], [122.423278808594, 30.44091796875], [122.420715332031, 30.4301147460938], [122.410888671875, 30.431884765625], [122.408508300781, 30.426513671875], [122.416076660156, 30.4251098632813], [122.42431640625, 30.4232788085938], [122.433898925781, 30.4172973632813], [122.427673339844, 30.4113159179688], [122.398397268236, 30.4051854104761], [122.379082541525, 30.3972839313671], [122.361523699061, 30.3902603943813], [122.332551608994, 30.3770912625329], [122.304457461051, 30.3612883043148], [122.282508907971, 30.342851519727], [122.264950065506, 30.3270485615089], [122.255292702151, 30.3173911981535], [122.251780933658, 30.3112456032909], [122.251780933658, 30.3051000084283], [122.251780933658, 30.2936867608263], [122.255780447775, 30.2871631631051], [122.259292216267, 30.2810175682425], [122.2680716375, 30.2775057997496], [122.29265401695, 30.27487197338], [122.318114338524, 30.27487197338], [122.348842312837, 30.2766278576264], [122.384837939889, 30.2818955103658], [122.400640898107, 30.2801396261193], [122.412054145709, 30.2713602048871], [122.417321798448, 30.2625807836548], [122.418199740571, 30.2546793045457], [122.417321798448, 30.2450219411903], [122.414687972079, 30.2371204620812], [122.408542377216, 30.2318528093419], [122.390105592628, 30.2274630987257], [122.365523213178, 30.2257072144793], [122.335673180988, 30.2221954459864], [122.309334917291, 30.2204395617399], [122.277729000855, 30.2125380826309], [122.244367200173, 30.2055145456451], [122.226808357708, 30.1993689507825], [122.214517167983, 30.1914674716734], [122.198913574219, 30.1798706054688], [122.193754394261, 30.1737551628389], [122.182033309424, 30.1598615552373], [122.163299927635, 30.1397232746427], [122.1599743441, 30.1215877590956], [122.161917077619, 30.1188450764808], [122.167907714844, 30.113525390625], [122.177490234375, 30.115478515625], [122.183898925781, 30.09912109375], [122.203558582218, 30.0934923954342], [122.213317871094, 30.0906982421875], [122.218872070313, 30.098876953125], [122.228271484375, 30.0999145507813], [122.225280761719, 30.0919189453125], [122.234258425672, 30.0815237554721], [122.237195541133, 30.0784211211672], [122.255676269531, 30.0588989257813], [122.269470214844, 30.0576782226563], [122.271728515625, 30.0645141601563], [122.28271484375, 30.0629272460938], [122.288330078125, 30.0573120117188], [122.297485351563, 30.0518798828125], [122.30029296875, 30.0458984375], [122.307312011719, 30.0369262695313], [122.319274902344, 30.0338745117188], [122.331450930578, 30.0229232910583], [122.352068441033, 30.0053474151725], [122.356506347656, 30.001708984375], [122.362487792969, 29.9923095703125], [122.36461602248, 29.9903929191737], [122.367571744799, 29.9910497463556], [122.370164417631, 29.9951239465212], [122.370905181298, 30.001050055853], [122.370905181298, 30.0069761651848], [122.372016326798, 30.0154949473492], [122.373127472297, 30.0210506748477], [122.37460899963, 30.0236433476804], [122.37683129063, 30.0254952568466], [122.379053581629, 30.0266064023463], [122.386461218294, 30.0280879296792], [122.391646563959, 30.0299398388454], [122.394239236792, 30.0314213661784], [122.397943055124, 30.0343844208442], [122.40201725529, 30.0362363300104], [122.406091455455, 30.0395697665095], [122.410165655621, 30.0425328211754], [122.413869473953, 30.0451254940081], [122.417202910452, 30.0458662576746], [122.420536346951, 30.0458662576746], [122.422758637951, 30.0440143485084], [122.425351310784, 30.0410512938425], [122.428684747283, 30.0366067118437], [122.430907038282, 30.0314213661784], [122.431647801949, 30.0273471660127], [122.431647801949, 30.021421056681], [122.433129329281, 30.015124565516], [122.437203529447, 30.0021612013527], [122.440907347779, 29.9943831828547], [122.444240784279, 29.98697554619], [122.446833457111, 29.9814198186915], [122.449426129944, 29.97438256386], [122.451648420943, 29.968086072695], [122.454611475609, 29.9599376723638], [122.457204148442, 29.9521596538658], [122.460167203108, 29.9458631627008], [122.462019112274, 29.9384555260361], [122.463130257774, 29.9328997985375], [122.462019112274, 29.9280848347054], [122.456833766609, 29.9269736892057], [122.452018802777, 29.9251217800396], [122.443870402445, 29.9232698708734], [122.436833147614, 29.9206771980407], [122.432758947448, 29.9158622342086], [122.431647801949, 29.9091953612104], [122.431277420115, 29.9021581063789], [122.431277420115, 29.8973431425468], [122.431277420115, 29.8932689423812], [122.430166274616, 29.8888243603824], [122.428684747283, 29.8869724512162], [122.426462456283, 29.8840093965503], [122.425351310784, 29.8791944327183], [122.424032339922, 29.8729293211252], [122.423021528546, 29.8722631045369], [122.416443856325, 29.8473141593686], [122.412054145709, 29.8385347381363], [122.40151884023, 29.8200979535486], [122.391861476875, 29.8069288217002], [122.377814402903, 29.7955155740982], [122.364002440797, 29.7896378071051], [122.349487304688, 29.781494140625], [122.319885253906, 29.7794799804688], [122.309509277344, 29.7694702148438], [122.292724609375, 29.7669067382813], [122.268310546875, 29.7589111328125], [122.249877929688, 29.7490844726563], [122.2294921875, 29.7332763671875], [122.212280273438, 29.7100830078125], [122.19970703125, 29.6923217773438], [122.193481445313, 29.685302734375], [122.190124511719, 29.6744995117188], [122.185913085938, 29.663330078125], [122.17431640625, 29.6580810546875], [122.16797631651, 29.659386367281], [122.155099747852, 29.6628492088194], [122.137878417969, 29.66748046875], [122.13176464786, 29.6694060656347], [122.130561671796, 29.6707578724434], [122.126525878906, 29.67529296875], [122.127685546875, 29.6838989257813], [122.134887695313, 29.6937255859375], [122.122314453125, 29.6954956054688], [122.106323242188, 29.703125], [122.07830083426, 29.7229666727099], [122.055848985889, 29.7203010346643], [122.051086425781, 29.7166748046875], [122.045715332031, 29.7180786132813], [122.043701171875, 29.7249145507813], [122.047912597656, 29.731689453125], [122.053527832031, 29.7390747070313], [122.059875488281, 29.7493286132813], [122.063903808594, 29.76171875], [122.068481445313, 29.7772827148438], [122.079284667969, 29.7830810546875], [122.092712402344, 29.7844848632813], [122.098510742188, 29.7844848632813], [122.105712890625, 29.7910766601563], [122.115295410156, 29.7951049804688], [122.132690429688, 29.8148803710938], [122.15771484375, 29.8261108398438], [122.197082519531, 29.837890625], [122.215270996094, 29.8411254882813], [122.2197265625, 29.8499145507813], [122.194885253906, 29.863525390625], [122.147828523163, 29.8828157274513], [122.12195424757, 29.8770289184939], [122.115478515625, 29.8743286132813], [122.0966796875, 29.8687133789063], [122.08349609375, 29.86328125], [122.078918457031, 29.8563232421875], [122.072082519531, 29.8541259765625], [122.059509277344, 29.8521118164063], [122.045288085938, 29.8427124023438], [122.038696289063, 29.8361206054688], [122.031677246094, 29.8328857421875], [122.030883789063, 29.8331298828125], [122.029724121094, 29.8233032226563], [122.025695800781, 29.810302734375], [122.017272949219, 29.799072265625], [122.013248476319, 29.7926126021172], [121.990625844027, 29.7682713011638], [121.973104761679, 29.7659351568507], [121.93772694575, 29.7555299168717], [121.902349129822, 29.7284762929263], [121.873214457881, 29.7097468609642], [121.842824086909, 29.6911305936055], [121.837684023966, 29.6894187114826], [121.82269939848, 29.6844281281429], [121.816284179688, 29.6817016601563], [121.801513671875, 29.6735229492188], [121.791076660156, 29.6671142578125], [121.779907226563, 29.657470703125], [121.770080566406, 29.6444702148438], [121.770874023438, 29.6383056640625], [121.760498046875, 29.6328735351563], [121.758483886719, 29.6304931640625], [121.749694824219, 29.6196899414063], [121.744873046875, 29.6116943359375], [121.733520507813, 29.6036987304688], [121.715087890625, 29.590087890625], [121.706115722656, 29.5742797851563], [121.701110839844, 29.5648803710938], [121.692687988281, 29.5615234375], [121.685913085938, 29.56591796875], [121.672119140625, 29.5567016601563], [121.652709960938, 29.55029296875], [121.641723632813, 29.5487060546875], [121.6298828125, 29.5479125976563], [121.619323730469, 29.549072265625], [121.612487792969, 29.543701171875], [121.594909667969, 29.5401000976563], [121.578125, 29.5477294921875], [121.5712890625, 29.5510864257813], [121.565673828125, 29.5460815429688], [121.559326171875, 29.5377197265625], [121.547302246094, 29.5352783203125], [121.538879394531, 29.5242919921875], [121.535888671875, 29.5134887695313], [121.52490234375, 29.5078735351563], [121.516479492188, 29.5084838867188], [121.522094726563, 29.5153198242188], [121.519470214844, 29.528076171875], [121.517700195313, 29.5413208007813], [121.514282226563, 29.552490234375], [121.5126953125, 29.5573120117188], [121.50048828125, 29.5465087890625], [121.483520507813, 29.5413208007813], [121.475280761719, 29.5297241210938], [121.470275878906, 29.5208740234375], [121.459289550781, 29.5255126953125], [121.447082519531, 29.5156860351563], [121.454528808594, 29.5048828125], [121.456481933594, 29.4962768554688], [121.445922851563, 29.4899291992188], [121.441101074219, 29.4846801757813], [121.440673828125, 29.4791259765625], [121.4296875, 29.47607421875], [121.425720214844, 29.4669189453125], [121.434875488281, 29.4564819335938], [121.442321777344, 29.4470825195313], [121.442687988281, 29.4368896484375], [121.439270019531, 29.4235229492188], [121.442321777344, 29.4163208007813], [121.454528808594, 29.4208984375], [121.462524414063, 29.4216918945313], [121.464111328125, 29.4329223632813], [121.464477539063, 29.4437255859375], [121.472473144531, 29.4541015625], [121.476928710938, 29.470703125], [121.485290527344, 29.4779052734375], [121.492126464844, 29.48388671875], [121.49951171875, 29.4946899414063], [121.50732421875, 29.4918823242188], [121.511901855469, 29.4859008789063], [121.519891189132, 29.4789305589857], [121.524500385279, 29.4716875364691], [121.528076171875, 29.464111328125], [121.521484375, 29.4520874023438], [121.519287109375, 29.4453125], [121.51659890617, 29.4288878579618], [121.512512207031, 29.4216918945313], [121.498901367188, 29.4204711914063], [121.486083984375, 29.4116821289063], [121.482727050781, 29.4039306640625], [121.484680175781, 29.3958740234375], [121.489929199219, 29.3912963867188], [121.494506835938, 29.3948974609375], [121.50048828125, 29.39892578125], [121.51171875, 29.4014892578125], [121.519287109375, 29.4122924804688], [121.534912109375, 29.4237060546875], [121.54150390625, 29.431884765625], [121.548522949219, 29.4365234375], [121.548844608191, 29.4399601096813], [121.55822042783, 29.4612157088148], [121.567077636719, 29.4730834960938], [121.567687988281, 29.4730834960938], [121.589904785156, 29.4818725585938], [121.618713378906, 29.4896850585938], [121.633483886719, 29.4937133789063], [121.652526855469, 29.4990844726563], [121.667297363281, 29.5034790039063], [121.670288085938, 29.5089111328125], [121.671325683594, 29.5150756835938], [121.68212890625, 29.5175170898438], [121.681884765625, 29.5206909179688], [121.681518554688, 29.5272827148438], [121.702880859375, 29.5360717773438], [121.722473144531, 29.54150390625], [121.733703613281, 29.540283203125], [121.744079589844, 29.543701171875], [121.744079589844, 29.5518798828125], [121.744079589844, 29.5598754882813], [121.758911132813, 29.5682983398438], [121.771118164063, 29.57373046875], [121.777709960938, 29.5861206054688], [121.787475585938, 29.5963134765625], [121.787109375, 29.6016845703125], [121.793701171875, 29.605712890625], [121.821120785525, 29.6137215041273], [121.825073242188, 29.6149291992188], [121.867919921875, 29.6246948242188], [121.882700771555, 29.6277417488726], [121.899820642958, 29.6349847713893], [121.908081054688, 29.6431274414063], [121.919921875, 29.6456909179688], [121.930908203125, 29.6347045898438], [121.942077636719, 29.6378784179688], [121.952270507813, 29.6340942382813], [121.963690932423, 29.6270832922802], [121.96728515625, 29.6212768554688], [121.972211369969, 29.6151990593221], [121.990905761719, 29.6015014648438], [121.993713378906, 29.5892944335938], [121.991888857203, 29.588099371878], [121.957511540192, 29.5680936700598], [121.956115722656, 29.56787109375], [121.948303222656, 29.5610961914063], [121.948303222656, 29.5516967773438], [121.956726074219, 29.5399169921875], [121.9453125, 29.5380859375], [121.935913085938, 29.5438842773438], [121.920104980469, 29.5388793945313], [121.916076660156, 29.532470703125], [121.922912597656, 29.5191040039063], [121.936706542969, 29.5198974609375], [121.943115234375, 29.5123291015625], [121.954711914063, 29.5123291015625], [121.955871582031, 29.502685546875], [121.954472540129, 29.4914412342417], [121.956726074219, 29.4794921875], [121.972290039063, 29.4680786132813], [121.980285644531, 29.4625244140625], [121.98388671875, 29.452880859375], [121.972717285156, 29.4520874023438], [121.974914550781, 29.4412841796875], [121.962524414063, 29.439697265625], [121.969482421875, 29.4324951171875], [121.961303710938, 29.4285278320313], [121.968078613281, 29.417724609375], [121.955322265625, 29.419921875], [121.942504882813, 29.4296875], [121.930114746094, 29.4301147460938], [121.925109863281, 29.4249267578125], [121.918090820313, 29.4202880859375], [121.912475585938, 29.4129028320313], [121.910705566406, 29.4066772460938], [121.914306640625, 29.4016723632813], [121.900695800781, 29.3917236328125], [121.896301269531, 29.3847045898438], [121.90869140625, 29.37451171875], [121.91748046875, 29.3693237304688], [121.925476074219, 29.3731079101563], [121.931274414063, 29.3701171875], [121.919128417969, 29.3624877929688], [121.910888671875, 29.35107421875], [121.918701171875, 29.3411254882813], [121.931274414063, 29.3427124023438], [121.941101074219, 29.3427124023438], [121.950500488281, 29.343505859375], [121.938110351563, 29.332275390625], [121.942504882813, 29.3270874023438], [121.927124023438, 29.3250732421875], [121.920715332031, 29.3305053710938], [121.912719726563, 29.3286743164063], [121.911926269531, 29.3218994140625], [121.929321289063, 29.3098754882813], [121.911071777344, 29.3067016601563], [121.910705566406, 29.3001098632813], [121.918884277344, 29.2951049804688], [121.925109863281, 29.2877197265625], [121.921325683594, 29.2816772460938], [121.940490722656, 29.27490234375], [121.955322265625, 29.2725219726563], [121.972900390625, 29.2794799804688], [121.981323242188, 29.2877197265625], [121.994079589844, 29.281494140625], [121.986083984375, 29.273681640625], [121.996704101563, 29.2664794921875], [121.979675292969, 29.2655029296875], [121.966125488281, 29.2647094726563], [121.969482421875, 29.2565307617188], [121.95849609375, 29.2565307617188], [121.959899902344, 29.2470703125], [121.970092773438, 29.231689453125], [121.973510742188, 29.22412109375], [121.975280761719, 29.2177124023438], [121.973083496094, 29.20849609375], [121.970703125, 29.1962890625], [121.968078613281, 29.1889038085938], [121.976318359375, 29.1795043945313], [121.977111816406, 29.1680908203125], [121.982299804688, 29.1513061523438], [121.973327636719, 29.1494750976563], [121.969909667969, 29.1422729492188], [121.978515625, 29.1406860351563], [121.980285644531, 29.12451171875], [121.980895996094, 29.110107421875], [121.962524414063, 29.0994873046875], [121.961486816406, 29.0950927734375], [121.977111816406, 29.0885009765625], [121.965698242188, 29.0850830078125], [121.962707519531, 29.0750732421875], [121.953491210938, 29.064697265625], [121.963073730469, 29.0620727539063], [121.954528808594, 29.0584716796875], [121.945922851563, 29.0557250976563], [121.942321777344, 29.05712890625], [121.929870605469, 29.05810546875], [121.932922363281, 29.0739135742188], [121.917114257813, 29.0755004882813], [121.903076171875, 29.0740966796875], [121.896301269531, 29.0764770507813], [121.860107421875, 29.0706787109375], [121.834899902344, 29.0610961914063], [121.818908691406, 29.0554809570313], [121.812388391706, 29.0570314629471], [121.79987771645, 29.0642744854637], [121.785705566406, 29.0819091796875], [121.780883789063, 29.0985107421875], [121.781311035156, 29.11669921875], [121.779479980469, 29.127685546875], [121.784484863281, 29.1425170898438], [121.779907226563, 29.1519165039063], [121.778930664063, 29.1578979492188], [121.779479980469, 29.1644897460938], [121.780883789063, 29.1710815429688], [121.781230263559, 29.1728591077751], [121.779483852546, 29.1758280064962], [121.772899286622, 29.1778033762735], [121.76697317729, 29.1791202894583], [121.762363981143, 29.1764864630886], [121.757754784996, 29.1699018971644], [121.755120958627, 29.1639757878327], [121.744585653148, 29.1494897427994], [121.732733434484, 29.1422467202828], [121.720222759228, 29.1376375241359], [121.707712083972, 29.1356621543586], [121.699152148271, 29.1356621543586], [121.6879583862, 29.1415882636904], [121.675447710944, 29.1527820257615], [121.643170779524, 29.1804116761578], [121.6376953125, 29.18310546875], [121.623474121094, 29.1947021484375], [121.624328613281, 29.205078125], [121.618286132813, 29.2133178710938], [121.616882324219, 29.2202758789063], [121.603881835938, 29.228515625], [121.605285644531, 29.2373046875], [121.600280761719, 29.240478515625], [121.593835674406, 29.2421126367998], [121.588897249962, 29.2401372670226], [121.585934195297, 29.2347050001351], [121.580995770853, 29.2287788908033], [121.573094291744, 29.2243343088045], [121.563217442858, 29.2228527814715], [121.549389854417, 29.2218650965829], [121.538031478198, 29.2198897268057], [121.534574581088, 29.2164328296954], [121.533093053755, 29.2119882476966], [121.530129999089, 29.2035929261433], [121.524203889757, 29.1996421865887], [121.525961602432, 29.1902677189892], [121.531127929688, 29.1889038085938], [121.533879543574, 29.1850463987901], [121.537830283128, 29.1804372026432], [121.54375639246, 29.1784618328659], [121.553633241346, 29.1758280064962], [121.560876263863, 29.173852636719], [121.574703852304, 29.1705603537569], [121.587872984152, 29.1685849839796], [121.593799093484, 29.1652927010175], [121.597749833038, 29.1580496785009], [121.599725202816, 29.1554158521312], [121.603017485778, 29.1514651125767], [121.607626681925, 29.1455390032449], [121.612235878072, 29.1382959807283], [121.616845074218, 29.1310529582117], [121.621454270365, 29.1251268488799], [121.626063466512, 29.1198591961405], [121.632648032437, 29.1132746302163], [121.646118164063, 29.1027221679688], [121.66094337545, 29.0820528134591], [121.671478680928, 29.07415133435], [121.674112507298, 29.0669083118334], [121.676746333668, 29.0570314629471], [121.678721703445, 29.0497884404305], [121.682013986407, 29.0432038745063], [121.687281639147, 29.0353023953973], [121.692504882813, 29.0277099609375], [121.699792314402, 29.0168656108095], [121.69913385781, 29.012914871255], [121.695841574848, 29.0102810448853], [121.690573922109, 29.0069887619232], [121.685306269369, 28.9971119130369], [121.685964725962, 28.9872350641506], [121.68829932985, 28.9816382277989], [121.694702148438, 28.9734074757098], [121.703918457031, 28.964111328125], [121.712074808995, 28.9578364026565], [121.721533176015, 28.9505597980702], [121.728864513515, 28.9449195808996], [121.729675292969, 28.9423217773438], [121.718688964844, 28.9373168945313], [121.706726074219, 28.9296875], [121.707702636719, 28.9215087890625], [121.702697753906, 28.9063110351563], [121.698913574219, 28.9000854492188], [121.697326660156, 28.8900756835938], [121.6875, 28.885498046875], [121.681274414063, 28.8674926757813], [121.679656603477, 28.8649643386347], [121.681884765625, 28.8358764648438], [121.680297851563, 28.8264770507813], [121.678283691406, 28.8211059570313], [121.6796875, 28.8043212890625], [121.678100585938, 28.7979125976563], [121.681274414063, 28.7921142578125], [121.667527941374, 28.7337292760689], [121.665552571597, 28.7258277969599], [121.66094337545, 28.7185847744432], [121.653700352933, 28.7133171217039], [121.642506590862, 28.7093663821494], [121.632629741976, 28.7047571860024], [121.619460610127, 28.7001479898555], [121.594439259615, 28.6948803371161], [121.564808712956, 28.6909295975616], [121.521685430991, 28.6935970170646], [121.500305175781, 28.664306640625], [121.504272460938, 28.6528930664063], [121.50830078125, 28.6417236328125], [121.5126953125, 28.6229248046875], [121.51708984375, 28.6043090820313], [121.521118164063, 28.5872802734375], [121.528076171875, 28.5717163085938], [121.537475585938, 28.559326171875], [121.544128417969, 28.54052734375], [121.557495117188, 28.52587890625], [121.568481445313, 28.5167236328125], [121.575073242188, 28.5034790039063], [121.571716308594, 28.4993286132813], [121.57373046875, 28.4967041015625], [121.581115722656, 28.4873046875], [121.582885742188, 28.4818725585938], [121.582092285156, 28.4777221679688], [121.572509765625, 28.4658813476563], [121.568115234375, 28.4570922851563], [121.567321777344, 28.453125], [121.569519042969, 28.440673828125], [121.576477050781, 28.4290771484375], [121.582092285156, 28.422119140625], [121.595520019531, 28.4080810546875], [121.601501464844, 28.3941040039063], [121.597473144531, 28.381103515625], [121.592895507813, 28.3660888671875], [121.601501464844, 28.361083984375], [121.610473632813, 28.3640747070313], [121.618530273438, 28.3585205078125], [121.616882324219, 28.3546752929688], [121.619079589844, 28.3486938476563], [121.627319335938, 28.3452758789063], [121.640930175781, 28.3508911132813], [121.6552734375, 28.356689453125], [121.651306152344, 28.3458862304688], [121.659912109375, 28.3507080078125], [121.668090820313, 28.351318359375], [121.653930664063, 28.340087890625], [121.647521972656, 28.3298950195313], [121.654296875, 28.3242797851563], [121.64111328125, 28.3184814453125], [121.64111328125, 28.3060913085938], [121.631713867188, 28.2960815429688], [121.638916015625, 28.29052734375], [121.640319824219, 28.2847290039063], [121.628295898438, 28.285888671875], [121.619689941406, 28.279296875], [121.616088867188, 28.2772827148438], [121.6220703125, 28.2734985351563], [121.626708984375, 28.2667236328125], [121.616088867188, 28.2575073242188], [121.609412891387, 28.255308179249], [121.593322753906, 28.24951171875], [121.581909179688, 28.2476806640625], [121.585510253906, 28.2546997070313], [121.578918457031, 28.2545166015625], [121.592712402344, 28.2640991210938], [121.59373648421, 28.2710558151532], [121.590297082125, 28.283265692556], [121.584289550781, 28.2935180664063], [121.58064092274, 28.3027297850445], [121.568854996301, 28.3130836406916], [121.556621623492, 28.3179939426146], [121.545544437133, 28.322440167734], [121.513439616441, 28.3353265863231], [121.511474609375, 28.3358764648438], [121.500122070313, 28.3377075195313], [121.489685058594, 28.3399047851563], [121.469482421875, 28.339111328125], [121.464111328125, 28.3348999023438], [121.45068359375, 28.32470703125], [121.451904296875, 28.315673828125], [121.45947265625, 28.3120727539063], [121.464904785156, 28.3004760742188], [121.442687988281, 28.2957153320313], [121.429321289063, 28.301513671875], [121.428232767815, 28.3026324298233], [121.419922714879, 28.3008829449947], [121.419716875121, 28.3003977512797], [121.4130859375, 28.29150390625], [121.403930664063, 28.2860717773438], [121.412902832031, 28.2756958007813], [121.425109863281, 28.2747192382813], [121.431701660156, 28.268310546875], [121.438293457031, 28.26611328125], [121.422302246094, 28.2603149414063], [121.422485351563, 28.2590942382813], [121.423278808594, 28.2548828125], [121.414672851563, 28.242919921875], [121.404113769531, 28.2315063476563], [121.401123046875, 28.230712890625], [121.383117675781, 28.23291015625], [121.37451171875, 28.2266845703125], [121.366088867188, 28.222900390625], [121.363525390625, 28.2139282226563], [121.373901367188, 28.2089233398438], [121.377502441406, 28.1983032226563], [121.388916015625, 28.1932983398438], [121.389709472656, 28.18408203125], [121.382690429688, 28.1766967773438], [121.38232421875, 28.1658935546875], [121.376886914255, 28.1605047975537], [121.358380531147, 28.1419409139077], [121.357299804688, 28.1403198242188], [121.348876953125, 28.138916015625], [121.338073730469, 28.1419067382813], [121.335763659588, 28.1438496964318], [121.329895019531, 28.1503295898438], [121.330871582031, 28.1593017578125], [121.326721191406, 28.16748046875], [121.312072753906, 28.169677734375], [121.305480957031, 28.1782836914063], [121.297302246094, 28.1838989257813], [121.279724121094, 28.180908203125], [121.271301269531, 28.1829223632813], [121.265319824219, 28.1763305664063], [121.25830078125, 28.1657104492188], [121.25390625, 28.14990234375], [121.256286621094, 28.1340942382813], [121.263488769531, 28.1287231445313], [121.29150390625, 28.111328125], [121.297302246094, 28.1082763671875], [121.297474866, 28.0897259363195], [121.29052734375, 28.0712890625], [121.243713378906, 28.0551147460938], [121.214904785156, 28.0518798828125], [121.195922851563, 28.04931640625], [121.175720214844, 28.0388793945313], [121.169311523438, 28.0219116210938], [121.147094726563, 27.964111328125], [121.148498535156, 27.9608764648438], [121.146911621094, 27.9589233398438], [121.13671875, 27.9608764648438], [121.127502441406, 27.9525146484375], [121.111083984375, 27.9473266601563], [121.097717285156, 27.9489135742188], [121.094909667969, 27.9434814453125], [121.088500976563, 27.9464721679688], [121.085327148438, 27.9517211914063], [121.087524414063, 27.9542846679688], [121.088500976563, 27.9608764648438], [121.077270507813, 27.9627075195313], [121.069702148438, 27.9583129882813], [121.05908203125, 27.9533081054688], [121.043884277344, 27.9492797851563], [121.041119195479, 27.9519130292028], [121.039174690855, 27.9583021158262], [121.037531572501, 27.9700305813179], [121.037384511994, 27.9710802890728], [121.037384511994, 27.9810805985702], [121.037384511994, 27.9889820776792], [121.041335251549, 27.9942497304186], [121.066356602061, 28.0080773188594], [121.096785841386, 28.0236723040138], [121.105529785156, 28.03369140625], [121.143127441406, 28.0863037109375], [121.146728515625, 28.0930786132813], [121.141479492188, 28.09912109375], [121.136474609375, 28.1024780273438], [121.132873535156, 28.1116943359375], [121.138916015625, 28.115478515625], [121.134094238281, 28.1231079101563], [121.129272460938, 28.1373291015625], [121.137878417969, 28.1362915039063], [121.148681640625, 28.1340942382813], [121.159301757813, 28.1395263671875], [121.162719726563, 28.1500854492188], [121.173522949219, 28.1525268554688], [121.177917480469, 28.1571044921875], [121.1865234375, 28.1613159179688], [121.190307617188, 28.1682739257813], [121.205871582031, 28.1732788085938], [121.200927734375, 28.186279296875], [121.208129882813, 28.19287109375], [121.203674316406, 28.2034912109375], [121.223327636719, 28.2322998046875], [121.257873535156, 28.2525024414063], [121.259887695313, 28.2562866210938], [121.255676269531, 28.263916015625], [121.252685546875, 28.27587890625], [121.253295898438, 28.28271484375], [121.259094238281, 28.2885131835938], [121.249694824219, 28.3026733398438], [121.240478515625, 28.3062744140625], [121.230712890625, 28.3067016601563], [121.217895507813, 28.3211059570313], [121.217189659962, 28.3232593911504], [121.212303048509, 28.327559085717], [121.20785846651, 28.327559085717], [121.20094467229, 28.3255837159398], [121.194030878069, 28.3221268188295], [121.18612939896, 28.3221268188295], [121.179709447184, 28.3280529281613], [121.173783337853, 28.3339790374931], [121.170326440742, 28.3394113043806], [121.167363386076, 28.3468189410453], [121.159912109375, 28.3494873046875], [121.155090332031, 28.3480834960938], [121.150329589844, 28.3430786132813], [121.137512207031, 28.3416748046875], [121.135925292969, 28.3353271484375], [121.144714355469, 28.3270874023438], [121.143127441406, 28.3209228515625], [121.134094238281, 28.3170776367188], [121.128112792969, 28.3134765625], [121.126281738281, 28.3076782226563], [121.134521484375, 28.3032836914063], [121.130676269531, 28.2985229492188], [121.121887207031, 28.2954711914063], [121.116088867188, 28.2857055664063], [121.113480819115, 28.2764994016735], [121.113525390625, 28.2764892578125], [121.115295410156, 28.2720947265625], [121.116271972656, 28.2664794921875], [121.11669921875, 28.2620849609375], [121.124877929688, 28.2545166015625], [121.131530761719, 28.248291015625], [121.124694824219, 28.240478515625], [121.126098632813, 28.2335205078125], [121.117492675781, 28.2244873046875], [121.116271972656, 28.2169189453125], [121.119506835938, 28.2114868164063], [121.106506347656, 28.2083129882813], [121.10107421875, 28.201904296875], [121.093505859375, 28.194091796875], [121.094299316406, 28.1865234375], [121.101318359375, 28.1826782226563], [121.095520019531, 28.1757202148438], [121.093872070313, 28.1679077148438], [121.077087402344, 28.1693115234375], [121.071899414063, 28.1646728515625], [121.065673828125, 28.1651000976563], [121.060729980469, 28.1624755859375], [121.058715820313, 28.1561279296875], [121.048095703125, 28.1483154296875], [121.035888671875, 28.1439208984375], [121.025329589844, 28.1478881835938], [121.018310546875, 28.1395263671875], [121.00830078125, 28.1268920898438], [120.997680664063, 28.0872802734375], [120.989929199219, 28.0772705078125], [120.991088867188, 28.0745239257813], [120.99267578125, 28.0654907226563], [120.995910644531, 28.0582885742188], [120.996887207031, 28.051513671875], [120.992126464844, 28.0407104492188], [120.991088867188, 28.0321044921875], [120.985290527344, 28.0294799804688], [120.986083984375, 28.0234985351563], [120.980895996094, 28.0167236328125], [120.977512283883, 28.0129272727706], [120.969482421875, 27.9873046875], [120.965515136719, 27.9818725585938], [120.962539945989, 27.9744411612633], [120.95809536399, 27.9650581548213], [120.956119994213, 27.9586382030452], [120.956119994213, 27.9556751483793], [120.957601521546, 27.9527120937134], [120.963527630878, 27.9487613541589], [120.970935267543, 27.9443167721601], [120.972416794876, 27.9403660326056], [120.970441425098, 27.9349337657181], [120.962539945989, 27.9245630743875], [120.953156939547, 27.9132046981682], [120.947230830215, 27.9082662737251], [120.942786248217, 27.9057970615035], [120.938835508662, 27.9057970615035], [120.928958659776, 27.9117231708353], [120.922920343178, 27.9169873442796], [120.911838788373, 27.9189661933519], [120.90569319351, 27.9189661933519], [120.893402003785, 27.915454424859], [120.882866698306, 27.9101867721196], [120.858703613281, 27.8765258789063], [120.847473144531, 27.8685302734375], [120.840698242188, 27.8637084960938], [120.822692871094, 27.8572998046875], [120.812316894531, 27.8450927734375], [120.798706054688, 27.832275390625], [120.782287597656, 27.8161010742188], [120.771911621094, 27.8043212890625], [120.764099121094, 27.7929077148438], [120.75732421875, 27.7789306640625], [120.748474121094, 27.759521484375], [120.740112304688, 27.7396850585938], [120.729919433594, 27.7280883789063], [120.715881347656, 27.71728515625], [120.702270507813, 27.7147216796875], [120.68212890625, 27.705078125], [120.677124023438, 27.6961059570313], [120.668273925781, 27.6834716796875], [120.666076660156, 27.6807250976563], [120.660095214844, 27.6660766601563], [120.665100097656, 27.655517578125], [120.677124023438, 27.6431274414063], [120.67431640625, 27.6376953125], [120.663760270251, 27.6226193169198], [120.659491449537, 27.616522699537], [120.654296875, 27.611328125], [120.640686035156, 27.6008911132813], [120.621520996094, 27.5955200195313], [120.610290527344, 27.5993041992188], [120.60107421875, 27.5958862304688], [120.599304199219, 27.595703125], [120.597717285156, 27.590087890625], [120.596496582031, 27.5863037109375], [120.595886230469, 27.57568359375], [120.598327636719, 27.5653076171875], [120.598083496094, 27.5416870117188], [120.605285644531, 27.523681640625], [120.616882324219, 27.50390625], [120.636474609375, 27.4984741210938], [120.648315429688, 27.5029296875], [120.6630859375, 27.5032958984375], [120.681831669933, 27.4868540545763], [120.687072753906, 27.4799194335938], [120.679870605469, 27.4671020507813], [120.666320800781, 27.4536743164063], [120.661682128906, 27.4415283203125], [120.652201123274, 27.4196914821495], [120.648315429688, 27.407470703125], [120.646911621094, 27.3975219726563], [120.656677246094, 27.3897094726563], [120.649108886719, 27.3839111328125], [120.650085449219, 27.368896484375], [120.643127441406, 27.3651123046875], [120.6279296875, 27.365478515625], [120.615478515625, 27.36572265625], [120.619689941406, 27.3782958984375], [120.61328125, 27.3792724609375], [120.609924316406, 27.3828735351563], [120.610717773438, 27.3941040039063], [120.589904785156, 27.3825073242188], [120.579895019531, 27.3848876953125], [120.571210962407, 27.3834763695664], [120.556884765625, 27.3729248046875], [120.546325683594, 27.3643188476563], [120.530517578125, 27.3555297851563], [120.54052734375, 27.3427124023438], [120.541076660156, 27.3311157226563], [120.541076660156, 27.3206787109375], [120.553283691406, 27.3223266601563], [120.553033398151, 27.3136915428354], [120.55381154523, 27.3035100404288], [120.554077148438, 27.3035278320313], [120.565307617188, 27.2954711914063], [120.557312011719, 27.2930908203125], [120.546875, 27.2860717773438], [120.542344398866, 27.2807635357167], [120.537702745167, 27.2765960021979], [120.523536241509, 27.2638765313646], [120.51708984375, 27.2567138671875], [120.521484375, 27.248291015625], [120.536315917969, 27.2446899414063], [120.532470703125, 27.2354736328125], [120.529479980469, 27.2252807617188], [120.51171875, 27.2214965820313], [120.508911132813, 27.2139282226563], [120.512084960938, 27.207275390625], [120.519897460938, 27.2011108398438], [120.512084960938, 27.1948852539063], [120.496704101563, 27.1889038085938], [120.4873046875, 27.1751098632813], [120.474670410156, 27.1691284179688], [120.466491699219, 27.17431640625], [120.463684082031, 27.18408203125], [120.461303710938, 27.1948852539063], [120.466491699219, 27.1990966796875], [120.467712402344, 27.2081298828125], [120.463073730469, 27.2183227539063], [120.453674316406, 27.2216796875], [120.444885253906, 27.2108764648438], [120.43310546875, 27.215087890625], [120.429077148438, 27.2017211914063], [120.422912597656, 27.1990966796875], [120.426879882813, 27.1926879882813], [120.438293457031, 27.18212890625], [120.435485839844, 27.1771240234375], [120.435485839844, 27.1707153320313], [120.407470703125, 27.202880859375], [120.410705566406, 27.2266845703125], [120.400085449219, 27.2446899414063], [120.422485351563, 27.2625122070313], [120.352478027344, 27.3471069335938], [120.3466796875, 27.3958740234375], [120.324096679688, 27.3984985351563], [120.317687988281, 27.4100952148438], [120.27392578125, 27.3956909179688], [120.256713867188, 27.4310913085938], [120.243713378906, 27.4346923828125], [120.134521484375, 27.4223022460938], [120.122314453125, 27.401123046875], [120.103881835938, 27.3963012695313], [120.057922363281, 27.3546752929688], [120.031921386719, 27.344482421875], [119.998474121094, 27.382080078125], [119.965515136719, 27.3717041015625], [119.936706542969, 27.342529296875], [119.936889648438, 27.3165283203125], [119.900329589844, 27.315673828125], [119.871520996094, 27.3037109375], [119.842895507813, 27.3211059570313], [119.833312988281, 27.3167114257813], [119.830871582031, 27.30029296875], [119.779907226563, 27.3046875], [119.765686035156, 27.3076782226563], [119.765075683594, 27.319091796875], [119.7783203125, 27.32470703125], [119.735900878906, 27.3630981445313], [119.74072265625, 27.3746948242188], [119.728698730469, 27.3936767578125], [119.704528808594, 27.4049072265625], [119.680908203125, 27.434326171875], [119.702270507813, 27.4598999023438], [119.700073242188, 27.5109252929688], [119.6875, 27.53369140625], [119.658874511719, 27.5369262695313], [119.662719726563, 27.5712890625], [119.625122070313, 27.5966796875], [119.622497558594, 27.6229248046875], [119.64208984375, 27.6362915039063], [119.63330078125, 27.6738891601563], [119.551086425781, 27.6798706054688], [119.537902832031, 27.6708984375], [119.533325195313, 27.6478881835938], [119.489318847656, 27.6602783203125], [119.491516113281, 27.6234741210938], [119.461486816406, 27.5294799804688], [119.433471679688, 27.5119018554688], [119.411682128906, 27.542724609375], [119.371887207031, 27.5380859375], [119.334289550781, 27.5065307617188], [119.335510253906, 27.4868774414063], [119.2802734375, 27.4608764648438], [119.261291503906, 27.4326782226563], [119.220275878906, 27.4237060546875], [119.126525878906, 27.4375], [119.119506835938, 27.4426879882813], [119.126708984375, 27.47607421875], [119.119079589844, 27.4871215820313], [119.085876464844, 27.4724731445313], [119.052917480469, 27.47412109375], [119.006286621094, 27.5001220703125], [118.981323242188, 27.4793090820313], [118.953308105469, 27.481689453125], [118.951477050781, 27.4625244140625], [118.911499023438, 27.4617309570313], [118.898315429688, 27.4711303710938], [118.876892089844, 27.519287109375], [118.854675292969, 27.5256958007813], [118.894287109375, 27.5432739257813], [118.904296875, 27.5764770507813], [118.896484375, 27.6505126953125], [118.867492675781, 27.698486328125], [118.870727539063, 27.7100830078125], [118.891479492188, 27.717529296875], [118.862915039063, 27.7476806640625], [118.828491210938, 27.8449096679688], [118.826293945313, 27.8582763671875], [118.826293945313, 27.882080078125], [118.803100585938, 27.9246826171875], [118.791687011719, 27.9373168945313], [118.743896484375, 27.955078125], [118.722900390625, 27.9786987304688], [118.725708007813, 28.0380859375], [118.712524414063, 28.0629272460938], [118.748718261719, 28.1005249023438], [118.79248046875, 28.123291015625], [118.800109863281, 28.1469116210938], [118.791687011719, 28.17431640625], [118.761291503906, 28.1779174804688], [118.800903320313, 28.22412109375], [118.802673339844, 28.2410888671875], [118.767883300781, 28.2512817382813], [118.731689453125, 28.2744750976563], [118.719482421875, 28.3082885742188], [118.693725585938, 28.3101196289063], [118.669677734375, 28.2802734375], [118.603515625, 28.25732421875], [118.573120117188, 28.2921142578125], [118.518920898438, 28.2730712890625], [118.495300292969, 28.2821044921875], [118.485473632813, 28.2412719726563], [118.435729980469, 28.2686767578125], [118.42431640625, 28.2922973632813], [118.457092285156, 28.3054809570313], [118.481079101563, 28.3358764648438], [118.439086914063, 28.4091186523438], [118.467529296875, 28.4735107421875], [118.416687011719, 28.4968872070313], [118.431518554688, 28.5206909179688], [118.423522949219, 28.5330810546875], [118.409118652344, 28.5906982421875], [118.431091308594, 28.6187133789063], [118.412292480469, 28.6472778320313], [118.432312011719, 28.674072265625], [118.40087890625, 28.7089233398438], [118.380676269531, 28.7841186523438], [118.360473632813, 28.8120727539063], [118.296875, 28.8361206054688], [118.275512695313, 28.9083251953125], [118.250671386719, 28.9263305664063], [118.194702148438, 28.909912109375], [118.216491699219, 28.9412841796875], [118.181274414063, 28.9822998046875], [118.096496582031, 28.9937133789063], [118.064514160156, 29.0540771484375], [118.068725585938, 29.0791015625], [118.040283203125, 29.0983276367188], [118.046508789063, 29.119873046875], [118.0283203125, 29.1790771484375], [118.034729003906, 29.2100830078125], [118.074523925781, 29.2286987304688], [118.070678710938, 29.2860717773438], [118.07373046875, 29.2938842773438], [118.097290039063, 29.2874755859375], [118.111694335938, 29.2957153320313], [118.144470214844, 29.2872924804688], [118.165893554688, 29.299072265625], [118.164306640625, 29.3184814453125], [118.207092285156, 29.3543090820313], [118.189514160156, 29.3953247070313], [118.240478515625, 29.4346923828125], [118.302917480469, 29.4251098632813], [118.311279296875, 29.4434814453125], [118.3037109375, 29.4896850585938], [118.31689453125, 29.4979248046875], [118.337280273438, 29.4824829101563], [118.381530761719, 29.4901123046875], [118.397277832031, 29.4801025390625], [118.402282714844, 29.5056762695313], [118.443725585938, 29.5128784179688], [118.483276367188, 29.5206909179688], [118.495483398438, 29.5667114257813], [118.572509765625, 29.6378784179688], [118.615112304688, 29.6528930664063], [118.643310546875, 29.648681640625], [118.691101074219, 29.6998901367188], [118.722473144531, 29.7166748046875], [118.743286132813, 29.7568969726563], [118.733276367188, 29.8151245117188], [118.753479003906, 29.8212890625], [118.748474121094, 29.8392944335938], [118.755920410156, 29.848876953125], [118.779724121094, 29.8483276367188], [118.834289550781, 29.8956909179688], [118.841125488281, 29.909912109375], [118.835083007813, 29.9415283203125], [118.891479492188, 29.9512939453125], [118.895080566406, 30.0222778320313], [118.86572265625, 30.1082763671875], [118.894287109375, 30.1400756835938], [118.89208984375, 30.1558837890625], [118.881896972656, 30.1636962890625], [118.857727050781, 30.1541137695313], [118.847717285156, 30.1666870117188], [118.899475097656, 30.1912841796875], [118.921081542969, 30.2147216796875], [118.889892578125, 30.2346801757813], [118.875122070313, 30.2860717773438], [118.879089355469, 30.3170776367188], [118.952880859375, 30.3640747070313], [119.042297363281, 30.3104858398438], [119.053100585938, 30.3084716796875], [119.085327148438, 30.3297119140625], [119.120483398438, 30.3118896484375], [119.225280761719, 30.2954711914063], [119.248474121094, 30.3463134765625], [119.283325195313, 30.348876953125], [119.322875976563, 30.3762817382813], [119.347900390625, 30.3574829101563], [119.363891601563, 30.3558959960938], [119.410705566406, 30.3815307617188], [119.377075195313, 30.3919067382813], [119.345886230469, 30.4202880859375], [119.322875976563, 30.5338745117188], [119.269897460938, 30.5155029296875], [119.238891601563, 30.5401000976563], [119.239318847656, 30.555908203125], [119.263488769531, 30.582275390625], [119.23828125, 30.61767578125], [119.311279296875, 30.6243286132813], [119.343322753906, 30.672119140625], [119.380493164063, 30.6882934570313], [119.397094726563, 30.68212890625], [119.410095214844, 30.648681640625], [119.439270019531, 30.6528930664063], [119.486511230469, 30.7178955078125], [119.485290527344, 30.7830810546875], [119.496276855469, 30.7908935546875], [119.51171875, 30.778076171875], [119.531311035156, 30.7843017578125], [119.5703125, 30.8389282226563], [119.572326660156, 30.8568725585938], [119.555480957031, 30.8826904296875], [119.55908203125, 30.9166870117188], [119.582702636719, 30.9711303710938], [119.629089355469, 31.0219116210938], [119.624694824219, 31.087890625], [119.644470214844, 31.11572265625], [119.632080078125, 31.1392822265625], [119.637084960938, 31.1516723632813], [119.66748046875, 31.1672973632813], [119.69287109375, 31.15869140625], [119.720092773438, 31.173095703125], [119.779724121094, 31.1826782226563], [119.794494628906, 31.164306640625], [119.825073242188, 31.1785278320313], [119.881286621094, 31.1685180664063], [119.918884277344, 31.1749267578125], [119.999084472656, 31.0291137695313], [120.048706054688, 31.0119018554688], [120.1123046875, 30.960693359375], [120.153503417969, 30.940673828125], [120.229309082031, 30.9324951171875], [120.295471191406, 30.9367065429688], [120.361694335938, 30.9520874023438], [120.350524902344, 30.8876953125], [120.407897949219, 30.8928833007813], [120.40771484375, 30.9216918945313], [120.419311523438, 30.9281005859375], [120.443908691406, 30.8740844726563], [120.436096191406, 30.8574829101563], [120.453491210938, 30.84130859375], [120.448303222656, 30.8167114257813], [120.4873046875, 30.7684936523438], [120.501892089844, 30.7628784179688], [120.529724121094, 30.79931640625], [120.585876464844, 30.8594970703125], [120.646118164063, 30.8536987304688], [120.705322265625, 30.90087890625], [120.705322265625, 30.9329223632813], [120.678527832031, 30.9561157226563], [120.702880859375, 30.970703125], [120.74169921875, 30.9664916992188], [120.775512695313, 31.0018920898438], [120.821105957031, 31.00830078125], [120.839111328125, 30.984130859375], [120.895080566406, 31.0120849609375], [120.954895019531, 31.0263061523438], [120.98388671875, 31.0126953125], [120.9951171875, 31.0015258789063], [120.989074707031, 30.9456787109375], [120.981506347656, 30.8953247070313], [121.00830078125, 30.8837280273438], [121.011901855469, 30.8739013671875], [120.983093261719, 30.8291015625], [121.008483886719, 30.8380737304688], [121.036499023438, 30.8262939453125], [121.0615234375, 30.8494873046875], [121.114685058594, 30.8529052734375], [121.132080078125, 30.8292846679688], [121.117309570313, 30.8046875], [121.118530273438, 30.7841186523438], [121.172119140625, 30.7747192382813], [121.221923828125, 30.7813110351563], [121.234130859375, 30.7559204101563], [121.263671875, 30.734130859375], [121.267700195313, 30.701904296875], [121.25830078125, 30.7003173828125], [121.23828125, 30.6901245117188], [121.21630859375, 30.6763305664063], [121.195922851563, 30.664306640625], [121.173889160156, 30.6516723632813]]
            }]
        })
    }, 0), option2 = {
        title: {text: "景区等级分布比例", color: "white", x: "center", textStyle: {color: "white"}},
        tooltip: {trigger: "item", formatter: "{a} <br/>{b} : {c}个 ({d}%)"},
        color: ["#00DDFF", "#BB0069", "#35ac84", "#F3CE30", "#2A5cee"],
        legend: {
            orient: "vertical",
            left: "right",
            textStyle: {color: "white"},
            data: ["1A 级", "2A 级", "3A 级", "4A 级", "5A 级"]
        },
        series: [{
            name: "景区等级",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [{value: 0, name: "1A 级"}, {value: 0, name: "2A 级"}, {value: 56, name: "3A 级"}, {
                value: 6,
                name: "4A 级"
            }, {value: 16, name: "5A 级"}],
            itemStyle: {emphasis: {shadowBlur: 10, shadowOffsetX: 0, shadowColor: "rgba(0, 0, 0, 0.5)"}}
        }]
    }, t.setOption(option1), a.setOption(option2)
}
function townRate() {
    var e = echarts.init(document.getElementById("town-rate"));
    option = {
        title: {text: "建制镇与非建制镇比例", subtext: "", x: "center", y: 60, textStyle: {color: "#fff", fontSize: 14}},
        tooltip: {trigger: "item", formatter: "{a} <br/>{b}: {d}%"},
        legend: {orient: "vertical", left: "left"},
        color: ["#35ac84", "#246cd2"],
        series: [{
            name: "",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [{value: 10, name: "建制镇"}, {value: 90, name: "非建制镇"}],
            itemStyle: {emphasis: {shadowBlur: 10, shadowOffsetX: 0, shadowColor: "rgba(0, 0, 0, 0.5)"}}
        }]
    }, e.setOption(option), $.get(requestUrl + "big-data/get-all-towns-point", function (t) {
        getStatus(t), e.setOption({
            series: [{
                data: [{
                    value: 100 - t.result.notTownScale,
                    name: "建制镇"
                }, {value: t.result.notTownScale, name: "非建制镇"}]
            }]
        })
    })
}
function getHotWordsLeft() {
    $("p.weixin-toggle").hide();
    var e = echarts.init(document.getElementById("hot-words-left")), t = {
        title: {
            text: "",
            x: "center",
            textStyle: {fontSize: 20, color: "#fff"}
        },
        backgroundColor: "#0D142E",
        tooltip: {show: !0},
        toolbox: {show: !1, feature: {saveAsImage: {iconStyle: {normal: {color: "#FFFFFF"}}}}},
        series: [{
            name: "",
            type: "wordCloud",
            sizeRange: [16, 96],
            rotationRange: [-45, 90],
            textPadding: 0,
            autoSize: {enable: !0, minSize: 6},
            textStyle: {
                normal: {
                    color: function (e) {
                        e.dataIndex % 8 == 0 ? e.dataIndex = 0 : e.dataIndex % 8 == 1 ? e.dataIndex = 1 : e.dataIndex % 8 == 2 ? e.dataIndex = 2 : e.dataIndex % 8 == 3 ? e.dataIndex = 3 : e.dataIndex % 8 == 4 ? e.dataIndex = 4 : e.dataIndex % 8 == 5 ? e.dataIndex = 5 : e.dataIndex = 6;
                        var t = ["#D0AB22", "#C684C7", "#E43E51", "#09AFD4", "#C17D46", "#3058CD", "#2D9774", "#F95570"];
                        return t[e.dataIndex]
                    }
                }, emphasis: {shadowBlur: 10, shadowColor: "#333"}
            },
            data: []
        }]
    }, a = [];
    e.on("click", function (e) {
        $("#hot-words-right").show(), $(".hot-words-content-left").animate({left: "0px"}), getHotWordsRight(e.color, e.name), $(".word-param").html('"' + e.name + '"折线图').css("color", e.color)
    }), $.get(requestUrl + "big-data/get-hot-word-data", function (o) {
        if (getStatus(o), 200 == o.code) {
            for (var n = 0; n < o.result.hotWord.length; n++)a.push({
                name: o.result.hotWord[n].word,
                value: o.result.hotWord[n].value
            });
            t.series[0].data = a, e.setOption(t)
        }
    })
}
function getHotWordsLeftInc() {
    $("p.weixin-toggle").hide();
    var e = echarts.init(document.getElementById("hot-words-left")), t = {
        title: {
            text: "",
            x: "center",
            textStyle: {fontSize: 20, color: "#fff"}
        },
        backgroundColor: "#0D142E",
        tooltip: {show: !0},
        toolbox: {show: !1, feature: {saveAsImage: {iconStyle: {normal: {color: "#FFFFFF"}}}}},
        series: [{
            name: "",
            type: "wordCloud",
            sizeRange: [16, 96],
            rotationRange: [-45, 90],
            textPadding: 0,
            autoSize: {enable: !0, minSize: 6},
            textStyle: {
                normal: {
                    color: function (e) {
                        e.dataIndex % 8 == 0 ? e.dataIndex = 0 : e.dataIndex % 8 == 1 ? e.dataIndex = 1 : e.dataIndex % 8 == 2 ? e.dataIndex = 2 : e.dataIndex % 8 == 3 ? e.dataIndex = 3 : e.dataIndex % 8 == 4 ? e.dataIndex = 4 : e.dataIndex % 8 == 5 ? e.dataIndex = 5 : e.dataIndex % 8 == 6 ? e.dataIndex = 6 : e.dataIndex = 7;
                        var t = ["#CD0E0E", "#D18900", "#F86523", "#FF9F00", "#FF73A5", "#C7600D", "#D60D6A", "#F95570"];
                        return t[e.dataIndex]
                    }
                }, emphasis: {shadowBlur: 10, shadowColor: "#333"}
            },
            data: []
        }]
    }, a = [];
    t.series[0].data = a, e.on("click", function (e) {
        $("#hot-words-right").show(), $(".hot-words-content-left").animate({left: "0px"}), getHotWordsRight(e.color, e.name), $(".word-param").html('"' + e.name + '"折线图(上升趋势)').css("color", e.color)
    }), e.setOption(t), $.get(requestUrl + "big-data/get-hot-word-data", function (o) {
        if (getStatus(o), 200 == o.code) {
            for (var n = 0; n < o.result.RankUp.length; n++)a.push({
                name: o.result.RankUp[n].word,
                value: parseInt(o.result.RankUp[n].value)
            });
            t.series[0].data = a, e.setOption(t)
        }
    })
}
function getHotWordsLeftDec() {
    $("p.weixin-toggle").hide();
    var e = echarts.init(document.getElementById("hot-words-left"));
    option = {
        title: {text: "", x: "center", textStyle: {fontSize: 20, color: "#fff"}},
        backgroundColor: "#0D142E",
        tooltip: {show: !0},
        toolbox: {show: !1, feature: {saveAsImage: {iconStyle: {normal: {color: "#FFFFFF"}}}}},
        series: [{
            name: "",
            type: "wordCloud",
            sizeRange: [16, 96],
            rotationRange: [-45, 90],
            textPadding: 0,
            autoSize: {enable: !0, minSize: 6},
            textStyle: {
                normal: {
                    color: function (e) {
                        e.dataIndex % 8 == 0 ? e.dataIndex = 0 : e.dataIndex % 8 == 1 ? e.dataIndex = 1 : e.dataIndex % 8 == 2 ? e.dataIndex = 2 : e.dataIndex % 8 == 3 ? e.dataIndex = 3 : e.dataIndex % 8 == 4 ? e.dataIndex = 4 : e.dataIndex % 8 == 5 ? e.dataIndex = 5 : e.dataIndex % 8 == 6 ? e.dataIndex = 6 : e.dataIndex = 7;
                        var t = ["#2E9774", "#B3A0FT", "#0067FF", "#3BC11C", "#5D60C9", "#09AFD4", "#3058CD", "#84979A"];
                        return t[e.dataIndex]
                    }
                }, emphasis: {shadowBlur: 10, shadowColor: "#333"}
            },
            data: []
        }]
    };
    var t = [];
    option.series[0].data = t, e.on("click", function (e) {
        $("#hot-words-right").show(), $(".hot-words-content-left").animate({left: "0px"}), getHotWordsRight(e.color, e.name), $(".word-param").html('"' + e.name + '"折线图(下降趋势)').css("color", e.color)
    }), e.setOption(option), $.get(requestUrl + "big-data/get-hot-word-data", function (a) {
        if (getStatus(a), 200 == a.code) {
            for (var o = 0; o < a.result.RankDown.length; o++)t.push({
                name: a.result.RankDown[o].word,
                value: Math.abs(a.result.RankDown[o].value)
            });
            option.series[0].data = t, e.setOption(option)
        }
    })
}
function getHotWordsRight(e, t) {
    $("p.weixin-toggle").fadeIn(), $("p.word-param").fadeIn();
    var a = echarts.init(document.getElementById("hot-words-right"));
    option = {
        color: [e],
        title: {text: "", left: "center", textStyle: {color: "#fff"}},
        tooltip: {trigger: "axis"},
        legend: {},
        grid: {left: "3%", right: "4%", bottom: "3%", containLabel: !0},
        toolbox: {show: !1, feature: {saveAsImage: {}}},
        xAxis: {
            type: "category",
            boundaryGap: !1,
            data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
            axisLine: {lineStyle: {color: "#a7a7a7"}}
        },
        yAxis: {type: "value", axisLine: {lineStyle: {color: "#a7a7a7"}}},
        series: [{name: t, type: "line", stack: "总量", data: []}]
    }, a.setOption(option), $.get(encodeURI(requestUrl + "big-data/get-history-word-data?word=" + t), function (e) {
        if (getStatus(e), 200 == e.code) {
            for (var t = [], o = [], n = 0; n < e.result.length; n++)t.push(e.result[n].value), o.push(e.result[n].year + "年" + e.result[n].Month + "月");
            a.setOption({xAxis: {data: o}, series: [{data: t}]})
        }
    })
}
function getProjectsLeft() {
    var e = echarts.init(document.getElementById("projects-left")), t = {
        title: {
            text: "",
            left: "center",
            textStyle: {color: "#fff", fontSize: 20}
        },
        tooltip: {trigger: "item"},
        legend: {orient: "vertical", y: "30", x: "20", data: [], textStyle: {color: "#fff"}},
        visualMap: {
            min: 0,
            max: 763,
            left: "30",
            top: "270",
            text: ["高", "低"],
            calculable: !0,
            textStyle: {color: "#fff"},
            color: ["#42B38C", "#fff"]
        },
        toolbox: {
            show: !1,
            orient: "vertical",
            left: "right",
            top: "center",
            feature: {dataView: {readOnly: !1}, restore: {}, saveAsImage: {}}
        },
        series: [{
            name: "招标公告",
            type: "map",
            mapType: "china",
            showLegendSymbol: !1,
            roam: !0,
            itemStyle: {normal: {areaColor: "#000", borderColor: "#ddd"}, emphasis: {areaColor: "#35ac84"}},
            label: {normal: {show: !0, textStyle: {color: "#666"}}, emphasis: {show: !0, textStyle: {color: "#fff"}}},
            data: []
        }, {
            name: "中标公告",
            type: "map",
            showLegendSymbol: !1,
            mapType: "china",
            itemStyle: {emphasis: {areaColor: "#35ac84"}},
            label: {normal: {show: !0, textStyle: {color: "#fff"}}, emphasis: {show: !0, textStyle: {color: "#fff"}}},
            data: []
        }, {
            name: "变更公告",
            type: "map",
            showLegendSymbol: !1,
            mapType: "china",
            itemStyle: {emphasis: {areaColor: "#35ac84"}},
            label: {normal: {show: !0, textStyle: {color: "#fff"}}, emphasis: {show: !0, textStyle: {color: "#fff"}}},
            data: []
        }, {
            name: "废标公告",
            type: "map",
            showLegendSymbol: !1,
            mapType: "china",
            label: {normal: {show: !0}, emphasis: {show: !0}},
            data: []
        }, {
            name: "其他公告",
            type: "map",
            showLegendSymbol: !1,
            mapType: "china",
            itemStyle: {emphasis: {areaColor: "#35ac84"}},
            label: {normal: {show: !0, textStyle: {color: "#fff"}}, emphasis: {show: !0, textStyle: {color: "#fff"}}},
            data: []
        }]
    }, a = [], o = [], n = [], r = [], l = [];
    $.get(requestUrl + "big-data/get-bid-project-data", function (i) {
        if (getStatus(i), 200 == i.code)for (var s = 0; s < i.result.length; s++) {
            i.result[s].province.indexOf("黑龙江") >= 0 && (i.result[s].province = "黑龙江");
            for (var m in i.result[s].type) {
                var u = i.result[s].type["中标公告"], c = i.result[s].type["其他公告"];
                void 0 == c && (c = 0);
                var d = i.result[s].type["变更公告"];
                void 0 == d && (d = 0);
                var p = i.result[s].type["废标公告"];
                void 0 == p && (p = 0);
                var f = i.result[s].type["招标公告"];
                void 0 == f && (f = 0)
            }
            i.result[s].province.indexOf("内蒙古") >= 0 ? (i.result[s].province = "内蒙古", a.push({
                name: i.result[s].province.substring(0, 3),
                value: u
            }), o.push({
                name: i.result[s].province.substring(0, 3),
                value: c
            }), n.push({
                name: i.result[s].province.substring(0, 3),
                value: d
            }), r.push({
                name: i.result[s].province.substring(0, 3),
                value: p
            }), l.push({
                name: i.result[s].province.substring(0, 3),
                value: f
            })) : i.result[s].province.indexOf("黑龙江") >= 0 ? (i.result[s].province = "黑龙江", a.push({
                name: i.result[s].province.substring(0, 3),
                value: u
            }), o.push({
                name: i.result[s].province.substring(0, 3),
                value: c
            }), n.push({
                name: i.result[s].province.substring(0, 3),
                value: d
            }), r.push({
                name: i.result[s].province.substring(0, 3),
                value: p
            }), l.push({
                name: i.result[s].province.substring(0, 3),
                value: f
            })) : (a.push({
                name: i.result[s].province.substring(0, 2),
                value: u
            }), o.push({
                name: i.result[s].province.substring(0, 2),
                value: c
            }), n.push({
                name: i.result[s].province.substring(0, 2),
                value: d
            }), r.push({
                name: i.result[s].province.substring(0, 2),
                value: p
            }), l.push({name: i.result[s].province.substring(0, 2), value: f}))
        }
        e.setOption(t), e.setOption({
            series: [{name: "中标公告", data: a}, {name: "其他公告", data: o}, {
                name: "变更公告",
                data: n
            }, {name: "废标公告", data: r}, {name: "招标公告", data: l}]
        })
    }), e.on("click", function (e) {
        $("#projects-left").animate({marginLeft: "0"}), $("#projects-right").fadeIn(), $(".content-right p.project-toggle").fadeIn(), getProjectsRight(e.name)
    })
}
function getProjectsRight(e) {
    var t = echarts.init(document.getElementById("projects-right"));
    option = {
        title: {
            text: e + "招投标信息",
            subtext: " ",
            sublink: "",
            left: "center",
            textStyle: {color: "#fff", fontSize: 20}
        },
        color: ["#3398DB"],
        tooltip: {trigger: "axis", axisPointer: {type: "shadow"}},
        legend: {
            orient: "horizontal",
            bottom: "0%",
            data: [],
            textStyle: {fontWeight: "normal", fontSize: 12, color: "#fff"}
        },
        grid: {left: "3%", right: "4%", bottom: "3%", containLabel: !0},
        xAxis: [{
            type: "category",
            data: [],
            axisTick: {alignWithLabel: !0},
            axisLine: {lineStyle: {color: "#a7a7a7"}}
        }],
        yAxis: [{type: "value", axisLine: {lineStyle: {color: "#a7a7a7"}}}],
        series: [{
            name: " 数量", type: "bar", barWidth: "60%", data: [], itemStyle: {
                normal: {
                    color: function (e) {
                        var t = ["#ffe108", "#0857ff", "#35ac84", "#a7a7a7", "#5442fd"];
                        return t[e.dataIndex]
                    }
                }
            }
        }]
    };
    var a = [], o = [];
    t.setOption(option), $.get(requestUrl + "big-data/get-bid-project-data", function (n) {
        for (var r = 0; r < n.result.length; r++)if (n.result[r].province.substr(0, 2) == e.substr(0, 2))for (var l in n.result[r].type)a.push(l), o.push(n.result[r].type[l]);
        t.setOption({xAxis: [{data: a}], series: [{data: o}]})
    })
}
function getRunModelLeft() {
    var e = echarts.init(document.getElementById("run-model-left")), t = [], a = function (a) {
        $.get(requestUrl + "big-data/get-operation-model-data", function (a) {
            if (getStatus(a), 200 == a.code)for (var o = 0; o < a.result.TenderInstructionCount.length; o++) {
                var n = a.result, r = n.TenderInstructionCount[o].xy.split(",");
                t.push({
                    name: n.TenderInstructionCount[o].name,
                    value: [parseFloat(r[0]), parseFloat(r[1]), parseFloat(n.TenderInstructionCount[o].count), parseFloat(n.TenderInstructionCount[o].gov_count / n.TenderInstructionCount[o].count)]
                })
            }
            option = {
                title: {text: "", left: "center", textStyle: {color: "#fff", fontSize: 20}},
                visualMap: {
                    min: 0,
                    max: 1,
                    type: "continuous",
                    left: "30",
                    top: "270",
                    text: ["政府主导", "企业主导"],
                    calculable: !0,
                    itemStyle: {normal: {color: "#f4e925", shadowBlur: 10, shadowColor: "#333"}},
                    textStyle: {color: "#fff"},
                    inRange: {color: ["#F6EFA6", "#E6040E"]}
                },
                series: [{
                    name: "Top 10",
                    type: "effectScatter",
                    coordinateSystem: "geo",
                    data: t.slice(0, 10),
                    visualMap: !1,
                    symbolSize: function (e) {
                        return 10
                    },
                    showEffectOn: "render",
                    rippleEffect: {brushType: "stroke"},
                    hoverAnimation: !0,
                    label: {normal: {formatter: "{b}", position: "right", show: !1}},
                    zlevel: 1
                }, {
                    name: "",
                    type: "scatter",
                    coordinateSystem: "geo",
                    data: t,
                    symbolSize: function (e) {
                        return 10
                    },
                    label: {normal: {formatter: "{b}", position: "right", show: !1}, emphasis: {show: !0}},
                    itemStyle: {normal: {color: "#f4e925"}}
                }],
                tooltip: {
                    trigger: "item", formatter: function (e) {
                        var t = e.value.toString().split(",");
                        return e.name + "招投标总数: " + t[2] + "条"
                    }
                },
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: "#26a47b"
                        }, {offset: 1, color: "#06de96"}])
                    }
                },
                legend: {orient: "vertical", y: "30", x: "20", data: ["招标", "中标"], textStyle: {color: "#fff"}},
                toolbox: {
                    show: !1,
                    orient: "vertical",
                    left: "right",
                    top: "center",
                    feature: {dataView: {readOnly: !1}, restore: {}, saveAsImage: {}}
                },
                geo: {
                    map: "china",
                    label: {emphasis: {show: !1}},
                    roam: !0,
                    itemStyle: {normal: {areaColor: "#152451", borderColor: "#ddd"}, emphasis: {areaColor: "#1a3788"}}
                }
            }, e.setOption(option)
        })
    };
    a(), e.on("click", function (e) {
        for (var t = 0, a = ["黑龙江", "吉林", "辽宁", "河北", "河南", "山东", "江苏", "山西", "陕西", "甘肃", "四川", "青海", "湖南", "湖北", "江西", "安徽", "浙江", "福建", "广东", "广西", "贵州", "云南", "海南", "内蒙古", "新疆", "宁夏", "西藏", "北京", "台湾", "天津", "上海", "重庆", "香港", "澳门", ""], o = 0; o < a.length; o++)e.name != a[o] && t++, 35 == t && ($("#run-model-right").show(), getRunModelRight(e.name))
    })
}
function getRunModelRight(e) {
    var t = echarts.init(document.getElementById("run-model-right"));
    option = {
        title: {
            text: e,
            subtext: "政企招投标比",
            subtextStyle: {color: "#fff"},
            x: "center",
            y: "30",
            textStyle: {fontWeight: "normal", fontSize: 16, color: "#fff"}
        },
        tooltip: {trigger: "item", formatter: "{a} <br/>{b} : {c} ({d}%)"},
        legend: {orient: "vertical", left: "left", top: "30", data: ["政府", "企业"], textStyle: {color: "#fff"}},
        color: ["#E6040E", "#F6EFA6"],
        series: [{
            name: "数量",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [],
            itemStyle: {emphasis: {shadowBlur: 10, shadowOffsetX: 0, shadowColor: "rgba(0, 0, 0, 0.5)"}}
        }]
    }, t.setOption(option), $.get(requestUrl + "big-data/get-operation-model-data", function (a) {
        getStatus(a);
        for (var o = 0; o < a.result.TenderInstructionCount.length; o++)if (a.result.TenderInstructionCount[o].name == e) {
            var n = a.result.TenderInstructionCount[o].gov_count, r = a.result.TenderInstructionCount[o].com_count;
            t.setOption({series: [{data: [{value: n, name: "政府"}, {value: r, name: "企业"}]}]})
        }
    })
}
var time;