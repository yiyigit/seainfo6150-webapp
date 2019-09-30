import React from "react";
import PropTypes from 'prop-types'
import ArticleListItem from './ArticleListItem'

   
 const ArticleList = props => {
  return (
    <ul>
      {props.articles.map(article => (
        <li ><ArticleListItem article={article} /></li>
      ))}
    </ul>
  );
}; 	

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};

export default ArticleList;
