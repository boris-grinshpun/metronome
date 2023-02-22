import 'chartist/dist/index.css';
import './graph.css'
import { LineChart, AutoScaleAxis } from 'chartist';
import { useContext, useEffect } from 'react';
import { ControlsContext } from '../../store/context';

export function Graph(props) {
  const state = useContext(ControlsContext)
  console.log(state)
  //   {
  //     "bpm": 60,
  //     "bars": 12,
  //     "type": "linear",
  //     "loops": 0,
  //     "up": 1,
  //     "upReps": 2,
  //     "downReps": 2,
  //     "down": 1,
  //     "sigBeat": 4,
  //     "sigTime": 4
  // }

  
  useEffect(() => {
    new LineChart(
      '#chart',
      {
        series: [
          [
            { x: 1, y: 100 },
            { x: 2, y: 50 },
            { x: 3, y: 25 },
            { x: 5, y: 12.5 },
            { x: 8, y: 6.25 }
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
  }, [])

  return (
    <div id="chart"></div>
  )
}