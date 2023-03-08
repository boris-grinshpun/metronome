import 'chartist/dist/index.css';
import './graph.css'
import { LineChart, AutoScaleAxis, StepAxis, Interpolation } from 'chartist';
import { useContext, useEffect } from 'react';
import { ControlsContext } from '../../store/context';
import { useSeries } from './useSeries';

export function Graph({ series }: { series: GraphPoint[] }) {
  const {
    bpm,
    bars,
    graph,
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
          type: AutoScaleAxis,
          low: bpm,
          onlyInteger: true,
        },
        axisX: {
          type: AutoScaleAxis,
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
    sigTime
  ])

  return (
    <div id="chart"></div>
  )
}