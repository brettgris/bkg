import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Button.css';

class Button extends Component{
	render(){
		const {color,copy,className,to,href,target} = this.props;

		const Element = (to) ? Link : "a";

		return(
			<Element to={to} href={href} target={target} className={`button ${color} ${className}`} onClick={this.props.click}>
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
	target: PropTypes.string,
	click: PropTypes.func
};

Button.defaultProps = {
	className: ""
};

export default Button;
