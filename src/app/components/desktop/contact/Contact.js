import React, {Component} from 'react';
import { connect } from 'react-redux';

import './Contact.css';

import Form from 'app/components/form/Form';

import Footer from 'app/components/footer/Footer';

class Contact extends Component{
	render(){
		const { data,page } = this.props;
		if ( page!=="contact" || !data ) return null;

		const pa = 1-this.props.pageanimate;

		const scale = .5*pa + .5;
		const y = 100-100*pa;
		const opacity = pa;

		const style={
			transform: `scale(${scale}) translateY(${y}%)`,
			opacity: opacity
		}

		const st = {
			overflow: (pa===1) ? 'auto' : 'hidden',
			height: (pa===1) ? 'auto' : '100vh'
		}

		return(
			<section className="contact" style={st}>
				<div className="d-flex flex-column reverse-text" style={style}>
					<div className="c-form d-flex align-items-center justify-conent-center">
						<Form data={data} />
					</div>
					<Footer />
				</div>
			</section>
		);
	}
}

function mapStateToProps(state) {
	return {
		page: state.page,
		pageanimate: state.pageanimate,
		data: state.data.contact
	}
}

export default connect(mapStateToProps)(Contact);
