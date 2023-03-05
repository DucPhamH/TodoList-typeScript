import styles from './taskList.module.scss'
import { Todo } from '../../@types/todo.type'

interface TaskListProps {
  doneTaskList?: boolean
  todos: Todo[]
  handleDoneTodo: (id: string, done: boolean) => void
}
export default function TaskList(props: TaskListProps) {
  const { doneTaskList, todos, handleDoneTodo } = props
  const onChangeCheckbox = (todoId: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    handleDoneTodo(todoId, e.target.checked)
  }
  return (
    <div className='mb-2'>
      <h2 className={styles.title}>{doneTaskList ? 'Hoàn thành' : 'Chưa hoàn thành'}</h2>
      {todos.map((todo) => (
        <div className={styles.tasks} key={todo.id}>
          <div className={styles.task}>
            <input
              type='checkbox'
              checked={todo.done}
              className={styles.taskCheckbox}
              onChange={onChangeCheckbox(todo.id)}
            />
            <span className={`${styles.taskName} ${todo.done ? styles.taskNameDone : ''}`}>{todo.name}</span>
            <div className={styles.taskActions}>
              <button className={styles.taskBtn}>✒</button>
              <button className={styles.taskBtn}>🗑</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
