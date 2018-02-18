import React, {Component} from 'react';
import './Solve.css';

class Solve extends Component{
	render(){
		return(
			<div className="solve row section justify-content-center">
				<div className={this.props.class}>
					<div className="group">
						<h4>Client</h4>
						<p>Original marketing for the television limited series, The White Queen. This series is a riveting portrayal of one of the most dramatic and turbulent times in English history. This epic begins in war-torn 1464 and is uniquely told through the perspective of three different, yet equally relentless women- Elizabeth Woodville, Margaret Beaufort and Anne Neville. In their quest for power, they will scheme, manipulate and seduce their way onto the English throne.</p>
					</div>
					<div className="group">
						<h4>Ask</h4>
						<p>Concept and create a digital experience for the viewers of the limited series by expanding a key concept of the series and work in conjunction with show art directions and producers to create assets.</p>
					</div>
					<div className="group">
						<h4>Solution</h4>
						<p>After evaluation of the scripts and early teasers, it was apparent that a key part of this show was all the characters and the relationships between them. This show spans hundreds of years and a lot of the relationships change in each episode. We sought to create a digital version of a family tree of the British Monarchy during the span of the show and to create an interface that allowed the user to see how the monarchy changed in each episode with marriages, births and deaths. We also wanted to keep users engaged by adding a social campaign that encouraged viewers to vote to award characters in different categories that would show on the interface.</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Solve;
