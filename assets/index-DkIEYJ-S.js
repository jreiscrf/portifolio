const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'Home-BZE6u8Zj.js',
      'MainNavigation-Dv8R3chm.js',
      'MainNavigation-BqMsn4QP.css',
      'Home-fWaJYsrf.css',
      'About-QRV6Zcj2.js',
      'BaseLayout-BUzyhls7.js',
      'BaseLayout-DZnJ_cwU.css',
      'createClass-siv0sUro.js',
      'About-BTJJukbC.css',
      'Projects-4kYDvK71.js',
      'Projects-BMhxjCJd.css',
      'Resume-h9YLIvyl.js',
      'Resume-BOWOWgjk.css',
    ]),
) => i.map((i) => d[i]);
function jd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in e)) {
          const l = Object.getOwnPropertyDescriptor(r, o);
          l &&
            Object.defineProperty(
              e,
              o,
              l.get ? l : { enumerable: !0, get: () => r[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll(
    'link[rel="modulepreload"]',
  ))
    r(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === 'childList')
        for (const i of l.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const l = {};
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (l.credentials = 'include')
        : o.crossOrigin === 'anonymous'
        ? (l.credentials = 'omit')
        : (l.credentials = 'same-origin'),
      l
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = n(o);
    fetch(o.href, l);
  }
})();
var Zv =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {};
function uu(e) {
  return e &&
    e.__esModule &&
    Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
function Td(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == 'function') {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, '__esModule', { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var o = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            },
      );
    }),
    n
  );
}
var Ua = { exports: {} },
  cl = {},
  Fa = { exports: {} },
  W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qr = Symbol.for('react.element'),
  Nd = Symbol.for('react.portal'),
  Ld = Symbol.for('react.fragment'),
  Id = Symbol.for('react.strict_mode'),
  Rd = Symbol.for('react.profiler'),
  zd = Symbol.for('react.provider'),
  Md = Symbol.for('react.context'),
  Dd = Symbol.for('react.forward_ref'),
  Ud = Symbol.for('react.suspense'),
  Fd = Symbol.for('react.memo'),
  Bd = Symbol.for('react.lazy'),
  fs = Symbol.iterator;
