/**
 * 折线图
 * 按需引入
 */

import { useEffect, useRef } from 'react';
import classnames from 'classnames';
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入折线图图表，图表后缀都为 Chart
import { LineChart } from 'echarts/charts';
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import { GridComponent, DatasetComponent, TransformComponent, DataZoomComponent } from 'echarts/components';
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { SVGRenderer } from 'echarts/renderers';
// 注册必须的组件
echarts.use([
    GridComponent,
    DatasetComponent,
    TransformComponent,
    LineChart,
    LabelLayout,
    UniversalTransition,
    SVGRenderer,
    DataZoomComponent
]);

type ECharts = echarts.ECharts;

export interface ILineDataItem {
    label: string;
    value: number;
}
interface ILineProps {
    data: Array<ILineDataItem>;
    className?: string;
}
function Line({ data = [], className }: ILineProps) {
    const lineContainerRef = useRef(null);
    let chartInstance = useRef<ECharts | null>(null);
    useEffect(() => {
        if (lineContainerRef.current) {
            chartInstance.current = echarts.init(lineContainerRef.current);
            chartInstance.current?.setOption({
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: data.map((item) => item.label),
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: false,
                    show: false
                },
                dataZoom: [
                    {
                        type: 'inside',
                        start: 0,
                        end: 50
                    }
                ],
                grid: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 24
                },
                series: [
                    {
                        name: 'Fake Data',
                        type: 'line',
                        smooth: true,
                        symbol: 'none',
                        sampling: 'lttb',
                        itemStyle: {
                            color: '#e9c939'
                        },
                        areaStyle: {
                            color: '#e9c939',
                            opacity: 0.25
                        },
                        data: data.map((item) => item.value)
                    }
                ]
            });
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current?.dispose?.();
            }
        };
        // eslint-disable-next-line
    }, [data]);

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;
        console.log('aaa2');
        function resize() {
            console.log('aaa1');
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                if (chartInstance.current) {
                    console.log('aaa');
                    chartInstance.current?.resize?.();
                }
            }, 150);
        }
        window.addEventListener('resize', resize);

        return window.removeEventListener('resize', resize);
    }, []);

    return (
        <div>
            <div
                ref={lineContainerRef}
                className={classnames(className)}
                style={{ width: '100%', height: '120px' }}></div>
        </div>
    );
}

export default Line;
