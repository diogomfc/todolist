import { TrashSimple } from 'phosphor-react';
import { ChangeEvent, MouseEvent, useState } from 'react';

import styles from './Task.module.css';

export interface TaskProps {
    description: string
    isCompleted: boolean;
    onDeleteTask: (tasksDescription: string) => void;
    onCompleteTask: (tasksDescription: string) => void;
}

export function Task({ description, isCompleted, onDeleteTask, onCompleteTask }: TaskProps) {
    function handleCompleteTask(taskDescription: string) {
        onCompleteTask(taskDescription);
    }

    function handleDeleteTask(taskDescription: string) {
        onDeleteTask(taskDescription);
    }

    return (
        <article className={styles.task}>
            <label className={isCompleted ? styles.completed : styles.notCompleted}>
                <span className={styles.checkMark}><input name="checkbox-1" type="checkbox" checked={isCompleted} onChange={() => handleCompleteTask(description)}></input></span>
                {description}
            </label>

            <TrashSimple size={25} onClick={() => handleDeleteTask(description)} />
        </article>
    )
}