import React, {Component} from 'react';
import './Form.css';

import superagent from 'superagent';

import ReduxForm from './reduxform/ReduxForm';
import Success from './success/Success';

class Form extends Component {
	constructor(props){
		super(props);

		this.state = {
			form: true
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}
	render(){
		if (this.state.form) {
			return(
				<ReduxForm onSubmit={this.handleSubmit} data={this.props.data} />
			);
		} else{
			return (
				<Success data={this.props.data} onReset={this.handleReset} />
			)
		}
	}

	handleSubmit(v){
		superagent.post('https://formspree.io/brettgrisinger@gmail.com')
			.set('Content-Type', 'application/json')
			.send(JSON.stringify(v))
			.then( ()=>{
				this.setState({
					form: false
				});
			});
	}

	handleReset(){
		this.setState({
			form: true
		});
	}
}

export default Form;
