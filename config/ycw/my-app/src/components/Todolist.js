import React, { Component } from 'react'
import '../assets/css/index.css';
import localstorage from '../common/local'

export default class todolist extends Component {
  constructor(){
    super()   
    this.state={
        list:[]
    } 
  }  
  addList=(ev)=>{
    if(ev.keyCode==13){
      let item={
        title:this.refs.name.value,
        checked:false,    
        isEdit:false
      }
        this.refs.name.value=""
        let newList=this.state.list
        newList.push(item)  
        this.setState({
          list:newList      
        })
        localStorage.setItem('todolist',JSON.stringify(this.state.list))
    }  

  }
  componentDidMount(){
      this.setState({
        list:JSON.parse(localStorage.getItem('todolist') )    
      })
     
  }
  changeState=(key) =>{
    let newList=this.state.list
    newList[key].checked= ! newList[key].checked
    this.setState({
      list:newList    
    })    
    localStorage.setItem('todolist',JSON.stringify(this.state.list))
  }
  delete=(key)=>{
    let newList=this.state.list   
    newList.splice(key,1)
    this.setState({
      list:newList    
    })
    localStorage.setItem('todolist',JSON.stringify(this.state.list))
  }
  dbc =(key) =>{    
    let newList=this.state.list
    newList[key].isEdit=true
    this.setState({
        list:newList    
      }) 
      localStorage.setItem('todolist',JSON.stringify(this.state.list))
  }
    //   findle=(ev,key)=>{
    
    //       let newList=this.state.list
    //       console.log(newList)
    //       newList[key].title=this.refs.finalVal.value 
    //       newList[key].isEdit=false
    //       console.log(this.refs.finalVal.value)
    //       this.setState({
    //         list:newList    
    //       })    
        
    //   }
  render() {
    return (
      <div>
         <div className="page-top">
            <div className="page-content">
              <h2>任务计划列表</h2>
            </div>
        </div>
        <div className="main">
            <h3 className="big-title">添加任务：</h3>
            <input  onKeyUp={this.addList} ref="name" placeholder="例如：吃饭睡觉打豆豆；    提示：+回车即可添加任务" className="task-input" type="text" />
            <ul className="task-count">
                <li>2个任务未完成</li>
                <li className="action">
                    <a className="active" href="#">所有任务</a>
                    <a href="#">未完成的任务</a>
                    <a href="#">完成的任务</a>
                </li>
            </ul>
            <h3 className="big-title">任务列表：</h3>
            <div className="tasks">

            <span className="no-task-tip">还没有添加任何任务</span>
            <ul className="todo-list">
                {
                this.state.list.map((val,key) =>{

                      return(
                      <li className={`${val.checked ? "todo completed" : "todo"} ${val.isEdit ? "editing" : "todo"}`}   key={key} ref="every" onDoubleClick={this.dbc.bind(this,key)}>
                        <div className="view">
                            <input className="toggle" type="checkbox"  onChange={this.changeState.bind(this,key)} checked={val.checked} ref="finalVal"/>
                            <label>{val.title}</label>
                            <button className="destroy" onClick={this.delete.bind(this,key)}></button>
                        </div>
                        <input className="edit" type="text" />
                      </li>   
                      )     
                    
                     
                })
                }
            </ul>
            </div>
        </div>    
      </div>
    )
  }
}

