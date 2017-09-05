import {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {setHomeAnimate,setAnimate,setThree,setPage,setPageAnimate} from '../../../actions/actions';
import {TimelineLite} from 'gsap';

import {
	STREAM_ON_LOAD,

	BOTTOM_ON_LOAD,
	BOTTOM_FROM_STREAM,
	BOTTOM_FROM_IMAGE,

	IMAGE_ON_LOAD,
	IMAGE_FROM_STREAM

} from '../../../actions/ThreeStates';

class Animate extends Component{
	constructor(props){
		super(props);

		this.tl = new TimelineLite();

		this.handlePage = this.handlePage.bind(this);
		this.clearAnimations = this.clearAnimations.bind(this);
		this.handleThreeAnimation = this.handleThreeAnimation.bind(this);
		this.setAV = this.setAV.bind(this);
		this.handlePageAnimation = this.handlePageAnimation.bind(this);
		this.setPV = this.setPV.bind(this);
	}

	handlePage(page){
		if(page!==this.page){
			switch(page){
				//TO CONTACT
				case "contact":
					switch(this.page){
						//FROM HOME
						case "":
							this.props.setThree(BOTTOM_FROM_STREAM);
							this.props.setHomeAnimate(true);
							this.clearAnimations();

							//CONTACT OUT
							this.tl.call( ()=>{
								this.setAV("OUT");
							});
							this.tl.to( this, 1, {av:1, onUpdate:this.handleThreeAnimation} );

							//SPREAD IN
							this.tl.call( ()=>{
								this.props.setThree(BOTTOM_ON_LOAD);
								this.props.setHomeAnimate(false);
								this.props.setPage("contact");
								this.setPV("IN");
							});
							this.tl.to( this, .4, {pv:1, onUpdate:this.handlePageAnimation} );
							break;

						//FROM WORK
						case "work":
							this.props.setThree(BOTTOM_FROM_IMAGE);
							this.props.setHomeAnimate(false);
							this.clearAnimations();

							//WORK OUT HERE

							//CONTACT OUT
							this.tl.call( ()=>{
								this.setAV("OUT");
							});
							this.tl.to( this, 1, {av:1, onUpdate:this.handleThreeAnimation} );

							//SPREAD IN
							this.tl.call( ()=>{
								this.props.setThree(BOTTOM_ON_LOAD);
								this.props.setHomeAnimate(false);
								this.props.setPage("contact");
								this.setPV("IN");
							});
							this.tl.to( this, .4, {pv:1, onUpdate:this.handlePageAnimation} );

							break;

						//ON LOAD
						default:
							this.props.setThree(BOTTOM_ON_LOAD);
							this.props.setHomeAnimate(false);
							this.props.setPage("contact");
							this.props.setPageAnimate(1);
							this.props.setAnimate(1);
							break;
					}
					//console.log( "contact", this.page);
					break;

				//TO WORK
				case "work":
					switch(this.page){
						//FROM CONTACT
						case "contact":
							this.props.setThree(BOTTOM_FROM_IMAGE);
							this.props.setHomeAnimate(true);
							this.clearAnimations();

							//CONTACT OUT
							this.tl.call(()=>{
								this.setPV("OUT");
							});
							this.tl.to(this, .4, {pv:0, onUpdate:this.handlePageAnimation} );

							//SPREAD IN
							this.tl.call(()=>{
								this.setAV("IN");
							});
							this.tl.to( this, 1, {av:0, onUpdate:this.handleThreeAnimation} );

							//COMPLETE SETTINGS
							this.tl.call( ()=>{
								this.props.setThree(IMAGE_ON_LOAD);
								this.props.setHomeAnimate(false);
								this.props.setPage("work");
							});

							break;

						//FROM HOME
						case "":
							this.props.setThree(IMAGE_FROM_STREAM);
							this.props.setHomeAnimate(true);
							this.clearAnimations();

							//SPREAD IN
							this.tl.call(()=>{
								this.setAV("OUT");
							});
							this.tl.to( this, 1, {av:1, onUpdate:this.handleThreeAnimation} );

							//COMPLETE SETTINGS
							this.tl.call( ()=>{
								this.props.setThree(IMAGE_ON_LOAD);
								this.props.setHomeAnimate(false);
								this.props.setPage("work");
							});

							break;

						//ON LOAD
						default:
							this.props.setThree(IMAGE_ON_LOAD);
							this.props.setHomeAnimate(false);
							this.props.setPage("work");
							this.props.setPageAnimate(1);
							this.props.setAnimate(0);
							break;
					}
					break;

				//TO HOME
				default:
					switch(this.page){
						//FROM CONTACT
						case "contact":
							this.props.setThree(BOTTOM_FROM_STREAM);
							this.props.setHomeAnimate(true);
							this.clearAnimations();

							//CONTACT OUT
							this.tl.call(()=>{
								this.setPV("OUT");
							});
							this.tl.to(this, .4, {pv:0, onUpdate:this.handlePageAnimation} );

							//SPREAD IN
							this.tl.call(()=>{
								this.setAV("IN");
							});
							this.tl.to( this, 1, {av:0, onUpdate:this.handleThreeAnimation} );

							//COMPLETE SETTINGS
							this.tl.call( ()=>{
								this.props.setThree(STREAM_ON_LOAD);
								this.props.setHomeAnimate(true);
								this.props.setPage("home");
							});

							break;

						//FROM WORK
						case "work":
							this.props.setThree(IMAGE_FROM_STREAM);
							this.props.setHomeAnimate(true);
							this.clearAnimations();

							//WORK PAGE OUT

							//SPREAD IN
							this.tl.call(()=>{
								this.setAV("IN");
							});
							this.tl.to( this, 1, {av:0, onUpdate:this.handleThreeAnimation} );

							//COMPLETE SETTINGS
							this.tl.call( ()=>{
								this.props.setThree(STREAM_ON_LOAD);
								this.props.setHomeAnimate(true);
								this.props.setPage("home");
							});

							break;

						//ON LOAD
						default:
							this.props.setThree(STREAM_ON_LOAD);
							this.props.setHomeAnimate(true);
							this.props.setPage("home");
							this.props.setPageAnimate(1);
							this.props.setAnimate(0);
							break;
					}
					break;
			}

			this.page = page;
		}
	}

	clearAnimations(){
		this.tl.kill();
		this.tl.clear();
	}

	setAV(direction){
		if (direction==="OUT"){
			this.av = (this.av<.95) ? this.av : 0;
		} else{
			this.av = (this.av>.05) ? this.av : 1;
		}

		//console.log( "AV", this.av);
		this.props.setAnimate(this.av);
	}

	setPV(direction){
		if (direction==="IN"){
			this.pv = (this.pv<.95) ? this.pv : 0;
		} else{
			this.pv = (this.pv>.05) ? this.pv : 1;
		}

		//console.log( "page", this.pv );
		this.props.setPageAnimate(this.pv);
	}

	handleThreeAnimation(){
		this.props.setAnimate(this.av);
	}

	handlePageAnimation(){
		this.props.setPageAnimate(this.pv);
	}

	render(){
		return null;
	}

	componentDidMount(){
		this.handlePage( this.props.routing );
	}

	componentWillReceiveProps(n){
		this.handlePage( n.routing );
	}
}

function mapStateToProps(state) {
	return {
		routing: state.routing.location.pathname.split("/")[1]
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators( {
		setHomeAnimate,
		setPageAnimate,
		setAnimate,
		setThree,
		setPage
	}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Animate);
