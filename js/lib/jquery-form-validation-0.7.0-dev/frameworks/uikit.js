/*!
 * FormValidation (http://formvalidation.io)
 * The best jQuery plugin to validate form fields. Support Bootstrap, Foundation, Pure, SemanticUI, UIKit and custom frameworks
 *
 * @version     v0.7.0-dev, built on 2015-06-04 4:32:33 PM
 * @author      https://twitter.com/formvalidation
 * @copyright   (c) 2013 - 2015 Nguyen Huu Phuoc
 * @license     http://formvalidation.io/license/
 */
! function(a) {
    FormValidation.Framework.Uikit = function(b, c) {
        c = a.extend(!0, {
            button: {
                selector: '[type="submit"]:not([formnovalidate])',
                disabled: "disabled"
            },
            control: {
                valid: "uk-form-success",
                invalid: "uk-form-danger"
            },
            err: {
                clazz: "uk-text-danger",
                parent: "^.*(uk-form-controls|uk-width-[\\d+]-[\\d+]).*$"
            },
            icon: {
                valid: null,
                invalid: null,
                validating: null,
                feedback: "fv-control-feedback"
            },
            row: {
                selector: ".uk-form-row",
                valid: "fv-has-success",
                invalid: "fv-has-error",
                feedback: "fv-has-feedback"
            }
        }, c), FormValidation.Base.apply(this, [b, c])
    }, FormValidation.Framework.Uikit.prototype = a.extend({}, FormValidation.Base.prototype, {
        _fixIcon: function(a, b) {
            var c = this._namespace,
                d = a.attr("type"),
                e = a.attr("data-" + c + "-field"),
                f = this.options.fields[e].row || this.options.row.selector,
                g = a.closest(f);
            if ("checkbox" === d || "radio" === d) {
                var h = a.parent();
                h.is("label") && b.insertAfter(h)
            }
            0 === g.find("label").length && b.addClass("fv-icon-no-label")
        },
        _createTooltip: function(b, c) {
            var d = b.data("fv.icon");
            d && (d.data("tooltip") && (d.data("tooltip").off(), d.removeData("tooltip")), d.attr("title", c).css({
                cursor: "pointer"
            }), new a.UIkit.tooltip(d))
        },
        _destroyTooltip: function(a) {
            var b = a.data("fv.icon");
            if (b) {
                var c = b.data("tooltip");
                c && (c.hide(), c.off(), b.off("focus mouseenter").removeData("tooltip")), b.css({
                    cursor: ""
                })
            }
        },
        _hideTooltip: function(a) {
            var b = a.data("fv.icon");
            if (b) {
                var c = b.data("tooltip");
                c && c.hide(), b.css({
                    cursor: ""
                })
            }
        },
        _showTooltip: function(a) {
            var b = a.data("fv.icon");
            if (b) {
                b.css({
                    cursor: "pointer"
                });
                var c = b.data("tooltip");
                c && c.show()
            }
        }
    })
}(jQuery);