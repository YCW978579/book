import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Todolist from './components/Todolist'
class App extends Component {
  render() {
    return (
      <div>
        {/* <div class="page-top">
          <div class="page-content">
            <h2>任务计划列表</h2>
          </div>
        </div>
        <div class="main">
          <h3 class="big-title">添加任务：</h3>
          <input placeholder="例如：吃饭睡觉打豆豆；    提示：+回车即可添加任务" class="task-input" type="text" />
          <ul class="task-count">
            <li>2个任务未完成</li>
            <li class="action">
              <a class="active" href="#">所有任务</a>
              <a href="#">未完成的任务</a>
              <a href="#">完成的任务</a>
            </li>
          </ul>
          <h3 class="big-title">任务列表：</h3>
          <div class="tasks">

            <span class="no-task-tip">还没有添加任何任务</span>
            <ul class="todo-list">
              <li class="todo">
                <div class="view">
                  <input class="toggle" type="checkbox" />
                  <label>vue学习计划</label>
                  <button class="destroy"></button>
                </div>
                <input class="edit" type="text" />
              </li>
            </ul>
          </div>
        </div> */}
        <Todolist />
      </div>
    );
  }
}

export default App;