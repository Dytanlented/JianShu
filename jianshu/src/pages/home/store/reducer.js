import{ fromJS } from 'immutable';

const defaultState = fromJS({
	topicList:[{
		id:1,
		title:"社会热点",
	},{
		id:2,
		title:"手绘"
	},{
		id:3,
		title:"区块链"
	}
	]
});

export default (state= defaultState,action) => {
	switch(action.type){
		default:
			return state;
	}
}