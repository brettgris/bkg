import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import PropTypes from 'prop-types';

import isTouch from 'is-touch-device';

import './Button.css';

class Button extends Component{
	constructor(props){
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		window.scrollTo(0,0);
	}

	render(){
		const {color,copy,className,to,href,target,scroll} = this.props;

		let Element = "a";
		if ( to ){
			Element = (scroll) ? ScrollLink : Link;
		}

		const btnClass = ( isTouch() ) ? className+" touch" : className;

		return(
			<Element
				to={to}
				href={href}
				target={target}
				className={`button ${color} ${btnClass}`}
				onClick={this.handleClick}
				smooth={true} duration={500}
			>
				{copy}
				<span></span>
				<span></span>
			</Element>
		)
	}
}

Button.propTypes = {
	copy: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	className: PropTypes.string,
	to: PropTypes.string,
	href: PropTypes.string,
	target: PropTypes.string
};

Button.defaultProps = {
	className: ""
};

export default Button;
