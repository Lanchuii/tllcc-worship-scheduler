import { ChangeEvent, FormEvent } from 'react'
import SheetData from '../Shared/SheetData'

interface Props {
    formData: SheetData
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    createSched : () => void
    trigger: boolean;
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddSchedItem = ({formData, handleInputChange, createSched, trigger, setTrigger}: Props) => {
  return (trigger) ? (
    <div className="form-container">
        <form onSubmit={(e: FormEvent) => e.preventDefault()}>
          <label htmlFor="Leader">Leader</label>
          <input 
            type="text" 
            name="Leader"
            placeholder="enter leader"
            value={formData.Leader}
            onChange={handleInputChange}
          />

          <label htmlFor="Backup1">Backup 1</label>
          <input 
            type="text" 
            name="Backup1"
            placeholder="enter backup"
            value={formData.Backup1}
            onChange={handleInputChange}
          />

          <label htmlFor="Backup2">Backup 2</label>
          <input 
            type="text" 
            name="Backup2"
            placeholder="enter backup"
            value={formData.Backup2}
            onChange={handleInputChange}
          />

          <label htmlFor="Acoustic">Acoustic</label>
          <input 
            type="text" 
            name="Acoustic"
            placeholder="enter acoustic"
            value={formData.Acoustic}
            onChange={handleInputChange}
          />

          <label htmlFor="Keyboard">Keyboard</label>
          <input 
            type="text" 
            name="Keyboard"
            placeholder="enter keyboard"
            value={formData.Keyboard}
            onChange={handleInputChange}
          />

          <label htmlFor="Electric">Electric</label>
          <input 
            type="text" 
            name="Electric"
            placeholder="enter electric"
            value={formData.Electric}
            onChange={handleInputChange}
          />

          <label htmlFor="Bass">Bass</label>
          <input 
            type="text" 
            name="Bass"
            placeholder="enter bass"
            value={formData.Bass}
            onChange={handleInputChange}
          />

          <label htmlFor="Drums">Drums</label>
          <input 
            type="text" 
            name="Drums"
            placeholder="enter drums"
            value={formData.Drums}
            onChange={handleInputChange}
          />
        </form>
        <button type="button" onClick={createSched}>add sched</button>
      </div>
  ) : null
}

export default AddSchedItem