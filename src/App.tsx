import React from 'react';
import {Container, Highlight,  Wrapper } from './App.styles'
import { findIndex } from 'lodash'

import { read, selections } from './api';

const Replace = (text:string)=> {
  const reg = new RegExp(/([\w]+)/, 'gi');
  return text.split(reg);
}


const App = () => {
  let index: any = {}
  const words = Replace(read.text)

  const isSelected = (text:string)=>{
    if (selections.includes(text)){
      return true
    }
    return false
  }

  const isTranslated = (text:string)=> {
    // find item in read selecions
    const currentPosition = findIndex(read.selections, ['label', text])
    if (currentPosition === -1 ) return
    index[text] = index[text] >= 0 ? index[text] + 1 : 0
    const translatedIndexes = read.selections[currentPosition].index
    if (translatedIndexes?.includes(index[text]))
      return read.selections[currentPosition].translation
  }

  const handleClick = (e:any)=>{
    // const newArray = xor(selected,[e.currentTarget.textContent])
    // setSelected(newArray)
  }

  return (
    <Wrapper className="App">
      <Container>
        {words.map(word => word !== ' ' ? (
          <Highlight
            selected={isSelected(word)}
            onClick={handleClick}
            data-translation={isSelected(word)? isTranslated(word) : ''}>
              {word}
          </Highlight>
        ) : ' ')}
      </Container>
    </Wrapper>
  );
}

export default App;
