import {render,screen,cleanup} from '@testing-library/react';
import suggestedProducts from '../product/SuggestedProducts';


test('testing suggested products is visible or not', ()=>{
    render(<suggestedProducts></suggestedProducts>); 
    const linkElement = screen.getByText(/Coming soon!/i);
    expect(linkElement).toBeInTheDocument();
    // const nav = screen.getAllByTestId("NAV1");
    // expect(nav).toBeInTheDocument();
    // expect(nav).toHaveTextContent('hi');

})