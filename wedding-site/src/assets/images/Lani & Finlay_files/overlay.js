google.maps.__gjsload__('overlay', function (_) {
  var vE = function (a) {
      this.g = a
    },
    ila = function () {},
    wE = function (a) {
      a.tt = a.tt || new ila()
      return a.tt
    },
    jla = function (a) {
      this.Ea = new _.Jm(() => {
        const b = a.tt
        if (a.getPanes()) {
          if (a.getProjection()) {
            if (!b.er && a.onAdd) a.onAdd()
            b.er = !0
            a.draw()
          }
        } else {
          if (b.er)
            if (a.onRemove) a.onRemove()
            else a.remove()
          b.er = !1
        }
      }, 0)
    },
    kla = function (a, b) {
      const c = wE(a)
      let d = c.kq
      d || (d = c.kq = new jla(a))
      _.Lb(c.Sa || [], _.fk)
      var e = (c.ob = c.ob || new _.vha())
      const f = b.__gm
      e.bindTo('zoom', f)
      e.bindTo('offset', f)
      e.bindTo('center', f, 'projectionCenterQ')
      e.bindTo('projection', b)
      e.bindTo('projectionTopLeft', f)
      e = c.Bx = c.Bx || new vE(e)
      e.bindTo('zoom', f)
      e.bindTo('offset', f)
      e.bindTo('projection', b)
      e.bindTo('projectionTopLeft', f)
      a.bindTo('projection', e, 'outProjection')
      a.bindTo('panes', f)
      e = () => _.Km(d.Ea)
      c.Sa = [
        _.dk(a, 'panes_changed', e),
        _.dk(f, 'zoom_changed', e),
        _.dk(f, 'offset_changed', e),
        _.dk(b, 'projection_changed', e),
        _.dk(f, 'projectioncenterq_changed', e)
      ]
      _.Km(d.Ea)
      b instanceof _.Ak
        ? (_.kl(b, 'Ox'), _.il(b, 148440))
        : b instanceof _.Fl && (_.kl(b, 'Oxs'), _.il(b, 181451))
    },
    pla = function (a) {
      if (a) {
        var b = a.getMap()
        if (lla(a) !== b && b && b instanceof _.Ak) {
          const c = b.__gm
          c.overlayLayer
            ? (a.__gmop = new mla(b, a, c.overlayLayer))
            : c.qb.then(({ da: d }) => {
                const e = new nla(b, d)
                d.Ib(e)
                c.overlayLayer = e
                ola(a)
                pla(a)
              })
        }
      }
    },
    ola = function (a) {
      if (a) {
        var b = a.__gmop
        b &&
          ((a.__gmop = null),
          b.g.unbindAll(),
          b.g.set('panes', null),
          b.g.set('projection', null),
          b.i.Qe(b),
          b.h && ((b.h = !1), b.g.onRemove ? b.g.onRemove() : b.g.remove()))
      }
    },
    lla = function (a) {
      return (a = a.__gmop) ? a.map : null
    },
    qla = function (a, b) {
      a.g.get('projection') != b && (a.g.bindTo('panes', a.map.__gm), a.g.set('projection', b))
    }
  _.Ca(vE, _.uk)
  vE.prototype.changed = function (a) {
    'outProjection' != a &&
      ((a = !!(
        this.get('offset') &&
        this.get('projectionTopLeft') &&
        this.get('projection') &&
        _.Qi(this.get('zoom'))
      )),
      a == !this.get('outProjection') && this.set('outProjection', a ? this.g : null))
  }
  var xE = {}
  _.Ca(jla, _.uk)
  xE.re = function (a) {
    if (a) {
      var b = a.getMap()
      ;(wE(a).mx || null) !== b && (b && kla(a, b), (wE(a).mx = b))
    }
  }
  xE.Qe = function (a) {
    const b = wE(a)
    var c = b.ob
    c && c.unbindAll()
    ;(c = b.Bx) && c.unbindAll()
    a.unbindAll()
    a.set('panes', null)
    a.set('projection', null)
    b.Sa && _.Lb(b.Sa, _.fk)
    b.Sa = null
    b.kq && (b.kq.Ea.Jc(), (b.kq = null))
    delete wE(a).mx
  }
  var yE = {},
    mla = class {
      constructor(a, b, c) {
        this.map = a
        this.g = b
        this.i = c
        this.h = !1
        _.kl(this.map, 'Ox')
        _.il(this.map, 148440)
        c.re(this)
      }
      draw() {
        this.h || ((this.h = !0), this.g.onAdd && this.g.onAdd())
        this.g.draw && this.g.draw()
      }
    },
    nla = class {
      constructor(a, b) {
        this.l = a
        this.i = b
        this.g = null
        this.h = []
      }
      dispose() {}
      Yb(a, b, c, d, e, f, h, k) {
        const m = (this.g = this.g || new _.jC(this.l, this.i, () => {}))
        m.Yb(a, b, c, d, e, f, h, k)
        for (const q of this.h) qla(q, m), q.draw()
      }
      re(a) {
        this.h.push(a)
        this.g && qla(a, this.g)
        this.i.refresh()
      }
      Qe(a) {
        _.Ub(this.h, a)
      }
    }
  yE.re = pla
  yE.Qe = ola
  _.Vj('overlay', {
    xv: function (a) {
      if (a) {
        ;(0, xE.Qe)(a)
        ;(0, yE.Qe)(a)
        var b = a.getMap()
        b && (b instanceof _.Ak ? (0, yE.re)(a) : (0, xE.re)(a))
      }
    },
    preventMapHitsFrom: (a) => {
      _.cw(a, {
        Je: ({ event: b }) => {
          _.Kt(b.Ja)
        },
        sd: (b) => _.Mv(b),
        uj: (b) => _.Nv(b),
        me: (b) => _.Nv(b),
        Jd: (b) => _.Ov(b)
      }).el(!0)
    },
    preventMapHitsAndGesturesFrom: (a) => {
      a.addEventListener('click', _.bk)
      a.addEventListener('contextmenu', _.bk)
      a.addEventListener('dblclick', _.bk)
      a.addEventListener('mousedown', _.bk)
      a.addEventListener('mousemove', _.bk)
      a.addEventListener('MSPointerDown', _.bk)
      a.addEventListener('pointerdown', _.bk)
      a.addEventListener('touchstart', _.bk)
      a.addEventListener('wheel', _.bk)
    }
  })
})
