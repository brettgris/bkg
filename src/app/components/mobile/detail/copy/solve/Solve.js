import React, {Component} from 'react';
import './Solve.css';

class Solve extends Component{
	render(){
		return(
			<div className="solve">
				<div className="group">
					<h3>Challenge</h3>
					<p>Regal Cinemas was experiencing low website conversions. Simply put, site visitors were not generating satisfactory ticket sales. In addition, customers were experiencing slow performance during periods of high site traffic—making it difficult to quickly find what they were after and/or make a purchase.</p>
				</div>
				<div className="group">
					<h3>Solve</h3>
					<p>We knew the first step was to rework the site, optimizing its performance. So we put our team of developers in action, and they were able to ensure the site was faster and more reliable. Then we improved the user experience by creating a more clear and intuitive path using a robust visual design and logical content flow. Lastly, we are currently working on updating the site with a responsive design, enhanced content for local theatres and concessions, and a new Regal Crown Club Loyalty experience.</p>
				</div>
				<div className="group">
					<h3>Result</h3>
					<p>Not only did we improve both site satisfaction and navigation while effectively demonstrating the full extent of the Regal Cinemas experience, but our efforts also increased conversions by 247%.</p>
				</div>
			</div>
		)
	}
}

export default Solve;
