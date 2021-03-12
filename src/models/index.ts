/*
 * @Description: 
 * @Author: 乔彦辉
 * @Date: 2021-03-12 16:18:10
 * @LastEditTime: 2021-03-12 16:25:01
 * @LastEditors: 乔彦辉
 */
export default {
  namespace: 'index',
  state: {
    count: 1
  },
  effects: {},
  reducers: {
    setCount(state, { payload }) {
      return { ...state, count: payload }
    }
  }
}