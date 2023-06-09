import React, { useState } from 'react';
import './CardAlgebra.css';

function CardAlgebra() {

    const [tasks, setTasks] = useState( [
        {
            id: 1,
            title: 'easy карточка',
            skill: 'easy'
        },
        {
            id: 2,
            title: 'middle карточка',
            skill: 'middle'
        },
        {
            id: 3,
            title: 'hard карточка',
            skill: 'hard'
        },
        {
            id: 4,
            title: 'super-hard карточка',
            skill: 'super-hard'
        },
        {
            id: 5,
            title: 'middle 5 карточка',
            skill: 'middle'
        }
    ])

    const [filteredTasks, setFilteredTasks] = useState(tasks)

function taskFilter (skill) {
    if(skill === 'all') {
        setFilteredTasks(tasks);
    } else {
    let newTasks = [...tasks].filter(item => item.skill === skill)
    setFilteredTasks(newTasks)
}
}


    return (
        <div className='Card'>
            <h3 className='Card-title'>навигационная строка(если нужно) типа: Алгебра/база вопросов/9класс/задания по теме №1</h3>
            <div className='Card-content'>
                <ul className='Card-selectorList'>
                    <li><button id='all' type='button' className='Card-skill' onClick={()=>taskFilter('all')}>все</button></li>
                    <li><button id='easy' type='button' className='Card-skill' onClick={()=>taskFilter('easy')}>легкий</button></li>
                    <li><button id='middle' type='button' className='Card-skill' onClick={()=>taskFilter('middle')}>средний</button></li>
                    <li><button id='hard' type='button' className='Card-skill' onClick={()=>taskFilter('hard')}>сложный</button></li>
                    <li><button id='super-hard' type='button' className='Card-skill' onClick={()=>taskFilter('super-hard')}>олимпиадный</button></li>
                </ul>
<div>{filteredTasks.map((task)=>(
    <div className='Card-Task'>
        <p>{task.title}</p>
        <div>карточка с текстом и id - {task.id}</div>
        <p>{task.skill} - уровень сложности</p>
    </div>
))}</div>
            </div>

        </div>
    );
}

export default CardAlgebra;