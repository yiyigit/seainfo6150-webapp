import React from "react";
import styles from './SlugButton.module.css'

const SlugButton = props =>{
	return (
		<button className = {styles.button}
		onClick={() => alert(props.slug)}>{props.buttonText}</button>

		);
}

export default SlugButton