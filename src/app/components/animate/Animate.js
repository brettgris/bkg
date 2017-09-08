import {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {setHomeAnimate,setAnimate,setThree,setPage,setPageAnimate,setCameraAnimate} from '../../../actions/actions';
import {TimelineLite} from 'gsap';

import {
	STREAM_ON_LOAD,

	BOTTOM_ON_LOAD,
	BOTTOM_FROM_STREAM,
	BOTTOM_FROM_IMAGE,

	IMAGE_ON_LOAD,
	IMAGE_FROM_STREAM,

	IMAGE_PANEL,
	IMAGE_CHANGE

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
		this.handleCameraAnimation = this.handleCameraAnimation.bind(this);
		this.setCV = this.setCV.bind(this);
		this.setProjectPage = this.setProjectPage.bind(this);
	}

	handlePage(page){

		if(page!==this.page){

			let from, to, side;

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
								this.setAV(0);
								this.setPV(0);
								this.setCV(0);
							});
							this.tl.to( this, 1, {av:1, pv:1, onUpdate:()=>{
								this.handleThreeAnimation();
								this.handlePageAnimation();
							}} );

							//SPREAD IN
							this.tl.call( ()=>{
								this.props.setThree(BOTTOM_ON_LOAD);
								this.props.setHomeAnimate(false);
								this.props.setPage("contact");
								this.setPV(1);
							});
							this.tl.to( this, .4, {pv:0, onUpdate:this.handlePageAnimation} );
							break;

						//FROM PROJECTS
						case "projects1":
						case "projects2":
							this.props.setThree(BOTTOM_FROM_IMAGE);
							this.props.setHomeAnimate(false);
							this.clearAnimations();

							from = (this.page==="projects1") ? 1 : -1;

							//CONTACT OUT
							this.tl.call( ()=>{
								this.setAV(0);
								this.setCV(from);
							});
							this.tl.to( this, 1, {av:1, cv:0, onUpdate:()=>{
								this.handleThreeAnimation();
								this.handleCameraAnimation();
							}} );

							//SPREAD IN
							this.tl.call( ()=>{
								this.props.setThree(BOTTOM_ON_LOAD);
								this.props.setHomeAnimate(false);
								this.props.setPage("contact");
								this.setPV(1);
							});
							this.tl.to( this, .4, {pv:0, onUpdate:this.handlePageAnimation} );

							break;

						//ON LOAD
						default:
							this.props.setThree(BOTTOM_ON_LOAD);
							this.props.setHomeAnimate(false);
							this.props.setPage("contact");
							this.props.setPageAnimate(0);
							this.props.setCameraAnimate(0);
							this.props.setAnimate(1);
							break;
					}
					//console.log( "contact", this.page);
					break;

				//TO PROJECTS1
				case "projects1":
				case "projects2":
					switch(this.page){
						//FROM CONTACT
						case "contact":
							this.props.setThree(BOTTOM_FROM_IMAGE);
							this.props.setHomeAnimate(true);
							this.clearAnimations();

							to = (page==="projects1") ? 1 : -1;

							//CONTACT OUT
							this.tl.call(()=>{
								this.setPV(0);
								this.setCV(0);
							});
							this.tl.to(this, .4, {pv:1, onUpdate:this.handlePageAnimation} );

							//SPREAD IN
							this.tl.call(()=>{
								this.setAV(1);
							});
							this.tl.to( this, 1, {av:0, cv: to, onUpdate:()=>{
								this.handleThreeAnimation();
								this.handleCameraAnimation();
							}} );



							//COMPLETE SETTINGS
							this.tl.call( ()=>{
								this.props.setThree(IMAGE_ON_LOAD);
								this.props.setHomeAnimate(false);
								this.props.setPage("projects");
								this.setPV(1);
							});

							this.tl.to( this, .4, {pv:0, onUpdate:this.handlePageAnimation} );

							break;

						//FROM HOME
						case "":
							this.props.setThree(IMAGE_FROM_STREAM);
							this.props.setHomeAnimate(true);
							this.clearAnimations();

							to = (page==="projects1") ? 1 : -1;

							//SPREAD IN
							this.tl.call(()=>{
								this.setAV(0);
								this.setPV(0);
								this.setCV(0);
							});

							this.tl.to( this, 1, {av:1, pv:1, cv:to, onUpdate:()=>{
								this.handleThreeAnimation();
								this.handlePageAnimation();
								this.handleCameraAnimation();

							}} );

							//COMPLETE SETTINGS
							this.tl.call( ()=>{
								this.props.setThree(IMAGE_ON_LOAD);
								this.props.setHomeAnimate(false);
								this.props.setPage("projects");
								this.setPV(1);

							});

							//WORK IN
							this.tl.to( this, .4, {pv:0, onUpdate:()=>{
								this.handlePageAnimation();
							}} );

							break;

						//FROM MENU
						case "projectsmenu":
							this.props.setThree(IMAGE_PANEL);
							this.clearAnimations();

							to = (page==="projects1") ? 1 : -1;

							this.tl.call(()=>{
								this.setAV(1);
								this.props.setPage("projectsmenu");
								this.setPV(1);
								this.setCV(0);
							});

							this.tl.to( this, 1, {av:0, pv: 0, cv: to, onUpdate:()=>{
								this.handleThreeAnimation();
								this.handlePageAnimation();
								this.handleCameraAnimation();
							}} );

							this.tl.call( ()=>{
								this.props.setThree(IMAGE_ON_LOAD);
								this.setProjectPage();
								this.setPV(1);
							});

							this.tl.to( this, .4, {pv: 0, onUpdate:()=>{
								this.handlePageAnimation();
							}} );

							break;

						case "projects1":
						case "projects2":
							this.props.setThree(IMAGE_CHANGE);
							this.clearAnimations();

							from = (page==="projects1") ? -1 : 1;
							to = (page==="projects1") ? 1 : -1;

							side = (this.props.current%2===0) ? "projects1" : "projects2";

							this.tl.call(()=>{
								this.setAV(0);
								this.setPV(1);
								this.setCV(from);
								this.props.setPage(side);
							});

							this.tl.to( this, 1.5, {av:1, cv:to, onUpdate:()=>{
								this.handleThreeAnimation();
								this.handleCameraAnimation();
							}} );

							// this.tl.to( this, .4, {pv: 0, onUpdate:()=>{
							// 	this.handlePageAnimation();
							// }} );

							break;

						//ON LOAD
						default:
							this.props.setThree(IMAGE_ON_LOAD);
							this.props.setHomeAnimate(false);
							this.setProjectPage();
							this.props.setPageAnimate(0);
							this.props.setAnimate(0);
							break;
					}
					break;

				//TO PROJECTSMENU
				case "projectsmenu":
					switch(this.page){

						//FROM PROJECTS
						default:
							this.props.setThree(IMAGE_PANEL);
							this.clearAnimations();

							this.tl.call(()=>{
								this.setAV(0);
								this.props.setPage("projectsmenu");
								this.setPV(0);
							});

							this.tl.to( this, 1, {av:1, pv: 1, cv:0, onUpdate:()=>{
								this.handleThreeAnimation();
								this.handlePageAnimation();
								this.handleCameraAnimation();
							}} );

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
								this.setPV(0);
							});
							this.tl.to(this, .4, {pv:1, onUpdate:this.handlePageAnimation} );

							//SPREAD IN
							this.tl.call(()=>{
								this.setAV(1);
								this.setPV(1);
								this.props.setPage("home");
							});
							this.tl.to( this, 1, {av:0, pv:0, onUpdate:()=>{
								this.handleThreeAnimation();
								this.handlePageAnimation();
							}} );

							//COMPLETE SETTINGS
							this.tl.call( ()=>{
								this.props.setThree(STREAM_ON_LOAD);
								this.props.setHomeAnimate(true);
								this.props.setPage("home");
							});

							break;

						//FROM PROJECTS
						case "projects1":
						case "projects2":
							this.props.setThree(IMAGE_FROM_STREAM);
							this.props.setHomeAnimate(true);
							this.clearAnimations();

							from = (this.page==="projects1") ? 1 : -1;

							//SPREAD IN
							this.tl.call(()=>{
								this.setAV(1);
								this.setPV(1);
								this.setCV(from);
								this.props.setPage("home");
							});

							this.tl.to( this, 1, {av:0, pv: 0, cv: 0, onUpdate:()=>{
								this.handleThreeAnimation();
								this.handlePageAnimation();
								this.handleCameraAnimation();
							}} );

							//COMPLETE SETTINGS
							this.tl.call( ()=>{
								this.props.setThree(STREAM_ON_LOAD);
								this.props.setHomeAnimate(true);

							});

							break;

						//ON LOAD
						default:
							this.props.setThree(STREAM_ON_LOAD);
							this.props.setHomeAnimate(true);
							this.props.setPage("home");
							this.props.setPageAnimate(0);
							this.props.setAnimate(0);
							break;
					}
					break;
			}

			this.page = page;
		}
	}

	setProjectPage(){
		if (this.props.current%2===0) {
			this.setCV(1);
			this.props.setPage("projects1");

		}else {
			this.setCV(-1);
			this.props.setPage("projects2");
		}
	}

	clearAnimations(){
		this.tl.kill();
		this.tl.clear();
	}

	setAV(direction){
		if (direction===0){
			this.av = (this.av<.95) ? this.av : 0;
		} else{
			this.av = (this.av>.05) ? this.av : 1;
		}

		//console.log( "AV", this.av);
		this.props.setAnimate(this.av);
	}

	setPV(direction){
		if (direction===0){
			this.pv = (this.pv<.95) ? this.pv : 0;
		} else{
			this.pv = (this.pv>.05) ? this.pv : 1;
		}

		this.props.setPageAnimate(this.pv);
	}

	setCV(direction){
		// if (direction===0){
		// 	this.cv = (this.cv<.95) ? this.cv : 0;
		// } else{
		// 	this.cv = (this.cv>.05) ? this.cv : 1;
		// }

		this.cv = direction;

		this.props.setCameraAnimate(this.cv);
	}

	handleThreeAnimation(){
		this.props.setAnimate(this.av);
	}

	handlePageAnimation(){
		this.props.setPageAnimate(this.pv);
	}

	handleCameraAnimation(){
		this.props.setCameraAnimate(this.cv);
	}

	render(){
		return null;
	}

	componentDidMount(){
		const page = this.getPage( this.props );
		this.handlePage( page );
	}

	componentWillReceiveProps(n){
		const page = this.getPage( n );
		this.handlePage( page );
	}

	getPage(n){
		let page = n.routing;

		if (page==="projects"){
			if (n.projectmenu) page="projectsmenu";
			else {
				if (n.current%2===0) page="projects1";
				else page="projects2";
			}
		}

		return page;
	}
}

function mapStateToProps(state) {
	return {
		routing: state.routing.location.pathname.split("/")[1],
		projectmenu: state.projectmenu,
		current: state.current
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators( {
		setHomeAnimate,
		setPageAnimate,
		setCameraAnimate,
		setAnimate,
		setThree,
		setPage
	}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Animate);
