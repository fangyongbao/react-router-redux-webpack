import reactDom from 'react-dom';
import React from 'react';
import 'common.scss';
import 'es6-promise';
import 'babel-polyfill';
import {Provider} from 'react-redux';
import IndexStore from '../src/store/IndexStore';
import IndexRouter from '../src/router/IndexRouter';
reactDom.render(
	<Provider store={IndexStore}>
        <IndexRouter></IndexRouter>
    </Provider>
	,document.getElementById('app')
);

