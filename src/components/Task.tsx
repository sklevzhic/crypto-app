import React from 'react'
import {Row, Col, Image} from 'react-bootstrap'
interface TaskProps {

}

export const Task: React.FC<TaskProps> = () => {
    return <>
        <ul>
            <li>На главной отображается список (таблица) криптовалют с основной информацией по ним</li>
            <li>с контролами для возможности добавления в портфель (например, "+".)</li>
            <li>Реализовать пагинацию</li>
            <li>Переход на страницу с валютой</li>
            <li> Реализовать роутинг. Кнопка "Вернуться" браузера должна работать корректно.</li>
        </ul>


    </>;
};