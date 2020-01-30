import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
    'id': '1',
    'image': 'https://placeimg.com/64/64/1',
    'name': '주홍범',
    'birthday': '941018',
    'gender': '남자',
    'job': '개발자'
  },
  {
    'id': '2',
    'image': 'https://placeimg.com/64/64/2',
    'name': '홍길동',
    'birthday': '910101',
    'gender': '남자',
    'job': '의사' 
  },
  {
    'id': '3',
    'image': 'https://placeimg.com/64/64/3',
    'name': '이순신',
    'birthday': '921515',
    'gender': '남자',
    'job': '군인'
  }
]

class App extends Component {
  render() {
    return (
      customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/> ); })
    );
  }
}


export default App;
