import React, { Component } from 'react';
import { HomeWrapper,HomeLeft,HomeRight }  from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommand from './components/Recommand';
import Writer from './components/Writer';


class Home extends Component {
	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<img className='banner-img' src='//upload.jianshu.io/admin_banners/web_images/4598/6eab2d9b6506c6302c4b5602405021a9e321408b.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt='banner' />
					<Topic />
					<List />

				</HomeLeft>
				<HomeRight>
					<Recommand />
					<Writer />
				</HomeRight>
			</HomeWrapper>
		)
	}
}

export default Home;