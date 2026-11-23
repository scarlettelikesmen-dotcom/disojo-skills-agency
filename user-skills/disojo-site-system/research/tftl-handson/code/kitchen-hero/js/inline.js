(function(d) {
  if (!d.visibilityState) {
    var s = d.createElement('script');
    s.src = 'https://static.tildacdn.com/js/tilda-polyfill-1.0.min.js';
    d.getElementsByTagName('head')[0].appendChild(s);
  }
})(document);

function t_onReady(func) {
  if (document.readyState != 'loading') {
    func();
  } else {
    document.addEventListener('DOMContentLoaded', func);
  }
}

function t_onFuncLoad(funcName, okFunc, time) {
  if (typeof window[funcName] === 'function') {
    okFunc();
  } else {
    setTimeout(function() {
      t_onFuncLoad(funcName, okFunc, time);
    }, (time || 100));
  }
}

function t_throttle(fn, threshhold, scope) {
  return function() {
    fn.apply(scope || this, arguments);
  };
}
/* ---- */
! function(f, b, e, v, n, t, s) {
  if (f.fbq) return;
  n = f.fbq = function() {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
  };
  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = !0;
  n.version = '2.0';
  n.agent = 'pltilda';
  n.queue = [];
  t = b.createElement(e);
  t.async = !0;
  t.src = v;
  s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s)
}(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2916340868636471');
fbq('track', 'PageView');
/* ---- */
(function() {
  if ((/bot|google|yandex|baidu|bing|msn|duckduckbot|teoma|slurp|crawler|spider|robot|crawling|facebook/i.test(navigator.userAgent)) === false && typeof(sessionStorage) != 'undefined' && sessionStorage.getItem('visited') !== 'y' && document.visibilityState) {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '@media screen and (min-width: 980px) {.t-records {opacity: 0;}.t-records_animated {-webkit-transition: opacity ease-in-out .2s;-moz-transition: opacity ease-in-out .2s;-o-transition: opacity ease-in-out .2s;transition: opacity ease-in-out .2s;}.t-records.t-records_visible {opacity: 1;}}';
    document.getElementsByTagName('head')[0].appendChild(style);

    function t_setvisRecs() {
      var alr = document.querySelectorAll('.t-records');
      Array.prototype.forEach.call(alr, function(el) {
        el.classList.add("t-records_animated");
      });
      setTimeout(function() {
        Array.prototype.forEach.call(alr, function(el) {
          el.classList.add("t-records_visible");
        });
        sessionStorage.setItem("visited", "y");
      }, 400);
    }
    document.addEventListener('DOMContentLoaded', t_setvisRecs);
  }
})();
/* ---- */
t_onReady(function() {
  var allRecords = document.querySelector('.t-records');
  window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
      allRecords.classList.add('t-records_visible');
    }
  });
  var rec = document.querySelector('#rec300644971');
  if (!rec) return;
  rec.setAttribute('data-animationappear', 'off');
  rec.style.opacity = '1';
  allRecords.classList.add('t-records_animated');
  setTimeout(function() {
    allRecords.classList.add('t-records_visible');
  }, 200);
});
/* ---- */
t_onReady(function() {
  var selects = 'button:not(.t-submit):not(.t835__btn_next):not(.t835__btn_prev):not(.t835__btn_result):not(.t862__btn_next):not(.t862__btn_prev):not(.t862__btn_result):not(.t854__news-btn):not(.t862__btn_next),' +
    'a:not([href*="#"]):not(.carousel-control):not(.t-carousel__control):not(.t807__btn_reply):not([href^="#price"]):not([href^="javascript"]):not([href^="mailto"]):not([href^="tel"]):not([href^="link_sub"]):not(.js-feed-btn-show-more):not(.t367__opener):not([href^="https://www.dropbox.com/"])';
  var elements = document.querySelectorAll(selects);
  Array.prototype.forEach.call(elements, function(element) {
    if (element.getAttribute('data-menu-submenu-hook')) return;
    element.addEventListener('click', function(event) {
      var goTo = this.getAttribute('href');
      if (goTo !== null) {
        var ctrl = event.ctrlKey;
        var cmd = event.metaKey && navigator.platform.indexOf('Mac') !== -1;
        if (!ctrl && !cmd) {
          var target = this.getAttribute('target');
          if (target !== '_blank') {
            event.preventDefault();
            var allRecords = document.querySelector('.t-records');
            allRecords.classList.remove('t-records_visible');
            setTimeout(function() {
              window.location = goTo;
            }, 500);
          }
        }
      }
    });
  });
});
/* ---- */
t_onReady(function() {
  var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
  if (!isSafari) {
    document.body.insertAdjacentHTML('beforeend', '<div class="t360__progress"><div class="t360__bar"></div></div>');
    setTimeout(function() {
      var bar = document.querySelector('.t360__bar');
      if (bar) bar.classList.add('t360__barprogress');
    }, 10);
  }
});
window.addEventListener('load', function() {
  var bar = document.querySelector('.t360__bar');
  if (!bar) return;
  bar.classList.remove('t360__barprogress');
  bar.classList.add('t360__barprogressfinished');
  setTimeout(function() {
    bar.classList.add('t360__barprogresshidden');
  }, 20);
  setTimeout(function() {
    var progress = document.querySelector('.t360__progress');
    if (progress) progress.style.display = 'none';
  }, 500);
});
/* ---- */
t_onReady(function() {
  var rec = document.querySelector('#rec300429374');
  if (!rec) return;
  rec.setAttribute('data-animationappear', 'off');
  rec.style.opacity = 1;
  t_onFuncLoad('t450_initMenu', function() {
    t450_initMenu('300429374');
  });
});
/* ---- */
t_onReady(function() {
  var rec = document.querySelector('#rec319306280');
  if (!rec) return;
  rec.setAttribute('data-animationappear', 'off');
  rec.style.opacity = 1;
  t_onFuncLoad('t390_initPopup', function() {
    t390_initPopup('319306280');
  });
});
/* ---- */
t_onReady(function() {
  var hash = window.location.hash;
  t_onFuncLoad('t270_scroll', function() {
    t270_scroll(hash, -3);
  });
  setTimeout(function() {
    var curPath = window.location.pathname;
    var curFullPath = window.location.origin + curPath;
    var recs = document.querySelectorAll('.r');
    Array.prototype.forEach.call(recs, function(rec) {
      var selects = 'a[href^="#"]:not([href="#"]):not(.carousel-control):not(.t-carousel__control):not([href^="#price"]):not([href^="#popup"]):not([href^="#prodpopup"]):not([href^="#order"]):not([href^="#!"]),' +
        'a[href^="' + curPath + '#"]:not([href*="#!/tproduct/"]):not([href*="#!/tab/"]):not([href*="#popup"]),' +
        'a[href^="' + curFullPath + '#"]:not([href*="#!/tproduct/"]):not([href*="#!/tab/"]):not([href*="#popup"])';
      var elements = rec.querySelectorAll(selects);
      Array.prototype.forEach.call(elements, function(element) {
        element.addEventListener('click', function(event) {
          event.preventDefault();
          var hash = this.hash.trim();
          t_onFuncLoad('t270_scroll', function() {
            t270_scroll(hash, -3);
          });
        });
      });
    });
    if (document.querySelectorAll('.js-store').length > 0 || document.querySelectorAll('.js-feed').length > 0) {
      t_onFuncLoad('t270_scroll', function() {
        t270_scroll(hash, -3, 1);
      });
    }
  }, 500);
  setTimeout(function() {
    var hash = window.location.hash;
    if (hash && document.querySelectorAll('a[name="' + hash.slice(1) + '"]').length > 0) {
      if (window.isMobile) {
        t_onFuncLoad('t270_scroll', function() {
          t270_scroll(hash, 0);
        });
      } else {
        t_onFuncLoad('t270_scroll', function() {
          t270_scroll(hash, 0);
        });
      }
    }
  }, 1000);
  window.addEventListener('popstate', function() {
    var hash = window.location.hash;
    if (hash && document.querySelectorAll('a[name="' + hash.slice(1) + '"]').length > 0) {
      if (window.isMobile) {
        t_onFuncLoad('t270_scroll', function() {
          t270_scroll(hash, 0);
        });
      } else {
        t_onFuncLoad('t270_scroll', function() {
          t270_scroll(hash, 0);
        });
      }
    }
  });
});
/* ---- */
t_onReady(function() {
  var rec = document.querySelector('#rec303972249');
  if (!rec) return;
  rec.setAttribute('data-animationappear', 'off');
  rec.style.opacity = 1;
  t_onFuncLoad('t390_initPopup', function() {
    t390_initPopup('303972249');
  });
});
/* ---- */
t_onReady(function() {
  var rec = document.querySelector('#rec303949197');
  if (!rec) return;
  rec.setAttribute('data-animationappear', 'off');
  rec.style.opacity = 1;
  t_onFuncLoad('t390_initPopup', function() {
    t390_initPopup('303949197');
  });
});
/* ---- */
t_onReady(function() {
  var rec = document.querySelector('#rec304131725');
  if (!rec) return;
  rec.setAttribute('data-animationappear', 'off');
  rec.style.opacity = 1;
  t_onFuncLoad('t390_initPopup', function() {
    t390_initPopup('304131725');
  });
});
/* ---- */
t_onReady(function() {
  var rec = document.querySelector('#rec304172098');
  if (!rec) return;
  rec.setAttribute('data-animationappear', 'off');
  rec.style.opacity = 1;
  t_onFuncLoad('t390_initPopup', function() {
    t390_initPopup('304172098');
  });
});
/* ---- */
t_onReady(function() {
  var rec = document.querySelector('#rec305046992');
  if (!rec) return;
  rec.setAttribute('data-animationappear', 'off');
  rec.style.opacity = 1;
  t_onFuncLoad('t390_initPopup', function() {
    t390_initPopup('305046992');
  });
});
/* ---- */
t_onReady(function() {
  var rec = document.querySelector('#rec305044619');
  if (!rec) return;
  rec.setAttribute('data-animationappear', 'off');
  rec.style.opacity = 1;
  t_onFuncLoad('t390_initPopup', function() {
    t390_initPopup('305044619');
  });
});
/* ---- */
t_onReady(function() {
  var rec = document.querySelector('#rec304988369');
  if (!rec) return;
  rec.setAttribute('data-animationappear', 'off');
  rec.style.opacity = 1;
  t_onFuncLoad('t390_initPopup', function() {
    t390_initPopup('304988369');
  });
});
/* ---- */
t_onReady(function() {
  var rec = document.querySelector('#rec304734311');
  if (!rec) return;
  rec.setAttribute('data-animationappear', 'off');
  rec.style.opacity = 1;
  t_onFuncLoad('t390_initPopup', function() {
    t390_initPopup('304734311');
  });
});
/* ---- */