function Ad(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (fs && e[fs]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Ba = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Aa = Object.assign,
  $a = {};
function qn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = $a),
    (this.updater = n || Ba);
}
qn.prototype.isReactComponent = {};
qn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
qn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Va() {}
Va.prototype = qn.prototype;
function su(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = $a),
    (this.updater = n || Ba);
}
var au = (su.prototype = new Va());
au.constructor = su;
Aa(au, qn.prototype);
au.isPureReactComponent = !0;
var ds = Array.isArray,
  Wa = Object.prototype.hasOwnProperty,
  cu = { current: null },
  ba = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ha(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (l = '' + t.key),
    t))
      Wa.call(t, r) && !ba.hasOwnProperty(r) && (o[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) o.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u))
      o[r] === void 0 && (o[r] = u[r]);
  return {
    $$typeof: Qr,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: cu.current,
  };
}
function $d(e, t) {
  return {
    $$typeof: Qr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function fu(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Qr;
}
function Vd(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ps = /\/+/g;
function zl(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Vd('' + e.key)
    : t.toString(36);
}
function Co(e, t, n, r, o) {
  var l = typeof e;
  (l === 'undefined' || l === 'boolean') && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (l) {
      case 'string':
      case 'number':
        i = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Qr:
          case Nd:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === '' ? '.' + zl(i, 0) : r),
      ds(o)
        ? ((n = ''),
          e != null && (n = e.replace(ps, '$&/') + '/'),
          Co(o, t, n, '', function (a) {
            return a;
          }))
        : o != null &&
          (fu(o) &&
            (o = $d(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ''
                  : ('' + o.key).replace(ps, '$&/') + '/') +
                e,
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === '' ? '.' : r + ':'), ds(e)))
    for (var u = 0; u < e.length; u++) {
      l = e[u];
      var s = r + zl(l, u);
      i += Co(l, t, n, s, o);
    }
  else if (((s = Ad(e)), typeof s == 'function'))
    for (e = s.call(e), u = 0; !(l = e.next()).done; )
      (l = l.value), (s = r + zl(l, u++)), (i += Co(l, t, n, s, o));
  else if (l === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    );
  return i;
}
function no(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Co(e, r, '', '', function (l) {
      return t.call(n, l, o++);
    }),
    r
  );
}
function Wd(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var De = { current: null },
  Po = { transition: null },
  bd = {
    ReactCurrentDispatcher: De,
    ReactCurrentBatchConfig: Po,
    ReactCurrentOwner: cu,
  };
function Qa() {
  throw Error(
    'act(...) is not supported in production builds of React.',
  );
}
W.Children = {
  map: no,
  forEach: function (e, t, n) {
    no(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      no(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      no(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!fu(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.',
      );
    return e;
  },
};
W.Component = qn;
W.Fragment = Ld;
W.Profiler = Rd;
W.PureComponent = su;
W.StrictMode = Id;
W.Suspense = Ud;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bd;
W.act = Qa;
W.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.',
    );
  var r = Aa({}, e.props),
    o = e.key,
    l = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (i = cu.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Wa.call(t, s) &&
        !ba.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return {
    $$typeof: Qr,
    type: e.type,
    key: o,
    ref: l,
    props: r,
    _owner: i,
  };
};
W.createContext = function (e) {
  return (
    (e = {
      $$typeof: Md,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: zd, _context: e }),
    (e.Consumer = e)
  );
};
W.createElement = Ha;
W.createFactory = function (e) {
  var t = Ha.bind(null, e);
  return (t.type = e), t;
};
W.createRef = function () {
  return { current: null };
};
W.forwardRef = function (e) {
  return { $$typeof: Dd, render: e };
};
W.isValidElement = fu;
W.lazy = function (e) {
  return {
    $$typeof: Bd,
    _payload: { _status: -1, _result: e },
    _init: Wd,
  };
};
W.memo = function (e, t) {
  return { $$typeof: Fd, type: e, compare: t === void 0 ? null : t };
};
W.startTransition = function (e) {
  var t = Po.transition;
  Po.transition = {};
  try {
    e();
  } finally {
    Po.transition = t;
  }
};
W.unstable_act = Qa;
W.useCallback = function (e, t) {
  return De.current.useCallback(e, t);
};
W.useContext = function (e) {
  return De.current.useContext(e);
};
W.useDebugValue = function () {};
W.useDeferredValue = function (e) {
  return De.current.useDeferredValue(e);
};
W.useEffect = function (e, t) {
  return De.current.useEffect(e, t);
};
W.useId = function () {
  return De.current.useId();
};
W.useImperativeHandle = function (e, t, n) {
  return De.current.useImperativeHandle(e, t, n);
};
W.useInsertionEffect = function (e, t) {
  return De.current.useInsertionEffect(e, t);
};
W.useLayoutEffect = function (e, t) {
  return De.current.useLayoutEffect(e, t);
};
W.useMemo = function (e, t) {
  return De.current.useMemo(e, t);
};
W.useReducer = function (e, t, n) {
  return De.current.useReducer(e, t, n);
};
W.useRef = function (e) {
  return De.current.useRef(e);
};
W.useState = function (e) {
  return De.current.useState(e);
};
W.useSyncExternalStore = function (e, t, n) {
  return De.current.useSyncExternalStore(e, t, n);
};
W.useTransition = function () {
  return De.current.useTransition();
};
W.version = '18.3.1';
Fa.exports = W;
var T = Fa.exports;
const ze = uu(T),
  Hd = jd({ __proto__: null, default: ze }, [T]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qd = T,
  Kd = Symbol.for('react.element'),
  Yd = Symbol.for('react.fragment'),
  Gd = Object.prototype.hasOwnProperty,
  Xd =
    Qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      .ReactCurrentOwner,
  Zd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ka(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  n !== void 0 && (l = '' + n),
    t.key !== void 0 && (l = '' + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t)
    Gd.call(t, r) && !Zd.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t))
      o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Kd,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: Xd.current,
  };
}
cl.Fragment = Yd;
cl.jsx = Ka;
cl.jsxs = Ka;
Ua.exports = cl;
var B = Ua.exports,
  Ya = { exports: {} },
  Xe = {},
  Ga = { exports: {} },
  Xa = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(I, U) {
    var M = I.length;
    I.push(U);
    e: for (; 0 < M; ) {
      var b = (M - 1) >>> 1,
        K = I[b];
      if (0 < o(K, U)) (I[b] = U), (I[M] = K), (M = b);
      else break e;
    }
  }
  function n(I) {
    return I.length === 0 ? null : I[0];
  }
  function r(I) {
    if (I.length === 0) return null;
    var U = I[0],
      M = I.pop();
    if (M !== U) {
      I[0] = M;
      e: for (var b = 0, K = I.length, ne = K >>> 1; b < ne; ) {
        var Y = 2 * (b + 1) - 1,
          Ee = I[Y],
          He = Y + 1,
          yt = I[He];
        if (0 > o(Ee, M))
          He < K && 0 > o(yt, Ee)
            ? ((I[b] = yt), (I[He] = M), (b = He))
            : ((I[b] = Ee), (I[Y] = M), (b = Y));
        else if (He < K && 0 > o(yt, M))
          (I[b] = yt), (I[He] = M), (b = He);
        else break e;
      }
    }
    return U;
  }
  function o(I, U) {
    var M = I.sortIndex - U.sortIndex;
    return M !== 0 ? M : I.id - U.id;
  }
  if (
    typeof performance == 'object' &&
    typeof performance.now == 'function'
  ) {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    a = [],
    p = 1,
    f = null,
    v = 3,
    x = !1,
    k = !1,
    C = !1,
    L = typeof setTimeout == 'function' ? setTimeout : null,
    h = typeof clearTimeout == 'function' ? clearTimeout : null,
    c = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(I) {
    for (var U = n(a); U !== null; ) {
      if (U.callback === null) r(a);
      else if (U.startTime <= I)
        r(a), (U.sortIndex = U.expirationTime), t(s, U);
      else break;
      U = n(a);
    }
  }
  function S(I) {
    if (((C = !1), d(I), !k))
      if (n(s) !== null) (k = !0), Se(P);
      else {
        var U = n(a);
        U !== null && Oe(S, U.startTime - I);
      }
  }
  function P(I, U) {
    (k = !1), C && ((C = !1), h(O), (O = -1)), (x = !0);
    var M = v;
    try {
      for (
        d(U), f = n(s);
        f !== null && (!(f.expirationTime > U) || (I && !H()));

      ) {
        var b = f.callback;
        if (typeof b == 'function') {
          (f.callback = null), (v = f.priorityLevel);
          var K = b(f.expirationTime <= U);
          (U = e.unstable_now()),
            typeof K == 'function'
              ? (f.callback = K)
              : f === n(s) && r(s),
            d(U);
        } else r(s);
        f = n(s);
      }
      if (f !== null) var ne = !0;
      else {
        var Y = n(a);
        Y !== null && Oe(S, Y.startTime - U), (ne = !1);
      }
      return ne;
    } finally {
      (f = null), (v = M), (x = !1);
    }
  }
  var N = !1,
    R = null,
    O = -1,
    $ = 5,
    D = -1;
  function H() {
    return !(e.unstable_now() - D < $);
  }
  function Z() {
    if (R !== null) {
      var I = e.unstable_now();
      D = I;
      var U = !0;
      try {
        U = R(!0, I);
      } finally {
        U ? de() : ((N = !1), (R = null));
      }
    } else N = !1;
  }
  var de;
  if (typeof c == 'function')
    de = function () {
      c(Z);
    };
  else if (typeof MessageChannel < 'u') {
    var he = new MessageChannel(),
      be = he.port2;
    (he.port1.onmessage = Z),
      (de = function () {
        be.postMessage(null);
      });
  } else
    de = function () {
      L(Z, 0);
    };
  function Se(I) {
    (R = I), N || ((N = !0), de());
  }
  function Oe(I, U) {
    O = L(function () {
      I(e.unstable_now());
    }, U);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (I) {
      I.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      k || x || ((k = !0), Se(P));
    }),
    (e.unstable_forceFrameRate = function (I) {
      0 > I || 125 < I
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : ($ = 0 < I ? Math.floor(1e3 / I) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (I) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var U = 3;
          break;
        default:
          U = v;
      }
      var M = v;
      v = U;
      try {
        return I();
      } finally {
        v = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (I, U) {
      switch (I) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          I = 3;
      }
      var M = v;
      v = I;
      try {
        return U();
      } finally {
        v = M;
      }
    }),
    (e.unstable_scheduleCallback = function (I, U, M) {
      var b = e.unstable_now();
      switch (
        (typeof M == 'object' && M !== null
          ? ((M = M.delay),
            (M = typeof M == 'number' && 0 < M ? b + M : b))
          : (M = b),
        I)
      ) {
        case 1:
          var K = -1;
          break;
        case 2:
          K = 250;
          break;
        case 5:
          K = 1073741823;
          break;
        case 4:
          K = 1e4;
          break;
        default:
          K = 5e3;
      }
      return (
        (K = M + K),
        (I = {
          id: p++,
          callback: U,
          priorityLevel: I,
          startTime: M,
          expirationTime: K,
          sortIndex: -1,
        }),
        M > b
          ? ((I.sortIndex = M),
            t(a, I),
            n(s) === null &&
              I === n(a) &&
              (C ? (h(O), (O = -1)) : (C = !0), Oe(S, M - b)))
          : ((I.sortIndex = K), t(s, I), k || x || ((k = !0), Se(P))),
        I
      );
    }),
    (e.unstable_shouldYield = H),
    (e.unstable_wrapCallback = function (I) {
      var U = v;
      return function () {
        var M = v;
        v = U;
        try {
          return I.apply(this, arguments);
        } finally {
          v = M;
        }
      };
    });
})(Xa);
Ga.exports = Xa;
var Jd = Ga.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qd = T,
  Ge = Jd;
function j(e) {
  for (
    var t =
        'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
      n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Za = new Set(),
  Or = {};
function wn(e, t) {
  Hn(e, t), Hn(e + 'Capture', t);
}
function Hn(e, t) {
  for (Or[e] = t, e = 0; e < t.length; e++) Za.add(t[e]);
}
var kt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  si = Object.prototype.hasOwnProperty,
  ep =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  hs = {},
  ms = {};
function tp(e) {
  return si.call(ms, e)
    ? !0
    : si.call(hs, e)
    ? !1
    : ep.test(e)
    ? (ms[e] = !0)
    : ((hs[e] = !0), !1);
}
function np(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)),
          e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function rp(e, t, n, r) {
  if (t === null || typeof t > 'u' || np(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ue(e, t, n, r, o, l, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = i);
}
var _e = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    _e[e] = new Ue(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  _e[t] = new Ue(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
  function (e) {
    _e[e] = new Ue(e, 2, !1, e.toLowerCase(), null, !1, !1);
  },
);
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  _e[e] = new Ue(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    _e[e] = new Ue(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  _e[e] = new Ue(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  _e[e] = new Ue(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  _e[e] = new Ue(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  _e[e] = new Ue(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var du = /[\-:]([a-z])/g;
function pu(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(du, pu);
    _e[t] = new Ue(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(du, pu);
    _e[t] = new Ue(
      t,
      1,
      !1,
      e,
      'http://www.w3.org/1999/xlink',
      !1,
      !1,
    );
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(du, pu);
  _e[t] = new Ue(
    t,
    1,
    !1,
    e,
    'http://www.w3.org/XML/1998/namespace',
    !1,
    !1,
  );
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  _e[e] = new Ue(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
_e.xlinkHref = new Ue(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1,
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  _e[e] = new Ue(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function hu(e, t, n, r) {
  var o = _e.hasOwnProperty(t) ? _e[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (rp(t, n, o, r) && (n = null),
    r || o === null
      ? tp(t) &&
        (n === null
          ? e.removeAttribute(t)
          : e.setAttribute(t, '' + n))
      : o.mustUseProperty
      ? (e[o.propertyName] =
          n === null ? (o.type === 3 ? !1 : '') : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ot = qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ro = Symbol.for('react.element'),
  On = Symbol.for('react.portal'),
  jn = Symbol.for('react.fragment'),
  mu = Symbol.for('react.strict_mode'),
  ai = Symbol.for('react.profiler'),
  Ja = Symbol.for('react.provider'),
  qa = Symbol.for('react.context'),
  vu = Symbol.for('react.forward_ref'),
  ci = Symbol.for('react.suspense'),
  fi = Symbol.for('react.suspense_list'),
  yu = Symbol.for('react.memo'),
  Nt = Symbol.for('react.lazy'),
  ec = Symbol.for('react.offscreen'),
  vs = Symbol.iterator;
function or(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (vs && e[vs]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var se = Object.assign,
  Ml;
function pr(e) {
  if (Ml === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ml = (t && t[1]) || '';
    }
  return (
    `
` +
    Ml +
    e
  );
}
var Dl = !1;
function Ul(e, t) {
  if (!e || Dl) return '';
  Dl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == 'string') {
      for (
        var o = a.stack.split(`
`),
          l = r.stack.split(`
`),
          i = o.length - 1,
          u = l.length - 1;
        1 <= i && 0 <= u && o[i] !== l[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (o[i] !== l[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || o[i] !== l[u])) {
                var s =
                  `
` + o[i].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Dl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? pr(e) : '';
}
function op(e) {
  switch (e.tag) {
    case 5:
      return pr(e.type);
    case 16:
      return pr('Lazy');
    case 13:
      return pr('Suspense');
    case 19:
      return pr('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Ul(e.type, !1)), e;
    case 11:
      return (e = Ul(e.type.render, !1)), e;
    case 1:
      return (e = Ul(e.type, !0)), e;
    default:
      return '';
  }
}
function di(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case jn:
      return 'Fragment';
    case On:
      return 'Portal';
    case ai:
      return 'Profiler';
    case mu:
      return 'StrictMode';
    case ci:
      return 'Suspense';
    case fi:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case qa:
        return (e.displayName || 'Context') + '.Consumer';
      case Ja:
        return (e._context.displayName || 'Context') + '.Provider';
      case vu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case yu:
        return (
          (t = e.displayName || null),
          t !== null ? t : di(e.type) || 'Memo'
        );
      case Nt:
        (t = e._payload), (e = e._init);
        try {
          return di(e(t));
        } catch {}
    }
  return null;
}
function lp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName ||
          (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return di(t);
    case 8:
      return t === mu ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function')
        return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function Kt(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function tc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function ip(e) {
  var t = tc(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          (r = '' + i), l.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = '' + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function oo(e) {
  e._valueTracker || (e._valueTracker = ip(e));
}
function nc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = tc(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Do(e) {
  if (
    ((e = e || (typeof document < 'u' ? document : void 0)),
    typeof e > 'u')
  )
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function pi(e, t) {
  var n = t.checked;
  return se({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ys(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Kt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function rc(e, t) {
  (t = t.checked), t != null && hu(e, 'checked', t, !1);
}
function hi(e, t) {
  rc(e, t);
  var n = Kt(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) &&
        (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? mi(e, t.type, n)
    : t.hasOwnProperty('defaultValue') &&
      mi(e, t.type, Kt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function gs(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function mi(e, t, n) {
  (t !== 'number' || Do(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var hr = Array.isArray;
function Bn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Kt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function vi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return se({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function ws(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(j(92));
      if (hr(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: Kt(n) };
}
function oc(e, t) {
  var n = Kt(t.value),
    r = Kt(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null &&
      e.defaultValue !== n &&
      (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Ss(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue &&
    t !== '' &&
    t !== null &&
    (e.value = t);
}
function lc(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function yi(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? lc(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var lo,
  ic = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (
      e.namespaceURI !== 'http://www.w3.org/2000/svg' ||
      'innerHTML' in e
    )
      e.innerHTML = t;
    else {
      for (
        lo = lo || document.createElement('div'),
          lo.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = lo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function jr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var gr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  up = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(gr).forEach(function (e) {
  up.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
      (gr[t] = gr[e]);
  });
});
function uc(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n ||
      typeof t != 'number' ||
      t === 0 ||
      (gr.hasOwnProperty(e) && gr[e])
    ? ('' + t).trim()
    : t + 'px';
}
function sc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = uc(n, t[n], r);
      n === 'float' && (n = 'cssFloat'),
        r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var sp = se(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function gi(e, t) {
  if (t) {
    if (
      sp[e] &&
      (t.children != null || t.dangerouslySetInnerHTML != null)
    )
      throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(j(61));
    }
    if (t.style != null && typeof t.style != 'object')
      throw Error(j(62));
  }
}
function wi(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Si = null;
function gu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ei = null,
  An = null,
  $n = null;
function Es(e) {
  if ((e = Gr(e))) {
    if (typeof Ei != 'function') throw Error(j(280));
    var t = e.stateNode;
    t && ((t = ml(t)), Ei(e.stateNode, e.type, t));
  }
}
function ac(e) {
  An ? ($n ? $n.push(e) : ($n = [e])) : (An = e);
}
function cc() {
  if (An) {
    var e = An,
      t = $n;
    if ((($n = An = null), Es(e), t))
      for (e = 0; e < t.length; e++) Es(t[e]);
  }
}
function fc(e, t) {
  return e(t);
}
function dc() {}
var Fl = !1;
function pc(e, t, n) {
  if (Fl) return e(t, n);
  Fl = !0;
  try {
    return fc(e, t, n);
  } finally {
    (Fl = !1), (An !== null || $n !== null) && (dc(), cc());
  }
}
function Tr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ml(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(j(231, t, typeof n));
  return n;
}
var xi = !1;
if (kt)
  try {
    var lr = {};
    Object.defineProperty(lr, 'passive', {
      get: function () {
        xi = !0;
      },
    }),
      window.addEventListener('test', lr, lr),
      window.removeEventListener('test', lr, lr);
  } catch {
    xi = !1;
  }
function ap(e, t, n, r, o, l, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (p) {
    this.onError(p);
  }
}
var wr = !1,
  Uo = null,
  Fo = !1,
  ki = null,
  cp = {
    onError: function (e) {
      (wr = !0), (Uo = e);
    },
  };
function fp(e, t, n, r, o, l, i, u, s) {
  (wr = !1), (Uo = null), ap.apply(cp, arguments);
}
function dp(e, t, n, r, o, l, i, u, s) {
  if ((fp.apply(this, arguments), wr)) {
    if (wr) {
      var a = Uo;
      (wr = !1), (Uo = null);
    } else throw Error(j(198));
    Fo || ((Fo = !0), (ki = a));
  }
}
function Sn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function hc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null &&
        ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function xs(e) {
  if (Sn(e) !== e) throw Error(j(188));
}
function pp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Sn(e)), t === null)) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return xs(o), e;
        if (l === r) return xs(o), t;
        l = l.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== r.return) (n = o), (r = l);
    else {
      for (var i = !1, u = o.child; u; ) {
        if (u === n) {
          (i = !0), (n = o), (r = l);
          break;
        }
        if (u === r) {
          (i = !0), (r = o), (n = l);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = l.child; u; ) {
          if (u === n) {
            (i = !0), (n = l), (r = o);
            break;
          }
          if (u === r) {
            (i = !0), (r = l), (n = o);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function mc(e) {
  return (e = pp(e)), e !== null ? vc(e) : null;
}
function vc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = vc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var yc = Ge.unstable_scheduleCallback,
  ks = Ge.unstable_cancelCallback,
  hp = Ge.unstable_shouldYield,
  mp = Ge.unstable_requestPaint,
  fe = Ge.unstable_now,
  vp = Ge.unstable_getCurrentPriorityLevel,
  wu = Ge.unstable_ImmediatePriority,
  gc = Ge.unstable_UserBlockingPriority,
  Bo = Ge.unstable_NormalPriority,
  yp = Ge.unstable_LowPriority,
  wc = Ge.unstable_IdlePriority,
  fl = null,
  mt = null;
function gp(e) {
  if (mt && typeof mt.onCommitFiberRoot == 'function')
    try {
      mt.onCommitFiberRoot(
        fl,
        e,
        void 0,
        (e.current.flags & 128) === 128,
      );
    } catch {}
}
var at = Math.clz32 ? Math.clz32 : Ep,
  wp = Math.log,
  Sp = Math.LN2;
function Ep(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((wp(e) / Sp) | 0)) | 0;
}
var io = 64,
  uo = 4194304;
function mr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ao(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~o;
    u !== 0 ? (r = mr(u)) : ((l &= i), l !== 0 && (r = mr(l)));
  } else (i = n & ~o), i !== 0 ? (r = mr(i)) : l !== 0 && (r = mr(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r),
    (l = t & -t),
    o >= l || (o === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - at(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function xp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function kp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var i = 31 - at(l),
      u = 1 << i,
      s = o[i];
    s === -1
      ? (!(u & n) || u & r) && (o[i] = xp(u, t))
      : s <= t && (e.expiredLanes |= u),
      (l &= ~u);
  }
}
function Ci(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Sc() {
  var e = io;
  return (io <<= 1), !(io & 4194240) && (io = 64), e;
}
function Bl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Kr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - at(t)),
    (e[t] = n);
}
function Cp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - at(n),
      l = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function Su(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - at(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var G = 0;
function Ec(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var xc,
  Eu,
  kc,
  Cc,
  Pc,
  Pi = !1,
  so = [],
  Ut = null,
  Ft = null,
  Bt = null,
  Nr = new Map(),
  Lr = new Map(),
  It = [],
  Pp =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function Cs(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Ut = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Ft = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Bt = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Nr.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Lr.delete(t.pointerId);
  }
}
function ir(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = Gr(t)), t !== null && Eu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function _p(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (Ut = ir(Ut, e, t, n, r, o)), !0;
    case 'dragenter':
      return (Ft = ir(Ft, e, t, n, r, o)), !0;
    case 'mouseover':
      return (Bt = ir(Bt, e, t, n, r, o)), !0;
    case 'pointerover':
      var l = o.pointerId;
      return Nr.set(l, ir(Nr.get(l) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (
        (l = o.pointerId),
        Lr.set(l, ir(Lr.get(l) || null, e, t, n, r, o)),
        !0
      );
  }
  return !1;
}
function _c(e) {
  var t = an(e.target);
  if (t !== null) {
    var n = Sn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = hc(n)), t !== null)) {
          (e.blockedOn = t),
            Pc(e.priority, function () {
              kc(n);
            });
          return;
        }
      } else if (
        t === 3 &&
        n.stateNode.current.memoizedState.isDehydrated
      ) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function _o(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = _i(
      e.domEventName,
      e.eventSystemFlags,
      t[0],
      e.nativeEvent,
    );
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Si = r), n.target.dispatchEvent(r), (Si = null);
    } else
      return (t = Gr(n)), t !== null && Eu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ps(e, t, n) {
  _o(e) && n.delete(t);
}
function Op() {
  (Pi = !1),
    Ut !== null && _o(Ut) && (Ut = null),
    Ft !== null && _o(Ft) && (Ft = null),
    Bt !== null && _o(Bt) && (Bt = null),
    Nr.forEach(Ps),
    Lr.forEach(Ps);
}
function ur(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Pi ||
      ((Pi = !0),
      Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority, Op)));
}
function Ir(e) {
  function t(o) {
    return ur(o, e);
  }
  if (0 < so.length) {
    ur(so[0], e);
    for (var n = 1; n < so.length; n++) {
      var r = so[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ut !== null && ur(Ut, e),
      Ft !== null && ur(Ft, e),
      Bt !== null && ur(Bt, e),
      Nr.forEach(t),
      Lr.forEach(t),
      n = 0;
    n < It.length;
    n++
  )
    (r = It[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < It.length && ((n = It[0]), n.blockedOn === null); )
    _c(n), n.blockedOn === null && It.shift();
}
var Vn = Ot.ReactCurrentBatchConfig,
  $o = !0;
function jp(e, t, n, r) {
  var o = G,
    l = Vn.transition;
  Vn.transition = null;
  try {
    (G = 1), xu(e, t, n, r);
  } finally {
    (G = o), (Vn.transition = l);
  }
}
function Tp(e, t, n, r) {
  var o = G,
    l = Vn.transition;
  Vn.transition = null;
  try {
    (G = 4), xu(e, t, n, r);
  } finally {
    (G = o), (Vn.transition = l);
  }
}
function xu(e, t, n, r) {
  if ($o) {
    var o = _i(e, t, n, r);
    if (o === null) Gl(e, t, r, Vo, n), Cs(e, r);
    else if (_p(o, e, t, n, r)) r.stopPropagation();
    else if ((Cs(e, r), t & 4 && -1 < Pp.indexOf(e))) {
      for (; o !== null; ) {
        var l = Gr(o);
        if (
          (l !== null && xc(l),
          (l = _i(e, t, n, r)),
          l === null && Gl(e, t, r, Vo, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else Gl(e, t, r, null, n);
  }
}
var Vo = null;
function _i(e, t, n, r) {
  if (((Vo = null), (e = gu(r)), (e = an(e)), e !== null))
    if (((t = Sn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = hc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Vo = e), null;
}
function Oc(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (vp()) {
        case wu:
          return 1;
        case gc:
          return 4;
        case Bo:
        case yp:
          return 16;
        case wc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var zt = null,
  ku = null,
  Oo = null;
function jc() {
  if (Oo) return Oo;
  var e,
    t = ku,
    n = t.length,
    r,
    o = 'value' in zt ? zt.value : zt.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
  return (Oo = o.slice(e, 1 < r ? 1 - r : void 0));
}
function jo(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ao() {
  return !0;
}
function _s() {
  return !1;
}
function Ze(e) {
  function t(n, r, o, l, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) &&
        ((n = e[u]), (this[u] = n ? n(l) : l[u]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null
          ? l.defaultPrevented
          : l.returnValue === !1
      )
        ? ao
        : _s),
      (this.isPropagationStopped = _s),
      this
    );
  }
  return (
    se(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' &&
              (n.returnValue = !1),
          (this.isDefaultPrevented = ao));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' &&
              (n.cancelBubble = !0),
          (this.isPropagationStopped = ao));
      },
      persist: function () {},
      isPersistent: ao,
    }),
    t
  );
}
var er = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Cu = Ze(er),
  Yr = se({}, er, { view: 0, detail: 0 }),
  Np = Ze(Yr),
  Al,
  $l,
  sr,
  dl = se({}, Yr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Pu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== sr &&
            (sr && e.type === 'mousemove'
              ? ((Al = e.screenX - sr.screenX),
                ($l = e.screenY - sr.screenY))
              : ($l = Al = 0),
            (sr = e)),
          Al);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : $l;
    },
  }),
  Os = Ze(dl),
  Lp = se({}, dl, { dataTransfer: 0 }),
  Ip = Ze(Lp),
  Rp = se({}, Yr, { relatedTarget: 0 }),
  Vl = Ze(Rp),
  zp = se({}, er, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0,
  }),
  Mp = Ze(zp),
  Dp = se({}, er, {
    clipboardData: function (e) {
      return 'clipboardData' in e
        ? e.clipboardData
        : window.clipboardData;
    },
  }),
  Up = Ze(Dp),
  Fp = se({}, er, { data: 0 }),
  js = Ze(Fp),
  Bp = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Ap = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  $p = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function Vp(e) {
  var t = this.nativeEvent;
  return t.getModifierState
    ? t.getModifierState(e)
    : (e = $p[e])
    ? !!t[e]
    : !1;
}
function Pu() {
  return Vp;
}
var Wp = se({}, Yr, {
    key: function (e) {
      if (e.key) {
        var t = Bp[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = jo(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Ap[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Pu,
    charCode: function (e) {
      return e.type === 'keypress' ? jo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? jo(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  bp = Ze(Wp),
  Hp = se({}, dl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ts = Ze(Hp),
  Qp = se({}, Yr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Pu,
  }),
  Kp = Ze(Qp),
  Yp = se({}, er, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0,
  }),
  Gp = Ze(Yp),
  Xp = se({}, dl, {
    deltaX: function (e) {
      return 'deltaX' in e
        ? e.deltaX
        : 'wheelDeltaX' in e
        ? -e.wheelDeltaX
        : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Zp = Ze(Xp),
  Jp = [9, 13, 27, 32],
  _u = kt && 'CompositionEvent' in window,
  Sr = null;
kt && 'documentMode' in document && (Sr = document.documentMode);
var qp = kt && 'TextEvent' in window && !Sr,
  Tc = kt && (!_u || (Sr && 8 < Sr && 11 >= Sr)),
  Ns = ' ',
  Ls = !1;
function Nc(e, t) {
  switch (e) {
    case 'keyup':
      return Jp.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Lc(e) {
  return (
    (e = e.detail),
    typeof e == 'object' && 'data' in e ? e.data : null
  );
}
var Tn = !1;
function eh(e, t) {
  switch (e) {
    case 'compositionend':
      return Lc(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Ls = !0), Ns);
    case 'textInput':
      return (e = t.data), e === Ns && Ls ? null : e;
    default:
      return null;
  }
}
function th(e, t) {
  if (Tn)
    return e === 'compositionend' || (!_u && Nc(e, t))
      ? ((e = jc()), (Oo = ku = zt = null), (Tn = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (
        !(t.ctrlKey || t.altKey || t.metaKey) ||
        (t.ctrlKey && t.altKey)
      ) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return Tc && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var nh = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Is(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!nh[e.type] : t === 'textarea';
}
function Ic(e, t, n, r) {
  ac(r),
    (t = Wo(t, 'onChange')),
    0 < t.length &&
      ((n = new Cu('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Er = null,
  Rr = null;
function rh(e) {
  Wc(e, 0);
}
function pl(e) {
  var t = In(e);
  if (nc(t)) return e;
}
function oh(e, t) {
  if (e === 'change') return t;
}
var Rc = !1;
if (kt) {
  var Wl;
  if (kt) {
    var bl = 'oninput' in document;
    if (!bl) {
      var Rs = document.createElement('div');
      Rs.setAttribute('oninput', 'return;'),
        (bl = typeof Rs.oninput == 'function');
    }
    Wl = bl;
  } else Wl = !1;
  Rc = Wl && (!document.documentMode || 9 < document.documentMode);
}
function zs() {
  Er && (Er.detachEvent('onpropertychange', zc), (Rr = Er = null));
}
function zc(e) {
  if (e.propertyName === 'value' && pl(Rr)) {
    var t = [];
    Ic(t, Rr, e, gu(e)), pc(rh, t);
  }
}
function lh(e, t, n) {
  e === 'focusin'
    ? (zs(),
      (Er = t),
      (Rr = n),
      Er.attachEvent('onpropertychange', zc))
    : e === 'focusout' && zs();
}
function ih(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return pl(Rr);
}
function uh(e, t) {
  if (e === 'click') return pl(t);
}
function sh(e, t) {
  if (e === 'input' || e === 'change') return pl(t);
}
function ah(e, t) {
  return (
    (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
  );
}
var ft = typeof Object.is == 'function' ? Object.is : ah;
function zr(e, t) {
  if (ft(e, t)) return !0;
  if (
    typeof e != 'object' ||
    e === null ||
    typeof t != 'object' ||
    t === null
  )
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!si.call(t, o) || !ft(e[o], t[o])) return !1;
  }
  return !0;
}
function Ms(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ds(e, t) {
  var n = Ms(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ms(n);
  }
}
function Mc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Mc(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Dc() {
  for (var e = window, t = Do(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Do(e.document);
  }
  return t;
}
function Ou(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function ch(e) {
  var t = Dc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Mc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ou(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e =
          ((t = n.ownerDocument || document) && t.defaultView) ||
          window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          l = Math.min(r.start, o);
        (r = r.end === void 0 ? l : Math.min(r.end, o)),
          !e.extend && l > r && ((o = r), (r = l), (l = o)),
          (o = Ds(n, l));
        var i = Ds(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (
      typeof n.focus == 'function' && n.focus(), n = 0;
      n < t.length;
      n++
    )
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var fh =
    kt && 'documentMode' in document && 11 >= document.documentMode,
  Nn = null,
  Oi = null,
  xr = null,
  ji = !1;
function Us(e, t, n) {
  var r =
    n.window === n
      ? n.document
      : n.nodeType === 9
      ? n
      : n.ownerDocument;
  ji ||
    Nn == null ||
    Nn !== Do(r) ||
    ((r = Nn),
    'selectionStart' in r && Ou(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (xr && zr(xr, r)) ||
      ((xr = r),
      (r = Wo(Oi, 'onSelect')),
      0 < r.length &&
        ((t = new Cu('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Nn))));
}
function co(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Ln = {
    animationend: co('Animation', 'AnimationEnd'),
    animationiteration: co('Animation', 'AnimationIteration'),
    animationstart: co('Animation', 'AnimationStart'),
    transitionend: co('Transition', 'TransitionEnd'),
  },
  Hl = {},
  Uc = {};
kt &&
  ((Uc = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Ln.animationend.animation,
    delete Ln.animationiteration.animation,
    delete Ln.animationstart.animation),
  'TransitionEvent' in window || delete Ln.transitionend.transition);
function hl(e) {
  if (Hl[e]) return Hl[e];
  if (!Ln[e]) return e;
  var t = Ln[e],
    n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Uc) return (Hl[e] = t[n]);
  return e;
}
var Fc = hl('animationend'),
  Bc = hl('animationiteration'),
  Ac = hl('animationstart'),
  $c = hl('transitionend'),
  Vc = new Map(),
  Fs =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    );
function Gt(e, t) {
  Vc.set(e, t), wn(t, [e]);
}
for (var Ql = 0; Ql < Fs.length; Ql++) {
  var Kl = Fs[Ql],
    dh = Kl.toLowerCase(),
    ph = Kl[0].toUpperCase() + Kl.slice(1);
  Gt(dh, 'on' + ph);
}
Gt(Fc, 'onAnimationEnd');
Gt(Bc, 'onAnimationIteration');
Gt(Ac, 'onAnimationStart');
Gt('dblclick', 'onDoubleClick');
Gt('focusin', 'onFocus');
Gt('focusout', 'onBlur');
Gt($c, 'onTransitionEnd');
Hn('onMouseEnter', ['mouseout', 'mouseover']);
Hn('onMouseLeave', ['mouseout', 'mouseover']);
Hn('onPointerEnter', ['pointerout', 'pointerover']);
Hn('onPointerLeave', ['pointerout', 'pointerover']);
wn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(
    ' ',
  ),
);
wn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' ',
  ),
);
wn('onBeforeInput', [
  'compositionend',
  'keypress',
  'textInput',
  'paste',
]);
wn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(
    ' ',
  ),
);
wn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(
    ' ',
  ),
);
wn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(
    ' ',
  ),
);
var vr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  hh = new Set(
    'cancel close invalid load scroll toggle'.split(' ').concat(vr),
  );
function Bs(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n),
    dp(r, t, void 0, e),
    (e.currentTarget = null);
}
function Wc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== l && o.isPropagationStopped()))
            break e;
          Bs(o, u, a), (l = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== l && o.isPropagationStopped())
          )
            break e;
          Bs(o, u, a), (l = s);
        }
    }
  }
  if (Fo) throw ((e = ki), (Fo = !1), (ki = null), e);
}
function ee(e, t) {
  var n = t[Ri];
  n === void 0 && (n = t[Ri] = new Set());
  var r = e + '__bubble';
  n.has(r) || (bc(t, e, 2, !1), n.add(r));
}
function Yl(e, t, n) {
  var r = 0;
  t && (r |= 4), bc(n, e, r, t);
}
var fo = '_reactListening' + Math.random().toString(36).slice(2);
function Mr(e) {
  if (!e[fo]) {
    (e[fo] = !0),
      Za.forEach(function (n) {
        n !== 'selectionchange' &&
          (hh.has(n) || Yl(n, !1, e), Yl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null ||
      t[fo] ||
      ((t[fo] = !0), Yl('selectionchange', !1, t));
  }
}
function bc(e, t, n, r) {
  switch (Oc(t)) {
    case 1:
      var o = jp;
      break;
    case 4:
      o = Tp;
      break;
    default:
      o = xu;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !xi ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Gl(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === o || (u.nodeType === 8 && u.parentNode === o))
          break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = an(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = l = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  pc(function () {
    var a = l,
      p = gu(n),
      f = [];
    e: {
      var v = Vc.get(e);
      if (v !== void 0) {
        var x = Cu,
          k = e;
        switch (e) {
          case 'keypress':
            if (jo(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            x = bp;
            break;
          case 'focusin':
            (k = 'focus'), (x = Vl);
            break;
          case 'focusout':
            (k = 'blur'), (x = Vl);
            break;
          case 'beforeblur':
          case 'afterblur':
            x = Vl;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            x = Os;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            x = Ip;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            x = Kp;
            break;
          case Fc:
          case Bc:
          case Ac:
            x = Mp;
            break;
          case $c:
            x = Gp;
            break;
          case 'scroll':
            x = Np;
            break;
          case 'wheel':
            x = Zp;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            x = Up;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            x = Ts;
        }
        var C = (t & 4) !== 0,
          L = !C && e === 'scroll',
          h = C ? (v !== null ? v + 'Capture' : null) : v;
        C = [];
        for (var c = a, d; c !== null; ) {
          d = c;
          var S = d.stateNode;
          if (
            (d.tag === 5 &&
              S !== null &&
              ((d = S),
              h !== null &&
                ((S = Tr(c, h)), S != null && C.push(Dr(c, S, d)))),
            L)
          )
            break;
          c = c.return;
        }
        0 < C.length &&
          ((v = new x(v, k, null, n, p)),
          f.push({ event: v, listeners: C }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === 'mouseover' || e === 'pointerover'),
          (x = e === 'mouseout' || e === 'pointerout'),
          v &&
            n !== Si &&
            (k = n.relatedTarget || n.fromElement) &&
            (an(k) || k[Ct]))
        )
          break e;
        if (
          (x || v) &&
          ((v =
            p.window === p
              ? p
              : (v = p.ownerDocument)
              ? v.defaultView || v.parentWindow
              : window),
          x
            ? ((k = n.relatedTarget || n.toElement),
              (x = a),
              (k = k ? an(k) : null),
              k !== null &&
                ((L = Sn(k)),
                k !== L || (k.tag !== 5 && k.tag !== 6)) &&
                (k = null))
            : ((x = null), (k = a)),
          x !== k)
        ) {
          if (
            ((C = Os),
            (S = 'onMouseLeave'),
            (h = 'onMouseEnter'),
            (c = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((C = Ts),
              (S = 'onPointerLeave'),
              (h = 'onPointerEnter'),
              (c = 'pointer')),
            (L = x == null ? v : In(x)),
            (d = k == null ? v : In(k)),
            (v = new C(S, c + 'leave', x, n, p)),
            (v.target = L),
            (v.relatedTarget = d),
            (S = null),
            an(p) === a &&
              ((C = new C(h, c + 'enter', k, n, p)),
              (C.target = d),
              (C.relatedTarget = L),
              (S = C)),
            (L = S),
            x && k)
          )
            t: {
              for (C = x, h = k, c = 0, d = C; d; d = xn(d)) c++;
              for (d = 0, S = h; S; S = xn(S)) d++;
              for (; 0 < c - d; ) (C = xn(C)), c--;
              for (; 0 < d - c; ) (h = xn(h)), d--;
              for (; c--; ) {
                if (C === h || (h !== null && C === h.alternate))
                  break t;
                (C = xn(C)), (h = xn(h));
              }
              C = null;
            }
          else C = null;
          x !== null && As(f, v, x, C, !1),
            k !== null && L !== null && As(f, L, k, C, !0);
        }
      }
      e: {
        if (
          ((v = a ? In(a) : window),
          (x = v.nodeName && v.nodeName.toLowerCase()),
          x === 'select' || (x === 'input' && v.type === 'file'))
        )
          var P = oh;
        else if (Is(v))
          if (Rc) P = sh;
          else {
            P = ih;
            var N = lh;
          }
        else
          (x = v.nodeName) &&
            x.toLowerCase() === 'input' &&
            (v.type === 'checkbox' || v.type === 'radio') &&
            (P = uh);
        if (P && (P = P(e, a))) {
          Ic(f, P, n, p);
          break e;
        }
        N && N(e, v, a),
          e === 'focusout' &&
            (N = v._wrapperState) &&
            N.controlled &&
            v.type === 'number' &&
            mi(v, 'number', v.value);
      }
      switch (((N = a ? In(a) : window), e)) {
        case 'focusin':
          (Is(N) || N.contentEditable === 'true') &&
            ((Nn = N), (Oi = a), (xr = null));
          break;
        case 'focusout':
          xr = Oi = Nn = null;
          break;
        case 'mousedown':
          ji = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (ji = !1), Us(f, n, p);
          break;
        case 'selectionchange':
          if (fh) break;
        case 'keydown':
        case 'keyup':
          Us(f, n, p);
      }
      var R;
      if (_u)
        e: {
          switch (e) {
            case 'compositionstart':
              var O = 'onCompositionStart';
              break e;
            case 'compositionend':
              O = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              O = 'onCompositionUpdate';
              break e;
          }
          O = void 0;
        }
      else
        Tn
          ? Nc(e, n) && (O = 'onCompositionEnd')
          : e === 'keydown' &&
            n.keyCode === 229 &&
            (O = 'onCompositionStart');
      O &&
        (Tc &&
          n.locale !== 'ko' &&
          (Tn || O !== 'onCompositionStart'
            ? O === 'onCompositionEnd' && Tn && (R = jc())
            : ((zt = p),
              (ku = 'value' in zt ? zt.value : zt.textContent),
              (Tn = !0))),
        (N = Wo(a, O)),
        0 < N.length &&
          ((O = new js(O, e, null, n, p)),
          f.push({ event: O, listeners: N }),
          R
            ? (O.data = R)
            : ((R = Lc(n)), R !== null && (O.data = R)))),
        (R = qp ? eh(e, n) : th(e, n)) &&
          ((a = Wo(a, 'onBeforeInput')),
          0 < a.length &&
            ((p = new js('onBeforeInput', 'beforeinput', null, n, p)),
            f.push({ event: p, listeners: a }),
            (p.data = R)));
    }
    Wc(f, t);
  });
}
function Dr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Wo(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = Tr(e, n)),
      l != null && r.unshift(Dr(e, l, o)),
      (l = Tr(e, t)),
      l != null && r.push(Dr(e, l, o))),
      (e = e.return);
  }
  return r;
}
function xn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function As(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      o
        ? ((s = Tr(n, l)), s != null && i.unshift(Dr(n, s, u)))
        : o || ((s = Tr(n, l)), s != null && i.push(Dr(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var mh = /\r\n?/g,
  vh = /\u0000|\uFFFD/g;
function $s(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      mh,
      `
`,
    )
    .replace(vh, '');
}
function po(e, t, n) {
  if (((t = $s(t)), $s(e) !== t && n)) throw Error(j(425));
}
function bo() {}
var Ti = null,
  Ni = null;
function Li(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ii = typeof setTimeout == 'function' ? setTimeout : void 0,
  yh = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Vs = typeof Promise == 'function' ? Promise : void 0,
  gh =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Vs < 'u'
      ? function (e) {
          return Vs.resolve(null).then(e).catch(wh);
        }
      : Ii;
function wh(e) {
  setTimeout(function () {
    throw e;
  });
}
function Xl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), Ir(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  Ir(t);
}
function At(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?'))
        break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Ws(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var tr = Math.random().toString(36).slice(2),
  ht = '__reactFiber$' + tr,
  Ur = '__reactProps$' + tr,
  Ct = '__reactContainer$' + tr,
  Ri = '__reactEvents$' + tr,
  Sh = '__reactListeners$' + tr,
  Eh = '__reactHandles$' + tr;
function an(e) {
  var t = e[ht];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ct] || n[ht])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ws(e); e !== null; ) {
          if ((n = e[ht])) return n;
          e = Ws(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Gr(e) {
  return (
    (e = e[ht] || e[Ct]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
      ? null
      : e
  );
}
function In(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function ml(e) {
  return e[Ur] || null;
}
var zi = [],
  Rn = -1;
function Xt(e) {
  return { current: e };
}
function te(e) {
  0 > Rn || ((e.current = zi[Rn]), (zi[Rn] = null), Rn--);
}
function q(e, t) {
  Rn++, (zi[Rn] = e.current), (e.current = t);
}
var Yt = {},
  Le = Xt(Yt),
  $e = Xt(!1),
  hn = Yt;
function Qn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Yt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    l;
  for (l in n) o[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Ve(e) {
  return (e = e.childContextTypes), e != null;
}
function Ho() {
  te($e), te(Le);
}
function bs(e, t, n) {
  if (Le.current !== Yt) throw Error(j(168));
  q(Le, t), q($e, n);
}
function Hc(e, t, n) {
  var r = e.stateNode;
  if (
    ((t = t.childContextTypes),
    typeof r.getChildContext != 'function')
  )
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t)) throw Error(j(108, lp(e) || 'Unknown', o));
  return se({}, n, r);
}
function Qo(e) {
  return (
    (e =
      ((e = e.stateNode) &&
        e.__reactInternalMemoizedMergedChildContext) ||
      Yt),
    (hn = Le.current),
    q(Le, e),
    q($e, $e.current),
    !0
  );
}
function Hs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n
    ? ((e = Hc(e, t, hn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      te($e),
      te(Le),
      q(Le, e))
    : te($e),
    q($e, n);
}
var wt = null,
  vl = !1,
  Zl = !1;
function Qc(e) {
  wt === null ? (wt = [e]) : wt.push(e);
}
function xh(e) {
  (vl = !0), Qc(e);
}
function Zt() {
  if (!Zl && wt !== null) {
    Zl = !0;
    var e = 0,
      t = G;
    try {
      var n = wt;
      for (G = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (wt = null), (vl = !1);
    } catch (o) {
      throw (wt !== null && (wt = wt.slice(e + 1)), yc(wu, Zt), o);
    } finally {
      (G = t), (Zl = !1);
    }
  }
  return null;
}
var zn = [],
  Mn = 0,
  Ko = null,
  Yo = 0,
  Je = [],
  qe = 0,
  mn = null,
  St = 1,
  Et = '';
function rn(e, t) {
  (zn[Mn++] = Yo), (zn[Mn++] = Ko), (Ko = e), (Yo = t);
}
function Kc(e, t, n) {
  (Je[qe++] = St), (Je[qe++] = Et), (Je[qe++] = mn), (mn = e);
  var r = St;
  e = Et;
  var o = 32 - at(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var l = 32 - at(t) + o;
  if (30 < l) {
    var i = o - (o % 5);
    (l = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (St = (1 << (32 - at(t) + o)) | (n << o) | r),
      (Et = l + e);
  } else (St = (1 << l) | (n << o) | r), (Et = e);
}
function ju(e) {
  e.return !== null && (rn(e, 1), Kc(e, 1, 0));
}
function Tu(e) {
  for (; e === Ko; )
    (Ko = zn[--Mn]),
      (zn[Mn] = null),
      (Yo = zn[--Mn]),
      (zn[Mn] = null);
  for (; e === mn; )
    (mn = Je[--qe]),
      (Je[qe] = null),
      (Et = Je[--qe]),
      (Je[qe] = null),
      (St = Je[--qe]),
      (Je[qe] = null);
}
var Ye = null,
  Ke = null,
  re = !1,
  st = null;
function Yc(e, t) {
  var n = et(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Qs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 ||
          n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ye = e), (Ke = At(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null
          ? ((e.stateNode = t), (Ye = e), (Ke = null), !0)
          : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = mn !== null ? { id: St, overflow: Et } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = et(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ye = e),
            (Ke = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Mi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Di(e) {
  if (re) {
    var t = Ke;
    if (t) {
      var n = t;
      if (!Qs(e, t)) {
        if (Mi(e)) throw Error(j(418));
        t = At(n.nextSibling);
        var r = Ye;
        t && Qs(e, t)
          ? Yc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (re = !1), (Ye = e));
      }
    } else {
      if (Mi(e)) throw Error(j(418));
      (e.flags = (e.flags & -4097) | 2), (re = !1), (Ye = e);
    }
  }
}
function Ks(e) {
  for (
    e = e.return;
    e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

  )
    e = e.return;
  Ye = e;
}
function ho(e) {
  if (e !== Ye) return !1;
  if (!re) return Ks(e), (re = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t =
        t !== 'head' &&
        t !== 'body' &&
        !Li(e.type, e.memoizedProps))),
    t && (t = Ke))
  ) {
    if (Mi(e)) throw (Gc(), Error(j(418)));
    for (; t; ) Yc(e, t), (t = At(t.nextSibling));
  }
  if ((Ks(e), e.tag === 13)) {
    if (
      ((e = e.memoizedState),
      (e = e !== null ? e.dehydrated : null),
      !e)
    )
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Ke = At(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Ke = null;
    }
  } else Ke = Ye ? At(e.stateNode.nextSibling) : null;
  return !0;
}
function Gc() {
  for (var e = Ke; e; ) e = At(e.nextSibling);
}
function Kn() {
  (Ke = Ye = null), (re = !1);
}
function Nu(e) {
  st === null ? (st = [e]) : st.push(e);
}
var kh = Ot.ReactCurrentBatchConfig;
function ar(e, t, n) {
  if (
    ((e = n.ref),
    e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(j(147, e));
      var o = r,
        l = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (i) {
            var u = o.refs;
            i === null ? delete u[l] : (u[l] = i);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != 'string') throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function mo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      j(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e,
      ),
    ))
  );
}
function Ys(e) {
  var t = e._init;
  return t(e._payload);
}
function Xc(e) {
  function t(h, c) {
    if (e) {
      var d = h.deletions;
      d === null ? ((h.deletions = [c]), (h.flags |= 16)) : d.push(c);
    }
  }
  function n(h, c) {
    if (!e) return null;
    for (; c !== null; ) t(h, c), (c = c.sibling);
    return null;
  }
  function r(h, c) {
    for (h = new Map(); c !== null; )
      c.key !== null ? h.set(c.key, c) : h.set(c.index, c),
        (c = c.sibling);
    return h;
  }
  function o(h, c) {
    return (h = bt(h, c)), (h.index = 0), (h.sibling = null), h;
  }
  function l(h, c, d) {
    return (
      (h.index = d),
      e
        ? ((d = h.alternate),
          d !== null
            ? ((d = d.index), d < c ? ((h.flags |= 2), c) : d)
            : ((h.flags |= 2), c))
        : ((h.flags |= 1048576), c)
    );
  }
  function i(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function u(h, c, d, S) {
    return c === null || c.tag !== 6
      ? ((c = oi(d, h.mode, S)), (c.return = h), c)
      : ((c = o(c, d)), (c.return = h), c);
  }
  function s(h, c, d, S) {
    var P = d.type;
    return P === jn
      ? p(h, c, d.props.children, S, d.key)
      : c !== null &&
        (c.elementType === P ||
          (typeof P == 'object' &&
            P !== null &&
            P.$$typeof === Nt &&
            Ys(P) === c.type))
      ? ((S = o(c, d.props)),
        (S.ref = ar(h, c, d)),
        (S.return = h),
        S)
      : ((S = Mo(d.type, d.key, d.props, null, h.mode, S)),
        (S.ref = ar(h, c, d)),
        (S.return = h),
        S);
  }
  function a(h, c, d, S) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== d.containerInfo ||
      c.stateNode.implementation !== d.implementation
      ? ((c = li(d, h.mode, S)), (c.return = h), c)
      : ((c = o(c, d.children || [])), (c.return = h), c);
  }
  function p(h, c, d, S, P) {
    return c === null || c.tag !== 7
      ? ((c = pn(d, h.mode, S, P)), (c.return = h), c)
      : ((c = o(c, d)), (c.return = h), c);
  }
  function f(h, c, d) {
    if ((typeof c == 'string' && c !== '') || typeof c == 'number')
      return (c = oi('' + c, h.mode, d)), (c.return = h), c;
    if (typeof c == 'object' && c !== null) {
      switch (c.$$typeof) {
        case ro:
          return (
            (d = Mo(c.type, c.key, c.props, null, h.mode, d)),
            (d.ref = ar(h, null, c)),
            (d.return = h),
            d
          );
        case On:
          return (c = li(c, h.mode, d)), (c.return = h), c;
        case Nt:
          var S = c._init;
          return f(h, S(c._payload), d);
      }
      if (hr(c) || or(c))
        return (c = pn(c, h.mode, d, null)), (c.return = h), c;
      mo(h, c);
    }
    return null;
  }
  function v(h, c, d, S) {
    var P = c !== null ? c.key : null;
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return P !== null ? null : u(h, c, '' + d, S);
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case ro:
          return d.key === P ? s(h, c, d, S) : null;
        case On:
          return d.key === P ? a(h, c, d, S) : null;
        case Nt:
          return (P = d._init), v(h, c, P(d._payload), S);
      }
      if (hr(d) || or(d))
        return P !== null ? null : p(h, c, d, S, null);
      mo(h, d);
    }
    return null;
  }
  function x(h, c, d, S, P) {
    if ((typeof S == 'string' && S !== '') || typeof S == 'number')
      return (h = h.get(d) || null), u(c, h, '' + S, P);
    if (typeof S == 'object' && S !== null) {
      switch (S.$$typeof) {
        case ro:
          return (
            (h = h.get(S.key === null ? d : S.key) || null),
            s(c, h, S, P)
          );
        case On:
          return (
            (h = h.get(S.key === null ? d : S.key) || null),
            a(c, h, S, P)
          );
        case Nt:
          var N = S._init;
          return x(h, c, d, N(S._payload), P);
      }
      if (hr(S) || or(S))
        return (h = h.get(d) || null), p(c, h, S, P, null);
      mo(c, S);
    }
    return null;
  }
  function k(h, c, d, S) {
    for (
      var P = null, N = null, R = c, O = (c = 0), $ = null;
      R !== null && O < d.length;
      O++
    ) {
      R.index > O ? (($ = R), (R = null)) : ($ = R.sibling);
      var D = v(h, R, d[O], S);
      if (D === null) {
        R === null && (R = $);
        break;
      }
      e && R && D.alternate === null && t(h, R),
        (c = l(D, c, O)),
        N === null ? (P = D) : (N.sibling = D),
        (N = D),
        (R = $);
    }
    if (O === d.length) return n(h, R), re && rn(h, O), P;
    if (R === null) {
      for (; O < d.length; O++)
        (R = f(h, d[O], S)),
          R !== null &&
            ((c = l(R, c, O)),
            N === null ? (P = R) : (N.sibling = R),
            (N = R));
      return re && rn(h, O), P;
    }
    for (R = r(h, R); O < d.length; O++)
      ($ = x(R, h, O, d[O], S)),
        $ !== null &&
          (e &&
            $.alternate !== null &&
            R.delete($.key === null ? O : $.key),
          (c = l($, c, O)),
          N === null ? (P = $) : (N.sibling = $),
          (N = $));
    return (
      e &&
        R.forEach(function (H) {
          return t(h, H);
        }),
      re && rn(h, O),
      P
    );
  }
  function C(h, c, d, S) {
    var P = or(d);
    if (typeof P != 'function') throw Error(j(150));
    if (((d = P.call(d)), d == null)) throw Error(j(151));
    for (
      var N = (P = null), R = c, O = (c = 0), $ = null, D = d.next();
      R !== null && !D.done;
      O++, D = d.next()
    ) {
      R.index > O ? (($ = R), (R = null)) : ($ = R.sibling);
      var H = v(h, R, D.value, S);
      if (H === null) {
        R === null && (R = $);
        break;
      }
      e && R && H.alternate === null && t(h, R),
        (c = l(H, c, O)),
        N === null ? (P = H) : (N.sibling = H),
        (N = H),
        (R = $);
    }
    if (D.done) return n(h, R), re && rn(h, O), P;
    if (R === null) {
      for (; !D.done; O++, D = d.next())
        (D = f(h, D.value, S)),
          D !== null &&
            ((c = l(D, c, O)),
            N === null ? (P = D) : (N.sibling = D),
            (N = D));
      return re && rn(h, O), P;
    }
    for (R = r(h, R); !D.done; O++, D = d.next())
      (D = x(R, h, O, D.value, S)),
        D !== null &&
          (e &&
            D.alternate !== null &&
            R.delete(D.key === null ? O : D.key),
          (c = l(D, c, O)),
          N === null ? (P = D) : (N.sibling = D),
          (N = D));
    return (
      e &&
        R.forEach(function (Z) {
          return t(h, Z);
        }),
      re && rn(h, O),
      P
    );
  }
  function L(h, c, d, S) {
    if (
      (typeof d == 'object' &&
        d !== null &&
        d.type === jn &&
        d.key === null &&
        (d = d.props.children),
      typeof d == 'object' && d !== null)
    ) {
      switch (d.$$typeof) {
        case ro:
          e: {
            for (var P = d.key, N = c; N !== null; ) {
              if (N.key === P) {
                if (((P = d.type), P === jn)) {
                  if (N.tag === 7) {
                    n(h, N.sibling),
                      (c = o(N, d.props.children)),
                      (c.return = h),
                      (h = c);
                    break e;
                  }
                } else if (
                  N.elementType === P ||
                  (typeof P == 'object' &&
                    P !== null &&
                    P.$$typeof === Nt &&
                    Ys(P) === N.type)
                ) {
                  n(h, N.sibling),
                    (c = o(N, d.props)),
                    (c.ref = ar(h, N, d)),
                    (c.return = h),
                    (h = c);
                  break e;
                }
                n(h, N);
                break;
              } else t(h, N);
              N = N.sibling;
            }
            d.type === jn
              ? ((c = pn(d.props.children, h.mode, S, d.key)),
                (c.return = h),
                (h = c))
              : ((S = Mo(d.type, d.key, d.props, null, h.mode, S)),
                (S.ref = ar(h, c, d)),
                (S.return = h),
                (h = S));
          }
          return i(h);
        case On:
          e: {
            for (N = d.key; c !== null; ) {
              if (c.key === N)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === d.containerInfo &&
                  c.stateNode.implementation === d.implementation
                ) {
                  n(h, c.sibling),
                    (c = o(c, d.children || [])),
                    (c.return = h),
                    (h = c);
                  break e;
                } else {
                  n(h, c);
                  break;
                }
              else t(h, c);
              c = c.sibling;
            }
            (c = li(d, h.mode, S)), (c.return = h), (h = c);
          }
          return i(h);
        case Nt:
          return (N = d._init), L(h, c, N(d._payload), S);
      }
      if (hr(d)) return k(h, c, d, S);
      if (or(d)) return C(h, c, d, S);
      mo(h, d);
    }
    return (typeof d == 'string' && d !== '') || typeof d == 'number'
      ? ((d = '' + d),
        c !== null && c.tag === 6
          ? (n(h, c.sibling), (c = o(c, d)), (c.return = h), (h = c))
          : (n(h, c),
            (c = oi(d, h.mode, S)),
            (c.return = h),
            (h = c)),
        i(h))
      : n(h, c);
  }
  return L;
}
var Yn = Xc(!0),
  Zc = Xc(!1),
  Go = Xt(null),
  Xo = null,
  Dn = null,
  Lu = null;
function Iu() {
  Lu = Dn = Xo = null;
}
function Ru(e) {
  var t = Go.current;
  te(Go), (e._currentValue = t);
}
function Ui(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null &&
          (r.childLanes & t) !== t &&
          (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Wn(e, t) {
  (Xo = e),
    (Lu = Dn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ae = !0), (e.firstContext = null));
}
function nt(e) {
  var t = e._currentValue;
  if (Lu !== e)
    if (
      ((e = { context: e, memoizedValue: t, next: null }),
      Dn === null)
    ) {
      if (Xo === null) throw Error(j(308));
      (Dn = e), (Xo.dependencies = { lanes: 0, firstContext: e });
    } else Dn = Dn.next = e;
  return t;
}
var cn = null;
function zu(e) {
  cn === null ? (cn = [e]) : cn.push(e);
}
function Jc(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null
      ? ((n.next = n), zu(t))
      : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Pt(e, r)
  );
}
function Pt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (
    n !== null && (n.lanes |= t), n = e, e = e.return;
    e !== null;

  )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Lt = !1;
function Mu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function qc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function xt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function $t(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Q & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Pt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null
      ? ((t.next = t), zu(r))
      : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Pt(e, n)
  );
}
function To(e, t, n) {
  if (
    ((t = t.updateQueue),
    t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Su(e, n);
  }
}
function Gs(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (o = l = i) : (l = l.next = i), (n = n.next);
      } while (n !== null);
      l === null ? (o = l = t) : (l = l.next = t);
    } else o = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Zo(e, t, n, r) {
  var o = e.updateQueue;
  Lt = !1;
  var l = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    u = o.shared.pending;
  if (u !== null) {
    o.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), i === null ? (l = a) : (i.next = a), (i = s);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (u = p.lastBaseUpdate),
      u !== i &&
        (u === null ? (p.firstBaseUpdate = a) : (u.next = a),
        (p.lastBaseUpdate = s)));
  }
  if (l !== null) {
    var f = o.baseState;
    (i = 0), (p = a = s = null), (u = l);
    do {
      var v = u.lane,
        x = u.eventTime;
      if ((r & v) === v) {
        p !== null &&
          (p = p.next =
            {
              eventTime: x,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var k = e,
            C = u;
          switch (((v = t), (x = n), C.tag)) {
            case 1:
              if (((k = C.payload), typeof k == 'function')) {
                f = k.call(x, f, v);
                break e;
              }
              f = k;
              break e;
            case 3:
              k.flags = (k.flags & -65537) | 128;
            case 0:
              if (
                ((k = C.payload),
                (v = typeof k == 'function' ? k.call(x, f, v) : k),
                v == null)
              )
                break e;
              f = se({}, f, v);
              break e;
            case 2:
              Lt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (v = o.effects),
          v === null ? (o.effects = [u]) : v.push(u));
      } else
        (x = {
          eventTime: x,
          lane: v,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          p === null ? ((a = p = x), (s = f)) : (p = p.next = x),
          (i |= v);
      if (((u = u.next), u === null)) {
        if (((u = o.shared.pending), u === null)) break;
        (v = u),
          (u = v.next),
          (v.next = null),
          (o.lastBaseUpdate = v),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (p === null && (s = f),
      (o.baseState = s),
      (o.firstBaseUpdate = a),
      (o.lastBaseUpdate = p),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    (yn |= i), (e.lanes = i), (e.memoizedState = f);
  }
}
function Xs(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error(j(191, o));
        o.call(r);
      }
    }
}
var Xr = {},
  vt = Xt(Xr),
  Fr = Xt(Xr),
  Br = Xt(Xr);
function fn(e) {
  if (e === Xr) throw Error(j(174));
  return e;
}
function Du(e, t) {
  switch ((q(Br, t), q(Fr, e), q(vt, Xr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : yi(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = yi(t, e));
  }
  te(vt), q(vt, t);
}
function Gn() {
  te(vt), te(Fr), te(Br);
}
function ef(e) {
  fn(Br.current);
  var t = fn(vt.current),
    n = yi(t, e.type);
  t !== n && (q(Fr, e), q(vt, n));
}
function Uu(e) {
  Fr.current === e && (te(vt), te(Fr));
}
var ie = Xt(0);
function Jo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated),
        n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (
      t.tag === 19 &&
      t.memoizedProps.revealOrder !== void 0
    ) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Jl = [];
function Fu() {
  for (var e = 0; e < Jl.length; e++)
    Jl[e]._workInProgressVersionPrimary = null;
  Jl.length = 0;
}
var No = Ot.ReactCurrentDispatcher,
  ql = Ot.ReactCurrentBatchConfig,
  vn = 0,
  ue = null,
  me = null,
  ge = null,
  qo = !1,
  kr = !1,
  Ar = 0,
  Ch = 0;
function je() {
  throw Error(j(321));
}
function Bu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ft(e[n], t[n])) return !1;
  return !0;
}
function Au(e, t, n, r, o, l) {
  if (
    ((vn = l),
    (ue = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (No.current = e === null || e.memoizedState === null ? jh : Th),
    (e = n(r, o)),
    kr)
  ) {
    l = 0;
    do {
      if (((kr = !1), (Ar = 0), 25 <= l)) throw Error(j(301));
      (l += 1),
        (ge = me = null),
        (t.updateQueue = null),
        (No.current = Nh),
        (e = n(r, o));
    } while (kr);
  }
  if (
    ((No.current = el),
    (t = me !== null && me.next !== null),
    (vn = 0),
    (ge = me = ue = null),
    (qo = !1),
    t)
  )
    throw Error(j(300));
  return e;
}
function $u() {
  var e = Ar !== 0;
  return (Ar = 0), e;
}
function pt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (
    ge === null ? (ue.memoizedState = ge = e) : (ge = ge.next = e), ge
  );
}
function rt() {
  if (me === null) {
    var e = ue.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = me.next;
  var t = ge === null ? ue.memoizedState : ge.next;
  if (t !== null) (ge = t), (me = e);
  else {
    if (e === null) throw Error(j(310));
    (me = e),
      (e = {
        memoizedState: me.memoizedState,
        baseState: me.baseState,
        baseQueue: me.baseQueue,
        queue: me.queue,
        next: null,
      }),
      ge === null ? (ue.memoizedState = ge = e) : (ge = ge.next = e);
  }
  return ge;
}
function $r(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function ei(e) {
  var t = rt(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = me,
    o = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = l.next), (l.next = i);
    }
    (r.baseQueue = o = l), (n.pending = null);
  }
  if (o !== null) {
    (l = o.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      a = l;
    do {
      var p = a.lane;
      if ((vn & p) === p)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var f = {
          lane: p,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = f), (i = r)) : (s = s.next = f),
          (ue.lanes |= p),
          (yn |= p);
      }
      a = a.next;
    } while (a !== null && a !== l);
    s === null ? (i = r) : (s.next = u),
      ft(r, t.memoizedState) || (Ae = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (ue.lanes |= l), (yn |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ti(e) {
  var t = rt(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (l = e(l, i.action)), (i = i.next);
    while (i !== o);
    ft(l, t.memoizedState) || (Ae = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function tf() {}
function nf(e, t) {
  var n = ue,
    r = rt(),
    o = t(),
    l = !ft(r.memoizedState, o);
  if (
    (l && ((r.memoizedState = o), (Ae = !0)),
    (r = r.queue),
    Vu(lf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t ||
      l ||
      (ge !== null && ge.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Vr(9, of.bind(null, n, r, o, t), void 0, null),
      we === null)
    )
      throw Error(j(349));
    vn & 30 || rf(n, t, o);
  }
  return o;
}
function rf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function of(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), uf(t) && sf(e);
}
function lf(e, t, n) {
  return n(function () {
    uf(t) && sf(e);
  });
}
function uf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ft(e, n);
  } catch {
    return !0;
  }
}
function sf(e) {
  var t = Pt(e, 1);
  t !== null && ct(t, e, 1, -1);
}
function Zs(e) {
  var t = pt();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: $r,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Oh.bind(null, ue, e)),
    [t.memoizedState, e]
  );
}
function Vr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next),
            (n.next = e),
            (e.next = r),
            (t.lastEffect = e))),
    e
  );
}
function af() {
  return rt().memoizedState;
}
function Lo(e, t, n, r) {
  var o = pt();
  (ue.flags |= e),
    (o.memoizedState = Vr(1 | t, n, void 0, r === void 0 ? null : r));
}
function yl(e, t, n, r) {
  var o = rt();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (me !== null) {
    var i = me.memoizedState;
    if (((l = i.destroy), r !== null && Bu(r, i.deps))) {
      o.memoizedState = Vr(t, n, l, r);
      return;
    }
  }
  (ue.flags |= e), (o.memoizedState = Vr(1 | t, n, l, r));
}
function Js(e, t) {
  return Lo(8390656, 8, e, t);
}
function Vu(e, t) {
  return yl(2048, 8, e, t);
}
function cf(e, t) {
  return yl(4, 2, e, t);
}
function ff(e, t) {
  return yl(4, 4, e, t);
}
function df(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function pf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    yl(4, 4, df.bind(null, t, e), n)
  );
}
function Wu() {}
function hf(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function mf(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function vf(e, t, n) {
  return vn & 21
    ? (ft(n, t) ||
        ((n = Sc()), (ue.lanes |= n), (yn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ae = !0)),
      (e.memoizedState = n));
}
function Ph(e, t) {
  var n = G;
  (G = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ql.transition;
  ql.transition = {};
  try {
    e(!1), t();
  } finally {
    (G = n), (ql.transition = r);
  }
}
function yf() {
  return rt().memoizedState;
}
function _h(e, t, n) {
  var r = Wt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    gf(e))
  )
    wf(t, n);
  else if (((n = Jc(e, t, n, r)), n !== null)) {
    var o = Me();
    ct(n, e, r, o), Sf(n, t, r);
  }
}
function Oh(e, t, n) {
  var r = Wt(e),
    o = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
  if (gf(e)) wf(t, o);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = l(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = u), ft(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((o.next = o), zu(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Jc(e, t, o, r)),
      n !== null && ((o = Me()), ct(n, e, r, o), Sf(n, t, r));
  }
}
function gf(e) {
  var t = e.alternate;
  return e === ue || (t !== null && t === ue);
}
function wf(e, t) {
  kr = qo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Sf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Su(e, n);
  }
}
var el = {
    readContext: nt,
    useCallback: je,
    useContext: je,
    useEffect: je,
    useImperativeHandle: je,
    useInsertionEffect: je,
    useLayoutEffect: je,
    useMemo: je,
    useReducer: je,
    useRef: je,
    useState: je,
    useDebugValue: je,
    useDeferredValue: je,
    useTransition: je,
    useMutableSource: je,
    useSyncExternalStore: je,
    useId: je,
    unstable_isNewReconciler: !1,
  },
  jh = {
    readContext: nt,
    useCallback: function (e, t) {
      return (pt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: nt,
    useEffect: Js,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Lo(4194308, 4, df.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Lo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Lo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = pt();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = pt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = _h.bind(null, ue, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = pt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Zs,
    useDebugValue: Wu,
    useDeferredValue: function (e) {
      return (pt().memoizedState = e);
    },
    useTransition: function () {
      var e = Zs(!1),
        t = e[0];
      return (
        (e = Ph.bind(null, e[1])), (pt().memoizedState = e), [t, e]
      );
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ue,
        o = pt();
      if (re) {
        if (n === void 0) throw Error(j(407));
        n = n();
      } else {
        if (((n = t()), we === null)) throw Error(j(349));
        vn & 30 || rf(r, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        Js(lf.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        Vr(9, of.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = pt(),
        t = we.identifierPrefix;
      if (re) {
        var n = Et,
          r = St;
        (n = (r & ~(1 << (32 - at(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Ar++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Ch++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Th = {
    readContext: nt,
    useCallback: hf,
    useContext: nt,
    useEffect: Vu,
    useImperativeHandle: pf,
    useInsertionEffect: cf,
    useLayoutEffect: ff,
    useMemo: mf,
    useReducer: ei,
    useRef: af,
    useState: function () {
      return ei($r);
    },
    useDebugValue: Wu,
    useDeferredValue: function (e) {
      var t = rt();
      return vf(t, me.memoizedState, e);
    },
    useTransition: function () {
      var e = ei($r)[0],
        t = rt().memoizedState;
      return [e, t];
    },
    useMutableSource: tf,
    useSyncExternalStore: nf,
    useId: yf,
    unstable_isNewReconciler: !1,
  },
  Nh = {
    readContext: nt,
    useCallback: hf,
    useContext: nt,
    useEffect: Vu,
    useImperativeHandle: pf,
    useInsertionEffect: cf,
    useLayoutEffect: ff,
    useMemo: mf,
    useReducer: ti,
    useRef: af,
    useState: function () {
      return ti($r);
    },
    useDebugValue: Wu,
    useDeferredValue: function (e) {
      var t = rt();
      return me === null
        ? (t.memoizedState = e)
        : vf(t, me.memoizedState, e);
    },
    useTransition: function () {
      var e = ti($r)[0],
        t = rt().memoizedState;
      return [e, t];
    },
    useMutableSource: tf,
    useSyncExternalStore: nf,
    useId: yf,
    unstable_isNewReconciler: !1,
  };
function it(e, t) {
  if (e && e.defaultProps) {
    (t = se({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Fi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : se({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var gl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Sn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Me(),
      o = Wt(e),
      l = xt(r, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = $t(e, l, o)),
      t !== null && (ct(t, e, o, r), To(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Me(),
      o = Wt(e),
      l = xt(r, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = $t(e, l, o)),
      t !== null && (ct(t, e, o, r), To(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Me(),
      r = Wt(e),
      o = xt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = $t(e, o, r)),
      t !== null && (ct(t, e, r, n), To(t, e, r));
  },
};
function qs(e, t, n, r, o, l, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, l, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !zr(n, r) || !zr(o, l)
      : !0
  );
}
function Ef(e, t, n) {
  var r = !1,
    o = Yt,
    l = t.contextType;
  return (
    typeof l == 'object' && l !== null
      ? (l = nt(l))
      : ((o = Ve(t) ? hn : Le.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? Qn(e, o) : Yt)),
    (t = new t(n, l)),
    (e.memoizedState =
      t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = gl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function ea(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && gl.enqueueReplaceState(t, t.state, null);
}
function Bi(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Mu(e);
  var l = t.contextType;
  typeof l == 'object' && l !== null
    ? (o.context = nt(l))
    : ((l = Ve(t) ? hn : Le.current), (o.context = Qn(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == 'function' &&
      (Fi(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' &&
        o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && gl.enqueueReplaceState(o, o.state, null),
      Zo(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Xn(e, t) {
  try {
    var n = '',
      r = t;
    do (n += op(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (l) {
    o =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ni(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n ?? null,
    digest: t ?? null,
  };
}
function Ai(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Lh = typeof WeakMap == 'function' ? WeakMap : Map;
function xf(e, t, n) {
  (n = xt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      nl || ((nl = !0), (Xi = r)), Ai(e, t);
    }),
    n
  );
}
function kf(e, t, n) {
  (n = xt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Ai(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == 'function' &&
      (n.callback = function () {
        Ai(e, t),
          typeof r != 'function' &&
            (Vt === null ? (Vt = new Set([this])) : Vt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : '',
        });
      }),
    n
  );
}
function ta(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Lh();
    var o = new Set();
    r.set(t, o);
  } else
    (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Hh.bind(null, e, t, n)), t.then(e, e));
}
function na(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState),
        (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ra(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = xt(-1, 1)), (t.tag = 2), $t(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Ih = Ot.ReactCurrentOwner,
  Ae = !1;
function Re(e, t, n, r) {
  t.child = e === null ? Zc(t, null, n, r) : Yn(t, e.child, n, r);
}
function oa(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    Wn(t, o),
    (r = Au(e, t, n, r, l, o)),
    (n = $u()),
    e !== null && !Ae
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        _t(e, t, o))
      : (re && n && ju(t), (t.flags |= 1), Re(e, t, r, o), t.child)
  );
}
function la(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == 'function' &&
      !Zu(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), Cf(e, t, l, r, o))
      : ((e = Mo(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var i = l.memoizedProps;
    if (
      ((n = n.compare),
      (n = n !== null ? n : zr),
      n(i, r) && e.ref === t.ref)
    )
      return _t(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = bt(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Cf(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (zr(l, r) && e.ref === t.ref)
      if (((Ae = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ae = !0);
      else return (t.lanes = e.lanes), _t(e, t, o);
  }
  return $i(e, t, n, r, o);
}
function Pf(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null,
      }),
        q(Fn, Qe),
        (Qe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          q(Fn, Qe),
          (Qe |= e),
          null
        );
      (t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null,
      }),
        (r = l !== null ? l.baseLanes : n),
        q(Fn, Qe),
        (Qe |= r);
    }
  else
    l !== null
      ? ((r = l.baseLanes | n), (t.memoizedState = null))
      : (r = n),
      q(Fn, Qe),
      (Qe |= r);
  return Re(e, t, o, n), t.child;
}
function _f(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function $i(e, t, n, r, o) {
  var l = Ve(n) ? hn : Le.current;
  return (
    (l = Qn(t, l)),
    Wn(t, o),
    (n = Au(e, t, n, r, l, o)),
    (r = $u()),
    e !== null && !Ae
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        _t(e, t, o))
      : (re && r && ju(t), (t.flags |= 1), Re(e, t, n, o), t.child)
  );
}
function ia(e, t, n, r, o) {
  if (Ve(n)) {
    var l = !0;
    Qo(t);
  } else l = !1;
  if ((Wn(t, o), t.stateNode === null))
    Io(e, t), Ef(t, n, r), Bi(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      a = n.contextType;
    typeof a == 'object' && a !== null
      ? (a = nt(a))
      : ((a = Ve(n) ? hn : Le.current), (a = Qn(t, a)));
    var p = n.getDerivedStateFromProps,
      f =
        typeof p == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function';
    f ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((u !== r || s !== a) && ea(t, i, r, a)),
      (Lt = !1);
    var v = t.memoizedState;
    (i.state = v),
      Zo(t, r, i, o),
      (s = t.memoizedState),
      u !== r || v !== s || $e.current || Lt
        ? (typeof p == 'function' &&
            (Fi(t, n, p, r), (s = t.memoizedState)),
          (u = Lt || qs(t, n, u, r, v, s, a))
            ? (f ||
                (typeof i.UNSAFE_componentWillMount != 'function' &&
                  typeof i.componentWillMount != 'function') ||
                (typeof i.componentWillMount == 'function' &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == 'function' &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == 'function' &&
                (t.flags |= 4194308))
            : (typeof i.componentDidMount == 'function' &&
                (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = a),
          (r = u))
        : (typeof i.componentDidMount == 'function' &&
            (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      qc(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : it(t.type, u)),
      (i.props = a),
      (f = t.pendingProps),
      (v = i.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = nt(s))
        : ((s = Ve(n) ? hn : Le.current), (s = Qn(t, s)));
    var x = n.getDerivedStateFromProps;
    (p =
      typeof x == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((u !== f || v !== s) && ea(t, i, r, s)),
      (Lt = !1),
      (v = t.memoizedState),
      (i.state = v),
      Zo(t, r, i, o);
    var k = t.memoizedState;
    u !== f || v !== k || $e.current || Lt
      ? (typeof x == 'function' &&
          (Fi(t, n, x, r), (k = t.memoizedState)),
        (a = Lt || qs(t, n, a, r, v, k, s) || !1)
          ? (p ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' &&
                i.componentWillUpdate(r, k, s),
              typeof i.UNSAFE_componentWillUpdate == 'function' &&
                i.UNSAFE_componentWillUpdate(r, k, s)),
            typeof i.componentDidUpdate == 'function' &&
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' &&
              (t.flags |= 1024))
          : (typeof i.componentDidUpdate != 'function' ||
              (u === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' ||
              (u === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = k)),
        (i.props = r),
        (i.state = k),
        (i.context = s),
        (r = a))
      : (typeof i.componentDidUpdate != 'function' ||
          (u === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (u === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Vi(e, t, n, r, l, o);
}
function Vi(e, t, n, r, o, l) {
  _f(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && Hs(t, n, !1), _t(e, t, l);
  (r = t.stateNode), (Ih.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != 'function'
      ? null
      : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Yn(t, e.child, null, l)),
        (t.child = Yn(t, null, u, l)))
      : Re(e, t, u, l),
    (t.memoizedState = r.state),
    o && Hs(t, n, !0),
    t.child
  );
}
function Of(e) {
  var t = e.stateNode;
  t.pendingContext
    ? bs(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && bs(e, t.context, !1),
    Du(e, t.containerInfo);
}
function ua(e, t, n, r, o) {
  return Kn(), Nu(o), (t.flags |= 256), Re(e, t, n, r), t.child;
}
var Wi = { dehydrated: null, treeContext: null, retryLane: 0 };
function bi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function jf(e, t, n) {
  var r = t.pendingProps,
    o = ie.current,
    l = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u =
        e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    u
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    q(ie, o & 1),
    e === null)
  )
    return (
      Di(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (i = { mode: 'hidden', children: i }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = i))
                : (l = El(i, r, 0, null)),
              (e = pn(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = bi(n)),
              (t.memoizedState = Wi),
              e)
            : bu(t, i))
    );
  if (
    ((o = e.memoizedState),
    o !== null && ((u = o.dehydrated), u !== null))
  )
    return Rh(e, t, i, r, u, o, n);
  if (l) {
    (l = r.fallback), (i = t.mode), (o = e.child), (u = o.sibling);
    var s = { mode: 'hidden', children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = bt(o, s)),
          (r.subtreeFlags = o.subtreeFlags & 14680064)),
      u !== null
        ? (l = bt(u, l))
        : ((l = pn(l, i, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? bi(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (l.memoizedState = i),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = Wi),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = bt(l, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null
        ? ((t.deletions = [e]), (t.flags |= 16))
        : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function bu(e, t) {
  return (
    (t = El({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function vo(e, t, n, r) {
  return (
    r !== null && Nu(r),
    Yn(t, e.child, null, n),
    (e = bu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Rh(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ni(Error(j(422)))), vo(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (o = t.mode),
        (r = El(
          { mode: 'visible', children: r.children },
          o,
          0,
          null,
        )),
        (l = pn(l, o, i, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && Yn(t, e.child, null, i),
        (t.child.memoizedState = bi(i)),
        (t.memoizedState = Wi),
        l);
  if (!(t.mode & 1)) return vo(e, t, i, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r))
      var u = r.dgst;
    return (
      (r = u),
      (l = Error(j(419))),
      (r = ni(l, r, void 0)),
      vo(e, t, i, r)
    );
  }
  if (((u = (i & e.childLanes) !== 0), Ae || u)) {
    if (((r = we), r !== null)) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== l.retryLane &&
          ((l.retryLane = o), Pt(e, o), ct(r, e, o, -1));
    }
    return Xu(), (r = ni(Error(j(421)))), vo(e, t, i, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Qh.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Ke = At(o.nextSibling)),
      (Ye = t),
      (re = !0),
      (st = null),
      e !== null &&
        ((Je[qe++] = St),
        (Je[qe++] = Et),
        (Je[qe++] = mn),
        (St = e.id),
        (Et = e.overflow),
        (mn = t)),
      (t = bu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function sa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ui(e.return, t, n);
}
function ri(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = o));
}
function Tf(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((Re(e, t, r.children, n), (r = ie.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && sa(e, n, t);
        else if (e.tag === 19) sa(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((q(ie, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Jo(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          ri(t, !1, o, n, l);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Jo(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        ri(t, !0, n, null, l);
        break;
      case 'together':
        ri(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Io(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function _t(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (yn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (
      e = t.child,
        n = bt(e, e.pendingProps),
        t.child = n,
        n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling),
        (n = n.sibling = bt(e, e.pendingProps)),
        (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function zh(e, t, n) {
  switch (t.tag) {
    case 3:
      Of(t), Kn();
      break;
    case 5:
      ef(t);
      break;
    case 1:
      Ve(t.type) && Qo(t);
      break;
    case 4:
      Du(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      q(Go, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (q(ie, ie.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? jf(e, t, n)
          : (q(ie, ie.current & 1),
            (e = _t(e, t, n)),
            e !== null ? e.sibling : null);
      q(ie, ie.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Tf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null),
          (o.tail = null),
          (o.lastEffect = null)),
        q(ie, ie.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Pf(e, t, n);
  }
  return _t(e, t, n);
}
var Nf, Hi, Lf, If;
Nf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Hi = function () {};
Lf = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), fn(vt.current);
    var l = null;
    switch (n) {
      case 'input':
        (o = pi(e, o)), (r = pi(e, r)), (l = []);
        break;
      case 'select':
        (o = se({}, o, { value: void 0 })),
          (r = se({}, r, { value: void 0 })),
          (l = []);
        break;
      case 'textarea':
        (o = vi(e, o)), (r = vi(e, r)), (l = []);
        break;
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = bo);
    }
    gi(n, r);
    var i;
    n = null;
    for (a in o)
      if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
        if (a === 'style') {
          var u = o[a];
          for (i in u)
            u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
        } else
          a !== 'dangerouslySetInnerHTML' &&
            a !== 'children' &&
            a !== 'suppressContentEditableWarning' &&
            a !== 'suppressHydrationWarning' &&
            a !== 'autoFocus' &&
            (Or.hasOwnProperty(a)
              ? l || (l = [])
              : (l = l || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = o != null ? o[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === 'style')
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ''));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (l || (l = []), l.push(a, n)), (n = s);
        else
          a === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (l = l || []).push(a, s))
            : a === 'children'
            ? (typeof s != 'string' && typeof s != 'number') ||
              (l = l || []).push(a, '' + s)
            : a !== 'suppressContentEditableWarning' &&
              a !== 'suppressHydrationWarning' &&
              (Or.hasOwnProperty(a)
                ? (s != null && a === 'onScroll' && ee('scroll', e),
                  l || u === s || (l = []))
                : (l = l || []).push(a, s));
    }
    n && (l = l || []).push('style', n);
    var a = l;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
If = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function cr(e, t) {
  if (!re)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Te(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Mh(e, t, n) {
  var r = t.pendingProps;
  switch ((Tu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Te(t), null;
    case 1:
      return Ve(t.type) && Ho(), Te(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Gn(),
        te($e),
        te(Le),
        Fu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ho(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024),
              st !== null && (qi(st), (st = null)))),
        Hi(e, t),
        Te(t),
        null
      );
    case 5:
      Uu(t);
      var o = fn(Br.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Lf(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return Te(t), null;
        }
        if (((e = fn(vt.current)), ho(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (
            ((r[ht] = t), (r[Ur] = l), (e = (t.mode & 1) !== 0), n)
          ) {
            case 'dialog':
              ee('cancel', r), ee('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              ee('load', r);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < vr.length; o++) ee(vr[o], r);
              break;
            case 'source':
              ee('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              ee('error', r), ee('load', r);
              break;
            case 'details':
              ee('toggle', r);
              break;
            case 'input':
              ys(r, l), ee('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                ee('invalid', r);
              break;
            case 'textarea':
              ws(r, l), ee('invalid', r);
          }
          gi(n, l), (o = null);
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var u = l[i];
              i === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u &&
                    (l.suppressHydrationWarning !== !0 &&
                      po(r.textContent, u, e),
                    (o = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (l.suppressHydrationWarning !== !0 &&
                      po(r.textContent, u, e),
                    (o = ['children', '' + u]))
                : Or.hasOwnProperty(i) &&
                  u != null &&
                  i === 'onScroll' &&
                  ee('scroll', r);
            }
          switch (n) {
            case 'input':
              oo(r), gs(r, l, !0);
              break;
            case 'textarea':
              oo(r), Ss(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof l.onClick == 'function' && (r.onclick = bo);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = lc(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = i.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === 'select' &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[ht] = t),
            (e[Ur] = r),
            Nf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = wi(n, r)), n)) {
              case 'dialog':
                ee('cancel', e), ee('close', e), (o = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                ee('load', e), (o = r);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < vr.length; o++) ee(vr[o], e);
                o = r;
                break;
              case 'source':
                ee('error', e), (o = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                ee('error', e), ee('load', e), (o = r);
                break;
              case 'details':
                ee('toggle', e), (o = r);
                break;
              case 'input':
                ys(e, r), (o = pi(e, r)), ee('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = se({}, r, { value: void 0 })),
                  ee('invalid', e);
                break;
              case 'textarea':
                ws(e, r), (o = vi(e, r)), ee('invalid', e);
                break;
              default:
                o = r;
            }
            gi(n, o), (u = o);
            for (l in u)
              if (u.hasOwnProperty(l)) {
                var s = u[l];
                l === 'style'
                  ? sc(e, s)
                  : l === 'dangerouslySetInnerHTML'
                  ? ((s = s ? s.__html : void 0),
                    s != null && ic(e, s))
                  : l === 'children'
                  ? typeof s == 'string'
                    ? (n !== 'textarea' || s !== '') && jr(e, s)
                    : typeof s == 'number' && jr(e, '' + s)
                  : l !== 'suppressContentEditableWarning' &&
                    l !== 'suppressHydrationWarning' &&
                    l !== 'autoFocus' &&
                    (Or.hasOwnProperty(l)
                      ? s != null &&
                        l === 'onScroll' &&
                        ee('scroll', e)
                      : s != null && hu(e, l, s, i));
              }
            switch (n) {
              case 'input':
                oo(e), gs(e, r, !1);
                break;
              case 'textarea':
                oo(e), Ss(e);
                break;
              case 'option':
                r.value != null &&
                  e.setAttribute('value', '' + Kt(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? Bn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      Bn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = bo);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Te(t), null;
    case 6:
      if (e && t.stateNode != null) If(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null)
          throw Error(j(166));
        if (((n = fn(Br.current)), fn(vt.current), ho(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ht] = t),
            (l = r.nodeValue !== n) && ((e = Ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                po(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  po(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (
            n.nodeType === 9 ? n : n.ownerDocument
          ).createTextNode(r)),
            (r[ht] = t),
            (t.stateNode = r);
      }
      return Te(t), null;
    case 13:
      if (
        (te(ie),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null &&
            e.memoizedState.dehydrated !== null))
      ) {
        if (re && Ke !== null && t.mode & 1 && !(t.flags & 128))
          Gc(), Kn(), (t.flags |= 98560), (l = !1);
        else if (((l = ho(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(j(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(j(317));
            l[ht] = t;
          } else
            Kn(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4);
          Te(t), (l = !1);
        } else st !== null && (qi(st), (st = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ie.current & 1
                ? ve === 0 && (ve = 3)
                : Xu())),
          t.updateQueue !== null && (t.flags |= 4),
          Te(t),
          null);
    case 4:
      return (
        Gn(),
        Hi(e, t),
        e === null && Mr(t.stateNode.containerInfo),
        Te(t),
        null
      );
    case 10:
      return Ru(t.type._context), Te(t), null;
    case 17:
      return Ve(t.type) && Ho(), Te(t), null;
    case 19:
      if ((te(ie), (l = t.memoizedState), l === null))
        return Te(t), null;
      if (
        ((r = (t.flags & 128) !== 0), (i = l.rendering), i === null)
      )
        if (r) cr(l, !1);
        else {
          if (ve !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Jo(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    cr(l, !1),
                    r = i.updateQueue,
                    r !== null &&
                      ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (i = l.alternate),
                    i === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = i.childLanes),
                        (l.lanes = i.lanes),
                        (l.child = i.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = i.memoizedProps),
                        (l.memoizedState = i.memoizedState),
                        (l.updateQueue = i.updateQueue),
                        (l.type = i.type),
                        (e = i.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return q(ie, (ie.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            fe() > Zn &&
            ((t.flags |= 128),
            (r = !0),
            cr(l, !1),
            (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Jo(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              cr(l, !0),
              l.tail === null &&
                l.tailMode === 'hidden' &&
                !i.alternate &&
                !re)
            )
              return Te(t), null;
          } else
            2 * fe() - l.renderingStartTime > Zn &&
              n !== 1073741824 &&
              ((t.flags |= 128),
              (r = !0),
              cr(l, !1),
              (t.lanes = 4194304));
        l.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = l.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (l.last = i));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = fe()),
          (t.sibling = null),
          (n = ie.current),
          q(ie, r ? (n & 1) | 2 : n & 1),
          t)
        : (Te(t), null);
    case 22:
    case 23:
      return (
        Gu(),
        (r = t.memoizedState !== null),
        e !== null &&
          (e.memoizedState !== null) !== r &&
          (t.flags |= 8192),
        r && t.mode & 1
          ? Qe & 1073741824 &&
            (Te(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Te(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function Dh(e, t) {
  switch ((Tu(t), t.tag)) {
    case 1:
      return (
        Ve(t.type) && Ho(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Gn(),
        te($e),
        te(Le),
        Fu(),
        (e = t.flags),
        e & 65536 && !(e & 128)
          ? ((t.flags = (e & -65537) | 128), t)
          : null
      );
    case 5:
      return Uu(t), null;
    case 13:
      if (
        (te(ie),
        (e = t.memoizedState),
        e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(j(340));
        Kn();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return te(ie), null;
    case 4:
      return Gn(), null;
    case 10:
      return Ru(t.type._context), null;
    case 22:
    case 23:
      return Gu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var yo = !1,
  Ne = !1,
  Uh = typeof WeakSet == 'function' ? WeakSet : Set,
  z = null;
function Un(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        ae(e, t, r);
      }
    else n.current = null;
}
function Qi(e, t, n) {
  try {
    n();
  } catch (r) {
    ae(e, t, r);
  }
}
var aa = !1;
function Fh(e, t) {
  if (((Ti = $o), (e = Dc()), Ou(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            a = 0,
            p = 0,
            f = e,
            v = null;
          t: for (;;) {
            for (
              var x;
              f !== n || (o !== 0 && f.nodeType !== 3) || (u = i + o),
                f !== l ||
                  (r !== 0 && f.nodeType !== 3) ||
                  (s = i + r),
                f.nodeType === 3 && (i += f.nodeValue.length),
                (x = f.firstChild) !== null;

            )
              (v = f), (f = x);
            for (;;) {
              if (f === e) break t;
              if (
                (v === n && ++a === o && (u = i),
                v === l && ++p === r && (s = i),
                (x = f.nextSibling) !== null)
              )
                break;
              (f = v), (v = f.parentNode);
            }
            f = x;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    Ni = { focusedElem: e, selectionRange: n }, $o = !1, z = t;
    z !== null;

  )
    if (
      ((t = z),
      (e = t.child),
      (t.subtreeFlags & 1028) !== 0 && e !== null)
    )
      (e.return = t), (z = e);
    else
      for (; z !== null; ) {
        t = z;
        try {
          var k = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (k !== null) {
                  var C = k.memoizedProps,
                    L = k.memoizedState,
                    h = t.stateNode,
                    c = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? C : it(t.type, C),
                      L,
                    );
                  h.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = '')
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(j(163));
            }
        } catch (S) {
          ae(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (z = e);
          break;
        }
        z = t.return;
      }
  return (k = aa), (aa = !1), k;
}
function Cr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && Qi(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function wl(e, t) {
  if (
    ((t = t.updateQueue),
    (t = t !== null ? t.lastEffect : null),
    t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ki(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function Rf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Rf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ht],
        delete t[Ur],
        delete t[Ri],
        delete t[Sh],
        delete t[Eh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function zf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ca(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || zf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Yi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = bo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Yi(e, t, n), e = e.sibling; e !== null; )
      Yi(e, t, n), (e = e.sibling);
}
function Gi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Gi(e, t, n), e = e.sibling; e !== null; )
      Gi(e, t, n), (e = e.sibling);
}
var Ce = null,
  ut = !1;
function Tt(e, t, n) {
  for (n = n.child; n !== null; ) Mf(e, t, n), (n = n.sibling);
}
function Mf(e, t, n) {
  if (mt && typeof mt.onCommitFiberUnmount == 'function')
    try {
      mt.onCommitFiberUnmount(fl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ne || Un(n, t);
    case 6:
      var r = Ce,
        o = ut;
      (Ce = null),
        Tt(e, t, n),
        (Ce = r),
        (ut = o),
        Ce !== null &&
          (ut
            ? ((e = Ce),
              (n = n.stateNode),
              e.nodeType === 8
                ? e.parentNode.removeChild(n)
                : e.removeChild(n))
            : Ce.removeChild(n.stateNode));
      break;
    case 18:
      Ce !== null &&
        (ut
          ? ((e = Ce),
            (n = n.stateNode),
            e.nodeType === 8
              ? Xl(e.parentNode, n)
              : e.nodeType === 1 && Xl(e, n),
            Ir(e))
          : Xl(Ce, n.stateNode));
      break;
    case 4:
      (r = Ce),
        (o = ut),
        (Ce = n.stateNode.containerInfo),
        (ut = !0),
        Tt(e, t, n),
        (Ce = r),
        (ut = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ne &&
        ((r = n.updateQueue),
        r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var l = o,
            i = l.destroy;
          (l = l.tag),
            i !== void 0 && (l & 2 || l & 4) && Qi(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      Tt(e, t, n);
      break;
    case 1:
      if (
        !Ne &&
        (Un(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          ae(n, t, u);
        }
      Tt(e, t, n);
      break;
    case 21:
      Tt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ne = (r = Ne) || n.memoizedState !== null),
          Tt(e, t, n),
          (Ne = r))
        : Tt(e, t, n);
      break;
    default:
      Tt(e, t, n);
  }
}
function fa(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Uh()),
      t.forEach(function (r) {
        var o = Kh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function lt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (Ce = u.stateNode), (ut = !1);
              break e;
            case 3:
              (Ce = u.stateNode.containerInfo), (ut = !0);
              break e;
            case 4:
              (Ce = u.stateNode.containerInfo), (ut = !0);
              break e;
          }
          u = u.return;
        }
        if (Ce === null) throw Error(j(160));
        Mf(l, i, o), (Ce = null), (ut = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (a) {
        ae(o, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Df(t, e), (t = t.sibling);
}
function Df(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((lt(t, e), dt(e), r & 4)) {
        try {
          Cr(3, e, e.return), wl(3, e);
        } catch (C) {
          ae(e, e.return, C);
        }
        try {
          Cr(5, e, e.return);
        } catch (C) {
          ae(e, e.return, C);
        }
      }
      break;
    case 1:
      lt(t, e), dt(e), r & 512 && n !== null && Un(n, n.return);
      break;
    case 5:
      if (
        (lt(t, e),
        dt(e),
        r & 512 && n !== null && Un(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          jr(o, '');
        } catch (C) {
          ae(e, e.return, C);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          i = n !== null ? n.memoizedProps : l,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === 'input' &&
              l.type === 'radio' &&
              l.name != null &&
              rc(o, l),
              wi(u, i);
            var a = wi(u, l);
            for (i = 0; i < s.length; i += 2) {
              var p = s[i],
                f = s[i + 1];
              p === 'style'
                ? sc(o, f)
                : p === 'dangerouslySetInnerHTML'
                ? ic(o, f)
                : p === 'children'
                ? jr(o, f)
                : hu(o, p, f, a);
            }
            switch (u) {
              case 'input':
                hi(o, l);
                break;
              case 'textarea':
                oc(o, l);
                break;
              case 'select':
                var v = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var x = l.value;
                x != null
                  ? Bn(o, !!l.multiple, x, !1)
                  : v !== !!l.multiple &&
                    (l.defaultValue != null
                      ? Bn(o, !!l.multiple, l.defaultValue, !0)
                      : Bn(
                          o,
                          !!l.multiple,
                          l.multiple ? [] : '',
                          !1,
                        ));
            }
            o[Ur] = l;
          } catch (C) {
            ae(e, e.return, C);
          }
      }
      break;
    case 6:
      if ((lt(t, e), dt(e), r & 4)) {
        if (e.stateNode === null) throw Error(j(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (C) {
          ae(e, e.return, C);
        }
      }
      break;
    case 3:
      if (
        (lt(t, e),
        dt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ir(t.containerInfo);
        } catch (C) {
          ae(e, e.return, C);
        }
      break;
    case 4:
      lt(t, e), dt(e);
      break;
    case 13:
      lt(t, e),
        dt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null &&
              o.alternate.memoizedState !== null) ||
            (Ku = fe())),
        r & 4 && fa(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1
          ? ((Ne = (a = Ne) || p), lt(t, e), (Ne = a))
          : lt(t, e),
        dt(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !p && e.mode & 1)
        )
          for (z = e, p = e.child; p !== null; ) {
            for (f = z = p; z !== null; ) {
              switch (((v = z), (x = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Cr(4, v, v.return);
                  break;
                case 1:
                  Un(v, v.return);
                  var k = v.stateNode;
                  if (typeof k.componentWillUnmount == 'function') {
                    (r = v), (n = v.return);
                    try {
                      (t = r),
                        (k.props = t.memoizedProps),
                        (k.state = t.memoizedState),
                        k.componentWillUnmount();
                    } catch (C) {
                      ae(r, n, C);
                    }
                  }
                  break;
                case 5:
                  Un(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    pa(f);
                    continue;
                  }
              }
              x !== null ? ((x.return = v), (z = x)) : pa(f);
            }
            p = p.sibling;
          }
        e: for (p = null, f = e; ; ) {
          if (f.tag === 5) {
            if (p === null) {
              p = f;
              try {
                (o = f.stateNode),
                  a
                    ? ((l = o.style),
                      typeof l.setProperty == 'function'
                        ? l.setProperty(
                            'display',
                            'none',
                            'important',
                          )
                        : (l.display = 'none'))
                    : ((u = f.stateNode),
                      (s = f.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty('display')
                          ? s.display
                          : null),
                      (u.style.display = uc('display', i)));
              } catch (C) {
                ae(e, e.return, C);
              }
            }
          } else if (f.tag === 6) {
            if (p === null)
              try {
                f.stateNode.nodeValue = a ? '' : f.memoizedProps;
              } catch (C) {
                ae(e, e.return, C);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            p === f && (p = null), (f = f.return);
          }
          p === f && (p = null),
            (f.sibling.return = f.return),
            (f = f.sibling);
        }
      }
      break;
    case 19:
      lt(t, e), dt(e), r & 4 && fa(e);
      break;
    case 21:
      break;
    default:
      lt(t, e), dt(e);
  }
}
function dt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (zf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (jr(o, ''), (r.flags &= -33));
          var l = ca(e);
          Gi(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = ca(e);
          Yi(e, u, i);
          break;
        default:
          throw Error(j(161));
      }
    } catch (s) {
      ae(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Bh(e, t, n) {
  (z = e), Uf(e);
}
function Uf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var o = z,
      l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || yo;
      if (!i) {
        var u = o.alternate,
          s = (u !== null && u.memoizedState !== null) || Ne;
        u = yo;
        var a = Ne;
        if (((yo = i), (Ne = s) && !a))
          for (z = o; z !== null; )
            (i = z),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? ha(o)
                : s !== null
                ? ((s.return = i), (z = s))
                : ha(o);
        for (; l !== null; ) (z = l), Uf(l), (l = l.sibling);
        (z = o), (yo = u), (Ne = a);
      }
      da(e);
    } else
      o.subtreeFlags & 8772 && l !== null
        ? ((l.return = o), (z = l))
        : da(e);
  }
}
function da(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ne || wl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ne)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : it(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var l = t.updateQueue;
              l !== null && Xs(t, l, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Xs(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus();
                    break;
                  case 'img':
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var p = a.memoizedState;
                  if (p !== null) {
                    var f = p.dehydrated;
                    f !== null && Ir(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(j(163));
          }
        Ne || (t.flags & 512 && Ki(t));
      } catch (v) {
        ae(t, t.return, v);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function pa(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function ha(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            wl(4, t);
          } catch (s) {
            ae(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              ae(t, o, s);
            }
          }
          var l = t.return;
          try {
            Ki(t);
          } catch (s) {
            ae(t, l, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ki(t);
          } catch (s) {
            ae(t, i, s);
          }
      }
    } catch (s) {
      ae(t, t.return, s);
    }
    if (t === e) {
      z = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (z = u);
      break;
    }
    z = t.return;
  }
}
var Ah = Math.ceil,
  tl = Ot.ReactCurrentDispatcher,
  Hu = Ot.ReactCurrentOwner,
  tt = Ot.ReactCurrentBatchConfig,
  Q = 0,
  we = null,
  pe = null,
  Pe = 0,
  Qe = 0,
  Fn = Xt(0),
  ve = 0,
  Wr = null,
  yn = 0,
  Sl = 0,
  Qu = 0,
  Pr = null,
  Be = null,
  Ku = 0,
  Zn = 1 / 0,
  gt = null,
  nl = !1,
  Xi = null,
  Vt = null,
  go = !1,
  Mt = null,
  rl = 0,
  _r = 0,
  Zi = null,
  Ro = -1,
  zo = 0;
function Me() {
  return Q & 6 ? fe() : Ro !== -1 ? Ro : (Ro = fe());
}
function Wt(e) {
  return e.mode & 1
    ? Q & 2 && Pe !== 0
      ? Pe & -Pe
      : kh.transition !== null
      ? (zo === 0 && (zo = Sc()), zo)
      : ((e = G),
        e !== 0 ||
          ((e = window.event), (e = e === void 0 ? 16 : Oc(e.type))),
        e)
    : 1;
}
function ct(e, t, n, r) {
  if (50 < _r) throw ((_r = 0), (Zi = null), Error(j(185)));
  Kr(e, n, r),
    (!(Q & 2) || e !== we) &&
      (e === we && (!(Q & 2) && (Sl |= n), ve === 4 && Rt(e, Pe)),
      We(e, r),
      n === 1 &&
        Q === 0 &&
        !(t.mode & 1) &&
        ((Zn = fe() + 500), vl && Zt()));
}
function We(e, t) {
  var n = e.callbackNode;
  kp(e, t);
  var r = Ao(e, e === we ? Pe : 0);
  if (r === 0)
    n !== null && ks(n),
      (e.callbackNode = null),
      (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ks(n), t === 1))
      e.tag === 0 ? xh(ma.bind(null, e)) : Qc(ma.bind(null, e)),
        gh(function () {
          !(Q & 6) && Zt();
        }),
        (n = null);
    else {
      switch (Ec(r)) {
        case 1:
          n = wu;
          break;
        case 4:
          n = gc;
          break;
        case 16:
          n = Bo;
          break;
        case 536870912:
          n = wc;
          break;
        default:
          n = Bo;
      }
      n = Hf(n, Ff.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ff(e, t) {
  if (((Ro = -1), (zo = 0), Q & 6)) throw Error(j(327));
  var n = e.callbackNode;
  if (bn() && e.callbackNode !== n) return null;
  var r = Ao(e, e === we ? Pe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ol(e, r);
  else {
    t = r;
    var o = Q;
    Q |= 2;
    var l = Af();
    (we !== e || Pe !== t) &&
      ((gt = null), (Zn = fe() + 500), dn(e, t));
    do
      try {
        Wh();
        break;
      } catch (u) {
        Bf(e, u);
      }
    while (!0);
    Iu(),
      (tl.current = l),
      (Q = o),
      pe !== null ? (t = 0) : ((we = null), (Pe = 0), (t = ve));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Ci(e)), o !== 0 && ((r = o), (t = Ji(e, o)))),
      t === 1)
    )
      throw ((n = Wr), dn(e, 0), Rt(e, r), We(e, fe()), n);
    if (t === 6) Rt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !$h(o) &&
          ((t = ol(e, r)),
          t === 2 &&
            ((l = Ci(e)), l !== 0 && ((r = l), (t = Ji(e, l)))),
          t === 1))
      )
        throw ((n = Wr), dn(e, 0), Rt(e, r), We(e, fe()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          on(e, Be, gt);
          break;
        case 3:
          if (
            (Rt(e, r),
            (r & 130023424) === r && ((t = Ku + 500 - fe()), 10 < t))
          ) {
            if (Ao(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Me(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Ii(on.bind(null, e, Be, gt), t);
            break;
          }
          on(e, Be, gt);
          break;
        case 4:
          if ((Rt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - at(r);
            (l = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~l);
          }
          if (
            ((r = o),
            (r = fe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Ah(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ii(on.bind(null, e, Be, gt), r);
            break;
          }
          on(e, Be, gt);
          break;
        case 5:
          on(e, Be, gt);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return We(e, fe()), e.callbackNode === n ? Ff.bind(null, e) : null;
}
function Ji(e, t) {
  var n = Pr;
  return (
    e.current.memoizedState.isDehydrated && (dn(e, t).flags |= 256),
    (e = ol(e, t)),
    e !== 2 && ((t = Be), (Be = n), t !== null && qi(t)),
    e
  );
}
function qi(e) {
  Be === null ? (Be = e) : Be.push.apply(Be, e);
}
function $h(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!ft(l(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Rt(e, t) {
  for (
    t &= ~Qu,
      t &= ~Sl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - at(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ma(e) {
  if (Q & 6) throw Error(j(327));
  bn();
  var t = Ao(e, 0);
  if (!(t & 1)) return We(e, fe()), null;
  var n = ol(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ci(e);
    r !== 0 && ((t = r), (n = Ji(e, r)));
  }
  if (n === 1) throw ((n = Wr), dn(e, 0), Rt(e, t), We(e, fe()), n);
  if (n === 6) throw Error(j(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    on(e, Be, gt),
    We(e, fe()),
    null
  );
}
function Yu(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    (Q = n), Q === 0 && ((Zn = fe() + 500), vl && Zt());
  }
}
function gn(e) {
  Mt !== null && Mt.tag === 0 && !(Q & 6) && bn();
  var t = Q;
  Q |= 1;
  var n = tt.transition,
    r = G;
  try {
    if (((tt.transition = null), (G = 1), e)) return e();
  } finally {
    (G = r), (tt.transition = n), (Q = t), !(Q & 6) && Zt();
  }
}
function Gu() {
  (Qe = Fn.current), te(Fn);
}
function dn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), yh(n)), pe !== null))
    for (n = pe.return; n !== null; ) {
      var r = n;
      switch ((Tu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ho();
          break;
        case 3:
          Gn(), te($e), te(Le), Fu();
          break;
        case 5:
          Uu(r);
          break;
        case 4:
          Gn();
          break;
        case 13:
          te(ie);
          break;
        case 19:
          te(ie);
          break;
        case 10:
          Ru(r.type._context);
          break;
        case 22:
        case 23:
          Gu();
      }
      n = n.return;
    }
  if (
    ((we = e),
    (pe = e = bt(e.current, null)),
    (Pe = Qe = t),
    (ve = 0),
    (Wr = null),
    (Qu = Sl = yn = 0),
    (Be = Pr = null),
    cn !== null)
  ) {
    for (t = 0; t < cn.length; t++)
      if (((n = cn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          l = n.pending;
        if (l !== null) {
          var i = l.next;
          (l.next = o), (r.next = i);
        }
        n.pending = r;
      }
    cn = null;
  }
  return e;
}
function Bf(e, t) {
  do {
    var n = pe;
    try {
      if ((Iu(), (No.current = el), qo)) {
        for (var r = ue.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        qo = !1;
      }
      if (
        ((vn = 0),
        (ge = me = ue = null),
        (kr = !1),
        (Ar = 0),
        (Hu.current = null),
        n === null || n.return === null)
      ) {
        (ve = 1), (Wr = t), (pe = null);
        break;
      }
      e: {
        var l = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = Pe),
          (u.flags |= 32768),
          s !== null &&
            typeof s == 'object' &&
            typeof s.then == 'function')
        ) {
          var a = s,
            p = u,
            f = p.tag;
          if (!(p.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var v = p.alternate;
            v
              ? ((p.updateQueue = v.updateQueue),
                (p.memoizedState = v.memoizedState),
                (p.lanes = v.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var x = na(i);
          if (x !== null) {
            (x.flags &= -257),
              ra(x, i, u, l, t),
              x.mode & 1 && ta(l, a, t),
              (t = x),
              (s = a);
            var k = t.updateQueue;
            if (k === null) {
              var C = new Set();
              C.add(s), (t.updateQueue = C);
            } else k.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              ta(l, a, t), Xu();
              break e;
            }
            s = Error(j(426));
          }
        } else if (re && u.mode & 1) {
          var L = na(i);
          if (L !== null) {
            !(L.flags & 65536) && (L.flags |= 256),
              ra(L, i, u, l, t),
              Nu(Xn(s, u));
            break e;
          }
        }
        (l = s = Xn(s, u)),
          ve !== 4 && (ve = 2),
          Pr === null ? (Pr = [l]) : Pr.push(l),
          (l = i);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var h = xf(l, s, t);
              Gs(l, h);
              break e;
            case 1:
              u = s;
              var c = l.type,
                d = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof c.getDerivedStateFromError == 'function' ||
                  (d !== null &&
                    typeof d.componentDidCatch == 'function' &&
                    (Vt === null || !Vt.has(d))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var S = kf(l, u, t);
                Gs(l, S);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Vf(n);
    } catch (P) {
      (t = P), pe === n && n !== null && (pe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Af() {
  var e = tl.current;
  return (tl.current = el), e === null ? el : e;
}
function Xu() {
  (ve === 0 || ve === 3 || ve === 2) && (ve = 4),
    we === null ||
      (!(yn & 268435455) && !(Sl & 268435455)) ||
      Rt(we, Pe);
}
function ol(e, t) {
  var n = Q;
  Q |= 2;
  var r = Af();
  (we !== e || Pe !== t) && ((gt = null), dn(e, t));
  do
    try {
      Vh();
      break;
    } catch (o) {
      Bf(e, o);
    }
  while (!0);
  if ((Iu(), (Q = n), (tl.current = r), pe !== null))
    throw Error(j(261));
  return (we = null), (Pe = 0), ve;
}
function Vh() {
  for (; pe !== null; ) $f(pe);
}
function Wh() {
  for (; pe !== null && !hp(); ) $f(pe);
}
function $f(e) {
  var t = bf(e.alternate, e, Qe);
  (e.memoizedProps = e.pendingProps),
    t === null ? Vf(e) : (pe = t),
    (Hu.current = null);
}
function Vf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Dh(n, t)), n !== null)) {
        (n.flags &= 32767), (pe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768),
          (e.subtreeFlags = 0),
          (e.deletions = null);
      else {
        (ve = 6), (pe = null);
        return;
      }
    } else if (((n = Mh(n, t, Qe)), n !== null)) {
      pe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      pe = t;
      return;
    }
    pe = t = e;
  } while (t !== null);
  ve === 0 && (ve = 5);
}
function on(e, t, n) {
  var r = G,
    o = tt.transition;
  try {
    (tt.transition = null), (G = 1), bh(e, t, n, r);
  } finally {
    (tt.transition = o), (G = r);
  }
  return null;
}
function bh(e, t, n, r) {
  do bn();
  while (Mt !== null);
  if (Q & 6) throw Error(j(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (
    ((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)
  )
    throw Error(j(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (Cp(e, l),
    e === we && ((pe = we = null), (Pe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      go ||
      ((go = !0),
      Hf(Bo, function () {
        return bn(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = tt.transition), (tt.transition = null);
    var i = G;
    G = 1;
    var u = Q;
    (Q |= 4),
      (Hu.current = null),
      Fh(e, n),
      Df(n, e),
      ch(Ni),
      ($o = !!Ti),
      (Ni = Ti = null),
      (e.current = n),
      Bh(n),
      mp(),
      (Q = u),
      (G = i),
      (tt.transition = l);
  } else e.current = n;
  if (
    (go && ((go = !1), (Mt = e), (rl = o)),
    (l = e.pendingLanes),
    l === 0 && (Vt = null),
    gp(n.stateNode),
    We(e, fe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]),
        r(o.value, { componentStack: o.stack, digest: o.digest });
  if (nl) throw ((nl = !1), (e = Xi), (Xi = null), e);
  return (
    rl & 1 && e.tag !== 0 && bn(),
    (l = e.pendingLanes),
    l & 1 ? (e === Zi ? _r++ : ((_r = 0), (Zi = e))) : (_r = 0),
    Zt(),
    null
  );
}
function bn() {
  if (Mt !== null) {
    var e = Ec(rl),
      t = tt.transition,
      n = G;
    try {
      if (
        ((tt.transition = null), (G = 16 > e ? 16 : e), Mt === null)
      )
        var r = !1;
      else {
        if (((e = Mt), (Mt = null), (rl = 0), Q & 6))
          throw Error(j(331));
        var o = Q;
        for (Q |= 4, z = e.current; z !== null; ) {
          var l = z,
            i = l.child;
          if (z.flags & 16) {
            var u = l.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (z = a; z !== null; ) {
                  var p = z;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cr(8, p, l);
                  }
                  var f = p.child;
                  if (f !== null) (f.return = p), (z = f);
                  else
                    for (; z !== null; ) {
                      p = z;
                      var v = p.sibling,
                        x = p.return;
                      if ((Rf(p), p === a)) {
                        z = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = x), (z = v);
                        break;
                      }
                      z = x;
                    }
                }
              }
              var k = l.alternate;
              if (k !== null) {
                var C = k.child;
                if (C !== null) {
                  k.child = null;
                  do {
                    var L = C.sibling;
                    (C.sibling = null), (C = L);
                  } while (C !== null);
                }
              }
              z = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null)
            (i.return = l), (z = i);
          else
            e: for (; z !== null; ) {
              if (((l = z), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Cr(9, l, l.return);
                }
              var h = l.sibling;
              if (h !== null) {
                (h.return = l.return), (z = h);
                break e;
              }
              z = l.return;
            }
        }
        var c = e.current;
        for (z = c; z !== null; ) {
          i = z;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null)
            (d.return = i), (z = d);
          else
            e: for (i = c; z !== null; ) {
              if (((u = z), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wl(9, u);
                  }
                } catch (P) {
                  ae(u, u.return, P);
                }
              if (u === i) {
                z = null;
                break e;
              }
              var S = u.sibling;
              if (S !== null) {
                (S.return = u.return), (z = S);
                break e;
              }
              z = u.return;
            }
        }
        if (
          ((Q = o),
          Zt(),
          mt && typeof mt.onPostCommitFiberRoot == 'function')
        )
          try {
            mt.onPostCommitFiberRoot(fl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (G = n), (tt.transition = t);
    }
  }
  return !1;
}
function va(e, t, n) {
  (t = Xn(n, t)),
    (t = xf(e, t, 1)),
    (e = $t(e, t, 1)),
    (t = Me()),
    e !== null && (Kr(e, 1, t), We(e, t));
}
function ae(e, t, n) {
  if (e.tag === 3) va(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        va(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Vt === null || !Vt.has(r)))
        ) {
          (e = Xn(n, e)),
            (e = kf(t, e, 1)),
            (t = $t(t, e, 1)),
            (e = Me()),
            t !== null && (Kr(t, 1, e), We(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Hh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Me()),
    (e.pingedLanes |= e.suspendedLanes & n),
    we === e &&
      (Pe & n) === n &&
      (ve === 4 ||
      (ve === 3 && (Pe & 130023424) === Pe && 500 > fe() - Ku)
        ? dn(e, 0)
        : (Qu |= n)),
    We(e, t);
}
function Wf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = uo), (uo <<= 1), !(uo & 130023424) && (uo = 4194304))
      : (t = 1));
  var n = Me();
  (e = Pt(e, t)), e !== null && (Kr(e, t, n), We(e, n));
}
function Qh(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Wf(e, n);
}
function Kh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(j(314));
  }
  r !== null && r.delete(t), Wf(e, n);
}
var bf;
bf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || $e.current) Ae = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return (Ae = !1), zh(e, t, n);
      Ae = !!(e.flags & 131072);
    }
  else (Ae = !1), re && t.flags & 1048576 && Kc(t, Yo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Io(e, t), (e = t.pendingProps);
      var o = Qn(t, Le.current);
      Wn(t, n), (o = Au(null, t, r, e, o, n));
      var l = $u();
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ve(r) ? ((l = !0), Qo(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0
                ? o.state
                : null),
            Mu(t),
            (o.updater = gl),
            (t.stateNode = o),
            (o._reactInternals = t),
            Bi(t, r, e, n),
            (t = Vi(null, t, r, !0, l, n)))
          : ((t.tag = 0),
            re && l && ju(t),
            Re(null, t, o, n),
            (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Io(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Gh(r)),
          (e = it(r, e)),
          o)
        ) {
          case 0:
            t = $i(null, t, r, e, n);
            break e;
          case 1:
            t = ia(null, t, r, e, n);
            break e;
          case 11:
            t = oa(null, t, r, e, n);
            break e;
          case 14:
            t = la(null, t, r, it(r.type, e), n);
            break e;
        }
        throw Error(j(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        $i(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        ia(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Of(t), e === null)) throw Error(j(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          qc(e, t),
          Zo(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (o = Xn(Error(j(423)), t)), (t = ua(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Xn(Error(j(424)), t)), (t = ua(e, t, r, n, o));
            break e;
          } else
            for (
              Ke = At(t.stateNode.containerInfo.firstChild),
                Ye = t,
                re = !0,
                st = null,
                n = Zc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Kn(), r === o)) {
            t = _t(e, t, n);
            break e;
          }
          Re(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ef(t),
        e === null && Di(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (i = o.children),
        Li(r, o)
          ? (i = null)
          : l !== null && Li(r, l) && (t.flags |= 32),
        _f(e, t),
        Re(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Di(t), null;
    case 13:
      return jf(e, t, n);
    case 4:
      return (
        Du(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Yn(t, null, r, n)) : Re(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        oa(e, t, r, o, n)
      );
    case 7:
      return Re(e, t, t.pendingProps, n), t.child;
    case 8:
      return Re(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Re(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (i = o.value),
          q(Go, r._currentValue),
          (r._currentValue = i),
          l !== null)
        )
          if (ft(l.value, i)) {
            if (l.children === o.children && !$e.current) {
              t = _t(e, t, n);
              break e;
            }
          } else
            for (
              l = t.child, l !== null && (l.return = t);
              l !== null;

            ) {
              var u = l.dependencies;
              if (u !== null) {
                i = l.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (l.tag === 1) {
                      (s = xt(-1, n & -n)), (s.tag = 2);
                      var a = l.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var p = a.pending;
                        p === null
                          ? (s.next = s)
                          : ((s.next = p.next), (p.next = s)),
                          (a.pending = s);
                      }
                    }
                    (l.lanes |= n),
                      (s = l.alternate),
                      s !== null && (s.lanes |= n),
                      Ui(l.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (l.tag === 10)
                i = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((i = l.return), i === null)) throw Error(j(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Ui(i, n, t),
                  (i = l.sibling);
              } else i = l.child;
              if (i !== null) i.return = l;
              else
                for (i = l; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((l = i.sibling), l !== null)) {
                    (l.return = i.return), (i = l);
                    break;
                  }
                  i = i.return;
                }
              l = i;
            }
        Re(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Wn(t, n),
        (o = nt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Re(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = it(r, t.pendingProps)),
        (o = it(r.type, o)),
        la(e, t, r, o, n)
      );
    case 15:
      return Cf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        Io(e, t),
        (t.tag = 1),
        Ve(r) ? ((e = !0), Qo(t)) : (e = !1),
        Wn(t, n),
        Ef(t, r, o),
        Bi(t, r, o, n),
        Vi(null, t, r, !0, e, n)
      );
    case 19:
      return Tf(e, t, n);
    case 22:
      return Pf(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function Hf(e, t) {
  return yc(e, t);
}
function Yh(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function et(e, t, n, r) {
  return new Yh(e, t, n, r);
}
function Zu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Gh(e) {
  if (typeof e == 'function') return Zu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === vu)) return 11;
    if (e === yu) return 14;
  }
  return 2;
}
function bt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = et(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null
        ? null
        : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Mo(e, t, n, r, o, l) {
  var i = 2;
  if (((r = e), typeof e == 'function')) Zu(e) && (i = 1);
  else if (typeof e == 'string') i = 5;
  else
    e: switch (e) {
      case jn:
        return pn(n.children, o, l, t);
      case mu:
        (i = 8), (o |= 8);
        break;
      case ai:
        return (
          (e = et(12, n, t, o | 2)),
          (e.elementType = ai),
          (e.lanes = l),
          e
        );
      case ci:
        return (
          (e = et(13, n, t, o)),
          (e.elementType = ci),
          (e.lanes = l),
          e
        );
      case fi:
        return (
          (e = et(19, n, t, o)),
          (e.elementType = fi),
          (e.lanes = l),
          e
        );
      case ec:
        return El(n, o, l, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Ja:
              i = 10;
              break e;
            case qa:
              i = 9;
              break e;
            case vu:
              i = 11;
              break e;
            case yu:
              i = 14;
              break e;
            case Nt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(j(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = et(i, n, t, o)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = l),
    t
  );
}
function pn(e, t, n, r) {
  return (e = et(7, e, r, t)), (e.lanes = n), e;
}
function El(e, t, n, r) {
  return (
    (e = et(22, e, r, t)),
    (e.elementType = ec),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function oi(e, t, n) {
  return (e = et(6, e, null, t)), (e.lanes = n), e;
}
function li(e, t, n) {
  return (
    (t = et(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Xh(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Bl(0)),
    (this.expirationTimes = Bl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Bl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Ju(e, t, n, r, o, l, i, u, s) {
  return (
    (e = new Xh(e, t, n, u, s)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = et(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Mu(l),
    e
  );
}
function Zh(e, t, n) {
  var r =
    3 < arguments.length && arguments[3] !== void 0
      ? arguments[3]
      : null;
  return {
    $$typeof: On,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Qf(e) {
  if (!e) return Yt;
  e = e._reactInternals;
  e: {
    if (Sn(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ve(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ve(n)) return Hc(e, n, t);
  }
  return t;
}
function Kf(e, t, n, r, o, l, i, u, s) {
  return (
    (e = Ju(n, r, !0, e, o, l, i, u, s)),
    (e.context = Qf(null)),
    (n = e.current),
    (r = Me()),
    (o = Wt(n)),
    (l = xt(r, o)),
    (l.callback = t ?? null),
    $t(n, l, o),
    (e.current.lanes = o),
    Kr(e, o, r),
    We(e, r),
    e
  );
}
function xl(e, t, n, r) {
  var o = t.current,
    l = Me(),
    i = Wt(o);
  return (
    (n = Qf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = xt(l, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = $t(o, t, i)),
    e !== null && (ct(e, o, i, l), To(e, o, i)),
    i
  );
}
function ll(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ya(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function qu(e, t) {
  ya(e, t), (e = e.alternate) && ya(e, t);
}
function Jh() {
  return null;
}
var Yf =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function es(e) {
  this._internalRoot = e;
}
kl.prototype.render = es.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  xl(e, t, null, null);
};
kl.prototype.unmount = es.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    gn(function () {
      xl(null, e, null, null);
    }),
      (t[Ct] = null);
  }
};
function kl(e) {
  this._internalRoot = e;
}
kl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Cc();
    e = { blockedOn: null, target: e, priority: t };
    for (
      var n = 0;
      n < It.length && t !== 0 && t < It[n].priority;
      n++
    );
    It.splice(n, 0, e), n === 0 && _c(e);
  }
};
function ts(e) {
  return !(
    !e ||
    (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
  );
}
function Cl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 ||
        e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function ga() {}
function qh(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var l = r;
      r = function () {
        var a = ll(i);
        l.call(a);
      };
    }
    var i = Kf(t, r, e, 0, null, !1, !1, '', ga);
    return (
      (e._reactRootContainer = i),
      (e[Ct] = i.current),
      Mr(e.nodeType === 8 ? e.parentNode : e),
      gn(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var u = r;
    r = function () {
      var a = ll(s);
      u.call(a);
    };
  }
  var s = Ju(e, 0, !1, null, null, !1, !1, '', ga);
  return (
    (e._reactRootContainer = s),
    (e[Ct] = s.current),
    Mr(e.nodeType === 8 ? e.parentNode : e),
    gn(function () {
      xl(t, s, n, r);
    }),
    s
  );
}
function Pl(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == 'function') {
      var u = o;
      o = function () {
        var s = ll(i);
        u.call(s);
      };
    }
    xl(t, i, e, o);
  } else i = qh(n, t, e, o, r);
  return ll(i);
}
xc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = mr(t.pendingLanes);
        n !== 0 &&
          (Su(t, n | 1),
          We(t, fe()),
          !(Q & 6) && ((Zn = fe() + 500), Zt()));
      }
      break;
    case 13:
      gn(function () {
        var r = Pt(e, 1);
        if (r !== null) {
          var o = Me();
          ct(r, e, 1, o);
        }
      }),
        qu(e, 1);
  }
};
Eu = function (e) {
  if (e.tag === 13) {
    var t = Pt(e, 134217728);
    if (t !== null) {
      var n = Me();
      ct(t, e, 134217728, n);
    }
    qu(e, 134217728);
  }
};
kc = function (e) {
  if (e.tag === 13) {
    var t = Wt(e),
      n = Pt(e, t);
    if (n !== null) {
      var r = Me();
      ct(n, e, t, r);
    }
    qu(e, t);
  }
};
Cc = function () {
  return G;
};
Pc = function (e, t) {
  var n = G;
  try {
    return (G = e), t();
  } finally {
    G = n;
  }
};
Ei = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((hi(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' +
              JSON.stringify('' + t) +
              '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = ml(r);
            if (!o) throw Error(j(90));
            nc(r), hi(r, o);
          }
        }
      }
      break;
    case 'textarea':
      oc(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Bn(e, !!n.multiple, t, !1);
  }
};
fc = Yu;
dc = gn;
var em = {
    usingClientEntryPoint: !1,
    Events: [Gr, In, ml, ac, cc, Yu],
  },
  fr = {
    findFiberByHostInstance: an,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  tm = {
    bundleType: fr.bundleType,
    version: fr.version,
    rendererPackageName: fr.rendererPackageName,
    rendererConfig: fr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ot.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = mc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: fr.findFiberByHostInstance || Jh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var wo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wo.isDisabled && wo.supportsFiber)
    try {
      (fl = wo.inject(tm)), (mt = wo);
    } catch {}
}
Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = em;
Xe.createPortal = function (e, t) {
  var n =
    2 < arguments.length && arguments[2] !== void 0
      ? arguments[2]
      : null;
  if (!ts(t)) throw Error(j(200));
  return Zh(e, t, null, n);
};
Xe.createRoot = function (e, t) {
  if (!ts(e)) throw Error(j(299));
  var n = !1,
    r = '',
    o = Yf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Ju(e, 1, !1, null, null, n, !1, r, o)),
    (e[Ct] = t.current),
    Mr(e.nodeType === 8 ? e.parentNode : e),
    new es(t)
  );
};
Xe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(j(188))
      : ((e = Object.keys(e).join(',')), Error(j(268, e)));
  return (e = mc(t)), (e = e === null ? null : e.stateNode), e;
};
Xe.flushSync = function (e) {
  return gn(e);
};
Xe.hydrate = function (e, t, n) {
  if (!Cl(t)) throw Error(j(200));
  return Pl(null, e, t, !0, n);
};
Xe.hydrateRoot = function (e, t, n) {
  if (!ts(e)) throw Error(j(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = '',
    i = Yf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Kf(t, null, e, 1, n ?? null, o, !1, l, i)),
    (e[Ct] = t.current),
    Mr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new kl(t);
};
Xe.render = function (e, t, n) {
  if (!Cl(t)) throw Error(j(200));
  return Pl(null, e, t, !1, n);
};
Xe.unmountComponentAtNode = function (e) {
  if (!Cl(e)) throw Error(j(40));
  return e._reactRootContainer
    ? (gn(function () {
        Pl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ct] = null);
        });
      }),
      !0)
    : !1;
};
Xe.unstable_batchedUpdates = Yu;
Xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Cl(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return Pl(e, t, n, !1, r);
};
Xe.version = '18.3.1-next-f1338f8080-20240426';
function Gf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gf);
    } catch (e) {
      console.error(e);
    }
}
Gf(), (Ya.exports = Xe);
var Xf = Ya.exports;
const So = uu(Xf);
var Zf,
  wa = Xf;
(Zf = wa.createRoot), wa.hydrateRoot;
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function br() {
  return (
    (br = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) &&
                (e[r] = n[r]);
          }
          return e;
        }),
    br.apply(this, arguments)
  );
}
var Dt;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(Dt || (Dt = {}));
const Sa = 'popstate';
function nm(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: l, search: i, hash: u } = r.location;
    return eu(
      '',
      { pathname: l, search: i, hash: u },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default',
    );
  }
  function n(r, o) {
    return typeof o == 'string' ? o : il(o);
  }
  return om(t, n, null, e);
}
function ce(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Jf(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function rm() {
  return Math.random().toString(36).substr(2, 8);
}
function Ea(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function eu(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    br(
      {
        pathname: typeof e == 'string' ? e : e.pathname,
        search: '',
        hash: '',
      },
      typeof t == 'string' ? nr(t) : t,
      { state: n, key: (t && t.key) || r || rm() },
    )
  );
}
function il(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function nr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function om(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: l = !1 } = r,
    i = o.history,
    u = Dt.Pop,
    s = null,
    a = p();
  a == null &&
    ((a = 0), i.replaceState(br({}, i.state, { idx: a }), ''));
  function p() {
    return (i.state || { idx: null }).idx;
  }
  function f() {
    u = Dt.Pop;
    let L = p(),
      h = L == null ? null : L - a;
    (a = L), s && s({ action: u, location: C.location, delta: h });
  }
  function v(L, h) {
    u = Dt.Push;
    let c = eu(C.location, L, h);
    a = p() + 1;
    let d = Ea(c, a),
      S = C.createHref(c);
    try {
      i.pushState(d, '', S);
    } catch (P) {
      if (P instanceof DOMException && P.name === 'DataCloneError')
        throw P;
      o.location.assign(S);
    }
    l && s && s({ action: u, location: C.location, delta: 1 });
  }
  function x(L, h) {
    u = Dt.Replace;
    let c = eu(C.location, L, h);
    a = p();
    let d = Ea(c, a),
      S = C.createHref(c);
    i.replaceState(d, '', S),
      l && s && s({ action: u, location: C.location, delta: 0 });
  }
  function k(L) {
    let h =
        o.location.origin !== 'null'
          ? o.location.origin
          : o.location.href,
      c = typeof L == 'string' ? L : il(L);
    return (
      (c = c.replace(/ $/, '%20')),
      ce(
        h,
        'No window.location.(origin|href) available to create URL for href: ' +
          c,
      ),
      new URL(c, h)
    );
  }
  let C = {
    get action() {
      return u;
    },
    get location() {
      return e(o, i);
    },
    listen(L) {
      if (s)
        throw new Error('A history only accepts one active listener');
      return (
        o.addEventListener(Sa, f),
        (s = L),
        () => {
          o.removeEventListener(Sa, f), (s = null);
        }
      );
    },
    createHref(L) {
      return t(o, L);
    },
    createURL: k,
    encodeLocation(L) {
      let h = k(L);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: v,
    replace: x,
    go(L) {
      return i.go(L);
    },
  };
  return C;
}
var xa;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(xa || (xa = {}));
function lm(e, t, n) {
  return n === void 0 && (n = '/'), im(e, t, n, !1);
}
function im(e, t, n, r) {
  let o = typeof t == 'string' ? nr(t) : t,
    l = Jn(o.pathname || '/', n);
  if (l == null) return null;
  let i = qf(e);
  um(i);
  let u = null;
  for (let s = 0; u == null && s < i.length; ++s) {
    let a = gm(l);
    u = vm(i[s], a, r);
  }
  return u;
}
function qf(e, t, n, r) {
  t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = '');
  let o = (l, i, u) => {
    let s = {
      relativePath: u === void 0 ? l.path || '' : u,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: i,
      route: l,
    };
    s.relativePath.startsWith('/') &&
      (ce(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' +
            r +
            '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.',
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let a = Ht([r, s.relativePath]),
      p = n.concat(s);
    l.children &&
      l.children.length > 0 &&
      (ce(
        l.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + a + '".'),
      ),
      qf(l.children, t, p, a)),
      !(l.path == null && !l.index) &&
        t.push({ path: a, score: hm(a, l.index), routesMeta: p });
  };
  return (
    e.forEach((l, i) => {
      var u;
      if (l.path === '' || !((u = l.path) != null && u.includes('?')))
        o(l, i);
      else for (let s of ed(l.path)) o(l, i, s);
    }),
    t
  );
}
function ed(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith('?'),
    l = n.replace(/\?$/, '');
  if (r.length === 0) return o ? [l, ''] : [l];
  let i = ed(r.join('/')),
    u = [];
  return (
    u.push(...i.map((s) => (s === '' ? l : [l, s].join('/')))),
    o && u.push(...i),
    u.map((s) => (e.startsWith('/') && s === '' ? '/' : s))
  );
}
function um(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : mm(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const sm = /^:[\w-]+$/,
  am = 3,
  cm = 2,
  fm = 1,
  dm = 10,
  pm = -2,
  ka = (e) => e === '*';
function hm(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(ka) && (r += pm),
    t && (r += cm),
    n
      .filter((o) => !ka(o))
      .reduce((o, l) => o + (sm.test(l) ? am : l === '' ? fm : dm), r)
  );
}
function mm(e, t) {
  return e.length === t.length &&
    e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function vm(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    l = '/',
    i = [];
  for (let u = 0; u < r.length; ++u) {
    let s = r[u],
      a = u === r.length - 1,
      p = l === '/' ? t : t.slice(l.length) || '/',
      f = ul(
        {
          path: s.relativePath,
          caseSensitive: s.caseSensitive,
          end: a,
        },
        p,
      ),
      v = s.route;
    if (
      (!f &&
        a &&
        n &&
        !r[r.length - 1].route.index &&
        (f = ul(
          {
            path: s.relativePath,
            caseSensitive: s.caseSensitive,
            end: !1,
          },
          p,
        )),
      !f)
    )
      return null;
    Object.assign(o, f.params),
      i.push({
        params: o,
        pathname: Ht([l, f.pathname]),
        pathnameBase: xm(Ht([l, f.pathnameBase])),
        route: v,
      }),
      f.pathnameBase !== '/' && (l = Ht([l, f.pathnameBase]));
  }
  return i;
}
function ul(e, t) {
  typeof e == 'string' &&
    (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = ym(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let l = o[0],
    i = l.replace(/(.)\/+$/, '$1'),
    u = o.slice(1);
  return {
    params: r.reduce((a, p, f) => {
      let { paramName: v, isOptional: x } = p;
      if (v === '*') {
        let C = u[f] || '';
        i = l.slice(0, l.length - C.length).replace(/(.)\/+$/, '$1');
      }
      const k = u[f];
      return (
        x && !k
          ? (a[v] = void 0)
          : (a[v] = (k || '').replace(/%2F/g, '/')),
        a
      );
    }, {}),
    pathname: l,
    pathnameBase: i,
    pattern: e,
  };
}
function ym(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Jf(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' +
          e.replace(/\*$/, '/*') +
          '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' +
          e.replace(/\*$/, '/*') +
          '".'),
    );
  let r = [],
    o =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, u, s) => (
            r.push({ paramName: u, isOptional: s != null }),
            s ? '/?([^\\/]+)?' : '/([^\\/]+)'
          ),
        );
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }),
        (o +=
          e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (o += '\\/*$')
      : e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, t ? void 0 : 'i'), r]
  );
}
function gm(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      Jf(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').'),
      ),
      e
    );
  }
}
function Jn(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function wm(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: o = '',
  } = typeof e == 'string' ? nr(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : Sm(n, t)) : t,
    search: km(r),
    hash: Cm(o),
  };
}
function Sm(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((o) => {
      o === '..' ? n.length > 1 && n.pop() : o !== '.' && n.push(o);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function ii(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' +
      n +
      '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Em(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function td(e, t) {
  let n = Em(e);
  return t
    ? n.map((r, o) =>
        o === n.length - 1 ? r.pathname : r.pathnameBase,
      )
    : n.map((r) => r.pathnameBase);
}
function nd(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == 'string'
    ? (o = nr(e))
    : ((o = br({}, e)),
      ce(
        !o.pathname || !o.pathname.includes('?'),
        ii('?', 'pathname', 'search', o),
      ),
      ce(
        !o.pathname || !o.pathname.includes('#'),
        ii('#', 'pathname', 'hash', o),
      ),
      ce(
        !o.search || !o.search.includes('#'),
        ii('#', 'search', 'hash', o),
      ));
  let l = e === '' || o.pathname === '',
    i = l ? '/' : o.pathname,
    u;
  if (i == null) u = n;
  else {
    let f = t.length - 1;
    if (!r && i.startsWith('..')) {
      let v = i.split('/');
      for (; v[0] === '..'; ) v.shift(), (f -= 1);
      o.pathname = v.join('/');
    }
    u = f >= 0 ? t[f] : '/';
  }
  let s = wm(o, u),
    a = i && i !== '/' && i.endsWith('/'),
    p = (l || i === '.') && n.endsWith('/');
  return (
    !s.pathname.endsWith('/') && (a || p) && (s.pathname += '/'), s
  );
}
const Ht = (e) => e.join('/').replace(/\/\/+/g, '/'),
  xm = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  km = (e) =>
    !e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e,
  Cm = (e) =>
    !e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e;
function Pm(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const rd = ['post', 'put', 'patch', 'delete'];
new Set(rd);
const _m = ['get', ...rd];
new Set(_m);
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Hr() {
  return (
    (Hr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) &&
                (e[r] = n[r]);
          }
          return e;
        }),
    Hr.apply(this, arguments)
  );
}
const _l = T.createContext(null),
  od = T.createContext(null),
  Jt = T.createContext(null),
  Ol = T.createContext(null),
  qt = T.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1,
  }),
  ld = T.createContext(null);
function Om(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Zr() || ce(!1);
  let { basename: r, navigator: o } = T.useContext(Jt),
    { hash: l, pathname: i, search: u } = jl(e, { relative: n }),
    s = i;
  return (
    r !== '/' && (s = i === '/' ? r : Ht([r, i])),
    o.createHref({ pathname: s, search: u, hash: l })
  );
}
function Zr() {
  return T.useContext(Ol) != null;
}
function rr() {
  return Zr() || ce(!1), T.useContext(Ol).location;
}
function id(e) {
  T.useContext(Jt).static || T.useLayoutEffect(e);
}
function ud() {
  let { isDataRoute: e } = T.useContext(qt);
  return e ? $m() : jm();
}
function jm() {
  Zr() || ce(!1);
  let e = T.useContext(_l),
    { basename: t, future: n, navigator: r } = T.useContext(Jt),
    { matches: o } = T.useContext(qt),
    { pathname: l } = rr(),
    i = JSON.stringify(td(o, n.v7_relativeSplatPath)),
    u = T.useRef(!1);
  return (
    id(() => {
      u.current = !0;
    }),
    T.useCallback(
      function (a, p) {
        if ((p === void 0 && (p = {}), !u.current)) return;
        if (typeof a == 'number') {
          r.go(a);
          return;
        }
        let f = nd(a, JSON.parse(i), l, p.relative === 'path');
        e == null &&
          t !== '/' &&
          (f.pathname = f.pathname === '/' ? t : Ht([t, f.pathname])),
          (p.replace ? r.replace : r.push)(f, p.state, p);
      },
      [t, r, i, l, e],
    )
  );
}
function Tm() {
  let { matches: e } = T.useContext(qt),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function jl(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = T.useContext(Jt),
    { matches: o } = T.useContext(qt),
    { pathname: l } = rr(),
    i = JSON.stringify(td(o, r.v7_relativeSplatPath));
  return T.useMemo(
    () => nd(e, JSON.parse(i), l, n === 'path'),
    [e, i, l, n],
  );
}
function Nm(e, t) {
  return Lm(e, t);
}
function Lm(e, t, n, r) {
  Zr() || ce(!1);
  let { navigator: o } = T.useContext(Jt),
    { matches: l } = T.useContext(qt),
    i = l[l.length - 1],
    u = i ? i.params : {};
  i && i.pathname;
  let s = i ? i.pathnameBase : '/';
  i && i.route;
  let a = rr(),
    p;
  if (t) {
    var f;
    let L = typeof t == 'string' ? nr(t) : t;
    s === '/' ||
      ((f = L.pathname) != null && f.startsWith(s)) ||
      ce(!1),
      (p = L);
  } else p = a;
  let v = p.pathname || '/',
    x = v;
  if (s !== '/') {
    let L = s.replace(/^\//, '').split('/');
    x =
      '/' + v.replace(/^\//, '').split('/').slice(L.length).join('/');
  }
  let k = lm(e, { pathname: x }),
    C = Dm(
      k &&
        k.map((L) =>
          Object.assign({}, L, {
            params: Object.assign({}, u, L.params),
            pathname: Ht([
              s,
              o.encodeLocation
                ? o.encodeLocation(L.pathname).pathname
                : L.pathname,
            ]),
            pathnameBase:
              L.pathnameBase === '/'
                ? s
                : Ht([
                    s,
                    o.encodeLocation
                      ? o.encodeLocation(L.pathnameBase).pathname
                      : L.pathnameBase,
                  ]),
          }),
        ),
      l,
      n,
      r,
    );
  return t && C
    ? T.createElement(
        Ol.Provider,
        {
          value: {
            location: Hr(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              p,
            ),
            navigationType: Dt.Pop,
          },
        },
        C,
      )
    : C;
}
function Im() {
  let e = Am(),
    t = Pm(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = {
      padding: '0.5rem',
      backgroundColor: 'rgba(200,200,200, 0.5)',
    };
  return T.createElement(
    T.Fragment,
    null,
    T.createElement('h2', null, 'Unexpected Application Error!'),
    T.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? T.createElement('pre', { style: o }, n) : null,
    null,
  );
}
const Rm = T.createElement(Im, null);
class zm extends T.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? {
          error: t.error,
          location: t.location,
          revalidation: t.revalidation,
        }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? T.createElement(
          qt.Provider,
          { value: this.props.routeContext },
          T.createElement(ld.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function Mm(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = T.useContext(_l);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    T.createElement(qt.Provider, { value: t }, r)
  );
}
function Dm(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var l;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (l = r) != null &&
      l.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let i = e,
    u = (o = n) == null ? void 0 : o.errors;
  if (u != null) {
    let p = i.findIndex(
      (f) =>
        f.route.id && (u == null ? void 0 : u[f.route.id]) !== void 0,
    );
    p >= 0 || ce(!1), (i = i.slice(0, Math.min(i.length, p + 1)));
  }
  let s = !1,
    a = -1;
  if (n && r && r.v7_partialHydration)
    for (let p = 0; p < i.length; p++) {
      let f = i[p];
      if (
        ((f.route.HydrateFallback ||
          f.route.hydrateFallbackElement) &&
          (a = p),
        f.route.id)
      ) {
        let { loaderData: v, errors: x } = n,
          k =
            f.route.loader &&
            v[f.route.id] === void 0 &&
            (!x || x[f.route.id] === void 0);
        if (f.route.lazy || k) {
          (s = !0), a >= 0 ? (i = i.slice(0, a + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((p, f, v) => {
    let x,
      k = !1,
      C = null,
      L = null;
    n &&
      ((x = u && f.route.id ? u[f.route.id] : void 0),
      (C = f.route.errorElement || Rm),
      s &&
        (a < 0 && v === 0
          ? ((k = !0), (L = null))
          : a === v &&
            ((k = !0),
            (L = f.route.hydrateFallbackElement || null))));
    let h = t.concat(i.slice(0, v + 1)),
      c = () => {
        let d;
        return (
          x
            ? (d = C)
            : k
            ? (d = L)
            : f.route.Component
            ? (d = T.createElement(f.route.Component, null))
            : f.route.element
            ? (d = f.route.element)
            : (d = p),
          T.createElement(Mm, {
            match: f,
            routeContext: {
              outlet: p,
              matches: h,
              isDataRoute: n != null,
            },
            children: d,
          })
        );
      };
    return n &&
      (f.route.ErrorBoundary || f.route.errorElement || v === 0)
      ? T.createElement(zm, {
          location: n.location,
          revalidation: n.revalidation,
          component: C,
          error: x,
          children: c(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : c();
  }, null);
}
var sd = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(sd || {}),
  sl = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(sl || {});
function Um(e) {
  let t = T.useContext(_l);
  return t || ce(!1), t;
}
function Fm(e) {
  let t = T.useContext(od);
  return t || ce(!1), t;
}
function Bm(e) {
  let t = T.useContext(qt);
  return t || ce(!1), t;
}
function ad(e) {
  let t = Bm(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ce(!1), n.route.id;
}
function Am() {
  var e;
  let t = T.useContext(ld),
    n = Fm(sl.UseRouteError),
    r = ad(sl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function $m() {
  let { router: e } = Um(sd.UseNavigateStable),
    t = ad(sl.UseNavigateStable),
    n = T.useRef(!1);
  return (
    id(() => {
      n.current = !0;
    }),
    T.useCallback(
      function (o, l) {
        l === void 0 && (l = {}),
          n.current &&
            (typeof o == 'number'
              ? e.navigate(o)
              : e.navigate(o, Hr({ fromRouteId: t }, l)));
      },
      [e, t],
    )
  );
}
function ln(e) {
  ce(!1);
}
function Vm(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: o = Dt.Pop,
    navigator: l,
    static: i = !1,
    future: u,
  } = e;
  Zr() && ce(!1);
  let s = t.replace(/^\/*/, '/'),
    a = T.useMemo(
      () => ({
        basename: s,
        navigator: l,
        static: i,
        future: Hr({ v7_relativeSplatPath: !1 }, u),
      }),
      [s, u, l, i],
    );
  typeof r == 'string' && (r = nr(r));
  let {
      pathname: p = '/',
      search: f = '',
      hash: v = '',
      state: x = null,
      key: k = 'default',
    } = r,
    C = T.useMemo(() => {
      let L = Jn(p, s);
      return L == null
        ? null
        : {
            location: {
              pathname: L,
              search: f,
              hash: v,
              state: x,
              key: k,
            },
            navigationType: o,
          };
    }, [s, p, f, v, x, k, o]);
  return C == null
    ? null
    : T.createElement(
        Jt.Provider,
        { value: a },
        T.createElement(Ol.Provider, { children: n, value: C }),
      );
}
function Ca(e) {
  let { children: t, location: n } = e;
  return Nm(tu(t), n);
}
new Promise(() => {});
function tu(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    T.Children.forEach(e, (r, o) => {
      if (!T.isValidElement(r)) return;
      let l = [...t, o];
      if (r.type === T.Fragment) {
        n.push.apply(n, tu(r.props.children, l));
        return;
      }
      r.type !== ln && ce(!1),
        !r.props.index || !r.props.children || ce(!1);
      let i = {
        id: r.props.id || l.join('-'),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null ||
          r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = tu(r.props.children, l)),
        n.push(i);
    }),
    n
  );
}
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function al() {
  return (
    (al = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) &&
                (e[r] = n[r]);
          }
          return e;
        }),
    al.apply(this, arguments)
  );
}
function cd(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    l;
  for (l = 0; l < r.length; l++)
    (o = r[l]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Wm(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function bm(e, t) {
  return e.button === 0 && (!t || t === '_self') && !Wm(e);
}
const Hm = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'viewTransition',
  ],
  Qm = [
    'aria-current',
    'caseSensitive',
    'className',
    'end',
    'style',
    'to',
    'viewTransition',
    'children',
  ],
  Km = '6';
try {
  window.__reactRouterVersion = Km;
} catch {}
const Ym = T.createContext({ isTransitioning: !1 }),
  Gm = 'startTransition',
  Pa = Hd[Gm];
function Xm(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    l = T.useRef();
  l.current == null && (l.current = nm({ window: o, v5Compat: !0 }));
  let i = l.current,
    [u, s] = T.useState({ action: i.action, location: i.location }),
    { v7_startTransition: a } = r || {},
    p = T.useCallback(
      (f) => {
        a && Pa ? Pa(() => s(f)) : s(f);
      },
      [s, a],
    );
  return (
    T.useLayoutEffect(() => i.listen(p), [i, p]),
    T.createElement(Vm, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: i,
      future: r,
    })
  );
}
const Zm =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Jm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  qm = T.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: l,
        replace: i,
        state: u,
        target: s,
        to: a,
        preventScrollReset: p,
        viewTransition: f,
      } = t,
      v = cd(t, Hm),
      { basename: x } = T.useContext(Jt),
      k,
      C = !1;
    if (typeof a == 'string' && Jm.test(a) && ((k = a), Zm))
      try {
        let d = new URL(window.location.href),
          S = a.startsWith('//')
            ? new URL(d.protocol + a)
            : new URL(a),
          P = Jn(S.pathname, x);
        S.origin === d.origin && P != null
          ? (a = P + S.search + S.hash)
          : (C = !0);
      } catch {}
    let L = Om(a, { relative: o }),
      h = tv(a, {
        replace: i,
        state: u,
        target: s,
        preventScrollReset: p,
        relative: o,
        viewTransition: f,
      });
    function c(d) {
      r && r(d), d.defaultPrevented || h(d);
    }
    return T.createElement(
      'a',
      al({}, v, {
        href: k || L,
        onClick: C || l ? r : c,
        ref: n,
        target: s,
      }),
    );
  }),
  Jv = T.forwardRef(function (t, n) {
    let {
        'aria-current': r = 'page',
        caseSensitive: o = !1,
        className: l = '',
        end: i = !1,
        style: u,
        to: s,
        viewTransition: a,
        children: p,
      } = t,
      f = cd(t, Qm),
      v = jl(s, { relative: f.relative }),
      x = rr(),
      k = T.useContext(od),
      { navigator: C, basename: L } = T.useContext(Jt),
      h = k != null && nv(v) && a === !0,
      c = C.encodeLocation
        ? C.encodeLocation(v).pathname
        : v.pathname,
      d = x.pathname,
      S =
        k && k.navigation && k.navigation.location
          ? k.navigation.location.pathname
          : null;
    o ||
      ((d = d.toLowerCase()),
      (S = S ? S.toLowerCase() : null),
      (c = c.toLowerCase())),
      S && L && (S = Jn(S, L) || S);
    const P = c !== '/' && c.endsWith('/') ? c.length - 1 : c.length;
    let N = d === c || (!i && d.startsWith(c) && d.charAt(P) === '/'),
      R =
        S != null &&
        (S === c ||
          (!i && S.startsWith(c) && S.charAt(c.length) === '/')),
      O = { isActive: N, isPending: R, isTransitioning: h },
      $ = N ? r : void 0,
      D;
    typeof l == 'function'
      ? (D = l(O))
      : (D = [
          l,
          N ? 'active' : null,
          R ? 'pending' : null,
          h ? 'transitioning' : null,
        ]
          .filter(Boolean)
          .join(' '));
    let H = typeof u == 'function' ? u(O) : u;
    return T.createElement(
      qm,
      al({}, f, {
        'aria-current': $,
        className: D,
        ref: n,
        style: H,
        to: s,
        viewTransition: a,
      }),
      typeof p == 'function' ? p(O) : p,
    );
  });
var nu;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(nu || (nu = {}));
var _a;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(_a || (_a = {}));
function ev(e) {
  let t = T.useContext(_l);
  return t || ce(!1), t;
}
function tv(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: l,
      relative: i,
      viewTransition: u,
    } = t === void 0 ? {} : t,
    s = ud(),
    a = rr(),
    p = jl(e, { relative: i });
  return T.useCallback(
    (f) => {
      if (bm(f, n)) {
        f.preventDefault();
        let v = r !== void 0 ? r : il(a) === il(p);
        s(e, {
          replace: v,
          state: o,
          preventScrollReset: l,
          relative: i,
          viewTransition: u,
        });
      }
    },
    [a, s, p, r, o, n, e, l, i, u],
  );
}
function nv(e, t) {
  t === void 0 && (t = {});
  let n = T.useContext(Ym);
  n == null && ce(!1);
  let { basename: r } = ev(nu.useViewTransitionState),
    o = jl(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let l =
      Jn(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    i = Jn(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return ul(o.pathname, i) != null || ul(o.pathname, l) != null;
}
const rv = 'modulepreload',
  ov = function (e) {
    return '/portfolio/' + e;
  },
  Oa = {},
  Eo = function (t, n, r) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName('link');
      const i = document.querySelector('meta[property=csp-nonce]'),
        u =
          (i == null ? void 0 : i.nonce) ||
          (i == null ? void 0 : i.getAttribute('nonce'));
      o = Promise.allSettled(
        n.map((s) => {
          if (((s = ov(s)), s in Oa)) return;
          Oa[s] = !0;
          const a = s.endsWith('.css'),
            p = a ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${s}"]${p}`)) return;
          const f = document.createElement('link');
          if (
            ((f.rel = a ? 'stylesheet' : rv),
            a || (f.as = 'script'),
            (f.crossOrigin = ''),
            (f.href = s),
            u && f.setAttribute('nonce', u),
            document.head.appendChild(f),
            a)
          )
            return new Promise((v, x) => {
              f.addEventListener('load', v),
                f.addEventListener('error', () =>
                  x(new Error(`Unable to preload CSS for ${s}`)),
                );
            });
        }),
      );
    }
    function l(i) {
      const u = new Event('vite:preloadError', { cancelable: !0 });
      if (
        ((u.payload = i),
        window.dispatchEvent(u),
        !u.defaultPrevented)
      )
        throw i;
    }
    return o.then((i) => {
      for (const u of i || []) u.status === 'rejected' && l(u.reason);
      return t().catch(l);
    });
  },
  lv = '_preloader_1kzut_17',
  iv = '_innerPreloader_1kzut_30',
  ja = { preloader: lv, innerPreloader: iv },
  uv = () =>
    B.jsx('div', {
      className: ja.preloader,
      children: B.jsxs('div', {
        className: ja.innerPreloader,
        children: [B.jsx('div', {}), B.jsx('div', {})],
      }),
    }),
  sv = '_cardWrapper_zw1up_1',
  av = '_image_zw1up_11',
  cv = '_cardBody_zw1up_17',
  fv = '_cardFooter_zw1up_23',
  dv = '_title_zw1up_32',
  pv = '_technologies_zw1up_38',
  kn = {
    cardWrapper: sv,
    image: av,
    cardBody: cv,
    cardFooter: fv,
    title: dv,
    technologies: pv,
  },
  hv = [
    {
      id: '1',
      title: 'CheapFood App',
      description:
        'Desenvolvi um aplicativo de compras com entrega rápida, disponível para iOS e Android, projetado para oferecer uma experiência de compra intuitiva e eficiente.',
      image: {
        src: 'https://scontent.fsdu7-1.fna.fbcdn.net/v/t39.30808-6/306997992_613837383688535_7239765736714941557_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YPq-t8fORqYQ7kNvgEw12Oc&_nc_zt=23&_nc_ht=scontent.fsdu7-1.fna&_nc_gid=A_NAD6sW6Tkj21xYgEQOo7O&oh=00_AYDE3lxxooqOqf5nx01LpN5nLmVqrOrRQ6YmkYODJ1gO4Q&oe=6718F811',
        placeholderSrc:
          'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
      },
      links: { site: 'https://www.facebook.com/cheapfoodapp/' },
      technologies: [
        '#typescript',
        '#expo',
        '#react-native',
        '#react-navigation',
        '#react-native-reanimated',
        '#payments',
        '#lottie',
        '#firebase',
      ],
    },
    {
      id: '2',
      title: 'CheapFood Entregador',
      description:
        'O CheapFood Entregador é um aplicativo projetado para otimizar a experiência dos entregadores de refeições. Com uma interface intuitiva, os entregadores podem receber e gerenciar pedidos com facilidade, rastrear rotas em tempo real e se comunicar diretamente com os clientes.',
      image: {
        src: 'https://cdn.discordapp.com/attachments/1293038046366666816/1297036073532391515/Design_sem_nome.png?ex=67147679&is=671324f9&hm=46975c46d51c9322ac9b8b8ac961e14994ccb0aa0840cbc3f97c1014399fc96a&',
        placeholderSrc:
          'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
      },
      links: {
        repo: 'https://github.com/tolypash/react-native-yoco',
      },
      technologies: [
        '#react-native',
        '#typescript',
        '#swift',
        '#kotlin',
        '#expo modules api',
        '#turbo modules',
        '#npm',
        '#payments',
        '#sdk',
      ],
    },
    {
      id: '3',
      title: 'Pontotel Gestão',
      description:
        'O Pontotel Gestão permite que você registre, acompanhe e maximize seus pontos de forma fácil e eficiente. Os usuários podem visualizar o saldo de pontos em tempo real, receber notificações sobre oportunidades de resgate e acessar análises detalhadas sobre suas atividades.',
      image: {
        src: 'https://media.discordapp.net/attachments/1293038046366666816/1297037429236306033/Design_sem_nome_1.png?ex=671477bc&is=6713263c&hm=3abf078eac5a327962980557c12956b01b33f7a055e3ac537f454ea2acae01c5&=&format=webp&quality=lossless&width=629&height=629',
        placeholderSrc:
          'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
      },
      links: {
        site: 'https://apps.apple.com/br/app/pontotel-gest%C3%A3o/id1457844741',
      },
      technologies: [
        '#typescript',
        '#react-native',
        '#expo',
        '#mobx',
        '#react-navigation',
        '#i18next',
        '#jest',
        '#sentry',
        '#axios',
        '#styled-components',
        '#firebase',
        '#lottie',
        '#date-fns',
        '#reactotron',
        '#zustand',
        '#eslint',
        '#prettier',
        '#yup',
        '#jail-monkey',
        '#react-native-svg',
        '#expo-sqlite',
        '#expo-image-manipulator',
        '#redux',
        '#context-api',
        '#native-module',
      ],
    },
    {
      id: '4',
      title: 'BatePonto',
      description:
        'App exclusivo para marcação de pontos com segurança, rapidez e praticidade. O Bateponto é um aplicativo de ponto eletrônico que permite que os funcionários registrem sua entrada e saída do trabalho com facilidade e precisão.',
      image: {
        src: 'https://www.pontotel.com.br/local/wp-content/uploads/2019/05/como-funciona-o-pontotel-controle-de-ponto-pelo-celular.webp',
        placeholderSrc:
          'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
      },
      links: {
        site: 'https://apps.apple.com/br/app/bateponto/id1531898009',
      },
      technologies: [
        '#typescript',
        '#react-native',
        '#expo',
        '#mobx',
        '#react-navigation',
        '#i18next',
        '#jest',
        '#sentry',
        '#axios',
        '#styled-components',
        '#firebase',
        '#lottie',
        '#date-fns',
        '#reactotron',
        '#zustand',
        '#eslint',
        '#prettier',
        '#yup',
        '#jail-monkey',
        '#react-native-svg',
        '#expo-sqlite',
        '#expo-image-manipulator',
        '#redux',
        '#context-api',
        '#native-module',
      ],
    },
    {
      id: '5',
      title: 'Parceiro da Construção',
      description:
        'Desenvolvi um aplicativo educacional voltado para o setor da construção civil, com o objetivo de capacitar profissionais de maneira prática e acessível. A plataforma oferece uma variedade de cursos especializados, focados nas necessidades do mercado, abordando desde técnicas de construção até normas de segurança.',
      image: {
        src: 'https://cdn.prod.website-files.com/63efdee0086be8e9f2b90d1d/640b8a6fee255ab41171be32_Plataforma%205.png',
        placeholderSrc:
          'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
      },
      links: {
        repo: 'https://apps.apple.com/br/app/parceiro-da-constru%C3%A7%C3%A3o/id1567978563',
      },
      technologies: [
        '#react-native',
        'expo',
        '#redux',
        '#redux-toolkit',
        '#react-navigation',
        '#nodejs',
        '#express',
        '#mongodb',
      ],
    },
    {
      id: '6',
      title: 'Luriko Nakayama Psicologia',
      description:
        'Desenvolvi um site de psicologia com foco em criar um ambiente acolhedor e intuitivo para os usuários. A plataforma permite agendamentos online.',
      image: {
        src: 'https://media.discordapp.net/attachments/1293038046366666816/1297040590436958208/Design_sem_nome_2.png?ex=67147aae&is=6713292e&hm=3d0936e5427c84ffc8622f7d843ee14d4a1f85d16e383c17d2eb84d1ada590e5&=&format=webp&quality=lossless&width=629&height=629',
        placeholderSrc:
          'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
      },
      links: { repo: 'https://lurikopsicologa.com/' },
      technologies: ['#html', '#css', '#wordpress', '#scss'],
    },
  ];
var mv = [
    {
      id: 'fa',
      name: 'Font Awesome',
      projectUrl: 'https://fontawesome.com/',
      license: 'CC BY 4.0 License',
      licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    },
    {
      id: 'io',
      name: 'Ionicons 4',
      projectUrl: 'https://ionicons.com/',
      license: 'MIT',
      licenseUrl:
        'https://github.com/ionic-team/ionicons/blob/master/LICENSE',
    },
    {
      id: 'io5',
      name: 'Ionicons 5',
      projectUrl: 'https://ionicons.com/',
      license: 'MIT',
      licenseUrl:
        'https://github.com/ionic-team/ionicons/blob/master/LICENSE',
    },
    {
      id: 'md',
      name: 'Material Design icons',
      projectUrl: 'http://google.github.io/material-design-icons/',
      license: 'Apache License Version 2.0',
      licenseUrl:
        'https://github.com/google/material-design-icons/blob/master/LICENSE',
    },
    {
      id: 'ti',
      name: 'Typicons',
      projectUrl: 'http://s-ings.com/typicons/',
      license: 'CC BY-SA 3.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    },
    {
      id: 'go',
      name: 'Github Octicons icons',
      projectUrl: 'https://octicons.github.com/',
      license: 'MIT',
      licenseUrl:
        'https://github.com/primer/octicons/blob/master/LICENSE',
    },
    {
      id: 'fi',
      name: 'Feather',
      projectUrl: 'https://feathericons.com/',
      license: 'MIT',
      licenseUrl:
        'https://github.com/feathericons/feather/blob/master/LICENSE',
    },
    {
      id: 'gi',
      name: 'Game Icons',
      projectUrl: 'https://game-icons.net/',
      license: 'CC BY 3.0',
      licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
    },
    {
      id: 'wi',
      name: 'Weather Icons',
      projectUrl: 'https://erikflowers.github.io/weather-icons/',
      license: 'SIL OFL 1.1',
      licenseUrl: 'http://scripts.sil.org/OFL',
    },
    {
      id: 'di',
      name: 'Devicons',
      projectUrl: 'https://vorillaz.github.io/devicons/',
      license: 'MIT',
      licenseUrl: 'https://opensource.org/licenses/MIT',
    },
    {
      id: 'ai',
      name: 'Ant Design Icons',
      projectUrl: 'https://github.com/ant-design/ant-design-icons',
      license: 'MIT',
      licenseUrl: 'https://opensource.org/licenses/MIT',
    },
    {
      id: 'bs',
      name: 'Bootstrap Icons',
      projectUrl: 'https://github.com/twbs/icons',
      license: 'MIT',
      licenseUrl: 'https://opensource.org/licenses/MIT',
    },
    {
      id: 'ri',
      name: 'Remix Icon',
      projectUrl: 'https://github.com/Remix-Design/RemixIcon',
      license: 'Apache License Version 2.0',
      licenseUrl: 'http://www.apache.org/licenses/',
    },
    {
      id: 'fc',
      name: 'Flat Color Icons',
      projectUrl: 'https://github.com/icons8/flat-color-icons',
      license: 'MIT',
      licenseUrl: 'https://opensource.org/licenses/MIT',
    },
    {
      id: 'gr',
      name: 'Grommet-Icons',
      projectUrl: 'https://github.com/grommet/grommet-icons',
      license: 'Apache License Version 2.0',
      licenseUrl: 'http://www.apache.org/licenses/',
    },
    {
      id: 'hi',
      name: 'Heroicons',
      projectUrl: 'https://github.com/refactoringui/heroicons',
      license: 'MIT',
      licenseUrl: 'https://opensource.org/licenses/MIT',
    },
    {
      id: 'si',
      name: 'Simple Icons',
      projectUrl: 'https://simpleicons.org/',
      license: 'CC0 1.0 Universal',
      licenseUrl:
        'https://creativecommons.org/publicdomain/zero/1.0/',
    },
    {
      id: 'im',
      name: 'IcoMoon Free',
      projectUrl: 'https://github.com/Keyamoon/IcoMoon-Free',
      license: 'CC BY 4.0 License',
    },
    {
      id: 'bi',
      name: 'BoxIcons',
      projectUrl: 'https://github.com/atisawd/boxicons',
      license: 'CC BY 4.0 License',
    },
    {
      id: 'cg',
      name: 'css.gg',
      projectUrl: 'https://github.com/astrit/css.gg',
      license: 'MIT',
      licenseUrl: 'https://opensource.org/licenses/MIT',
    },
    {
      id: 'vsc',
      name: 'VS Code Icons',
      projectUrl: 'https://github.com/microsoft/vscode-codicons',
      license: 'CC BY 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    },
  ],
  ns = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  ru = ze.createContext && ze.createContext(ns),
  Qt = function () {
    return (
      (Qt =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var o in t)
              Object.prototype.hasOwnProperty.call(t, o) &&
                (e[o] = t[o]);
          }
          return e;
        }),
      Qt.apply(this, arguments)
    );
  },
  vv = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (
      e != null &&
      typeof Object.getOwnPropertySymbols == 'function'
    )
      for (
        var o = 0, r = Object.getOwnPropertySymbols(e);
        o < r.length;
        o++
      )
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  };
function fd(e) {
  return (
    e &&
    e.map(function (t, n) {
      return ze.createElement(
        t.tag,
        Qt({ key: n }, t.attr),
        fd(t.child),
      );
    })
  );
}
function yv(e) {
  return function (t) {
    return ze.createElement(
      dd,
      Qt({ attr: Qt({}, e.attr) }, t),
      fd(e.child),
    );
  };
}
function dd(e) {
  var t = function (n) {
    var r = e.attr,
      o = e.size,
      l = e.title,
      i = vv(e, ['attr', 'size', 'title']),
      u = o || n.size || '1em',
      s;
    return (
      n.className && (s = n.className),
      e.className && (s = (s ? s + ' ' : '') + e.className),
      ze.createElement(
        'svg',
        Qt(
          {
            stroke: 'currentColor',
            fill: 'currentColor',
            strokeWidth: '0',
          },
          n.attr,
          r,
          i,
          {
            className: s,
            style: Qt(
              Qt({ color: e.color || n.color }, n.style),
              e.style,
            ),
            height: u,
            width: u,
            xmlns: 'http://www.w3.org/2000/svg',
          },
        ),
        l && ze.createElement('title', null, l),
        e.children,
      )
    );
  };
  return ru !== void 0
    ? ze.createElement(ru.Consumer, null, function (n) {
        return t(n);
      })
    : t(ns);
}
const gv = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        DefaultContext: ns,
        GenIcon: yv,
        IconBase: dd,
        IconContext: ru,
        IconsManifest: mv,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  wv = Td(gv);
var Sv = wv.GenIcon,
  Ta = function (t) {
    return Sv({
      tag: 'svg',
      attr: { viewBox: '0 0 24 24' },
      child: [
        {
          tag: 'path',
          attr: {
            d: 'M13 3L16.293 6.293 9.293 13.293 10.707 14.707 17.707 7.707 21 11 21 3z',
          },
        },
        {
          tag: 'path',
          attr: {
            d: 'M19,19H5V5h7l-2-2H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2v-5l-2-2V19z',
          },
        },
      ],
    })(t);
  };
const Ev = '_container_1t0dl_1',
  xv = '_modal_1t0dl_14',
  kv = '_closeWrapper_1t0dl_23',
  Cv = '_closeIcon_1t0dl_33',
  Pv = '_closeButton_1t0dl_45',
  _v = '_body_1t0dl_63',
  dr = {
    container: Ev,
    modal: xv,
    closeWrapper: kv,
    closeIcon: Cv,
    closeButton: Pv,
    body: _v,
  };
function ou() {
  return (
    (ou = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ou.apply(null, arguments)
  );
}
function pd(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r)) continue;
      n[r] = e[r];
    }
  return n;
}
function lu(e, t) {
  return (
    (lu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    lu(e, t)
  );
}
function hd(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    lu(e, t);
}
function Ov(e, t) {
  return e.classList
    ? !!t && e.classList.contains(t)
    : (' ' + (e.className.baseVal || e.className) + ' ').indexOf(
        ' ' + t + ' ',
      ) !== -1;
}
function jv(e, t) {
  e.classList
    ? e.classList.add(t)
    : Ov(e, t) ||
      (typeof e.className == 'string'
        ? (e.className = e.className + ' ' + t)
        : e.setAttribute(
            'class',
            ((e.className && e.className.baseVal) || '') + ' ' + t,
          ));
}
function Na(e, t) {
  return e
    .replace(new RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
    .replace(/\s+/g, ' ')
    .replace(/^\s*|\s*$/g, '');
}
function Tv(e, t) {
  e.classList
    ? e.classList.remove(t)
    : typeof e.className == 'string'
    ? (e.className = Na(e.className, t))
    : e.setAttribute(
        'class',
        Na((e.className && e.className.baseVal) || '', t),
      );
}
const La = { disabled: !1 },
  md = ze.createContext(null);
var vd = function (t) {
    return t.scrollTop;
  },
  yr = 'unmounted',
  un = 'exited',
  sn = 'entering',
  _n = 'entered',
  iu = 'exiting',
  jt = (function (e) {
    hd(t, e);
    function t(r, o) {
      var l;
      l = e.call(this, r, o) || this;
      var i = o,
        u = i && !i.isMounting ? r.enter : r.appear,
        s;
      return (
        (l.appearStatus = null),
        r.in
          ? u
            ? ((s = un), (l.appearStatus = sn))
            : (s = _n)
          : r.unmountOnExit || r.mountOnEnter
          ? (s = yr)
          : (s = un),
        (l.state = { status: s }),
        (l.nextCallback = null),
        l
      );
    }
    t.getDerivedStateFromProps = function (o, l) {
      var i = o.in;
      return i && l.status === yr ? { status: un } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (o) {
        var l = null;
        if (o !== this.props) {
          var i = this.state.status;
          this.props.in
            ? i !== sn && i !== _n && (l = sn)
            : (i === sn || i === _n) && (l = iu);
        }
        this.updateStatus(!1, l);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var o = this.props.timeout,
          l,
          i,
          u;
        return (
          (l = i = u = o),
          o != null &&
            typeof o != 'number' &&
            ((l = o.exit),
            (i = o.enter),
            (u = o.appear !== void 0 ? o.appear : i)),
          { exit: l, enter: i, appear: u }
        );
      }),
      (n.updateStatus = function (o, l) {
        if ((o === void 0 && (o = !1), l !== null))
          if ((this.cancelNextCallback(), l === sn)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var i = this.props.nodeRef
                ? this.props.nodeRef.current
                : So.findDOMNode(this);
              i && vd(i);
            }
            this.performEnter(o);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === un &&
            this.setState({ status: yr });
      }),
      (n.performEnter = function (o) {
        var l = this,
          i = this.props.enter,
          u = this.context ? this.context.isMounting : o,
          s = this.props.nodeRef ? [u] : [So.findDOMNode(this), u],
          a = s[0],
          p = s[1],
          f = this.getTimeouts(),
          v = u ? f.appear : f.enter;
        if ((!o && !i) || La.disabled) {
          this.safeSetState({ status: _n }, function () {
            l.props.onEntered(a);
          });
          return;
        }
        this.props.onEnter(a, p),
          this.safeSetState({ status: sn }, function () {
            l.props.onEntering(a, p),
              l.onTransitionEnd(v, function () {
                l.safeSetState({ status: _n }, function () {
                  l.props.onEntered(a, p);
                });
              });
          });
      }),
      (n.performExit = function () {
        var o = this,
          l = this.props.exit,
          i = this.getTimeouts(),
          u = this.props.nodeRef ? void 0 : So.findDOMNode(this);
        if (!l || La.disabled) {
          this.safeSetState({ status: un }, function () {
            o.props.onExited(u);
          });
          return;
        }
        this.props.onExit(u),
          this.safeSetState({ status: iu }, function () {
            o.props.onExiting(u),
              o.onTransitionEnd(i.exit, function () {
                o.safeSetState({ status: un }, function () {
                  o.props.onExited(u);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (o, l) {
        (l = this.setNextCallback(l)), this.setState(o, l);
      }),
      (n.setNextCallback = function (o) {
        var l = this,
          i = !0;
        return (
          (this.nextCallback = function (u) {
            i && ((i = !1), (l.nextCallback = null), o(u));
          }),
          (this.nextCallback.cancel = function () {
            i = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (o, l) {
        this.setNextCallback(l);
        var i = this.props.nodeRef
            ? this.props.nodeRef.current
            : So.findDOMNode(this),
          u = o == null && !this.props.addEndListener;
        if (!i || u) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var s = this.props.nodeRef
              ? [this.nextCallback]
              : [i, this.nextCallback],
            a = s[0],
            p = s[1];
          this.props.addEndListener(a, p);
        }
        o != null && setTimeout(this.nextCallback, o);
      }),
      (n.render = function () {
        var o = this.state.status;
        if (o === yr) return null;
        var l = this.props,
          i = l.children;
        l.in,
          l.mountOnEnter,
          l.unmountOnExit,
          l.appear,
          l.enter,
          l.exit,
          l.timeout,
          l.addEndListener,
          l.onEnter,
          l.onEntering,
          l.onEntered,
          l.onExit,
          l.onExiting,
          l.onExited,
          l.nodeRef;
        var u = pd(l, [
          'children',
          'in',
          'mountOnEnter',
          'unmountOnExit',
          'appear',
          'enter',
          'exit',
          'timeout',
          'addEndListener',
          'onEnter',
          'onEntering',
          'onEntered',
          'onExit',
          'onExiting',
          'onExited',
          'nodeRef',
        ]);
        return ze.createElement(
          md.Provider,
          { value: null },
          typeof i == 'function'
            ? i(o, u)
            : ze.cloneElement(ze.Children.only(i), u),
        );
      }),
      t
    );
  })(ze.Component);
jt.contextType = md;
jt.propTypes = {};
function Cn() {}
jt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Cn,
  onEntering: Cn,
  onEntered: Cn,
  onExit: Cn,
  onExiting: Cn,
  onExited: Cn,
};
jt.UNMOUNTED = yr;
jt.EXITED = un;
jt.ENTERING = sn;
jt.ENTERED = _n;
jt.EXITING = iu;
var Nv = function (t, n) {
    return (
      t &&
      n &&
      n.split(' ').forEach(function (r) {
        return jv(t, r);
      })
    );
  },
  ui = function (t, n) {
    return (
      t &&
      n &&
      n.split(' ').forEach(function (r) {
        return Tv(t, r);
      })
    );
  },
  rs = (function (e) {
    hd(t, e);
    function t() {
      for (
        var r, o = arguments.length, l = new Array(o), i = 0;
        i < o;
        i++
      )
        l[i] = arguments[i];
      return (
        (r = e.call.apply(e, [this].concat(l)) || this),
        (r.appliedClasses = { appear: {}, enter: {}, exit: {} }),
        (r.onEnter = function (u, s) {
          var a = r.resolveArguments(u, s),
            p = a[0],
            f = a[1];
          r.removeClasses(p, 'exit'),
            r.addClass(p, f ? 'appear' : 'enter', 'base'),
            r.props.onEnter && r.props.onEnter(u, s);
        }),
        (r.onEntering = function (u, s) {
          var a = r.resolveArguments(u, s),
            p = a[0],
            f = a[1],
            v = f ? 'appear' : 'enter';
          r.addClass(p, v, 'active'),
            r.props.onEntering && r.props.onEntering(u, s);
        }),
        (r.onEntered = function (u, s) {
          var a = r.resolveArguments(u, s),
            p = a[0],
            f = a[1],
            v = f ? 'appear' : 'enter';
          r.removeClasses(p, v),
            r.addClass(p, v, 'done'),
            r.props.onEntered && r.props.onEntered(u, s);
        }),
        (r.onExit = function (u) {
          var s = r.resolveArguments(u),
            a = s[0];
          r.removeClasses(a, 'appear'),
            r.removeClasses(a, 'enter'),
            r.addClass(a, 'exit', 'base'),
            r.props.onExit && r.props.onExit(u);
        }),
        (r.onExiting = function (u) {
          var s = r.resolveArguments(u),
            a = s[0];
          r.addClass(a, 'exit', 'active'),
            r.props.onExiting && r.props.onExiting(u);
        }),
        (r.onExited = function (u) {
          var s = r.resolveArguments(u),
            a = s[0];
          r.removeClasses(a, 'exit'),
            r.addClass(a, 'exit', 'done'),
            r.props.onExited && r.props.onExited(u);
        }),
        (r.resolveArguments = function (u, s) {
          return r.props.nodeRef
            ? [r.props.nodeRef.current, u]
            : [u, s];
        }),
        (r.getClassNames = function (u) {
          var s = r.props.classNames,
            a = typeof s == 'string',
            p = a && s ? s + '-' : '',
            f = a ? '' + p + u : s[u],
            v = a ? f + '-active' : s[u + 'Active'],
            x = a ? f + '-done' : s[u + 'Done'];
          return {
            baseClassName: f,
            activeClassName: v,
            doneClassName: x,
          };
        }),
        r
      );
    }
    var n = t.prototype;
    return (
      (n.addClass = function (o, l, i) {
        var u = this.getClassNames(l)[i + 'ClassName'],
          s = this.getClassNames('enter'),
          a = s.doneClassName;
        l === 'appear' && i === 'done' && a && (u += ' ' + a),
          i === 'active' && o && vd(o),
          u && ((this.appliedClasses[l][i] = u), Nv(o, u));
      }),
      (n.removeClasses = function (o, l) {
        var i = this.appliedClasses[l],
          u = i.base,
          s = i.active,
          a = i.done;
        (this.appliedClasses[l] = {}),
          u && ui(o, u),
          s && ui(o, s),
          a && ui(o, a);
      }),
      (n.render = function () {
        var o = this.props;
        o.classNames;
        var l = pd(o, ['classNames']);
        return ze.createElement(
          jt,
          ou({}, l, {
            onEnter: this.onEnter,
            onEntered: this.onEntered,
            onEntering: this.onEntering,
            onExit: this.onExit,
            onExiting: this.onExiting,
            onExited: this.onExited,
          }),
        );
      }),
      t
    );
  })(ze.Component);
rs.defaultProps = { classNames: '' };
rs.propTypes = {};
const Lv = (e) =>
    T.createElement(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        width: 20,
        height: 20,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        ...e,
      },
      T.createElement('line', { x1: 18, y1: 6, x2: 6, y2: 18 }),
      T.createElement('line', { x1: 6, y1: 6, x2: 18, y2: 18 }),
    ),
  Iv = '_backdrop_y015p_1',
  Rv = { backdrop: Iv },
  zv = ({ onClick: e }) =>
    B.jsx('div', { className: Rv.backdrop, onClick: e }),
  Mv = ({ children: e, show: t, onClose: n }) => {
    const r = ud(),
      o = (l) => {
        l.stopPropagation(), n(), r(-1);
      };
    return (
      T.useEffect(
        () => (
          document.body.classList.add('overflow-hidden'),
          () => {
            document.body.classList.remove('overflow-hidden');
          }
        ),
        [],
      ),
      B.jsxs('div', {
        className: dr.container,
        children: [
          t && B.jsx(zv, { onClick: o }),
          B.jsx(rs, {
            in: t,
            timeout: 300,
            classNames: 'modal',
            mountOnEnter: !0,
            unmountOnExit: !0,
            children: B.jsxs('div', {
              className: dr.modal,
              children: [
                B.jsx('div', {
                  className: dr.closeWrapper,
                  onClick: o,
                  children: B.jsx('button', {
                    className: dr.closeButton,
                    children: B.jsx(Lv, { className: dr.closeIcon }),
                  }),
                }),
                e,
              ],
            }),
          }),
        ],
      })
    );
  };
var yd = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var l = '', i = 0; i < arguments.length; i++) {
        var u = arguments[i];
        u && (l = o(l, r(u)));
      }
      return l;
    }
    function r(l) {
      if (typeof l == 'string' || typeof l == 'number') return l;
      if (typeof l != 'object') return '';
      if (Array.isArray(l)) return n.apply(null, l);
      if (
        l.toString !== Object.prototype.toString &&
        !l.toString.toString().includes('[native code]')
      )
        return l.toString();
      var i = '';
      for (var u in l) t.call(l, u) && l[u] && (i = o(i, u));
      return i;
    }
    function o(l, i) {
      return i ? (l ? l + ' ' + i : l + i) : l;
    }
    e.exports
      ? ((n.default = n), (e.exports = n))
      : (window.classNames = n);
  })();
})(yd);
var Dv = yd.exports;
const Ia = uu(Dv),
  Uv = '_btn_1oyhu_1',
  Fv = '_primary_1oyhu_19',
  xo = { btn: Uv, primary: Fv },
  Ra = ({
    type: e = 'button',
    onClick: t,
    disabled: n,
    className: r,
    children: o,
    href: l,
    target: i,
    style: u,
    addClass: s,
    label: a,
  }) =>
    l
      ? B.jsx('a', {
          style: u,
          className: Ia(xo.btn, xo[r], s),
          href: l,
          target: i,
          children: o,
        })
      : B.jsx('button', {
          style: u,
          className: Ia(xo.btn, xo[r], s),
          type: e,
          onClick: t,
          disabled: n,
          'aria-label': a,
          children: o,
        }),
  Bv = (e = !1) => {
    const [t, n] = T.useReducer((r) => !r, e);
    return { isVisible: t, toggleModal: n };
  };
var gd = { exports: {} };
(() => {
  var e = {
      181: (o, l, i) => {
        var u = /^\s+|\s+$/g,
          s = /^[-+]0x[0-9a-f]+$/i,
          a = /^0b[01]+$/i,
          p = /^0o[0-7]+$/i,
          f = parseInt,
          v =
            typeof i.g == 'object' &&
            i.g &&
            i.g.Object === Object &&
            i.g,
          x =
            typeof self == 'object' &&
            self &&
            self.Object === Object &&
            self,
          k = v || x || Function('return this')(),
          C = Object.prototype.toString,
          L = Math.max,
          h = Math.min,
          c = function () {
            return k.Date.now();
          };
        function d(P) {
          var N = typeof P;
          return !!P && (N == 'object' || N == 'function');
        }
        function S(P) {
          if (typeof P == 'number') return P;
          if (
            (function (O) {
              return (
                typeof O == 'symbol' ||
                ((function ($) {
                  return !!$ && typeof $ == 'object';
                })(O) &&
                  C.call(O) == '[object Symbol]')
              );
            })(P)
          )
            return NaN;
          if (d(P)) {
            var N = typeof P.valueOf == 'function' ? P.valueOf() : P;
            P = d(N) ? N + '' : N;
          }
          if (typeof P != 'string') return P === 0 ? P : +P;
          P = P.replace(u, '');
          var R = a.test(P);
          return R || p.test(P)
            ? f(P.slice(2), R ? 2 : 8)
            : s.test(P)
            ? NaN
            : +P;
        }
        o.exports = function (P, N, R) {
          var O,
            $,
            D,
            H,
            Z,
            de,
            he = 0,
            be = !1,
            Se = !1,
            Oe = !0;
          if (typeof P != 'function')
            throw new TypeError('Expected a function');
          function I(ne) {
            var Y = O,
              Ee = $;
            return (O = $ = void 0), (he = ne), (H = P.apply(Ee, Y));
          }
          function U(ne) {
            var Y = ne - de;
            return (
              de === void 0 || Y >= N || Y < 0 || (Se && ne - he >= D)
            );
          }
          function M() {
            var ne = c();
            if (U(ne)) return b(ne);
            Z = setTimeout(
              M,
              (function (Y) {
                var Ee = N - (Y - de);
                return Se ? h(Ee, D - (Y - he)) : Ee;
              })(ne),
            );
          }
          function b(ne) {
            return (
              (Z = void 0), Oe && O ? I(ne) : ((O = $ = void 0), H)
            );
          }
          function K() {
            var ne = c(),
              Y = U(ne);
            if (((O = arguments), ($ = this), (de = ne), Y)) {
              if (Z === void 0)
                return (function (Ee) {
                  return (
                    (he = Ee), (Z = setTimeout(M, N)), be ? I(Ee) : H
                  );
                })(de);
              if (Se) return (Z = setTimeout(M, N)), I(de);
            }
            return Z === void 0 && (Z = setTimeout(M, N)), H;
          }
          return (
            (N = S(N) || 0),
            d(R) &&
              ((be = !!R.leading),
              (D = (Se = 'maxWait' in R)
                ? L(S(R.maxWait) || 0, N)
                : D),
              (Oe = 'trailing' in R ? !!R.trailing : Oe)),
            (K.cancel = function () {
              Z !== void 0 && clearTimeout(Z),
                (he = 0),
                (O = de = $ = Z = void 0);
            }),
            (K.flush = function () {
              return Z === void 0 ? H : b(c());
            }),
            K
          );
        };
      },
      858: (o, l, i) => {
        var u = 'Expected a function',
          s = NaN,
          a = '[object Symbol]',
          p = /^\s+|\s+$/g,
          f = /^[-+]0x[0-9a-f]+$/i,
          v = /^0b[01]+$/i,
          x = /^0o[0-7]+$/i,
          k = parseInt,
          C =
            typeof i.g == 'object' &&
            i.g &&
            i.g.Object === Object &&
            i.g,
          L =
            typeof self == 'object' &&
            self &&
            self.Object === Object &&
            self,
          h = C || L || Function('return this')(),
          c = Object.prototype.toString,
          d = Math.max,
          S = Math.min,
          P = function () {
            return h.Date.now();
          };
        function N(O) {
          var $ = typeof O;
          return !!O && ($ == 'object' || $ == 'function');
        }
        function R(O) {
          if (typeof O == 'number') return O;
          if (
            (function (H) {
              return (
                typeof H == 'symbol' ||
                ((function (Z) {
                  return !!Z && typeof Z == 'object';
                })(H) &&
                  c.call(H) == a)
              );
            })(O)
          )
            return s;
          if (N(O)) {
            var $ = typeof O.valueOf == 'function' ? O.valueOf() : O;
            O = N($) ? $ + '' : $;
          }
          if (typeof O != 'string') return O === 0 ? O : +O;
          O = O.replace(p, '');
          var D = v.test(O);
          return D || x.test(O)
            ? k(O.slice(2), D ? 2 : 8)
            : f.test(O)
            ? s
            : +O;
        }
        o.exports = function (O, $, D) {
          var H = !0,
            Z = !0;
          if (typeof O != 'function') throw new TypeError(u);
          return (
            N(D) &&
              ((H = 'leading' in D ? !!D.leading : H),
              (Z = 'trailing' in D ? !!D.trailing : Z)),
            (function (de, he, be) {
              var Se,
                Oe,
                I,
                U,
                M,
                b,
                K = 0,
                ne = !1,
                Y = !1,
                Ee = !0;
              if (typeof de != 'function') throw new TypeError(u);
              function He(Ie) {
                var ot = Se,
                  Fe = Oe;
                return (
                  (Se = Oe = void 0), (K = Ie), (U = de.apply(Fe, ot))
                );
              }
              function yt(Ie) {
                var ot = Ie - b;
                return (
                  b === void 0 ||
                  ot >= he ||
                  ot < 0 ||
                  (Y && Ie - K >= I)
                );
              }
              function en() {
                var Ie = P();
                if (yt(Ie)) return tn(Ie);
                M = setTimeout(
                  en,
                  (function (ot) {
                    var Fe = he - (ot - b);
                    return Y ? S(Fe, I - (ot - K)) : Fe;
                  })(Ie),
                );
              }
              function tn(Ie) {
                return (
                  (M = void 0),
                  Ee && Se ? He(Ie) : ((Se = Oe = void 0), U)
                );
              }
              function nn() {
                var Ie = P(),
                  ot = yt(Ie);
                if (((Se = arguments), (Oe = this), (b = Ie), ot)) {
                  if (M === void 0)
                    return (function (Fe) {
                      return (
                        (K = Fe),
                        (M = setTimeout(en, he)),
                        ne ? He(Fe) : U
                      );
                    })(b);
                  if (Y) return (M = setTimeout(en, he)), He(b);
                }
                return M === void 0 && (M = setTimeout(en, he)), U;
              }
              return (
                (he = R(he) || 0),
                N(be) &&
                  ((ne = !!be.leading),
                  (I = (Y = 'maxWait' in be)
                    ? d(R(be.maxWait) || 0, he)
                    : I),
                  (Ee = 'trailing' in be ? !!be.trailing : Ee)),
                (nn.cancel = function () {
                  M !== void 0 && clearTimeout(M),
                    (K = 0),
                    (Se = b = Oe = M = void 0);
                }),
                (nn.flush = function () {
                  return M === void 0 ? U : tn(P());
                }),
                nn
              );
            })(O, $, { leading: H, maxWait: $, trailing: Z })
          );
        };
      },
      694: (o, l, i) => {
        var u = i(925);
        function s() {}
        function a() {}
        (a.resetWarningCache = s),
          (o.exports = function () {
            function p(x, k, C, L, h, c) {
              if (c !== u) {
                var d = new Error(
                  'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
                );
                throw ((d.name = 'Invariant Violation'), d);
              }
            }
            function f() {
              return p;
            }
            p.isRequired = p;
            var v = {
              array: p,
              bigint: p,
              bool: p,
              func: p,
              number: p,
              object: p,
              string: p,
              symbol: p,
              any: p,
              arrayOf: f,
              element: p,
              elementType: p,
              instanceOf: f,
              node: p,
              objectOf: f,
              oneOf: f,
              oneOfType: f,
              shape: f,
              exact: f,
              checkPropTypes: a,
              resetWarningCache: s,
            };
            return (v.PropTypes = v), v;
          });
      },
      556: (o, l, i) => {
        o.exports = i(694)();
      },
      925: (o) => {
        o.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
      },
    },
    t = {};
  function n(o) {
    var l = t[o];
    if (l !== void 0) return l.exports;
    var i = (t[o] = { exports: {} });
    return e[o](i, i.exports, n), i.exports;
  }
  (n.n = (o) => {
    var l = o && o.__esModule ? () => o.default : () => o;
    return n.d(l, { a: l }), l;
  }),
    (n.d = (o, l) => {
      for (var i in l)
        n.o(l, i) &&
          !n.o(o, i) &&
          Object.defineProperty(o, i, { enumerable: !0, get: l[i] });
    }),
    (n.g = (function () {
      if (typeof globalThis == 'object') return globalThis;
      try {
        return this || new Function('return this')();
      } catch {
        if (typeof window == 'object') return window;
      }
    })()),
    (n.o = (o, l) => Object.prototype.hasOwnProperty.call(o, l)),
    (n.r = (o) => {
      typeof Symbol < 'u' &&
        Symbol.toStringTag &&
        Object.defineProperty(o, Symbol.toStringTag, {
          value: 'Module',
        }),
        Object.defineProperty(o, '__esModule', { value: !0 });
    });
  var r = {};
  (() => {
    n.r(r),
      n.d(r, {
        LazyLoadComponent: () => ls,
        LazyLoadImage: () => Od,
        trackWindowScroll: () => ne,
      });
    const o = T;
    var l = n.n(o),
      i = n(556);
    function u() {
      return (
        typeof window < 'u' &&
        'IntersectionObserver' in window &&
        'isIntersecting' in window.IntersectionObserverEntry.prototype
      );
    }
    function s(w) {
      return (
        (s =
          typeof Symbol == 'function' &&
          typeof Symbol.iterator == 'symbol'
            ? function (m) {
                return typeof m;
              }
            : function (m) {
                return m &&
                  typeof Symbol == 'function' &&
                  m.constructor === Symbol &&
                  m !== Symbol.prototype
                  ? 'symbol'
                  : typeof m;
              }),
        s(w)
      );
    }
    function a(w, m) {
      var g = Object.keys(w);
      if (Object.getOwnPropertySymbols) {
        var _ = Object.getOwnPropertySymbols(w);
        m &&
          (_ = _.filter(function (y) {
            return Object.getOwnPropertyDescriptor(w, y).enumerable;
          })),
          g.push.apply(g, _);
      }
      return g;
    }
    function p(w, m, g) {
      return (
        (m = v(m)) in w
          ? Object.defineProperty(w, m, {
              value: g,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (w[m] = g),
        w
      );
    }
    function f(w, m) {
      for (var g = 0; g < m.length; g++) {
        var _ = m[g];
        (_.enumerable = _.enumerable || !1),
          (_.configurable = !0),
          'value' in _ && (_.writable = !0),
          Object.defineProperty(w, v(_.key), _);
      }
    }
    function v(w) {
      var m = (function (g, _) {
        if (s(g) != 'object' || !g) return g;
        var y = g[Symbol.toPrimitive];
        if (y !== void 0) {
          var E = y.call(g, 'string');
          if (s(E) != 'object') return E;
          throw new TypeError(
            '@@toPrimitive must return a primitive value.',
          );
        }
        return String(g);
      })(w);
      return s(m) == 'symbol' ? m : m + '';
    }
    function x(w, m, g) {
      return (
        (m = C(m)),
        (function (_, y) {
          if (y && (s(y) == 'object' || typeof y == 'function'))
            return y;
          if (y !== void 0)
            throw new TypeError(
              'Derived constructors may only return object or undefined',
            );
          return (function (E) {
            if (E === void 0)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return E;
          })(_);
        })(
          w,
          k()
            ? Reflect.construct(m, g || [], C(w).constructor)
            : m.apply(w, g),
        )
      );
    }
    function k() {
      try {
        var w = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        );
      } catch {}
      return (k = function () {
        return !!w;
      })();
    }
    function C(w) {
      return (
        (C = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (m) {
              return m.__proto__ || Object.getPrototypeOf(m);
            }),
        C(w)
      );
    }
    function L(w, m) {
      return (
        (L = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (g, _) {
              return (g.__proto__ = _), g;
            }),
        L(w, m)
      );
    }
    var h = function (w) {
        w.forEach(function (m) {
          m.isIntersecting && m.target.onVisible();
        });
      },
      c = {},
      d = (function (w) {
        function m(y) {
          var E;
          if (
            ((function (F, V) {
              if (!(F instanceof V))
                throw new TypeError(
                  'Cannot call a class as a function',
                );
            })(this, m),
            ((E = x(this, m, [y])).supportsObserver =
              !y.scrollPosition && y.useIntersectionObserver && u()),
            E.supportsObserver)
          ) {
            var A = y.threshold;
            E.observer = (function (F) {
              return (
                (c[F] =
                  c[F] ||
                  new IntersectionObserver(h, {
                    rootMargin: F + 'px',
                  })),
                c[F]
              );
            })(A);
          }
          return E;
        }
        return (
          (function (y, E) {
            if (typeof E != 'function' && E !== null)
              throw new TypeError(
                'Super expression must either be null or a function',
              );
            (y.prototype = Object.create(E && E.prototype, {
              constructor: {
                value: y,
                writable: !0,
                configurable: !0,
              },
            })),
              Object.defineProperty(y, 'prototype', { writable: !1 }),
              E && L(y, E);
          })(m, w),
          (g = m),
          (_ = [
            {
              key: 'componentDidMount',
              value: function () {
                this.placeholder &&
                  this.observer &&
                  ((this.placeholder.onVisible =
                    this.props.onVisible),
                  this.observer.observe(this.placeholder)),
                  this.supportsObserver || this.updateVisibility();
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                this.observer &&
                  this.placeholder &&
                  this.observer.unobserve(this.placeholder);
              },
            },
            {
              key: 'componentDidUpdate',
              value: function () {
                this.supportsObserver || this.updateVisibility();
              },
            },
            {
              key: 'getPlaceholderBoundingBox',
              value: function () {
                var y =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : this.props.scrollPosition,
                  E = this.placeholder.getBoundingClientRect(),
                  A = this.placeholder.style,
                  F =
                    parseInt(A.getPropertyValue('margin-left'), 10) ||
                    0,
                  V =
                    parseInt(A.getPropertyValue('margin-top'), 10) ||
                    0;
                return {
                  bottom: y.y + E.bottom + V,
                  left: y.x + E.left + F,
                  right: y.x + E.right + F,
                  top: y.y + E.top + V,
                };
              },
            },
            {
              key: 'isPlaceholderInViewport',
              value: function () {
                if (typeof window > 'u' || !this.placeholder)
                  return !1;
                var y = this.props,
                  E = y.scrollPosition,
                  A = y.threshold,
                  F = this.getPlaceholderBoundingBox(E),
                  V = E.y + window.innerHeight,
                  X = E.x,
                  oe = E.x + window.innerWidth,
                  le = E.y;
                return (
                  le - A <= F.bottom &&
                  V + A >= F.top &&
                  X - A <= F.right &&
                  oe + A >= F.left
                );
              },
            },
            {
              key: 'updateVisibility',
              value: function () {
                this.isPlaceholderInViewport() &&
                  this.props.onVisible();
              },
            },
            {
              key: 'render',
              value: function () {
                var y = this,
                  E = this.props,
                  A = E.className,
                  F = E.height,
                  V = E.placeholder,
                  X = E.style,
                  oe = E.width;
                if (V && typeof V.type != 'function')
                  return l().cloneElement(V, {
                    ref: function (J) {
                      return (y.placeholder = J);
                    },
                  });
                var le = (function (J) {
                  for (var xe = 1; xe < arguments.length; xe++) {
                    var ye =
                      arguments[xe] != null ? arguments[xe] : {};
                    xe % 2
                      ? a(Object(ye), !0).forEach(function (ke) {
                          p(J, ke, ye[ke]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          J,
                          Object.getOwnPropertyDescriptors(ye),
                        )
                      : a(Object(ye)).forEach(function (ke) {
                          Object.defineProperty(
                            J,
                            ke,
                            Object.getOwnPropertyDescriptor(ye, ke),
                          );
                        });
                  }
                  return J;
                })({ display: 'inline-block' }, X);
                return (
                  oe !== void 0 && (le.width = oe),
                  F !== void 0 && (le.height = F),
                  l().createElement(
                    'span',
                    {
                      className: A,
                      ref: function (J) {
                        return (y.placeholder = J);
                      },
                      style: le,
                    },
                    V,
                  )
                );
              },
            },
          ]),
          _ && f(g.prototype, _),
          Object.defineProperty(g, 'prototype', { writable: !1 }),
          g
        );
        var g, _;
      })(l().Component);
    (d.propTypes = {
      onVisible: i.PropTypes.func.isRequired,
      className: i.PropTypes.string,
      height: i.PropTypes.oneOfType([
        i.PropTypes.number,
        i.PropTypes.string,
      ]),
      placeholder: i.PropTypes.element,
      threshold: i.PropTypes.number,
      useIntersectionObserver: i.PropTypes.bool,
      scrollPosition: i.PropTypes.shape({
        x: i.PropTypes.number.isRequired,
        y: i.PropTypes.number.isRequired,
      }),
      width: i.PropTypes.oneOfType([
        i.PropTypes.number,
        i.PropTypes.string,
      ]),
    }),
      (d.defaultProps = {
        className: '',
        placeholder: null,
        threshold: 100,
        useIntersectionObserver: !0,
      });
    const S = d;
    var P = n(181),
      N = n.n(P),
      R = n(858),
      O = n.n(R),
      $ = function (w) {
        var m = getComputedStyle(w, null);
        return (
          m.getPropertyValue('overflow') +
          m.getPropertyValue('overflow-y') +
          m.getPropertyValue('overflow-x')
        );
      };
    const D = function (w) {
      if (!(w instanceof HTMLElement)) return window;
      for (var m = w; m && m instanceof HTMLElement; ) {
        if (/(scroll|auto)/.test($(m))) return m;
        m = m.parentNode;
      }
      return window;
    };
    function H(w) {
      return (
        (H =
          typeof Symbol == 'function' &&
          typeof Symbol.iterator == 'symbol'
            ? function (m) {
                return typeof m;
              }
            : function (m) {
                return m &&
                  typeof Symbol == 'function' &&
                  m.constructor === Symbol &&
                  m !== Symbol.prototype
                  ? 'symbol'
                  : typeof m;
              }),
        H(w)
      );
    }
    var Z = ['delayMethod', 'delayTime'];
    function de() {
      return (
        (de = Object.assign
          ? Object.assign.bind()
          : function (w) {
              for (var m = 1; m < arguments.length; m++) {
                var g = arguments[m];
                for (var _ in g)
                  ({}).hasOwnProperty.call(g, _) && (w[_] = g[_]);
              }
              return w;
            }),
        de.apply(null, arguments)
      );
    }
    function he(w, m) {
      for (var g = 0; g < m.length; g++) {
        var _ = m[g];
        (_.enumerable = _.enumerable || !1),
          (_.configurable = !0),
          'value' in _ && (_.writable = !0),
          Object.defineProperty(w, be(_.key), _);
      }
    }
    function be(w) {
      var m = (function (g, _) {
        if (H(g) != 'object' || !g) return g;
        var y = g[Symbol.toPrimitive];
        if (y !== void 0) {
          var E = y.call(g, 'string');
          if (H(E) != 'object') return E;
          throw new TypeError(
            '@@toPrimitive must return a primitive value.',
          );
        }
        return String(g);
      })(w);
      return H(m) == 'symbol' ? m : m + '';
    }
    function Se(w, m, g) {
      return (
        (m = U(m)),
        Oe(
          w,
          I()
            ? Reflect.construct(m, g || [], U(w).constructor)
            : m.apply(w, g),
        )
      );
    }
    function Oe(w, m) {
      if (m && (H(m) == 'object' || typeof m == 'function')) return m;
      if (m !== void 0)
        throw new TypeError(
          'Derived constructors may only return object or undefined',
        );
      return (function (g) {
        if (g === void 0)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return g;
      })(w);
    }
    function I() {
      try {
        var w = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        );
      } catch {}
      return (I = function () {
        return !!w;
      })();
    }
    function U(w) {
      return (
        (U = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (m) {
              return m.__proto__ || Object.getPrototypeOf(m);
            }),
        U(w)
      );
    }
    function M(w, m) {
      return (
        (M = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (g, _) {
              return (g.__proto__ = _), g;
            }),
        M(w, m)
      );
    }
    var b = function () {
        return typeof window > 'u'
          ? 0
          : window.scrollX || window.pageXOffset;
      },
      K = function () {
        return typeof window > 'u'
          ? 0
          : window.scrollY || window.pageYOffset;
      };
    const ne = function (w) {
      var m = (function (g) {
        function _(A) {
          var F;
          if (
            ((function (X, oe) {
              if (!(X instanceof oe))
                throw new TypeError(
                  'Cannot call a class as a function',
                );
            })(this, _),
            ((F = Se(this, _, [A])).useIntersectionObserver =
              A.useIntersectionObserver && u()),
            F.useIntersectionObserver)
          )
            return Oe(F);
          var V = F.onChangeScroll.bind(F);
          return (
            A.delayMethod === 'debounce'
              ? (F.delayedScroll = N()(V, A.delayTime))
              : A.delayMethod === 'throttle' &&
                (F.delayedScroll = O()(V, A.delayTime)),
            (F.state = { scrollPosition: { x: b(), y: K() } }),
            (F.baseComponentRef = l().createRef()),
            F
          );
        }
        return (
          (function (A, F) {
            if (typeof F != 'function' && F !== null)
              throw new TypeError(
                'Super expression must either be null or a function',
              );
            (A.prototype = Object.create(F && F.prototype, {
              constructor: {
                value: A,
                writable: !0,
                configurable: !0,
              },
            })),
              Object.defineProperty(A, 'prototype', { writable: !1 }),
              F && M(A, F);
          })(_, g),
          (y = _),
          (E = [
            {
              key: 'componentDidMount',
              value: function () {
                this.addListeners();
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                this.removeListeners();
              },
            },
            {
              key: 'componentDidUpdate',
              value: function () {
                typeof window > 'u' ||
                  this.useIntersectionObserver ||
                  (D(this.baseComponentRef.current) !==
                    this.scrollElement &&
                    (this.removeListeners(), this.addListeners()));
              },
            },
            {
              key: 'addListeners',
              value: function () {
                typeof window > 'u' ||
                  this.useIntersectionObserver ||
                  ((this.scrollElement = D(
                    this.baseComponentRef.current,
                  )),
                  this.scrollElement.addEventListener(
                    'scroll',
                    this.delayedScroll,
                    { passive: !0 },
                  ),
                  window.addEventListener(
                    'resize',
                    this.delayedScroll,
                    { passive: !0 },
                  ),
                  this.scrollElement !== window &&
                    window.addEventListener(
                      'scroll',
                      this.delayedScroll,
                      { passive: !0 },
                    ));
              },
            },
            {
              key: 'removeListeners',
              value: function () {
                typeof window > 'u' ||
                  this.useIntersectionObserver ||
                  (this.scrollElement.removeEventListener(
                    'scroll',
                    this.delayedScroll,
                  ),
                  window.removeEventListener(
                    'resize',
                    this.delayedScroll,
                  ),
                  this.scrollElement !== window &&
                    window.removeEventListener(
                      'scroll',
                      this.delayedScroll,
                    ));
              },
            },
            {
              key: 'onChangeScroll',
              value: function () {
                this.useIntersectionObserver ||
                  this.setState({
                    scrollPosition: { x: b(), y: K() },
                  });
              },
            },
            {
              key: 'render',
              value: function () {
                var A = this.props,
                  F =
                    (A.delayMethod,
                    A.delayTime,
                    (function (X, oe) {
                      if (X == null) return {};
                      var le,
                        J,
                        xe = (function (ke, Rl) {
                          if (ke == null) return {};
                          var cs = {};
                          for (var to in ke)
                            if ({}.hasOwnProperty.call(ke, to)) {
                              if (Rl.indexOf(to) >= 0) continue;
                              cs[to] = ke[to];
                            }
                          return cs;
                        })(X, oe);
                      if (Object.getOwnPropertySymbols) {
                        var ye = Object.getOwnPropertySymbols(X);
                        for (J = 0; J < ye.length; J++)
                          (le = ye[J]),
                            oe.indexOf(le) >= 0 ||
                              ({}.propertyIsEnumerable.call(X, le) &&
                                (xe[le] = X[le]));
                      }
                      return xe;
                    })(A, Z)),
                  V = this.useIntersectionObserver
                    ? null
                    : this.state.scrollPosition;
                return l().createElement(
                  w,
                  de(
                    {
                      forwardRef: this.baseComponentRef,
                      scrollPosition: V,
                    },
                    F,
                  ),
                );
              },
            },
          ]),
          E && he(y.prototype, E),
          Object.defineProperty(y, 'prototype', { writable: !1 }),
          y
        );
        var y, E;
      })(l().Component);
      return (
        (m.propTypes = {
          delayMethod: i.PropTypes.oneOf(['debounce', 'throttle']),
          delayTime: i.PropTypes.number,
          useIntersectionObserver: i.PropTypes.bool,
        }),
        (m.defaultProps = {
          delayMethod: 'throttle',
          delayTime: 300,
          useIntersectionObserver: !0,
        }),
        m
      );
    };
    function Y(w) {
      return (
        (Y =
          typeof Symbol == 'function' &&
          typeof Symbol.iterator == 'symbol'
            ? function (m) {
                return typeof m;
              }
            : function (m) {
                return m &&
                  typeof Symbol == 'function' &&
                  m.constructor === Symbol &&
                  m !== Symbol.prototype
                  ? 'symbol'
                  : typeof m;
              }),
        Y(w)
      );
    }
    function Ee(w, m) {
      for (var g = 0; g < m.length; g++) {
        var _ = m[g];
        (_.enumerable = _.enumerable || !1),
          (_.configurable = !0),
          'value' in _ && (_.writable = !0),
          Object.defineProperty(w, He(_.key), _);
      }
    }
    function He(w) {
      var m = (function (g, _) {
        if (Y(g) != 'object' || !g) return g;
        var y = g[Symbol.toPrimitive];
        if (y !== void 0) {
          var E = y.call(g, 'string');
          if (Y(E) != 'object') return E;
          throw new TypeError(
            '@@toPrimitive must return a primitive value.',
          );
        }
        return String(g);
      })(w);
      return Y(m) == 'symbol' ? m : m + '';
    }
    function yt(w, m, g) {
      return (
        (m = tn(m)),
        (function (_, y) {
          if (y && (Y(y) == 'object' || typeof y == 'function'))
            return y;
          if (y !== void 0)
            throw new TypeError(
              'Derived constructors may only return object or undefined',
            );
          return (function (E) {
            if (E === void 0)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return E;
          })(_);
        })(
          w,
          en()
            ? Reflect.construct(m, g || [], tn(w).constructor)
            : m.apply(w, g),
        )
      );
    }
    function en() {
      try {
        var w = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        );
      } catch {}
      return (en = function () {
        return !!w;
      })();
    }
    function tn(w) {
      return (
        (tn = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (m) {
              return m.__proto__ || Object.getPrototypeOf(m);
            }),
        tn(w)
      );
    }
    function nn(w, m) {
      return (
        (nn = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (g, _) {
              return (g.__proto__ = _), g;
            }),
        nn(w, m)
      );
    }
    var Ie = (function (w) {
      function m(y) {
        return (
          (function (E, A) {
            if (!(E instanceof A))
              throw new TypeError(
                'Cannot call a class as a function',
              );
          })(this, m),
          yt(this, m, [y])
        );
      }
      return (
        (function (y, E) {
          if (typeof E != 'function' && E !== null)
            throw new TypeError(
              'Super expression must either be null or a function',
            );
          (y.prototype = Object.create(E && E.prototype, {
            constructor: { value: y, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(y, 'prototype', { writable: !1 }),
            E && nn(y, E);
        })(m, w),
        (g = m),
        (_ = [
          {
            key: 'render',
            value: function () {
              return l().createElement(S, this.props);
            },
          },
        ]) && Ee(g.prototype, _),
        Object.defineProperty(g, 'prototype', { writable: !1 }),
        g
      );
      var g, _;
    })(l().Component);
    const ot = ne(Ie);
    function Fe(w) {
      return (
        (Fe =
          typeof Symbol == 'function' &&
          typeof Symbol.iterator == 'symbol'
            ? function (m) {
                return typeof m;
              }
            : function (m) {
                return m &&
                  typeof Symbol == 'function' &&
                  m.constructor === Symbol &&
                  m !== Symbol.prototype
                  ? 'symbol'
                  : typeof m;
              }),
        Fe(w)
      );
    }
    function Sd(w, m) {
      for (var g = 0; g < m.length; g++) {
        var _ = m[g];
        (_.enumerable = _.enumerable || !1),
          (_.configurable = !0),
          'value' in _ && (_.writable = !0),
          Object.defineProperty(w, Ed(_.key), _);
      }
    }
    function Ed(w) {
      var m = (function (g, _) {
        if (Fe(g) != 'object' || !g) return g;
        var y = g[Symbol.toPrimitive];
        if (y !== void 0) {
          var E = y.call(g, 'string');
          if (Fe(E) != 'object') return E;
          throw new TypeError(
            '@@toPrimitive must return a primitive value.',
          );
        }
        return String(g);
      })(w);
      return Fe(m) == 'symbol' ? m : m + '';
    }
    function xd(w, m, g) {
      return (
        (m = Jr(m)),
        (function (_, y) {
          if (y && (Fe(y) == 'object' || typeof y == 'function'))
            return y;
          if (y !== void 0)
            throw new TypeError(
              'Derived constructors may only return object or undefined',
            );
          return (function (E) {
            if (E === void 0)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return E;
          })(_);
        })(
          w,
          os()
            ? Reflect.construct(m, g || [], Jr(w).constructor)
            : m.apply(w, g),
        )
      );
    }
    function os() {
      try {
        var w = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        );
      } catch {}
      return (os = function () {
        return !!w;
      })();
    }
    function Jr(w) {
      return (
        (Jr = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (m) {
              return m.__proto__ || Object.getPrototypeOf(m);
            }),
        Jr(w)
      );
    }
    function Tl(w, m) {
      return (
        (Tl = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (g, _) {
              return (g.__proto__ = _), g;
            }),
        Tl(w, m)
      );
    }
    var Nl = (function (w) {
      function m(y) {
        var E;
        (function (oe, le) {
          if (!(oe instanceof le))
            throw new TypeError('Cannot call a class as a function');
        })(this, m),
          (E = xd(this, m, [y]));
        var A = y.afterLoad,
          F = y.beforeLoad,
          V = y.scrollPosition,
          X = y.visibleByDefault;
        return (
          (E.state = { visible: X }),
          X && (F(), A()),
          (E.onVisible = E.onVisible.bind(E)),
          (E.isScrollTracked = !!(
            V &&
            Number.isFinite(V.x) &&
            V.x >= 0 &&
            Number.isFinite(V.y) &&
            V.y >= 0
          )),
          E
        );
      }
      return (
        (function (y, E) {
          if (typeof E != 'function' && E !== null)
            throw new TypeError(
              'Super expression must either be null or a function',
            );
          (y.prototype = Object.create(E && E.prototype, {
            constructor: { value: y, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(y, 'prototype', { writable: !1 }),
            E && Tl(y, E);
        })(m, w),
        (g = m),
        (_ = [
          {
            key: 'componentDidUpdate',
            value: function (y, E) {
              E.visible !== this.state.visible &&
                this.props.afterLoad();
            },
          },
          {
            key: 'onVisible',
            value: function () {
              this.props.beforeLoad(), this.setState({ visible: !0 });
            },
          },
          {
            key: 'render',
            value: function () {
              if (this.state.visible) return this.props.children;
              var y = this.props,
                E = y.className,
                A = y.delayMethod,
                F = y.delayTime,
                V = y.height,
                X = y.placeholder,
                oe = y.scrollPosition,
                le = y.style,
                J = y.threshold,
                xe = y.useIntersectionObserver,
                ye = y.width;
              return this.isScrollTracked || (xe && u())
                ? l().createElement(S, {
                    className: E,
                    height: V,
                    onVisible: this.onVisible,
                    placeholder: X,
                    scrollPosition: oe,
                    style: le,
                    threshold: J,
                    useIntersectionObserver: xe,
                    width: ye,
                  })
                : l().createElement(ot, {
                    className: E,
                    delayMethod: A,
                    delayTime: F,
                    height: V,
                    onVisible: this.onVisible,
                    placeholder: X,
                    style: le,
                    threshold: J,
                    width: ye,
                  });
            },
          },
        ]) && Sd(g.prototype, _),
        Object.defineProperty(g, 'prototype', { writable: !1 }),
        g
      );
      var g, _;
    })(l().Component);
    (Nl.propTypes = {
      afterLoad: i.PropTypes.func,
      beforeLoad: i.PropTypes.func,
      useIntersectionObserver: i.PropTypes.bool,
      visibleByDefault: i.PropTypes.bool,
    }),
      (Nl.defaultProps = {
        afterLoad: function () {
          return {};
        },
        beforeLoad: function () {
          return {};
        },
        useIntersectionObserver: !0,
        visibleByDefault: !1,
      });
    const ls = Nl;
    function En(w) {
      return (
        (En =
          typeof Symbol == 'function' &&
          typeof Symbol.iterator == 'symbol'
            ? function (m) {
                return typeof m;
              }
            : function (m) {
                return m &&
                  typeof Symbol == 'function' &&
                  m.constructor === Symbol &&
                  m !== Symbol.prototype
                  ? 'symbol'
                  : typeof m;
              }),
        En(w)
      );
    }
    var kd = [
      'afterLoad',
      'beforeLoad',
      'delayMethod',
      'delayTime',
      'effect',
      'placeholder',
      'placeholderSrc',
      'scrollPosition',
      'threshold',
      'useIntersectionObserver',
      'visibleByDefault',
      'wrapperClassName',
      'wrapperProps',
    ];
    function is(w, m) {
      var g = Object.keys(w);
      if (Object.getOwnPropertySymbols) {
        var _ = Object.getOwnPropertySymbols(w);
        m &&
          (_ = _.filter(function (y) {
            return Object.getOwnPropertyDescriptor(w, y).enumerable;
          })),
          g.push.apply(g, _);
      }
      return g;
    }
    function us(w) {
      for (var m = 1; m < arguments.length; m++) {
        var g = arguments[m] != null ? arguments[m] : {};
        m % 2
          ? is(Object(g), !0).forEach(function (_) {
              Cd(w, _, g[_]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(
              w,
              Object.getOwnPropertyDescriptors(g),
            )
          : is(Object(g)).forEach(function (_) {
              Object.defineProperty(
                w,
                _,
                Object.getOwnPropertyDescriptor(g, _),
              );
            });
      }
      return w;
    }
    function Cd(w, m, g) {
      return (
        (m = ss(m)) in w
          ? Object.defineProperty(w, m, {
              value: g,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (w[m] = g),
        w
      );
    }
    function qr() {
      return (
        (qr = Object.assign
          ? Object.assign.bind()
          : function (w) {
              for (var m = 1; m < arguments.length; m++) {
                var g = arguments[m];
                for (var _ in g)
                  ({}).hasOwnProperty.call(g, _) && (w[_] = g[_]);
              }
              return w;
            }),
        qr.apply(null, arguments)
      );
    }
    function Pd(w, m) {
      for (var g = 0; g < m.length; g++) {
        var _ = m[g];
        (_.enumerable = _.enumerable || !1),
          (_.configurable = !0),
          'value' in _ && (_.writable = !0),
          Object.defineProperty(w, ss(_.key), _);
      }
    }
    function ss(w) {
      var m = (function (g, _) {
        if (En(g) != 'object' || !g) return g;
        var y = g[Symbol.toPrimitive];
        if (y !== void 0) {
          var E = y.call(g, 'string');
          if (En(E) != 'object') return E;
          throw new TypeError(
            '@@toPrimitive must return a primitive value.',
          );
        }
        return String(g);
      })(w);
      return En(m) == 'symbol' ? m : m + '';
    }
    function _d(w, m, g) {
      return (
        (m = eo(m)),
        (function (_, y) {
          if (y && (En(y) == 'object' || typeof y == 'function'))
            return y;
          if (y !== void 0)
            throw new TypeError(
              'Derived constructors may only return object or undefined',
            );
          return (function (E) {
            if (E === void 0)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return E;
          })(_);
        })(
          w,
          as()
            ? Reflect.construct(m, g || [], eo(w).constructor)
            : m.apply(w, g),
        )
      );
    }
    function as() {
      try {
        var w = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        );
      } catch {}
      return (as = function () {
        return !!w;
      })();
    }
    function eo(w) {
      return (
        (eo = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (m) {
              return m.__proto__ || Object.getPrototypeOf(m);
            }),
        eo(w)
      );
    }
    function Ll(w, m) {
      return (
        (Ll = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (g, _) {
              return (g.__proto__ = _), g;
            }),
        Ll(w, m)
      );
    }
    var Il = (function (w) {
      function m(y) {
        var E;
        return (
          (function (A, F) {
            if (!(A instanceof F))
              throw new TypeError(
                'Cannot call a class as a function',
              );
          })(this, m),
          ((E = _d(this, m, [y])).state = { loaded: !1 }),
          E
        );
      }
      return (
        (function (y, E) {
          if (typeof E != 'function' && E !== null)
            throw new TypeError(
              'Super expression must either be null or a function',
            );
          (y.prototype = Object.create(E && E.prototype, {
            constructor: { value: y, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(y, 'prototype', { writable: !1 }),
            E && Ll(y, E);
        })(m, w),
        (g = m),
        (_ = [
          {
            key: 'onImageLoad',
            value: function () {
              var y = this;
              return this.state.loaded
                ? null
                : function (E) {
                    y.props.onLoad(E),
                      y.props.afterLoad(),
                      y.setState({ loaded: !0 });
                  };
            },
          },
          {
            key: 'getImg',
            value: function () {
              var y = this.props,
                E =
                  (y.afterLoad,
                  y.beforeLoad,
                  y.delayMethod,
                  y.delayTime,
                  y.effect,
                  y.placeholder,
                  y.placeholderSrc,
                  y.scrollPosition,
                  y.threshold,
                  y.useIntersectionObserver,
                  y.visibleByDefault,
                  y.wrapperClassName,
                  y.wrapperProps,
                  (function (A, F) {
                    if (A == null) return {};
                    var V,
                      X,
                      oe = (function (J, xe) {
                        if (J == null) return {};
                        var ye = {};
                        for (var ke in J)
                          if ({}.hasOwnProperty.call(J, ke)) {
                            if (xe.indexOf(ke) >= 0) continue;
                            ye[ke] = J[ke];
                          }
                        return ye;
                      })(A, F);
                    if (Object.getOwnPropertySymbols) {
                      var le = Object.getOwnPropertySymbols(A);
                      for (X = 0; X < le.length; X++)
                        (V = le[X]),
                          F.indexOf(V) >= 0 ||
                            ({}.propertyIsEnumerable.call(A, V) &&
                              (oe[V] = A[V]));
                    }
                    return oe;
                  })(y, kd));
              return l().createElement(
                'img',
                qr({}, E, { onLoad: this.onImageLoad() }),
              );
            },
          },
          {
            key: 'getLazyLoadImage',
            value: function () {
              var y = this.props,
                E = y.beforeLoad,
                A = y.className,
                F = y.delayMethod,
                V = y.delayTime,
                X = y.height,
                oe = y.placeholder,
                le = y.scrollPosition,
                J = y.style,
                xe = y.threshold,
                ye = y.useIntersectionObserver,
                ke = y.visibleByDefault,
                Rl = y.width;
              return l().createElement(
                ls,
                {
                  beforeLoad: E,
                  className: A,
                  delayMethod: F,
                  delayTime: V,
                  height: X,
                  placeholder: oe,
                  scrollPosition: le,
                  style: J,
                  threshold: xe,
                  useIntersectionObserver: ye,
                  visibleByDefault: ke,
                  width: Rl,
                },
                this.getImg(),
              );
            },
          },
          {
            key: 'getWrappedLazyLoadImage',
            value: function (y) {
              var E = this.props,
                A = E.effect,
                F = E.height,
                V = E.placeholderSrc,
                X = E.width,
                oe = E.wrapperClassName,
                le = E.wrapperProps,
                J = this.state.loaded,
                xe = J ? ' lazy-load-image-loaded' : '',
                ye =
                  J || !V
                    ? {}
                    : {
                        backgroundImage: 'url('.concat(V, ')'),
                        backgroundSize: '100% 100%',
                      };
              return l().createElement(
                'span',
                qr(
                  {
                    className:
                      oe + ' lazy-load-image-background ' + A + xe,
                    style: us(
                      us({}, ye),
                      {},
                      {
                        color: 'transparent',
                        display: 'inline-block',
                        height: F,
                        width: X,
                      },
                    ),
                  },
                  le,
                ),
                y,
              );
            },
          },
          {
            key: 'render',
            value: function () {
              var y = this.props,
                E = y.effect,
                A = y.placeholderSrc,
                F = y.visibleByDefault,
                V = y.wrapperClassName,
                X = y.wrapperProps,
                oe = this.getLazyLoadImage();
              return ((E || A) && !F) || V || X
                ? this.getWrappedLazyLoadImage(oe)
                : oe;
            },
          },
        ]),
        _ && Pd(g.prototype, _),
        Object.defineProperty(g, 'prototype', { writable: !1 }),
        g
      );
      var g, _;
    })(l().Component);
    (Il.propTypes = {
      onLoad: i.PropTypes.func,
      afterLoad: i.PropTypes.func,
      beforeLoad: i.PropTypes.func,
      delayMethod: i.PropTypes.string,
      delayTime: i.PropTypes.number,
      effect: i.PropTypes.string,
      placeholderSrc: i.PropTypes.string,
      threshold: i.PropTypes.number,
      useIntersectionObserver: i.PropTypes.bool,
      visibleByDefault: i.PropTypes.bool,
      wrapperClassName: i.PropTypes.string,
      wrapperProps: i.PropTypes.object,
    }),
      (Il.defaultProps = {
        onLoad: function () {},
        afterLoad: function () {
          return {};
        },
        beforeLoad: function () {
          return {};
        },
        delayMethod: 'throttle',
        delayTime: 300,
        effect: '',
        placeholderSrc: null,
        threshold: 100,
        useIntersectionObserver: !0,
        visibleByDefault: !1,
        wrapperClassName: '',
      });
    const Od = Il;
  })(),
    (gd.exports = r);
})();
var Av = gd.exports;
const za = () => {
    const { id: e } = Tm(),
      {
        image: t,
        title: n,
        links: r,
        technologies: o,
      } = hv.find((u) => e === u.id),
      { isVisible: l, toggleModal: i } = Bv();
    return (
      T.useEffect(() => {
        i();
      }, []),
      B.jsx(Mv, {
        show: l,
        onClose: i,
        children: B.jsxs('div', {
          className: kn.cardWrapper,
          children: [
            B.jsx(Av.LazyLoadImage, {
              alt: 'project-img',
              src: t.src,
              effect: 'blur',
              width: '100%',
              wrapperClassName: kn.image,
              placeholderSrc: t.placeholderSrc,
            }),
            B.jsxs('div', {
              className: kn.cardBody,
              children: [
                B.jsx('h3', { className: kn.title, children: n }),
                B.jsx('div', {
                  className: kn.technologies,
                  children: o.map((u, s) =>
                    B.jsx('span', { children: u }, s),
                  ),
                }),
              ],
            }),
            B.jsxs('div', {
              className: kn.cardFooter,
              children: [
                !!r.site &&
                  B.jsxs(Ra, {
                    style: { width: '12rem' },
                    className: 'primary',
                    href: r.site,
                    target: '_blank',
                    children: [B.jsx(Ta, {}), '   View project'],
                  }),
                !!r.repo &&
                  B.jsxs(Ra, {
                    style: { width: '12rem' },
                    className: 'primary',
                    href: r.repo,
                    target: '_blank',
                    children: [B.jsx(Ta, {}), '   Know more'],
                  }),
              ],
            }),
          ],
        }),
      })
    );
  },
  Pn = {
    Home: '/',
    About: '/about',
    Projects: '/projects',
    Project: '/project/:id',
    Resume: '/resume',
  },
  $v = {
    Home: T.lazy(() =>
      Eo(
        () => import('./Home-BZE6u8Zj.js'),
        __vite__mapDeps([0, 1, 2, 3]),
      ),
    ),
    About: T.lazy(() =>
      Eo(
        () => import('./About-QRV6Zcj2.js'),
        __vite__mapDeps([4, 5, 1, 2, 6, 7, 8]),
      ),
    ),
    Projects: T.lazy(() =>
      Eo(
        () => import('./Projects-4kYDvK71.js'),
        __vite__mapDeps([9, 5, 1, 2, 6, 10]),
      ),
    ),
    Resume: T.lazy(() =>
      Eo(
        () => import('./Resume-h9YLIvyl.js'),
        __vite__mapDeps([11, 5, 1, 2, 6, 7, 12]),
      ),
    ),
  };
function ko({ name: e }) {
  const t = $v[e];
  return B.jsx(T.Suspense, {
    fallback: B.jsx(uv, {}),
    children: B.jsx(t, {}),
  });
}
function Vv() {
  var n;
  const e = rr(),
    t = (n = e.state) == null ? void 0 : n.background;
  return B.jsxs(B.Fragment, {
    children: [
      B.jsxs(Ca, {
        location: t || e,
        children: [
          B.jsx(ln, {
            path: Pn.Home,
            element: B.jsx(ko, { name: 'Home' }),
          }),
          B.jsx(ln, {
            path: Pn.About,
            element: B.jsx(ko, { name: 'About' }),
          }),
          B.jsx(ln, {
            path: Pn.Projects,
            element: B.jsx(ko, { name: 'Projects' }),
          }),
          B.jsx(ln, {
            path: Pn.Resume,
            element: B.jsx(ko, { name: 'Resume' }),
          }),
          B.jsx(ln, { path: Pn.Project, element: B.jsx(za, {}) }),
        ],
      }),
      t &&
        B.jsx(Ca, {
          children: B.jsx(ln, {
            path: Pn.Project,
            element: B.jsx(za, {}),
          }),
        }),
    ],
  });
}
const Wv = () =>
  B.jsx(Xm, { basename: '/portfolio', children: B.jsx(Vv, {}) });
var Ma = {};
const bv = !!(
  window.location.hostname === 'localhost' ||
  window.location.hostname === '[::1]' ||
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
  )
);
function Hv(e) {
  if ('serviceWorker' in navigator) {
    if (
      new URL(Ma.PUBLIC_URL, window.location.href).origin !==
      window.location.origin
    )
      return;
    window.addEventListener('load', () => {
      const n = `${Ma.PUBLIC_URL}/service-worker.js`;
      bv
        ? (Qv(n),
          navigator.serviceWorker.ready.then(() => {
            console.log(
              'This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA',
            );
          }))
        : wd(n);
    });
  }
}
function wd(e, t) {
  navigator.serviceWorker
    .register(e)
    .then((n) => {
      n.onupdatefound = () => {
        const r = n.installing;
        r != null &&
          (r.onstatechange = () => {
            r.state === 'installed' &&
              (navigator.serviceWorker.controller
                ? console.log(
                    'New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA.',
                  )
                : console.log('Content is cached for offline use.'));
          });
      };
    })
    .catch((n) => {
      console.error('Error during service worker registration:', n);
    });
}
function Qv(e, t) {
  fetch(e, { headers: { 'Service-Worker': 'script' } })
    .then((n) => {
      const r = n.headers.get('content-type');
      n.status === 404 ||
      (r != null && r.indexOf('javascript') === -1)
        ? navigator.serviceWorker.ready.then((o) => {
            o.unregister().then(() => {
              window.location.reload();
            });
          })
        : wd(e);
    })
    .catch(() => {
      console.log(
        'No internet connection found. App is running in offline mode.',
      );
    });
}
const Da = 'dark',
  Kv = T.createContext({ dark: !0, toggle: () => {} }),
  Yv = ({ children: e }) => {
    const [t, n] = T.useState(!0),
      r = T.useCallback(() => {
        n(
          (o) => (
            localStorage.setItem(Da, JSON.stringify(!o)),
            document.body.classList.toggle('dark', !o),
            document.body.classList.toggle('light', o),
            !o
          ),
        );
      }, []);
    return (
      T.useEffect(() => {
        const o = JSON.parse(localStorage.getItem(Da));
        o === null
          ? document.body.classList.add('dark')
          : (n(o), document.body.classList.add(o ? 'dark' : 'light'));
      }, []),
      B.jsx(Kv.Provider, {
        value: { dark: t, toggleTheme: r },
        children: e,
      })
    );
  },
  Gv = () => B.jsx(Yv, { children: B.jsx(Wv, {}) }),
  Xv = Zf(document.getElementById('root'));
Xv.render(B.jsx(Gv, {}));
Hv();
export {
  Ra as B,
  rs as C,
  qm as L,
  Jv as N,
  ze as R,
  Kv as T,
  pd as _,
  Td as a,
  Av as b,
  Zv as c,
  wv as d,
  hv as e,
  Ia as f,
  uu as g,
  ou as h,
  lu as i,
  B as j,
  hd as k,
  Pn as l,
  Eo as m,
  zv as n,
  T as r,
  rr as u,
};
