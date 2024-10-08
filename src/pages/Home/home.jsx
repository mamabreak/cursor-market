import React from 'react';
import Header from '../Components/header';
import styles from './home.module.css'

const Home = () => {
    return (
        <>
        <Header />
        <div className={`${styles.first_floor} ${styles.justify_center} ${styles.flex_dir_column} ${styles.center_items} ${styles.position_absolute} ${styles.half_black}`}>
            <div className={` ${styles.first_span_size} ${styles.space_between} ${styles.additional_padding}`}>
                <span className={`${styles.span_styles} ${styles.white_text}`}>Looking</span>
                <span className={styles.span_styles}>How about</span>
            </div>
            <div className={`${styles.second_span_size} ${styles.space_between} ${styles.additional_padding}`}>
            <span className={`${styles.span_styles} ${styles.white_text}`}>for new</span>
            <span className={styles.span_styles}>maxxing</span>
            </div>
            <div className={`${styles.third_span_size} ${styles.space_between} ${styles.additional_padding}`}>
                <span className={`${styles.span_styles} ${styles.white_text}`}>trending</span>
                <span className={styles.span_styles}>updated</span>
            </div>
            <div className={`${styles.fourth_span_size} ${styles.space_between} ${styles.additional_padding}`}>
                <span className={`${styles.span_styles} ${styles.white_text}`}>pointer</span>
                <span className={styles.span_styles}>pointer</span>
            </div>
            <div className={`${styles.fifth_span_size} ${styles.space_between} ${styles.additional_padding}`}>
                <span className={`${styles.span_styles} ${styles.fifth_span__bigger_size} ${styles.white_text}`}>?</span>
                <span className={`${styles.span_styles} ${styles.fifth_span__bigger_size}`}>!</span>
            </div>
        </div>
        </>
    );
};

export default Home;