$(document).ready(function() {
  var ZeroPopID = '#rec303972133'; //ID блока с рецептом
  var PopWindID = '#rec303972249'; //ID PopUp окна BF503

  $(PopWindID + " .t-popup__container").addClass("shirina").html($(ZeroPopID)).parent(".t-popup").addClass("parpadding");
  $('a[href^="#popupzero"]').click(function(e) {
    e.preventDefault();
    setTimeout(function() {
      window.dispatchEvent(new Event('resize'));
    }, 10);
  });
  $(document).on('click', 'a[href="#close"], ' + ZeroPopID + ' .t396__filter', function(e) {
    e.preventDefault();
    t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""));
  });
  $(ZeroPopID).delegate(".t-submit", "click", function() {
    setTimeout(function() {
      if ($(ZeroPopID + " .t-form").hasClass("js-send-form-success")) {
        t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""))
      }
    }, 1000);
  });
});

/* ---- */

$(document).ready(function() {
  var ZeroPopID = '#rec303972539'; //ID блока с рецептом
  var PopWindID = '#rec305046992'; //ID PopUp окна BF503

  $(PopWindID + " .t-popup__container").addClass("shirina").html($(ZeroPopID)).parent(".t-popup").addClass("parpadding");
  $('a[href^="#popupzero"]').click(function(e) {
    e.preventDefault();
    setTimeout(function() {
      window.dispatchEvent(new Event('resize'));
    }, 10);
  });
  $(document).on('click', 'a[href="#close"], ' + ZeroPopID + ' .t396__filter', function(e) {
    e.preventDefault();
    t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""));
  });
  $(ZeroPopID).delegate(".t-submit", "click", function() {
    setTimeout(function() {
      if ($(ZeroPopID + " .t-form").hasClass("js-send-form-success")) {
        t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""))
      }
    }, 1000);
  });
});

/* ---- */

$(document).ready(function() {
  var ZeroPopID = '#rec303751479'; //ID блока с рецептом
  var PopWindID = '#rec305044619'; //ID PopUp окна BF503

  $(PopWindID + " .t-popup__container").addClass("shirina").html($(ZeroPopID)).parent(".t-popup").addClass("parpadding");
  $('a[href^="#popupzero"]').click(function(e) {
    e.preventDefault();
    setTimeout(function() {
      window.dispatchEvent(new Event('resize'));
    }, 10);
  });
  $(document).on('click', 'a[href="#close"], ' + ZeroPopID + ' .t396__filter', function(e) {
    e.preventDefault();
    t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""));
  });
  $(ZeroPopID).delegate(".t-submit", "click", function() {
    setTimeout(function() {
      if ($(ZeroPopID + " .t-form").hasClass("js-send-form-success")) {
        t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""))
      }
    }, 1000);
  });
});

/* ---- */

