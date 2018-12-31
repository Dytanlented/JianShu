import styled from 'styled-components';
import logoPic from '../../statics/logo.png';
import { createGlobalStyle } from 'styled-components'

export const GlobalLogo = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1546143740695'); /* IE9*/
  src: url('./iconfont.eot?t=1546143740695#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAWcAAsAAAAACBwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8rEjPY21hcAAAAYAAAABeAAABnLT3H05nbHlmAAAB4AAAAbwAAAHc9uMjsmhlYWQAAAOcAAAALwAAADYTvBX1aGhlYQAAA8wAAAAcAAAAJAfeA4VobXR4AAAD6AAAAA4AAAAQEAAAAGxvY2EAAAP4AAAACgAAAAoBOACEbWF4cAAABAQAAAAfAAAAIAETAExuYW1lAAAEJAAAAUUAAAJtPlT+fXBvc3QAAAVsAAAAMAAAAEHcubOheJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByemT27y9zwv4EhhrmBoQEozAiSAwDx+gz2eJztkLENgDAMBM9xQBFiFEqUgagYLGulzRrBcSgYgrfO8r++MrAAahxGBLkRhi5LxXNl8zySzSebAC230mrv38sl3kh+6WjKyq/d9/k6HV+bjB+3MvG8TggPCmUYBgAAeJw1kF9r02AUxs953yRvuyWpXduFxXYmeZcmWbempm1iZaYOFAq5FfFCFIWJ7A8K0y+wDfRLbLeClwFB7+bA+60g7Gr4MQRp57uJnHP1POfwe3hAAri8pMcUgEEJliAEsLlnM47dCm16XGFUjrtRA3mfK9xp9ntD7HGHGTrWqvPdKL6H5PjVaHr+cANLLx9syQqR2Saed9LdO2ivt5PNZ/fvhs/9hmW6nfGYwjTA4Y0mr0y/y/V3P8K4EzzW1cx9ItcXavXIXQQAIjJ9pSd0BDWwAdwU+230dGSLaERxYsxHcc9zhZRiIiQdyZh79Ozw6FSSTo/WdsKL8qpTnvw5yCnND/ZzScon4c7aP/vwjLq3Lsp8ZW5Pyvf/n4AsuEB/kd+ggAEOxDAUZFthdtxz+RU4icUIogiSiCau4AKNItb1do3qtR0PSYjMY0bikd3pT8vCrcLkE6HvH+m6Zd00i41CRj5/6Y9W/dGG6bISCWa/Bc6HdGDSzPdbb+zlF9u2pmpFtaXNmBpFvS0lFKk2W2VLlaywLQVqZVBzZ+bInnqybL1t+X5GFgbpRzt4+vq2ponPFa0I8BeeG2BneJxjYGRgYADimUHc+fH8Nl8ZuFkYQOCGX8YfBP1/BwsDsweQy8HABBIFABxFCjoAeJxjYGRgYG7438AQw8IAAkCSkQEVsAAARwoCbXicY2FgYGBBwgAAsAARAAAAAAAAAEoAhADuAAB4nGNgZGBgYGFwYGBlAAEmIOYCQgaG/2A+AwAPaQFgAHicZY9NTsMwEIVf+gekEqqoYIfkBWIBKP0Rq25YVGr3XXTfpk6bKokjx63UA3AejsAJOALcgDvwSCebNpbH37x5Y08A3OAHHo7fLfeRPVwyO3INF7gXrlN/EG6QX4SbaONVuEX9TdjHM6bCbXRheYPXuGL2hHdhDx18CNdwjU/hOvUv4Qb5W7iJO/wKt9Dx6sI+5l5XuI1HL/bHVi+cXqnlQcWhySKTOb+CmV7vkoWt0uqca1vEJlODoF9JU51pW91T7NdD5yIVWZOqCas6SYzKrdnq0AUb5/JRrxeJHoQm5Vhj/rbGAo5xBYUlDowxQhhkiMro6DtVZvSvsUPCXntWPc3ndFsU1P9zhQEC9M9cU7qy0nk6T4E9XxtSdXQrbsuelDSRXs1JErJCXta2VELqATZlV44RelzRiT8oZ0j/AAlabsgAAAB4nGNgYoAALgbsgIWRiZGZkYWRlYHJMZErLTEvPSUxKzMvnTU3MT8pk4EBAFPMBuc=') format('woff'),
  url('./iconfont.ttf?t=1546143740695') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1546143740695#iconfont') format('svg'); /* iOS 4.1- */
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

	.iconfont{
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
