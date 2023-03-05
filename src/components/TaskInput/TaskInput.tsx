import { useState } from 'react'
import styles from './taskInput.module.scss'

interface TaskInputProps {
  addTodo: (name: string) => void
}
export default function TaskInput(props: TaskInputProps) {
  const { addTodo } = props
  const [name, setName] = useState<string>('')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addTodo(name)
    setName('')
  }

  const onchangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setName(value)
  }
  return (
    <div className='mb-2'>
      <h1 className={styles.title}>To do list typescript</h1>
      <form action='' className={styles.form} onSubmit={handleSubmit}>
        <input type='text' placeholder='Caption goes here' value={name} onChange={onchangeInput} />
        <button type='submit'>➕</button>
      </form>
    </div>
  )
}
