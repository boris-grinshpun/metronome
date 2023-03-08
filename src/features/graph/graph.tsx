import 'chartist/dist/index.css';
import './graph.css'
import { LineChart, AutoScaleAxis, Interpolation } from 'chartist';
import { useContext, useEffect } from 'react';
import { ControlsContext } from '../../store/context';

export function Graph({ series }: { series: GraphPoint[] }) {
  const {
    bpm,
    bars,
    totalBars,
    loops,
    up,
    upReps,
    downReps,
    down,
    sigBeat,
    sigTime,
  } = useContext(ControlsContext)

  useEffect(() => {
    new LineChart(
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
  }, [
    bpm,
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