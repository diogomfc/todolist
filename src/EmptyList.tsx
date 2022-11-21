import { ClipboardText } from 'phosphor-react';
import styles from './EmptyList.module.css';

export function EmptyList() {
    return (
        <div className={styles.emptyList}>
            <ClipboardText size={64} />
            <strong>Você ainda não tem nenhuma tarefa listada</strong>
            <p>Crie uma nova tarefa e gerencie de forma dinâmica</p>
        </div>
    );
}