$(document).ready(function() {
  var ZeroPopID = '#rec304949621'; //ID блока с рецептом
  var PopWindID = '#rec304988369'; //ID PopUp окна BF503

  $(PopWindID + " .t-popup__container").addClass("shirina").html($(ZeroPopID)).parent(".t-popup").addClass("parpadding");
  $('a[href^="#popupzero"]').click(function(e) {
    e.preventDefault();
    setTimeout(function() {
      window.dispatchEvent(new Event('resize'));
    }, 10);
  });
  $(document).on('click', 'a[href="#close"], ' + ZeroPopID + ' .t396__filter', function(e) {
    e.preventDefault();
    t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""));
  });
  $(ZeroPopID).delegate(".t-submit", "click", function() {
    setTimeout(function() {
      if ($(ZeroPopID + " .t-form").hasClass("js-send-form-success")) {
        t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""))
      }
    }, 1000);
  });
});

/* ---- */

$(document).ready(function() {
  var ZeroPopID = '#rec304699130'; //ID блока с рецептом
  var PopWindID = '#rec304734311'; //ID PopUp окна BF503

  $(PopWindID + " .t-popup__container").addClass("shirina").html($(ZeroPopID)).parent(".t-popup").addClass("parpadding");
  $('a[href^="#popupzero"]').click(function(e) {
    e.preventDefault();
    setTimeout(function() {
      window.dispatchEvent(new Event('resize'));
    }, 10);
  });
  $(document).on('click', 'a[href="#close"], ' + ZeroPopID + ' .t396__filter', function(e) {
    e.preventDefault();
    t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""));
  });
  $(ZeroPopID).delegate(".t-submit", "click", function() {
    setTimeout(function() {
      if ($(ZeroPopID + " .t-form").hasClass("js-send-form-success")) {
        t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""))
      }
    }, 1000);
  });
});

/* ---- */

$(document).ready(function() {
  var ZeroPopID = '#rec304158206'; //ID блока с рецептом
  var PopWindID = '#rec304172098'; //ID PopUp окна BF503

  $(PopWindID + " .t-popup__container").addClass("shirina").html($(ZeroPopID)).parent(".t-popup").addClass("parpadding");
  $('a[href^="#popupzero"]').click(function(e) {
    e.preventDefault();
    setTimeout(function() {
      window.dispatchEvent(new Event('resize'));
    }, 10);
  });
  $(document).on('click', 'a[href="#close"], ' + ZeroPopID + ' .t396__filter', function(e) {
    e.preventDefault();
    t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""));
  });
  $(ZeroPopID).delegate(".t-submit", "click", function() {
    setTimeout(function() {
      if ($(ZeroPopID + " .t-form").hasClass("js-send-form-success")) {
        t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""))
      }
    }, 1000);
  });
});

/* ---- */

$(document).ready(function() {
  var ZeroPopID = '#rec303732914'; //ID блока с рецептом
  var PopWindID = '#rec303949197'; //ID PopUp окна BF503

  $(PopWindID + " .t-popup__container").addClass("shirina").html($(ZeroPopID)).parent(".t-popup").addClass("parpadding");
  $('a[href^="#popupzero"]').click(function(e) {
    e.preventDefault();
    setTimeout(function() {
      window.dispatchEvent(new Event('resize'));
    }, 10);
  });
  $(document).on('click', 'a[href="#close"], ' + ZeroPopID + ' .t396__filter', function(e) {
    e.preventDefault();
    t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""));
  });
  $(ZeroPopID).delegate(".t-submit", "click", function() {
    setTimeout(function() {
      if ($(ZeroPopID + " .t-form").hasClass("js-send-form-success")) {
        t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""))
      }
    }, 1000);
  });
});

/* ---- */
t_onReady(function() {
  var rec = document.querySelector('#rec304189472');
  if (!rec) return;
  rec.setAttribute('data-animationappear', 'off');
  rec.style.opacity = 1;
  t_onFuncLoad('t390_initPopup', function() {
    t390_initPopup('304189472');
  });
});
/* ---- */

$(document).ready(function() {
  var ZeroPopID = '#rec303751479'; //ID блока с рецептом
  var PopWindID = '#rec303949298'; //ID PopUp окна BF503

  $(PopWindID + " .t-popup__container").addClass("shirina").html($(ZeroPopID)).parent(".t-popup").addClass("parpadding");
  $('a[href^="#popupzero"]').click(function(e) {
    e.preventDefault();
    setTimeout(function() {
      window.dispatchEvent(new Event('resize'));
    }, 10);
  });
  $(document).on('click', 'a[href="#close"], ' + ZeroPopID + ' .t396__filter', function(e) {
    e.preventDefault();
    t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""));
  });
  $(ZeroPopID).delegate(".t-submit", "click", function() {
    setTimeout(function() {
      if ($(ZeroPopID + " .t-form").hasClass("js-send-form-success")) {
        t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""))
      }
    }, 1000);
  });
});

/* ---- */

$(document).ready(function() {
  var ZeroPopID = '#rec304182033'; //ID блока с рецептом
  var PopWindID = '#rec304189472'; //ID PopUp окна BF503

  $(PopWindID + " .t-popup__container").addClass("shirina").html($(ZeroPopID)).parent(".t-popup").addClass("parpadding");
  $('a[href^="#popupzero"]').click(function(e) {
    e.preventDefault();
    setTimeout(function() {
      window.dispatchEvent(new Event('resize'));
    }, 10);
  });
  $(document).on('click', 'a[href="#close"], ' + ZeroPopID + ' .t396__filter', function(e) {
    e.preventDefault();
    t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""));
  });
  $(ZeroPopID).delegate(".t-submit", "click", function() {
    setTimeout(function() {
      if ($(ZeroPopID + " .t-form").hasClass("js-send-form-success")) {
        t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""))
      }
    }, 1000);
  });
});

/* ---- */
t_onReady(function() {
  var rec = document.querySelector('#rec304147808');
  if (!rec) return;
  rec.setAttribute('data-animationappear', 'off');
  rec.style.opacity = 1;
  t_onFuncLoad('t390_initPopup', function() {
    t390_initPopup('304147808');
  });
});
/* ---- */
t_onReady(function() {
  var rec = document.querySelector('#rec305137605');
  if (!rec) return;
  rec.setAttribute('data-animationappear', 'off');
  rec.style.opacity = 1;
  t_onFuncLoad('t390_initPopup', function() {
    t390_initPopup('305137605');
  });
});
/* ---- */
t_onReady(function() {
  var rec = document.querySelector('#rec305121055');
  if (!rec) return;
  rec.setAttribute('data-animationappear', 'off');
  rec.style.opacity = 1;
  t_onFuncLoad('t390_initPopup', function() {
    t390_initPopup('305121055');
  });
});
/* ---- */
t_onReady(function() {
  var rec = document.querySelector('#rec305041334');
  if (!rec) return;
  rec.setAttribute('data-animationappear', 'off');
  rec.style.opacity = 1;
  t_onFuncLoad('t390_initPopup', function() {
    t390_initPopup('305041334');
  });
});
/* ---- */
t_onReady(function() {
  var rec = document.querySelector('#rec304655671');
  if (!rec) return;
  rec.setAttribute('data-animationappear', 'off');
  rec.style.opacity = 1;
  t_onFuncLoad('t390_initPopup', function() {
    t390_initPopup('304655671');
  });
});
/* ---- */

