import{ fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
	title:'陈鲁豫，娱乐圈先知般的存在……',
	content:'<img src="//upload-images.jianshu.io/upload_images/11490841-b803e2fe96102d62.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/367/format/webp"/><p>陈鲁豫，好像有一种天生的能力，那就是，她采访谁，谁就倒霉。</p><p><b>陈鲁豫，好像有一种天生的能力，那就是，她采访谁，谁就倒霉。</b></p><p>陈鲁豫，好像有一种天生的能力，那就是，她采访谁，谁就倒霉。</p>'
})
export default (state= defaultState,action) => {
	switch(action.type){
		
		default:
			return state;
	}
}