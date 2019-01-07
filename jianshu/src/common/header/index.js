import React,{ Component } from 'react';
import { connect } from 'react-redux'; 
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store'; 
import { Link } from 'react-router-dom';
import { 
	GlobalLogo,
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	Addition,
	Button,
	SearchWrapper,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoItem,
	SearchInfoList
}from './style.js';

class Header extends Component {
	getListArea() {
		const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handlePageChange } = this.props;
		const newList = list.toJS();
		const pageList = [];
		if(newList.length){
			for ( let i=(page-1)*4;i<page*4 ;i++){
				pageList.push(
				<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
			)
		}
		}
		if (focused || mouseIn){
			return (
				<SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch 
							onClick={() => handlePageChange(page,totalPage,this.spinIcon)}
						>
							<i ref={(icon) => {this.spinIcon = icon}} className='iconfont spin'>&#xe851;</i>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{pageList}
					</SearchInfoList>
				</SearchInfo>
			)
		}else {
			return null;
		}
	}

	render() {
		const { focused, handleInputFocus, handleInputBlur, list ,login, logout } = this.props;
		return (
			<HeaderWrapper>
				<GlobalLogo />
				<Link to='/'>
					<Logo />
				</Link>
				<Nav>
					<NavItem className='left active'>首页</NavItem>
					<NavItem className='left'>下载App</NavItem>
					{
						login ? <NavItem className='right' onClick={logout}>退出</NavItem> : 
						<Link to='/login'><NavItem className='right'>登录</NavItem></Link>
					}
				
					<NavItem className='right'>
						<i className='iconfont'>&#xe636;</i>
					</NavItem>
					<SearchWrapper>
						<CSSTransition
							timeout={200}
							in={focused}
							classNames="slide"
						>
							<NavSearch
								className={focused ? 'focused':''}
								onFocus={() => handleInputFocus(list)}
								onBlur={handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<i className={focused ? 'focused iconfont zoom':'iconfont zoom'}>&#xe6dd;</i>
						{this.getListArea(focused)}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Button className='writing'>
						<i className='iconfont'>&#xe6a4;</i>
						写文章
					</Button>
					<Button className='reg'>注册</Button>
				</Addition>
			</HeaderWrapper>
		)	
	}
}



const mapStateToProps = (state) => {
	return {
		focused:state.getIn(['header','focused']),
		list: state.getIn(['header','list']),
		page: state.getIn(['header','page']),
		mouseIn:state.getIn(['header','mouseIn']),
		totalPage:state.getIn(['header','totalPage']),
		login:state.getIn(['login','login'])
		// focused: state.get('header').get('focused')
	}
}
const mapDispatchToProps = (dispatch) => {
	 return {
	 	handleInputFocus(list) {
	 		if(list.size === 0){
	 			dispatch(actionCreators.getList());
	 		}
	 		dispatch(actionCreators.searchFocus());
	 	},
	 	handleInputBlur() {
	 		dispatch(actionCreators.searchBlur());
	 	},
	 	handleMouseEnter() {
	 		dispatch(actionCreators.mouseEnter());
	 	},
	 	handleMouseLeave() {
	 		dispatch(actionCreators.mouseLeave());
	 	},
	 	handlePageChange(page,totalPage,spin) {
	 		let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
	 		if(originAngle){
	 			originAngle = parseInt(originAngle,10);
	 		}else{
	 			originAngle=0;
	 		}
	 		spin.style.transform = 'rotate('+(originAngle + 360)+'deg)';
	 		if (page<totalPage){
	 			dispatch(actionCreators.pageChange(page + 1));
	 		}else{
	 			dispatch(actionCreators.pageChange(1));
	 		}
	 	},
	 	logout() {
	 		dispatch(loginActionCreators.logout())
	 	}
	 }
}



 export default connect(mapStateToProps,mapDispatchToProps)(Header);


