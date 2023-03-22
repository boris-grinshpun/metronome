import 'chartist/dist/index.css';
import './graph.css'
import { LineChart, AutoScaleAxis, Interpolation, Svg } from 'chartist';
import { useContext, useEffect } from 'react';
import { ControlsContext } from '../../store/context';

export function Graph({ series }: { series: GraphPoint[] }) {
  const {
    bpm,
    targetBpm,
    bars,
    totalBars,
    loops,
    up,
    upReps,
    downReps,
    down,
    sigBeat,
    sigTime,
    tickIndex
  } = useContext(ControlsContext)

  useEffect(() => {
    const chart = new LineChart(
      '#chart',
      {
        series: [
          [
            ...series
          ]
        ]
      },
      {
        axisY: {
          // high: series[series.length-1].y,
          // low: series[0].y,
          // divisor: 8,
          // ticks: series.map(t=>t.y),
          // referenceValue: series[0].y,
          scaleMinSpace: 11,
          type: AutoScaleAxis,
          onlyInteger: true,
          showLabel: true,
        },
        axisX: {
          scaleMinSpace: 10,
          type: AutoScaleAxis,
          onlyInteger: true,
          showLabel: false,
        },
        width: '350px',
        height: '200px',
        lineSmooth: Interpolation.none({
          fillHoles: false
        })
      }
    );
    chart.on('draw', data => {
      // If the draw event was triggered from drawing a point on the line chart
      if (data.type === 'point' && data.index === tickIndex) {
        console.log(data)
        // We are creating a new path SVG element that draws a triangle around the point coordinates
        const triangle = new Svg(
          'circle',
          {
            cx:data.x,
            cy:data.y,
            r: 4,
            style: 'fill-opacity: 1',
            fill: '#FFFFFF'
          },
        );
    
        // With data.element we get the Chartist SVG wrapper and we can replace the original point drawn by Chartist with our newly created triangle
        data.element.replace(triangle);
      }
    });
  }, [
    tickIndex,
    bpm,
    targetBpm,
    bars,
    loops,
    up,
    upReps,
    downReps,
    down,
    sigBeat,
    sigTime,
    totalBars
  ])

  return (
    <div id="chart"></div>
  )
}