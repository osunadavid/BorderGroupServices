'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../es/index.js');

var _index2 = _interopRequireDefault(_index);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('should ssr a loader', function () {
  var html = _server2.default.renderToStaticMarkup(_react2.default.createElement(_index2.default, { src: 'foo10', loader: _react2.default.createElement(
      'span',
      null,
      'Loading...'
    ) }));
  expect(html).toEqual('<span>Loading...</span>');
});

test('should ssr nothing if only src is set', function () {
  var html = _server2.default.renderToStaticMarkup(_react2.default.createElement(_index2.default, { src: 'foo11' }));
  expect(html).toEqual('');
});