$(document).ready(function() {
  var ZeroPopID = '#rec303751479'; //ID блока с рецептом
  var PopWindID = '#rec303949298'; //ID PopUp окна BF503

  $(PopWindID + " .t-popup__container").addClass("shirina").html($(ZeroPopID)).parent(".t-popup").addClass("parpadding");
  $('a[href^="#popupzero"]').click(function(e) {
    e.preventDefault();
    setTimeout(function() {
      window.dispatchEvent(new Event('resize'));
    }, 10);
  });
  $(document).on('click', 'a[href="#close"], ' + ZeroPopID + ' .t396__filter', function(e) {
    e.preventDefault();
    t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""));
  });
  $(ZeroPopID).delegate(".t-submit", "click", function() {
    setTimeout(function() {
      if ($(ZeroPopID + " .t-form").hasClass("js-send-form-success")) {
        t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""))
      }
    }, 1000);
  });
});

/* ---- */

$(document).ready(function() {
  var ZeroPopID = '#rec305126417'; //ID блока с рецептом
  var PopWindID = '#rec305137605'; //ID PopUp окна BF503

  $(PopWindID + " .t-popup__container").addClass("shirina").html($(ZeroPopID)).parent(".t-popup").addClass("parpadding");
  $('a[href^="#popupzero"]').click(function(e) {
    e.preventDefault();
    setTimeout(function() {
      window.dispatchEvent(new Event('resize'));
    }, 10);
  });
  $(document).on('click', 'a[href="#close"], ' + ZeroPopID + ' .t396__filter', function(e) {
    e.preventDefault();
    t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""));
  });
  $(ZeroPopID).delegate(".t-submit", "click", function() {
    setTimeout(function() {
      if ($(ZeroPopID + " .t-form").hasClass("js-send-form-success")) {
        t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""))
      }
    }, 1000);
  });
});

/* ---- */

$(document).ready(function() {
  var ZeroPopID = '#rec305092322'; //ID блока с рецептом
  var PopWindID = '#rec305121055'; //ID PopUp окна BF503

  $(PopWindID + " .t-popup__container").addClass("shirina").html($(ZeroPopID)).parent(".t-popup").addClass("parpadding");
  $('a[href^="#popupzero"]').click(function(e) {
    e.preventDefault();
    setTimeout(function() {
      window.dispatchEvent(new Event('resize'));
    }, 10);
  });
  $(document).on('click', 'a[href="#close"], ' + ZeroPopID + ' .t396__filter', function(e) {
    e.preventDefault();
    t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""));
  });
  $(ZeroPopID).delegate(".t-submit", "click", function() {
    setTimeout(function() {
      if ($(ZeroPopID + " .t-form").hasClass("js-send-form-success")) {
        t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""))
      }
    }, 1000);
  });
});

/* ---- */

$(document).ready(function() {
  var ZeroPopID = '#rec304160959'; //ID блока с рецептом
  var PopWindID = '#rec305041334'; //ID PopUp окна BF503

  $(PopWindID + " .t-popup__container").addClass("shirina").html($(ZeroPopID)).parent(".t-popup").addClass("parpadding");
  $('a[href^="#popupzero"]').click(function(e) {
    e.preventDefault();
    setTimeout(function() {
      window.dispatchEvent(new Event('resize'));
    }, 10);
  });
  $(document).on('click', 'a[href="#close"], ' + ZeroPopID + ' .t396__filter', function(e) {
    e.preventDefault();
    t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""));
  });
  $(ZeroPopID).delegate(".t-submit", "click", function() {
    setTimeout(function() {
      if ($(ZeroPopID + " .t-form").hasClass("js-send-form-success")) {
        t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""))
      }
    }, 1000);
  });
});

/* ---- */

$(document).ready(function() {
  var ZeroPopID = '#rec304135690'; //ID блока с рецептом
  var PopWindID = '#rec304655671'; //ID PopUp окна BF503

  $(PopWindID + " .t-popup__container").addClass("shirina").html($(ZeroPopID)).parent(".t-popup").addClass("parpadding");
  $('a[href^="#popupzero"]').click(function(e) {
    e.preventDefault();
    setTimeout(function() {
      window.dispatchEvent(new Event('resize'));
    }, 10);
  });
  $(document).on('click', 'a[href="#close"], ' + ZeroPopID + ' .t396__filter', function(e) {
    e.preventDefault();
    t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""));
  });
  $(ZeroPopID).delegate(".t-submit", "click", function() {
    setTimeout(function() {
      if ($(ZeroPopID + " .t-form").hasClass("js-send-form-success")) {
        t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""))
      }
    }, 1000);
  });
});

/* ---- */
t_onReady(function() {
  var rec = document.querySelector('#rec304133480');
  if (!rec) return;
  rec.setAttribute('data-animationappear', 'off');
  rec.style.opacity = 1;
  t_onFuncLoad('t390_initPopup', function() {
    t390_initPopup('304133480');
  });
});
/* ---- */
t_onReady(function() {
  var rec = document.querySelector('#rec305052129');
  if (!rec) return;
  rec.setAttribute('data-animationappear', 'off');
  rec.style.opacity = 1;
  t_onFuncLoad('t390_initPopup', function() {
    t390_initPopup('305052129');
  });
});
/* ---- */
t_onReady(function() {
  var rec = document.querySelector('#rec305049809');
  if (!rec) return;
  rec.setAttribute('data-animationappear', 'off');
  rec.style.opacity = 1;
  t_onFuncLoad('t390_initPopup', function() {
    t390_initPopup('305049809');
  });
});
/* ---- */
t_onReady(function() {
  var rec = document.querySelector('#rec304939336');
  if (!rec) return;
  rec.setAttribute('data-animationappear', 'off');
  rec.style.opacity = 1;
  t_onFuncLoad('t390_initPopup', function() {
    t390_initPopup('304939336');
  });
});
/* ---- */
t_onReady(function() {
  var rec = document.querySelector('#rec304238621');
  if (!rec) return;
  rec.setAttribute('data-animationappear', 'off');
  rec.style.opacity = 1;
  t_onFuncLoad('t390_initPopup', function() {
    t390_initPopup('304238621');
  });
});
/* ---- */
t_onReady(function() {
  var rec = document.querySelector('#rec304212792');
  if (!rec) return;
  rec.setAttribute('data-animationappear', 'off');
  rec.style.opacity = 1;
  t_onFuncLoad('t390_initPopup', function() {
    t390_initPopup('304212792');
  });
});
/* ---- */

$(document).ready(function() {
  var ZeroPopID = '#rec303751479'; //ID блока с рецептом
  var PopWindID = '#rec303949298'; //ID PopUp окна BF503

  $(PopWindID + " .t-popup__container").addClass("shirina").html($(ZeroPopID)).parent(".t-popup").addClass("parpadding");
  $('a[href^="#popupzero"]').click(function(e) {
    e.preventDefault();
    setTimeout(function() {
      window.dispatchEvent(new Event('resize'));
    }, 10);
  });
  $(document).on('click', 'a[href="#close"], ' + ZeroPopID + ' .t396__filter', function(e) {
    e.preventDefault();
    t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""));
  });
  $(ZeroPopID).delegate(".t-submit", "click", function() {
    setTimeout(function() {
      if ($(ZeroPopID + " .t-form").hasClass("js-send-form-success")) {
        t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""))
      }
    }, 1000);
  });
});

