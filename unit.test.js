import renderer from 'react-test-renderer'
import style from '../utility/style.js'
import React from 'react';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

import SearchDesktop from '../../components/Search/SearchDesktop'
import SearchMobile from '../../components/Search/SearchMobile'



describe('Search function in Mobile',()=>{


    test('Mobile Search', () => {
      const item = renderer.create(<SearchMobile></SearchMobile>);
      const x = item.toJSON();
      expect(x).toMatchSnapshot();
    })
  
  })
  
  

describe('Search function in Desktop',()=>{


  test('Desktop Search', () => {
    const item = renderer.create(<SearchDesktop></SearchDesktop>);
    const x = item.toJSON();
    expect(x).toMatchSnapshot();
  })

})

