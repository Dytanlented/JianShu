import React, { PureComponent } from 'react';
import { HomeWrapper,HomeLeft,HomeRight }  from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommand from './components/Recommand';
import Writer from './components/Writer';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { BackTop } from './style';

class Home extends PureComponent {

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
				{this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>:null}
				
			</HomeWrapper>
		)
	}
	componentDidMount(){
		this.props.changeHomeData();
		this.bindEvents();
	}
	componentWillUnmount(){
		window.removeEventListener('scroll',this.props.changeScrollTopShow)
	}
	bindEvents() {
		window.addEventListener('scroll',this.props.changeScrollTopShow)
	}
	handleScrollTop() {
		window.scrollTo(0,0);
	}
}
const mapDispatch = (dispatch) => ({
	changeHomeData(){
		const action = actionCreators.getHomeInfo();
		dispatch(action);
	},
	changeScrollTopShow(e) {
		if(document.documentElement.scrollTop > 400){
			dispatch(actionCreators.toggleTopShow(true))
		}else{
			dispatch(actionCreators.toggleTopShow(false))
		}
	}
})

const mapState = (state) => ({
	showScroll:state.getIn(['home','showScroll'])
})

export default connect(mapState,mapDispatch)(Home);