/* ---- */

$(document).ready(function() {
  var ZeroPopID = '#rec304154525'; //ID блока с рецептом
  var PopWindID = '#rec305052129'; //ID PopUp окна BF503

  $(PopWindID + " .t-popup__container").addClass("shirina").html($(ZeroPopID)).parent(".t-popup").addClass("parpadding");
  $('a[href^="#popupzero"]').click(function(e) {
    e.preventDefault();
    setTimeout(function() {
      window.dispatchEvent(new Event('resize'));
    }, 10);
  });
  $(document).on('click', 'a[href="#close"], ' + ZeroPopID + ' .t396__filter', function(e) {
    e.preventDefault();
    t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""));
  });
  $(ZeroPopID).delegate(".t-submit", "click", function() {
    setTimeout(function() {
      if ($(ZeroPopID + " .t-form").hasClass("js-send-form-success")) {
        t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""))
      }
    }, 1000);
  });
});

/* ---- */

$(document).ready(function() {
  var ZeroPopID = '#rec304148217'; //ID блока с рецептом
  var PopWindID = '#rec305049809'; //ID PopUp окна BF503

  $(PopWindID + " .t-popup__container").addClass("shirina").html($(ZeroPopID)).parent(".t-popup").addClass("parpadding");
  $('a[href^="#popupzero"]').click(function(e) {
    e.preventDefault();
    setTimeout(function() {
      window.dispatchEvent(new Event('resize'));
    }, 10);
  });
  $(document).on('click', 'a[href="#close"], ' + ZeroPopID + ' .t396__filter', function(e) {
    e.preventDefault();
    t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""));
  });
  $(ZeroPopID).delegate(".t-submit", "click", function() {
    setTimeout(function() {
      if ($(ZeroPopID + " .t-form").hasClass("js-send-form-success")) {
        t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""))
      }
    }, 1000);
  });
});

/* ---- */

$(document).ready(function() {
  var ZeroPopID = '#rec304180491'; //ID блока с рецептом
  var PopWindID = '#rec304939336'; //ID PopUp окна BF503

  $(PopWindID + " .t-popup__container").addClass("shirina").html($(ZeroPopID)).parent(".t-popup").addClass("parpadding");
  $('a[href^="#popupzero"]').click(function(e) {
    e.preventDefault();
    setTimeout(function() {
      window.dispatchEvent(new Event('resize'));
    }, 10);
  });
  $(document).on('click', 'a[href="#close"], ' + ZeroPopID + ' .t396__filter', function(e) {
    e.preventDefault();
    t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""));
  });
  $(ZeroPopID).delegate(".t-submit", "click", function() {
    setTimeout(function() {
      if ($(ZeroPopID + " .t-form").hasClass("js-send-form-success")) {
        t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""))
      }
    }, 1000);
  });
});

/* ---- */

$(document).ready(function() {
  var ZeroPopID = '#rec304140380'; //ID блока с рецептом
  var PopWindID = '#rec304133480'; //ID PopUp окна BF503

  $(PopWindID + " .t-popup__container").addClass("shirina").html($(ZeroPopID)).parent(".t-popup").addClass("parpadding");
  $('a[href^="#popupzero"]').click(function(e) {
    e.preventDefault();
    setTimeout(function() {
      window.dispatchEvent(new Event('resize'));
    }, 10);
  });
  $(document).on('click', 'a[href="#close"], ' + ZeroPopID + ' .t396__filter', function(e) {
    e.preventDefault();
    t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""));
  });
  $(ZeroPopID).delegate(".t-submit", "click", function() {
    setTimeout(function() {
      if ($(ZeroPopID + " .t-form").hasClass("js-send-form-success")) {
        t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""))
      }
    }, 1000);
  });
});

/* ---- */

$(document).ready(function() {
  var ZeroPopID = '#rec304233474'; //ID блока с рецептом
  var PopWindID = '#rec304238621'; //ID PopUp окна BF503

  $(PopWindID + " .t-popup__container").addClass("shirina").html($(ZeroPopID)).parent(".t-popup").addClass("parpadding");
  $('a[href^="#popupzero"]').click(function(e) {
    e.preventDefault();
    setTimeout(function() {
      window.dispatchEvent(new Event('resize'));
    }, 10);
  });
  $(document).on('click', 'a[href="#close"], ' + ZeroPopID + ' .t396__filter', function(e) {
    e.preventDefault();
    t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""));
  });
  $(ZeroPopID).delegate(".t-submit", "click", function() {
    setTimeout(function() {
      if ($(ZeroPopID + " .t-form").hasClass("js-send-form-success")) {
        t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""))
      }
    }, 1000);
  });
});

/* ---- */

$(document).ready(function() {
  var ZeroPopID = '#rec304193911'; //ID блока с рецептом
  var PopWindID = '#rec304212792'; //ID PopUp окна BF503

  $(PopWindID + " .t-popup__container").addClass("shirina").html($(ZeroPopID)).parent(".t-popup").addClass("parpadding");
  $('a[href^="#popupzero"]').click(function(e) {
    e.preventDefault();
    setTimeout(function() {
      window.dispatchEvent(new Event('resize'));
    }, 10);
  });
  $(document).on('click', 'a[href="#close"], ' + ZeroPopID + ' .t396__filter', function(e) {
    e.preventDefault();
    t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""));
  });
  $(ZeroPopID).delegate(".t-submit", "click", function() {
    setTimeout(function() {
      if ($(ZeroPopID + " .t-form").hasClass("js-send-form-success")) {
        t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""))
      }
    }, 1000);
  });
});

/* ---- */
t_onReady(function() {
  var rec = document.querySelector('#rec303758745');
  if (!rec) return;
  rec.setAttribute('data-animationappear', 'off');
  rec.style.opacity = 1;
  t_onFuncLoad('t390_initPopup', function() {
    t390_initPopup('303758745');
  });
});
/* ---- */
t_onReady(function() {
  var rec = document.querySelector('#rec304226795');
  if (!rec) return;
  rec.setAttribute('data-animationappear', 'off');
  rec.style.opacity = 1;
  t_onFuncLoad('t390_initPopup', function() {
    t390_initPopup('304226795');
  });
});
/* ---- */

$(document).ready(function() {
  var ZeroPopID = '#rec303749979'; //ID блока с рецептом
  var PopWindID = '#rec303758745'; //ID PopUp окна BF503

  $(PopWindID + " .t-popup__container").addClass("shirina").html($(ZeroPopID)).parent(".t-popup").addClass("parpadding");
  $('a[href^="#popupzero"]').click(function(e) {
    e.preventDefault();
    setTimeout(function() {
      window.dispatchEvent(new Event('resize'));
    }, 10);
  });
  $(document).on('click', 'a[href="#close"], ' + ZeroPopID + ' .t396__filter', function(e) {
    e.preventDefault();
    t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""));
  });
  $(ZeroPopID).delegate(".t-submit", "click", function() {
    setTimeout(function() {
      if ($(ZeroPopID + " .t-form").hasClass("js-send-form-success")) {
        t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""))
      }
    }, 1000);
  });
});

