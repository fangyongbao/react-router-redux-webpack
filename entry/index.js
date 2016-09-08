import reactDom from 'react-dom';
import React from 'react';
import 'common.scss';
//transform-runtime只会对es6的语法进行转换，而不会对新api进行转换。
//如果需要转换新api，就要引入babel-polyfill
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

