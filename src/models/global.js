
export default {

  namespace: 'global',

  state: {
    userInfo:{
      email:null,
      password:null,
      id:null
    }
  },

  subscriptions: {
  },

  effects: {
    // dispatch 用户信息
    *setUserInfo({ payload }, { put }) {  // eslint-disable-line
      yield put({ type: 'set_userinfo',payload });
    },
  },

  reducers: {
    // 设置用户信息
    set_userinfo(state, {payload}) {
      return { ...state, userInfo:payload };
    },
  },

};