/* ---- */

$(document).ready(function() {
  var ZeroPopID = '#rec304218928'; //ID блока с рецептом
  var PopWindID = '#rec304226795'; //ID PopUp окна BF503

  $(PopWindID + " .t-popup__container").addClass("shirina").html($(ZeroPopID)).parent(".t-popup").addClass("parpadding");
  $('a[href^="#popupzero"]').click(function(e) {
    e.preventDefault();
    setTimeout(function() {
      window.dispatchEvent(new Event('resize'));
    }, 10);
  });
  $(document).on('click', 'a[href="#close"], ' + ZeroPopID + ' .t396__filter', function(e) {
    e.preventDefault();
    t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""));
  });
  $(ZeroPopID).delegate(".t-submit", "click", function() {
    setTimeout(function() {
      if ($(ZeroPopID + " .t-form").hasClass("js-send-form-success")) {
        t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""))
      }
    }, 1000);
  });
});

/* ---- */

$(document).ready(function() {
  var ZeroPopID = '#rec303691816'; //ID блока с рецептом
  var PopWindID = '#rec303726164'; //ID PopUp окна BF503

  $(PopWindID + " .t-popup__container").addClass("shirina").html($(ZeroPopID)).parent(".t-popup").addClass("parpadding");
  $('a[href^="#popupzero"]').click(function(e) {
    e.preventDefault();
    setTimeout(function() {
      window.dispatchEvent(new Event('resize'));
    }, 10);
  });
  $(document).on('click', 'a[href="#close"], ' + ZeroPopID + ' .t396__filter', function(e) {
    e.preventDefault();
    t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""));
  });
  $(ZeroPopID).delegate(".t-submit", "click", function() {
    setTimeout(function() {
      if ($(ZeroPopID + " .t-form").hasClass("js-send-form-success")) {
        t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""))
      }
    }, 1000);
  });
});

/* ---- */
t_onReady(function() {
  setTimeout(function() {
    t_onFuncLoad('tcart__init', function() {
      tcart__init(
        '302009074',
        ''
      );
    });
  }, 50);
  /* fix for Android */
  var userAgent = navigator.userAgent.toLowerCase();
  var isAndroid = userAgent.indexOf('android') !== -1;
  var body = document.body;
  if (!body) return;
  var isScrollablefFix = body.classList.contains('t-body_scrollable-fix-for-android');
  if (isAndroid && !isScrollablefFix) {
    body.classList.add('t-body_scrollable-fix-for-android');
    document.head.insertAdjacentHTML(
      'beforeend',
      '<style>@media screen and (max-width: 560px) {\n.t-body_scrollable-fix-for-android {\noverflow: visible !important;\n}\n}\n</style>'
    );
    console.log('Android css fix was inited');
  }
  /* fix Instagram iPhone keyboard bug */
  if (userAgent.indexOf('instagram') !== -1 && userAgent.indexOf('iphone') !== -1) {
    body.style.position = 'relative';
  }
  var rec = document.querySelector('#rec302009074');
  if (!rec) return;
  var cartWindow = rec.querySelector('.t706__cartwin');
  var allRecords = document.querySelector('.t-records');
  var currentMode = allRecords.getAttribute('data-tilda-mode');
  if (cartWindow && currentMode !== 'edit' && currentMode !== 'preview') {
    cartWindow.addEventListener(
      'scroll',
      t_throttle(function() {
        if (window.lazy === 'y' || document.querySelector('#allrecords').getAttribute('data-tilda-lazy') === 'yes') {
          t_onFuncLoad('t_lazyload_update', function() {
            t_lazyload_update();
          });
        }
      }, 500)
    );
  }
});
/* ---- */

