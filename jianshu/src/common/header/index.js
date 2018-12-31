import React from 'react';
import { connect } from 'react-redux'; 
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {
	GlobalLogo,
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	Addition,
	Button,
	SearchWrapper
}from './style.js';

const Header = (props) => {
	return (
		<HeaderWrapper>
			<GlobalLogo />
			<Logo />
			<Nav>
				<NavItem className='left active'>首页</NavItem>
				<NavItem className='left'>下载App</NavItem>
				<NavItem className='right'>登录</NavItem>
				<NavItem className='right'>
					<i className='iconfont'>&#xe636;</i>
				</NavItem>
				<SearchWrapper>
					<CSSTransition
						timeout={200}
						in={props.focused}
						classNames="slide"
					>
						<NavSearch
							className={props.focused ? 'focused':''}
							onFocus={props.handleInputFocus}
							onBlur={props.handleInputBlur}
						></NavSearch>
					</CSSTransition>
					<i className={props.focused ? 'focused iconfont':'iconfont'}>&#xe6dd;</i>
					
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


const mapStateToProps = (state) => {
	return {
		focused: state.get('header').get('focused')
	}
}
const mapDispatchToProps = (dispatch) => {
	 return {
	 	handleInputFocus() {
	 		dispatch(actionCreators.searchFocus());
	 	},
	 	handleInputBlur() {
	 		dispatch(actionCreators.searchBlur());
	 	}
	 }
}



 export default connect(mapStateToProps,mapDispatchToProps)(Header);


