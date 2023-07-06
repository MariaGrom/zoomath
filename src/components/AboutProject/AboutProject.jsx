import React from 'react';
import styles from './AboutProject.module.scss';
import { Link } from 'react-router-dom';
import QuestionBank from './RepresentativeCard/QuestionBank/QuestionBank';
import TheoreticalBase from './RepresentativeCard/TheoreticalBase/TheoreticalBase';
import TestPapers from './RepresentativeCard/TestPapers/TestPapers';

function AboutProject() {
    return (
        <main className={styles.content}>
            <div className={styles.container}>
                <div className={styles.titles}>
                    <h1 className={styles.title}> Заголовок сайта</h1>
                    <h2 className={styles.subtitle}>Интересный текст - почему мы молодцы и какие хорошие.
                        Интнресный текст - почему мы молодцы.Интнресный текст - почему мы молодцы и какие хорошие.
                    </h2>
                </div>
                <div className={styles.cards_list}>
                    <div className={styles.cards_container}>
                        <QuestionBank />
                        <TheoreticalBase />
                        <TestPapers />
                    </div>
                </div>

            </div>

        </main>
    );
}

export default AboutProject;