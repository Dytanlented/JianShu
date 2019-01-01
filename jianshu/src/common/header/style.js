import styled from 'styled-components';
import logoPic from '../../statics/logo.png';
import { createGlobalStyle } from 'styled-components'

export const GlobalLogo = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1546350704696'); /* IE9*/
  src: url('./iconfont.eot?t=1546350704696#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('./iconfont.ttf?t=1546350704696') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1546350704696#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;


export const HeaderWrapper = styled.div`
	height:58px;
	border-bottom: 1px solid #f0f0f0;
	position: relative;

`;
export const Logo =styled.a.attrs({
	href:'/'
})`
	height:58px;
	position:absolute;
	top:0;
	left:0;
	display:block;
	width:100px;
	background:url(${logoPic});
	background-size:contain;
`;

export const Nav = styled.div`
	height:58px;
	width:960px;
	margin:0 auto;
	padding-right:70px;
	box-sizing:border-box;
`;

export const NavItem = styled.div`
	line-height:56px;
	padding:0 15px;
	font-size:17px;
	color:#333;
	&.left{
		float:left;
	}
	&.right{
		float:right;
		color:#969696;
	}
	&.active{
		color:#ea6f5a;
	}
	height:56px;

`;

export const NavSearch = styled.input.attrs({
	placeholder:'搜索'
})`
	width:160px;
	height:38px;
	margin-top:9px;
	margin-left:20px;
	padding:0 30px 0 20px;
	box-sizing:border-box;
	border:none;
	outline:none;
	border-radius:19px;
	background:#eee;
	font-size:14px;
	color:#666;
	&::placeholder{
		color:#999;
	}
	&.focused{
		width:240px;

	}
	&.slide-enter{
		transition: all .2s ease-out; 
	}
	&.slide-enter-active{
		width: 240px;
	}
	&.slide-exit{
		transition: all .2s ease-out;
	}
	&.slide-exit-active{
		width: 160px;
	}

`;

export const SearchInfo = styled.div`
	position:absolute;
	left:0;
	top: 56px;
	width:240px;
	padding:0 20px;
	box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`;
export const SearchInfoTitle = styled.div`
	margin-top: 20px;
	margin-bottom: 15px;
	line-height:20px;
	font-size:14px;
	color: #969696;
`;
export const SearchInfoSwitch = styled.span`
	float: right;
	font-size:13px;
	.spin {
		font-size:12px;
		margin-right:2px;
		transition: all .2s ease-in;
		transform: rotate(0deg);
		transform-origin:center;
		display:block;
		float:left;
	}
`;

export const SearchInfoItem = styled.a`
	padding: 0 5px;
	font-size: 12px;
	line-height:20px;
	border: 1px solid #ddd;
	color: #969696;
	border-radius:3px;
	display: block;
	float: left;
	margin-right:10px;
	margin-bottom:15px;

`
export const SearchInfoList = styled.div`
	overflow: hidden;

`



export const SearchWrapper = styled.div`
	float:left;
	position:relative;

 	.zoom {
		position:absolute;
		right:5px;
		bottom:5px;
		width:30px;
		line-height:30px;
		border-radius:15px;
		text-align:center;
		&.focused{
			background:#777;
			color:#fff;
		}
	}
`;

export const Addition = styled.div`
	position:absolute;
	right:0;
	top:0;
	height:56px;
`;

export const Button = styled.div`
	float:right;
	margin-top:9px;
	margin-right:20px;
	padding:0 20px;
	line-height:38px;
	border-radius:19px;
	border: 1px solid #ec6149; 
	font-size:14px;
	&.reg{
		color:#ec6149;
	}
	&.writing{
		color:#fff;
		background:#ec6149;
	}

`;
