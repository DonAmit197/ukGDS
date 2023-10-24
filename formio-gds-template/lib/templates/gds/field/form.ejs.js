Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 if (ctx.label.labelPosition !== 'bottom') { ;
__p += '\r\n' +
((__t = ( ctx.labelMarkup )) == null ? '' : __t) +
'\r\n';
 } ;
__p += '\r\n';
 if (ctx.component.description) { ;
__p += '\r\n<div class="govuk-hint">' +
((__t = (ctx.t(ctx.component.description))) == null ? '' : __t) +
'</div>\r\n';
 } ;
__p += '\r\n<div ref="messageContainer" class="govuk-error-message"></div>\r\n' +
((__t = (ctx.element)) == null ? '' : __t) +
'\r\n';
 if (ctx.component.tooltip) { ;
__p += '\r\n<details class="govuk-details" style="margin-top: 5px" data-module="govuk-details">\r\n    <summary class="govuk-details__summary">\r\n                        <span class="govuk-details__summary-text">\r\n                          ' +
((__t = (ctx.component.tooltipTitle || 'Help')) == null ? '' : __t) +
'\r\n                        </span>\r\n    </summary>\r\n    <div class="govuk-details__text">\r\n        ' +
((__t = (ctx.component.tooltip)) == null ? '' : __t) +
'\r\n    </div>\r\n</details>\r\n';
 } ;
__p += '\r\n';
 if (ctx.label.labelPosition === 'bottom') { ;
__p += '\r\n' +
((__t = ( ctx.labelMarkup )) == null ? '' : __t) +
'\r\n';
 } ;
__p += '\r\n';
return __p
}