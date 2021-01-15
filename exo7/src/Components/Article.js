import React, { Component } from 'react'
import './Article.css';

export class Article extends Component {
    render() {
        return (
            <div>
                <h1 className="Produit">Produits: {this.props.produit}</h1>
                <h2 className="Prix">Prix: {this.props.prix}</h2>
            </div>
        )
    }
}

export default Article