$(document).ready(function() {
  var person = 0,
    breakfast = 0,
    lunch = 0,
    dinner = 0,
    prodPrice = 0,
    selectedEating = [0, 0, 0],
    eating = [0, 0, 0];
  //priceList[количесво персон][завтрак, обед или ужин][количество] == стоимость
  var priceList = [
    [
      [615, 765, 865, 935],
      [495, 595, 665, 715],
      [755, 945, 1085, 1175]
    ],
    [
      [865, 1095, 1265, 1365],
      [665, 865, 995, 1095],
      [1085, 1395, 1625, 1765]
    ],
    [
      [1265, 1635, 1895, 2065],
      [995, 1285, 1495, 1615],
      [1625, 2135, 2495, 2725]
    ]
  ];
  //ID блоков с рецептами
  var cartBlocks = ['#rec289709073', '#rec289726168', '#rec289726188'];
  for (var i = 0; i < cartBlocks.length; i++) {
    $(cartBlocks[i] + ' [data-elem-type="button"] a').addClass('blocked')
  }
  $('.t397__title').append('<span class="count"></span>');
  $('.count').hide();
  $(document).on('change', '[name="person"]', function() {
    person = $(this)[0].selectedIndex;
    $('[name="person"]').val($(this).val());
    changePerson();
  })

  $("[href='#slide1'],[href='#slide2'],[href='#slide3']").click(function() {
    person = parseInt($(this).attr('href').replace('#slide', '')) - 1;
    $('[name="person"]')[0].selectedIndex = person;
    $('[name="person"]')[1].selectedIndex = person;
    changePerson();
  })

  function changePerson() {
    var blocks = $("#rec289664592, #rec289726881, #rec289728250");
    $(blocks).hide();
    blocks.eq(person).show();
    //blocks.eq(person).trigger("resize");
    calcPrice();
  }
  setTimeout(function() {
    changePerson()
  }, 200);

  $(document).on('change', '[name="breakfast"]', function() {
    breakfast = $(this)[0].selectedIndex;
    if (breakfast > 0) {
      breakfast++;
      $(cartBlocks[0] + ' [data-elem-type="button"]  a').removeClass('blocked')
    } else {
      $(cartBlocks[0] + '  [data-elem-type="button"]  a').addClass('blocked')
    }
    $('[name="breakfast"]').val($(this).val());
    $(cartBlocks[0]).find('[name="Quantity"]').val(0);
    changeMenu();
    $('.breakfast a.active').click();
  })
  $(document).on('change', '[name="lunch"]', function() {
    lunch = $(this)[0].selectedIndex;
    if (lunch > 0) {
      lunch++;
      $(cartBlocks[1] + ' a').removeClass('blocked')
    } else {
      $(cartBlocks[1] + ' [data-elem-type="button"]  a').addClass('blocked')
    }
    $('[name="lunch"]').val($(this).val());
    $(cartBlocks[1]).find('[name="Quantity"]').val(0);
    changeMenu();
    $('.lunch a.active').click();
  })
  $(document).on('change', '[name="dinner"]', function() {
    dinner = $(this)[0].selectedIndex;
    if (dinner > 0) {
      dinner++;
      $(cartBlocks[2] + ' a').removeClass('blocked')
    } else {
      $(cartBlocks[2] + ' [data-elem-type="button"]  a').addClass('blocked')
    }
    $('[name="dinner"]').val($(this).val());
    $(cartBlocks[2]).find('[name="Quantity"]').val(0);
    changeMenu();
    $('.dinner a.active').click();
  })

  setTimeout(function() {
    $('[name="dinner"]')[0].selectedIndex = 1;
    $('[name="dinner"]').change();
    $('[name="person"]')[0].selectedIndex = 1;
    $('[name="person"]').change();
  }, 700)

  function changeMenu() {
    eating = [breakfast, lunch, dinner];
    var count = 0,
      countSelect = 0;
    for (let i in eating) {
      if (eating[i] > 0) {
        count += eating[i];
        countSelect += selectedEating[i];
        $('.t397__title .count:eq(' + i + ')').show();
        $('.t397__title .count:eq(' + i + ')').text(eating[i] - selectedEating[i]);
      } else {
        $('.t397__title .count:eq(' + i + ')').hide();
      }
    }
    $('.allCount .tn-atom').text('Обрано ' + countSelect + ' з ' + count + ' страв');

    $('.allCount').removeClass('result');
    calcPrice();

  }
  setTimeout(function() {
    changeMenu()
  }, 200);

  function calcPrice() {
    prodPrice = 0;
    if (breakfast > 0) {
      prodPrice += priceList[person][0][breakfast - 2]
    }
    if (lunch > 0) {
      prodPrice += priceList[person][1][lunch - 2]
    }
    if (dinner > 0) {
      prodPrice += priceList[person][2][dinner - 2]
    }
    $('.price .tn-atom').text(prodPrice + ' грн')
    setTimeout(function() {
      if ((eating[0] == selectedEating[0] && eating[1] == selectedEating[1] && eating[2] == selectedEating[2]) && (eating[0] > 0 || eating[1] > 0 || eating[2] > 0)) {
        let val = '',
          name = '',
          quantity = '',
          prodOption = '[';
        prodOption += '{"option":"<b>Кількість</b>","variant":"<br>' + $('[name="person"]').val() + '","price":0},'
        if ($('.breakfast .active').length > 0) {
          $('.breakfast .active').each(function() {
            href = $(this).attr('href').replace('#breakfast', 'breakfastTitle');
            quantity = $('.' + $(this).attr('href').replace('#', '') + ' .t-inputquantity').val();
            name = $('.' + href).text() + ' x' + quantity + ' шт.';
            val += name + '<br>'
          })
          prodOption += '{"option":"<b>Сніданки</b>","variant":"<br>' + val + '","price":0},'
        }
        if ($('.lunch .active').length > 0) {
          val = '';
          $('.lunch .active').each(function() {
            href = $(this).attr('href').replace('#lunch', 'lunchTitle');
            quantity = $('.' + $(this).attr('href').replace('#', '') + ' .t-inputquantity').val();
            name = $('.' + href).text() + ' x' + quantity + ' шт.';
            val += name + '<br>'
          })
          prodOption += '{"option":"<b>Обіди</b>","variant":"<br>' + val + '","price":0},'
        }
        if ($('.dinner .active').length > 0) {
          val = '';
          $('.dinner .active').each(function() {
            href = $(this).attr('href').replace('#dinner', 'dinnerTitle');
            quantity = $('.' + $(this).attr('href').replace('#', '') + ' .t-inputquantity').val();
            name = $('.' + href).text() + ' x' + quantity + ' шт.';
            val += name + '<br>'
          })
          prodOption += '{"option":"<b>Вечері</b>","variant":"<br>' + val + '","price":0},'
        }
        prodOption = prodOption.substring(0, prodOption.length - 1) + ']';
        prodOption = JSON.parse(prodOption);
        //if(prodPrice>0) {
        $('.allCount .tn-atom').text('ПАКУЙТЕ');
        $('.allCount').addClass('result');
        $('.allCount .tn-atom')[0].onclick = function() {
          tcart__addProduct({
            img: 'https://static.tildacdn.com/tild3262-6332-4832-a166-363639323330/Group_1.png',
            lid: "",
            name: 'Ви обрали',
            options: prodOption,
            pack_label: "",
            pack_m: "",
            pack_x: "",
            pack_y: "",
            pack_z: "",
            price: prodPrice,
            quantity: 1,
            recid: "",
            url: location.href
          });
          for (var i = 0; i < cartBlocks.length; i++) {
            $(cartBlocks[i] + ' [data-elem-type="button"] a').text('ХОЧУ ОЦЕ').removeClass('active').addClass('blocked');
            $(cartBlocks[i] + ' .activeForm .t-inputquantity').val(0);
            $(cartBlocks[i] + ' .activeForm').removeClass('activeForm');
          }
          breakfast = 0, lunch = 0, dinner = 0, prodPrice = 0, selectedEating = [0, 0, 0], eating = [0, 0, 0];
          $('[name="breakfast"]')[0].selectedIndex = 0;
          $('[name="lunch"]')[0].selectedIndex = 0;
          $('[name="dinner"]')[0].selectedIndex = 0;
          $('[name="breakfast"]:eq(0),[name="lunch"]:eq(0),[name="dinner"]:eq(0)').change();
          //}
        };

      }
    }, 200);
  }

  $(document).on('click', '.breakfast a', function() {
    if ($(this)[0].classList.contains('active')) {
      $(this).removeClass('active');
      $('.breakfast a').removeClass('blocked');
      $('.' + $(this).attr('href').replace('#', '')).removeClass('activeForm');
      $(this).text('ХОЧУ ОЦЕ');
      selectedEating[0] = selectedEating[0] - 1;
    } else if (selectedEating[0] < eating[0]) {
      $(this).addClass('active');
      $(this).text('');
      $('.' + $(this).attr('href').replace('#', '')).addClass('activeForm').find('input').val(1);
      selectedEating[0] = selectedEating[0] + 1;
      if (selectedEating[0] == eating[0]) {
        $('.breakfast a').addClass('blocked');
      }
    }
    changeMenu();
    return false;
  });
  $(document).on('click', '.lunch a', function() {
    if ($(this)[0].classList.contains('active')) {
      $(this).removeClass('active');
      $('.lunch a').removeClass('blocked');
      $('.' + $(this).attr('href').replace('#', '')).removeClass('activeForm');
      $(this).text('ХОЧУ ОЦЕ');
      selectedEating[1] = selectedEating[1] - 1;
    } else if (selectedEating[1] < eating[1]) {
      $(this).addClass('active');
      $(this).text('');
      $('.' + $(this).attr('href').replace('#', '')).addClass('activeForm').find('input').val(1);
      selectedEating[1] = selectedEating[1] + 1;
      if (selectedEating[1] == eating[1]) {
        $('.lunch a').addClass('blocked');
      }
    }
    changeMenu();
    return false;
  });
  $(document).on('click', '.dinner a', function() {
    if ($(this)[0].classList.contains('active')) {
      $(this).removeClass('active');
      $('.dinner a').removeClass('blocked');
      $('.' + $(this).attr('href').replace('#', '')).removeClass('activeForm');
      $(this).text('ХОЧУ ОЦЕ');
      selectedEating[2] = selectedEating[2] - 1;
    } else if (selectedEating[2] < eating[2]) {
      $(this).addClass('active');
      $(this).text('');
      $('.' + $(this).attr('href').replace('#', '')).addClass('activeForm').find('input').val(1);
      selectedEating[2] = selectedEating[2] + 1;
      if (selectedEating[2] == eating[2]) {
        $('.dinner a').addClass('blocked');
      }
    }
    changeMenu();
    return false;
  });
  $(document).on('change focusout click', '[name="Quantity"], .t-inputquantity__btn', function() {
    if ($(this)[0].localName == 'input') {
      if ($(this).val() == 0) {
        $('[href="#' + $(this).closest('[data-elem-type="form"]')[0].classList[2] + '"]').removeClass('active').text('ХОЧУ ОЦЕ');
        $(this).closest('.t-rec').find('a').removeClass('blocked');
        $(this).closest('.activeForm').removeClass('activeForm');
      }
      for (var i = 0; i < cartBlocks.length; i++) {
        if (cartBlocks[i] == '#' + $(this).closest('.t-rec').attr('id')) {
          $(this).closest('.t-rec').find('a').removeClass('blocked');
          selectedEating[i] = 0;
          $(this).closest('.t-rec').find('.activeForm .t-inputquantity').each(function() {
            selectedEating[i] += parseInt($(this).val());
          })
          if (selectedEating[i] == eating[i]) {
            $(this).closest('.t-rec').find(' [data-elem-type="button"] a').addClass('blocked');
          } else if (selectedEating[i] > eating[i]) {
            while (selectedEating[i] > eating[i]) {
              $(this).val(parseInt($(this).val()) - 1);
              selectedEating[i]--;
            }
          }
        }
      }
    } else {
      $(this).closest('.t-inputquantity__wrapper').find('input').each(function() {
        if ($(this).val() == 0) {
          $('[href="#' + $(this).closest('[data-elem-type="form"]')[0].classList[2] + '"]').removeClass('active').text('ХОЧУ ОЦЕ');
          $(this).closest('.t-rec').find('a').removeClass('blocked');
          $(this).closest('.activeForm').removeClass('activeForm');
        }
        for (var i = 0; i < cartBlocks.length; i++) {
          if (cartBlocks[i] == '#' + $(this).closest('.t-rec').attr('id')) {
            $(this).closest('.t-rec').find('a').removeClass('blocked');
            selectedEating[i] = 0;
            $(this).closest('.t-rec').find('.activeForm .t-inputquantity').each(function() {
              selectedEating[i] += parseInt($(this).val());
            })
            if (selectedEating[i] == eating[i]) {
              $(this).closest('.t-rec').find(' [data-elem-type="button"] a').addClass('blocked');
            } else if (selectedEating[i] > eating[i]) {
              $(this).closest('.t-rec').find(' [data-elem-type="button"] a').addClass('blocked');
              while (selectedEating[i] > eating[i]) {
                $(this).val(parseInt($(this).val()) - 1);
                selectedEating[i]--;
              }
            }
          }
        }
      })
    }
    changeMenu();

  })
})

