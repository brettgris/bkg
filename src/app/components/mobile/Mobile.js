import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Mobile.css';

// import Header from './header/Header';
// import Projects from './projects/Projects';
import Home from './home/Home';
import Detail from './detail/Detail';
// import Contact from './contact/Contact';


class Mobile extends Component{
	render(){
		const { page } = this.props;

		if (page==="project") {
			return (
				<Detail height={this.props.height} />
			)
		}

		return (
			<Home height={this.props.height} />
		);
	}
}

function mapStateToProps(state) {
	return {
		page: state.routing.location.pathname.split("/")[1]
	}
}

export default connect(mapStateToProps)(Mobile);
