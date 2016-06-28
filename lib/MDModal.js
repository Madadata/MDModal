'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mdbutton = require('mdbutton');

var _mdbutton2 = _interopRequireDefault(_mdbutton);

var _MDModal = require('./MDModal.css');

var _MDModal2 = _interopRequireDefault(_MDModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dialogId = _MDModal2.default['dialog'];
var closeId = _MDModal2.default['close'];

var MDModalGen = function MDModalGen(Component) {
  return function (props) {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        Component,
        { href: '#' + dialogId },
        'Button'
      ),
      _react2.default.createElement(
        'div',
        { id: dialogId, className: dialogId },
        _react2.default.createElement(
          'div',
          { className: _MDModal2.default['content'] },
          _react2.default.createElement(
            'a',
            { href: '#' + closeId, className: closeId },
            'x'
          ),
          props.children
        )
      )
    );
  };
};

exports.default = MDModalGen;