/* ---- */
t_onReady(function() {
  var rec = document.querySelector('#rec302021773');
  if (!rec) return;
  rec.setAttribute('data-animationappear', 'off');
  rec.style.opacity = 1;
  t_onFuncLoad('t390_initPopup', function() {
    t390_initPopup('302021773');
  });
});
/* ---- */

$(document).ready(function() {
  var ZeroPopID = '#rec302022048'; //ID блока с рецептом
  var PopWindID = '#rec302021773'; //ID PopUp окна BF503

  $(PopWindID + " .t-popup__container").addClass("shirina").html($(ZeroPopID)).parent(".t-popup").addClass("parpadding");
  $('a[href^="#popupzero"]').click(function(e) {
    e.preventDefault();
    setTimeout(function() {
      window.dispatchEvent(new Event('resize'));
    }, 10);
  });
  $(document).on('click', 'a[href="#close"], ' + ZeroPopID + ' .t396__filter', function(e) {
    e.preventDefault();
    t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""));
  });
  $(ZeroPopID).delegate(".t-submit", "click", function() {
    setTimeout(function() {
      if ($(ZeroPopID + " .t-form").hasClass("js-send-form-success")) {
        t390_closePopup(PopWindID.replace(/[^0-9]/gim, ""))
      }
    }, 1000);
  });
});

/* ---- */

$(document).ready(function() {
  let scrolldistance = $('#rec289664592')[0].offsetTop; //Дистанция скролла
  let blockMenuID = '#rec300178704'; //ID Zero
  $(blockMenuID).addClass('fixed');
  setTimeout(function() {
    $(blockMenuID).addClass('transtime')
    if ($(document).scrollTop() > scrolldistance) {
      $(blockMenuID).addClass('fonmenu')
    };
  }, 500);
  $(window).scroll(function() {
    let scrollEnd = $('#rec295012774')[0].offsetTop - 400;
    var top = $(document).scrollTop();
    //Если перемещение больше 10 px
    if (top >= scrolldistance && top <= scrollEnd) {
      $(blockMenuID).addClass('fonmenu');
    } else {
      $(blockMenuID).removeClass('fonmenu');
    }
  });
});

/* ---- */

$(document).ready(function() {
  let scrolldistance = 10; //Дистанция скролла
  let blockMenuID = '#rec302017489'; //ID Zero
  $(blockMenuID).addClass('fixed');
  setTimeout(function() {
    $(blockMenuID).addClass('transtime')
    if ($(document).scrollTop() > scrolldistance) {
      $(blockMenuID).addClass('fonmenu')
    };
  }, 500);
  $(window).scroll(function() {
    var top = $(document).scrollTop();
    //Если перемещение больше 10 px
    if (top >= scrolldistance) {
      $(blockMenuID).addClass('fonmenu');
    } else {
      $(blockMenuID).removeClass('fonmenu');
    }
  });
});

/* ---- */
(function(i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function() {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date();
  a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-195411827-1', 'auto');
ga('send', 'pageview');
window.mainTracker = 'user';
/* ---- */
if (!window.mainTracker) {
  window.mainTracker = 'tilda';
}
window.tildastatscroll = 'yes';
(function(d, w, k, o, g) {
  var n = d.getElementsByTagName(o)[0],
    s = d.createElement(o),
    f = function() {
      n.parentNode.insertBefore(s, n);
    };
  s.type = "text/javascript";
  s.async = true;
  s.key = k;
  s.id = "tildastatscript";
  s.src = g;
  if (w.opera == "[object Opera]") {
    d.addEventListener("DOMContentLoaded", f, false);
  } else {
    f();
  }
})(document, window, '51e867acef8fcf6be85e9e5b0affb5db', 'script', 'https://static.tildacdn.com/js/tilda-stat-1.0.min.js');