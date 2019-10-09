import React from "react";
import PropTypes from 'prop-types'
import ArticleListItem from './ArticleListItem'
import styles from './ArticleList.module.css'

   
 const ArticleList = props => {
  return (
    <div className = {styles.container}>
      {props.articles.map(article => (
        <p className = {styles.l}><ArticleListItem article={article}  /></p>
      ))}
    </div>
  );
}; 	

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};

export default ArticleList;
