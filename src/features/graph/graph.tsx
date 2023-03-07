import 'chartist/dist/index.css';
import './graph.css'
import { LineChart, AutoScaleAxis, StepAxis } from 'chartist';
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
  } = useContext(ControlsContext)

  type GraphPoint = {
    x: number,
    y: number
  }

  const series: GraphPoint[] = []
  let isUp = true
  let graphBpm = bpm
  let graphUpReps = upReps
  let graphDownReps = downReps
  let graphBars = bars
  let i = 1

  series.push(
    {
      x: 1,
      y: bpm
    }
  )

  while (graphBars > 0) {

    if (!graphUpReps) {
      isUp = !isUp
      graphUpReps = upReps
    } else if (isUp) {
      graphBpm = graphBpm + up
      graphUpReps--
      graphBars--
      i++
    }

    if (!graphDownReps) {
      isUp = !isUp
      graphDownReps = downReps
    } else if (!isUp) {
      graphBpm = graphBpm - down
      graphDownReps--
      graphBars--
      i++
    }



    series.push(
      {
        x: i,
        y: graphBpm
      }
    )
  }
  console.log(series)

  useEffect(() => {
    new LineChart(
      '#chart',
      {
        // labels: [...Array.from(Array(series.length - 1).keys()).map(i => i + 1)],
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
        width: '300px',
        height: '200px',
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