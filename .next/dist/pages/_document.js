'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault2(_react);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _jsxFileName = '/Users/pitronalldak/Documents/projects/vr-lab-ui/pages/_document.js?entry';


var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _styledComponents = require('styled-components');

var _index = require('../static/styles/index.css');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);
    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, 'My page'), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _index2.default }, __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      })), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement('link', { href: '//fonts.googleapis.com/css?family=Lato:300,400,700,900', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      })));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var sheet = new _styledComponents.ServerStyleSheet();
      var page = renderPage(function (App) {
        return function (props) {
          return sheet.collectStyles(_react2.default.createElement(App, (0, _extends3.default)({}, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            }
          })));
        };
      });
      var styleTags = sheet.getStyleElement();
      return (0, _extends3.default)({}, page, { styleTags: styleTags });
    }
  }]);
  return MyDocument;
}(_document2.default);

exports.default = MyDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJNeURvY3VtZW50IiwiX19odG1sIiwicmVuZGVyUGFnZSIsInNoZWV0IiwicGFnZSIsImNvbGxlY3RTdHlsZXMiLCJwcm9wcyIsInN0eWxlVGFncyIsImdldFN0eWxlRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7SUFFcUIsQTs7Ozs7Ozs7Ozs2QkFRVCxBQUNSOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0Usd0JBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxxREFBTyx5QkFBeUIsRUFBRSxnQkFBbEMsQUFBZ0M7b0JBQWhDO3NCQUhKLEFBQ0UsQUFFRSxBQUVGO0FBRkU7MkJBRUYsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUE7O29CQUNFO3NCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUE7O29CQUNBO3NCQUZGLEFBRUUsQUFDQTtBQURBO0FBQUEsa0RBQ00sTUFBTixBQUFXLDBEQUF5RCxLQUFwRSxBQUF3RTtvQkFBeEU7c0JBVE4sQUFDRSxBQUtFLEFBR0UsQUFJUDtBQUpPOzs7OzswQ0FqQmdDO1VBQWQsQUFBYyxrQkFBZCxBQUFjLEFBQ3RDOztVQUFNLFFBQVEsc0JBQWQsQUFDQTtVQUFNLGtCQUFrQixlQUFBO2VBQU8saUJBQUE7dUJBQVMsQUFBTSw0Q0FBYyxBQUFDLGdDQUFELEFBQVM7O3dCQUFUOzBCQUE3QixBQUFTLEFBQW9CO0FBQUE7QUFBQSxZQUFBLENBQXBCO0FBQWhCO0FBQXhCLEFBQWEsQUFDYixPQURhO1VBQ1AsWUFBWSxNQUFsQixBQUFrQixBQUFNLEFBQ3hCO3dDQUFBLEFBQVksUUFBTSxXQUFsQixBQUNEOzs7Ozs7a0JBTmtCLEEiLCJmaWxlIjoiX2RvY3VtZW50LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9waXRyb25hbGxkYWsvRG9jdW1lbnRzL3Byb2plY3RzL3ZyLWxhYi11aSJ9