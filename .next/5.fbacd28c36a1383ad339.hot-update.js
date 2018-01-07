webpackHotUpdate(5,{

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(35);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/pitronalldak/Documents/projects/vr-lab-ui/pages/index.js?entry';

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(509);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactBurgerMenu = __webpack_require__(523);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/pitronalldak/Documents/projects/vr-lab-ui/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/pitronalldak/Documents/projects/vr-lab-ui/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(104)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5mYmFjZDI4YzM2YTEzODNhZDMzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/Y2M4ZmViMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgc2xpZGUgYXMgTWVudSB9IGZyb20gJ3JlYWN0LWJ1cmdlci1tZW51J1xuLy8gaW1wb3J0IFR5cGlzdCBmcm9tICdyZWFjdC10eXBpc3QnO1xuXG5jb25zdCBHbG9iYWxXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAxMDB2aDtcbmBcbmNvbnN0IE91dGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAkeyh7IGlzT3BlbiB9KSA9PiBpc09wZW4gJiYgJzEwMCUnfTtcbiAgcGVyc3BlY3RpdmU6ICR7KHsgaXNPcGVuIH0pID0+IGlzT3BlbiAmJiAnMTUwMHB4J307XG4gIG92ZXJmbG93OiAkeyh7IGlzT3BlbiB9KSA9PiBpc09wZW4gJiYgJ2hpZGRlbid9O1xuYFxuXG5jb25zdCBQYWdlV3JhcCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICNiNGJhZDI7XG4gIGhlaWdodDogMTAwdmg7XG4gIHRyYW5zZm9ybTogJHsoeyBpc09wZW4gfSkgPT4gaXNPcGVuICYmICd0cmFuc2xhdGUzZCgtMTAwcHgsIDBweCwgLTYwMHB4KSByb3RhdGVZKDIwZGVnKSd9O1xuICB0cmFuc2Zvcm0tc3R5bGU6ICR7KHsgaXNPcGVuIH0pID0+IGlzT3BlbiAmJiAncHJlc2VydmUtM2QnfTtcbiAgdHJhbnNpdGlvbjogJHsoeyBpc09wZW4gfSkgPT4gaXNPcGVuICYmICdhbGwgMC41cyd9O1xuICBvdmVyZmxvdzogJHsoeyBpc09wZW4gfSkgPT4gaXNPcGVuICYmICdoaWRkZW4nfTtcbmBcblxuY29uc3QgUGFnZSA9IHN0eWxlZC5tYWluYFxuYFxuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBwYWRkaW5nOiAyMCUgMCAwIDIwJTtcbmBcbmNvbnN0IEltZyA9IHN0eWxlZC5pbWdgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNjAlO1xuICBoZWlnaHQ6IDc1JTtcbiAgYm90dG9tOiAwO1xuYFxuXG5jbGFzcyBJbmRleFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHsgaXNPcGVuOiBmYWxzZSB9XG5cbiAgaGFuZGxlTWVudU9wZW4gPSBzdGF0ZSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSlcbiAgfVxuXG4gIFxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc09wZW4gfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4oXG4gICAgICA8R2xvYmFsV3JhcHBlcj5cbiAgICAgICAgPE91dGVyQ29udGFpbmVyIGlzT3Blbj17aXNPcGVufSBpZD1cIm91dGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICBpZD1cInNjYWxlUm90YXRlXCJcbiAgICAgICAgICAgIHBhZ2VXcmFwSWQ9e1wicGFnZS13cmFwXCJ9XG4gICAgICAgICAgICBvdXRlckNvbnRhaW5lcklkPXtcIm91dGVyLWNvbnRhaW5lclwifVxuICAgICAgICAgICAgb25TdGF0ZUNoYW5nZT17dGhpcy5oYW5kbGVNZW51T3Blbn0gICAgICAgIFxuICAgICAgICAgICAgcmlnaHRcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YSBpZD1cImhvbWVcIiBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIiBocmVmPVwiL1wiPkFib3V0PC9hPlxuICAgICAgICAgICAgPGEgaWQ9XCJhYm91dFwiIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiIGhyZWY9XCIvYWJvdXRcIj5UZWNob2xvZ2llczwvYT5cbiAgICAgICAgICAgIDxhIGlkPVwiY29udGFjdFwiIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiIGhyZWY9XCIvY29udGFjdFwiPlBvcnN0Zm9saW88L2E+IFxuICAgICAgICAgICAgPGEgaWQ9XCJjb250YWN0XCIgY2xhc3NOYW1lPVwibWVudS1pdGVtXCIgaHJlZj1cIi9jb250YWN0XCI+Q29udHJpYnV0aW9uczwvYT4gXG4gICAgICAgICAgICA8YSBpZD1cImNvbnRhY3RcIiBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIiBocmVmPVwiL2NvbnRhY3RcIj5Db250YWN0IHVzPC9hPiBcblxuICAgICAgICAgIDwvTWVudT5cbiAgICBcbiAgICAgICAgICA8UGFnZVdyYXAgaXNPcGVuPXtpc09wZW59IGlkPVwicGFnZS13cmFwXCI+IFxuICAgICAgICAgICAgICA8VGl0bGU+SGlyZSBhbiBleHBlcnQgRnJvbnQtRW5kIFRlYW08L1RpdGxlPlxuICAgICAgICAgICAgPEltZyBzcmM9XCIuLi9zdGF0aWMvaW1nL2JhcnQtbWFpbi5wbmdcIiAvPlxuICAgICAgICAgIDwvUGFnZVdyYXA+XG4gICAgICAgIDwvT3V0ZXJDb250YWluZXI+XG4gICAgICA8L0dsb2JhbFdyYXBwZXI+XG4gICAgKVxuICB9XG59IFxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2VcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7OztBQUdBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7QUFHQTs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUpBOztBQUFBO0FBT0E7O0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTs7QUFJQTtBQUFBO0FBQ0E7O0FBQUE7O0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBS0E7Ozs7OztBQW5DQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9