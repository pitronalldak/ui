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

var _reactTypist = require('react-typist');

var _reactTypist2 = _interopRequireDefault(_reactTypist);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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

var MenuItem = _styledComponents2.default.a.withConfig({
  displayName: 'pages__MenuItem',
  componentId: 's127f27a-6'
})(['color:#b4bad2;padding:20px;font-size:20px;text-decoration:none;&:hover{background:#b4bad2;color:#373a47;}']);

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
          lineNumber: 62
        }
      }, _react2.default.createElement(OuterContainer, { isOpen: isOpen, id: 'outer-container', __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement(_reactBurgerMenu.slide, {
        id: 'scaleRotate',
        pageWrapId: "page-wrap",
        outerContainerId: "outer-container",
        onStateChange: this.handleMenuOpen,
        right: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(MenuItem, { id: 'home', className: 'menu-item', href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, 'About'), _react2.default.createElement(MenuItem, { id: 'about', className: 'menu-item', href: '/about', __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, 'Techologies'), _react2.default.createElement(MenuItem, { id: 'contact', className: 'menu-item', href: '/contact', __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, 'Portfolio'), _react2.default.createElement(MenuItem, { id: 'contact', className: 'menu-item', href: '/contact', __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, 'Contributions'), _react2.default.createElement(MenuItem, { id: 'contact', className: 'menu-item', href: '/contact', __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, 'Contact us')), _react2.default.createElement(PageWrap, { isOpen: isOpen, id: 'page-wrap', __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement(_reactTypist2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement(Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, 'Hire an expert Front-End Team')), _react2.default.createElement(Img, { src: '../static/img/bart-main.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }))));
    }
  }]);
  return IndexPage;
}(_react2.default.Component);

exports.default = IndexPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkdsb2JhbFdyYXBwZXIiLCJkaXYiLCJPdXRlckNvbnRhaW5lciIsImlzT3BlbiIsIlBhZ2VXcmFwIiwiUGFnZSIsIm1haW4iLCJUaXRsZSIsImgxIiwiSW1nIiwiaW1nIiwiTWVudUl0ZW0iLCJhIiwiSW5kZXhQYWdlIiwic3RhdGUiLCJoYW5kbGVNZW51T3BlbiIsInNldFN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU0sMkNBQUEsQUFBdUI7ZUFBdkI7ZUFBQSxBQUFnQjtJQUF0QjtBQUdBLElBQU0sNENBQUEsQUFBd0I7ZUFBeEI7ZUFBQSxBQUFpQjtvREFDWCxnQkFBQTtNQUFBLEFBQUcsY0FBSCxBQUFHO1NBQWEsVUFBaEIsQUFBMEIsQUFEaEM7R0FFVyxpQkFBQTtNQUFBLEFBQUcsZUFBSCxBQUFHO1NBQWEsVUFBaEIsQUFBMEIsQUFGckM7R0FHUSxpQkFBQTtNQUFBLEFBQUcsZUFBSCxBQUFHO1NBQWEsVUFBaEIsQUFBMEIsQUFIeEMsQUFBTTs7O0FBTU4sSUFBTSxzQ0FBQSxBQUFrQjtlQUFsQjtlQUFBLEFBQVc7MkdBR0YsaUJBQUE7TUFBQSxBQUFHLGVBQUgsQUFBRztTQUFhLFVBQWhCLEFBQTBCLEFBSG5DO0dBSWUsaUJBQUE7TUFBQSxBQUFHLGVBQUgsQUFBRztTQUFhLFVBQWhCLEFBQTBCLEFBSnpDO0dBS1UsaUJBQUE7TUFBQSxBQUFHLGVBQUgsQUFBRztTQUFhLFVBQWhCLEFBQTBCLEFBTHBDO0dBTVEsaUJBQUE7TUFBQSxBQUFHLGVBQUgsQUFBRztTQUFhLFVBQWhCLEFBQTBCLEFBTnhDLEFBQU07OztBQVNOLElBQU0sa0NBQUEsQUFBYztlQUFkO2VBQUEsQUFBTztJQUFiOztBQUdBLElBQU0sbUNBQUEsQUFBZTtlQUFmO2VBQUEsQUFBUTtJQUFkO0FBS0EsSUFBTSxpQ0FBQSxBQUFhO2VBQWI7ZUFBQSxBQUFNO0lBQVo7O0FBT0EsSUFBTSxzQ0FBQSxBQUFrQjtlQUFsQjtlQUFBLEFBQVc7SUFBakI7O0ksQUFZTTs7Ozs7Ozs7Ozs7Ozs7b04sQUFDSixRQUFRLEVBQUUsUSxBQUFGLEFBQVUsZSxBQUVsQixpQkFBaUIsaUJBQVMsQUFDeEI7WUFBQSxBQUFLLFNBQUwsQUFBYyxBQUNmLEE7Ozs7Ozs2QkFHUTtVQUFBLEFBQ0MsU0FBVyxLQURaLEFBQ2lCLE1BRGpCLEFBQ0MsQUFDUjs7NkJBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFDRSxBQURGOzt5QkFDRyxjQUFELGtCQUFnQixRQUFoQixBQUF3QixRQUFRLElBQWhDLEFBQW1DO29CQUFuQztzQkFBQSxBQUNFLEFBREY7O3lCQUNFLCtCQUFBO1lBQUEsQUFDSyxBQUNIO29CQUZGLEFBRWMsQUFDWjswQkFIRixBQUdvQixBQUNsQjt1QkFBZSxLQUpqQixBQUlzQixBQUNwQjtlQUxGOztvQkFBQTtzQkFBQSxBQU9FLEFBUEYsQUFDRTs7eUJBTUMsY0FBRCxZQUFVLElBQVYsQUFBYSxRQUFPLFdBQXBCLEFBQThCLGFBQVksTUFBMUMsQUFBK0M7b0JBQS9DO3NCQUFBOztTQVBGLEFBT0UsQUFDQSwwQkFBQyxjQUFELFlBQVUsSUFBVixBQUFhLFNBQVEsV0FBckIsQUFBK0IsYUFBWSxNQUEzQyxBQUFnRDtvQkFBaEQ7c0JBQUE7O1NBUkYsQUFRRSxBQUNBLGdDQUFDLGNBQUQsWUFBVSxJQUFWLEFBQWEsV0FBVSxXQUF2QixBQUFpQyxhQUFZLE1BQTdDLEFBQWtEO29CQUFsRDtzQkFBQTs7U0FURixBQVNFLEFBQ0EsOEJBQUMsY0FBRCxZQUFVLElBQVYsQUFBYSxXQUFVLFdBQXZCLEFBQWlDLGFBQVksTUFBN0MsQUFBa0Q7b0JBQWxEO3NCQUFBOztTQVZGLEFBVUUsQUFDQSxrQ0FBQyxjQUFELFlBQVUsSUFBVixBQUFhLFdBQVUsV0FBdkIsQUFBaUMsYUFBWSxNQUE3QyxBQUFrRDtvQkFBbEQ7c0JBQUE7O1NBWkosQUFDRSxBQVdFLEFBRUYsZ0NBQUMsY0FBRCxZQUFVLFFBQVYsQUFBa0IsUUFBUSxJQUExQixBQUE2QjtvQkFBN0I7c0JBQUEsQUFDRSxBQURGOzt5QkFDRSw0QkFBQTs7b0JBQUE7c0JBQUEsQUFDRSxBQURGOzt5QkFDRyxjQUFEOztvQkFBQTtzQkFBQTs7U0FGSixBQUNFLEFBQ0UsQUFFRixpRUFBQSxBQUFDLE9BQUksS0FBTCxBQUFTO29CQUFUO3NCQXBCUixBQUNFLEFBQ0UsQUFjRSxBQUlFLEFBS1QsQUFMUzs7Ozs7O0VBOUJZLGdCLEFBQU07O2tCLEFBc0NmIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9waXRyb25hbGxkYWsvRG9jdW1lbnRzL3Byb2plY3RzL3ZyLWxhYi11aSJ9