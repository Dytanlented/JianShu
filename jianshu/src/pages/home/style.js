import styled from 'styled-components';

export const HomeWrapper = styled.div`
	width: 960px;
	margin: 0 auto;
	overflow: hidden;
`;

export const HomeLeft = styled.div`
	width: 625px;
	padding-top: 30px;
	margin-left: 15px;
	float: left;
	.banner-img{
		width:625px;
		height: 270px;
	}
`;

export const HomeRight = styled.div`
	width: 240px;
	float: right; 
`;

export const TopicWrapper = styled.div`
	padding:20px 0 10px 0;
	overflow: hidden;
	margin-left:-10px;
	border-bottom:1px solid #dcdcdc;
` 
export const TopicItem = styled.div`
	float: left;
	background:#f7f7f7;
	height: 32px;
	line-height: 32px;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius:4px;
	padding: 0 10px;
	margin-left: 12px;
	margin-bottom: 10px;
`
export const ListItem = styled.div`
	overflow: hidden;
	padding:20px 0;
	border-bottom: 1px solid #dcdcdc;
	.pic {
		display:block;
		width:125px;
		height:100px;
		float: right;
		border-radius:10px;
	}
`;

export const ListInfo = styled.div`
	width:500px;
	float:left;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight:bold;
		color: #333;
	}
	.desc {
		font-size: 13px;
		line-height: 24px;
		color: #999;
	}
`
