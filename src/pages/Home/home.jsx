import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../Components/header';
import styles from './home.module.css';
import modern from '../../images/modern.png'
import anime from '../../images/anime.png'
import cartoon from '../../images/cartoon.png'
import empty from '../../images/empty.png'
import preview from '../../images/preview.png'

const Home = () => {
    return (
        <>
        <Header />
        {/* FIRST FLOOR */}
        <div className={`${styles.first_floor} ${styles.justify_center} ${styles.flex_dir_column} ${styles.center_items} ${styles.half_black}`}>
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
        {/* SECOND FLOOR */}
        <div className={`${styles.second_floor} ${styles.flex_dir_column} ${styles.justify_center} ${styles.center_items} ${styles.additional_div_padding}`}>
            <span className={`${styles.heading_text}`}>MANY CATEGORIES</span>
            <div className={`${styles.categories} ${styles.space_between} ${styles.center_items} ${styles.anti_broke}`}>
                <div className={styles.image_container}>
                    <img src={modern} alt="Modern" className={styles.preview_picture} />
                    <span className={`${styles.common_text} ${styles.picture_text} ${styles.color_black}`}>Modern</span>
                </div>
                <div className={styles.image_container}>
                    <img src={anime} alt="Modern" className={styles.preview_picture} />
                    <span className={`${styles.common_text} ${styles.picture_text}`}>Anime</span>
                </div>
                <div className={styles.image_container}>
                    <img src={cartoon} alt="Modern" className={styles.preview_picture} />
                    <span className={`${styles.common_text} ${styles.picture_text}`}>Cartoon</span>
                </div>
                <div className={styles.image_container}>
                    <img src={empty} alt="Modern" className={`${styles.preview_picture}`} />
                    <span className={`${styles.common_text} ${styles.picture_text} ${styles.color_black} ${styles.coming_soon}`}>More categories is coming soon...</span>
                </div>
            </div>
        </div>
        {/* THIRD FLOOR */}
        <div className={`${styles.third_floor} ${styles.justify_center} ${styles.flex_dir_column} ${styles.center_items} ${styles.anti_broke} ${styles.additional_div_padding}`}>
            <span className={`${styles.heading_text}`}>EASY SEARCH & FILTERS</span>
            <div className={`${styles.space_between} ${styles.center_items} ${styles.additional_div_padding} ${styles.third_preview_needed_width}`}>
                <img src={preview} alt="Preview" className={`${styles.preview_pic} ${styles.space_between}`} />
                <div className={`${styles.third_floor_span} ${styles.flex_dir_column} ${styles.center_items}`}>
                    <span className={`${styles.common_text} ${styles.bigger_text_size}`}>SEACH</span>
                    <span className={`${styles.common_text} ${styles.bigger_text_size} ${styles.additional_padding_right}`}>EASELY</span>
                </div>
            </div>
        </div>
        {/* FOURTH FLOOR */}
        <div className={`${styles.pre_footer} ${styles.additional_div_padding} ${styles.center_items} ${styles.flex_dir_column}`}>
            <span className={`${styles.heading_text}`}>MORE FEATURES ARE COMING!</span>
            <div className={`${styles.sign_buttons_main} ${styles.space_between} ${styles.center_items} ${styles.additional_div_padding}`}>
                <Link to='/sign-up'>
                    <button className={styles.common_text}>Sign up</button>
                </Link>
                <Link to='/log-in'>
                    <button className={styles.common_text}>Log in</button>
                </Link>
                
            </div>
            <span className={`${styles.additional_div_padding} ${styles.heading_text} ${styles.lighter_text} ${styles.smaller_text}`}>ALSO YOU CAN SUPPORT US</span>
            <div className={`${styles.support_button_div} ${styles.center_items} ${styles.additional_div_padding}`}>
                <button className={`${styles.supportButton}`}>Support</button>
            </div>
        </div>
        </>
    );
};

export default Home;