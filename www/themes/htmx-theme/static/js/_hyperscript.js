!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
      ? define(t)
      : ((e || self)._hyperscript = t());
})(this, function () {
  function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function t(t, n, r) {
    return n && e(t.prototype, n), r && e(t, r), t;
  }
  function n(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), o(e, t);
  }
  function r(e) {
    return (
      (r = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          }),
      r(e)
    );
  }
  function o(e, t) {
    return (
      (o =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        }),
      o(e, t)
    );
  }
  function i() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }
  function a(e, t, n) {
    return (
      (a = i()
        ? Reflect.construct
        : function (e, t, n) {
            var r = [null];
            r.push.apply(r, t);
            var i = new (Function.bind.apply(e, r))();
            return n && o(i, n.prototype), i;
          }),
      a.apply(null, arguments)
    );
  }
  function u(e) {
    var t = "function" == typeof Map ? new Map() : void 0;
    return (
      (u = function (e) {
        if (null === e || -1 === Function.toString.call(e).indexOf("[native code]")) return e;
        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== t) {
          if (t.has(e)) return t.get(e);
          t.set(e, n);
        }
        function n() {
          return a(e, arguments, r(this).constructor);
        }
        return (
          (n.prototype = Object.create(e.prototype, {
            constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 },
          })),
          o(n, e)
        );
      }),
      u(e)
    );
  }
  function s(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function l(e, t) {
    var n = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
    if (n) return (n = n.call(e)).next.bind(n);
    if (
      Array.isArray(e) ||
      (n = (function (e, t) {
        if (e) {
          if ("string" == typeof e) return s(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? s(e, t)
                : void 0
          );
        }
      })(e)) ||
      (t && e && "number" == typeof e.length)
    ) {
      n && (e = n);
      var r = 0;
      return function () {
        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  function c(e, t) {
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    return e;
  }
  function f(e, t) {
    var n = e[t];
    if (n) return n;
    var r = {};
    return (e[t] = r), r;
  }
  function m(e, t) {
    return new (e.bind.apply(e, [e].concat(t)))();
  }
  var p,
    d = globalThis,
    h = (function (e) {
      function n(e, t, n) {
        (this._css = e), (this.relativeToElement = t), (this.escape = n);
      }
      var r = n.prototype;
      return (
        (r.contains = function (e) {
          for (var t, n = l(this); !(t = n()).done; ) if (t.value.contains(e)) return !0;
          return !1;
        }),
        (r[e] = function () {
          return this.selectMatches()[Symbol.iterator]();
        }),
        (r.selectMatches = function () {
          return T.getRootNode(this.relativeToElement).querySelectorAll(this.css);
        }),
        t(n, [
          {
            key: "css",
            get: function () {
              return this.escape ? T.escapeSelector(this._css) : this._css;
            },
          },
          {
            key: "className",
            get: function () {
              return this._css.substr(1);
            },
          },
          {
            key: "id",
            get: function () {
              return this.className();
            },
          },
          {
            key: "length",
            get: function () {
              return this.selectMatches().length;
            },
          },
        ]),
        n
      );
    })(Symbol.iterator),
    v = (function () {
      var e = {
        "+": "PLUS",
        "-": "MINUS",
        "*": "MULTIPLY",
        "/": "DIVIDE",
        ".": "PERIOD",
        "..": "ELLIPSIS",
        "\\": "BACKSLASH",
        ":": "COLON",
        "%": "PERCENT",
        "|": "PIPE",
        "!": "EXCLAMATION",
        "?": "QUESTION",
        "#": "POUND",
        "&": "AMPERSAND",
        $: "DOLLAR",
        ";": "SEMI",
        ",": "COMMA",
        "(": "L_PAREN",
        ")": "R_PAREN",
        "<": "L_ANG",
        ">": "R_ANG",
        "<=": "LTE_ANG",
        ">=": "GTE_ANG",
        "==": "EQ",
        "===": "EQQ",
        "!=": "NEQ",
        "!==": "NEQQ",
        "{": "L_BRACE",
        "}": "R_BRACE",
        "[": "L_BRACKET",
        "]": "R_BRACKET",
        "=": "EQUALS",
      };
      function t(e) {
        return a(e) || i(e) || "-" === e || "_" === e || ":" === e;
      }
      function n(e) {
        return a(e) || i(e) || "-" === e || "_" === e || ":" === e;
      }
      function r(e) {
        return " " === e || "\t" === e || o(e);
      }
      function o(e) {
        return "\r" === e || "\n" === e;
      }
      function i(e) {
        return e >= "0" && e <= "9";
      }
      function a(e) {
        return (e >= "a" && e <= "z") || (e >= "A" && e <= "Z");
      }
      function u(e, t) {
        return "_" === e || "$" === e;
      }
      function s(e, t, n) {
        o();
        var r = null;
        function o() {
          for (; "WHITESPACE" === f(0, !0).type; ) t.push(e.shift());
        }
        function i(e, t) {
          y.raiseParseError(e, t);
        }
        function a(e) {
          if (m() && m().op && m().value === e) return l();
        }
        function u(e, t, n, r) {
          if (m() && m().type && [e, t, n, r].indexOf(m().type) >= 0) return l();
        }
        function s(e, t) {
          if (-1 === p.indexOf(e))
            return (t = t || "IDENTIFIER"), m() && m().value === e && m().type === t ? l() : void 0;
        }
        function l() {
          var n = e.shift();
          return t.push(n), (r = n), o(), n;
        }
        function c(n, r) {
          for (
            var i = [], a = f(0, !0);
            !((null != r && a.type === r) || (null != n && a.value === n) || "EOF" === a.type);

          ) {
            var u = e.shift();
            t.push(u), i.push(a), (a = f(0, !0));
          }
          return o(), i;
        }
        function f(t, n) {
          var r,
            o = 0;
          do {
            if (!n) for (; e[o] && "WHITESPACE" === e[o].type; ) o++;
            (r = e[o]), t--, o++;
          } while (t > -1);
          return r || { type: "EOF", value: "<<<EOF>>>" };
        }
        function m() {
          return f(0);
        }
        var p = [];
        return {
          pushFollow: function (e) {
            p.push(e);
          },
          popFollow: function () {
            p.pop();
          },
          clearFollow: function () {
            var e = p;
            return (p = []), e;
          },
          restoreFollow: function (e) {
            p = e;
          },
          matchAnyToken: function (e, t, n) {
            for (var r = 0; r < arguments.length; r++) {
              var o = arguments[r],
                i = s(o);
              if (i) return i;
            }
          },
          matchAnyOpToken: function (e, t, n) {
            for (var r = 0; r < arguments.length; r++) {
              var o = arguments[r],
                i = a(o);
              if (i) return i;
            }
          },
          matchOpToken: a,
          requireOpToken: function (e) {
            var t = a(e);
            if (t) return t;
            i(this, "Expected '" + e + "' but found '" + m().value + "'");
          },
          matchTokenType: u,
          requireTokenType: function (e, t, n, r) {
            var o = u(e, t, n, r);
            if (o) return o;
            i(this, "Expected one of " + JSON.stringify([e, t, n]));
          },
          consumeToken: l,
          peekToken: function (t, n, r) {
            return e[n] && e[n].value === t && e[n].type === r;
          },
          matchToken: s,
          requireToken: function (e, t) {
            var n = s(e, t);
            if (n) return n;
            i(this, "Expected '" + e + "' but found '" + m().value + "'");
          },
          list: e,
          consumed: t,
          source: n,
          hasMore: function () {
            return e.length > 0;
          },
          currentToken: m,
          lastMatch: function () {
            return r;
          },
          token: f,
          consumeUntil: c,
          consumeUntilWhitespace: function () {
            return c(null, "WHITESPACE");
          },
          lastWhitespace: function () {
            return t[t.length - 1] && "WHITESPACE" === t[t.length - 1].type ? t[t.length - 1].value : "";
          },
          sourceFor: function () {
            return n.substring(this.startToken.start, this.endToken.end);
          },
          lineFor: function () {
            return n.split("\n")[this.startToken.line - 1];
          },
        };
      }
      function l(e) {
        if (e.length > 0) {
          var t = e[e.length - 1];
          if ("IDENTIFIER" === t.type || "CLASS_REF" === t.type || "ID_REF" === t.type) return !1;
          if (t.op && (">" === t.value || ")" === t.value)) return !1;
        }
        return !0;
      }
      return {
        tokenize: function (c, f) {
          var m,
            p = [],
            d = c,
            h = 0,
            v = 0,
            y = 1,
            E = "<START>",
            T = 0;
          function k() {
            return f && 0 === T;
          }
          for (; h < d.length; )
            if ("-" !== I() || "-" !== A() || (!r(F()) && "" !== F()))
              if (r(I())) p.push(j());
              else if (P() || "." !== I() || (!a(A()) && "{" !== A()))
                if (P() || "#" !== I() || (!a(A()) && "{" !== A()))
                  if ("[" === I() && "@" === A()) p.push(w());
                  else if ("@" === I()) p.push(q());
                  else if ("*" === I() && a(A())) p.push(S());
                  else if (a(I()) || (!k() && u(I()))) p.push(C());
                  else if (i(I())) p.push(L());
                  else if (k() || ('"' !== I() && "`" !== I()))
                    if (k() || "'" !== I()) {
                      if (e[I()]) "$" === E && "{" === I() && T++, "}" === I() && T--, p.push(O());
                      else if (k() || "`" === (m = I()) || "^" === m) p.push(g("RESERVED", M()));
                      else if (h < d.length) throw Error("Unknown token: " + I() + " ");
                    } else l(p) ? p.push(R()) : p.push(O());
                  else p.push(R());
                else p.push(N());
              else p.push(b());
            else x();
          return s(p, [], d);
          function g(e, t) {
            return { type: e, value: t, start: h, end: h + 1, column: v, line: y };
          }
          function x() {
            for (; I() && !o(I()); ) M();
            M();
          }
          function b() {
            var e = g("CLASS_REF"),
              n = M();
            if ("{" === I()) {
              for (e.template = !0, n += M(); I() && "}" !== I(); ) n += M();
              if ("}" !== I()) throw Error("Unterminated class reference");
              n += M();
            } else for (; t(I()); ) n += M();
            return (e.value = n), (e.end = h), e;
          }
          function w() {
            for (var e = g("ATTRIBUTE_REF"), t = M(); h < d.length && "]" !== I(); ) t += M();
            return "]" === I() && (t += M()), (e.value = t), (e.end = h), e;
          }
          function q() {
            for (var e = g("ATTRIBUTE_REF"), t = M(); n(I()); ) t += M();
            return (e.value = t), (e.end = h), e;
          }
          function S() {
            for (var e = g("STYLE_REF"), t = M(); a(I()) || "-" === I(); ) t += M();
            return (e.value = t), (e.end = h), e;
          }
          function N() {
            var e = g("ID_REF"),
              t = M();
            if ("{" === I()) {
              for (e.template = !0, t += M(); I() && "}" !== I(); ) t += M();
              if ("}" !== I()) throw Error("Unterminated id reference");
              M();
            } else for (; n(I()); ) t += M();
            return (e.value = t), (e.end = h), e;
          }
          function C() {
            for (var e = g("IDENTIFIER"), t = M(); a(I()) || i(I()) || u(I()); ) t += M();
            return (e.value = t), (e.end = h), e;
          }
          function L() {
            for (var e = g("NUMBER"), t = M(); i(I()); ) t += M();
            for ("." === I() && i(A()) && (t += M()); i(I()); ) t += M();
            return (e.value = t), (e.end = h), e;
          }
          function O() {
            for (var t = ((r = void 0), ((r = g(void 0, void 0)).op = !0), r), n = M(); I() && e[n + I()]; ) n += M();
            var r;
            return (t.type = e[n]), (t.value = n), (t.end = h), t;
          }
          function R() {
            for (var e, t = g("STRING"), n = M(), r = ""; I() && I() !== n; )
              if ("\\" === I()) {
                M();
                var o = M();
                r +=
                  "b" === o
                    ? "\b"
                    : "f" === o
                      ? "\f"
                      : "n" === o
                        ? "\n"
                        : "r" === o
                          ? "\r"
                          : "t" === o
                            ? "\t"
                            : "v" === o
                              ? "\v"
                              : o;
              } else r += M();
            if (I() !== n) throw Error("Unterminated string at [Line: " + (e = t).line + ", Column: " + e.column + "]");
            return M(), (t.value = r), (t.end = h), (t.template = "`" === n), t;
          }
          function I() {
            return d.charAt(h);
          }
          function A() {
            return d.charAt(h + 1);
          }
          function F() {
            return d.charAt(h + 2);
          }
          function M() {
            return (E = I()), h++, v++, E;
          }
          function P() {
            return a(E) || i(E) || ")" === E || '"' === E || "'" === E || "`" === E || "}" === E || "]" === E;
          }
          function j() {
            for (var e = g("WHITESPACE"), t = ""; I() && r(I()); ) o(I()) && ((v = 0), y++), (t += M());
            return (e.value = t), (e.end = h), e;
          }
        },
        makeTokensObject: s,
      };
    })(),
    y = (function () {
      var e = {},
        t = {},
        n = {},
        r = [],
        o = [];
      function i(e, t, n) {
        (e.startToken = t), (e.sourceFor = n.sourceFor), (e.lineFor = n.lineFor), (e.programSource = n.source);
      }
      function a(t, n, r) {
        return (
          void 0 === r && (r = void 0),
          (function (r) {
            var o = e[t];
            if (o) {
              var a = n.currentToken(),
                u = o(y, T, n, r);
              if (u)
                for (i(u, a, n), u.endToken = u.endToken || n.lastMatch(), r = u.root; null != r; )
                  i(r, a, n), (r = r.root);
              return u;
            }
          })(r)
        );
      }
      function u(e, t, n, r) {
        var o = a(e, t, r);
        return o || c(t, n || "Expected " + e), o;
      }
      function s(e, t) {
        for (var n = 0; n < e.length; n++) {
          var r = a(e[n], t);
          if (r) return r;
        }
      }
      function l(t, n) {
        e[t] = n;
      }
      function c(e, t) {
        t =
          (t || "Unexpected Token : " + e.currentToken().value) +
          "\n\n" +
          (function (e) {
            var t = e.currentToken(),
              n = e.source.split("\n"),
              r = n[t && t.line ? t.line - 1 : n.length - 1];
            return r + "\n" + " ".repeat(t && t.line ? t.column : r.length - 1) + "^^\n\n";
          })(e);
        var n = new Error(t);
        throw ((n.tokens = e), n);
      }
      function f(e) {
        return t[e.value];
      }
      function m(e) {
        return n[e.value];
      }
      return (
        l("feature", function (e, t, r) {
          if (r.matchOpToken("(")) {
            var o = e.requireElement("feature", r);
            return r.requireOpToken(")"), o;
          }
          var i = n[r.currentToken().value];
          if (i) return i(e, t, r);
        }),
        l("command", function (e, n, r) {
          if (r.matchOpToken("(")) {
            var o = e.requireElement("command", r);
            return r.requireOpToken(")"), o;
          }
          var i,
            a = t[r.currentToken().value];
          return (
            a ? (i = a(e, n, r)) : "IDENTIFIER" === r.currentToken().type && (i = e.parseElement("pseudoCommand", r)),
            i ? e.parseElement("indirectStatement", r, i) : i
          );
        }),
        l("commandList", function (e, t, n) {
          var r = e.parseElement("command", n);
          if (r) {
            n.matchToken("then");
            var o = e.parseElement("commandList", n);
            return o && (r.next = o), r;
          }
        }),
        l("leaf", function (e, t, n) {
          var o = s(r, n);
          return null == o ? a("symbol", n) : o;
        }),
        l("indirectExpression", function (e, t, n, r) {
          for (var i = 0; i < o.length; i++) {
            var a = o[i];
            r.endToken = n.lastMatch();
            var u = e.parseElement(a, n, r);
            if (u) return u;
          }
          return r;
        }),
        l("indirectStatement", function (e, t, n, r) {
          if (n.matchToken("unless")) {
            r.endToken = n.lastMatch();
            var o = {
              type: "unlessStatementModifier",
              args: [e.requireElement("expression", n)],
              op: function (e, t) {
                return t ? this.next : r;
              },
              execute: function (e) {
                return t.unifiedExec(this, e);
              },
            };
            return (r.parent = o), o;
          }
          return r;
        }),
        l("primaryExpression", function (e, t, n) {
          var r = e.parseElement("leaf", n);
          if (r) return e.parseElement("indirectExpression", n, r);
          e.raiseParseError(n, "Unexpected value: " + n.currentToken().value);
        }),
        {
          setParent: function e(t, n) {
            "object" == typeof t &&
              ((t.parent = n),
              "object" == typeof n && ((n.children = n.children || new Set()), n.children.add(t)),
              e(t.next, n));
          },
          requireElement: u,
          parseElement: a,
          featureStart: m,
          commandStart: f,
          commandBoundary: function (e) {
            return !(
              "end" != e.value &&
              "then" != e.value &&
              "else" != e.value &&
              "otherwise" != e.value &&
              ")" != e.value &&
              !f(e) &&
              !m(e) &&
              "EOF" != e.type
            );
          },
          parseAnyOf: s,
          parseHyperScript: function (e) {
            var t = a("hyperscript", e);
            if ((e.hasMore() && c(e), t)) return t;
          },
          raiseParseError: c,
          addGrammarElement: l,
          addCommand: function (n, r) {
            var o = n + "Command",
              i = function (e, t, n) {
                var i = r(e, t, n);
                if (i)
                  return (
                    (i.type = o),
                    (i.execute = function (e) {
                      return (e.meta.command = i), t.unifiedExec(this, e);
                    }),
                    i
                  );
              };
            (e[o] = i), (t[n] = i);
          },
          addFeature: function (t, r) {
            var o = t + "Feature",
              i = function (e, n, i) {
                var a = r(e, n, i);
                if (a) return (a.isFeature = !0), (a.keyword = t), (a.type = o), a;
              };
            (e[o] = i), (n[t] = i);
          },
          addLeafExpression: function (e, t) {
            r.push(e), l(e, t);
          },
          addIndirectExpression: function (e, t) {
            o.push(e), l(e, t);
          },
          parseStringTemplate: function (e) {
            var t = [""];
            do {
              if ((t.push(e.lastWhitespace()), "$" === e.currentToken().value)) {
                e.consumeToken();
                var n = e.matchOpToken("{");
                t.push(u("expression", e)), n && e.requireOpToken("}"), t.push("");
              } else if ("\\" === e.currentToken().value) e.consumeToken(), e.consumeToken();
              else {
                var r = e.consumeToken();
                t[t.length - 1] += r ? r.value : "";
              }
            } while (e.hasMore());
            return t.push(e.lastWhitespace()), t;
          },
          ensureTerminated: function (e) {
            for (
              var t = {
                  type: "implicitReturn",
                  op: function (e) {
                    return (e.meta.returned = !0), e.meta.resolve && e.meta.resolve(), T.HALT;
                  },
                  execute: function (e) {},
                },
                n = e;
              n.next;

            )
              n = n.next;
            n.next = t;
          },
        }
      );
    })(),
    E = {
      dynamicResolvers: [
        function (e, t) {
          if ("Fixed" === e) return Number(t).toFixed();
          if (0 === e.indexOf("Fixed:")) {
            var n = e.split(":")[1];
            return Number(t).toFixed(parseInt(n));
          }
        },
      ],
      String: function (e) {
        return e.toString ? e.toString() : "" + e;
      },
      Int: function (e) {
        return parseInt(e);
      },
      Float: function (e) {
        return parseFloat(e);
      },
      Number: (function (e) {
        function t(t) {
          return e.apply(this, arguments);
        }
        return (
          (t.toString = function () {
            return e.toString();
          }),
          t
        );
      })(function (e) {
        return Number(e);
      }),
      Date: (function (e) {
        function t(t) {
          return e.apply(this, arguments);
        }
        return (
          (t.toString = function () {
            return e.toString();
          }),
          t
        );
      })(function (e) {
        return new Date(e);
      }),
      Array: (function (e) {
        function t(t) {
          return e.apply(this, arguments);
        }
        return (
          (t.toString = function () {
            return e.toString();
          }),
          t
        );
      })(function (e) {
        return Array.from(e);
      }),
      JSON: (function (e) {
        function t(t) {
          return e.apply(this, arguments);
        }
        return (
          (t.toString = function () {
            return e.toString();
          }),
          t
        );
      })(function (e) {
        return JSON.stringify(e);
      }),
      Object: function (e) {
        return e instanceof String && (e = e.toString()), "string" == typeof e ? JSON.parse(e) : c({}, e);
      },
    },
    T = (function () {
      function e(e, t) {
        var n =
          e.matches ||
          e.matchesSelector ||
          e.msMatchesSelector ||
          e.mozMatchesSelector ||
          e.webkitMatchesSelector ||
          e.oMatchesSelector;
        return n && n.call(e, t);
      }
      function t(e, t, n, r) {
        (n = n || {}).sender = r;
        var o = (function (e, t) {
          var n;
          return (
            d.Event && "function" == typeof d.Event
              ? ((n = new Event(e, { bubbles: !0, cancelable: !0 })).detail = t)
              : (n = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, t),
            n
          );
        })(t, n);
        return e.dispatchEvent(o);
      }
      function r(e) {
        return (
          Array.isArray(e) || ("undefined" != typeof NodeList && (e instanceof NodeList || e instanceof HTMLCollection))
        );
      }
      function o(e) {
        return e instanceof h || r(e);
      }
      function i(e, t) {
        if (null == e);
        else if (
          (function (e) {
            return "object" == typeof e && Symbol.iterator in e && "function" == typeof e[Symbol.iterator];
          })(e)
        )
          for (var n, o = l(e); !(n = o()).done; ) t(n.value);
        else if (r(e)) for (var i = 0; i < e.length; i++) t(e[i]);
        else t(e);
      }
      function a(e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          if ((n.asyncWrapper && (e[t] = n.value), Array.isArray(n)))
            for (var r = 0; r < n.length; r++) {
              var o = n[r];
              o.asyncWrapper && (n[r] = o.value);
            }
        }
      }
      var s = {};
      function m(e, t) {
        var n = [t],
          r = !1,
          o = !1;
        if (e.args)
          for (var i = 0; i < e.args.length; i++) {
            var u = e.args[i];
            if (null == u) n.push(null);
            else if (Array.isArray(u)) {
              for (var s = [], l = 0; l < u.length; l++) {
                var c = u[l];
                (f = c ? c.evaluate(t) : null) && (f.then ? (r = !0) : f.asyncWrapper && (o = !0)), s.push(f);
              }
              n.push(s);
            } else if (u.evaluate) {
              var f;
              (f = u.evaluate(t)) && (f.then ? (r = !0) : f.asyncWrapper && (o = !0)), n.push(f);
            } else n.push(u);
          }
        return r
          ? new Promise(function (t, r) {
              (n = (function (e) {
                for (var t = [], n = 0; n < e.length; n++) {
                  var r = e[n];
                  Array.isArray(r) ? t.push(Promise.all(r)) : t.push(r);
                }
                return t;
              })(n)),
                Promise.all(n)
                  .then(function (n) {
                    o && a(n);
                    try {
                      var i = e.op.apply(e, n);
                      t(i);
                    } catch (e) {
                      r(e);
                    }
                  })
                  .catch(function (e) {
                    r(e);
                  });
            })
          : (o && a(n), e.op.apply(e, n));
      }
      var k = null;
      function g() {
        return null == k && (k = p.config.attributes.replace(/ /g, "").split(",")), k;
      }
      function x(e) {
        for (var t = 0; t < g().length; t++) {
          var n = g()[t];
          if (e.hasAttribute && e.hasAttribute(n)) return e.getAttribute(n);
        }
        return e instanceof HTMLScriptElement && "text/hyperscript" === e.type ? e.innerText : null;
      }
      var b = new WeakMap();
      function w(e) {
        var t = b.get(e);
        return void 0 === t && b.set(e, (t = {})), t;
      }
      function q(e, t) {
        e && (c(t, w(e)), q(e.parentElement, t));
      }
      function S(e, t, n, r) {
        var o = {
          meta: { parser: y, lexer: v, runtime: T, owner: e, feature: t, iterators: {} },
          me: n,
          event: r,
          target: r ? r.target : null,
          detail: r ? r.detail : null,
          sender: r && r.detail ? r.detail.sender : null,
          body: "document" in d ? document.body : null,
        };
        return (o.meta.ctx = o), q(e, o), o;
      }
      function N(e) {
        var t = v.tokenize(e);
        if (y.commandStart(t.currentToken())) {
          var n = y.requireElement("commandList", t);
          return t.hasMore() && y.raiseParseError(t), y.ensureTerminated(n), n;
        }
        if (y.featureStart(t.currentToken())) {
          var r = y.requireElement("hyperscript", t);
          return t.hasMore() && y.raiseParseError(t), r;
        }
        var o = y.requireElement("expression", t);
        return t.hasMore() && y.raiseParseError(t), o;
      }
      function C(e, n) {
        if (!e.closest || !e.closest(p.config.disableSelector)) {
          var r = O(e);
          if (!r.initialized) {
            var o = x(e);
            if (o)
              try {
                (r.initialized = !0), (r.script = o);
                var i = v.tokenize(o),
                  a = y.parseHyperScript(i);
                if (!a) return;
                a.apply(n || e, e),
                  setTimeout(function () {
                    t(n || e, "load", { hyperscript: !0 });
                  }, 1);
              } catch (t) {
                T.triggerEvent(e, "exception", { error: t }),
                  console.error(
                    "hyperscript errors were found on the following element:",
                    e,
                    "\n\n",
                    t.message,
                    t.stack
                  );
              }
          }
        }
      }
      var L = new WeakMap();
      function O(e) {
        var t = L.get(e);
        return void 0 === t && L.set(e, (t = {})), t;
      }
      function R(e) {
        var t = e.meta && e.meta.owner;
        if (t) {
          var n = O(t),
            r = "elementScope";
          return e.meta.feature && e.meta.feature.behavior && (r = e.meta.feature.behavior + "Scope"), f(n, r);
        }
        return {};
      }
      function I(e, t, n) {
        if (null != e) {
          var r = n(e, t);
          if (void 0 !== r) return r;
          if (o(e)) {
            for (var i, a = [], u = l(e); !(i = u()).done; ) {
              var s = n(i.value, t);
              s && a.push(s);
            }
            return a;
          }
        }
      }
      return {
        typeCheck: function (e, t, n) {
          return !(null != e || !n) || Object.prototype.toString.call(e).slice(8, -1) === t;
        },
        forEach: i,
        implicitLoop: function (e, t) {
          if (o(e)) for (var n, r = l(e); !(n = r()).done; ) t(n.value);
          else t(e);
        },
        triggerEvent: t,
        matchesSelector: e,
        getScript: x,
        processNode: function (t) {
          var n = T.getScriptSelector();
          e(t, n) && C(t, t),
            t instanceof HTMLScriptElement && "text/hyperscript" === t.type && C(t, document.body),
            t.querySelectorAll &&
              i(t.querySelectorAll(n + ", [type='text/hyperscript']"), function (e) {
                C(e, e instanceof HTMLScriptElement && "text/hyperscript" === e.type ? document.body : e);
              });
        },
        evaluate: function (e, t, r) {
          var o = (function (e) {
              function t(t) {
                var n;
                return ((n = e.call(this) || this).module = t), n;
              }
              return (
                n(t, e),
                (t.prototype.toString = function () {
                  return this.module.id;
                }),
                t
              );
            })(u(EventTarget)),
            i = "document" in d ? d.document.body : new o(r && r.module);
          t = c(S(i, null, i, null), t || {});
          var a = N(e);
          return a.execute ? (a.execute(t), t.result) : a.apply ? (a.apply(i, i, r), w(i)) : a.evaluate(t);
        },
        evaluateNoPromise: function (e, t) {
          var n = e.evaluate(t);
          if (n.next) throw new Error(e.sourceFor() + " returned a Promise in a context that they are not allowed.");
          return n;
        },
        parse: N,
        getScriptSelector: function () {
          return g()
            .map(function (e) {
              return "[" + e + "]";
            })
            .join(", ");
        },
        resolveSymbol: function (e, t, n) {
          if ("me" === e || "my" === e || "I" === e) return t.me;
          if ("it" === e || "its" === e) return t.result;
          if ("you" === e || "your" === e || "yourself" === e) return t.beingTold;
          if ("global" === n) return d[e];
          if ("element" === n) return R(t)[e];
          if ("local" === n) return t[e];
          if (t.meta && t.meta.context) {
            var r = t.meta.context[e];
            if (void 0 !== r) return r;
          }
          var o = t[e];
          return void 0 !== o || void 0 !== (o = R(t)[e]) ? o : d[e];
        },
        setSymbol: function (e, t, n, r) {
          if ("global" === n) d[e] = r;
          else if ("element" === n) (o = R(t))[e] = r;
          else if ("local" === n) t[e] = r;
          else {
            var o,
              i = t[e];
            void 0 !== i ? (t[e] = r) : void 0 !== (i = (o = R(t))[e]) ? (o[e] = r) : (t[e] = r);
          }
        },
        makeContext: S,
        findNext: function e(t, n) {
          if (t) return t.resolveNext ? t.resolveNext(n) : t.next ? t.next : e(t.parent, n);
        },
        unifiedEval: m,
        convertValue: function (e, t) {
          for (var n = E.dynamicResolvers, r = 0; r < n.length; r++) {
            var o = (0, n[r])(t, e);
            if (void 0 !== o) return o;
          }
          if (null == e) return null;
          var i = E[t];
          if (i) return i(e);
          throw "Unknown conversion : " + t;
        },
        unifiedExec: function e(t, n) {
          for (;;) {
            try {
              var r = m(t, n);
            } catch (e) {
              if (n.meta.handlingFinally) console.error(" Exception in finally block: ", e), (r = s);
              else {
                if ((T.registerHyperTrace(n, e), n.meta.errorHandler && !n.meta.handlingError)) {
                  (n.meta.handlingError = !0), (n[n.meta.errorSymbol] = e), (t = n.meta.errorHandler);
                  continue;
                }
                (n.meta.currentException = e), (r = s);
              }
            }
            if (null == r) return void console.error(t, " did not return a next element to execute! context: ", n);
            if (r.then)
              return void r
                .then(function (t) {
                  e(t, n);
                })
                .catch(function (t) {
                  e(
                    {
                      op: function () {
                        throw t;
                      },
                    },
                    n
                  );
                });
            if (r === s) {
              if (!n.meta.finallyHandler || n.meta.handlingFinally) {
                if ((n.meta.onHalt && n.meta.onHalt(), n.meta.currentException)) {
                  if (n.meta.reject) return void n.meta.reject(n.meta.currentException);
                  throw n.meta.currentException;
                }
                return;
              }
              (n.meta.handlingFinally = !0), (t = n.meta.finallyHandler);
            } else t = r;
          }
        },
        resolveProperty: function (e, t) {
          return I(e, t, function (e, t) {
            return e[t];
          });
        },
        resolveAttribute: function (e, t) {
          return I(e, t, function (e, t) {
            return e.getAttribute && e.getAttribute(t);
          });
        },
        resolveStyle: function (e, t) {
          return I(e, t, function (e, t) {
            return e.style && e.style[t];
          });
        },
        resolveComputedStyle: function (e, t) {
          return I(e, t, function (e, t) {
            return getComputedStyle(e).getPropertyValue(t);
          });
        },
        assignToNamespace: function (e, t, n, r) {
          var o;
          for (o = "undefined" != typeof document && e === document.body ? d : w(e); t.length > 0; ) {
            var i = t.shift(),
              a = o[i];
            null == a && (o[i] = a = {}), (o = a);
          }
          o[n] = r;
        },
        registerHyperTrace: function (e, t) {
          for (var n = [], r = null; null != e; ) n.push(e), (r = e), (e = e.meta.caller);
          null == r.meta.traceMap && (r.meta.traceMap = new Map()),
            r.meta.traceMap.get(t) ||
              r.meta.traceMap.set(t, {
                trace: n,
                print: function (e) {
                  (e = e || console.error)("hypertrace /// ");
                  for (var t = 0, r = 0; r < n.length; r++) t = Math.max(t, n[r].meta.feature.displayName.length);
                  for (r = 0; r < n.length; r++) {
                    var o = n[r];
                    e("  ->", o.meta.feature.displayName.padEnd(t + 2), "-", o.meta.owner);
                  }
                },
              });
        },
        getHyperTrace: function (e, t) {
          for (var n = e; n.meta.caller; ) n = n.meta.caller;
          if (n.meta.traceMap) return n.meta.traceMap.get(t, []);
        },
        getInternalData: O,
        getHyperscriptFeatures: w,
        escapeSelector: function (e) {
          return e.replace(/:/g, function (e) {
            return "\\" + e;
          });
        },
        nullCheck: function (e, t) {
          if (null == e) throw new Error("'" + t.sourceFor() + "' is null");
        },
        isEmpty: function (e) {
          return null == e || 0 === e.length;
        },
        doesExist: function (e) {
          if (null == e) return !1;
          if (o(e)) for (var t = l(e); !t().done; ) return !0;
          return !1;
        },
        getRootNode: function (e) {
          if (e && e instanceof Node) {
            var t = e.getRootNode();
            if (t instanceof Document || t instanceof ShadowRoot) return t;
          }
          return document;
        },
        getEventQueueFor: function (e, t) {
          var n = O(e),
            r = n.eventQueues;
          null == r && ((r = new Map()), (n.eventQueues = r));
          var o = r.get(t);
          return null == o && r.set(t, (o = { queue: [], executing: !1 })), o;
        },
        hyperscriptUrl:
          "document" in d
            ? "undefined" == typeof document && "undefined" == typeof location
              ? new (require("url").URL)("file:" + __filename).href
              : "undefined" == typeof document
                ? location.href
                : (document.currentScript && document.currentScript.src) ||
                  new URL("_hyperscript_w9y.min.js", document.baseURI).href
            : null,
        HALT: s,
      };
    })(),
    k = function (e, t, n) {
      if (t.contains) return t.contains(n);
      if (t.includes) return t.includes(n);
      throw Error("The value of " + e.sourceFor() + " does not have a contains or includes method on it");
    },
    g = function (e, t, n) {
      if (t.match) return !!t.match(n);
      if (t.matches) return t.matches(n);
      throw Error("The value of " + e.sourceFor() + " does not have a match or matches method on it");
    },
    x = function (e, t, n, r) {
      var o = t.requireElement("eventName", r),
        i = t.parseElement("namedArgumentList", r);
      if (("send" === e && r.matchToken("to")) || ("trigger" === e && r.matchToken("on")))
        var a = t.requireElement("expression", r);
      else a = t.requireElement("implicitMeTarget", r);
      var u = {
        eventName: o,
        details: i,
        to: a,
        args: [a, o, i],
        op: function (e, t, r, o) {
          return (
            n.nullCheck(t, a),
            n.forEach(t, function (t) {
              n.triggerEvent(t, r, o, e.me);
            }),
            n.findNext(u, e)
          );
        },
      };
      return u;
    },
    b = function (e, t) {
      var n,
        r = "text";
      return (
        e.matchToken("a") || e.matchToken("an"),
        e.matchToken("json") || e.matchToken("Object")
          ? (r = "json")
          : e.matchToken("response")
            ? (r = "response")
            : e.matchToken("html")
              ? (r = "html")
              : e.matchToken("text") || (n = t.requireElement("dotOrColonPath", e).evaluate()),
        { type: r, conversion: n }
      );
    };
  y.addLeafExpression("parenthesized", function (e, t, n) {
    if (n.matchOpToken("(")) {
      var r = n.clearFollow();
      try {
        var o = e.requireElement("expression", n);
      } finally {
        n.restoreFollow(r);
      }
      return n.requireOpToken(")"), o;
    }
  }),
    y.addLeafExpression("string", function (e, t, n) {
      var r = n.matchTokenType("STRING");
      if (r) {
        var o,
          i = r.value;
        if (r.template) {
          var a = v.tokenize(i, !0);
          o = e.parseStringTemplate(a);
        } else o = [];
        return {
          type: "string",
          token: r,
          args: o,
          op: function (e) {
            for (var t = "", n = 1; n < arguments.length; n++) {
              var r = arguments[n];
              void 0 !== r && (t += r);
            }
            return t;
          },
          evaluate: function (e) {
            return 0 === o.length ? i : t.unifiedEval(this, e);
          },
        };
      }
    }),
    y.addGrammarElement("nakedString", function (e, t, n) {
      if (n.hasMore()) {
        var r = n.consumeUntilWhitespace();
        return (
          n.matchTokenType("WHITESPACE"),
          {
            type: "nakedString",
            tokens: r,
            evaluate: function (e) {
              return r
                .map(function (e) {
                  return e.value;
                })
                .join("");
            },
          }
        );
      }
    }),
    y.addLeafExpression("number", function (e, t, n) {
      var r = n.matchTokenType("NUMBER");
      if (r) {
        var o = r,
          i = parseFloat(r.value);
        return {
          type: "number",
          value: i,
          numberToken: o,
          evaluate: function () {
            return i;
          },
        };
      }
    }),
    y.addLeafExpression("idRef", function (e, t, n) {
      var r = n.matchTokenType("ID_REF");
      if (r) {
        if (r.template) {
          var o = r.value.substr(2, r.value.length - 2),
            i = v.tokenize(o);
          return {
            type: "idRefTemplate",
            args: [e.requireElement("expression", i)],
            op: function (e, n) {
              return t.getRootNode(e.me).getElementById(n);
            },
            evaluate: function (e) {
              return t.unifiedEval(this, e);
            },
          };
        }
        var a = r.value.substr(1);
        return {
          type: "idRef",
          css: r.value,
          value: a,
          evaluate: function (e) {
            return t.getRootNode(e.me).getElementById(a);
          },
        };
      }
    }),
    y.addLeafExpression("classRef", function (e, t, n) {
      var r = n.matchTokenType("CLASS_REF");
      if (r) {
        if (r.template) {
          var o = r.value.substr(2, r.value.length - 2),
            i = v.tokenize(o);
          return {
            type: "classRefTemplate",
            args: [e.requireElement("expression", i)],
            op: function (e, t) {
              return new h("." + t, e.me, !0);
            },
            evaluate: function (e) {
              return t.unifiedEval(this, e);
            },
          };
        }
        var a = r.value;
        return {
          type: "classRef",
          css: a,
          evaluate: function (e) {
            return new h(a, e.me, !0);
          },
        };
      }
    });
  var w = (function (e, r) {
    function o(t, n, r) {
      var o;
      return (
        ((o = e.call(this, t, n) || this).templateParts = r),
        (o.elements = r.filter(function (e) {
          return e instanceof Element;
        })),
        o
      );
    }
    return (
      n(o, e),
      (o.prototype[r] = function () {
        this.elements.forEach(function (e, t) {
          return (e.dataset.hsQueryId = t);
        });
        var t = e.prototype[Symbol.iterator].call(this);
        return (
          this.elements.forEach(function (e) {
            return e.removeAttribute("data-hs-query-id");
          }),
          t
        );
      }),
      t(o, [
        {
          key: "css",
          get: function () {
            for (var e, t = "", n = 0, r = l(this.templateParts); !(e = r()).done; ) {
              var o = e.value;
              o instanceof Element ? (t += "[data-hs-query-id='" + n++ + "']") : (t += o);
            }
            return t;
          },
        },
      ]),
      o
    );
  })(h, Symbol.iterator);
  y.addLeafExpression("queryRef", function (e, t, n) {
    if (n.matchOpToken("<")) {
      var r = n.consumeUntil("/");
      n.requireOpToken("/"), n.requireOpToken(">");
      var o = r
        .map(function (e) {
          return "STRING" === e.type ? '"' + e.value + '"' : e.value;
        })
        .join("");
      if (o.indexOf("$") >= 0)
        var i = !0,
          a = v.tokenize(o, !0),
          u = e.parseStringTemplate(a);
      return {
        type: "queryRef",
        css: o,
        args: u,
        op: function (e) {
          return i ? new w(o, e.me, [].slice.call(arguments, 1)) : new h(o, e.me);
        },
        evaluate: function (e) {
          return t.unifiedEval(this, e);
        },
      };
    }
  }),
    y.addLeafExpression("attributeRef", function (e, t, n) {
      var r = n.matchTokenType("ATTRIBUTE_REF");
      if (r) {
        var o = r.value;
        if (0 === o.indexOf("[")) var i = o.substring(2, o.length - 1);
        else i = o.substring(1);
        var a = "[" + i + "]",
          u = i.split("="),
          s = u[0],
          l = u[1];
        return (
          l && 0 === l.indexOf('"') && (l = l.substring(1, l.length - 1)),
          {
            type: "attributeRef",
            name: s,
            css: a,
            value: l,
            op: function (e) {
              var t = e.beingTold || e.me;
              if (t) return t.getAttribute(s);
            },
            evaluate: function (e) {
              return t.unifiedEval(this, e);
            },
          }
        );
      }
    }),
    y.addLeafExpression("styleRef", function (e, t, n) {
      var r = n.matchTokenType("STYLE_REF");
      if (r) {
        var o = r.value.substr(1);
        return o.startsWith("computed-")
          ? {
              type: "computedStyleRef",
              name: (o = o.substr("computed-".length)),
              op: function (e) {
                var n = e.beingTold || e.me;
                if (n) return t.resolveComputedStyle(n, o);
              },
              evaluate: function (e) {
                return t.unifiedEval(this, e);
              },
            }
          : {
              type: "styleRef",
              name: o,
              op: function (e) {
                var n = e.beingTold || e.me;
                if (n) return t.resolveStyle(n, o);
              },
              evaluate: function (e) {
                return t.unifiedEval(this, e);
              },
            };
      }
    }),
    y.addGrammarElement("objectKey", function (e, t, n) {
      var r;
      if ((r = n.matchTokenType("STRING")))
        return {
          type: "objectKey",
          key: r.value,
          evaluate: function () {
            return r.value;
          },
        };
      if (n.matchOpToken("[")) {
        var o = e.parseElement("expression", n);
        return (
          n.requireOpToken("]"),
          {
            type: "objectKey",
            expr: o,
            args: [o],
            op: function (e, t) {
              return t;
            },
            evaluate: function (e) {
              return t.unifiedEval(this, e);
            },
          }
        );
      }
      var i = "";
      do {
        (r = n.matchTokenType("IDENTIFIER") || n.matchOpToken("-")) && (i += r.value);
      } while (r);
      return {
        type: "objectKey",
        key: i,
        evaluate: function () {
          return i;
        },
      };
    }),
    y.addLeafExpression("objectLiteral", function (e, t, n) {
      if (n.matchOpToken("{")) {
        var r = [],
          o = [];
        if (!n.matchOpToken("}")) {
          do {
            var i = e.requireElement("objectKey", n);
            n.requireOpToken(":");
            var a = e.requireElement("expression", n);
            o.push(a), r.push(i);
          } while (n.matchOpToken(","));
          n.requireOpToken("}");
        }
        return {
          type: "objectLiteral",
          args: [r, o],
          op: function (e, t, n) {
            for (var r = {}, o = 0; o < t.length; o++) r[t[o]] = n[o];
            return r;
          },
          evaluate: function (e) {
            return t.unifiedEval(this, e);
          },
        };
      }
    }),
    y.addGrammarElement("nakedNamedArgumentList", function (e, t, n) {
      var r = [],
        o = [];
      if ("IDENTIFIER" === n.currentToken().type)
        do {
          var i = n.requireTokenType("IDENTIFIER");
          n.requireOpToken(":");
          var a = e.requireElement("expression", n);
          o.push(a), r.push({ name: i, value: a });
        } while (n.matchOpToken(","));
      return {
        type: "namedArgumentList",
        fields: r,
        args: [o],
        op: function (e, t) {
          for (var n = { _namedArgList_: !0 }, o = 0; o < t.length; o++) n[r[o].name.value] = t[o];
          return n;
        },
        evaluate: function (e) {
          return t.unifiedEval(this, e);
        },
      };
    }),
    y.addGrammarElement("namedArgumentList", function (e, t, n) {
      if (n.matchOpToken("(")) {
        var r = e.requireElement("nakedNamedArgumentList", n);
        return n.requireOpToken(")"), r;
      }
    }),
    y.addGrammarElement("symbol", function (e, t, n) {
      var r = "default";
      n.matchToken("global")
        ? (r = "global")
        : n.matchToken("element") || n.matchToken("module")
          ? ((r = "element"), n.matchOpToken("'") && n.requireToken("s"))
          : n.matchToken("local") && (r = "local");
      var o = n.matchOpToken(":"),
        i = n.matchTokenType("IDENTIFIER");
      if (i) {
        var a = i.value;
        return (
          o && (a = ":" + a),
          "default" === r && (0 === a.indexOf("$") && (r = "global"), 0 === a.indexOf(":") && (r = "element")),
          {
            type: "symbol",
            token: i,
            scope: r,
            name: a,
            evaluate: function (e) {
              return t.resolveSymbol(a, e, r);
            },
          }
        );
      }
    }),
    y.addGrammarElement("implicitMeTarget", function (e, t, n) {
      return {
        type: "implicitMeTarget",
        evaluate: function (e) {
          return e.beingTold || e.me;
        },
      };
    }),
    y.addLeafExpression("boolean", function (e, t, n) {
      var r = n.matchToken("true") || n.matchToken("false");
      if (r) {
        var o = "true" === r.value;
        return {
          type: "boolean",
          evaluate: function (e) {
            return o;
          },
        };
      }
    }),
    y.addLeafExpression("null", function (e, t, n) {
      if (n.matchToken("null"))
        return {
          type: "null",
          evaluate: function (e) {
            return null;
          },
        };
    }),
    y.addLeafExpression("arrayLiteral", function (e, t, n) {
      if (n.matchOpToken("[")) {
        var r = [];
        if (!n.matchOpToken("]")) {
          do {
            var o = e.requireElement("expression", n);
            r.push(o);
          } while (n.matchOpToken(","));
          n.requireOpToken("]");
        }
        return {
          type: "arrayLiteral",
          values: r,
          args: [r],
          op: function (e, t) {
            return t;
          },
          evaluate: function (e) {
            return t.unifiedEval(this, e);
          },
        };
      }
    }),
    y.addLeafExpression("blockLiteral", function (e, t, n) {
      if (n.matchOpToken("\\")) {
        var r = [],
          o = n.matchTokenType("IDENTIFIER");
        if (o) for (r.push(o); n.matchOpToken(","); ) r.push(n.requireTokenType("IDENTIFIER"));
        n.requireOpToken("-"), n.requireOpToken(">");
        var i = e.requireElement("expression", n);
        return {
          type: "blockLiteral",
          args: r,
          expr: i,
          evaluate: function (e) {
            return function () {
              for (var t = 0; t < r.length; t++) e[r[t].value] = arguments[t];
              return i.evaluate(e);
            };
          },
        };
      }
    }),
    y.addIndirectExpression("propertyAccess", function (e, t, n, r) {
      if (n.matchOpToken(".")) {
        var o = n.requireTokenType("IDENTIFIER");
        return e.parseElement("indirectExpression", n, {
          type: "propertyAccess",
          root: r,
          prop: o,
          args: [r],
          op: function (e, n) {
            return t.resolveProperty(n, o.value);
          },
          evaluate: function (e) {
            return t.unifiedEval(this, e);
          },
        });
      }
    }),
    y.addIndirectExpression("of", function (e, t, n, r) {
      if (n.matchToken("of")) {
        for (var o = e.requireElement("expression", n), i = null, a = r; a.root; ) (i = a), (a = a.root);
        "symbol" !== a.type &&
          "attributeRef" !== a.type &&
          "styleRef" !== a.type &&
          "computedStyleRef" !== a.type &&
          e.raiseParseError(n, "Cannot take a property of a non-symbol: " + a.type);
        var u = "attributeRef" === a.type,
          s = "styleRef" === a.type || "computedStyleRef" === a.type;
        if (u || s) var l = a;
        var c = a.name,
          f = {
            type: "ofExpression",
            prop: a.token,
            root: o,
            attribute: l,
            expression: r,
            args: [o],
            op: function (e, n) {
              return u
                ? t.resolveAttribute(n, c)
                : s
                  ? "computedStyleRef" === a.type
                    ? t.resolveComputedStyle(n, c)
                    : t.resolveStyle(n, c)
                  : t.resolveProperty(n, c);
            },
            evaluate: function (e) {
              return t.unifiedEval(this, e);
            },
          };
        return (
          "attributeRef" === a.type && (f.attribute = a),
          i ? ((i.root = f), (i.args = [f])) : (r = f),
          e.parseElement("indirectExpression", n, r)
        );
      }
    }),
    y.addIndirectExpression("possessive", function (e, t, n, r) {
      if (!e.possessivesDisabled) {
        var o = n.matchOpToken("'");
        if (
          o ||
          ("symbol" === r.type &&
            ("my" === r.name || "its" === r.name || "your" === r.name) &&
            ("IDENTIFIER" === n.currentToken().type ||
              "ATTRIBUTE_REF" === n.currentToken().type ||
              "STYLE_REF" === n.currentToken().type))
        ) {
          o && n.requireToken("s");
          var i = e.parseElement("attributeRef", n);
          if (null == i) {
            var a = e.parseElement("styleRef", n);
            if (null == a) var u = n.requireTokenType("IDENTIFIER");
          }
          return e.parseElement("indirectExpression", n, {
            type: "possessive",
            root: r,
            attribute: i || a,
            prop: u,
            args: [r],
            op: function (e, n) {
              if (i) var r = t.resolveAttribute(n, i.name);
              else
                r = a
                  ? "computedStyleRef" === a.type
                    ? t.resolveComputedStyle(n, a.name)
                    : t.resolveStyle(n, a.name)
                  : t.resolveProperty(n, u.value);
              return r;
            },
            evaluate: function (e) {
              return t.unifiedEval(this, e);
            },
          });
        }
      }
    }),
    y.addIndirectExpression("inExpression", function (e, t, n, r) {
      if (n.matchToken("in")) {
        var o = {
          type: "inExpression",
          root: r,
          args: [r, e.requireElement("expression", n)],
          op: function (e, n, r) {
            var o = [];
            if (n.css)
              t.implicitLoop(r, function (e) {
                for (var t = e.querySelectorAll(n.css), r = 0; r < t.length; r++) o.push(t[r]);
              });
            else if (n instanceof Element) {
              var i = !1;
              if (
                (t.implicitLoop(r, function (e) {
                  e.contains(n) && (i = !0);
                }),
                i)
              )
                return n;
            } else
              t.implicitLoop(n, function (e) {
                t.implicitLoop(r, function (t) {
                  e === t && o.push(e);
                });
              });
            return o.length > 0 ? o : null;
          },
          evaluate: function (e) {
            return t.unifiedEval(this, e);
          },
        };
        return e.parseElement("indirectExpression", n, o);
      }
    }),
    y.addIndirectExpression("asExpression", function (e, t, n, r) {
      if (n.matchToken("as")) {
        n.matchToken("a") || n.matchToken("an");
        var o = e.requireElement("dotOrColonPath", n).evaluate();
        return e.parseElement("indirectExpression", n, {
          type: "asExpression",
          root: r,
          args: [r],
          op: function (e, n) {
            return t.convertValue(n, o);
          },
          evaluate: function (e) {
            return t.unifiedEval(this, e);
          },
        });
      }
    }),
    y.addIndirectExpression("functionCall", function (e, t, n, r) {
      if (n.matchOpToken("(")) {
        var o = [];
        if (!n.matchOpToken(")")) {
          do {
            o.push(e.requireElement("expression", n));
          } while (n.matchOpToken(","));
          n.requireOpToken(")");
        }
        if (r.root)
          var i = {
            type: "functionCall",
            root: r,
            argExressions: o,
            args: [r.root, o],
            op: function (e, n, o) {
              t.nullCheck(n, r.root);
              var i = n[r.prop.value];
              return t.nullCheck(i, r), i.hyperfunc && o.push(e), i.apply(n, o);
            },
            evaluate: function (e) {
              return t.unifiedEval(this, e);
            },
          };
        else
          i = {
            type: "functionCall",
            root: r,
            argExressions: o,
            args: [r, o],
            op: function (e, n, o) {
              return t.nullCheck(n, r), n.hyperfunc && o.push(e), n.apply(null, o);
            },
            evaluate: function (e) {
              return t.unifiedEval(this, e);
            },
          };
        return e.parseElement("indirectExpression", n, i);
      }
    }),
    y.addIndirectExpression("attributeRefAccess", function (e, t, n, r) {
      var o = e.parseElement("attributeRef", n);
      if (o)
        return {
          type: "attributeRefAccess",
          root: r,
          attribute: o,
          args: [r],
          op: function (e, n) {
            return t.resolveAttribute(n, o.name);
          },
          evaluate: function (e) {
            return T.unifiedEval(this, e);
          },
        };
    }),
    y.addIndirectExpression("arrayIndex", function (e, t, n, r) {
      if (n.matchOpToken("[")) {
        var o = !1,
          i = !1,
          a = null,
          u = null;
        n.matchOpToken("..")
          ? ((o = !0), (a = e.requireElement("expression", n)))
          : ((a = e.requireElement("expression", n)),
            n.matchOpToken("..") &&
              ((i = !0), "R_BRACKET" !== n.currentToken().type && (u = e.parseElement("expression", n)))),
          n.requireOpToken("]");
        var s = {
          type: "arrayIndex",
          root: r,
          firstIndex: a,
          secondIndex: u,
          args: [r, a, u],
          op: function (e, t, n, r) {
            return o ? t.slice(0, n + 1) : i ? (null != r ? t.slice(n, r + 1) : t.slice(n)) : t[n];
          },
          evaluate: function (e) {
            return T.unifiedEval(this, e);
          },
        };
        return y.parseElement("indirectExpression", n, s);
      }
    });
  var q = [
    "em",
    "ex",
    "cap",
    "ch",
    "ic",
    "rem",
    "lh",
    "rlh",
    "vw",
    "vh",
    "vi",
    "vb",
    "vmin",
    "vmax",
    "cm",
    "mm",
    "Q",
    "pc",
    "pt",
    "px",
  ];
  y.addGrammarElement("postfixExpression", function (e, t, n) {
    var r = e.parseElement("primaryExpression", n),
      o = n.matchAnyToken.apply(n, q) || n.matchOpToken("%");
    if (o)
      return {
        type: "stringPostfix",
        postfix: o.value,
        args: [r],
        op: function (e, t) {
          return "" + t + o.value;
        },
        evaluate: function (e) {
          return t.unifiedEval(this, e);
        },
      };
    var i = null;
    if (
      (n.matchToken("s") || n.matchToken("seconds")
        ? (i = 1e3)
        : (n.matchToken("ms") || n.matchToken("milliseconds")) && (i = 1),
      i)
    )
      return {
        type: "timeExpression",
        time: r,
        factor: i,
        args: [r],
        op: function (e, t) {
          return t * i;
        },
        evaluate: function (e) {
          return t.unifiedEval(this, e);
        },
      };
    if (n.matchOpToken(":")) {
      var a = n.requireTokenType("IDENTIFIER"),
        u = !n.matchOpToken("!");
      return {
        type: "typeCheck",
        typeName: a,
        nullOk: u,
        args: [r],
        op: function (e, n) {
          if (t.typeCheck(n, a.value, u)) return n;
          throw new Error("Typecheck failed!  Expected: " + a.value);
        },
        evaluate: function (e) {
          return t.unifiedEval(this, e);
        },
      };
    }
    return r;
  }),
    y.addGrammarElement("logicalNot", function (e, t, n) {
      if (n.matchToken("not")) {
        var r = e.requireElement("unaryExpression", n);
        return {
          type: "logicalNot",
          root: r,
          args: [r],
          op: function (e, t) {
            return !t;
          },
          evaluate: function (e) {
            return t.unifiedEval(this, e);
          },
        };
      }
    }),
    y.addGrammarElement("noExpression", function (e, t, n) {
      if (n.matchToken("no")) {
        var r = e.requireElement("unaryExpression", n);
        return {
          type: "noExpression",
          root: r,
          args: [r],
          op: function (e, n) {
            return t.isEmpty(n);
          },
          evaluate: function (e) {
            return t.unifiedEval(this, e);
          },
        };
      }
    }),
    y.addLeafExpression("some", function (e, t, n) {
      if (n.matchToken("some")) {
        var r = e.requireElement("expression", n);
        return {
          type: "noExpression",
          root: r,
          args: [r],
          op: function (e, n) {
            return !t.isEmpty(n);
          },
          evaluate: function (e) {
            return t.unifiedEval(this, e);
          },
        };
      }
    }),
    y.addGrammarElement("negativeNumber", function (e, t, n) {
      if (n.matchOpToken("-")) {
        var r = e.requireElement("unaryExpression", n);
        return {
          type: "negativeNumber",
          root: r,
          args: [r],
          op: function (e, t) {
            return -1 * t;
          },
          evaluate: function (e) {
            return t.unifiedEval(this, e);
          },
        };
      }
    }),
    y.addGrammarElement("unaryExpression", function (e, t, n) {
      return e.parseAnyOf(
        [
          "logicalNot",
          "relativePositionalExpression",
          "positionalExpression",
          "noExpression",
          "negativeNumber",
          "postfixExpression",
        ],
        n
      );
    });
  var S = function (e, t, n, r) {
    var o = [];
    T.forEach(t, function (t) {
      (t.matches(n) || t === e) && o.push(t);
    });
    for (var i = 0; i < o.length - 1; i++) if (o[i] === e) return o[i + 1];
    if (r) {
      var a = o[0];
      if (a && a.matches(n)) return a;
    }
  };
  y.addGrammarElement("relativePositionalExpression", function (e, t, n) {
    var r = n.matchAnyToken("next", "previous");
    if (r) {
      if ("next" === r.value) var o = !0;
      var i = e.parseElement("expression", n);
      if (n.matchToken("from")) {
        n.pushFollow("in");
        try {
          var a = e.requireElement("expression", n);
        } finally {
          n.popFollow();
        }
      } else a = e.requireElement("implicitMeTarget", n);
      var u,
        s = !1;
      if (n.matchToken("in")) {
        s = !0;
        var l = e.requireElement("expression", n);
      } else u = n.matchToken("within") ? e.requireElement("expression", n) : document.body;
      var c = !1;
      return (
        n.matchToken("with") && (n.requireToken("wrapping"), (c = !0)),
        {
          type: "relativePositionalExpression",
          from: a,
          forwardSearch: o,
          inSearch: s,
          wrapping: c,
          inElt: l,
          withinElt: u,
          operator: r.value,
          args: [i, a, l, u],
          op: function (e, t, n, r, i) {
            var a,
              u,
              l = t.css;
            if (null == l) throw "Expected a CSS value";
            if (s) {
              if (r) return o ? S(n, r, l, c) : ((a = l), (u = c), S(n, Array.from(r).reverse(), a, u));
            } else if (i)
              return o
                ? (function (e, t, n, r) {
                    for (var o = t.querySelectorAll(n), i = 0; i < o.length; i++) {
                      var a = o[i];
                      if (a.compareDocumentPosition(e) === Node.DOCUMENT_POSITION_PRECEDING) return a;
                    }
                    if (r) return o[0];
                  })(n, i, l, c)
                : (function (e, t, n, r) {
                    for (var o = t.querySelectorAll(n), i = o.length - 1; i >= 0; i--) {
                      var a = o[i];
                      if (a.compareDocumentPosition(e) === Node.DOCUMENT_POSITION_FOLLOWING) return a;
                    }
                    if (r) return o[o.length - 1];
                  })(n, i, l, c);
          },
          evaluate: function (e) {
            return t.unifiedEval(this, e);
          },
        }
      );
    }
  }),
    y.addGrammarElement("positionalExpression", function (e, t, n) {
      var r = n.matchAnyToken("first", "last", "random");
      if (r) {
        n.matchAnyToken("in", "from", "of");
        var o = e.requireElement("unaryExpression", n),
          i = r.value;
        return {
          type: "positionalExpression",
          rhs: o,
          operator: r.value,
          args: [o],
          op: function (e, t) {
            if ((t && !Array.isArray(t) && (t = t.children ? t.children : Array.from(t)), t)) {
              if ("first" === i) return t[0];
              if ("last" === i) return t[t.length - 1];
              if ("random" === i) return t[Math.floor(Math.random() * t.length)];
            }
          },
          evaluate: function (e) {
            return t.unifiedEval(this, e);
          },
        };
      }
    }),
    y.addGrammarElement("mathOperator", function (e, t, n) {
      var r,
        o = e.parseElement("unaryExpression", n),
        i = null;
      for (r = n.matchAnyOpToken("+", "-", "*", "/", "%"); r; ) {
        var a = r.value;
        (i = i || r).value !== a &&
          e.raiseParseError(n, "You must parenthesize math operations with different operators");
        var u = e.parseElement("unaryExpression", n);
        (o = {
          type: "mathOperator",
          lhs: o,
          rhs: u,
          operator: a,
          args: [o, u],
          op: function (e, t, n) {
            return "+" === a
              ? t + n
              : "-" === a
                ? t - n
                : "*" === a
                  ? t * n
                  : "/" === a
                    ? t / n
                    : "%" === a
                      ? t % n
                      : void 0;
          },
          evaluate: function (e) {
            return t.unifiedEval(this, e);
          },
        }),
          (r = n.matchAnyOpToken("+", "-", "*", "/", "%"));
      }
      return o;
    }),
    y.addGrammarElement("mathExpression", function (e, t, n) {
      return e.parseAnyOf(["mathOperator", "unaryExpression"], n);
    }),
    y.addGrammarElement("comparisonOperator", function (e, t, n) {
      var r = e.parseElement("mathExpression", n),
        o = n.matchAnyOpToken("<", ">", "<=", ">=", "==", "===", "!=", "!=="),
        i = o ? o.value : null,
        a = !0,
        u = !1;
      if (
        (null == i &&
          (n.matchToken("is") || n.matchToken("am")
            ? n.matchToken("not")
              ? n.matchToken("in")
                ? (i = "not in")
                : n.matchToken("a")
                  ? ((i = "not a"), (u = !0))
                  : n.matchToken("empty")
                    ? ((i = "not empty"), (a = !1))
                    : (i = "!=")
              : n.matchToken("in")
                ? (i = "in")
                : n.matchToken("a")
                  ? ((i = "a"), (u = !0))
                  : n.matchToken("empty")
                    ? ((i = "empty"), (a = !1))
                    : n.matchToken("less")
                      ? (n.requireToken("than"),
                        n.matchToken("or") ? (n.requireToken("equal"), n.requireToken("to"), (i = "<=")) : (i = "<"))
                      : n.matchToken("greater")
                        ? (n.requireToken("than"),
                          n.matchToken("or") ? (n.requireToken("equal"), n.requireToken("to"), (i = ">=")) : (i = ">"))
                        : (i = "==")
            : n.matchToken("exist") || n.matchToken("exists")
              ? ((i = "exist"), (a = !1))
              : n.matchToken("matches") || n.matchToken("match")
                ? (i = "match")
                : n.matchToken("contains") || n.matchToken("contain")
                  ? (i = "contain")
                  : n.matchToken("includes") || n.matchToken("include")
                    ? (i = "include")
                    : (n.matchToken("do") || n.matchToken("does")) &&
                      (n.requireToken("not"),
                      n.matchToken("matches") || n.matchToken("match")
                        ? (i = "not match")
                        : n.matchToken("contains") || n.matchToken("contain")
                          ? (i = "not contain")
                          : n.matchToken("exist") || n.matchToken("exist")
                            ? ((i = "not exist"), (a = !1))
                            : n.matchToken("include")
                              ? (i = "not include")
                              : e.raiseParseError(n, "Expected matches or contains"))),
        i)
      ) {
        if (u)
          var s = n.requireTokenType("IDENTIFIER"),
            l = !n.matchOpToken("!");
        else if (a) {
          var c = e.requireElement("mathExpression", n);
          ("match" !== i && "not match" !== i) || (c = c.css ? c.css : c);
        }
        var f = r;
        r = {
          type: "comparisonOperator",
          operator: i,
          typeName: s,
          nullOk: l,
          lhs: r,
          rhs: c,
          args: [r, c],
          op: function (e, n, r) {
            if ("==" === i) return n == r;
            if ("!=" === i) return n != r;
            if ("match" === i) return null != n && g(f, n, r);
            if ("not match" === i) return null == n || !g(f, n, r);
            if ("in" === i) return null != r && k(c, r, n);
            if ("not in" === i) return null == r || !k(c, r, n);
            if ("contain" === i) return null != n && k(f, n, r);
            if ("not contain" === i) return null == n || !k(f, n, r);
            if ("include" === i) return null != n && k(f, n, r);
            if ("not include" === i) return null == n || !k(f, n, r);
            if ("===" === i) return n === r;
            if ("!==" === i) return n !== r;
            if ("<" === i) return n < r;
            if (">" === i) return n > r;
            if ("<=" === i) return n <= r;
            if (">=" === i) return n >= r;
            if ("empty" === i) return t.isEmpty(n);
            if ("not empty" === i) return !t.isEmpty(n);
            if ("exist" === i) return t.doesExist(n);
            if ("not exist" === i) return !t.doesExist(n);
            if ("a" === i) return t.typeCheck(n, s.value, l);
            if ("not a" === i) return !t.typeCheck(n, s.value, l);
            throw "Unknown comparison : " + i;
          },
          evaluate: function (e) {
            return t.unifiedEval(this, e);
          },
        };
      }
      return r;
    }),
    y.addGrammarElement("comparisonExpression", function (e, t, n) {
      return e.parseAnyOf(["comparisonOperator", "mathExpression"], n);
    }),
    y.addGrammarElement("logicalOperator", function (e, t, n) {
      var r,
        o = e.parseElement("comparisonExpression", n),
        i = null;
      r = n.matchToken("and") || n.matchToken("or");
      for (
        var a = function () {
          (i = i || r).value !== r.value &&
            e.raiseParseError(n, "You must parenthesize logical operations with different operators"),
            (u = e.requireElement("comparisonExpression", n));
          var a = r.value;
          (o = {
            type: "logicalOperator",
            operator: a,
            lhs: o,
            rhs: u,
            args: [o, u],
            op: function (e, t, n) {
              return "and" === a ? t && n : t || n;
            },
            evaluate: function (e) {
              return t.unifiedEval(this, e);
            },
          }),
            (r = n.matchToken("and") || n.matchToken("or"));
        };
        r;

      ) {
        var u;
        a();
      }
      return o;
    }),
    y.addGrammarElement("logicalExpression", function (e, t, n) {
      return e.parseAnyOf(["logicalOperator", "mathExpression"], n);
    }),
    y.addGrammarElement("asyncExpression", function (e, t, n) {
      return n.matchToken("async")
        ? {
            type: "asyncExpression",
            value: e.requireElement("logicalExpression", n),
            evaluate: function (e) {
              return { asyncWrapper: !0, value: this.value.evaluate(e) };
            },
          }
        : e.parseElement("logicalExpression", n);
    }),
    y.addGrammarElement("expression", function (e, t, n) {
      return n.matchToken("the"), e.parseElement("asyncExpression", n);
    }),
    y.addGrammarElement("assignableExpression", function (e, t, n) {
      n.matchToken("the");
      var r = e.parseElement("primaryExpression", n);
      return !r ||
        ("symbol" !== r.type &&
          "ofExpression" !== r.type &&
          "propertyAccess" !== r.type &&
          "attributeRefAccess" !== r.type &&
          "attributeRef" !== r.type &&
          "styleRef" !== r.type &&
          "possessive" !== r.type)
        ? (y.raiseParseError(
            n,
            "A target expression must be writable.  The expression type '" + (r && r.type) + "' is not."
          ),
          r)
        : r;
    }),
    y.addGrammarElement("hyperscript", function (e, t, n) {
      var r = [];
      if (n.hasMore())
        for (; e.featureStart(n.currentToken()) || "(" === n.currentToken().value; ) {
          var o = e.requireElement("feature", n);
          r.push(o), n.matchToken("end");
        }
      return {
        type: "hyperscript",
        features: r,
        apply: function (e, t, n) {
          for (var o, i = l(r); !(o = i()).done; ) o.value.install(e, t, n);
        },
      };
    });
  var N = function (e) {
    var t = [];
    if (
      "(" === e.token(0).value &&
      (")" === e.token(1).value || "," === e.token(2).value || ")" === e.token(2).value)
    ) {
      e.matchOpToken("(");
      do {
        t.push(e.requireTokenType("IDENTIFIER"));
      } while (e.matchOpToken(","));
      e.requireOpToken(")");
    }
    return t;
  };
  y.addFeature("on", function (e, t, n) {
    if (n.matchToken("on")) {
      var r = !1;
      n.matchToken("every") && (r = !0);
      var o = [],
        i = null;
      do {
        var a = e.requireElement("eventName", n, "Expected event name").evaluate();
        i = i ? i + " or " + a : "on " + a;
        var u = N(n),
          s = null;
        if (
          (n.matchOpToken("[") && ((s = e.requireElement("expression", n)), n.requireOpToken("]")),
          "NUMBER" === n.currentToken().type)
        ) {
          var f = n.consumeToken(),
            m = parseInt(f.value);
          if (n.matchToken("to"))
            var p = n.consumeToken(),
              d = parseInt(p.value);
          else if (n.matchToken("and")) {
            var h = !0;
            n.requireToken("on");
          }
        }
        if ("intersection" === a) {
          var v = {};
          if ((n.matchToken("with") && (v.with = e.requireElement("expression", n).evaluate()), n.matchToken("having")))
            do {
              n.matchToken("margin")
                ? (v.rootMargin = e.requireElement("stringLike", n).evaluate())
                : n.matchToken("threshold")
                  ? (v.threshold = e.requireElement("expression", n).evaluate())
                  : e.raiseParseError(n, "Unknown intersection config specification");
            } while (n.matchToken("and"));
        } else if ("mutation" === a) {
          var y = {};
          if (n.matchToken("of"))
            do {
              if (n.matchToken("anything"))
                (y.attributes = !0), (y.subtree = !0), (y.characterData = !0), (y.childList = !0);
              else if (n.matchToken("childList")) y.childList = !0;
              else if (n.matchToken("attributes")) (y.attributes = !0), (y.attributeOldValue = !0);
              else if (n.matchToken("subtree")) y.subtree = !0;
              else if (n.matchToken("characterData")) (y.characterData = !0), (y.characterDataOldValue = !0);
              else if ("ATTRIBUTE_REF" === n.currentToken().type) {
                var E = n.consumeToken();
                null == y.attributeFilter && (y.attributeFilter = []),
                  0 == E.value.indexOf("@")
                    ? y.attributeFilter.push(E.value.substring(1))
                    : e.raiseParseError(n, "Only shorthand attribute references are allowed here");
              } else e.raiseParseError(n, "Unknown mutation config specification");
            } while (n.matchToken("or"));
          else (y.attributes = !0), (y.characterData = !0), (y.childList = !0);
        }
        var k = null,
          g = !1;
        if (
          (n.matchToken("from") &&
            (n.matchToken("elsewhere")
              ? (g = !0)
              : (k = e.parseElement("expression", n)) ||
                e.raiseParseError(n, 'Expected either target value or "elsewhere".')),
          null === k && !1 === g && n.matchToken("elsewhere") && (g = !0),
          n.matchToken("in"))
        )
          var x = e.parseAnyOf(["idRef", "queryRef", "classRef"], n);
        if (n.matchToken("debounced")) {
          n.requireToken("at");
          var b = e.requireElement("expression", n).evaluate({});
        } else if (n.matchToken("throttled")) {
          n.requireToken("at");
          var w = e.requireElement("expression", n).evaluate({});
        }
        o.push({
          execCount: 0,
          every: r,
          on: a,
          args: u,
          filter: s,
          from: k,
          inExpr: x,
          elsewhere: g,
          startCount: m,
          endCount: d,
          unbounded: h,
          debounceTime: b,
          throttleTime: w,
          mutationSpec: y,
          intersectionSpec: v,
          debounced: void 0,
          lastExec: void 0,
        });
      } while (n.matchToken("or"));
      var q = !0;
      if (!r && n.matchToken("queue"))
        if (n.matchToken("all")) q = !1;
        else if (n.matchToken("first")) var S = !0;
        else if (n.matchToken("none")) var C = !0;
        else n.requireToken("last");
      var L = e.requireElement("commandList", n);
      if ((e.ensureTerminated(L), n.matchToken("catch"))) {
        var O = n.requireTokenType("IDENTIFIER").value,
          R = e.requireElement("commandList", n);
        e.ensureTerminated(R);
      }
      if (n.matchToken("finally")) {
        var I = e.requireElement("commandList", n);
        e.ensureTerminated(I);
      }
      var A = {
        displayName: i,
        events: o,
        start: L,
        every: r,
        execCount: 0,
        errorHandler: R,
        errorSymbol: O,
        execute: function (e) {
          var n = t.getEventQueueFor(e.me, A);
          if (n.executing && !1 === r) {
            if (C || (S && n.queue.length > 0)) return;
            return q && (n.queue.length = 0), void n.queue.push(e);
          }
          A.execCount++,
            (n.executing = !0),
            (e.meta.onHalt = function () {
              n.executing = !1;
              var e = n.queue.shift();
              e &&
                setTimeout(function () {
                  A.execute(e);
                }, 1);
            }),
            (e.meta.reject = function (n) {
              console.error(n.message ? n.message : n);
              var r = t.getHyperTrace(e, n);
              r && r.print(), t.triggerEvent(e.me, "exception", { error: n });
            }),
            L.execute(e);
        },
        install: function (e, n) {
          for (
            var r,
              o = function () {
                var n = r.value;
                (a = n.elsewhere ? [document] : n.from ? n.from.evaluate(t.makeContext(e, A, e, null)) : [e]),
                  t.implicitLoop(a, function (r) {
                    var o = n.on;
                    if (
                      (n.mutationSpec &&
                        ((o = "hyperscript:mutation"),
                        new MutationObserver(function (e, t) {
                          A.executing || T.triggerEvent(r, o, { mutationList: e, observer: t });
                        }).observe(r, n.mutationSpec)),
                      n.intersectionSpec)
                    ) {
                      o = "hyperscript:insersection";
                      var i = new IntersectionObserver(function (e) {
                        for (var t, n = l(e); !(t = n()).done; ) {
                          var a = t.value,
                            u = { observer: i };
                          ((u = c(u, a)).intersecting = a.isIntersecting), T.triggerEvent(r, o, u);
                        }
                      }, n.intersectionSpec);
                      i.observe(r);
                    }
                    (r.addEventListener || r.on).call(r, o, function i(a) {
                      if ("undefined" != typeof Node && e instanceof Node && r !== e && !e.isConnected)
                        r.removeEventListener(o, i);
                      else {
                        var u = t.makeContext(e, A, e, a);
                        if (!n.elsewhere || !e.contains(a.target)) {
                          n.from && (u.result = r);
                          for (var s, c = l(n.args); !(s = c()).done; ) {
                            var f = s.value,
                              m = u.event[f.value];
                            void 0 !== m
                              ? (u[f.value] = m)
                              : ("detail" in u.event) && (u[f.value] = u.event.detail[f.value]);
                          }
                          if (
                            ((u.meta.errorHandler = R), (u.meta.errorSymbol = O), (u.meta.finallyHandler = I), n.filter)
                          ) {
                            var p = u.meta.context;
                            u.meta.context = u.event;
                            try {
                              if (!n.filter.evaluate(u)) return;
                            } finally {
                              u.meta.context = p;
                            }
                          }
                          if (n.inExpr)
                            for (var d = a.target; ; ) {
                              if (d.matches && d.matches(n.inExpr.css)) {
                                u.result = d;
                                break;
                              }
                              if (null == (d = d.parentElement)) return;
                            }
                          if ((n.execCount++, n.startCount))
                            if (n.endCount) {
                              if (n.execCount < n.startCount || n.execCount > n.endCount) return;
                            } else if (n.unbounded) {
                              if (n.execCount < n.startCount) return;
                            } else if (n.execCount !== n.startCount) return;
                          if (n.debounceTime)
                            return (
                              n.debounced && clearTimeout(n.debounced),
                              void (n.debounced = setTimeout(function () {
                                A.execute(u);
                              }, n.debounceTime))
                            );
                          if (n.throttleTime) {
                            if (n.lastExec && Date.now() < n.lastExec + n.throttleTime) return;
                            n.lastExec = Date.now();
                          }
                          A.execute(u);
                        }
                      }
                    });
                  });
              },
              i = l(A.events);
            !(r = i()).done;

          ) {
            var a;
            o();
          }
        },
      };
      return e.setParent(L, A), A;
    }
  }),
    y.addFeature("def", function (e, t, n) {
      if (n.matchToken("def")) {
        var r = e.requireElement("dotOrColonPath", n).evaluate(),
          o = r.split("."),
          i = o.pop(),
          a = [];
        if (n.matchOpToken("("))
          if (n.matchOpToken(")"));
          else {
            do {
              a.push(n.requireTokenType("IDENTIFIER"));
            } while (n.matchOpToken(","));
            n.requireOpToken(")");
          }
        var u = e.requireElement("commandList", n);
        if (n.matchToken("catch"))
          var s = n.requireTokenType("IDENTIFIER").value,
            l = e.parseElement("commandList", n);
        if (n.matchToken("finally")) {
          var c = e.requireElement("commandList", n);
          e.ensureTerminated(c);
        }
        var f = {
          displayName:
            i +
            "(" +
            a
              .map(function (e) {
                return e.value;
              })
              .join(", ") +
            ")",
          name: i,
          args: a,
          start: u,
          errorHandler: l,
          errorSymbol: s,
          finallyHandler: c,
          install: function (e, n) {
            var m = function () {
              var r = t.makeContext(n, f, e, null);
              (r.meta.errorHandler = l), (r.meta.errorSymbol = s), (r.meta.finallyHandler = c);
              for (var o = 0; o < a.length; o++) {
                var i = a[o],
                  m = arguments[o];
                i && (r[i.value] = m);
              }
              (r.meta.caller = arguments[a.length]),
                r.meta.caller && (r.meta.callingCommand = r.meta.caller.meta.command);
              var p,
                d = null,
                h = new Promise(function (e, t) {
                  (p = e), (d = t);
                });
              return (
                u.execute(r), r.meta.returned ? r.meta.returnValue : ((r.meta.resolve = p), (r.meta.reject = d), h)
              );
            };
            (m.hyperfunc = !0), (m.hypername = r), t.assignToNamespace(e, o, i, m);
          },
        };
        return e.ensureTerminated(u), l && e.ensureTerminated(l), e.setParent(u, f), f;
      }
    }),
    y.addFeature("set", function (e, t, n) {
      var r = e.parseElement("setCommand", n);
      if (r) {
        "element" !== r.target.scope &&
          e.raiseParseError(n, "variables declared at the feature level must be element scoped.");
        var o = {
          start: r,
          install: function (e, n) {
            r && r.execute(t.makeContext(e, o, e, null));
          },
        };
        return e.ensureTerminated(r), o;
      }
    }),
    y.addFeature("init", function (e, t, n) {
      if (n.matchToken("init")) {
        var r = e.requireElement("commandList", n),
          o = {
            start: r,
            install: function (e, n) {
              setTimeout(function () {
                r && r.execute(t.makeContext(e, o, e, null));
              }, 0);
            },
          };
        return e.ensureTerminated(r), e.setParent(r, o), o;
      }
    }),
    y.addFeature("worker", function (e, t, n) {
      n.matchToken("worker") &&
        e.raiseParseError(
          n,
          "In order to use the 'worker' feature, include the _hyperscript worker plugin. See https://hyperscript.org/features/worker/ for more info."
        );
    }),
    y.addFeature("behavior", function (e, t, n) {
      if (n.matchToken("behavior")) {
        var r = e.requireElement("dotOrColonPath", n).evaluate(),
          o = r.split("."),
          i = o.pop(),
          a = [];
        if (n.matchOpToken("(") && !n.matchOpToken(")")) {
          do {
            a.push(n.requireTokenType("IDENTIFIER").value);
          } while (n.matchOpToken(","));
          n.requireOpToken(")");
        }
        for (var u = e.requireElement("hyperscript", n), s = 0; s < u.features.length; s++) u.features[s].behavior = r;
        return {
          install: function (e, n) {
            t.assignToNamespace(d.document && d.document.body, o, i, function (e, n, o) {
              for (var i = f(t.getInternalData(e), r + "Scope"), s = 0; s < a.length; s++) i[a[s]] = o[a[s]];
              u.apply(e, n);
            });
          },
        };
      }
    }),
    y.addFeature("install", function (e, t, n) {
      if (n.matchToken("install")) {
        var r,
          o = e.requireElement("dotOrColonPath", n).evaluate(),
          i = o.split("."),
          a = e.parseElement("namedArgumentList", n);
        return (r = {
          install: function (e, n) {
            t.unifiedEval(
              {
                args: [a],
                op: function (t, r) {
                  for (var a = d, u = 0; u < i.length; u++)
                    if ("object" != typeof (a = a[i[u]]) && "function" != typeof a)
                      throw new Error("No such behavior defined as " + o);
                  if (!(a instanceof Function)) throw new Error(o + " is not a behavior");
                  a(e, n, r);
                },
              },
              t.makeContext(e, r, e)
            );
          },
        });
      }
    }),
    y.addGrammarElement("jsBody", function (e, t, n) {
      for (var r = n.currentToken().start, o = n.currentToken(), i = [], a = "", u = !1; n.hasMore(); ) {
        o = n.consumeToken();
        var s = n.token(0, !0);
        if ("IDENTIFIER" === s.type && "end" === s.value) break;
        u
          ? "IDENTIFIER" === o.type || "NUMBER" === o.type
            ? (a += o.value)
            : ("" !== a && i.push(a), (a = ""), (u = !1))
          : "IDENTIFIER" === o.type && "function" === o.value && (u = !0);
      }
      return { type: "jsBody", exposedFunctionNames: i, jsSource: n.source.substring(r, o.end + 1) };
    }),
    y.addFeature("js", function (e, t, n) {
      if (n.matchToken("js")) {
        var r = e.requireElement("jsBody", n),
          o =
            r.jsSource +
            "\nreturn { " +
            r.exposedFunctionNames
              .map(function (e) {
                return e + ":" + e;
              })
              .join(",") +
            " } ",
          i = new Function(o);
        return {
          jsSource: o,
          function: i,
          exposedFunctionNames: r.exposedFunctionNames,
          install: function () {
            c(d, i());
          },
        };
      }
    }),
    y.addCommand("js", function (e, t, n) {
      if (n.matchToken("js")) {
        var r = [];
        if (n.matchOpToken("("))
          if (n.matchOpToken(")"));
          else {
            do {
              var o = n.requireTokenType("IDENTIFIER");
              r.push(o.value);
            } while (n.matchOpToken(","));
            n.requireOpToken(")");
          }
        var i = e.requireElement("jsBody", n);
        n.matchToken("end");
        var a = m(Function, r.concat([i.jsSource]));
        return {
          jsSource: i.jsSource,
          function: a,
          inputs: r,
          op: function (e) {
            var n = [];
            r.forEach(function (r) {
              n.push(t.resolveSymbol(r, e, "default"));
            });
            var o = a.apply(d, n);
            return o && "function" == typeof o.then
              ? new Promise(function (n) {
                  o.then(function (r) {
                    (e.result = r), n(t.findNext(this, e));
                  });
                })
              : ((e.result = o), t.findNext(this, e));
          },
        };
      }
    }),
    y.addCommand("async", function (e, t, n) {
      if (n.matchToken("async")) {
        if (n.matchToken("do")) {
          for (var r = (o = e.requireElement("commandList", n)); r.next; ) r = r.next;
          (r.next = t.HALT), n.requireToken("end");
        } else var o = e.requireElement("command", n);
        var i = {
          body: o,
          op: function (e) {
            return (
              setTimeout(function () {
                o.execute(e);
              }),
              t.findNext(this, e)
            );
          },
        };
        return e.setParent(o, i), i;
      }
    }),
    y.addCommand("tell", function (e, t, n) {
      var r = n.currentToken();
      if (n.matchToken("tell")) {
        var o = e.requireElement("expression", n),
          i = e.requireElement("commandList", n);
        n.hasMore() && !e.featureStart(n.currentToken()) && n.requireToken("end");
        var a = "tell_" + r.start,
          u = {
            value: o,
            body: i,
            args: [o],
            resolveNext: function (e) {
              var n = e.meta.iterators[a];
              return n.index < n.value.length
                ? ((e.beingTold = n.value[n.index++]), i)
                : ((e.beingTold = n.originalBeingTold), this.next ? this.next : t.findNext(this.parent, e));
            },
            op: function (e, t) {
              return (
                null == t ? (t = []) : Array.isArray(t) || t instanceof NodeList || (t = [t]),
                (e.meta.iterators[a] = { originalBeingTold: e.beingTold, index: 0, value: t }),
                this.resolveNext(e)
              );
            },
          };
        return e.setParent(i, u), u;
      }
    }),
    y.addCommand("wait", function (e, t, n) {
      if (n.matchToken("wait")) {
        var r, o;
        if (n.matchToken("for")) {
          n.matchToken("a");
          var i = [];
          do {
            var a = n.token(0);
            i.push(
              "NUMBER" === a.type || "L_PAREN" === a.type
                ? { time: e.requireElement("expression", n).evaluate() }
                : { name: y.requireElement("dotOrColonPath", n, "Expected event name").evaluate(), args: N(n) }
            );
          } while (n.matchToken("or"));
          if (n.matchToken("from")) var u = e.requireElement("expression", n);
          return (
            (r = {
              event: i,
              on: u,
              args: [u],
              op: function (e, n) {
                var r = this,
                  o = n || e.me;
                if (!(o instanceof EventTarget)) throw new Error("Not a valid event target: " + this.on.sourceFor());
                return new Promise(function (n) {
                  for (
                    var a,
                      u = !1,
                      s = function () {
                        var i = a.value;
                        (f = function (o) {
                          if (((e.result = o), i.args))
                            for (var a, s = l(i.args); !(a = s()).done; ) {
                              var c = a.value;
                              e[c.value] = o[c.value] || (o.detail ? o.detail[c.value] : null);
                            }
                          u || ((u = !0), n(t.findNext(r, e)));
                        }),
                          i.name
                            ? o.addEventListener(i.name, f, { once: !0 })
                            : null != i.time && setTimeout(f, i.time, i.time);
                      },
                      c = l(i);
                    !(a = c()).done;

                  ) {
                    var f;
                    s();
                  }
                });
              },
            }),
            r
          );
        }
        return (
          n.matchToken("a") ? (n.requireToken("tick"), (o = 0)) : (o = y.requireElement("expression", n)),
          {
            type: "waitCmd",
            time: o,
            args: [o],
            op: function (e, n) {
              var r = this;
              return new Promise(function (o) {
                setTimeout(function () {
                  o(t.findNext(r, e));
                }, n);
              });
            },
            execute: function (e) {
              return t.unifiedExec(this, e);
            },
          }
        );
      }
    }),
    y.addGrammarElement("dotOrColonPath", function (e, t, n) {
      var r = n.matchTokenType("IDENTIFIER");
      if (r) {
        var o = [r.value],
          i = n.matchOpToken(".") || n.matchOpToken(":");
        if (i)
          do {
            o.push(n.requireTokenType("IDENTIFIER", "NUMBER").value);
          } while (n.matchOpToken(i.value));
        return {
          type: "dotOrColonPath",
          path: o,
          evaluate: function () {
            return o.join(i ? i.value : "");
          },
        };
      }
    }),
    y.addGrammarElement("eventName", function (e, t, n) {
      var r;
      return (r = n.matchTokenType("STRING"))
        ? {
            evaluate: function () {
              return r.value;
            },
          }
        : e.parseElement("dotOrColonPath", n);
    }),
    y.addCommand("trigger", function (e, t, n) {
      if (n.matchToken("trigger")) return x("trigger", e, t, n);
    }),
    y.addCommand("send", function (e, t, n) {
      if (n.matchToken("send")) return x("send", e, t, n);
    });
  var C = function (e, t, n, r) {
    if (r)
      if (e.commandBoundary(n.currentToken()))
        e.raiseParseError(
          n,
          "'return' commands must return a value.  If you do not wish to return a value, use 'exit' instead."
        );
      else var o = e.requireElement("expression", n);
    var i = {
      value: o,
      args: [o],
      op: function (e, n) {
        var r = e.meta.resolve;
        return (e.meta.returned = !0), (e.meta.returnValue = n), r && (n ? r(n) : r()), t.HALT;
      },
    };
    return i;
  };
  y.addCommand("return", function (e, t, n) {
    if (n.matchToken("return")) return C(e, t, n, !0);
  }),
    y.addCommand("exit", function (e, t, n) {
      if (n.matchToken("exit")) return C(e, t, n, !1);
    }),
    y.addCommand("halt", function (e, t, n) {
      if (n.matchToken("halt")) {
        if (n.matchToken("the")) {
          n.requireToken("event"), n.matchOpToken("'") && n.requireToken("s");
          var r = !0;
        }
        if (n.matchToken("bubbling")) var o = !0;
        else if (n.matchToken("default")) var i = !0;
        var a = C(e, t, n, !1);
        return {
          keepExecuting: !0,
          bubbling: o,
          haltDefault: i,
          exit: a,
          op: function (e) {
            if (e.event)
              return (
                o ? e.event.stopPropagation() : (i || e.event.stopPropagation(), e.event.preventDefault()),
                r ? t.findNext(this, e) : a
              );
          },
        };
      }
    }),
    y.addCommand("log", function (e, t, n) {
      if (n.matchToken("log")) {
        for (var r = [e.parseElement("expression", n)]; n.matchOpToken(","); )
          r.push(e.requireElement("expression", n));
        if (n.matchToken("with")) var o = e.requireElement("expression", n);
        var i = {
          exprs: r,
          withExpr: o,
          args: [o, r],
          op: function (e, n, r) {
            return n ? n.apply(null, r) : console.log.apply(null, r), t.findNext(this, e);
          },
        };
        return i;
      }
    }),
    y.addCommand("throw", function (e, t, n) {
      if (n.matchToken("throw")) {
        var r = e.requireElement("expression", n),
          o = {
            expr: r,
            args: [r],
            op: function (e, n) {
              throw (t.registerHyperTrace(e, n), n);
            },
          };
        return o;
      }
    });
  var L = function (e, t, n) {
    var r = e.requireElement("expression", n),
      o = {
        expr: r,
        args: [r],
        op: function (e, n) {
          return (e.result = n), t.findNext(o, e);
        },
      };
    return o;
  };
  y.addCommand("call", function (e, t, n) {
    if (n.matchToken("call")) {
      var r = L(e, t, n);
      return r.expr && "functionCall" !== r.expr.type && e.raiseParseError(n, "Must be a function invocation"), r;
    }
  }),
    y.addCommand("get", function (e, t, n) {
      if (n.matchToken("get")) return L(e, t, n);
    }),
    y.addCommand("make", function (e, t, n) {
      if (n.matchToken("make")) {
        n.matchToken("a") || n.matchToken("an");
        var r,
          o = e.requireElement("expression", n),
          i = [];
        if ("queryRef" !== o.type && n.matchToken("from"))
          do {
            i.push(e.requireElement("expression", n));
          } while (n.matchOpToken(","));
        if (n.matchToken("called")) var a = n.requireTokenType("IDENTIFIER").value;
        return "queryRef" === o.type
          ? (r = {
              op: function (e) {
                for (var n, r, i = "div", u = [], s = /(?:(^|#|\.)([^#\. ]+))/g; (n = s.exec(o.css)); )
                  "" === n[1] ? (i = n[2].trim()) : "#" === n[1] ? (r = n[2].trim()) : u.push(n[2].trim());
                var l = document.createElement(i);
                void 0 !== r && (l.id = r);
                for (var c = 0; c < u.length; c++) l.classList.add(u[c]);
                return (e.result = l), a && (e[a] = l), t.findNext(this, e);
              },
            })
          : ((r = {
              args: [o, i],
              op: function (e, n, r) {
                return (e.result = m(n, r)), a && (e[a] = e.result), t.findNext(this, e);
              },
            }),
            r);
      }
    }),
    y.addGrammarElement("pseudoCommand", function (e, t, n) {
      var r = n.token(1);
      if (!r || !r.op || ("." !== r.value && "(" !== r.value)) return null;
      for (var o = e.requireElement("primaryExpression", n), i = o.root, a = o; null != i.root; )
        (a = a.root), (i = i.root);
      if (
        ("functionCall" !== o.type && e.raiseParseError(n, "Pseudo-commands must be function calls"),
        "functionCall" === a.type && null == a.root.root)
      )
        if (n.matchAnyToken("the", "to", "on", "with", "into", "from", "at")) var u = e.requireElement("expression", n);
        else n.matchToken("me") && (u = e.requireElement("implicitMeTarget", n));
      if (u)
        var s = {
          type: "pseudoCommand",
          root: u,
          argExressions: a.argExressions,
          args: [u, a.argExressions],
          op: function (e, n, r) {
            t.nullCheck(n, u);
            var o = n[a.root.name];
            return t.nullCheck(o, a), o.hyperfunc && r.push(e), (e.result = o.apply(n, r)), t.findNext(s, e);
          },
          execute: function (e) {
            return t.unifiedExec(this, e);
          },
        };
      else
        s = {
          type: "pseudoCommand",
          expr: o,
          args: [o],
          op: function (e, n) {
            return (e.result = n), t.findNext(s, e);
          },
          execute: function (e) {
            return t.unifiedExec(this, e);
          },
        };
      return s;
    });
  var O = function (e, t, n, r, o) {
    var i = "symbol" === r.type,
      a = "attributeRef" === r.type,
      u = "styleRef" === r.type;
    a || u || i || null != r.root || e.raiseParseError(n, "Can only put directly into symbols, not references");
    var s = null,
      l = null;
    if (i);
    else if (a || u) {
      s = e.requireElement("implicitMeTarget", n);
      var c = r;
    } else (l = r.prop ? r.prop.value : null), (c = r.attribute), (s = r.root);
    return {
      target: r,
      symbolWrite: i,
      value: o,
      args: [s, o],
      op: function (e, n, o) {
        return (
          i
            ? t.setSymbol(r.name, e, r.scope, o)
            : (t.nullCheck(n, s),
              t.implicitLoop(n, function (e) {
                c
                  ? "attributeRef" === c.type
                    ? null == o
                      ? e.removeAttribute(c.name)
                      : e.setAttribute(c.name, o)
                    : (e.style[c.name] = o)
                  : (e[l] = o);
              })),
          t.findNext(this, e)
        );
      },
    };
  };
  y.addCommand("default", function (e, t, n) {
    if (n.matchToken("default")) {
      var r = e.requireElement("assignableExpression", n);
      n.requireToken("to");
      var o = e.requireElement("expression", n),
        i = O(e, t, n, r, o),
        a = {
          target: r,
          value: o,
          setter: i,
          args: [r],
          op: function (e, n) {
            return n ? t.findNext(this, e) : i;
          },
        };
      return (i.parent = a), a;
    }
  }),
    y.addCommand("set", function (e, t, n) {
      if (n.matchToken("set")) {
        if ("L_BRACE" === n.currentToken().type) {
          var r = e.requireElement("objectLiteral", n);
          n.requireToken("on");
          var o = {
            objectLiteral: r,
            target: (i = e.requireElement("expression", n)),
            args: [r, i],
            op: function (e, n, r) {
              return c(r, n), t.findNext(this, e);
            },
          };
          return o;
        }
        try {
          n.pushFollow("to");
          var i = e.requireElement("assignableExpression", n);
        } finally {
          n.popFollow();
        }
        n.requireToken("to");
        var a = e.requireElement("expression", n);
        return O(e, t, n, i, a);
      }
    }),
    y.addCommand("if", function (e, t, n) {
      if (n.matchToken("if")) {
        var r = e.requireElement("expression", n);
        n.matchToken("then");
        var o = e.parseElement("commandList", n);
        if (n.matchToken("else") || n.matchToken("otherwise")) var i = e.parseElement("commandList", n);
        n.hasMore() && n.requireToken("end");
        var a = {
          expr: r,
          trueBranch: o,
          falseBranch: i,
          args: [r],
          op: function (e, n) {
            return n ? o : i || t.findNext(this, e);
          },
        };
        return e.setParent(o, a), e.setParent(i, a), a;
      }
    });
  var R = function (e, t, n, r) {
    var o,
      i = t.currentToken();
    if (t.matchToken("for") || r) {
      var a = t.requireTokenType("IDENTIFIER");
      (o = a.value), t.requireToken("in");
      var u = e.requireElement("expression", t);
    } else if (t.matchToken("in")) (o = "it"), (u = e.requireElement("expression", t));
    else if (t.matchToken("while")) var s = e.requireElement("expression", t);
    else if (t.matchToken("until")) {
      var l = !0;
      if (t.matchToken("event")) {
        var c = y.requireElement("dotOrColonPath", t, "Expected event name");
        if (t.matchToken("from")) var f = e.requireElement("expression", t);
      } else s = e.requireElement("expression", t);
    } else if (e.commandBoundary(t.currentToken()) || "forever" === t.currentToken().value) {
      t.matchToken("forever");
      var m = !0;
    } else {
      var p = e.requireElement("expression", t);
      t.requireToken("times");
    }
    if (t.matchToken("index")) var d = (a = t.requireTokenType("IDENTIFIER")).value;
    var h = e.parseElement("commandList", t);
    if (h && c) {
      for (var v = h; v.next; ) v = v.next;
      var E = {
        type: "waitATick",
        op: function () {
          return new Promise(function (e) {
            setTimeout(function () {
              e(n.findNext(E));
            }, 0);
          });
        },
      };
      v.next = E;
    }
    if ((t.hasMore() && t.requireToken("end"), null == o)) var T = (o = "_implicit_repeat_" + i.start);
    else T = o + "_" + i.start;
    var k = {
      identifier: o,
      indexIdentifier: d,
      slot: T,
      expression: u,
      forever: m,
      times: p,
      until: l,
      event: c,
      on: f,
      whileExpr: s,
      resolveNext: function () {
        return this;
      },
      loop: h,
      args: [s, p],
      op: function (e, t, r) {
        var i = e.meta.iterators[T],
          a = !1,
          u = null;
        if (this.forever) a = !0;
        else if (this.until) a = c ? !1 === e.meta.iterators[T].eventFired : !0 !== t;
        else if (s) a = t;
        else if (r) a = i.index < r;
        else {
          var l = i.iterator.next();
          (a = !l.done), (u = l.value);
        }
        return a
          ? ((e.result = i.value ? (e[o] = u) : i.index), d && (e[d] = i.index), i.index++, h)
          : ((e.meta.iterators[T] = null), n.findNext(this.parent, e));
      },
    };
    e.setParent(h, k);
    var g = {
      name: "repeatInit",
      args: [u, c, f],
      op: function (e, t, n, r) {
        var o = { index: 0, value: t, eventFired: !1 };
        return (
          (e.meta.iterators[T] = o),
          t && t[Symbol.iterator] && (o.iterator = t[Symbol.iterator]()),
          c &&
            (r || e.me).addEventListener(
              n,
              function (t) {
                e.meta.iterators[T].eventFired = !0;
              },
              { once: !0 }
            ),
          k
        );
      },
      execute: function (e) {
        return n.unifiedExec(this, e);
      },
    };
    return e.setParent(k, g), g;
  };
  if (
    (y.addCommand("repeat", function (e, t, n) {
      if (n.matchToken("repeat")) return R(e, n, t, !1);
    }),
    y.addCommand("for", function (e, t, n) {
      if (n.matchToken("for")) return R(e, n, t, !0);
    }),
    y.addCommand("continue", function (e, t, n) {
      if (n.matchToken("continue"))
        return {
          op: function (t) {
            for (var r = this.parent; ; r = r.parent)
              if (
                (null == r && e.raiseParseError(n, "Command `continue` cannot be used outside of a `repeat` loop."),
                null != r.loop)
              )
                return r.resolveNext(t);
          },
        };
    }),
    y.addCommand("break", function (e, t, n) {
      if (n.matchToken("break"))
        return {
          op: function (r) {
            for (var o = this.parent; ; o = o.parent)
              if (
                (null == o && e.raiseParseError(n, "Command `continue` cannot be used outside of a `repeat` loop."),
                null != o.loop)
              )
                return console.log(o), t.findNext(o.parent, r);
          },
        };
    }),
    y.addGrammarElement("stringLike", function (e, t, n) {
      return y.parseAnyOf(["string", "nakedString"], n);
    }),
    y.addCommand("append", function (e, t, n) {
      if (n.matchToken("append")) {
        var r,
          o = e.requireElement("expression", n),
          i = {
            type: "symbol",
            evaluate: function (e) {
              return t.resolveSymbol("result", e);
            },
          };
        r = n.matchToken("to") ? e.requireElement("expression", n) : i;
        var a = null;
        ("symbol" !== r.type && "attributeRef" !== r.type && null == r.root) || (a = O(e, t, n, r, i));
        var u = {
          value: o,
          target: r,
          args: [r, o],
          op: function (e, n, r) {
            if (Array.isArray(n)) return n.push(r), t.findNext(this, e);
            if (n instanceof Element) return (n.innerHTML += r), t.findNext(this, e);
            if (a) return (e.result = (n || "") + r), a;
            throw Error("Unable to append a value!");
          },
          execute: function (e) {
            return t.unifiedExec(this, e);
          },
        };
        return null != a && (a.parent = u), u;
      }
    }),
    y.addCommand("increment", function (e, t, n) {
      if (n.matchToken("increment")) {
        var r,
          o = e.parseElement("assignableExpression", n);
        n.matchToken("by") && (r = e.requireElement("expression", n));
        var i = {
          type: "implicitIncrementOp",
          target: o,
          args: [o, r],
          op: function (e, t, n) {
            var r = (t = t ? parseFloat(t) : 0) + (n = n ? parseFloat(n) : 1);
            return (e.result = r), r;
          },
          evaluate: function (e) {
            return t.unifiedEval(this, e);
          },
        };
        return O(e, t, n, o, i);
      }
    }),
    y.addCommand("decrement", function (e, t, n) {
      if (n.matchToken("decrement")) {
        var r,
          o = e.parseElement("assignableExpression", n);
        n.matchToken("by") && (r = e.requireElement("expression", n));
        var i = {
          type: "implicitDecrementOp",
          target: o,
          args: [o, r],
          op: function (e, t, n) {
            var r = (t = t ? parseFloat(t) : 0) - (n = n ? parseFloat(n) : 1);
            return (e.result = r), r;
          },
          evaluate: function (e) {
            return t.unifiedEval(this, e);
          },
        };
        return O(e, t, n, o, i);
      }
    }),
    y.addCommand("fetch", function (e, t, n) {
      if (n.matchToken("fetch")) {
        var r = e.requireElement("stringLike", n);
        if (n.matchToken("as")) var o = b(n, e);
        if (n.matchToken("with") && "{" !== n.currentToken().value) var i = e.parseElement("nakedNamedArgumentList", n);
        else i = e.parseElement("objectLiteral", n);
        null == o && n.matchToken("as") && (o = b(n, e));
        var a = o ? o.type : "text",
          u = o ? o.conversion : null,
          s = {
            url: r,
            argExpressions: i,
            args: [r, i],
            op: function (e, n, r) {
              var o = r || {};
              (o.sender = e.me), (o.headers = o.headers || {});
              var i = new AbortController(),
                l = e.me.addEventListener(
                  "fetch:abort",
                  function () {
                    i.abort();
                  },
                  { once: !0 }
                );
              (o.signal = i.signal),
                t.triggerEvent(e.me, "hyperscript:beforeFetch", o),
                t.triggerEvent(e.me, "fetch:beforeRequest", o);
              var c = !1;
              return (
                (r = o).timeout &&
                  setTimeout(function () {
                    c || i.abort();
                  }, r.timeout),
                fetch(n, r)
                  .then(function (n) {
                    var r = { response: n };
                    return (
                      t.triggerEvent(e.me, "fetch:afterResponse", r),
                      (n = r.response),
                      "response" === a
                        ? ((e.result = n),
                          t.triggerEvent(e.me, "fetch:afterRequest", { result: n }),
                          (c = !0),
                          t.findNext(s, e))
                        : "json" === a
                          ? n.json().then(function (n) {
                              return (
                                (e.result = n),
                                t.triggerEvent(e.me, "fetch:afterRequest", { result: n }),
                                (c = !0),
                                t.findNext(s, e)
                              );
                            })
                          : n.text().then(function (n) {
                              return (
                                u && (n = t.convertValue(n, u)),
                                "html" === a && (n = t.convertValue(n, "Fragment")),
                                (e.result = n),
                                t.triggerEvent(e.me, "fetch:afterRequest", { result: n }),
                                (c = !0),
                                t.findNext(s, e)
                              );
                            })
                    );
                  })
                  .catch(function (n) {
                    throw (t.triggerEvent(e.me, "fetch:error", { reason: n }), n);
                  })
                  .finally(function () {
                    e.me.removeEventListener("fetch:abort", l);
                  })
              );
            },
          };
        return s;
      }
    }),
    "document" in d)
  ) {
    var I = Array.from(document.querySelectorAll("script[type='text/hyperscript'][src]"));
    Promise.all(
      I.map(function (e) {
        return fetch(e.src)
          .then(function (e) {
            return e.text();
          })
          .then(function (e) {
            return T.evaluate(e);
          });
      })
    ).then(function () {
      var e;
      (e = function () {
        var e, t;
        (t = (e = document.querySelector('meta[name="htmx-config"]'))
          ? (function (e) {
              try {
                return JSON.parse(e);
              } catch (e) {
                return (t = e), console.error ? console.error(t) : console.log && console.log("ERROR: ", t), null;
              }
              var t;
            })(e.content)
          : null) && (p.config = c(p.config, t)),
          T.processNode(document.documentElement),
          document.addEventListener("htmx:load", function (e) {
            T.processNode(e.detail.elt);
          });
      }),
        "loading" !== document.readyState ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e);
    });
  }
  var A = (p = c(
    function (e, t) {
      return T.evaluate(e, t);
    },
    {
      internals: { lexer: v, parser: y, runtime: T },
      ElementCollection: h,
      addFeature: function (e, t) {
        y.addFeature(e, t);
      },
      addCommand: function (e, t) {
        y.addCommand(e, t);
      },
      addLeafExpression: function (e, t) {
        y.addLeafExpression(e, t);
      },
      addIndirectExpression: function (e, t) {
        y.addIndirectExpression(e, t);
      },
      evaluate: T.evaluate.bind(T),
      parse: T.parse.bind(T),
      processNode: T.processNode.bind(T),
      config: {
        attributes: "_, script, data-script",
        defaultTransition: "all 500ms ease-in",
        disableSelector: "[disable-scripting], [data-disable-scripting]",
        conversions: E,
      },
    }
  ));
  function F() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
      var t = (16 * Math.random()) | 0;
      return ("x" == e ? t : (3 & t) | 8).toString(16);
    });
  }
  function M(e) {
    return new WebSocket(e.evaluate());
  }
  function P(e) {
    return e.replace(/(?:^|\n)([^@]*)@?/gm, function (e, t) {
      return (
        "\ncall __ht_template_result.push(`" +
        (" " + t).replace(/([^\\])\$\{/g, "$1$${escape html ").substring(1) +
        "`)\n"
      );
    });
  }
  return (
    (function (e) {
      e.addCommand("settle", function (e, t, n) {
        if (n.matchToken("settle")) {
          if (e.commandBoundary(n.currentToken())) r = e.requireElement("implicitMeTarget", n);
          else var r = e.requireElement("expression", n);
          var o = {
            type: "settleCmd",
            args: [r],
            op: function (e, n) {
              t.nullCheck(n, r);
              var i = null,
                a = !1,
                u = new Promise(function (e) {
                  i = e;
                });
              return (
                n.addEventListener(
                  "transitionstart",
                  function () {
                    a = !0;
                  },
                  { once: !0 }
                ),
                setTimeout(function () {
                  a || i(t.findNext(o, e));
                }, 500),
                n.addEventListener(
                  "transitionend",
                  function () {
                    i(t.findNext(o, e));
                  },
                  { once: !0 }
                ),
                u
              );
            },
            execute: function (e) {
              return t.unifiedExec(this, e);
            },
          };
          return o;
        }
      }),
        e.addCommand("add", function (e, t, n) {
          if (n.matchToken("add")) {
            var r = e.parseElement("classRef", n),
              o = null,
              i = null;
            if (null == r)
              null == (o = e.parseElement("attributeRef", n)) &&
                null == (i = e.parseElement("styleLiteral", n)) &&
                e.raiseParseError(n, "Expected either a class reference or attribute expression");
            else for (var a = [r]; (r = e.parseElement("classRef", n)); ) a.push(r);
            if (n.matchToken("to")) var u = e.requireElement("expression", n);
            else u = e.requireElement("implicitMeTarget", n);
            return a
              ? {
                  classRefs: a,
                  to: u,
                  args: [u, a],
                  op: function (e, n, r) {
                    return (
                      t.nullCheck(n, u),
                      t.forEach(r, function (e) {
                        t.implicitLoop(n, function (t) {
                          t instanceof Element && t.classList.add(e.className);
                        });
                      }),
                      t.findNext(this, e)
                    );
                  },
                }
              : o
                ? {
                    type: "addCmd",
                    attributeRef: o,
                    to: u,
                    args: [u],
                    op: function (e, n, r) {
                      return (
                        t.nullCheck(n, u),
                        t.implicitLoop(n, function (e) {
                          e.setAttribute(o.name, o.value);
                        }),
                        t.findNext(this, e)
                      );
                    },
                    execute: function (e) {
                      return t.unifiedExec(this, e);
                    },
                  }
                : {
                    type: "addCmd",
                    cssDeclaration: i,
                    to: u,
                    args: [u, i],
                    op: function (e, n, r) {
                      return (
                        t.nullCheck(n, u),
                        t.implicitLoop(n, function (e) {
                          e.style.cssText += r;
                        }),
                        t.findNext(this, e)
                      );
                    },
                    execute: function (e) {
                      return t.unifiedExec(this, e);
                    },
                  };
          }
        }),
        e.internals.parser.addGrammarElement("styleLiteral", function (e, t, n) {
          if (n.matchOpToken("{")) {
            for (var r = [""], o = []; n.hasMore(); ) {
              if (n.matchOpToken("\\")) n.consumeToken();
              else {
                if (n.matchOpToken("}")) break;
                if (n.matchToken("$")) {
                  var i = n.matchOpToken("{"),
                    a = e.parseElement("expression", n);
                  i && n.requireOpToken("}"), o.push(a), r.push("");
                } else {
                  var u = n.consumeToken();
                  r[r.length - 1] += n.source.substring(u.start, u.end);
                }
              }
              r[r.length - 1] += n.lastWhitespace();
            }
            return {
              type: "styleLiteral",
              args: [o],
              op: function (e, t) {
                var n = "";
                return (
                  r.forEach(function (e, r) {
                    (n += e), r in t && (n += t[r]);
                  }),
                  n
                );
              },
              evaluate: function (e) {
                return t.unifiedEval(this, e);
              },
            };
          }
        }),
        e.addCommand("remove", function (e, t, n) {
          if (n.matchToken("remove")) {
            var r = e.parseElement("classRef", n),
              o = null,
              i = null;
            if (null == r)
              null == (o = e.parseElement("attributeRef", n)) &&
                null == (i = e.parseElement("expression", n)) &&
                e.raiseParseError(n, "Expected either a class reference, attribute expression or value expression");
            else for (var a = [r]; (r = e.parseElement("classRef", n)); ) a.push(r);
            if (n.matchToken("from")) var u = e.requireElement("expression", n);
            else u = e.requireElement("implicitMeTarget", n);
            return i
              ? {
                  elementExpr: i,
                  from: u,
                  args: [i],
                  op: function (e, n) {
                    return (
                      t.nullCheck(n, i),
                      t.implicitLoop(n, function (e) {
                        e.parentElement && e.parentElement.removeChild(e);
                      }),
                      t.findNext(this, e)
                    );
                  },
                }
              : {
                  classRefs: a,
                  attributeRef: o,
                  elementExpr: i,
                  from: u,
                  args: [a, u],
                  op: function (e, n, r) {
                    return (
                      t.nullCheck(r, u),
                      n
                        ? t.forEach(n, function (e) {
                            t.implicitLoop(r, function (t) {
                              t.classList.remove(e.className);
                            });
                          })
                        : t.implicitLoop(r, function (e) {
                            e.removeAttribute(o.name);
                          }),
                      t.findNext(this, e)
                    );
                  },
                };
          }
        }),
        e.addCommand("toggle", function (e, t, n) {
          if (n.matchToken("toggle")) {
            if ((n.matchAnyToken("the", "my"), "STYLE_REF" === n.currentToken().type)) {
              var o = n.consumeToken().value.substr(1),
                i = !0,
                a = r(e, n, o);
              if (n.matchToken("of")) {
                n.pushFollow("with");
                try {
                  var u = e.requireElement("expression", n);
                } finally {
                  n.popFollow();
                }
              } else u = e.requireElement("implicitMeTarget", n);
            } else if (n.matchToken("between")) {
              var s = !0,
                l = e.parseElement("classRef", n);
              n.requireToken("and");
              var c = e.requireElement("classRef", n);
            } else {
              l = e.parseElement("classRef", n);
              var f = null;
              if (null == l)
                null == (f = e.parseElement("attributeRef", n)) &&
                  e.raiseParseError(n, "Expected either a class reference or attribute expression");
              else for (var m = [l]; (l = e.parseElement("classRef", n)); ) m.push(l);
            }
            if (
              (!0 !== i &&
                (u = n.matchToken("on") ? e.requireElement("expression", n) : e.requireElement("implicitMeTarget", n)),
              n.matchToken("for"))
            )
              var p = e.requireElement("expression", n);
            else if (n.matchToken("until")) {
              var d = e.requireElement("dotOrColonPath", n, "Expected event name");
              if (n.matchToken("from")) var h = e.requireElement("expression", n);
            }
            var v = {
              classRef: l,
              classRef2: c,
              classRefs: m,
              attributeRef: f,
              on: u,
              time: p,
              evt: d,
              from: h,
              toggle: function (e, n, r, o) {
                t.nullCheck(e, u),
                  i
                    ? t.implicitLoop(e, function (e) {
                        a("toggle", e);
                      })
                    : s
                      ? t.implicitLoop(e, function (e) {
                          e.classList.contains(n.className)
                            ? (e.classList.remove(n.className), e.classList.add(r.className))
                            : (e.classList.add(n.className), e.classList.remove(r.className));
                        })
                      : o
                        ? t.forEach(o, function (n) {
                            t.implicitLoop(e, function (e) {
                              e.classList.toggle(n.className);
                            });
                          })
                        : t.forEach(e, function (e) {
                            e.hasAttribute(f.name) ? e.removeAttribute(f.name) : e.setAttribute(f.name, f.value);
                          });
              },
              args: [u, p, d, h, l, c, m],
              op: function (e, n, r, o, i, a, u, s) {
                return r
                  ? new Promise(function (o) {
                      v.toggle(n, a, u, s),
                        setTimeout(function () {
                          v.toggle(n, a, u, s), o(t.findNext(v, e));
                        }, r);
                    })
                  : o
                    ? new Promise(function (r) {
                        (i || e.me).addEventListener(
                          o,
                          function () {
                            v.toggle(n, a, u, s), r(t.findNext(v, e));
                          },
                          { once: !0 }
                        ),
                          v.toggle(n, a, u, s);
                      })
                    : (this.toggle(n, a, u, s), t.findNext(v, e));
              },
            };
            return v;
          }
        });
      var t = {
          display: function (n, r, o) {
            if (o) r.style.display = o;
            else if ("toggle" === n)
              "none" === getComputedStyle(r).display ? t.display("show", r, o) : t.display("hide", r, o);
            else if ("hide" === n) {
              var i = e.internals.runtime.getInternalData(r);
              null == i.originalDisplay && (i.originalDisplay = r.style.display), (r.style.display = "none");
            } else {
              var a = e.internals.runtime.getInternalData(r);
              a.originalDisplay && "none" !== a.originalDisplay
                ? (r.style.display = a.originalDisplay)
                : r.style.removeProperty("display");
            }
          },
          visibility: function (e, n, r) {
            r
              ? (n.style.visibility = r)
              : "toggle" === e
                ? "hidden" === getComputedStyle(n).visibility
                  ? t.visibility("show", n, r)
                  : t.visibility("hide", n, r)
                : (n.style.visibility = "hide" === e ? "hidden" : "visible");
          },
          opacity: function (e, n, r) {
            r
              ? (n.style.opacity = r)
              : "toggle" === e
                ? "0" === getComputedStyle(n).opacity
                  ? t.opacity("show", n, r)
                  : t.opacity("hide", n, r)
                : (n.style.opacity = "hide" === e ? "0" : "1");
          },
        },
        n = function (e, t, n) {
          var r = n.currentToken();
          return "when" === r.value || "with" === r.value || e.commandBoundary(r)
            ? e.parseElement("implicitMeTarget", n)
            : e.parseElement("expression", n);
        },
        r = function (n, r, o) {
          var i = e.config.defaultHideShowStrategy,
            a = t;
          e.config.hideShowStrategies && (a = c(a, e.config.hideShowStrategies));
          var u = a[(o = o || i || "display")];
          return null == u && n.raiseParseError(r, "Unknown show/hide strategy : " + o), u;
        };
      function o(t, n, r, o) {
        if (r) var i = t.resolveSymbol(r, n);
        else i = n;
        if (i instanceof Element || i instanceof HTMLDocument) {
          for (; i.firstChild; ) i.removeChild(i.firstChild);
          i.append(e.internals.runtime.convertValue(o, "Fragment"));
        } else {
          if (!r) throw "Don't know how to put a value into " + typeof n;
          t.setSymbol(r, n, null, o);
        }
      }
      function i(e, t, n) {
        var r;
        if (
          n.matchToken("the") ||
          n.matchToken("element") ||
          n.matchToken("elements") ||
          "CLASS_REF" === n.currentToken().type ||
          "ID_REF" === n.currentToken().type ||
          (n.currentToken().op && "<" === n.currentToken().value)
        ) {
          e.possessivesDisabled = !0;
          try {
            r = e.parseElement("expression", n);
          } finally {
            delete e.possessivesDisabled;
          }
          n.matchOpToken("'") && n.requireToken("s");
        } else if ("IDENTIFIER" === n.currentToken().type && "its" === n.currentToken().value) {
          var o = n.matchToken("its");
          r = {
            type: "pseudopossessiveIts",
            token: o,
            name: o.value,
            evaluate: function (e) {
              return t.resolveSymbol("it", e);
            },
          };
        } else n.matchToken("my") || n.matchToken("me"), (r = e.parseElement("implicitMeTarget", n));
        return r;
      }
      e.addCommand("hide", function (e, t, o) {
        if (o.matchToken("hide")) {
          var i = n(e, 0, o),
            a = null;
          o.matchToken("with") &&
            0 === (a = o.requireTokenType("IDENTIFIER", "STYLE_REF").value).indexOf("*") &&
            (a = a.substr(1));
          var u = r(e, o, a);
          return {
            target: i,
            args: [i],
            op: function (e, n) {
              return (
                t.nullCheck(n, i),
                t.implicitLoop(n, function (e) {
                  u("hide", e);
                }),
                t.findNext(this, e)
              );
            },
          };
        }
      }),
        e.addCommand("show", function (e, t, o) {
          if (o.matchToken("show")) {
            var i = n(e, 0, o),
              a = null;
            o.matchToken("with") &&
              0 === (a = o.requireTokenType("IDENTIFIER", "STYLE_REF").value).indexOf("*") &&
              (a = a.substr(1));
            var u = null;
            if (o.matchOpToken(":")) {
              var s = o.consumeUntilWhitespace();
              o.matchTokenType("WHITESPACE"),
                (u = s
                  .map(function (e) {
                    return e.value;
                  })
                  .join(""));
            }
            if (o.matchToken("when")) var l = e.requireElement("expression", o);
            var c = r(e, o, a);
            return {
              target: i,
              when: l,
              args: [i],
              op: function (e, n) {
                return (
                  t.nullCheck(n, i),
                  t.implicitLoop(n, function (n) {
                    l
                      ? ((e.result = n), t.evaluateNoPromise(l, e) ? c("show", n, u) : c("hide", n), (e.result = null))
                      : c("show", n, u);
                  }),
                  t.findNext(this, e)
                );
              },
            };
          }
        }),
        e.addCommand("take", function (e, t, n) {
          if (n.matchToken("take")) {
            var r = e.requireElement("classRef", n);
            if (n.matchToken("from")) var o = e.requireElement("expression", n);
            else o = r;
            if (n.matchToken("for")) var i = e.requireElement("expression", n);
            else i = e.requireElement("implicitMeTarget", n);
            return {
              classRef: r,
              from: o,
              forElt: i,
              args: [r, o, i],
              op: function (e, n, r, a) {
                t.nullCheck(r, o), t.nullCheck(a, i);
                var u = n.className;
                return (
                  t.implicitLoop(r, function (e) {
                    e.classList.remove(u);
                  }),
                  t.implicitLoop(a, function (e) {
                    e.classList.add(u);
                  }),
                  t.findNext(this, e)
                );
              },
            };
          }
        }),
        e.addCommand("put", function (e, t, n) {
          if (n.matchToken("put")) {
            var r = e.requireElement("expression", n),
              i = n.matchAnyToken("into", "before", "after");
            null == i &&
              n.matchToken("at") &&
              (n.matchToken("the"), (i = n.matchAnyToken("start", "end")), n.requireToken("of")),
              null == i &&
                e.raiseParseError(n, "Expected one of 'into', 'before', 'at start of', 'at end of', 'after'");
            var a = e.requireElement("expression", n),
              u = i.value,
              s = !1,
              l = null,
              c = null;
            if (a.prop && a.root && "into" === u) (c = a.prop.value), (l = a.root);
            else if ("symbol" === a.type && "into" === u) (s = !0), (c = a.name);
            else if ("attributeRef" === a.type && "into" === u) {
              var f = !0;
              (c = a.name), (l = e.requireElement("implicitMeTarget", n));
            } else if ("styleRef" === a.type && "into" === u) {
              var m = !0;
              (c = a.name), (l = e.requireElement("implicitMeTarget", n));
            } else
              a.attribute && "into" === u
                ? ((f = "attributeRef" === a.attribute.type),
                  (m = "styleRef" === a.attribute.type),
                  (c = a.attribute.name),
                  (l = a.root))
                : (l = a);
            return {
              target: a,
              operation: u,
              symbolWrite: s,
              value: r,
              args: [l, r],
              op: function (e, n, r) {
                if (s) o(t, e, c, r);
                else if ((t.nullCheck(n, l), "into" === u))
                  t.implicitLoop(
                    n,
                    f
                      ? function (e) {
                          e.setAttribute(c, r);
                        }
                      : m
                        ? function (e) {
                            e.style[c] = r;
                          }
                        : function (e) {
                            o(t, e, c, r);
                          }
                  );
                else {
                  var i =
                    "before" === u
                      ? Element.prototype.before
                      : "after" === u
                        ? Element.prototype.after
                        : "start" === u
                          ? Element.prototype.prepend
                          : Element.prototype.append;
                  t.implicitLoop(n, function (e) {
                    i.call(e, r instanceof Node ? r : t.convertValue(r, "Fragment"));
                  });
                }
                return t.findNext(this, e);
              },
            };
          }
        }),
        e.addCommand("transition", function (t, n, r) {
          if (r.matchToken("transition")) {
            for (
              var o = i(t, n, r), a = [], u = [], s = [], l = r.currentToken();
              !t.commandBoundary(l) && "over" !== l.value && "using" !== l.value;

            )
              "STYLE_REF" === r.currentToken().type
                ? (function () {
                    var e = r.consumeToken().value.substr(1);
                    a.push({
                      type: "styleRefValue",
                      evaluate: function () {
                        return e;
                      },
                    });
                  })()
                : a.push(t.requireElement("stringLike", r)),
                r.matchToken("from") ? u.push(t.requireElement("expression", r)) : u.push(null),
                r.requireToken("to"),
                r.matchToken("initial")
                  ? s.push({
                      type: "initial_literal",
                      evaluate: function () {
                        return "initial";
                      },
                    })
                  : s.push(t.requireElement("expression", r)),
                (l = r.currentToken());
            if (r.matchToken("over")) var c = t.requireElement("expression", r);
            else if (r.matchToken("using")) var f = t.requireElement("expression", r);
            var m = {
              to: s,
              args: [o, a, u, s, f, c],
              op: function (t, r, i, a, u, s, l) {
                n.nullCheck(r, o);
                var c = [];
                return (
                  n.implicitLoop(r, function (t) {
                    var r = new Promise(function (r, o) {
                      var c = t.style.transition;
                      t.style.transition = l ? "all " + l + "ms ease-in" : s || e.config.defaultTransition;
                      for (var f = n.getInternalData(t), m = getComputedStyle(t), p = {}, d = 0; d < m.length; d++) {
                        var h = m[d];
                        p[h] = m[h];
                      }
                      for (f.initalStyles || (f.initalStyles = p), d = 0; d < i.length; d++) {
                        var v = i[d],
                          y = a[d];
                        t.style[v] = "computed" === y || null == y ? p[v] : y;
                      }
                      var E = !1,
                        T = !1;
                      t.addEventListener(
                        "transitionend",
                        function () {
                          T || ((t.style.transition = c), (T = !0), r());
                        },
                        { once: !0 }
                      ),
                        t.addEventListener(
                          "transitionstart",
                          function () {
                            E = !0;
                          },
                          { once: !0 }
                        ),
                        setTimeout(function () {
                          T || E || ((t.style.transition = c), (T = !0), r());
                        }, 100),
                        setTimeout(function () {
                          for (var e = 0; e < i.length; e++) {
                            var n = i[e],
                              r = u[e];
                            t.style[n] = "initial" === r ? f.initalStyles[n] : r;
                          }
                        }, 0);
                    });
                    c.push(r);
                  }),
                  Promise.all(c).then(function () {
                    return n.findNext(m, t);
                  })
                );
              },
            };
            return m;
          }
        }),
        e.addCommand("measure", function (e, t, n) {
          if (n.matchToken("measure")) {
            var r = i(e, t, n),
              o = [];
            if (!e.commandBoundary(n.currentToken()))
              do {
                o.push(n.matchTokenType("IDENTIFIER").value);
              } while (n.matchOpToken(","));
            return {
              properties: o,
              args: [r],
              op: function (e, n) {
                t.nullCheck(n, r), 0 in n && (n = n[0]);
                var i = n.getBoundingClientRect(),
                  a = {
                    top: n.scrollTop,
                    left: n.scrollLeft,
                    topMax: n.scrollTopMax,
                    leftMax: n.scrollLeftMax,
                    height: n.scrollHeight,
                    width: n.scrollWidth,
                  };
                return (
                  (e.result = {
                    x: i.x,
                    y: i.y,
                    left: i.left,
                    top: i.top,
                    right: i.right,
                    bottom: i.bottom,
                    width: i.width,
                    height: i.height,
                    bounds: i,
                    scrollLeft: a.left,
                    scrollTop: a.top,
                    scrollLeftMax: a.leftMax,
                    scrollTopMax: a.topMax,
                    scrollWidth: a.width,
                    scrollHeight: a.height,
                    scroll: a,
                  }),
                  t.forEach(o, function (t) {
                    if (!(t in e.result)) throw "No such measurement as " + t;
                    e[t] = e.result[t];
                  }),
                  t.findNext(this, e)
                );
              },
            };
          }
        }),
        e.addLeafExpression("closestExpr", function (e, t, n) {
          if (n.matchToken("closest")) {
            if (n.matchToken("parent")) var r = !0;
            var o = null;
            if ("ATTRIBUTE_REF" === n.currentToken().type) {
              var i = e.requireElement("attributeRefAccess", n, null);
              o = "[" + i.attribute.name + "]";
            }
            if (null == o) {
              var a = e.requireElement("expression", n);
              null == a.css ? e.raiseParseError(n, "Expected a CSS expression") : (o = a.css);
            }
            if (n.matchToken("to")) var u = e.parseElement("expression", n);
            else u = e.parseElement("implicitMeTarget", n);
            var s = {
              type: "closestExpr",
              parentSearch: r,
              expr: a,
              css: o,
              to: u,
              args: [u],
              op: function (e, t) {
                if (null != t && t instanceof Element) {
                  if (r) var n = t.parentElement ? t.parentElement.closest(o) : null;
                  else n = t.closest(o);
                  return n;
                }
                return null;
              },
              evaluate: function (e) {
                return t.unifiedEval(this, e);
              },
            };
            return i ? ((i.root = s), (i.args = [s]), i) : s;
          }
        }),
        e.addCommand("go", function (e, t, n) {
          if (n.matchToken("go")) {
            if (n.matchToken("back")) var r = !0;
            else if ((n.matchToken("to"), n.matchToken("url"))) {
              var o = e.requireElement("stringLike", n),
                i = !0;
              if (n.matchToken("in")) {
                n.requireToken("new"), n.requireToken("window");
                var a = !0;
              }
            } else {
              n.matchToken("the");
              var u = n.matchAnyToken("top", "bottom", "middle"),
                s = n.matchAnyToken("left", "center", "right");
              (u || s) && n.requireToken("of"), (o = e.requireElement("expression", n));
              var l = n.matchAnyToken("smoothly", "instantly"),
                c = {};
              u &&
                ("top" === u.value
                  ? (c.block = "start")
                  : "bottom" === u.value
                    ? (c.block = "end")
                    : "middle" === u.value && (c.block = "center")),
                s &&
                  ("left" === s.value
                    ? (c.inline = "start")
                    : "center" === s.value
                      ? (c.inline = "center")
                      : "right" === s.value && (c.inline = "end")),
                l &&
                  ("smoothly" === l.value
                    ? (c.behavior = "smooth")
                    : "instantly" === l.value && (c.behavior = "instant"));
            }
            var f = {
              target: o,
              args: [o],
              op: function (e, n) {
                return (
                  r
                    ? window.history.back()
                    : i
                      ? n &&
                        (0 !== n.indexOf("#") || a ? window.open(n, a ? "_blank" : null) : (window.location.href = n))
                      : t.forEach(n, function (e) {
                          e.scrollIntoView(c);
                        }),
                  t.findNext(f, e)
                );
              },
            };
            return f;
          }
        }),
        (e.config.conversions.Values = function (t) {
          var n = {};
          return (
            (0, e.internals.runtime.implicitLoop)(t, function (e) {
              var t = o(e);
              void 0 === t
                ? null != e.querySelectorAll && e.querySelectorAll("input,select,textarea").forEach(r)
                : (n[t.name] = t.value);
            }),
            n
          );
          function r(e) {
            var t = o(e);
            null != t &&
              (null != n[t.name]
                ? Array.isArray(n[t.name]) && Array.isArray(t.value) && (n[t.name] = [].concat(n[t.name], t.value))
                : (n[t.name] = t.value));
          }
          function o(e) {
            try {
              var t = { name: e.name, value: e.value };
              if (null == t.name || null == t.value) return;
              if ("radio" == e.type && 0 == e.checked) return;
              if (
                ("checkbox" == e.type &&
                  (0 == e.checked ? (t.value = void 0) : "string" == typeof t.value && (t.value = [t.value])),
                "select-multiple" == e.type)
              ) {
                var n = e.querySelectorAll("option[selected]");
                t.value = [];
                for (var r = 0; r < n.length; r++) t.value.push(n[r].value);
              }
              return t;
            } catch (e) {
              return;
            }
          }
        }),
        (e.config.conversions.HTML = function (e) {
          return (function e(t) {
            if (t instanceof Array)
              return t
                .map(function (t) {
                  return e(t);
                })
                .join("");
            if (t instanceof HTMLElement) return t.outerHTML;
            if (t instanceof NodeList) {
              for (var n = "", r = 0; r < t.length; r++) {
                var o = t[r];
                o instanceof HTMLElement && (n += o.outerHTML);
              }
              return n;
            }
            return t.toString ? t.toString() : "";
          })(e);
        }),
        (e.config.conversions.Fragment = function (t) {
          var n = document.createDocumentFragment();
          return (
            e.internals.runtime.implicitLoop(t, function (e) {
              if (e instanceof Node) n.append(e);
              else {
                var t = document.createElement("template");
                (t.innerHTML = e), n.append(t.content);
              }
            }),
            n
          );
        });
    })(A),
    (function (e) {
      var t = 0,
        n =
          "(" +
          function (e) {
            e.onmessage = function (t) {
              switch (t.data.type) {
                case "init":
                  e.importScripts(t.data._hyperscript), e.importScripts.apply(e, t.data.extraScripts);
                  var n = e._hyperscript,
                    r = n.internals.lexer.makeTokensObject(t.data.tokens, [], t.data.source);
                  n.internals.parser.parseElement("hyperscript", r).apply(e, e), postMessage({ type: "didInit" });
                  break;
                case "call":
                  try {
                    var o = e._hyperscript.internals.runtime
                      .getHyperscriptFeatures(e)
                      [t.data.function].apply(e, t.data.args);
                    Promise.resolve(o)
                      .then(function (e) {
                        postMessage({ type: "resolve", id: t.data.id, value: e });
                      })
                      .catch(function (e) {
                        postMessage({ type: "reject", id: t.data.id, error: e.toString() });
                      });
                  } catch (e) {
                    postMessage({ type: "reject", id: t.data.id, error: e.toString() });
                  }
              }
            };
          }.toString() +
          ")(self)",
        r = new Blob([n], { type: "text/javascript" }),
        o = URL.createObjectURL(r);
      e.addFeature("worker", function (e, n, r) {
        if (r.matchToken("worker")) {
          var i = e.requireElement("dotOrColonPath", r).evaluate().split("."),
            a = i.pop(),
            u = [];
          if (r.matchOpToken("("))
            if (r.matchOpToken(")"));
            else {
              do {
                var s = r.requireTokenType("STRING").value,
                  l = new URL(s, location.href).href;
                u.push(l);
              } while (r.matchOpToken(","));
              r.requireOpToken(")");
            }
          var c = [],
            f = r.consumed.length,
            m = r.consumed.length;
          do {
            var p = e.parseAnyOf(["defFeature", "jsFeature"], r);
            if (!p) break;
            if ("defFeature" === p.type) c.push(p.name), (m = r.consumed.length);
            else if (r.hasMore()) continue;
          } while (r.matchToken("end") && r.hasMore());
          var d = r.consumed.slice(f, m + 1),
            h = new Worker(o);
          h.postMessage({ type: "init", _hyperscript: n.hyperscriptUrl, extraScripts: u, tokens: d, source: r.source });
          var v = new Promise(function (e, t) {
              h.addEventListener(
                "message",
                function (t) {
                  "didInit" === t.data.type && e();
                },
                { once: !0 }
              );
            }),
            y = {};
          return (
            c.forEach(function (e) {
              console.log(e),
                (y[e] = function () {
                  var n = arguments;
                  return new Promise(function (r, o) {
                    var i = t++;
                    h.addEventListener("message", function e(t) {
                      t.data.id === i &&
                        (h.removeEventListener("message", e),
                        "resolve" === t.data.type ? r(t.data.value) : o(t.data.error));
                    }),
                      v.then(function () {
                        h.postMessage({ type: "call", function: e, args: Array.from(n), id: i });
                      });
                  });
                });
            }),
            {
              name: a,
              worker: h,
              install: function (e) {
                n.assignToNamespace(e, i, a, y);
              },
            }
          );
        }
      });
    })(A),
    (function (e) {
      var t = ["then", "catch", "length", "asyncWrapper", "toJSON"];
      e.addFeature("socket", function (e, n, r) {
        if (r.matchToken("socket")) {
          var o = e.requireElement("dotOrColonPath", r).evaluate().split("."),
            i = o.pop(),
            a = {},
            u = e.requireElement("stringLike", r),
            s = 1e4;
          if (
            (r.matchToken("with") && (r.requireToken("timeout"), (s = e.requireElement("expression", r).evaluate())),
            r.matchToken("on"))
          ) {
            if ((r.requireToken("message"), r.matchToken("as"))) {
              r.requireToken("json");
              var l = !0;
            }
            for (
              var f = e.requireElement("commandList", r),
                m = {
                  type: "implicitReturn",
                  op: function (e) {
                    return n.HALT;
                  },
                  execute: function (e) {},
                },
                p = f;
              p.next;

            )
              p = p.next;
            p.next = m;
          }
          var d = M(u),
            h = (function e(n) {
              return new Proxy(
                {},
                {
                  get: function (r, o) {
                    return t.indexOf(o) >= 0
                      ? null
                      : "noTimeout" === o
                        ? e(-1)
                        : "timeout" === o
                          ? function (t) {
                              return e(parseInt(t));
                            }
                          : function () {
                              for (var e = F(), t = [], r = 0; r < arguments.length; r++) t.push(arguments[r]);
                              var i = { iid: e, function: o, args: t };
                              (d = d || M(u)).send(JSON.stringify(i));
                              var s = new Promise(function (t, n) {
                                a[e] = { resolve: t, reject: n };
                              });
                              return (
                                n >= 0 &&
                                  setTimeout(function () {
                                    a[e] && a[e].reject("Timed out"), delete a[e];
                                  }, n),
                                s
                              );
                            };
                  },
                }
              );
            })(s),
            v = {
              raw: d,
              dispatchEvent: function (e) {
                var t = e.detail;
                delete t.sender, delete t._namedArgList_, d.send(JSON.stringify(c({ type: e.type }, t)));
              },
              rpc: h,
            },
            y = {
              name: i,
              socket: v,
              install: function (e) {
                n.assignToNamespace(e, o, i, v);
              },
            };
          return (
            (d.onmessage = function (e) {
              var t = e.data;
              try {
                var r = JSON.parse(t);
              } catch (e) {}
              if (
                (r && r.iid && (r.throw ? a[r.iid].reject(r.throw) : a[r.iid].resolve(r.return), delete a[r.iid]), f)
              ) {
                var o = n.makeContext(v, y, v);
                if (l) {
                  if (!r) throw "Received non-JSON message from socket: " + t;
                  (o.message = r), (o.result = r);
                } else (o.message = t), (o.result = t);
                f.execute(o);
              }
            }),
            d.addEventListener("close", function (e) {
              d = null;
            }),
            y
          );
        }
      });
    })(A),
    (function (e) {
      e.addFeature("eventsource", function (e, t, n) {
        if (n.matchToken("eventsource")) {
          var r,
            o = function (e, n) {
              return function (r) {
                var o = i(r.data, e),
                  a = t.makeContext(c, f, c);
                (a.event = r), (a.result = o), n.execute(a);
              };
            },
            i = function (e, t) {
              return "json" == t ? JSON.parse(e) : e;
            },
            a = function e(n) {
              if (n.next) return e(n.next);
              n.next = {
                type: "implicitReturn",
                op: function (e) {
                  return t.HALT;
                },
                execute: function (e) {},
              };
            },
            u = !1,
            s = e.requireElement("dotOrColonPath", n).evaluate().split("."),
            l = s.pop();
          n.matchToken("from") && (r = e.requireElement("stringLike", n)),
            n.matchToken("with") && n.matchToken("credentials") && (u = !0);
          for (
            var c = {
                eventSource: null,
                listeners: [],
                retryCount: 0,
                open: function (e) {
                  if (null == e) {
                    if (null == c.eventSource || null == c.eventSource.url) throw "no url defined for EventSource.";
                    e = c.eventSource.url;
                  }
                  if (null != c.eventSource)
                    if (e != c.eventSource.url) c.eventSource.close();
                    else if (c.eventSource.readyState != EventSource.CLOSED) return;
                  (c.eventSource = new EventSource(e, { withCredentials: u })),
                    c.eventSource.addEventListener("open", function (e) {
                      c.retryCount = 0;
                    }),
                    c.eventSource.addEventListener("error", function (e) {
                      if (c.eventSource.readyState == EventSource.CLOSED) {
                        c.retryCount = Math.min(7, c.retryCount + 1);
                        var t = Math.random() * (2 ^ c.retryCount) * 500;
                        window.setTimeout(c.open, t);
                      }
                    });
                  for (var t = 0; t < c.listeners.length; t++) {
                    var n = c.listeners[t];
                    c.eventSource.addEventListener(n.type, n.handler, n.options);
                  }
                },
                close: function () {
                  null != c.eventSource && c.eventSource.close(), (c.retryCount = 0);
                },
                addEventListener: function (e, t, n) {
                  c.listeners.push({ type: e, handler: t, options: n }),
                    null != c.eventSource && c.eventSource.addEventListener(e, t, n);
                },
              },
              f = {
                name: l,
                object: c,
                install: function (e) {
                  t.assignToNamespace(e, s, l, c);
                },
              };
            n.matchToken("on");

          ) {
            var m = e.requireElement("stringLike", n, "Expected event name").evaluate(),
              p = "";
            n.matchToken("as") && (p = e.requireElement("stringLike", n, "Expected encoding type").evaluate());
            var d = e.requireElement("commandList", n);
            a(d), n.requireToken("end"), c.listeners.push({ type: m, handler: o(p, d) });
          }
          return n.requireToken("end"), null != r && c.open(r.evaluate()), f;
        }
      });
    })(A),
    (function (e) {
      e.addCommand("render", function (t, n, r) {
        if (r.matchToken("render")) {
          var o = t.requireElement("expression", r),
            i = {};
          return (
            r.matchToken("with") && (i = t.parseElement("namedArgumentList", r)),
            {
              args: [o, i],
              op: function (t, r, i) {
                if (!(r instanceof Element)) throw new Error(o.sourceFor() + " is not an element");
                return (
                  console.log(P(r.innerHTML)),
                  (t.result = (function (t, n) {
                    var r = [];
                    return e.evaluate(t, Object.assign({ __ht_template_result: r }, n)), r.join("");
                  })(P(r.innerHTML), i)),
                  n.findNext(this, t)
                );
              },
            }
          );
        }
      }),
        e.addLeafExpression("escape", function (e, t, n) {
          if (n.matchToken("escape")) {
            var r = n.matchTokenType("IDENTIFIER").value,
              o = n.matchToken("unescaped");
            return {
              args: [e.requireElement("expression", n)],
              op: function (e, t) {
                if (o) return t;
                if (void 0 === t) return "";
                if ("html" === r)
                  return String(t)
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/\x22/g, "&quot;")
                    .replace(/\x27/g, "&#039;");
                throw new Error("Unknown escape: " + r);
              },
              evaluate: function (e) {
                return t.unifiedEval(this, e);
              },
            };
          }
        });
    })(A),
    (function (e) {
      function t(t, n, r) {
        (this.ctx = t),
          (this.runtime = n),
          (this.cmd = r),
          (this._hyperscript = e),
          (this.cmdMap = []),
          (this.bus = new EventTarget());
      }
      e.addCommand("breakpoint", function (e, n, r) {
        var o;
        if (r.matchToken("breakpoint"))
          return {
            op: function (e) {
              globalThis.hdb = o = new t(e, n, this);
              try {
                return o.break(e);
              } catch (e) {
                console.error(e, e.stack);
              }
            },
          };
      }),
        (t.prototype.break = function (e) {
          var t = this;
          return (
            console.log("=== HDB///_hyperscript/debugger ==="),
            this.ui(),
            new Promise(function (n, r) {
              t.bus.addEventListener(
                "continue",
                function () {
                  if (t.ctx !== e) {
                    for (var r in e) delete e[r];
                    Object.assign(e, t.ctx);
                  }
                  delete window.hdb, n(t.runtime.findNext(t.cmd, t.ctx));
                },
                { once: !0 }
              );
            })
          );
        }),
        (t.prototype.continueExec = function () {
          this.bus.dispatchEvent(new Event("continue"));
        }),
        (t.prototype.stepOver = function () {
          var e = this;
          if (!this.cmd) return this.continueExec();
          var t =
            this.cmd && "breakpointCommand" === this.cmd.type
              ? this.runtime.findNext(this.cmd, this.ctx)
              : this.runtime.unifiedEval(this.cmd, this.ctx);
          return "implicitReturn" === t.type
            ? this.stepOut()
            : t && t.then instanceof Function
              ? t.then(function (t) {
                  (e.cmd = t), e.bus.dispatchEvent(new Event("step")), e.logCommand();
                })
              : void (t.halt_flag
                  ? this.bus.dispatchEvent(new Event("continue"))
                  : ((this.cmd = t), this.bus.dispatchEvent(new Event("step")), this.logCommand()));
        }),
        (t.prototype.stepOut = function () {
          if (!this.ctx.meta.caller) return this.continueExec();
          var e = this.ctx.meta.callingCommand,
            t = this.ctx.me;
          (this.ctx = this.ctx.meta.caller),
            console.log("[hdb] stepping out into " + this.ctx.meta.feature.displayName),
            this.ctx.me instanceof Element && this.ctx.me !== t && console.log("[hdb] me: ", this.ctx.me),
            (this.cmd = this.runtime.findNext(e, this.ctx)),
            (this.cmd = this.runtime.findNext(this.cmd, this.ctx)),
            this.logCommand(),
            this.bus.dispatchEvent(new Event("step"));
        }),
        (t.prototype.skipTo = function (e) {
          (this.cmd = e.cmd), this.bus.dispatchEvent(new Event("skip"));
        }),
        (t.prototype.rewrite = function (t, n) {
          console.log("##", t);
          for (var r, o, i = t.cmd.parent, a = l(i.children); !(o = a()).done && (r = o.value).next !== t.cmd; );
          var u = t.next,
            s = e.internals.lexer.tokenize(n),
            c = e.internals.parser.requireElement("command", s);
          console.log(c),
            (c.startToken = t.startToken),
            (c.endToken = t.endToken),
            (c.programSource = t.programSource),
            (c.sourceFor = function () {
              return n;
            }),
            (r.next = c),
            (c.next = u),
            (c.parent = i),
            this.bus.dispatchEvent(new Event("step"));
        }),
        (t.prototype.logCommand = function () {
          var e = this.cmd.sourceFor instanceof Function ? this.cmd.sourceFor() : "-- " + this.cmd.type;
          console.log("[hdb] current command: " + e);
        }),
        (t.prototype.traverse = function (e) {
          var t = [];
          return (
            (function e(n) {
              t.push(n);
              for (var r = l(n.children); !r().done; ) e(t);
            })(e),
            t
          );
        }),
        (t.prototype.ui = function () {
          var t = document.createElement("div"),
            n = t.attachShadow({ mode: "open" });
          (t.style.cssText = "all: initial"),
            (n.innerHTML =
              '\n<div class="hdb" _="\n\ton load trigger update end \n\ton step from hdb.bus trigger update end\n\ton skip from hdb.bus trigger update end\n\ton continue from hdb.bus log \'done\' then remove me.getRootNode().host">\n\n\t<script type="text/hyperscript">\n\n\tdef escapeHTML(unsafe)\n\t\tjs(unsafe) return unsafe\n\t\t\t.replace(/&/g, "&amp;")\n\t\t\t.replace(/</g, "&lt;")\n\t\t\t.replace(/>/g, "&gt;")\n\t\t\t.replace(/\\x22/g, "&quot;")\n\t\t\t.replace(/\\x27/g, "&#039;") end\n\t\treturn it\n\tend\n\n\tdef makeCommandWidget(i)\n\t\tget `<span data-cmd=${i}><button class=skip data-cmd=${i}>&rdca;</button>`\n\t\tif hdb.EXPERIMENTAL\n\t\t\tappend `<button class=rewrite data-cmd=${i}>Rewrite</button></span>`\n\t\tend\n\t\treturn it\n\tend\n\n\tdef renderCode\n\t\tset hdb.cmdMap to []\n\t\tset src to hdb.cmd.programSource\n\t\t\n\t\t-- Find feature\n\t\tset feat to hdb.cmd\n\t\trepeat until no feat.parent or feat.isFeature set feat to feat.parent end\n\n\t\t-- Traverse, finding starts\n\t\tfor cmd in hdb.traverse(feat)\n\t\t\tif no cmd.startToken continue end\n\t\t\tappend {\n\t\t\t\tindex: cmd.startToken.start,\n\t\t\t\twidget: makeCommandWidget(hdb.cmdMap.length),\n\t\t\t\tcmd: cmd\n\t\t\t} to hdb.cmdMap\n\t\tend\n\n\t\tset rv to src.slice(0, hdb.cmdMap[0].index)\n\t\tfor obj in hdb.cmdMap index i\n\t\t\tif obj.cmd is hdb.cmd\n\t\t\t\tappend obj.widget + \'<u class=current>\' +\n\t\t\t\t\tescapeHTML(src.slice(obj.index, hdb.cmdMap[i+1].index)) + \'</u>\' to rv\n\t\t\telse\n\t\t\t\tappend obj.widget + escapeHTML(src.slice(obj.index, hdb.cmdMap[i+1].index)) to rv\n\t\t\tend\n\t\tend\n\t\treturn rv\n\tend\n\n\tdef truncate(str, len)\n\t\tif str.length <= len return str end\n\t\treturn str.substr(0, len) + \'…\'\n\n\tdef prettyPrint(obj)\n\t\tif obj is null      return \'null\'      end\n\t\tif Element.prototype.isPrototypeOf(obj)\n\t\t\tset rv to \'&lt;<span class="token tagname">\' +\n\t\t\t\tobj.tagName.toLowerCase() + "</span>"\n\t\t\tfor attr in Array.from(obj.attributes)\n\t\t\t\tif attr.specified\n\t\t\t\t\tset rv to rv +\n\t\t\t\t\t\t\' <span class="token attr">\' + attr.nodeName +\n\t\t\t\t\t\t\'</span>=<span class="token string">"\' + truncate(attr.textContent, 10) +\n\t\t\t\t\t\t\'"</span>\'\n\t\t\t\tend\n\t\t\tend\n\t\t\tset rv to rv + \'>\'\n\t\t\treturn rv\n\t\telse if obj.call\n\t\t\tif obj.hyperfunc\n\t\t\t\tget "def " + obj.hypername + \' ...\'\n\t\t\telse\n\t\t\t\tget "function "+obj.name+"(...) {...}"\n\t\t\tend\n\t\telse if obj.toString\n\t\t\tcall obj.toString()\n\t\tend\n\t\treturn escapeHTML((it or \'undefined\').trim())\n\tend\n\t</script>\n\n\t<header _="\n\ton pointerdown(clientX, clientY)\n\t\thalt the event\n\t\tcall event.stopPropagation()\n\t\tget first .hdb\n\t\tmeasure its x, y\n\t\tset xoff to clientX - x\n\t\tset yoff to clientY - y\n\t\trepeat until event pointerup from document\n\t\t\twait for pointermove or pointerup from document\n\t\t\tadd {\n\t\t\t\tleft: ${its clientX - xoff}px;\n\t\t\t\ttop:  ${its clientY - yoff}px;\n\t\t\t} to .hdb\n\t\tend\n\t">\n\t\t<h2 class="titlebar">HDB</h2>\n\t\t<ul role="toolbar" class="toolbar" _="on pointerdown halt">\n\t\t\t<li><button _="on click call hdb.continueExec()">\n\t\t\t\t&#x23F5; Continue\n\t\t\t</button>\n\t\t\t<li><button _="on click call hdb.stepOver()">\n\t\t\t\t&#8631; Step Over\n\t\t\t</button>\n\t\t</ul>\n\t</header>\n\n\t<section class="sec-code">\n\n\t\t<div class="code-container">\n\t\t\t<pre class="code language-hyperscript" _="\n\t\t\t\ton update from .hdb if hdb.cmd.programSource\n\t\t\t    \tput renderCode() into me\n\t\t\t    \tif Prism\n\t\t\t    \t\tcall Prism.highlightAllUnder(me)\n\t\t\t    \tend\n\t\t\t        go to bottom of .current in me\n\t\t\t\tend\n\n\t\t\t\ton click\n\t\t\t\t\tif target matches .skip\n\t\t\t\t\t\tget (target\'s @data-cmd) as Int\n\t\t\t\t\t\tcall hdb.skipTo(hdb.cmdMap[result])\n\t\t\t\t\tend\n\t\t\t\t\tif target matches .rewrite\n\t\t\t\t\t\tset cmdNo to (target\'s @data-cmd) as Int\n\t\t\t\t\t\tset span to the first <span[data-cmd=\'${cmdNo}\'] />\n\t\t\t\t\t\tput `<form class=rewrite><input id=cmd></form>` into the span\n\t\t\t\t\tend\n\t\t\t\tend\n\n\t\t\t\ton submit\n\t\t\t\t\thalt the event\n\t\t\t\t\tget (closest @data-cmd to target) as Int\n\t\t\t\t\tcall hdb.rewrite(hdb.cmdMap[result], #cmd\'s value)\n\t\t\t\tend\n\t\t\t"><code></code></pre>\n\t\t</div>\n\t</section>\n\n\t<section class="sec-console" _="\n\t\t-- Print context at startup\n\t\tinit repeat for var in Object.keys(hdb.ctx) if var is not \'meta\'\n\t\t\tsend hdbUI:consoleEntry(input: var, output: hdb.ctx[var]) to #console">\n\n\t\t<ul id="console" role="list" _="\n\t\t\ton hdbUI:consoleEntry(input, output)\n\t\t\t\tif no hdb.consoleHistory set hdb.consoleHistory to [] end\n\t\t\t\tpush(input) on hdb.consoleHistory\n\t\t\t\tset node to #tmpl-console-entry.content.cloneNode(true)\n\t\t\t\tput the node at end of me\n\t\t\t\tset entry to my lastElementChild\n\t\t\t\tgo to bottom of the entry\n\t\t\t\tput escapeHTML(input) into .input in the entry\n\t\t\t\tif no output\n\t\t\t\t\tcall _hyperscript.internals.runtime.parse(input)\n\t\t\t\t\tif its execute is not undefined then call its execute(hdb.ctx)\n\t\t\t\t\telse call its evaluate(hdb.ctx)\n\t\t\t\t\tend\n\t\t\t\t\tset output to it\n\t\t\t\tend\n\t\t\t\tput prettyPrint(output) as Fragment into .output in the entry\n\t\t\t">\n\t\t\t<template id="tmpl-console-entry">\n\t\t\t\t<li class="console-entry">\n\t\t\t\t\t<kbd><code class="input"></code></kbd>\n\t\t\t\t\t<samp class="output"></samp>\n\t\t\t\t</li>\n\t\t\t</template>\n\t\t</ul>\n\n\t\t<form id="console-form" data-hist="0" _="on submit\n\t\t\t\tsend hdbUI:consoleEntry(input: #console-input\'s value) to #console\n\t\t\t\tset #console-input\'s value to \'\'\n\t\t\t\tset @data-hist to 0\n\t\t\t\tset element oldContent to null\n\t\t\t\thalt\n\t\t\ton keydown[key is \'ArrowUp\' or key is \'ArrowDown\']\n\t\t\t\tif no hdb.consoleHistory or exit end\n\t\t\t\tif element oldContent is null set element oldContent to #console-input.value end\n\t\t\t\tif event.key is \'ArrowUp\' and hdb.consoleHistory.length > -@data-hist\n\t\t\t\t\tdecrement @data-hist\n\t\t\t\telse if event.key is \'ArrowDown\' and @data-hist < 0\n\t\t\t\t\tincrement @data-hist\n\t\t\t\tend end\n\t\t\t\tset #console-input.value to hdb.consoleHistory[hdb.consoleHistory.length + @data-hist as Int]\n\t\t\t\t\tor oldContent\n\t\t\t\thalt default\n\t\t\ton input if @data-hist is \'0\' set element oldContent to #console-input.value">\n\t\t\t<input id="console-input" placeholder="Enter an expression&hellip;"\n\t\t\t\tautocomplete="off">\n\t\t</form>\n\t</section>\n\n\t<style>\n\t.hdb {\n\t\tborder: 1px solid #888;\n\t\tborder-radius: .3em;\n\t\tbox-shadow: 0 .2em .3em #0008;\n\t\tposition: fixed;\n\t\ttop: .5em; right: .5em;\n\t\twidth: min(40ch, calc(100% - 1em));\n\t\tmax-height: calc(100% - 1em);\n\t\tbackground-color: white;\n\t\tfont-family: sans-serif;\n\t\topacity: .9;\n\t\tz-index: 2147483647;\n\t\tcolor: black;\n\t\tdisplay: flex;\n\t\tflex-flow: column;\n\t}\n\n\t* {\n\t\tbox-sizing: border-box;\n\t}\n\n\theader {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\tpadding: .4em;\n\t}\n\n\t.titlebar {\n\t\tmargin: 0;\n\t\tfont-size: 1em;\n\t\ttouch-action: none;\n\t}\n\n\t.toolbar {\n\t\tdisplay: flex;\n\t\tgap: .35em;\n\n\t\tlist-style: none;\n\t\tpadding-left: 0;\n\t\tmargin: 0;\n\t}\n\n\t.toolbar a, .toolbar button {\n\t\tbackground: #2183ff;\n\t\tborder: 1px solid #3465a4;\n\t\tbox-shadow: 0 1px #b3c6ff inset, 0 .06em .06em #000;\n\t\tborder-radius: .2em;\n\t\tfont: inherit;\n\t\tpadding: .2em .3em;\n\t\tcolor: white;\n\t\ttext-shadow: 0 1px black;\n\t\tfont-weight: bold;\n\t}\n\n\t.toolbar a:hover .toolbar a:focus, .toolbar button:hover, .toolbar button:focus {\n\t\tbackground: #94c8ff;\n\t}\n\n\t.toolbar a:active, .toolbar button:active {\n\t\tbackground: #3465a4;\n\t}\n\n\t.sec-code {\n\t\tborder-radius: .3em;\n\t\toverflow: hidden;\n\t\tbox-shadow: 0 1px white inset, 0 .06em .06em #0008;\n\t\tbackground: #bdf;\n\t\tmargin: 0 .4em;\n\t\tborder: 1px solid #3465a4;\n\t}\n\n\t.hdb h3 {\n\t\tmargin: 0;\n\t\tfont-size: 1em;\n\t\tpadding: .2em .4em 0 .4em;\n\t}\n\n\t.code-container {\n\t\tdisplay: grid;\n\t\tline-height: 1.2em;\n\t\theight: calc(12 * 1.2em);\n\t\tborder-radius: 0 0 .2em .2em;\n\t\toverflow: auto;\n\t\tscrollbar-width: thin;\n\t\tscrollbar-color: #0003 transparent;\n\t}\n\n\t.code, #console, #console-input {\n\t\tfont-family: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;\n\t}\n\n\t.code {\n\t\twidth: 0;\n\t\tmargin: 0;\n\t\tpadding-left: 1ch;\n\t\ttab-size: 2;\n\t\t-moz-tab-size: 2;\n\t\t-o-tab-size: 2;\n\t}\n\n\t.current {\n\t\tfont-weight: bold;\n\t\tbackground: #abf;\n\t}\n\n\t.skip {\n\t\tpadding: 0;\n\t\tmargin: 2px;\n\t\tborder: 1px solid #3465a4;\n\t\tborder-radius: 50%;\n\t\tcolor: #3465a4;\n\t\tbackground: none;\n\t\tfont-weight: bold;\n\t\tfont-size: 1.2em;\n\t\twidth: calc(2ch / 1.2 - 4px);\n\t\theight: calc(2ch / 1.2 - 4px);\n\t\tline-height: 0.6;\n\t}\n\n\t.skip:hover {\n\t\tbackground: #3465a4;\n\t\tcolor: #bdf;\n\t}\n\n\t#console {\n\t\toverflow-y: scroll;\n\t\tscrollbar-width: thin;\n\t\tscrollbar-color: #afc2db transparent;\n\t\theight: calc(12 * 1.2em);\n\t\tlist-style: none;\n\t\tpadding-left: 0;\n\t\tmargin: 0 .4em .4em .4em;\n\t\tposition: relative;\n\t\tword-wrap: break-word;\n\t}\n\n\t#console>*+* {\n\t\tmargin-top: .5em;\n\t}\n\n\t.console-entry>* {\n\t\tdisplay: block;\n\t}\n\n\t.console-entry .input  { color: #3465a4; }\n\t.console-entry .output { color: #333; }\n\n\t.console-entry .input:before  { content: \'>> \' }\n\t.console-entry .output:before { content: \'<- \' }\n\n\t#console-form {\n\t\tmargin: 0 .4em .4em .4em;\n\t}\n\n\t#console-input {\n\t\twidth: 100%;\n\t\tfont-size: inherit;\n\t}\n\n\t.token.tagname { font-weight: bold; }\n\t.token.attr, .token.builtin, .token.italic { font-style: italic; }\n\t.token.string { opacity: .8; }\n\t.token.keyword { color: #3465a4; }\n\t.token.bold, .token.punctuation, .token.operator { font-weight: bold; }\n\t</style>\n\t</div>\n\t'),
            document.body.appendChild(t),
            e.processNode(n.querySelector(".hdb"));
        });
    })(A),
    A
  );
});
//# sourceMappingURL=_hyperscript_w9y.min.js.map
