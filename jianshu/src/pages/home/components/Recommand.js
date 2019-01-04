import React, { Component } from 'react';
import { RecommandWrapper,RecommandItem } from '../style';
import { connect } from 'react-redux';
class Recommand extends Component {
	render() {
		const {list} =this.props;
		return (
			<RecommandWrapper>
				{
					list.map((item) => {
						return <RecommandItem imgUrl={item.get('imgUrl')} key={item.get('id')}/> 
					})
				}
			</RecommandWrapper>
		)
	}
}

const mapState = (state) => ({
	list:state.getIn(['home','recommandList'])
})

export default connect(mapState,null)(Recommand);