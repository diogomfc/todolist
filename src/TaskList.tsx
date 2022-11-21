import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { EmptyList } from './EmptyList';
import { Task } from './Task';

import styles from './TaskList.module.css';

interface Task {
    description: string,
    isCompleted: boolean;
}

const initialTasks: Task[] = [

]

export function TaskList() {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);
    const [newTaskDescription, setNewTaskDescription] = useState('');

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();
        setTasks([...tasks, { description: newTaskDescription, isCompleted: false }]);
        setNewTaskDescription('');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTaskDescription(event.target.value)
    }

    function deleteTask(taskDescription: string) {
        const tasksWithoutDeletedOne = tasks.filter(task => task.description !== taskDescription);
        setTasks(tasksWithoutDeletedOne);
    }

    function completeTask(taskDescription: string) {
        const completedTasks = tasks.map(task => {
            if (task.description === taskDescription) {
                return {
                    ...task, isCompleted: !task.isCompleted
                }
            }
            return task;
        });

        setTasks(completedTasks);
    }

    return (
        <>
            <div className={styles.taskWrapper}>
                <form onSubmit={handleCreateNewTask}>
                    <header className={styles.header}>
                        <input type="text" onChange={handleNewTaskChange} placeholder='Adicione uma nova tarefa' value={newTaskDescription}></input>
                        <button type="submit">Criar <PlusCircle size={18} /></button>
                    </header>
                </form>

                <div className={styles.taskSummary}>
                    <p id={styles.createdTasks}>Tarefas criadas<span>{tasks.length}</span></p>
                    <p id={styles.finishedTasks}>Concluídas <span>{tasks.filter(t => t.isCompleted).length} de {tasks.length}</span></p>
                </div>

                {tasks.length === 0
                    ? <EmptyList /> :
                    <div className={styles.taskList}>
                        {tasks.map(task => {
                            return <Task key={task.description}
                                description={task.description}
                                isCompleted={task.isCompleted}
                                onDeleteTask={() => deleteTask(task.description)}
                                onCompleteTask={completeTask} />
                        })}
                    </div>}
            </div>
        </>
    );
}