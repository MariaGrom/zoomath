import React, { useState } from 'react';
import styles from './AboutProject.module.scss';
import QuestionBank from './RepresentativeCard/QuestionBank/QuestionBank';
import TheoreticalBase from './RepresentativeCard/TheoreticalBase/TheoreticalBase';
import TestPapers from './RepresentativeCard/TestPapers/TestPapers';
import Footer from '../Footer/Footer';
import Test from './Test/Test';
import Example from './Example/Example';
import Solution from './Solution/Solution';

function AboutProject() {

    return (
        <main className={styles.content}>
            <div className={styles.container}>
                <div>
                    <h1 className={styles.title}>Полезный ресур по подготовке к поступлению в лучшие лицеи</h1>
                    <h2 className={styles.subtitle}>Интересный текст - почему мы молодцы и какие хорошие.
                        Интнресный текст - почему мы молодцы.Интнресный текст - почему мы молодцы и какие хорошие.
                    </h2>
                </div>
                <div className={styles.cards}>
                    <div className={styles.cards__container}>
                        <QuestionBank />
                        <TheoreticalBase />
                        <TestPapers />
                    </div>
                </div>
            </div>
            <Test />
            <Example />
            <Solution />

            <section className={styles.news}>
                Блок с новостями
            </section>
            <section className={styles.statistic}>
                Блок со статистикой по продукивности сервиса
            </section>

            <Footer />

        </main>
    );
}

export default AboutProject;