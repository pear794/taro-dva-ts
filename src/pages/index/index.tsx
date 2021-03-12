/*
 * @Description: 
 * @Author: 乔彦辉
 * @Date: 2021-03-12 15:46:15
 * @LastEditTime: 2021-03-12 17:06:31
 * @LastEditors: 乔彦辉
 */
import { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.less'

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

type PageStateProps = {
  count: number
}

type PageDispatchProps = {
  dispatch: ({ type: string, payload: any }) => void
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}

@connect(({ index }) => ({
  ...index
}))
class Index extends Component {
  handleClick = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'index/setCount',
      payload: 5 * Math.random()
    })
  }

  render () {
    const { count } = this.props
    return (
      <View className='index' onClick={this.handleClick}>
        {count}
      </View>
    )
  }
}

export default Index

