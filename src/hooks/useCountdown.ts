import { useCallback, useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { countdownEventDateAtom } from '../store/date'

const insertZero = (val: number) => val < 10 ? `0${val}` : val.toString()

const useCountdown = () => {
  const countdownEvent = useRecoilValue(countdownEventDateAtom)
  const [dateRemain, setDateRemain] = useState([{
    remain: '00',
    text: 'Days'
  },
  {
    remain: '00',
    text: 'Hours'
  },
  {
    remain: '00',
    text: 'Minutes'
  },
  {
    remain: '00',
    text: 'Seconds'
  }])
  
  const updateDateRemain = useCallback(() => {
    const dateNow = new Date()
    const dateDiff = new Date(countdownEvent.getTime() - dateNow.getTime())

    const daysDiff = dateDiff.getTime() / 86400000
    const parsedDaysDiff = Math.floor(daysDiff)

    const hoursDiff = (daysDiff - parsedDaysDiff) * 24
    const parsedHoursDiff = Math.floor(hoursDiff)

    const minutesDiff = (hoursDiff - parsedHoursDiff) * 60
    const parsedMinutesDiff = Math.floor(minutesDiff)

    const secondsDiff = (minutesDiff - parsedMinutesDiff) * 60
    const parsedSecondsDiff = Math.floor(secondsDiff)

    setDateRemain([{
        remain: insertZero(parsedDaysDiff),
        text: 'Days'
      }, {
        remain: insertZero(parsedHoursDiff),
        text: 'Hours'
      }, {
        remain: insertZero(parsedMinutesDiff),
        text: 'Minutes'
      }, {
        remain: insertZero(parsedSecondsDiff),
        text: 'Seconds'
      }])
    }, [countdownEvent])
  
  useEffect(() => updateDateRemain(), [updateDateRemain])
  
  useEffect(() => {
    setInterval(() => updateDateRemain(), 1000)
  }, [updateDateRemain])

  return [dateRemain]
}

export default useCountdown