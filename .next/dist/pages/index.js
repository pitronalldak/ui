'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/pitronalldak/Documents/projects/vr-lab-ui/pages/index.js?entry';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactBurgerMenu = require('react-burger-menu');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import Typist from 'react-typist';

var GlobalWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'pages__GlobalWrapper',
  componentId: 's127f27a-0'
})(['height:100vh;']);
var OuterContainer = _styledComponents2.default.div.withConfig({
  displayName: 'pages__OuterContainer',
  componentId: 's127f27a-1'
})(['height:', ';perspective:', ';overflow:', ';'], function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen && '100%';
}, function (_ref2) {
  var isOpen = _ref2.isOpen;
  return isOpen && '1500px';
}, function (_ref3) {
  var isOpen = _ref3.isOpen;
  return isOpen && 'hidden';
});

var PageWrap = _styledComponents2.default.div.withConfig({
  displayName: 'pages__PageWrap',
  componentId: 's127f27a-2'
})(['background:#b4bad2;height:100vh;transform:', ';transform-style:', ';transition:', ';overflow:', ';'], function (_ref4) {
  var isOpen = _ref4.isOpen;
  return isOpen && 'translate3d(-100px, 0px, -600px) rotateY(20deg)';
}, function (_ref5) {
  var isOpen = _ref5.isOpen;
  return isOpen && 'preserve-3d';
}, function (_ref6) {
  var isOpen = _ref6.isOpen;
  return isOpen && 'all 0.5s';
}, function (_ref7) {
  var isOpen = _ref7.isOpen;
  return isOpen && 'hidden';
});

var Page = _styledComponents2.default.main.withConfig({
  displayName: 'pages__Page',
  componentId: 's127f27a-3'
})(['']);

var Title = _styledComponents2.default.h1.withConfig({
  displayName: 'pages__Title',
  componentId: 's127f27a-4'
})(['font-size:32px;font-weight:800;padding:20% 0 0 20%;']);
var Img = _styledComponents2.default.img.withConfig({
  displayName: 'pages__Img',
  componentId: 's127f27a-5'
})(['position:absolute;left:60%;height:75%;bottom:0;']);

