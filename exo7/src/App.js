import './App.css';
import Article from './Components/Article'
import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <div>
        <Article produit="Pantalon" prix="20balles"/>
        <Article produit="Jeu" prix="70 euros"/>
        <Article produit="Choco" prix="2 balles"/>
      </div>
    )
  }
}

export default App