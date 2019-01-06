import{ fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
	topicList:[],
	articleList: [],
	recommandList:[],
	articlePage: 1,
	showScroll:false
});

export default (state= defaultState,action) => {
	switch(action.type){
		case actionTypes.CHANGE_HOME_DATA:
			return state.merge({
				topicList:fromJS(action.topicList),
				articleList:fromJS(action.articleList),
				recommandList:fromJS(action.recommandList)
			})
		case actionTypes.ADD_HOME_LIST:
			return state.merge({
				'articleList':state.get('articleList').concat(action.list),
				'articlePage':action.nextPage
			}
			)
		case actionTypes.TOGGLE_TOP_SHOW:
			return state.set('showScroll',action.show);
			 
		default:
			return state;
	}
}