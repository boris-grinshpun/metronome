import 'chartist/dist/index.css';
import './graph.css'
import { LineChart, AutoScaleAxis } from 'chartist';
import { useContext, useEffect } from 'react';
import { ControlsContext } from '../../store/context';

export function Graph() {
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
  }  = useContext(ControlsContext)

  type GraphPoint = {
    x: number,
    y: number
  }
  
  const series:GraphPoint[] = []
  for (let i = 0; i < bars; i++){
    series.push(
      {
        x: i + 1,
        y: bpm
      }
    )
  }
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
        axisX: {
          type: AutoScaleAxis,
          onlyInteger: true
        }
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