var IndexPage = function (_React$Component) {
  (0, _inherits3.default)(IndexPage, _React$Component);

  function IndexPage() {
    var _ref8;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, IndexPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref8 = IndexPage.__proto__ || (0, _getPrototypeOf2.default)(IndexPage)).call.apply(_ref8, [this].concat(args))), _this), _this.state = { isOpen: false }, _this.handleMenuOpen = function (state) {
      _this.setState(state);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(IndexPage, [{
    key: 'render',
    value: function render() {
      var isOpen = this.state.isOpen;

      return _react2.default.createElement(GlobalWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(OuterContainer, { isOpen: isOpen, id: 'outer-container', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement(_reactBurgerMenu.slide, {
        id: 'scaleRotate',
        pageWrapId: "page-wrap",
        outerContainerId: "outer-container",
        onStateChange: this.handleMenuOpen,
        right: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement('a', { id: 'home', className: 'menu-item', href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'About'), _react2.default.createElement('a', { id: 'about', className: 'menu-item', href: '/about', __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'Techologies'), _react2.default.createElement('a', { id: 'contact', className: 'menu-item', href: '/contact', __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, 'Porstfolio'), _react2.default.createElement('a', { id: 'contact', className: 'menu-item', href: '/contact', __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'Contributions'), _react2.default.createElement('a', { id: 'contact', className: 'menu-item', href: '/contact', __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, 'Contact us')), _react2.default.createElement(PageWrap, { isOpen: isOpen, id: 'page-wrap', __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, 'Hire an expert Front-End Team'), _react2.default.createElement(Img, { src: '../static/img/bart-main.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }))));
    }
  }]);
  return IndexPage;
}(_react2.default.Component);

exports.default = IndexPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkdsb2JhbFdyYXBwZXIiLCJkaXYiLCJPdXRlckNvbnRhaW5lciIsImlzT3BlbiIsIlBhZ2VXcmFwIiwiUGFnZSIsIm1haW4iLCJUaXRsZSIsImgxIiwiSW1nIiwiaW1nIiwiSW5kZXhQYWdlIiwic3RhdGUiLCJoYW5kbGVNZW51T3BlbiIsInNldFN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFDQTs7QUFFQSxJQUFNLDJDQUFBLEFBQXVCO2VBQXZCO2VBQUEsQUFBZ0I7SUFBdEI7QUFHQSxJQUFNLDRDQUFBLEFBQXdCO2VBQXhCO2VBQUEsQUFBaUI7b0RBQ1gsZ0JBQUE7TUFBQSxBQUFHLGNBQUgsQUFBRztTQUFhLFVBQWhCLEFBQTBCLEFBRGhDO0dBRVcsaUJBQUE7TUFBQSxBQUFHLGVBQUgsQUFBRztTQUFhLFVBQWhCLEFBQTBCLEFBRnJDO0dBR1EsaUJBQUE7TUFBQSxBQUFHLGVBQUgsQUFBRztTQUFhLFVBQWhCLEFBQTBCLEFBSHhDLEFBQU07OztBQU1OLElBQU0sc0NBQUEsQUFBa0I7ZUFBbEI7ZUFBQSxBQUFXOzJHQUdGLGlCQUFBO01BQUEsQUFBRyxlQUFILEFBQUc7U0FBYSxVQUFoQixBQUEwQixBQUhuQztHQUllLGlCQUFBO01BQUEsQUFBRyxlQUFILEFBQUc7U0FBYSxVQUFoQixBQUEwQixBQUp6QztHQUtVLGlCQUFBO01BQUEsQUFBRyxlQUFILEFBQUc7U0FBYSxVQUFoQixBQUEwQixBQUxwQztHQU1RLGlCQUFBO01BQUEsQUFBRyxlQUFILEFBQUc7U0FBYSxVQUFoQixBQUEwQixBQU54QyxBQUFNOzs7QUFTTixJQUFNLGtDQUFBLEFBQWM7ZUFBZDtlQUFBLEFBQU87SUFBYjs7QUFHQSxJQUFNLG1DQUFBLEFBQWU7ZUFBZjtlQUFBLEFBQVE7SUFBZDtBQUtBLElBQU0saUNBQUEsQUFBYTtlQUFiO2VBQUEsQUFBTTtJQUFaOztJLEFBT007Ozs7Ozs7Ozs7Ozs7O29OLEFBQ0osUUFBUSxFQUFFLFEsQUFBRixBQUFVLGUsQUFFbEIsaUJBQWlCLGlCQUFTLEFBQ3hCO1lBQUEsQUFBSyxTQUFMLEFBQWMsQUFDZixBOzs7Ozs7NkJBR1E7VUFBQSxBQUNDLFNBQVcsS0FEWixBQUNpQixNQURqQixBQUNDLEFBQ1I7OzZCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0UsQUFERjs7eUJBQ0csY0FBRCxrQkFBZ0IsUUFBaEIsQUFBd0IsUUFBUSxJQUFoQyxBQUFtQztvQkFBbkM7c0JBQUEsQUFDRSxBQURGOzt5QkFDRSwrQkFBQTtZQUFBLEFBQ0ssQUFDSDtvQkFGRixBQUVjLEFBQ1o7MEJBSEYsQUFHb0IsQUFDbEI7dUJBQWUsS0FKakIsQUFJc0IsQUFDcEI7ZUFMRjs7b0JBQUE7c0JBQUEsQUFPRSxBQVBGLEFBQ0U7O3lCQU1BLGNBQUEsT0FBRyxJQUFILEFBQU0sUUFBTyxXQUFiLEFBQXVCLGFBQVksTUFBbkMsQUFBd0M7b0JBQXhDO3NCQUFBOztTQVBGLEFBT0UsQUFDQSwwQkFBQSxjQUFBLE9BQUcsSUFBSCxBQUFNLFNBQVEsV0FBZCxBQUF3QixhQUFZLE1BQXBDLEFBQXlDO29CQUF6QztzQkFBQTs7U0FSRixBQVFFLEFBQ0EsZ0NBQUEsY0FBQSxPQUFHLElBQUgsQUFBTSxXQUFVLFdBQWhCLEFBQTBCLGFBQVksTUFBdEMsQUFBMkM7b0JBQTNDO3NCQUFBOztTQVRGLEFBU0UsQUFDQSwrQkFBQSxjQUFBLE9BQUcsSUFBSCxBQUFNLFdBQVUsV0FBaEIsQUFBMEIsYUFBWSxNQUF0QyxBQUEyQztvQkFBM0M7c0JBQUE7O1NBVkYsQUFVRSxBQUNBLGtDQUFBLGNBQUEsT0FBRyxJQUFILEFBQU0sV0FBVSxXQUFoQixBQUEwQixhQUFZLE1BQXRDLEFBQTJDO29CQUEzQztzQkFBQTs7U0FaSixBQUNFLEFBV0UsQUFJRixnQ0FBQyxjQUFELFlBQVUsUUFBVixBQUFrQixRQUFRLElBQTFCLEFBQTZCO29CQUE3QjtzQkFBQSxBQUNJLEFBREo7O3lCQUNLLGNBQUQ7O29CQUFBO3NCQUFBOztTQURKLEFBQ0ksQUFDRixnRUFBQSxBQUFDLE9BQUksS0FBTCxBQUFTO29CQUFUO3NCQXBCUixBQUNFLEFBQ0UsQUFnQkUsQUFFRSxBQUtULEFBTFM7Ozs7OztFQTlCWSxnQixBQUFNOztrQixBQXNDZiIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGl0cm9uYWxsZGFrL0RvY3VtZW50cy9wcm9qZWN0cy92ci1sYWItdWkifQ==