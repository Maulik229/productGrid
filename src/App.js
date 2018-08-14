import React, { Component } from 'react';
import data from '../src/db.json';
import Image from 'react-image-resizer';
import  classes from '../src/App.css';

class App extends Component {

  render() {
    let image= data.response.products.map((img) => {
      return (
       
        <div className={classes.grid}>
            <Image src={img.imageUrl} height={200} width={200} ></Image>
           <label>{img.product_name}</label>
  
        </div>
        )
    })
    return (
   
    
          <div >{image}</div>
        
      
    )
  }
}

export default App;
