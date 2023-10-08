import React from 'react'
import SheetData from '../Shared/SheetData';

interface Props {
    data: SheetData[];
}

const SchedItem = ({data}: Props) => {
  return (
    <div className='main'>
        {data.map((band, index) => (
          <div key={index} className='sched-box'>
            <p>Leader: {band.Leader}</p>
            <p>Backup 1: {band.Backup1}</p>
            <p>Backup 2: {band.Backup2}</p>
            <p>Acoustic: {band.Acoustic}</p>
            <p>Keyboard: {band.Keyboard}</p>
            <p>Electric: {band.Electric}</p>
            <p>Drums: {band.Drums}</p>
            <p>Bass: {band.Bass}</p>
          </div>
        ))}
      </div>
  )
}

export default SchedItem