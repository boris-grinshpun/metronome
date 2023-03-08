export const useSeries = ({
  bpm,
  upReps,
  downReps,
  bars,
  down,
  up
}: {
  bpm: number,
  upReps: number,
  downReps: number,
  bars: number,
  down: number,
  up: number
}) => {

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
  return series
}