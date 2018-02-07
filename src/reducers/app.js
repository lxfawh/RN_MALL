
// import Immutable from 'immutable'
// import * as ActionTypes from '../constants/actionType'
// import Storage from '../utils/storage';

// const initState = Immutable.fromJS({
//     token: '',
//     userId: '',
//     currentTab: 'home',
//     loading: false,
//     userInfo: '',
// });

// export default (state = initState, action) => {
//     let _state = state;
//     switch (action.type) {
//         case ActionTypes.ACTION_TOGGLE_LOADING:
//             _state = _state.set('loading', action.payload)
//             return _state;
//         case ActionTypes.ACTION_SAVE_LOGIN_ACCOUNT:
//             console.log('-------action.payload', action.payload);
//             const result = action.payload;
//             global.token = action.payload.token;
//             global.userId = action.payload.userId;
//             Storage.save('USER_INFO',result);
//             _state = _state.set('userId', result.userId);
//             _state = _state.set('userInfo', result);
//             return _state;
//         case ActionTypes.ACTION_USER_CLEAR:
//             global.token = '';
//             global.userId = '';
//             Storage.remove('USER_INFO');
//             _state = _state.set('userId', '');
//             _state = _state.set('userInfo', '');
//             return _state;
//         default:
//             return _state
//     }
// }
