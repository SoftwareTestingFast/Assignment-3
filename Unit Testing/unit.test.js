
import renderer from 'react-test-renderer'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import style from '../utility/style.js'
import React from 'react';
import Checkout from '../../pages/checkout'
import AppShell from '../../pages/appShell'
import MyDocument from "../../pages/_document";

beforeAll(() => {
    console.log("Before all Tests")
})

beforeEach(() => {
    console.log("Before each Test")
})

afterEach(() => {
    console.log("After each Test")
})

afterAll(() => {
    console.log("After all Tests")
})

describe('Checkout',()=>{

    test('Snapshot',()=>{
      const tree = renderer.create(<Checkout />).toJSON()
      expect(tree).toMatchSnapshot();
    })

    test('Tagline Text',()=>{
      render(<Checkout/>)
      const element = screen.getByTestId('checkout-final');
      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent("Coming soon!");
    })

    test('Tagline Style',()=>{
       render(<Checkout/>)
       const element = screen.getByTestId('checkout-final');
       expect(element).toBeInTheDocument();
       expect(element).toHaveClass(style.h1)
    })

})



describe('App Shell',()=>{

  test('App Shell', () => {
    const tree = renderer.create(<AppShell />).toJSON()
    expect(tree).toMatchSnapshot();
  })

})


describe('My doc',()=>{

  test('basic snapshot', () => {
    const component = renderer.create(<MyDocument />);
  
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

})




