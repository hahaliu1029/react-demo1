import React, { Component } from "react";
import { Button, Badge, Space } from "antd";

export default class Demo extends Component {
  constructor(props) {
    // 如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数。
    // 在 constructor() 函数中不要调用 setState() 方法
    super(props);
    this.state = {
      count: 0,
    };
    //console.log("constructor");
  }

  componentDidMount() {
    // 会在组件挂载后（插入 DOM 树中）立即调用
    // 这个方法是比较适合添加订阅的地方。如果添加了订阅，请不要忘记在 componentWillUnmount() 里取消订阅
    //console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 不常用
    //console.log(nextState)
    // 根据 shouldComponentUpdate() 的返回值，判断 React 组件的输出是否受当前 state 或 props 更改的影响。默认行为是 state 每次发生变化组件都会重新渲染
    if (nextState.count === 5) {
      //console.log("shouldComponentUpdate false");
      return false;
    } else {
      //console.log("shouldComponentUpdate true");
      return true;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // 会在更新后会被立即调用。首次渲染不会执行此方法。
    //console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    // 会在组件卸载及销毁之前直接调用。在此方法中执行必要的清理操作，例如，清除 timer，取消网络请求或清除在 componentDidMount() 中创建的订阅等。
    // 不应调用 setState()，因为该组件将永远不会重新渲染。组件实例卸载后，将永远不会再挂载它
    //console.log("componentWillUnmount");
  }

  handleClick() {
    let { count } = this.state//console.log
    count++
    this.setState({
      count: count
    })
  }

  render() {
    // render() 方法是 class 组件中唯一必须实现的方法。
    //console.log("render");
    let { count } = this.state
    return (
      <Space>
        <Badge count={count} showZero>
          <span className="head-example"> </span>
        </Badge>
        <Button type='primary' onClick={()=> {
          this.handleClick()
        }}>Add</Button>
      </Space>
    );
  }
}
