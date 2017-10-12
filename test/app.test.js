import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import ConnectedApp, { App } from '../src/containers/App';

describe('<App />', () => {
    it('calls render', () => {        
        const wrapper = shallow(<App />);        
        expect(wrapper.contains(<h1>Hello Thomes</h1>)).to.equal(true);
    });

    it('calls componentDidMount', () => {
        sinon.spy(App.prototype, 'componentDidMount');
        mount(<App />);
        expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
    });
});

describe('<ConnectedApp />' , ()=>{
    const initialState = { output:100 };
    const mockStore = configureStore();
    let store,container;
    
    beforeEach(()=>{
        store = mockStore(initialState);
        container = shallow(<ConnectedApp store={store} />);  
    });

    it('render the connected(SMART) component', () => {
        expect(container.length).to.equal(1);
    });
});