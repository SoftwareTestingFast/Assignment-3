import renderer from 'react-test-renderer'
import Search from '../../components/Search/Search'
import Subcategory from "../../pages/search";
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import style from '../utility/style.js'
import React from 'react';




describe('Search functionality',()=>{

  test('Simple Search functionality', () => {
    const comp = renderer.create(<Search></Search>);
    const check = comp.toJSON();
    expect(check).toMatchSnapshot();
    })

})


describe('Sub Category',()=>{

  test('Sub Category', () => {
    const comp = renderer.create(<Subcategory></Subcategory>);
    const check = comp.toJSON();
    expect(check).toMatchSnapshot();
  });

})
