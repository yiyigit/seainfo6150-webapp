import React from "react";
import SlugButton from './SlugButton';
import styles from './ArticleListItem.module.css';
import ArticleImage from './ArticleImage'

const ArticleListItem = props =>{
	return (
        <article >
            <div className ={styles.box}>
            <ArticleImage url = {props.article.image._url} title = {props.article.title} />
            <div className = {styles.div}>
            <h1 className = {styles.title}>{props.article.title}</h1>
            <p className ={styles.p}> {props.article.shortText} </p>
            <time className= {styles.time} dateTime={props.article.pubYear}> {props.article.pubDate} </time>
            <SlugButton buttonText = {props.article.author} slug = {props.article.slug}/> 
            </div>
            </div>
        </article> 
    );

};



export default ArticleListItem;