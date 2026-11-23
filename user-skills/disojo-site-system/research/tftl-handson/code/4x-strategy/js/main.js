/* https://widget.trustpilot.com/trustboxes/5419b6a8b0d04a076446a9ad/main.js */
! function() {
  "use strict";
  const e = e => e.reduce((e, [t, i]) => ({
    ...e,
    [t]: i
  }), {});

  function t(t) {
    const i = ["?", "#"];
    return ((...e) => t => e.reduceRight((e, t) => t(e), t))(e, e => e.split("&").filter(Boolean).map(e => {
      const [t, i] = e.split("=");
      try {
        const e = decodeURIComponent(t);
        return [e, decodeURIComponent(i)]
      } catch (e) {
        return
      }
    }).filter(Boolean), e => -1 !== i.indexOf(e[0]) ? e.substring(1) : e)(t)
  }

  function i(e = window.location) {
    return {
      ...t(e.search),
      ...t(e.hash)
    }
  }
  const r = () => {
      const e = "https://widget.trustpilot.com";
      return 0 === e.indexOf("#") ? "https://widget.tp-staging.com" : e
    },
    a = (e, t) => {
      if (e) {
        const i = e.getAttribute("class"),
          r = i ? i.split(" ") : [];
        if (!((e, t) => {
            if (e) {
              const i = e.getAttribute("class");
              return -1 !== (i ? i.split(" ") : "").indexOf(t)
            }
            return 0
          })(e, t)) {
          const i = [...r, t].join(" ");
          e.setAttribute("class", i)
        }
      }
    },
    s = e => {
      e.forEach(({
        element: e,
        string: t,
        substitutions: i = {}
      }) => {
        t ? qa(e, Xa(i, t), 0) : Ya(e)
      })
    },
    n = {
      singular: "anmeldelse",
      plural: "anmeldelser",
      collectedVia: "Indsamlet via [source]",
      verifiedVia: "Verificeret – indsamlet via [source]",
      serviceReviewTypeLabels: {
        verifiedReview: {
          label: "Verificeret",
          infoTitle: "Verificeret anmeldelse",
          info: "[LINK-BEGIN]Læs mere[LINK-END] om de forskellige typer anmeldelser"
        },
        invitedReview: {
          label: "Inviteret",
          infoTitle: "Inviteret anmeldelse",
          infoTrustpilot: "Anmeldelser af Trustpilot, der er markeret som [BOLD-BEGIN]Inviteret[BOLD-END], blev skrevet via et direkte link til vores anmeldelsesformular.",
          info: "[LINK-BEGIN]Læs mere[LINK-END] om de forskellige typer anmeldelser"
        },
        redirectedReview: {
          label: "Omdirigeret",
          infoTitle: "Omdirigeret anmeldelse",
          info: "[LINK-BEGIN]Læs mere[LINK-END] om de forskellige typer anmeldelser"
        }
      },
      learnMoreLink: "Klik for at få mere at vide om anmeldelsestyper"
    },
    o = {
      january: "januar",
      february: "februar",
      march: "marts",
      april: "april",
      may: "maj",
      june: "juni",
      july: "juli",
      august: "august",
      september: "september",
      october: "oktober",
      november: "november",
      december: "december"
    },
    l = {
      january: "jan.",
      february: "feb.",
      march: "mars.",
      april: "apr.",
      may: "maj",
      june: "jun.",
      july: "jul.",
      august: "aug.",
      september: "sep.",
      october: "okt.",
      november: "nov.",
      december: "dec."
    },
    u = {
      days: {
        singular: "For [count] dag siden",
        plural: "For [count] dage siden"
      },
      hours: {
        singular: "For [count] time siden",
        plural: "For [count] timer siden"
      },
      minutes: {
        singular: "For [count] minut siden",
        plural: "For [count] minutter siden"
      },
      seconds: {
        singular: "For [count] sekund siden",
        plural: "For [count] sekunder siden"
      }
    },
    c = {
      byStars1: "Viser vores [star1]-stjernede anmeldelser",
      byStars2: "Viser vores [star1]- og [star2]-stjernede anmeldelser",
      byStars3: "Viser vores [star1]-, [star2]- og [star3]-stjernede anmeldelser",
      byStars4: "Viser vores [star1]-, [star2]-, [star3]- og [star4]-stjernede anmeldelser",
      byLatest: "Viser vores seneste anmeldelser",
      byFavoriteOrTag: "Viser vores yndlingsanmeldelser"
    },
    d = "Ikke bedømt",
    v = "Stjernebedømmelse på [ratingStars] ud af [totalStars] på Trustpilot",
    m = "Anmeldelse med [reviewStars] stjerner",
    p = {
      body: "Trustpilot udfører kontrol af anmeldelser",
      description: "Klik for at få mere at vide"
    },
    g = "Trustpilot-anmeldelser",
    h = "Vurdering på [trustScore] ud af [totalScore]. [reviewCount] anmeldelser på Trustpilot",
    w = "Vurdering på [trustScoreRating]. [trustScore] ud af [totalScore] på Trustpilot",
    b = "Vurdering på [trustScoreRating]. [trustScore] ud af [totalScore]. [reviewCount] anmeldelser på Trustpilot",
    f = "Vores kunder siger [trustScoreRating]. [trustScore] ud af [totalScore]. Baseret på [reviewCount] anmeldelser på Trustpilot",
    R = "Klik for at se virksomhedens Trustpilot-profil",
    L = "Anmeld os på Trustpilot",
    S = "[reviewCount] anmeldelser med [stars] stjerner",
    T = "[reviewCount] anmeldelser med [star] stjerne",
    y = "Oplevelse den [date]",
    N = "Køb den [DATE]",
    x = {
      reviews: n,
      monthNames: o,
      monthNamesShort: l,
      timeAgo: u,
      reviewFilters: c,
      notRated: d,
      starRating: v,
      starReview: m,
      reviewDisclaimer: p,
      widgetLabel: g,
      businessRatingTextWithReviewCount: h,
      businessRatingTextWithTrustScoreRating: w,
      businessRatingTextWithTSRatingAndReviewCount: b,
      businessRatingTextWithFullDetails: f,
      clickProfileLink: R,
      reviewUsLink: L,
      productRatingTextWithStars: S,
      productRatingTextWith1Star: T,
      dateOfExperience: y,
      dateOfPurchase: N
    },
    k = Object.freeze(Object.defineProperty({
      __proto__: null,
      businessRatingTextWithFullDetails: f,
      businessRatingTextWithReviewCount: h,
      businessRatingTextWithTSRatingAndReviewCount: b,
      businessRatingTextWithTrustScoreRating: w,
      clickProfileLink: R,
      dateOfExperience: y,
      dateOfPurchase: N,
      default: x,
      monthNames: o,
      monthNamesShort: l,
      notRated: d,
      productRatingTextWith1Star: T,
      productRatingTextWithStars: S,
      reviewDisclaimer: p,
      reviewFilters: c,
      reviewUsLink: L,
      reviews: n,
      starRating: v,
      starReview: m,
      timeAgo: u,
      widgetLabel: g
    }, Symbol.toStringTag, {
      value: "Module"
    })),
    C = {
      singular: "Bewertung",
      plural: "Bewertungen",
      collectedVia: "Gesammelt über [source]",
      verifiedVia: "Verifiziert, gesammelt über [source]",
      serviceReviewTypeLabels: {
        verifiedReview: {
          label: "Verifiziert",
          infoTitle: "Verifizierte Bewertung",
          info: "[LINK-BEGIN]Erfahren Sie mehr[LINK-END] über verschiedene Arten von Bewertungen"
        },
        invitedReview: {
          label: "Auf Einladung",
          infoTitle: "Bewertung auf Einladung",
          infoTrustpilot: "Bewertungen zu Trustpilot, die mit dem Hinweis [BOLD-BEGIN]Auf Einladung[BOLD-END] versehen sind, wurden über einen direkten Link zu unserem Bewertungsformular abgegeben.",
          info: "[LINK-BEGIN]Erfahren Sie mehr[LINK-END] über verschiedene Arten von Bewertungen"
        },
        redirectedReview: {
          label: "Weitergeleitet",
          infoTitle: "Weitergeleitete Bewertung",
          info: "[LINK-BEGIN]Erfahren Sie mehr[LINK-END] über verschiedene Arten von Bewertungen"
        }
      },
      learnMoreLink: "Klicken Sie hier, um mehr über Bewertungsarten zu erfahren."
    },
    j = {
      january: "Januar",
      february: "Februar",
      march: "März",
      april: "April",
      may: "Mai",
      june: "Juni",
      july: "Juli",
      august: "August",
      september: "September",
      october: "Oktober",
      november: "November",
      december: "Dezember"
    },
    E = {
      january: "Jan.",
      february: "Feb.",
      march: "März",
      april: "Apr.",
      may: "Mai",
      june: "Juni",
      july: "Juli",
      august: "Aug.",
      september: "Sept.",
      october: "Okt.",
      november: "Nov.",
      december: "Dez."
    },
    I = {
      days: {
        singular: "vor [count] Tag",
        plural: "vor [count] Tagen"
      },
      hours: {
        singular: "vor [count] Stunde",
        plural: "vor [count] Stunden"
      },
      minutes: {
        singular: "vor [count] Minute",
        plural: "vor [count] Minuten"
      },
      seconds: {
        singular: "vor [count] Sekunde",
        plural: "vor [count] Sekunden"
      }
    },
    O = {
      byStars1: "Einige unserer [star1]-Sterne-Bewertungen",
      byStars2: "Einige unserer [star1]- & [star2]-Sterne-Bewertungen",
      byStars3: "Einige unserer [star1]-, [star2]- & [star3]-Sterne-Bewertungen",
      byStars4: "Einige unserer [star1]-, [star2]-, [star3]- & [star4]-Sterne-Bewertungen",
      byLatest: "Unsere neuesten Bewertungen",
      byFavoriteOrTag: "Unsere Lieblingsbewertungen"
    },
    z = "Nicht bewertet",
    D = "[ratingStars] von [totalStars] Sternen auf Trustpilot",
    W = "[reviewStars]-Stern(e)-Bewertung",
    B = {
      body: "Trustpilot prüft Bewertungen",
      description: "Klicken Sie, um mehr zu erfahren"
    },
    M = "Trustpilot-Bewertungen",
    A = "Bewertet mit [trustScore] von [totalScore]. [reviewCount] Bewertungen auf Trustpilot",
    $ = "Bewertet als [trustScoreRating]. [trustScore] von [totalScore] auf Trustpilot",
    F = "Bewertet als [trustScoreRating]. [trustScore] von [totalScore]. [reviewCount] Bewertungen auf Trustpilot",
    _ = "Unsere Kunden sagen [trustScoreRating]. [trustScore] von [totalScore]. Basierend auf [reviewCount] Bewertungen auf Trustpilot",
    K = "Klicken Sie hier, um das Trustpilot-Profil des Unternehmens anzuzeigen",
    V = "Bewerten Sie uns auf Trustpilot",
    P = "[reviewCount] Bewertungen mit [stars] Sternen",
    G = "[reviewCount] Bewertungen mit [star] Stern",
    H = "Erfahrung am [date]",
    U = "Kauf am [DATE]",
    Z = {
      reviews: C,
      monthNames: j,
      monthNamesShort: E,
      timeAgo: I,
      reviewFilters: O,
      notRated: z,
      starRating: D,
      starReview: W,
      reviewDisclaimer: B,
      widgetLabel: M,
      businessRatingTextWithReviewCount: A,
      businessRatingTextWithTrustScoreRating: $,
      businessRatingTextWithTSRatingAndReviewCount: F,
      businessRatingTextWithFullDetails: _,
      clickProfileLink: K,
      reviewUsLink: V,
      productRatingTextWithStars: P,
      productRatingTextWith1Star: G,
      dateOfExperience: H,
      dateOfPurchase: U
    },
    J = Object.freeze(Object.defineProperty({
      __proto__: null,
      businessRatingTextWithFullDetails: _,
      businessRatingTextWithReviewCount: A,
      businessRatingTextWithTSRatingAndReviewCount: F,
      businessRatingTextWithTrustScoreRating: $,
      clickProfileLink: K,
      dateOfExperience: H,
      dateOfPurchase: U,
      default: Z,
      monthNames: j,
      monthNamesShort: E,
      notRated: z,
      productRatingTextWith1Star: G,
      productRatingTextWithStars: P,
      reviewDisclaimer: B,
      reviewFilters: O,
      reviewUsLink: V,
      reviews: C,
      starRating: D,
      starReview: W,
      timeAgo: I,
      widgetLabel: M
    }, Symbol.toStringTag, {
      value: "Module"
    })),
    q = {
      singular: "review",
      plural: "reviews",
      collectedVia: "Collected via [source]",
      verifiedVia: "Verified, collected via [source]",
      serviceReviewTypeLabels: {
        verifiedReview: {
          label: "Verified",
          infoTitle: "Verified review",
          info: "[LINK-BEGIN]Learn more[LINK-END] about review types"
        },
        invitedReview: {
          label: "Invited",
          infoTitle: "Invited review",
          infoTrustpilot: "Reviews for Trustpilot that are labeled [BOLD-BEGIN]Invited[BOLD-END] were written via a link leading directly to our review form.",
          info: "[LINK-BEGIN]Learn more[LINK-END] about review types"
        },
        redirectedReview: {
          label: "Redirected",
          infoTitle: "Redirected review",
          info: "[LINK-BEGIN]Learn more[LINK-END] about review types"
        }
      },
      learnMoreLink: "Click to learn more about review types"
    },
    X = {
      january: "January",
      february: "February",
      march: "March",
      april: "April",
      may: "May",
      june: "June",
      july: "July",
      august: "August",
      september: "September",
      october: "October",
      november: "November",
      december: "December"
    },
    Y = {
      january: "Jan",
      february: "Feb",
      march: "Mar",
      april: "Apr",
      may: "May",
      june: "Jun",
      july: "Jul",
      august: "Aug",
      september: "Sep",
      october: "Oct",
      november: "Nov",
      december: "Dec"
    },
    Q = {
      days: {
        singular: "[count] day ago",
        plural: "[count] days ago"
      },
      hours: {
        singular: "[count] hour ago",
        plural: "[count] hours ago"
      },
      minutes: {
        singular: "[count] minute ago",
        plural: "[count] minutes ago"
      },
      seconds: {
        singular: "[count] second ago",
        plural: "[count] seconds ago"
      }
    },
    ee = {
      byStars1: "Showing our [star1] star reviews",
      byStars2: "Showing our [star1] & [star2] star reviews",
      byStars3: "Showing our [star1], [star2] & [star3] star reviews",
      byStars4: "Showing our [star1], [star2], [star3] & [star4] star reviews",
      byLatest: "Showing our latest reviews",
      byFavoriteOrTag: "Showing our favorite reviews",
      reviewsWithMedia: "Reviews with media",
      longReviews: "Long reviews",
      clearAll: "Clear all",
      filtersCleared: "All filters cleared"
    },
    te = "Not rated",
    ie = "[ratingStars] out of [totalStars] star rating on Trustpilot",
    re = "[reviewStars] star review",
    ae = {
      body: "Trustpilot checks reviews",
      description: "Click to learn more"
    },
    se = "Trustpilot reviews",
    ne = "Rated [trustScore] out of [totalScore]. [reviewCount] reviews on Trustpilot",
    oe = "Rated [trustScoreRating]. [trustScore] out of [totalScore] on Trustpilot",
    le = "Rated [trustScoreRating]. [trustScore] out of [totalScore]. [reviewCount] reviews on Trustpilot",
    ue = "Our customers say [trustScoreRating]. [trustScore] out of [totalScore]. Based on [reviewCount] reviews on Trustpilot",
    ce = "Click to view the company's Trustpilot profile",
    de = "Review us on Trustpilot",
    ve = "[reviewCount] reviews with [stars] stars",
    me = "[reviewCount] reviews with [star] star",
    pe = "Experience on [date]",
    ge = "Purchase on [DATE]",
    he = {
      inputLabel: "Search reviews by keyword",
      placeholder: "Search by keyword...",
      clearLabel: "Clear search",
      showingResults: "Showing reviews matching [QUERY]",
      noResults: "No reviews match your filters",
      error: "We could not load the results. Please try again."
    },
    we = {
      label: "Sort by",
      recency: "Most recent",
      ratingAsc: "Rating: Low to high",
      ratingDesc: "Rating: High to low"
    },
    be = {
      reviews: q,
      monthNames: X,
      monthNamesShort: Y,
      timeAgo: Q,
      reviewFilters: ee,
      notRated: te,
      starRating: ie,
      starReview: re,
      reviewDisclaimer: ae,
      widgetLabel: se,
      businessRatingTextWithReviewCount: ne,
      businessRatingTextWithTrustScoreRating: oe,
      businessRatingTextWithTSRatingAndReviewCount: le,
      businessRatingTextWithFullDetails: ue,
      clickProfileLink: ce,
      reviewUsLink: de,
      productRatingTextWithStars: ve,
      productRatingTextWith1Star: me,
      dateOfExperience: pe,
      dateOfPurchase: ge,
      search: he,
      reviewSort: we
    },
    fe = Object.freeze(Object.defineProperty({
      __proto__: null,
      businessRatingTextWithFullDetails: ue,
      businessRatingTextWithReviewCount: ne,
      businessRatingTextWithTSRatingAndReviewCount: le,
      businessRatingTextWithTrustScoreRating: oe,
      clickProfileLink: ce,
      dateOfExperience: pe,
      dateOfPurchase: ge,
      default: be,
      monthNames: X,
      monthNamesShort: Y,
      notRated: te,
      productRatingTextWith1Star: me,
      productRatingTextWithStars: ve,
      reviewDisclaimer: ae,
      reviewFilters: ee,
      reviewSort: we,
      reviewUsLink: de,
      reviews: q,
      search: he,
      starRating: ie,
      starReview: re,
      timeAgo: Q,
      widgetLabel: se
    }, Symbol.toStringTag, {
      value: "Module"
    })),
    Re = {
      singular: "opinión",
      plural: "opiniones",
      collectedVia: "Fuente: [source]",
      verifiedVia: "Verificada, recopilada vía [source]",
      serviceReviewTypeLabels: {
        verifiedReview: {
          label: "Verificada",
          infoTitle: "Opinión verificada",
          info: "[LINK-BEGIN]Más información[LINK-END] sobre los tipos de opinión"
        },
        invitedReview: {
          label: "Por invitación",
          infoTitle: "Opinión por invitación",
          infoTrustpilot: "Las opiniones de Trustpilot con la etiqueta [BOLD-BEGIN]Por invitación[BOLD-END] se escribieron a través de un enlace que dirige directamente a nuestro formulario para opinar.",
          info: "[LINK-BEGIN]Más información[LINK-END] sobre los tipos de opinión"
        },
        redirectedReview: {
          label: "Redirigida",
          infoTitle: "Opinión redirigida",
          info: "[LINK-BEGIN]Más información[LINK-END] sobre los tipos de opinión"
        }
      },
      learnMoreLink: "Haz clic para más información sobre los tipos de opinión"
    },
    Le = {
      january: "enero",
      february: "febrero",
      march: "marzo",
      april: "abril",
      may: "mayo",
      june: "junio",
      july: "julio",
      august: "agosto",
      september: "septiembre",
      october: "octubre",
      november: "noviembre",
      december: "diciembre"
    },
    Se = {
      january: "ene",
      february: "feb",
      march: "mar",
      april: "abr",
      may: "mayo",
      june: "jun",
      july: "jul",
      august: "ago",
      september: "sept",
      october: "oct",
      november: "nov",
      december: "dic"
    },
    Te = {
      days: {
        singular: "Hace [count] día",
        plural: "Hace [count] días"
      },
      hours: {
        singular: "Hace [count] hora",
        plural: "Hace [count] horas"
      },
      minutes: {
        singular: "Hace [count] minuto",
        plural: "Hace [count] minutos"
      },
      seconds: {
        singular: "Hace [count] segundo",
        plural: "Hace [count] segundos"
      }
    },
    ye = {
      byStars1: "Nuestras opiniones de [star1] estrellas",
      byStars2: "Nuestras opiniones de [star1] y [star2] estrellas",
      byStars3: "Nuestras opiniones de [star1], [star2] y [star3] estrellas",
      byStars4: "Nuestras opiniones de [star1], [star2], [star3] y [star4] estrellas",
      byLatest: "Nuestras opiniones más recientes",
      byFavoriteOrTag: "Nuestras opiniones preferidas"
    },
    Ne = "Sin valorar",
    xe = "[ratingStars] estrella(s) de [totalStars] en Trustpilot",
    ke = "Opinión de [reviewStars] estrella(s)",
    Ce = {
      body: "Trustpilot verifica las opiniones",
      description: "Haz clic para más información"
    },
    je = "Opiniones de Trustpilot",
    Ee = "Valoración [trustScore] sobre [totalScore]. [reviewCount] opiniones en Trustpilot",
    Ie = "Valoración [trustScoreRating]. [trustScore] sobre [totalScore] en Trustpilot",
    Oe = "Valoración [trustScoreRating]. [trustScore] sobre [totalScore]. [reviewCount] opiniones en Trustpilot",
    ze = "Nuestros clientes dan una puntuación de [trustScoreRating]. [trustScore] sobre [totalScore]. Basada en [reviewCount] opiniones en Trustpilot",
    De = "Haz clic para ver el perfil de la empresa en Trustpilot",
    We = "Opina sobre nosotros en Trustpilot",
    Be = "[reviewCount] opiniones con [stars] estrellas",
    Me = "[reviewCount] opiniones con [star] estrella",
    Ae = "Experiencia que tuvo lugar el [date]",
    $e = "Comprado el [DATE]",
    Fe = {
      reviews: Re,
      monthNames: Le,
      monthNamesShort: Se,
      timeAgo: Te,
      reviewFilters: ye,
      notRated: Ne,
      starRating: xe,
      starReview: ke,
      reviewDisclaimer: Ce,
      widgetLabel: je,
      businessRatingTextWithReviewCount: Ee,
      businessRatingTextWithTrustScoreRating: Ie,
      businessRatingTextWithTSRatingAndReviewCount: Oe,
      businessRatingTextWithFullDetails: ze,
      clickProfileLink: De,
      reviewUsLink: We,
      productRatingTextWithStars: Be,
      productRatingTextWith1Star: Me,
      dateOfExperience: Ae,
      dateOfPurchase: $e
    },
    _e = Object.freeze(Object.defineProperty({
      __proto__: null,
      businessRatingTextWithFullDetails: ze,
      businessRatingTextWithReviewCount: Ee,
      businessRatingTextWithTSRatingAndReviewCount: Oe,
      businessRatingTextWithTrustScoreRating: Ie,
      clickProfileLink: De,
      dateOfExperience: Ae,
      dateOfPurchase: $e,
      default: Fe,
      monthNames: Le,
      monthNamesShort: Se,
      notRated: Ne,
      productRatingTextWith1Star: Me,
      productRatingTextWithStars: Be,
      reviewDisclaimer: Ce,
      reviewFilters: ye,
      reviewUsLink: We,
      reviews: Re,
      starRating: xe,
      starReview: ke,
      timeAgo: Te,
      widgetLabel: je
    }, Symbol.toStringTag, {
      value: "Module"
    })),
    Ke = {
      singular: "arvostelu",
      plural: "arvostelua",
      collectedVia: "Arvostelun lähde: [source]",
      verifiedVia: "Varmennettu, lähde: [source]",
      serviceReviewTypeLabels: {
        verifiedReview: {
          label: "Varmennettu",
          infoTitle: "Varmennettu arvostelu",
          info: "[LINK-BEGIN]Lue lisää[LINK-END] eri arvostelutyypeistä"
        },
        invitedReview: {
          label: "Kutsuttu",
          infoTitle: "Kutsuttu arvostelu",
          infoTrustpilot: "Trustpilotin arvostelut, joissa on merkintä [BOLD-BEGIN]Kutsuttu[BOLD-END], kirjoitettiin linkin kautta, joka johtaa suoraan arvostelulomakkeeseemme.",
          info: "[LINK-BEGIN]Lue lisää[LINK-END] eri arvostelutyypeistä"
        },
        redirectedReview: {
          label: "Uudelleenohjattu",
          infoTitle: "Uudelleenohjattu arvostelu",
          info: "[LINK-BEGIN]Lue lisää[LINK-END] eri arvostelutyypeistä"
        }
      },
      learnMoreLink: "Lue lisää eri arvostelutyypeistä klikkaamalla tästä"
    },
    Ve = {
      january: "tammikuuta",
      february: "helmikuuta",
      march: "maaliskuuta",
      april: "huhtikuuta",
      may: "toukokuuta",
      june: "kesäkuuta",
      july: "heinäkuuta",
      august: "elokuuta",
      september: "syyskuuta",
      october: "lokakuuta",
      november: "marraskuuta",
      december: "joulukuuta"
    },
    Pe = {
      january: "tammi",
      february: "helmi",
      march: "maalis",
      april: "huhti",
      may: "toukokuuta",
      june: "kesä",
      july: "heinä",
      august: "elo",
      september: "syys",
      october: "loka",
      november: "marras",
      december: "joulu"
    },
    Ge = {
      days: {
        singular: "[count] päivää sitten",
        plural: "[count] päivää sitten"
      },
      hours: {
        singular: "[count] tuntia sitten",
        plural: "[count] tuntia sitten"
      },
      minutes: {
        singular: "[count] minuuttia sitten",
        plural: "[count] minuuttia sitten"
      },
      seconds: {
        singular: "[count] sekuntia sitten",
        plural: "[count] sekuntia sitten"
      }
    },
    He = {
      byStars1: "Näytetään [star1] tähden arvostelumme",
      byStars2: "Näytetään [star1] & [star2] tähden arvostelumme",
      byStars3: "Näytetään [star1], [star2] & [star3] tähden arvostelumme",
      byStars4: "Näytetään [star1], [star2], [star3] & [star4] tähden arvostelumme",
      byLatest: "Näytetään viimeisimmät arvostelumme",
      byFavoriteOrTag: "Näytetään suosikkiarvostelumme"
    },
    Ue = "Ei arvioitu",
    Ze = "[ratingStars]/[totalStars] tähtiluokitus Trustpilotissa",
    Je = "[reviewStars] tähden arvostelu",
    qe = {
      body: "Trustpilot suorittaa arvostelujen tarkastuksia",
      description: "Napauta ja lue lisää"
    },
    Xe = "Trustpilot-arvostelut",
    Ye = "Arvio [trustScore] kautta [totalScore]. [reviewCount] arvostelua Trustpilotissa",
    Qe = "Arvio [trustScoreRating]. [trustScore] kautta [totalScore] Trustpilotissa",
    et = "Arvio [trustScoreRating]. [trustScore] kautta [totalScore]. [reviewCount] arvostelua Trustpilotissa",
    tt = "Asiakasarvosanamme on [trustScoreRating]. [trustScore] / [totalScore]. Perustuu [reviewCount] arvosteluun Trustpilotissa.",
    it = "Katso yrityksen Trustpilot-profiili napauttamalla",
    rt = "Arvostele meidät Trustpilotissa",
    at = "[reviewCount] arvostelua, joissa [stars] tähteä",
    st = "[reviewCount] arvostelua, joissa [star] tähti",
    nt = "Kokemuksen ajankohta: [date]",
    ot = "Ostopäivä: [DATE]",
    lt = {
      reviews: Ke,
      monthNames: Ve,
      monthNamesShort: Pe,
      timeAgo: Ge,
      reviewFilters: He,
      notRated: Ue,
      starRating: Ze,
      starReview: Je,
      reviewDisclaimer: qe,
      widgetLabel: Xe,
      businessRatingTextWithReviewCount: Ye,
      businessRatingTextWithTrustScoreRating: Qe,
      businessRatingTextWithTSRatingAndReviewCount: et,
      businessRatingTextWithFullDetails: tt,
      clickProfileLink: it,
      reviewUsLink: rt,
      productRatingTextWithStars: at,
      productRatingTextWith1Star: st,
      dateOfExperience: nt,
      dateOfPurchase: ot
    },
    ut = Object.freeze(Object.defineProperty({
      __proto__: null,
      businessRatingTextWithFullDetails: tt,
      businessRatingTextWithReviewCount: Ye,
      businessRatingTextWithTSRatingAndReviewCount: et,
      businessRatingTextWithTrustScoreRating: Qe,
      clickProfileLink: it,
      dateOfExperience: nt,
      dateOfPurchase: ot,
      default: lt,
      monthNames: Ve,
      monthNamesShort: Pe,
      notRated: Ue,
      productRatingTextWith1Star: st,
      productRatingTextWithStars: at,
      reviewDisclaimer: qe,
      reviewFilters: He,
      reviewUsLink: rt,
      reviews: Ke,
      starRating: Ze,
      starReview: Je,
      timeAgo: Ge,
      widgetLabel: Xe
    }, Symbol.toStringTag, {
      value: "Module"
    })),
    ct = {
      singular: "avis",
      plural: "avis",
      collectedVia: "Collecté via [source]",
      verifiedVia: "Vérifié, collecté via [source]",
      serviceReviewTypeLabels: {
        verifiedReview: {
          label: "Vérifié",
          infoTitle: "Avis vérifié",
          info: "[LINK-BEGIN]En savoir plus[LINK-END] sur les types d'avis"
        },
        invitedReview: {
          label: "Sur invitation",
          infoTitle: "Avis sur invitation",
          infoTrustpilot: "Les avis au sujet de Trustpilot accompagnés du statut [BOLD-BEGIN]Sur invitation[BOLD-END] ont été écrits via un lien direct vers notre formulaire d'évaluation.",
          info: "[LINK-BEGIN]En savoir plus[LINK-END] sur les types d'avis"
        },
        redirectedReview: {
          label: "Redirigé",
          infoTitle: "Avis redirigé",
          info: "[LINK-BEGIN]En savoir plus[LINK-END] sur les types d'avis"
        }
      },
      learnMoreLink: "Cliquez ici pour en savoir plus sur les différents types d'avis"
    },
    dt = {
      january: "janvier",
      february: "février",
      march: "mars",
      april: "avril",
      may: "mai",
      june: "juin",
      july: "juillet",
      august: "août",
      september: "septembre",
      october: "octobre",
      november: "novembre",
      december: "décembre"
    },
    vt = {
      january: "janv.",
      february: "févr.",
      march: "mars",
      april: "avr.",
      may: "mai",
      june: "juin",
      july: "juil.",
      august: "août",
      september: "sept.",
      october: "oct.",
      november: "nov.",
      december: "déc."
    },
    mt = {
      days: {
        singular: "ll y a [count] jour",
        plural: "Il y a [count] jours"
      },
      hours: {
        singular: "Il y a [count] heure",
        plural: "Il y a [count] heures"
      },
      minutes: {
        singular: "Il y a [count] minute",
        plural: "Il y a [count] minutes"
      },
      seconds: {
        singular: "Il y a [count] seconde",
        plural: "Il y a [count] secondes"
      }
    },
    pt = {
      byStars1: "Nos avis [star1] étoiles",
      byStars2: "Nos avis [star1] et [star2] étoiles",
      byStars3: "Nos avis [star1], [star2] et [star3] étoiles",
      byStars4: "Nos avis [star1], [star2], [star3] et [star4] étoiles",
      byLatest: "Nos derniers avis",
      byFavoriteOrTag: "Nos avis préférés"
    },
    gt = "Non évalué",
    ht = "[ratingStars] sur [totalStars] étoiles sur Trustpilot",
    wt = "Avis [reviewStars] étoile",
    bt = {
      body: "Trustpilot vérifie les avis",
      description: "Cliquez pour en savoir plus"
    },
    ft = "Avis Trustpilot",
    Rt = "Noté [trustScore] sur [totalScore]. [reviewCount] avis sur Trustpilot",
    Lt = "Score : [trustScoreRating]. [trustScore] sur [totalScore] surTrustpilot",
    St = "Score : [trustScoreRating]. [trustScore] sur [totalScore]. [reviewCount] avis sur Trustpilot",
    Tt = "Notre score: [trustScoreRating]. [trustScore] sur [totalScore]. Basé sur [reviewCount] avis sur Trustpilot",
    yt = "Cliquez ici pour voir le profil de l'entreprise sur Trustpilot",
    Nt = "Évaluez-nous sur Trustpilot",
    xt = "[reviewCount] avis avec [stars] étoiles",
    kt = "[reviewCount] avis avec [star] étoile",
    Ct = "Date de l'expérience : [date]",
    jt = "Date de l'achat : [DATE]",
    Et = {
      reviews: ct,
      monthNames: dt,
      monthNamesShort: vt,
      timeAgo: mt,
      reviewFilters: pt,
      notRated: gt,
      starRating: ht,
      starReview: wt,
      reviewDisclaimer: bt,
      widgetLabel: ft,
      businessRatingTextWithReviewCount: Rt,
      businessRatingTextWithTrustScoreRating: Lt,
      businessRatingTextWithTSRatingAndReviewCount: St,
      businessRatingTextWithFullDetails: Tt,
      clickProfileLink: yt,
      reviewUsLink: Nt,
      productRatingTextWithStars: xt,
      productRatingTextWith1Star: kt,
      dateOfExperience: Ct,
      dateOfPurchase: jt
    },
    It = Object.freeze(Object.defineProperty({
      __proto__: null,
      businessRatingTextWithFullDetails: Tt,
      businessRatingTextWithReviewCount: Rt,
      businessRatingTextWithTSRatingAndReviewCount: St,
      businessRatingTextWithTrustScoreRating: Lt,
      clickProfileLink: yt,
      dateOfExperience: Ct,
      dateOfPurchase: jt,
      default: Et,
      monthNames: dt,
      monthNamesShort: vt,
      notRated: gt,
      productRatingTextWith1Star: kt,
      productRatingTextWithStars: xt,
      reviewDisclaimer: bt,
      reviewFilters: pt,
      reviewUsLink: Nt,
      reviews: ct,
      starRating: ht,
      starReview: wt,
      timeAgo: mt,
      widgetLabel: ft
    }, Symbol.toStringTag, {
      value: "Module"
    })),
    Ot = {
      singular: "recensione",
      plural: "recensioni",
      collectedVia: "Raccolta tramite [source]",
      verifiedVia: "Verificata, raccolta da [source]",
      serviceReviewTypeLabels: {
        verifiedReview: {
          label: "Verificata",
          infoTitle: "Recensione verificata",
          info: "[LINK-BEGIN]Scopri di più[LINK-END] sui diversi tipi di recensioni"
        },
        invitedReview: {
          label: "Su invito",
          infoTitle: "Recensione su invito",
          infoTrustpilot: "Le recensioni a proposito di Trustpilot contrassegnate con la dicitura [BOLD-BEGIN]Su invito[BOLD-END] sono state scritte mediante un link che punta direttamente al nostro modulo di recensione.",
          info: "[LINK-BEGIN]Scopri di più[LINK-END] sui diversi tipi di recensioni"
        },
        redirectedReview: {
          label: "Reindirizzata",
          infoTitle: "Recensione reindirizzata",
          info: "[LINK-BEGIN]Scopri di più[LINK-END] sui diversi tipi di recensioni"
        }
      },
      learnMoreLink: "Clicca per saperne di più sui tipi di recensione"
    },
    zt = {
      january: "gennaio",
      february: "febbraio",
      march: "marzo",
      april: "aprile",
      may: "maggio",
      june: "giugno",
      july: "luglio",
      august: "agosto",
      september: "settembre",
      october: "ottobre",
      november: "novembre",
      december: "dicembre"
    },
    Dt = {
      january: "gen",
      february: "feb",
      march: "mar",
      april: "apr",
      may: "maggio",
      june: "giu",
      july: "lug",
      august: "ago",
      september: "set",
      october: "ott",
      november: "nov",
      december: "dic"
    },
    Wt = {
      days: {
        singular: "[count] giorno fa",
        plural: "[count] giorni fa"
      },
      hours: {
        singular: "[count] ora fa",
        plural: "[count] ore fa"
      },
      minutes: {
        singular: "[count] minuto fa",
        plural: "[count] minuti fa"
      },
      seconds: {
        singular: "[count] secondo fa",
        plural: "[count] secondi fa"
      }
    },
    Bt = {
      byStars1: "Le nostre recensioni a [star1] stelle",
      byStars2: "Le nostre recensioni a [star1] e a [star2] stelle",
      byStars3: "Le nostre recensioni a [star1], a [star2] e a [star3] stelle",
      byStars4: "Le nostre recensioni a [star1], a [star2], a [star3] e a [star4] stelle",
      byLatest: "Le nostre ultime recensioni",
      byFavoriteOrTag: "Le nostre recensioni preferite"
    },
    Mt = "Nessuna valutazione",
    At = "[ratingStars] su [totalStars] valutazioni in stelle su Trustpilot",
    $t = "Recensione a [reviewStars] stelle",
    Ft = {
      body: "Le recensioni sono controllate da Trustpilot",
      description: "Clicca per saperne di più"
    },
    _t = "Recensioni di Trustpilot",
    Kt = "Valutata [trustScore] su [totalScore]. [reviewCount] recensioni su Trustpilot",
    Vt = "Valutata [trustScoreRating]. [trustScore] su [totalScore] su Trustpilot",
    Pt = "Valutata [trustScoreRating]. [trustScore] su [totalScore]. [reviewCount] recensioni su Trustpilot",
    Gt = "I nostri clienti dicono [trustScoreRating]. [trustScore] su [totalScore]. In base alle [reviewCount] recensioni su Trustpilot",
    Ht = "Clicca per visualizzare il profilo dell'azienda su Trustpilot",
    Ut = "Scrivi una recensione su di noi su Trustpilot",
    Zt = "[reviewCount] recensioni a [stars] stelle",
    Jt = "[reviewCount] recensioni a [star] stelle",
    qt = "Esperienza del [date]",
    Xt = "Acquista il [DATE]",
    Yt = {
      reviews: Ot,
      monthNames: zt,
      monthNamesShort: Dt,
      timeAgo: Wt,
      reviewFilters: Bt,
      notRated: Mt,
      starRating: At,
      starReview: $t,
      reviewDisclaimer: Ft,
      widgetLabel: _t,
      businessRatingTextWithReviewCount: Kt,
      businessRatingTextWithTrustScoreRating: Vt,
      businessRatingTextWithTSRatingAndReviewCount: Pt,
      businessRatingTextWithFullDetails: Gt,
      clickProfileLink: Ht,
      reviewUsLink: Ut,
      productRatingTextWithStars: Zt,
      productRatingTextWith1Star: Jt,
      dateOfExperience: qt,
      dateOfPurchase: Xt
    },
    Qt = Object.freeze(Object.defineProperty({
      __proto__: null,
      businessRatingTextWithFullDetails: Gt,
      businessRatingTextWithReviewCount: Kt,
      businessRatingTextWithTSRatingAndReviewCount: Pt,
      businessRatingTextWithTrustScoreRating: Vt,
      clickProfileLink: Ht,
      dateOfExperience: qt,
      dateOfPurchase: Xt,
      default: Yt,
      monthNames: zt,
      monthNamesShort: Dt,
      notRated: Mt,
      productRatingTextWith1Star: Jt,
      productRatingTextWithStars: Zt,
      reviewDisclaimer: Ft,
      reviewFilters: Bt,
      reviewUsLink: Ut,
      reviews: Ot,
      starRating: At,
      starReview: $t,
      timeAgo: Wt,
      widgetLabel: _t
    }, Symbol.toStringTag, {
      value: "Module"
    })),
    ei = {
      singular: "レビュー",
      plural: "レビュー",
      collectedVia: "[source] によって収集",
      verifiedVia: "[source] によって確認・収集",
      serviceReviewTypeLabels: {
        verifiedReview: {
          label: "確認済み",
          infoTitle: "確認済みのレビュー",
          info: "レビューの種類についての詳細は[LINK-BEGIN]こちら[LINK-END]をご覧ください。"
        },
        invitedReview: {
          label: "手動招待",
          infoTitle: "招待によるレビュー",
          infoTrustpilot: "[BOLD-BEGIN]招待[BOLD-END]ラベルの付いたTrustpilot に関するレビューは、当社のレビューフォームへのダイレクトリンクを介して書かれたものです。",
          info: "レビューの種類についての詳細は[LINK-BEGIN]こちら[LINK-END]をご覧ください。"
        },
        redirectedReview: {
          label: "自動転送",
          infoTitle: "自動転送によるレビュー",
          info: "レビューの種類についての詳細は[LINK-BEGIN]こちら[LINK-END]をご覧ください。"
        }
      },
      learnMoreLink: "クリックして、レビューの種類について詳しく知る"
    },
    ti = {
      january: "1月",
      february: "2月",
      march: "3月",
      april: "4月",
      may: "5月",
      june: "6月",
      july: "7月",
      august: "8月",
      september: "9月",
      october: "10月",
      november: "11月",
      december: "12月"
    },
    ii = {
      january: "1月",
      february: "2月",
      march: "3月",
      april: "4月",
      may: "5月",
      june: "6月",
      july: "7月",
      august: "8月",
      september: "9月",
      october: "10月",
      november: "11月",
      december: "12月"
    },
    ri = {
      days: {
        singular: "[count]日前",
        plural: "[count]日前"
      },
      hours: {
        singular: "[count]時間前",
        plural: "[count]時間前"
      },
      minutes: {
        singular: "[count]分前",
        plural: "[count]分前"
      },
      seconds: {
        singular: "[count]秒前",
        plural: "[count]秒前"
      }
    },
    ai = {
      byStars1: "[star1]つ星のレビューを表示",
      byStars2: "[star1]つ星と[star2]つ星のレビューを表示",
      byStars3: "[star1]つ星、[star2]つ星、[star3]つ星のレビューを表示",
      byStars4: "[star1]つ星、[star2]つ星、[star3]つ星、[star4]つ星のレビューを表示",
      byLatest: "最新のレビューを表示",
      byFavoriteOrTag: "お気に入りのレビューを表示"
    },
    si = "Trustpilot上で、[totalStars]星のうち [ratingStars]星の評価",
    ni = "[reviewStars]つ星レビュー",
    oi = {
      body: "Trustpilot はレビューをチェックします",
      description: "クリックして詳細を見る"
    },
    li = "Trustpilot のレビュー",
    ui = "[totalScore]段階中の [trustScore]の評価。Trustpilot 上のレビュー [reviewCount]件",
    ci = "[trustScoreRating] の評価。Trustpilot 上で [totalScore]段階中の [trustScore]の評価",
    di = "[trustScoreRating] の評価。[totalScore]段階中の [trustScore]の評価。Trustpilot 上のレビュー [reviewCount]件",
    vi = "[trustScoreRating] の評価を得ています。[totalScore]段階中 [trustScore]の評価Trustpilot 上のレビュー [reviewCount]件に基づいています",
    mi = "クリックして、この企業のTrustpilot プロフィールを見る",
    pi = "Trustpilot上で当社のレビューを書いてください",
    gi = "[reviewCount]件の [stars]つ星レビュー",
    hi = "[reviewCount]件の [stars]つ星レビュー",
    wi = "[date] の経験",
    bi = "購入日ː [DATE]",
    fi = {
      reviews: ei,
      monthNames: ti,
      monthNamesShort: ii,
      timeAgo: ri,
      reviewFilters: ai,
      notRated: "未評価",
      starRating: si,
      starReview: ni,
      reviewDisclaimer: oi,
      widgetLabel: li,
      businessRatingTextWithReviewCount: ui,
      businessRatingTextWithTrustScoreRating: ci,
      businessRatingTextWithTSRatingAndReviewCount: di,
      businessRatingTextWithFullDetails: vi,
      clickProfileLink: mi,
      reviewUsLink: pi,
      productRatingTextWithStars: gi,
      productRatingTextWith1Star: hi,
      dateOfExperience: wi,
      dateOfPurchase: bi
    },
    Ri = Object.freeze(Object.defineProperty({
      __proto__: null,
      businessRatingTextWithFullDetails: vi,
      businessRatingTextWithReviewCount: ui,
      businessRatingTextWithTSRatingAndReviewCount: di,
      businessRatingTextWithTrustScoreRating: ci,
      clickProfileLink: mi,
      dateOfExperience: wi,
      dateOfPurchase: bi,
      default: fi,
      monthNames: ti,
      monthNamesShort: ii,
      notRated: "未評価",
      productRatingTextWith1Star: hi,
      productRatingTextWithStars: gi,
      reviewDisclaimer: oi,
      reviewFilters: ai,
      reviewUsLink: pi,
      reviews: ei,
      starRating: si,
      starReview: ni,
      timeAgo: ri,
      widgetLabel: li
    }, Symbol.toStringTag, {
      value: "Module"
    })),
    Li = {
      singular: "anmeldelse",
      plural: "anmeldelser",
      collectedVia: "Samlet inn gjennom [source]",
      verifiedVia: "Bekreftet – samlet inn via [source]",
      serviceReviewTypeLabels: {
        verifiedReview: {
          label: "Bekreftet",
          infoTitle: "Bekreftet kunde",
          info: "[LINK-BEGIN]Lær mer[LINK-END] om de ulike typene anmeldelser"
        },
        invitedReview: {
          label: "På oppfordring",
          infoTitle: "Anmeldelse skrevet på oppfordring",
          infoTrustpilot: "Anmeldelser med benevningen [BOLD-BEGIN]«På oppfordring»[BOLD-END] har blitt sendt inn via en direktekobling til anmeldelsesskjemaet på Trustpilot.",
          info: "[LINK-BEGIN]Lær mer[LINK-END] om de ulike typene anmeldelser"
        },
        redirectedReview: {
          label: "Omdirigert",
          infoTitle: "Omdirigert anmeldelse",
          info: "[LINK-BEGIN]Lær mer[LINK-END] om de ulike typene anmeldelser"
        }
      },
      learnMoreLink: "Klikk her for å lære mer om de ulike typene anmeldelser"
    },
    Si = {
      january: "januar",
      february: "februar",
      march: "mars",
      april: "april",
      may: "mai",
      june: "juni",
      july: "juli",
      august: "august",
      september: "september",
      october: "oktober",
      november: "november",
      december: "desember"
    },
    Ti = {
      january: "jan.",
      february: "feb.",
      march: "mars",
      april: "apr.",
      may: "mai",
      june: "juni",
      july: "juli",
      august: "aug.",
      september: "sep.",
      october: "okt.",
      november: "nov.",
      december: "des."
    },
    yi = {
      days: {
        singular: "For [count] dag siden",
        plural: "For [count] dager siden"
      },
      hours: {
        singular: "For [count] time siden",
        plural: "For [count] timer siden"
      },
      minutes: {
        singular: "For [count] minutt siden",
        plural: "For [count] minutter siden"
      },
      seconds: {
        singular: "For [count] sekund siden",
        plural: "For [count] sekunder siden"
      }
    },
    Ni = {
      byStars1: "Viser [star1]-stjernersanmeldelsene",
      byStars2: "Viser [star1]- og [star2]-stjernersanmeldelsene",
      byStars3: "Viser [star1]-, [star2]- og [star3]-stjernersanmeldelsene",
      byStars4: "Viser [star1]-, [star2]-, [star3]- og [star4]-stjernersanmeldelsene",
      byLatest: "Viser de nyeste anmeldelsene",
      byFavoriteOrTag: "Viser favorittene våre"
    },
    xi = "Ikke vurdert",
    ki = "[ratingStars] av [totalStars] stjerner på Trustpilot",
    Ci = "[reviewStars]-stjernersanmeldelse",
    ji = {
      body: "Trustpilot sjekker anmeldelsene",
      description: "Klikk for å finne ut mer"
    },
    Ei = "Anmeldelser på Trustpilot",
    Ii = "Rangert [trustScore] av [totalScore]. [reviewCount] anmeldelser på Trustpilot",
    Oi = "Rangert [trustScoreRating]. [trustScore] av [totalScore] på Trustpilot",
    zi = "Rangert [trustScoreRating]. [trustScore] av [totalScore]. [reviewCount] anmeldelser på Trustpilot",
    Di = "Kundene våre sier [trustScoreRating]. [trustScore] av [totalScore]. Basert på [reviewCount] anmeldelser på Trustpilot",
    Wi = "Klikk for å se firmaets profil på Trustpilot",
    Bi = "Skriv en anmeldelse av oss på Trustpilot",
    Mi = "[reviewCount] anmeldelser med [stars] stjerner",
    Ai = "[reviewCount] anmeldelser med [star] stjerne",
    $i = "Opplevelse den [date]",
    Fi = "Kjøpt den [DATE]",
    _i = {
      reviews: Li,
      monthNames: Si,
      monthNamesShort: Ti,
      timeAgo: yi,
      reviewFilters: Ni,
      notRated: xi,
      starRating: ki,
      starReview: Ci,
      reviewDisclaimer: ji,
      widgetLabel: Ei,
      businessRatingTextWithReviewCount: Ii,
      businessRatingTextWithTrustScoreRating: Oi,
      businessRatingTextWithTSRatingAndReviewCount: zi,
      businessRatingTextWithFullDetails: Di,
      clickProfileLink: Wi,
      reviewUsLink: Bi,
      productRatingTextWithStars: Mi,
      productRatingTextWith1Star: Ai,
      dateOfExperience: $i,
      dateOfPurchase: Fi
    },
    Ki = Object.freeze(Object.defineProperty({
      __proto__: null,
      businessRatingTextWithFullDetails: Di,
      businessRatingTextWithReviewCount: Ii,
      businessRatingTextWithTSRatingAndReviewCount: zi,
      businessRatingTextWithTrustScoreRating: Oi,
      clickProfileLink: Wi,
      dateOfExperience: $i,
      dateOfPurchase: Fi,
      default: _i,
      monthNames: Si,
      monthNamesShort: Ti,
      notRated: xi,
      productRatingTextWith1Star: Ai,
      productRatingTextWithStars: Mi,
      reviewDisclaimer: ji,
      reviewFilters: Ni,
      reviewUsLink: Bi,
      reviews: Li,
      starRating: ki,
      starReview: Ci,
      timeAgo: yi,
      widgetLabel: Ei
    }, Symbol.toStringTag, {
      value: "Module"
    })),
    Vi = {
      singular: "review",
      plural: "reviews",
      collectedVia: "Verzameld via [source]",
      verifiedVia: "Geverifieerd — verzameld via [source]",
      serviceReviewTypeLabels: {
        verifiedReview: {
          label: "Geverifieerd",
          infoTitle: "Geverifieerde review",
          info: "[LINK-BEGIN]Meer informatie[LINK-END] over de soorten reviews"
        },
        invitedReview: {
          label: "Op uitnodiging",
          infoTitle: "Review op uitnodiging",
          infoTrustpilot: "Reviews over Trustpilot met het label [BOLD-BEGIN]Op uitnodiging[BOLD-END] zijn ingediend via een directe link naar ons reviewformulier.",
          info: "[LINK-BEGIN]Meer informatie[LINK-END] over de soorten reviews"
        },
        redirectedReview: {
          label: "Omgeleid",
          infoTitle: "Omgeleide review",
          info: "[LINK-BEGIN]Meer informatie[LINK-END] over de soorten reviews"
        }
      },
      learnMoreLink: "Klik voor meer informatie over de soorten reviews"
    },
    Pi = {
      january: "januari",
      february: "februari",
      march: "maart",
      april: "april",
      may: "mei",
      june: "juni",
      july: "juli",
      august: "augustus",
      september: "september",
      october: "oktober",
      november: "november",
      december: "december"
    },
    Gi = {
      january: "jan",
      february: "feb",
      march: "mrt",
      april: "apr",
      may: "mei",
      june: "jun",
      july: "jul",
      august: "aug",
      september: "sep",
      october: "okt",
      november: "nov",
      december: "dec"
    },
    Hi = {
      days: {
        singular: "[count] dag geleden",
        plural: "[count] dagen geleden"
      },
      hours: {
        singular: "[count] uur geleden",
        plural: "[count] uur geleden"
      },
      minutes: {
        singular: "[count] minuut geleden",
        plural: "[count] minuten geleden"
      },
      seconds: {
        singular: "[count] seconde geleden",
        plural: "[count] seconden geleden"
      }
    },
    Ui = {
      byStars1: "Onze reviews met [star1] sterren",
      byStars2: "Onze reviews met [star1] en [star2] sterren",
      byStars3: "Onze reviews met [star1], [star2] en [star3] sterren",
      byStars4: "Onze reviews met [star1], [star2], [star3] en [star4] sterren",
      byLatest: "Onze meest recente reviews",
      byFavoriteOrTag: "Onze favoriete reviews"
    },
    Zi = "Niet beoordeeld",
    Ji = "[ratingStars] van [totalStars] sterren op Trustpilot",
    qi = "Review van [reviewStars] ster(ren)",
    Xi = {
      body: "Trustpilot controleert reviews",
      description: "Klik voor meer informatie"
    },
    Yi = "Trustpilot-reviews",
    Qi = "Beoordeeld met een [trustScore] uit [totalScore]. [reviewCount] reviews op Trustpilot",
    er = "Beoordeeld met [trustScoreRating]. [trustScore] uit [totalScore] op Trustpilot",
    tr = "Beoordeeld met [trustScoreRating]. [trustScore] uit [totalScore]. [reviewCount] reviews op Trustpilot",
    ir = "Onze klanten geven ons een [trustScoreRating]. [trustScore] uit [totalScore]. Gebaseerd op [reviewCount] reviews op Trustpilot",
    rr = "Klik om het Trustpilot-profiel van het bedrijf te bekijken",
    ar = "Beoordeel ons op Trustpilot",
    sr = "[reviewCount] reviews met [sterren] sterren",
    nr = "[reviewCount] reviews met [sterren] ster",
    or = "Ervaring op [date]",
    lr = "Aankoop op [DATE]",
    ur = {
      reviews: Vi,
      monthNames: Pi,
      monthNamesShort: Gi,
      timeAgo: Hi,
      reviewFilters: Ui,
      notRated: Zi,
      starRating: Ji,
      starReview: qi,
      reviewDisclaimer: Xi,
      widgetLabel: Yi,
      businessRatingTextWithReviewCount: Qi,
      businessRatingTextWithTrustScoreRating: er,
      businessRatingTextWithTSRatingAndReviewCount: tr,
      businessRatingTextWithFullDetails: ir,
      clickProfileLink: rr,
      reviewUsLink: ar,
      productRatingTextWithStars: sr,
      productRatingTextWith1Star: nr,
      dateOfExperience: or,
      dateOfPurchase: lr
    },
    cr = Object.freeze(Object.defineProperty({
      __proto__: null,
      businessRatingTextWithFullDetails: ir,
      businessRatingTextWithReviewCount: Qi,
      businessRatingTextWithTSRatingAndReviewCount: tr,
      businessRatingTextWithTrustScoreRating: er,
      clickProfileLink: rr,
      dateOfExperience: or,
      dateOfPurchase: lr,
      default: ur,
      monthNames: Pi,
      monthNamesShort: Gi,
      notRated: Zi,
      productRatingTextWith1Star: nr,
      productRatingTextWithStars: sr,
      reviewDisclaimer: Xi,
      reviewFilters: Ui,
      reviewUsLink: ar,
      reviews: Vi,
      starRating: Ji,
      starReview: qi,
      timeAgo: Hi,
      widgetLabel: Yi
    }, Symbol.toStringTag, {
      value: "Module"
    })),
    dr = {
      singular: "recenzja",
      plural: "recenzji",
      collectedVia: "Zebrane przez [source]",
      verifiedVia: "Zweryfikowano i zebrano przez [source]",
      serviceReviewTypeLabels: {
        verifiedReview: {
          label: "Zweryfikowana",
          infoTitle: "Zweryfikowana recenzja",
          info: "[LINK-BEGIN]Dowiedz się więcej[LINK-END] o typach recenzji"
        },
        invitedReview: {
          label: "Na zaproszenie",
          infoTitle: "Rezenzja na zaproszenie",
          infoTrustpilot: "Recenzje Trustpilot oznaczone jako [BOLD-BEGIN]Na zaproszenie[BOLD-END] zostały dodane za pośrednictwem łącza prowadzącego bezpośrednio do naszego formularza recenzji.",
          info: "[LINK-BEGIN]Dowiedz się więcej[LINK-END] o typach recenzji"
        },
        redirectedReview: {
          label: "Z przekierowana",
          infoTitle: "Recenzja z przekierowana",
          info: "[LINK-BEGIN]Dowiedz się więcej[LINK-END] o typach recenzji"
        }
      },
      learnMoreLink: "Kliknij, aby dowiedzieć się więcej o typach recenzji"
    },
    vr = {
      january: "stycznia",
      february: "lutego",
      march: "marca",
      april: "kwietnia",
      may: "maja",
      june: "czerwca",
      july: "lipca",
      august: "sierpnia",
      september: "września",
      october: "października",
      november: "listopada",
      december: "grudnia"
    },
    mr = {
      january: "sty",
      february: "lut",
      march: "mar",
      april: "kwi",
      may: "maja",
      june: "cze",
      july: "lip",
      august: "sie",
      september: "wrz",
      october: "paź",
      november: "lis",
      december: "gru"
    },
    pr = {
      days: {
        singular: "[count] dzień temu",
        plural: "[count] dni temu"
      },
      hours: {
        singular: "[count] godzinę temu",
        plural: "[count] godz. temu"
      },
      minutes: {
        singular: "[count] minutę temu",
        plural: "[count] min. temu"
      },
      seconds: {
        singular: "[count] sekundę temu",
        plural: "[count] sek. temu"
      }
    },
    gr = {
      byStars1: "Wyświetlamy nasze [star1]-gwiazdkowe recenzje",
      byStars2: "Wyświetlamy nasze [star1]- i [star2]-gwiazdkowe recenzje",
      byStars3: "Wyświetlamy nasze [star1]-, [star2]- i [star3]-gwiazdkowe recenzje",
      byStars4: "Wyświetlamy nasze [star1]-, [star2]-, [star3]- i [star4]-gwiazdkowe recenzje",
      byLatest: "Wyświetlamy najnowsze recenzje",
      byFavoriteOrTag: "Wyświetlamy nasze ulubione recenzje"
    },
    hr = "Brak oceny",
    wr = "[ratingStars] z [totalStars] oceny w skali gwiazdkowej na Trustpilot",
    br = "Recenzja gwiazdkowa [reviewStars]",
    fr = {
      body: "Trustpilot weryfikuje opinie",
      description: "Kliknij, aby dowiedzieć się więcej"
    },
    Rr = "Recenzje Trustpilota",
    Lr = "Ocena [trustScore] na [totalScore]. Liczba recenzji na Trustpilot: [reviewCount]",
    Sr = "Ocena [trustScoreRating]. [trustScore] na [totalScore] w serwisie Trustpilot",
    Tr = "Ocena [trustScoreRating]. [trustScore] na [totalScore]. Liczba recenzji na Trustpilot: [reviewCount]",
    yr = "Ocena naszych klientów wynosi [trustScoreRating]. [trustScore] na [totalScore]. Na podstawie [reviewCount] recenzji na Trustpilot",
    Nr = "Kliknij, aby zobaczyć profil firmy w serwisie Trustpilot",
    xr = "Wystaw recenzję na portalu Trustpilot",
    kr = "[reviewCount] - liczba recenzji z [stars] - liczba gwiazdek",
    Cr = "[reviewCount] - liczba recenzji z [gwiazdką] gwiazdką",
    jr = "Doświadczenie z dnia [date]",
    Er = "Zakupiono dnia [DATE]",
    Ir = {
      reviews: dr,
      monthNames: vr,
      monthNamesShort: mr,
      timeAgo: pr,
      reviewFilters: gr,
      notRated: hr,
      starRating: wr,
      starReview: br,
      reviewDisclaimer: fr,
      widgetLabel: Rr,
      businessRatingTextWithReviewCount: Lr,
      businessRatingTextWithTrustScoreRating: Sr,
      businessRatingTextWithTSRatingAndReviewCount: Tr,
      businessRatingTextWithFullDetails: yr,
      clickProfileLink: Nr,
      reviewUsLink: xr,
      productRatingTextWithStars: kr,
      productRatingTextWith1Star: Cr,
      dateOfExperience: jr,
      dateOfPurchase: Er
    },
    Or = {
      singular: "avaliação",
      plural: "avaliações",
      collectedVia: "Recolhida via [source]",
      verifiedVia: "Verificada, recolhida via [source]",
      serviceReviewTypeLabels: {
        verifiedReview: {
          label: "Verificada",
          infoTitle: "Avaliação verificada",
          info: "[LINK-BEGIN]Saiba mais[LINK-END] sobre os diferentes tipos de avaliação"
        },
        invitedReview: {
          label: "Por convite",
          infoTitle: "Avaliação por convite",
          infoTrustpilot: "As avaliações da Trustpilot marcadas como [BOLD-BEGIN]Por convite[BOLD-END] foram deixadas utilizando um link direto para o nosso formulário de avaliação.",
          info: "[LINK-BEGIN]Saiba mais[LINK-END] sobre os diferentes tipos de avaliação"
        },
        redirectedReview: {
          label: "Redirecionada",
          infoTitle: "Avaliação redirecionada",
          info: "[LINK-BEGIN]Saiba mais[LINK-END] sobre os diferentes tipos de avaliação"
        }
      },
      learnMoreLink: "Clique para saber mais sobre os tipos de avaliação"
    },
    zr = {
      january: "Janeiro",
      february: "Fevereiro",
      march: "Março",
      april: "Abril",
      may: "Maio",
      june: "Junho",
      july: "Julho",
      august: "Agosto",
      september: "Setembro",
      october: "Outubro",
      november: "Novembro",
      december: "Dezembro"
    },
    Dr = {
      january: "jan.",
      february: "fev.",
      march: "mar.",
      april: "abr.",
      may: "Maio",
      june: "jun.",
      july: "jul.",
      august: "ago.",
      september: "set.",
      october: "out.",
      november: "nov.",
      december: "dez."
    },
    Wr = {
      days: {
        singular: "há [count] dia",
        plural: "há [count] dias"
      },
      hours: {
        singular: "há [count] hora",
        plural: "há [count] horas"
      },
      minutes: {
        singular: "há [count] minuto",
        plural: "há [count] minutos"
      },
      seconds: {
        singular: "há [count] segundo",
        plural: "há [count] segundos"
      }
    },
    Br = {
      byStars1: "Nossas avaliações com [star1] estrela(s)",
      byStars2: "Nossas avaliações com [star1] & [star2] estrelas",
      byStars3: "Nossas avaliações com [star1], [star2] & [star3] estrelas",
      byStars4: "Nossas avaliações com [star1], [star2], [star3] & [star4] estrelas",
      byLatest: "Mostrando nossas avaliações mais recentes",
      byFavoriteOrTag: "Mostrando nossas avaliações favoritas"
    },
    Mr = "Sem classificação",
    Ar = "[ratingStars] de [totalStars] estrelas na Trustpilot",
    $r = "Avaliação de [reviewStars] estrela(s)",
    Fr = {
      body: "A Trustpilot verifica as avaliações",
      description: "Clique para saber mais"
    },
    _r = "Avaliações na Trustpilot",
    Kr = "Avaliado com [trustScore] de um total de [totalScore]. [reviewCount] avaliações na Trustpilot",
    Vr = "Classificado como [trustScoreRating]. [trustScore] de um total de [totalScore] na Trustpilot",
    Pr = "Classificado como [trustScoreRating]. [trustScore] de um total de [totalScore]. [reviewCount] avaliações na Trustpilot",
    Gr = "A classificação dos nossos clientes é de [trustScoreRating]. [trustScore] de um total de [totalScore]. Baseado em [reviewCount] opinião(ões) no Trustpilot",
    Hr = "Clique para ver o perfil da empresa na Trustpilot",
    Ur = "Nos avalie na Trustpilot",
    Zr = "[reviewCount] avaliações com [stars] estrelas",
    Jr = "[reviewCount] avaliações com [star] estrela",
    qr = "Experiência em [date]",
    Xr = "Compra em [DATE]",
    Yr = {
      reviews: Or,
      monthNames: zr,
      monthNamesShort: Dr,
      timeAgo: Wr,
      reviewFilters: Br,
      notRated: Mr,
      starRating: Ar,
      starReview: $r,
      reviewDisclaimer: Fr,
      widgetLabel: _r,
      businessRatingTextWithReviewCount: Kr,
      businessRatingTextWithTrustScoreRating: Vr,
      businessRatingTextWithTSRatingAndReviewCount: Pr,
      businessRatingTextWithFullDetails: Gr,
      clickProfileLink: Hr,
      reviewUsLink: Ur,
      productRatingTextWithStars: Zr,
      productRatingTextWith1Star: Jr,
      dateOfExperience: qr,
      dateOfPurchase: Xr
    },
    Qr = {
      singular: "opinião",
      plural: "opiniões",
      collectedVia: "Recolhida via [source]",
      verifiedVia: "Verificada, recolhida via [source]",
      serviceReviewTypeLabels: {
        verifiedReview: {
          label: "Verificada",
          infoTitle: "Opinião verificada",
          info: "[LINK-BEGIN]Saiba mais[LINK-END] sobre os diferentes tipos de opiniões"
        },
        invitedReview: {
          label: "Por convite",
          infoTitle: "Opinião por convite",
          infoTrustpilot: "As opiniões da Trustpilot marcadas como [BOLD-BEGIN]Por convite[BOLD-END] foram escritas utilizando um link directo para o nosso formulário de avaliação.",
          info: "[LINK-BEGIN]Saiba mais[LINK-END] sobre os diferentes tipos de opiniões"
        },
        redirectedReview: {
          label: "Redireccionada",
          infoTitle: "Opinião redireccionada",
          info: "[LINK-BEGIN]Saiba mais[LINK-END] sobre os diferentes tipos de opiniões"
        }
      },
      learnMoreLink: "Clique para saber mais sobre os diferentes tipos de opinião"
    },
    ea = {
      january: "Janeiro",
      february: "Fevereiro",
      march: "Março",
      april: "Abril",
      may: "Maio",
      june: "Junho",
      july: "Julho",
      august: "Agosto",
      september: "Setembro",
      october: "Outubro",
      november: "Novembro",
      december: "Dezembro"
    },
    ta = {
      january: "jan.",
      february: "fev.",
      march: "mar.",
      april: "abr.",
      may: "Maio",
      june: "jun.",
      july: "jul.",
      august: "ago.",
      september: "set.",
      october: "out.",
      november: "nov.",
      december: "dez."
    },
    ia = {
      days: {
        singular: "há [count] dia",
        plural: "há [count] dias"
      },
      hours: {
        singular: "há [count] hora",
        plural: "há [count] horas"
      },
      minutes: {
        singular: "há [count] minuto",
        plural: "há [count] minutos"
      },
      seconds: {
        singular: "há [count] segundo",
        plural: "há [count] segundos"
      }
    },
    ra = {
      byStars1: "As nossas opiniões com [star1] estrela(s)",
      byStars2: "As nossas opiniões com [star1] e [star2] estrelas",
      byStars3: "As nossas opiniões com [star1], [star2] e [star3] estrelas",
      byStars4: "As nossas opiniões com [star1], [star2], [star3] e [star4] estrelas",
      byLatest: "As nossas opiniões mais recentes",
      byFavoriteOrTag: "As nossas opiniões favoritas"
    },
    aa = "Sem classificação",
    sa = "[ratingStars] de [totalStars] estrelas na Trustpilot",
    na = "Opinião de [reviewStars] estrela(s)",
    oa = {
      body: "A Trustpilot verifica as opiniões",
      description: "Clique para saber mais"
    },
    la = "Avaliações do Trustpilot",
    ua = "Classificação de [trustScore] em [totalScore]. [reviewCount] avaliação(ões) no Trustpilot",
    ca = "Classificação de [trustScoreRating]. [trustScore] em [totalScore] no Trustpilot",
    da = "Classificação de [trustScoreRating]. [trustScore] em [totalScore]. [reviewCount] avaliação(ões) no Trustpilot",
    va = "Os nossos clientes dizem [trustScoreRating]. [trustScore] em [totalScore]. Baseado em [reviewCount] opinião(ões) no Trustpilot",
    ma = "Clique para ver o perfil do Trustpilot da empresa",
    pa = "Escreva uma opinião sobre nós na Trustpilot",
    ga = "[reviewCount] avaliação(ões) de [stars] estrelas",
    ha = "[reviewCount] avaliação(ões) de [star] estrela",
    wa = "Experiência em [date]",
    ba = "Compra a [DATE]",
    fa = {
      reviews: Qr,
      monthNames: ea,
      monthNamesShort: ta,
      timeAgo: ia,
      reviewFilters: ra,
      notRated: aa,
      starRating: sa,
      starReview: na,
      reviewDisclaimer: oa,
      widgetLabel: la,
      businessRatingTextWithReviewCount: ua,
      businessRatingTextWithTrustScoreRating: ca,
      businessRatingTextWithTSRatingAndReviewCount: da,
      businessRatingTextWithFullDetails: va,
      clickProfileLink: ma,
      reviewUsLink: pa,
      productRatingTextWithStars: ga,
      productRatingTextWith1Star: ha,
      dateOfExperience: wa,
      dateOfPurchase: ba
    },
    Ra = {
      singular: "omdöme",
      plural: "omdömen",
      collectedVia: "Insamlat via [source]",
      verifiedVia: "Verifierat – insamlat via [source]",
      serviceReviewTypeLabels: {
        verifiedReview: {
          label: "Verifierat",
          infoTitle: "Verifierat omdöme",
          info: "[LINK-BEGIN]Läs mer[LINK-END] om olika typer av omdömen"
        },
        invitedReview: {
          label: "Med inbjudan",
          infoTitle: "Omdöme skrivet efter inbjudan",
          infoTrustpilot: "Omdömen med etiketten [BOLD-BEGIN]Med inbjudan[BOLD-END] har skrivits av personer som har hittat vårt omdömesformulär via en direktlänk.",
          info: "[LINK-BEGIN]Läs mer[LINK-END] om olika typer av omdömen"
        },
        redirectedReview: {
          label: "Omdirigerat",
          infoTitle: "Omdirigerat omdöme",
          info: "[LINK-BEGIN]Läs mer[LINK-END] om olika typer av omdömen"
        }
      },
      learnMoreLink: "Klicka för att läsa mer om olika typer av omdömen"
    },
    La = {
      january: "januari",
      february: "februari",
      march: "mars",
      april: "april",
      may: "maj",
      june: "juni",
      july: "juli",
      august: "augusti",
      september: "september",
      october: "oktober",
      november: "november",
      december: "december"
    },
    Sa = {
      january: "jan.",
      february: "feb.",
      march: "mars",
      april: "apr.",
      may: "maj",
      june: "juni",
      july: "juli",
      august: "aug.",
      september: "sep.",
      october: "okt.",
      november: "nov.",
      december: "dec."
    },
    Ta = {
      days: {
        singular: "[count] dag sedan",
        plural: "[count] dagar sedan"
      },
      hours: {
        singular: "[count] timme sedan",
        plural: "[count] timmar sedan"
      },
      minutes: {
        singular: "[count] minut sedan",
        plural: "[count] minuter sedan"
      },
      seconds: {
        singular: "[count] sekund sedan",
        plural: "[count] sekunder sedan"
      }
    },
    ya = {
      byStars1: "Visar våra [star1]-stjärniga omdömen",
      byStars2: "Visar våra [star1]- och [star2]-stjärniga omdömen",
      byStars3: "Visar våra [star1]-, [star2]- och [star3]-stjärniga omdömen",
      byStars4: "Visar våra [star1]-, [star2]-, [star3]- och [star4]-stjärniga omdömen",
      byLatest: "Visar våra senaste omdömen",
      byFavoriteOrTag: "Visar våra favoritomdömen"
    },
    Na = "Ej betygsatt",
    xa = "[ratingStars] av [totalStars] stjärnor på Trustpilot",
    ka = "[reviewStars]-stjärnigt omdöme",
    Ca = {
      body: "Trustpilot kontrollerar omdömen",
      description: "Klicka för att läsa mer"
    },
    ja = "Trustpilot-omdömen",
    Ea = "Betyg [trustScore] av [totalScore]. [reviewCount] recensioner på Trustpilot",
    Ia = "Betyg [trustScoreRating]. [trustScore] av [totalScore] på Trustpilot",
    Oa = "Betyg [trustScoreRating]. [trustScore] av [totalScore]. [reviewCount] recensioner på Trustpilot",
    za = "Våra kunder säger [trustScoreRating]. [trustScore] av [totalScore]. Baserat på [reviewCount] omdömen på Trustpilot",
    Da = "Klicka för att se företagets Trustpilot-profil",
    Wa = "Lämna ett omdöme om oss på Trustpilot",
    Ba = "[reviewCount] recensioner med [stars] stjärnor",
    Ma = "[reviewCount] recensioner med [star] stjärna",
    Aa = "Upplevelsen ägde rum den [date]",
    $a = "Köptes den [DATE]",
    Fa = {
      reviews: Ra,
      monthNames: La,
      monthNamesShort: Sa,
      timeAgo: Ta,
      reviewFilters: ya,
      notRated: Na,
      starRating: xa,
      starReview: ka,
      reviewDisclaimer: Ca,
      widgetLabel: ja,
      businessRatingTextWithReviewCount: Ea,
      businessRatingTextWithTrustScoreRating: Ia,
      businessRatingTextWithTSRatingAndReviewCount: Oa,
      businessRatingTextWithFullDetails: za,
      clickProfileLink: Da,
      reviewUsLink: Wa,
      productRatingTextWithStars: Ba,
      productRatingTextWith1Star: Ma,
      dateOfExperience: Aa,
      dateOfPurchase: $a
    },
    _a = {
      "da-DK": k,
      "de-AT": J,
      "de-CH": J,
      "de-DE": J,
      "en-AU": fe,
      "en-CA": fe,
      "en-GB": fe,
      "en-IE": fe,
      "en-NZ": fe,
      "en-US": fe,
      "es-ES": _e,
      "fi-FI": ut,
      "fr-BE": It,
      "fr-FR": It,
      "it-IT": Qt,
      "ja-JP": Ri,
      "nb-NO": Ki,
      "nl-BE": cr,
      "nl-NL": cr,
      "pl-PL": Object.freeze(Object.defineProperty({
        __proto__: null,
        businessRatingTextWithFullDetails: yr,
        businessRatingTextWithReviewCount: Lr,
        businessRatingTextWithTSRatingAndReviewCount: Tr,
        businessRatingTextWithTrustScoreRating: Sr,
        clickProfileLink: Nr,
        dateOfExperience: jr,
        dateOfPurchase: Er,
        default: Ir,
        monthNames: vr,
        monthNamesShort: mr,
        notRated: hr,
        productRatingTextWith1Star: Cr,
        productRatingTextWithStars: kr,
        reviewDisclaimer: fr,
        reviewFilters: gr,
        reviewUsLink: xr,
        reviews: dr,
        starRating: wr,
        starReview: br,
        timeAgo: pr,
        widgetLabel: Rr
      }, Symbol.toStringTag, {
        value: "Module"
      })),
      "pt-BR": Object.freeze(Object.defineProperty({
        __proto__: null,
        businessRatingTextWithFullDetails: Gr,
        businessRatingTextWithReviewCount: Kr,
        businessRatingTextWithTSRatingAndReviewCount: Pr,
        businessRatingTextWithTrustScoreRating: Vr,
        clickProfileLink: Hr,
        dateOfExperience: qr,
        dateOfPurchase: Xr,
        default: Yr,
        monthNames: zr,
        monthNamesShort: Dr,
        notRated: Mr,
        productRatingTextWith1Star: Jr,
        productRatingTextWithStars: Zr,
        reviewDisclaimer: Fr,
        reviewFilters: Br,
        reviewUsLink: Ur,
        reviews: Or,
        starRating: Ar,
        starReview: $r,
        timeAgo: Wr,
        widgetLabel: _r
      }, Symbol.toStringTag, {
        value: "Module"
      })),
      "pt-PT": Object.freeze(Object.defineProperty({
        __proto__: null,
        businessRatingTextWithFullDetails: va,
        businessRatingTextWithReviewCount: ua,
        businessRatingTextWithTSRatingAndReviewCount: da,
        businessRatingTextWithTrustScoreRating: ca,
        clickProfileLink: ma,
        dateOfExperience: wa,
        dateOfPurchase: ba,
        default: fa,
        monthNames: ea,
        monthNamesShort: ta,
        notRated: aa,
        productRatingTextWith1Star: ha,
        productRatingTextWithStars: ga,
        reviewDisclaimer: oa,
        reviewFilters: ra,
        reviewUsLink: pa,
        reviews: Qr,
        starRating: sa,
        starReview: na,
        timeAgo: ia,
        widgetLabel: la
      }, Symbol.toStringTag, {
        value: "Module"
      })),
      "ru-RU": fe,
      "sv-SE": Object.freeze(Object.defineProperty({
        __proto__: null,
        businessRatingTextWithFullDetails: za,
        businessRatingTextWithReviewCount: Ea,
        businessRatingTextWithTSRatingAndReviewCount: Oa,
        businessRatingTextWithTrustScoreRating: Ia,
        clickProfileLink: Da,
        dateOfExperience: Aa,
        dateOfPurchase: $a,
        default: Fa,
        monthNames: La,
        monthNamesShort: Sa,
        notRated: Na,
        productRatingTextWith1Star: Ma,
        productRatingTextWithStars: Ba,
        reviewDisclaimer: Ca,
        reviewFilters: ya,
        reviewUsLink: Wa,
        reviews: Ra,
        starRating: xa,
        starReview: ka,
        timeAgo: Ta,
        widgetLabel: ja
      }, Symbol.toStringTag, {
        value: "Module"
      })),
      "zh-CN": fe
    },
    Ka = "en-US",
    Va = {
      da: "DK",
      en: "US",
      ja: "JP",
      nb: "NO",
      sv: "SE"
    },
    Pa = e => {
      if (!e) return Ka;
      const t = e.split("-"),
        i = t[0];
      let r = t[1];
      return r || (r = (e => Va[e] || e)(i)), i && r ? `${i}-${r.toUpperCase()}` : Ka
    },
    Ga = (e, t) => e.reduce((e, t) => e?.[t], t),
    Ha = (e, t = Ka, i = {}, r = []) => {
      const a = ((e, t) => {
          const i = e.split(".");
          return Ga(i, t) || Ga(i, _a[Ka])
        })(e, _a[Pa(t)] || _a[Ka]),
        s = Object.keys(i).reduce((e, t) => e.replace(t, i[t]), a);
      return r.reduce((e, t) => e.replace("[LINK-END]", "</a>").replace("[LINK-BEGIN]", t), s)
    };

  function Ua(e, t, i) {
    e && (e.addEventListener ? e.addEventListener(t, i) : e.attachEvent(`on${t}`, function(t) {
      (t = t || window.event).preventDefault = t.preventDefault || function() {
        t.returnValue = 0
      }, t.stopPropagation = t.stopPropagation || function() {
        t.cancelBubble = 1
      }, i.call(e, t)
    }))
  }
  const Za = e => ("string" == typeof e && (e = (e = (e = e.replaceAll(">", "")).replaceAll("<", "")).replaceAll('"', "")), e),
    Ja = e => "string" != typeof e ? e : e.replace(/(<\/?(?:p|b|i|li|ul|a|strong)\/?>)|(?:<\/?.*?\/?>)/gi, "$1");

  function qa(e, t, i = 1) {
    e && (e.innerHTML = i ? Ja(t) : t)
  }

  function Xa(e, t) {
    return t ? Object.keys(e).reduce((t, i) => t.split(i).join(e[i]), t) : ""
  }

  function Ya(e) {
    if (e && e.parentNode) return e.parentNode.removeChild(e)
  }
  const Qa = (e, t) => {
      const i = e => e > 255 ? 255 : e < 0 ? 0 : e;
      let r = 0;
      "#" === e[0] && (e = e.slice(1), r = 1);
      const a = parseInt(e, 16);
      if (!a) return e;
      let s = (a >> 16) + t;
      s = i(s);
      let n = (a >> 8 & 255) + t;
      n = i(n);
      let o = (255 & a) + t;
      return o = i(o), [s, n, o] = [s, n, o].map(e => e <= 15 ? `0${e.toString(16)}` : e.toString(16)), (r ? "#" : "") + s + n + o
    },
    es = e => "string" == typeof e && /^#(?:[\da-fA-F]{3}){1,2}$/.test(e) ? e : null;

  function ts() {
    const e = navigator.userAgent.toLowerCase();
    return -1 !== e.indexOf("msie") ? parseInt(e.split("msie")[1]) : 0
  }

  function is(e) {
    try {
      return JSON.parse(e.responseText)
    } catch (t) {
      return e.responseText
    }
  }

  function rs() {}

  function as(e) {
    const t = {
      type: e.type || "GET",
      error: e.error || rs,
      success: e.success || rs,
      data: e.data,
      url: e.url || ""
    };
    "GET" === t.type && t.data && (t.url = `${t.url}?${function(e){const t=[];for(const i in e)e.hasOwnProperty(i)&&t.push(`${encodeURIComponent(i)}=${encodeURIComponent(e[i])}`);return t.join("&")}(t.data)}`, delete t.data), ts() && ts() <= 9 ? function(e) {
      const t = new window.XDomainRequest,
        i = window.location.protocol;
      e.url = e.url.replace(/https?:/, i), t.open(e.type, e.url), t.onload = function() {
        e.success(is(t))
      }, t.onerror = function() {
        e.error(is(t))
      }, setTimeout(function() {
        t.send(e.data)
      }, 0)
    }(t) : function(e) {
      const t = new(window.XMLHttpRequest || ActiveXObject)("MSXML2.XMLHTTP.3.0");
      t.open(e.type, e.url, 1), t.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), t.onreadystatechange = function() {
        4 === t.readyState && (t.status >= 200 && t.status < 300 ? e.success(is(t)) : e.error(is(t)))
      }, t.send(e.data)
    }(t)
  }

  function ss(e, {
    session: t,
    testId: r,
    sessionExpiry: a
  }) {
    const {
      group: s,
      businessunitId: n
    } = i();
    if (s && a) {
      const e = {
        group: s,
        session: t,
        testId: r
      };
      ! function(e, t, i) {
        const r = "path=/",
          a = `domain=${window.location.hostname.replace(/^.*\.([^.]+\.[^.]+)/,"$1")}`,
          s = "samesite=none",
          n = "secure";
        document.cookie = [`${e}=${t}`, r, i, a, s, n].join("; "), document.cookie = [`${e}-legacy=${t}`, r, i, a].join("; ")
      }(`TrustboxSplitTest_${n}`, encodeURIComponent(JSON.stringify(e)), a)
    }
  }

  function ns(e, t) {
    ss(0, t);
    const a = function(e, t) {
      const {
        anonymousId: a,
        sessionExpiry: s,
        ...n
      } = t, {
        businessunitId: o,
        templateId: l,
        ...u
      } = i(), c = {
        ...u,
        ...n,
        ...u.group && a ? {
          userId: a
        } : {
          nosettings: 1
        },
        businessUnitId: o,
        widgetId: l
      }, d = Object.keys(c).map(e => `${e}=${encodeURIComponent(c[e])}`).join("&");
      return `${r()}/stats/${e}?${d}`
    }(e, t);
    try {
      as({
        url: a
      })
    } catch (e) {}
  }
  let os = null;
  const ls = window.parent,
    us = [];
  let cs = null;
  const ds = [];

  function vs(e) {
    cs ? (e.widgetId = cs, e = JSON.stringify(e), ls.postMessage(e, "*")) : us.push(e)
  }

  function ms(e) {
    var t;
    (t = "popup", (e, i = {}) => vs({
      ...i,
      message: e,
      command: "message",
      name: t
    }))("API data", e)
  }

  function ps(e) {
    ds.push(e)
  }
  Ua(window, "message", function(e) {
    if ("string" != typeof e.data) return;
    let t;
    try {
      t = {
        data: JSON.parse(e.data)
      }
    } catch (e) {
      return
    }
    if ("setId" === t.data.command) cs = t.data.widgetId,
      function() {
        for (; us.length;) vs(us.pop())
      }();
    else
      for (let e = 0; e < ds.length; e++) {
        (0, ds[e])(t)
      }
  });
  const gs = e => {
      const t = `trustpilotLogo-${Math.random().toString(36).substring(2)}`;
      return `\n    <svg role="img" viewBox="0 0 ${e.width} ${e.height}" aria-labelledby="${t}"  width="${e.width}" height="${e.height}" xmlns="http://www.w3.org/2000/svg" style="position: absolute; height: 100%; width: 100%; left: 0; top: 0;">\n      <title id="${t}">Trustpilot</title>\n      <path class="tp-logo__text" d="M33.074774 11.07005H45.81806v2.364196h-5.010656v13.290316h-2.755306V13.434246h-4.988435V11.07005h.01111zm12.198892 4.319629h2.355341v2.187433h.04444c.077771-.309334.222203-.60762.433295-.894859.211092-.287239.466624-.56343.766597-.79543.299972-.243048.633276-.430858.999909-.585525.366633-.14362.744377-.220953 1.12212-.220953.288863 0 .499955.011047.611056.022095.1111.011048.222202.033143.344413.04419v2.408387c-.177762-.033143-.355523-.055238-.544395-.077333-.188872-.022096-.366633-.033143-.544395-.033143-.422184 0-.822148.08838-1.199891.254096-.377744.165714-.699936.41981-.977689.740192-.277753.331429-.499955.729144-.666606 1.21524-.166652.486097-.244422 1.03848-.244422 1.668195v5.39125h-2.510883V15.38968h.01111zm18.220567 11.334883H61.02779v-1.579813h-.04444c-.311083.574477-.766597 1.02743-1.377653 1.369908-.611055.342477-1.233221.51924-1.866497.51924-1.499864 0-2.588654-.364573-3.25526-1.104765-.666606-.740193-.999909-1.856005-.999909-3.347437V15.38968h2.510883v6.948968c0 .994288.188872 1.701337.577725 2.1101.377744.408763.922139.618668 1.610965.618668.533285 0 .96658-.077333 1.322102-.243048.355524-.165714.644386-.37562.855478-.65181.222202-.265144.377744-.596574.477735-.972194.09999-.37562.144431-.784382.144431-1.226288v-6.573349h2.510883v11.323836zm4.27739-3.634675c.07777.729144.355522 1.237336.833257 1.535623.488844.287238 1.06657.441905 1.744286.441905.233312 0 .499954-.022095.799927-.055238.299973-.033143.588836-.110476.844368-.209905.266642-.099429.477734-.254096.655496-.452954.166652-.198857.244422-.452953.233312-.773335-.01111-.320381-.133321-.585525-.355523-.784382-.222202-.209906-.499955-.364573-.844368-.497144-.344413-.121525-.733267-.232-1.17767-.320382-.444405-.088381-.888809-.18781-1.344323-.287239-.466624-.099429-.922138-.232-1.355432-.37562-.433294-.14362-.822148-.342477-1.166561-.596573-.344413-.243048-.622166-.56343-.822148-.950097-.211092-.386668-.311083-.861716-.311083-1.436194 0-.618668.155542-1.12686.455515-1.54667.299972-.41981.688826-.75124 1.14434-1.005336.466624-.254095.97769-.430858 1.544304-.541334.566615-.099429 1.11101-.154667 1.622075-.154667.588836 0 1.15545.066286 1.688736.18781.533285.121524 1.02213.320381 1.455423.60762.433294.276191.788817.640764 1.07768 1.08267.288863.441905.466624.98324.544395 1.612955h-2.621984c-.122211-.596572-.388854-1.005335-.822148-1.204193-.433294-.209905-.933248-.309334-1.488753-.309334-.177762 0-.388854.011048-.633276.04419-.244422.033144-.466624.088382-.688826.165715-.211092.077334-.388854.198858-.544395.353525-.144432.154667-.222203.353525-.222203.60762 0 .309335.111101.552383.322193.740193.211092.18781.488845.342477.833258.475048.344413.121524.733267.232 1.177671.320382.444404.088381.899918.18781 1.366542.287239.455515.099429.899919.232 1.344323.37562.444404.14362.833257.342477 1.17767.596573.344414.254095.622166.56343.833258.93905.211092.37562.322193.850668.322193 1.40305 0 .673906-.155541 1.237336-.466624 1.712385-.311083.464001-.711047.850669-1.199891 1.137907-.488845.28724-1.04435.508192-1.644295.640764-.599946.132572-1.199891.198857-1.788727.198857-.722156 0-1.388762-.077333-1.999818-.243048-.611056-.165714-1.14434-.408763-1.588745-.729144-.444404-.33143-.799927-.740192-1.05546-1.226289-.255532-.486096-.388853-1.071621-.411073-1.745528h2.533103v-.022095zm8.288135-7.700208h1.899828v-3.402675h2.510883v3.402675h2.26646v1.867052h-2.26646v6.054109c0 .265143.01111.486096.03333.684954.02222.18781.07777.353524.155542.486096.07777.132572.199981.232.366633.298287.166651.066285.377743.099428.666606.099428.177762 0 .355523 0 .533285-.011047.177762-.011048.355523-.033143.533285-.077334v1.933338c-.277753.033143-.555505.055238-.811038.088381-.266642.033143-.533285.04419-.811037.04419-.666606 0-1.199891-.066285-1.599855-.18781-.399963-.121523-.722156-.309333-.944358-.552381-.233313-.243049-.377744-.541335-.466625-.905907-.07777-.364573-.13332-.784383-.144431-1.248384v-6.683825h-1.899827v-1.889147h-.02222zm8.454788 0h2.377562V16.9253h.04444c.355523-.662858.844368-1.12686 1.477644-1.414098.633276-.287239 1.310992-.430858 2.055369-.430858.899918 0 1.677625.154667 2.344231.475048.666606.309335 1.222111.740193 1.666515 1.292575.444405.552382.766597 1.193145.9888 1.92229.222202.729145.333303 1.513527.333303 2.3421 0 .762288-.099991 1.50248-.299973 2.20953-.199982.718096-.499955 1.347812-.899918 1.900194-.399964.552383-.911029.98324-1.533194 1.31467-.622166.33143-1.344323.497144-2.18869.497144-.366634 0-.733267-.033143-1.0999-.099429-.366634-.066286-.722157-.176762-1.05546-.320381-.333303-.14362-.655496-.33143-.933249-.56343-.288863-.232-.522175-.497144-.722157-.79543h-.04444v5.656393h-2.510883V15.38968zm8.77698 5.67849c0-.508193-.06666-1.005337-.199981-1.491433-.133321-.486096-.333303-.905907-.599946-1.281527-.266642-.37562-.599945-.673906-.988799-.894859-.399963-.220953-.855478-.342477-1.366542-.342477-1.05546 0-1.855387.364572-2.388672 1.093717-.533285.729144-.799928 1.701337-.799928 2.916578 0 .574478.066661 1.104764.211092 1.59086.144432.486097.344414.905908.633276 1.259432.277753.353525.611056.629716.99991.828574.388853.209905.844367.309334 1.355432.309334.577725 0 1.05546-.121524 1.455423-.353525.399964-.232.722157-.541335.97769-.905907.255531-.37562.444403-.79543.555504-1.270479.099991-.475049.155542-.961145.155542-1.458289zm4.432931-9.99812h2.510883v2.364197h-2.510883V11.07005zm0 4.31963h2.510883v11.334883h-2.510883V15.389679zm4.755124-4.31963h2.510883v15.654513h-2.510883V11.07005zm10.210184 15.963847c-.911029 0-1.722066-.154667-2.433113-.452953-.711046-.298287-1.310992-.718097-1.810946-1.237337-.488845-.530287-.866588-1.160002-1.12212-1.889147-.255533-.729144-.388854-1.535622-.388854-2.408386 0-.861716.133321-1.657147.388853-2.386291.255533-.729145.633276-1.35886 1.12212-1.889148.488845-.530287 1.0999-.93905 1.810947-1.237336.711047-.298286 1.522084-.452953 2.433113-.452953.911028 0 1.722066.154667 2.433112.452953.711047.298287 1.310992.718097 1.810947 1.237336.488844.530287.866588 1.160003 1.12212 1.889148.255532.729144.388854 1.524575.388854 2.38629 0 .872765-.133322 1.679243-.388854 2.408387-.255532.729145-.633276 1.35886-1.12212 1.889147-.488845.530287-1.0999.93905-1.810947 1.237337-.711046.298286-1.522084.452953-2.433112.452953zm0-1.977528c.555505 0 1.04435-.121524 1.455423-.353525.411074-.232.744377-.541335 1.01102-.916954.266642-.37562.455513-.806478.588835-1.281527.12221-.475049.188872-.961145.188872-1.45829 0-.486096-.066661-.961144-.188872-1.44724-.122211-.486097-.322193-.905907-.588836-1.281527-.266642-.37562-.599945-.673907-1.011019-.905907-.411074-.232-.899918-.353525-1.455423-.353525-.555505 0-1.04435.121524-1.455424.353525-.411073.232-.744376.541334-1.011019.905907-.266642.37562-.455514.79543-.588835 1.281526-.122211.486097-.188872.961145-.188872 1.447242 0 .497144.06666.98324.188872 1.458289.12221.475049.322193.905907.588835 1.281527.266643.37562.599946.684954 1.01102.916954.411073.243048.899918.353525 1.455423.353525zm6.4883-9.66669h1.899827v-3.402674h2.510883v3.402675h2.26646v1.867052h-2.26646v6.054109c0 .265143.01111.486096.03333.684954.02222.18781.07777.353524.155541.486096.077771.132572.199982.232.366634.298287.166651.066285.377743.099428.666606.099428.177762 0 .355523 0 .533285-.011047.177762-.011048.355523-.033143.533285-.077334v1.933338c-.277753.033143-.555505.055238-.811038.088381-.266642.033143-.533285.04419-.811037.04419-.666606 0-1.199891-.066285-1.599855-.18781-.399963-.121523-.722156-.309333-.944358-.552381-.233313-.243049-.377744-.541335-.466625-.905907-.07777-.364573-.133321-.784383-.144431-1.248384v-6.683825h-1.899827v-1.889147h-.02222z" fill="#191919"/>\n      <path class="tp-logo__star" fill="#00B67A" d="M30.141707 11.07005H18.63164L15.076408.177071l-3.566342 10.892977L0 11.059002l9.321376 6.739063-3.566343 10.88193 9.321375-6.728016 9.310266 6.728016-3.555233-10.88193 9.310266-6.728016z"/>\n      <path class="tp-logo__star-notch" fill="#005128" d="M21.631369 20.26169l-.799928-2.463625-5.755033 4.153914z"/>\n    </svg>\n  `
    },
    hs = {
      width: 126,
      height: 31
    },
    ws = () => ((e, t, i = {}) => {
      const r = Object.keys(i).reduce((e, t) => (e[t] = Za(i[t]), "color" === t && (e[t] = es(e[t])), e), {});
      return `\n    <div style="position: relative; height: 0; width: 100%; padding: 0; padding-bottom: ${e.height/e.width*100}%;">\n      ${t(e,r)}\n    </div>\n  `
    })(hs, gs),
    bs = (e, t, ...i) => {
      return `<${e} ${(e=>Object.keys(e).map(t=>`${t}="${Za(e[t])}"`).join(" "))(t)}>${(r=i,[].concat(...r)).join("\n")}</${e}>`;
      var r
    },
    fs = (e, ...t) => bs("a", e, ...t),
    Rs = (e, t = "", i = {}) => {
      const {
        ariaHideSvg: r,
        ...a
      } = i;
      return ((e, ...t) => bs("div", e, ...t))({
        class: t,
        ...r ? {
          "aria-hidden": "true"
        } : {}
      }, e(a))
    },
    Ls = (e, {
      loaderElement: t = "tp-widget-loader",
      delay: i = 1e3
    } = {}) => {
      const r = setTimeout(() => (e => {
        const t = document.getElementById(e);
        s([{
          element: t,
          string: Rs(ws)
        }])
      })(t), i);
      return e.finally(() => {
        clearTimeout(r), (e => {
          const t = document.getElementById(e);
          a(t, `${e}--loaded`), t && (t.addEventListener("animationend", () => Ya(t)), t.addEventListener("webkitAnimationEnd", () => Ya(t)), t.addEventListener("oanimationend", () => Ya(t)))
        })(t)
      })
    },
    Ss = "default_singleFetch_f98ac77b",
    Ts = ({
      businessEntity: {
        numberOfReviews: {
          total: e
        }
      }
    }) => e > 0,
    ys = e => ({
      businessUnitId: t,
      locale: a,
      ...s
    }) => {
      const n = (o = {
        businessUnitId: t,
        locale: a,
        ...s,
        theme: null
      }, Object.keys(o).reduce((e, t) => {
        return {
          ...e,
          ...(i = o[t], null == i ? {} : {
            [t]: o[t]
          })
        };
        var i
      }, {}));
      var o;
      return ((e, t) => new Promise((a, s) => {
        let n, o;
        if (0 === e.indexOf("/")) {
          n = t || {};
          const {
            previewVersion: e
          } = i();
          e && (n.previewVersion = e)
        }
        if (0 === e.indexOf("http")) o = e.replace(/^https?:/, "https:");
        else {
          if (0 !== e.indexOf("/")) return s();
          o = r() + e
        }
        return as({
          url: o,
          data: n,
          success: a,
          error: s
        })
      }))(e, n)
    },
    Ns = (e, t = 0, i = Ts) => ({
      baseData: r,
      locale: s,
      theme: n,
      hasMoreReviews: o,
      loadMoreReviews: l
    }) => {
      const u = i(r);
      e({
        baseData: r,
        locale: s,
        hasMoreReviews: o,
        loadMoreReviews: l
      });
      t && ps(({
        data: e
      }) => {
        "loaded" === e && ms({
          baseData: r,
          locale: s
        })
      }), ((e, t) => {
        const i = document.getElementsByTagName("body")[0],
          r = document.getElementById("tp-widget-wrapper");
        a(i, e), a(r, "visible"), t || a(i, "first-reviewer")
      })(n, u), ((e = "tp-widget-fallback") => {
        Ya(document.getElementById(e))
      })()
    },
    xs = e => (t, i, r, a) => {
      const n = t[Object.keys(t)[0]],
        {
          locale: o,
          theme: l = "light"
        } = n,
        u = (e => {
          const t = Object.keys(e),
            i = t.map(t => e[t]);
          return Promise.all(i).then(e => e.reduce((e, i, r) => ({
            ...e,
            [t[r]]: i
          }), {}))
        })((c = ys(e), d = t, Object.keys(d).reduce((e, t) => ({
          ...e,
          [t]: c(d[t])
        }), {})));
      var c, d;
      const v = new Promise(function(e) {
          const t = function() {
            setTimeout(function() {
              e()
            }, 0)
          };
          "complete" === document.readyState ? t() : Ua(window, "load", function() {
            t()
          })
        }),
        m = Promise.all([u, v]).then(([e]) => {
          const t = (e => {
            const t = Object.keys(e);
            return Ss in e && 1 === t.length ? e[Ss] : e
          })(e);
          return {
            baseData: t,
            locale: o,
            theme: l
          }
        }).then(Ns(i, r, a)).catch(e => {
          if (e && e.FallbackLogo) return ((e = "tp-widget-fallback") => {
            const t = document.getElementById(e);
            s([{
              element: t,
              string: fs({
                href: "https://www.trustpilot.com?utm_medium=trustboxfallback",
                target: "_blank",
                rel: "noopener noreferrer"
              }, Rs(ws, "fallback-logo"))
            }])
          })()
        });
      Ls(m)
    },
    ks = e => (t, i, r) => {
      var a;
      (a = `/trustbox-data/${e}`, (e, t, i, r) => {
        const s = {
          [Ss]: e
        };
        xs(a)(s, t, i, r)
      })(t, i, r, Ts)
    },
    Cs = 'style="position: absolute; height: 100%; width: 100%; left: 0; top: 0;"',
    js = (e, t, i = {}) => {
      const r = Object.keys(i).reduce((e, t) => (e[t] = Za(i[t]), "color" === t && (e[t] = es(e[t])), e), {});
      return `\n    <div style="position: relative; height: 0; width: 100%; padding: 0; padding-bottom: ${e.height/e.width*100}%;">\n      ${t(e,r)}\n    </div>\n  `
    },
    Es = {
      "80x15": {
        dimensions: {
          width: 80,
          height: 15
        },
        lines: [{
          x1: 80,
          y1: 7.5,
          x2: 0,
          y2: 7.5
        }, {
          x1: .5,
          y1: 3.5,
          x2: .5,
          y2: 11.5
        }, {
          x1: 20.5,
          y1: 6,
          x2: 20.5,
          y2: 9
        }, {
          x1: 40.5,
          y1: 6,
          x2: 40.5,
          y2: 9
        }, {
          x1: 60.5,
          y1: 6,
          x2: 60.5,
          y2: 9
        }, {
          x1: 80,
          y1: 3.5,
          x2: 80,
          y2: 11.5
        }],
        stars: [{
          x: 1.5,
          w: 14,
          h: 14,
          p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.7613 6.02594H13.7205L10.5316 8.29316L8.55968 9.68372L5.35535 11.9509L6.57238 8.29316L3.36804 6.02594H7.32724L8.54427 2.36816L9.7613 6.02594ZM10.7935 9.14011L8.54429 9.69936L11.7332 11.9817L10.7935 9.14011Z" fill="white"/>'
        }, {
          x: 13.5,
          w: 14,
          h: 14,
          p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7615 6.02606H25.7208L22.5318 8.29328L20.5599 9.68384L17.3556 11.9511L18.5726 8.29328L15.3683 6.02606H19.3275L20.5445 2.36829L21.7615 6.02606ZM22.7938 9.14034L20.5446 9.69959L23.7335 11.9819L22.7938 9.14034Z" fill="white"/>'
        }, {
          x: 35.5,
          w: 14,
          h: 14,
          p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M43.762 6.026L47.721 6.026L44.532 8.293L42.56 9.684L39.356 11.951L40.573 8.293L37.368 6.026L41.328 6.026L42.545 2.368L43.762 6.026ZM44.794 9.14L42.545 9.7L45.734 11.982L44.794 9.14Z" fill="white"/>'
        }, {
          x: 54.5,
          w: 14,
          h: 14,
          p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M62.762 6.026L66.721 6.026L63.532 8.293L61.56 9.684L58.356 11.951L59.573 8.293L56.368 6.026L60.328 6.026L61.545 2.368L62.762 6.026ZM63.794 9.14L61.545 9.7L64.734 11.982L63.794 9.14Z" fill="white"/>'
        }, {
          x: 64.5,
          w: 14,
          h: 14,
          p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M72.7615 6.02606H76.7208L73.5318 8.29328L71.5599 9.68384L68.3556 11.9511L69.5726 8.29328L66.3683 6.02606H70.3275L71.5445 2.36829L72.7615 6.02606ZM73.7935 9.14022L71.5443 9.69947L74.7332 11.9818L73.7935 9.14022Z" fill="white"/>'
        }]
      },
      "90x16": {
        dimensions: {
          width: 90,
          height: 16
        },
        lines: [{
          x1: 90,
          y1: 8.5,
          x2: 0,
          y2: 8.5
        }, {
          x1: .5,
          y1: 5,
          x2: .5,
          y2: 12
        }, {
          x1: 23.2185,
          y1: 7,
          x2: 23.2185,
          y2: 10
        }, {
          x1: 45.5,
          y1: 7,
          x2: 45.5,
          y2: 10
        }, {
          x1: 67.7815,
          y1: 7,
          x2: 67.7815,
          y2: 10
        }, {
          x1: 90,
          y1: 5,
          x2: 90,
          y2: 12
        }],
        stars: [{
          x: 1.5,
          w: 15,
          h: 15,
          p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M10.3454 6.42769H14.5685L11.167 8.84606L9.06363 10.3293L5.64567 12.7477L6.94384 8.84606L3.52588 6.42769H7.74903L9.04719 2.52606L10.3454 6.42769ZM11.4464 9.74948L9.04727 10.346L12.4488 12.7805L11.4464 9.74948Z" fill="white"/>'
        }, {
          x: 15.5,
          w: 15,
          h: 15,
          p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M24.3456 6.42781H28.5688L25.1672 8.84618L23.0639 10.3294L19.6459 12.7478L20.9441 8.84618L17.5261 6.42781H21.7493L23.0474 2.52618L24.3456 6.42781ZM25.4466 9.74967L23.0475 10.3462L26.449 12.7807L25.4466 9.74967Z" fill="white"/>'
        }, {
          x: 37.5,
          w: 15,
          h: 15,
          p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M46.3456 6.42781H50.5688L47.1672 8.84618L45.0639 10.3294L41.6459 12.7478L42.9441 8.84618L39.5261 6.42781H43.7493L45.0474 2.52618L46.3456 6.42781ZM47.4466 9.74967L45.0475 10.3462L48.449 12.7807L47.4466 9.74967Z" fill="white"/>'
        }, {
          x: 60.5,
          w: 15,
          h: 15,
          p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M69.3456 6.42781H73.5688L70.1672 8.84618L68.0639 10.3294L64.6459 12.7478L65.9441 8.84618L62.5261 6.42781H66.7493L68.0474 2.52618L69.3456 6.42781ZM70.4466 9.74967L68.0475 10.3462L71.449 12.7807L70.4466 9.74967Z" fill="white"/>'
        }, {
          x: 73.5,
          w: 15,
          h: 15,
          p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M82.3456 6.42781H86.5688L83.1672 8.84618L81.0639 10.3294L77.6459 12.7478L78.9441 8.84618L75.5261 6.42781H79.7493L81.0474 2.52618L82.3456 6.42781ZM83.4464 9.74957L81.0473 10.3461L84.4488 12.7806L83.4464 9.74957Z" fill="white"/>'
        }]
      },
      "105x19": {
        dimensions: {
          width: 105,
          height: 19
        },
        lines: [{
          x1: 105,
          y1: 10,
          x2: 0,
          y2: 10
        }, {
          x1: .5,
          y1: 6,
          x2: .5,
          y2: 14.3125
        }, {
          x1: 26.5,
          y1: 8,
          x2: 26.5,
          y2: 12
        }, {
          x1: 52.5,
          y1: 8,
          x2: 52.5,
          y2: 12
        }, {
          x1: 78.5,
          y1: 8,
          x2: 78.5,
          y2: 12
        }, {
          x1: 105,
          y1: 6,
          x2: 105,
          y2: 14.3125
        }],
        stars: [{
          x: 1.5,
          w: 18,
          h: 19,
          p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0976 7.63288H17.1126L13.0733 10.5047L10.5756 12.2661L6.51676 15.1379L8.05834 10.5047L3.99951 7.63288H9.0145L10.5561 2.99969L12.0976 7.63288ZM13.4051 11.5774L10.5561 12.2858L14.5954 15.1768L13.4051 11.5774Z" fill="white"/>'
        }, {
          x: 17.5682,
          w: 18,
          h: 18,
          p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M28.1661 7.633H33.1811L29.1418 10.5048L26.6441 12.2662L22.5852 15.138L24.1268 10.5048L20.068 7.633H25.083L26.6246 2.99982L28.1661 7.633ZM29.4736 11.5777L26.6246 12.2861L30.6639 15.1771L29.4736 11.5777Z" fill="white"/>'
        }, {
          x: 43.5,
          w: 18,
          h: 18,
          p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M54.0979 7.633H59.1129L55.0736 10.5048L52.5758 12.2662L48.517 15.138L50.0586 10.5048L45.9998 7.633H51.0147L52.5563 2.99982L54.0979 7.633ZM55.4054 11.5777L52.5564 12.2861L56.5957 15.1771L55.4054 11.5777Z" fill="white"/>'
        }, {
          x: 69.7046,
          w: 18,
          h: 18,
          p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M80.3025 7.633H85.3175L81.2782 10.5048L78.7804 12.2662L74.7216 15.138L76.2632 10.5048L72.2043 7.633H77.2193L78.7609 2.99982L80.3025 7.633ZM81.61 11.5777L78.761 12.2861L82.8003 15.1771L81.61 11.5777Z" fill="white"/>'
        }, {
          x: 85.7727,
          w: 18,
          h: 18,
          p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M96.3706 7.633H101.386L97.3463 10.5048L94.8485 12.2662L90.7897 15.138L92.3313 10.5048L88.2725 7.633H93.2874L94.829 2.99982L96.3706 7.633ZM97.6778 11.5776L94.8289 12.286L98.8682 15.177L97.6778 11.5776Z" fill="white"/>'
        }]
      }
    },
    Is = (e, {
      dimensionId: t,
      color: i,
      rating: r
    }) => `\n  <svg role="img" aria-labelledby="scaleRating" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 ${e.width} ${e.height}">\n      <g class="tp-stars">\n        ${((e,t)=>Es[e].lines.reduce((e,{x1:i,y1:r,x2:a,y2:s})=>`
  $ {
    e
  } < line x1 = "${i}"
  y1 = "${r}"
  x2 = "${a}"
  y2 = "${s}"
  stroke = "${t}" / > `,""))(t,i)}\n        ${((e,t,i)=>{if(0===t)return"";const{x:r,w:a,h:s,p:n}=Es[e].stars[t-1];return`\
  n < rect x = "${r}"
  y = "0.5"
  width = "${a}"
  height = "${s}"
  fill = "${i}"
  stroke = "${i}" / > \n $ {
    n
  }\
  n `})(t,r,i)}\n      </g>\n  </svg>`, Os = "#dcdce6", zs = (e, {
    rating: t,
    trustScore: i,
    color: r,
    locale: a = Ka
  }) => {
    const s = `starRating-${Math.random().toString(36).substring(2)}`,
      n = Ha("starRating", a, {
        "[ratingStars]": i,
        "[totalStars]": 5
      }),
      o = Pa(a);
    return `\n    <svg role="img" viewBox="0 0 ${e.width} ${e.height}" xmlns="http://www.w3.org/2000/svg" ${Cs}>\n      <title id="${s}" lang=${o}>${n}</title>\n      <g class="tp-star">\n          <path class="tp-star__canvas" fill="${t>=1&&r?r:Os}" d="M0 46.330002h46.375586V0H0z"/>\n          <path class="tp-star__shape" d="M39.533936 19.711433L13.230239 38.80065l3.838216-11.797827L7.02115 19.711433h12.418975l3.837417-11.798624 3.837418 11.798624h12.418975zM23.2785 31.510075l7.183595-1.509576 2.862114 8.800152L23.2785 31.510075z" fill="#FFF"/>\n      </g>\n      <g class="tp-star">\n          <path class="tp-star__canvas" fill="${t>=2&&r?r:Os}" d="M51.24816 46.330002h46.375587V0H51.248161z"/>\n          <path class="tp-star__canvas--half" fill="${t>=1.5&&r?r:Os}" d="M51.24816 46.330002h23.187793V0H51.248161z"/>\n          <path class="tp-star__shape" d="M74.990978 31.32991L81.150908 30 84 39l-9.660206-7.202786L64.30279 39l3.895636-11.840666L58 19.841466h12.605577L74.499595 8l3.895637 11.841466H91L74.990978 31.329909z" fill="#FFF"/>\n      </g>\n      <g class="tp-star">\n          <path class="tp-star__canvas" fill="${t>=3&&r?r:Os}" d="M102.532209 46.330002h46.375586V0h-46.375586z"/>\n          <path class="tp-star__canvas--half" fill="${t>=2.5&&r?r:Os}" d="M102.532209 46.330002h23.187793V0h-23.187793z"/>\n          <path class="tp-star__shape" d="M142.066994 19.711433L115.763298 38.80065l3.838215-11.797827-10.047304-7.291391h12.418975l3.837418-11.798624 3.837417 11.798624h12.418975zM125.81156 31.510075l7.183595-1.509576 2.862113 8.800152-10.045708-7.290576z" fill="#FFF"/>\n      </g>\n      <g class="tp-star">\n          <path class="tp-star__canvas" fill="${t>=4&&r?r:Os}" d="M153.815458 46.330002h46.375586V0h-46.375586z"/>\n          <path class="tp-star__canvas--half" fill="${t>=3.5&&r?r:Os}" d="M153.815458 46.330002h23.187793V0h-23.187793z"/>\n          <path class="tp-star__shape" d="M193.348355 19.711433L167.045457 38.80065l3.837417-11.797827-10.047303-7.291391h12.418974l3.837418-11.798624 3.837418 11.798624h12.418974zM177.09292 31.510075l7.183595-1.509576 2.862114 8.800152-10.045709-7.290576z" fill="#FFF"/>\n      </g>\n      <g class="tp-star">\n          <path class="tp-star__canvas" fill="${5===t&&r?r:Os}" d="M205.064416 46.330002h46.375587V0h-46.375587z"/>\n          <path class="tp-star__canvas--half" fill="${t>=4.5&&r?r:Os}" d="M205.064416 46.330002h23.187793V0h-23.187793z"/>\n          <path class="tp-star__shape" d="M244.597022 19.711433l-26.3029 19.089218 3.837419-11.797827-10.047304-7.291391h12.418974l3.837418-11.798624 3.837418 11.798624h12.418975zm-16.255436 11.798642l7.183595-1.509576 2.862114 8.800152-10.045709-7.290576z" fill="#FFF"/>\n      </g>\n    </svg>\n  `
  }, Ds = e => {
    const t = `trustpilotLogo-${Math.random().toString(36).substring(2)}`;
    return `\n    <svg role="img" viewBox="0 0 ${e.width} ${e.height}" xmlns="http://www.w3.org/2000/svg" ${Cs}>\n      <title id="${t}">Trustpilot</title>\n      <path class="tp-logo__text" d="M33.074774 11.07005H45.81806v2.364196h-5.010656v13.290316h-2.755306V13.434246h-4.988435V11.07005h.01111zm12.198892 4.319629h2.355341v2.187433h.04444c.077771-.309334.222203-.60762.433295-.894859.211092-.287239.466624-.56343.766597-.79543.299972-.243048.633276-.430858.999909-.585525.366633-.14362.744377-.220953 1.12212-.220953.288863 0 .499955.011047.611056.022095.1111.011048.222202.033143.344413.04419v2.408387c-.177762-.033143-.355523-.055238-.544395-.077333-.188872-.022096-.366633-.033143-.544395-.033143-.422184 0-.822148.08838-1.199891.254096-.377744.165714-.699936.41981-.977689.740192-.277753.331429-.499955.729144-.666606 1.21524-.166652.486097-.244422 1.03848-.244422 1.668195v5.39125h-2.510883V15.38968h.01111zm18.220567 11.334883H61.02779v-1.579813h-.04444c-.311083.574477-.766597 1.02743-1.377653 1.369908-.611055.342477-1.233221.51924-1.866497.51924-1.499864 0-2.588654-.364573-3.25526-1.104765-.666606-.740193-.999909-1.856005-.999909-3.347437V15.38968h2.510883v6.948968c0 .994288.188872 1.701337.577725 2.1101.377744.408763.922139.618668 1.610965.618668.533285 0 .96658-.077333 1.322102-.243048.355524-.165714.644386-.37562.855478-.65181.222202-.265144.377744-.596574.477735-.972194.09999-.37562.144431-.784382.144431-1.226288v-6.573349h2.510883v11.323836zm4.27739-3.634675c.07777.729144.355522 1.237336.833257 1.535623.488844.287238 1.06657.441905 1.744286.441905.233312 0 .499954-.022095.799927-.055238.299973-.033143.588836-.110476.844368-.209905.266642-.099429.477734-.254096.655496-.452954.166652-.198857.244422-.452953.233312-.773335-.01111-.320381-.133321-.585525-.355523-.784382-.222202-.209906-.499955-.364573-.844368-.497144-.344413-.121525-.733267-.232-1.17767-.320382-.444405-.088381-.888809-.18781-1.344323-.287239-.466624-.099429-.922138-.232-1.355432-.37562-.433294-.14362-.822148-.342477-1.166561-.596573-.344413-.243048-.622166-.56343-.822148-.950097-.211092-.386668-.311083-.861716-.311083-1.436194 0-.618668.155542-1.12686.455515-1.54667.299972-.41981.688826-.75124 1.14434-1.005336.466624-.254095.97769-.430858 1.544304-.541334.566615-.099429 1.11101-.154667 1.622075-.154667.588836 0 1.15545.066286 1.688736.18781.533285.121524 1.02213.320381 1.455423.60762.433294.276191.788817.640764 1.07768 1.08267.288863.441905.466624.98324.544395 1.612955h-2.621984c-.122211-.596572-.388854-1.005335-.822148-1.204193-.433294-.209905-.933248-.309334-1.488753-.309334-.177762 0-.388854.011048-.633276.04419-.244422.033144-.466624.088382-.688826.165715-.211092.077334-.388854.198858-.544395.353525-.144432.154667-.222203.353525-.222203.60762 0 .309335.111101.552383.322193.740193.211092.18781.488845.342477.833258.475048.344413.121524.733267.232 1.177671.320382.444404.088381.899918.18781 1.366542.287239.455515.099429.899919.232 1.344323.37562.444404.14362.833257.342477 1.17767.596573.344414.254095.622166.56343.833258.93905.211092.37562.322193.850668.322193 1.40305 0 .673906-.155541 1.237336-.466624 1.712385-.311083.464001-.711047.850669-1.199891 1.137907-.488845.28724-1.04435.508192-1.644295.640764-.599946.132572-1.199891.198857-1.788727.198857-.722156 0-1.388762-.077333-1.999818-.243048-.611056-.165714-1.14434-.408763-1.588745-.729144-.444404-.33143-.799927-.740192-1.05546-1.226289-.255532-.486096-.388853-1.071621-.411073-1.745528h2.533103v-.022095zm8.288135-7.700208h1.899828v-3.402675h2.510883v3.402675h2.26646v1.867052h-2.26646v6.054109c0 .265143.01111.486096.03333.684954.02222.18781.07777.353524.155542.486096.07777.132572.199981.232.366633.298287.166651.066285.377743.099428.666606.099428.177762 0 .355523 0 .533285-.011047.177762-.011048.355523-.033143.533285-.077334v1.933338c-.277753.033143-.555505.055238-.811038.088381-.266642.033143-.533285.04419-.811037.04419-.666606 0-1.199891-.066285-1.599855-.18781-.399963-.121523-.722156-.309333-.944358-.552381-.233313-.243049-.377744-.541335-.466625-.905907-.07777-.364573-.13332-.784383-.144431-1.248384v-6.683825h-1.899827v-1.889147h-.02222zm8.454788 0h2.377562V16.9253h.04444c.355523-.662858.844368-1.12686 1.477644-1.414098.633276-.287239 1.310992-.430858 2.055369-.430858.899918 0 1.677625.154667 2.344231.475048.666606.309335 1.222111.740193 1.666515 1.292575.444405.552382.766597 1.193145.9888 1.92229.222202.729145.333303 1.513527.333303 2.3421 0 .762288-.099991 1.50248-.299973 2.20953-.199982.718096-.499955 1.347812-.899918 1.900194-.399964.552383-.911029.98324-1.533194 1.31467-.622166.33143-1.344323.497144-2.18869.497144-.366634 0-.733267-.033143-1.0999-.099429-.366634-.066286-.722157-.176762-1.05546-.320381-.333303-.14362-.655496-.33143-.933249-.56343-.288863-.232-.522175-.497144-.722157-.79543h-.04444v5.656393h-2.510883V15.38968zm8.77698 5.67849c0-.508193-.06666-1.005337-.199981-1.491433-.133321-.486096-.333303-.905907-.599946-1.281527-.266642-.37562-.599945-.673906-.988799-.894859-.399963-.220953-.855478-.342477-1.366542-.342477-1.05546 0-1.855387.364572-2.388672 1.093717-.533285.729144-.799928 1.701337-.799928 2.916578 0 .574478.066661 1.104764.211092 1.59086.144432.486097.344414.905908.633276 1.259432.277753.353525.611056.629716.99991.828574.388853.209905.844367.309334 1.355432.309334.577725 0 1.05546-.121524 1.455423-.353525.399964-.232.722157-.541335.97769-.905907.255531-.37562.444403-.79543.555504-1.270479.099991-.475049.155542-.961145.155542-1.458289zm4.432931-9.99812h2.510883v2.364197h-2.510883V11.07005zm0 4.31963h2.510883v11.334883h-2.510883V15.389679zm4.755124-4.31963h2.510883v15.654513h-2.510883V11.07005zm10.210184 15.963847c-.911029 0-1.722066-.154667-2.433113-.452953-.711046-.298287-1.310992-.718097-1.810946-1.237337-.488845-.530287-.866588-1.160002-1.12212-1.889147-.255533-.729144-.388854-1.535622-.388854-2.408386 0-.861716.133321-1.657147.388853-2.386291.255533-.729145.633276-1.35886 1.12212-1.889148.488845-.530287 1.0999-.93905 1.810947-1.237336.711047-.298286 1.522084-.452953 2.433113-.452953.911028 0 1.722066.154667 2.433112.452953.711047.298287 1.310992.718097 1.810947 1.237336.488844.530287.866588 1.160003 1.12212 1.889148.255532.729144.388854 1.524575.388854 2.38629 0 .872765-.133322 1.679243-.388854 2.408387-.255532.729145-.633276 1.35886-1.12212 1.889147-.488845.530287-1.0999.93905-1.810947 1.237337-.711046.298286-1.522084.452953-2.433112.452953zm0-1.977528c.555505 0 1.04435-.121524 1.455423-.353525.411074-.232.744377-.541335 1.01102-.916954.266642-.37562.455513-.806478.588835-1.281527.12221-.475049.188872-.961145.188872-1.45829 0-.486096-.066661-.961144-.188872-1.44724-.122211-.486097-.322193-.905907-.588836-1.281527-.266642-.37562-.599945-.673907-1.011019-.905907-.411074-.232-.899918-.353525-1.455423-.353525-.555505 0-1.04435.121524-1.455424.353525-.411073.232-.744376.541334-1.011019.905907-.266642.37562-.455514.79543-.588835 1.281526-.122211.486097-.188872.961145-.188872 1.447242 0 .497144.06666.98324.188872 1.458289.12221.475049.322193.905907.588835 1.281527.266643.37562.599946.684954 1.01102.916954.411073.243048.899918.353525 1.455423.353525zm6.4883-9.66669h1.899827v-3.402674h2.510883v3.402675h2.26646v1.867052h-2.26646v6.054109c0 .265143.01111.486096.03333.684954.02222.18781.07777.353524.155541.486096.077771.132572.199982.232.366634.298287.166651.066285.377743.099428.666606.099428.177762 0 .355523 0 .533285-.011047.177762-.011048.355523-.033143.533285-.077334v1.933338c-.277753.033143-.555505.055238-.811038.088381-.266642.033143-.533285.04419-.811037.04419-.666606 0-1.199891-.066285-1.599855-.18781-.399963-.121523-.722156-.309333-.944358-.552381-.233313-.243049-.377744-.541335-.466625-.905907-.07777-.364573-.133321-.784383-.144431-1.248384v-6.683825h-1.899827v-1.889147h-.02222z" fill="#191919"/>\n      <path class="tp-logo__star" fill="#00B67A" d="M30.141707 11.07005H18.63164L15.076408.177071l-3.566342 10.892977L0 11.059002l9.321376 6.739063-3.566343 10.88193 9.321375-6.728016 9.310266 6.728016-3.555233-10.88193 9.310266-6.728016z"/>\n      <path class="tp-logo__star-notch" fill="#005128" d="M21.631369 20.26169l-.799928-2.463625-5.755033 4.153914z"/>\n    </svg>\n  `
  }, Ws = e => `\n  <svg viewBox="0 0 ${e.width} ${e.height}" xmlns="http://www.w3.org/2000/svg" ${Cs}>\n      <circle class="arrow-slider-circle" cx="12" cy="12" r="11.5" fill="none" stroke="#8C8C8C"/>\n      <path class="arrow-slider-shape" fill="#8C8C8C" d="M10.5088835 12l3.3080582-3.02451041c.2440777-.22315674.2440777-.5849653 0-.80812204-.2440776-.22315673-.6398058-.22315673-.8838834 0L9.18305826 11.595939c-.24407768.2231567-.24407768.5849653 0 .808122l3.75000004 3.4285714c.2440776.2231568.6398058.2231568.8838834 0 .2440777-.2231567.2440777-.5849653 0-.808122L10.5088835 12z"/>\n  </svg>\n`, Bs = e => `\n<svg xmlns="http://www.w3.org/2000/svg" width="${e.width}" height="${e.height}" viewBox="0 0 ${e.width} ${e.height}" fill="none">\n<path d="M6.65311 9.66253L4.3379 7.34732L11.1563 7.34732V6.47232L4.33704 6.47232L6.65311 4.15625L6.03439 3.53753L2.66253 6.90939L6.03439 10.2812L6.65311 9.66253Z" fill="#205CD4"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0ZM0.875 7C0.875 3.61726 3.61726 0.875 7 0.875C10.3827 0.875 13.125 3.61726 13.125 7C13.125 10.3827 10.3827 13.125 7 13.125C3.61726 13.125 0.875 10.3827 0.875 7Z" fill="#205CD4"/>\n</svg>\n`, Ms = (e, {
    elementColor: t
  }) => `\n<svg viewBox="0 0 ${e.width} ${e.height}" xmlns=“http://www.w3.org/2000/svg“ ${Cs}>\n  <path d="M5.24040526 8.60770645c0 .40275007-.25576387.51300008-.57003092.24825004L.2361338 4.98520583C.0871841 4.86986375 0 4.69208677 0 4.50370575s.0871841-.366158.2361338-.48150008L4.67037434.14470501c.31501709-.26625004.57003092-.15450003.57003092.24825004V2.9992055h.75004069c2.86515541 0 5.31553833 2.3745004 5.91257072 4.93950083a4.3385348 4.3385348 0 0 1 .09375508.5782501c.02250123.20025004-.07500406.24450004-.21826184.10350002 0 0-.0405022-.036-.07500406-.07500001C10.18673699 7.00766398 8.14655579 6.09727666 5.98894586 5.995456h-.75004068l.00150008 2.61225045z" fill="${t||"#008447"}" fill-rule="evenodd"/>\n</svg>\n`, As = e => `<svg viewBox="0 0 ${e.width} ${e.height}" fill="none" xmlns="http://www.w3.org/2000/svg" ${Cs}>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM6.09217 7.81401L9.20311 4.7031C9.44874 4.45757 9.84688 4.45757 10.0923 4.7031C10.338 4.94864 10.338 5.34673 10.0923 5.59226L6.62009 9.06448C6.59573 9.10283 6.56682 9.13912 6.53333 9.17256C6.28787 9.41821 5.88965 9.41821 5.64402 9.17256L3.7059 7.11031C3.46046 6.86464 3.46046 6.46669 3.7059 6.22102C3.95154 5.97548 4.34968 5.97548 4.59512 6.22102L6.09217 7.81401Z" fill="currentColor"/>\n</svg>\n`, $s = e => `<svg viewBox="0 0 ${e.width} ${e.height}" fill="none" xmlns="http://www.w3.org/2000/svg" ${Cs}>\n<g id="Icon / Functional / check-circle" clip-path="url(#clip0_2022_1976)">\n<g id="icon">\n<path d="M5.34 9.17054L9.54252 4.7679L9 4.25005L5.32752 8.09741L3.53642 6.30631L3.00609 6.83664L5.34 9.17054Z" fill="#1C1C1C"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M1.75736 2.25736C-0.585787 4.60051 -0.585787 8.3995 1.75736 10.7426C4.10051 13.0858 7.8995 13.0858 10.2426 10.7426C12.5858 8.3995 12.5858 4.60051 10.2426 2.25736C7.8995 -0.0857866 4.10051 -0.0857866 1.75736 2.25736ZM2.28769 10.2123C0.237437 8.16206 0.237437 4.83794 2.28769 2.78769C4.33794 0.737437 7.66206 0.737437 9.71231 2.78769C11.7626 4.83794 11.7626 8.16206 9.71231 10.2123C7.66206 12.2626 4.33794 12.2626 2.28769 10.2123Z" fill="#1C1C1C"/>\n</g>\n</g>\n<defs>\n<clipPath id="clip0_2022_1976">\n<rect width="12" height="12" fill="white" transform="translate(0 0.5)"/>\n</clipPath>\n</defs>\n</svg>\n`, Fs = e => `<svg viewBox="0 0 ${e.width} ${e.height}" fill="none" xmlns="http://www.w3.org/2000/svg" ${Cs}>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM6.09217 7.81401L9.20311 4.7031C9.44874 4.45757 9.84688 4.45757 10.0923 4.7031C10.338 4.94864 10.338 5.34673 10.0923 5.59226L6.62009 9.06448C6.59573 9.10283 6.56682 9.13912 6.53333 9.17256C6.28787 9.41821 5.88965 9.41821 5.64402 9.17256L3.7059 7.11031C3.46046 6.86464 3.46046 6.46669 3.7059 6.22102C3.95154 5.97548 4.34968 5.97548 4.59512 6.22102L6.09217 7.81401Z" fill="currentColor"/>\n</svg>\n`, _s = e => `<svg viewBox="0 0 ${e.width} ${e.height}" fill="none" xmlns="http://www.w3.org/2000/svg" ${Cs}>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M13.7056 4.07227L10.6915 1.04706C10.2986 0.65216 9.66093 0.651152 9.26704 1.04303C8.87214 1.43591 8.87113 2.0746 9.26402 2.46749L10.5656 3.77509L3.42415 3.76602H3.41407C1.96242 3.76602 1.15751 4.40169 0.738429 4.93561C0.255887 5.55012 0.0010157 6.38827 8.3031e-06 7.36041C-0.00301388 8.91482 0.819021 11.8151 2.40265 11.8161H2.40365C2.95974 11.8161 3.41105 11.3668 3.41206 10.8107C3.41206 10.3645 3.12293 9.98467 2.72098 9.85069C2.35429 9.40038 1.72568 7.60218 2.15281 6.48901C2.2868 6.14045 2.54268 5.78081 3.41407 5.78081H3.42012L10.5585 5.78988L9.25495 7.0874C8.86005 7.48029 8.85905 8.11898 9.25193 8.51186C9.44837 8.70931 9.70727 8.80904 9.96617 8.80904C10.2231 8.80904 10.4799 8.71032 10.6764 8.51589L13.7046 5.49874H13.7056C14.1116 5.08369 14.0844 4.45206 13.7056 4.07227Z" fill="currentColor"/>\n</svg>\n`, Ks = e => `<svg viewBox="0 0 ${e.width} ${e.height}" fill="none" xmlns="http://www.w3.org/2000/svg" ${Cs}>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M12 0.619771L4.2328 8L0 4.1609L0.657548 3.52665L4.21732 6.75533L11.3269 0L12 0.619771Z" fill="currentColor"/>\n</svg>\n`, Vs = e => `<svg viewBox="0 0 ${e.width} ${e.height}" fill="none" xmlns="http://www.w3.org/2000/svg" ${Cs}>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M1.28033 1.21967C1.57322 0.926777 2.04671 0.926777 2.33961 1.21967L6 4.87999L9.66039 1.21967C9.95328 0.926777 10.42678 0.926777 10.71967 1.21967C11.01256 1.51256 11.01256 1.98744 10.71967 2.28033L6.53033 6.46967C6.23744 6.76256 5.76256 6.76256 5.46967 6.46967L1.28033 2.28033C0.987437 1.98744 0.987437 1.51256 1.28033 1.21967Z" fill="currentColor"/>\n</svg>\n`, Ps = e => `\n<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 ${e.width} ${e.height}" fill="none">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 2C4.12665 2 2 4.12665 2 6.75C2 9.37335 4.12665 11.5 6.75 11.5C7.88157 11.5 8.92073 11.1043 9.73666 10.4438L13.6464 14.3535L14.3535 13.6464L10.4438 9.73666C11.1043 8.92073 11.5 7.88157 11.5 6.75C11.5 4.12665 9.37335 2 6.75 2ZM3 6.75C3 4.67893 4.67893 3 6.75 3C8.82107 3 10.5 4.67893 10.5 6.75C10.5 8.82107 8.82107 10.5 6.75 10.5C4.67893 10.5 3 8.82107 3 6.75Z" fill="#605E56"/>\n</svg>\n`, Gs = e => `\n<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 ${e.width} ${e.height}" fill="none">\n<g clip-path="url(#clip0_3895_4637)">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M3.0505 3.05025C0.316826 5.78392 0.316826 10.2161 3.0505 12.9497C5.78417 15.6834 10.2163 15.6834 12.95 12.9497C15.6837 10.2161 15.6837 5.78392 12.95 3.05025C10.2163 0.316582 5.78417 0.316582 3.0505 3.05025ZM2.34339 13.6569C-0.780804 10.5327 -0.780804 5.46734 2.34339 2.34315C5.46758 -0.781048 10.5329 -0.781048 13.6571 2.34315C16.7813 5.46734 16.7813 10.5327 13.6571 13.6569C10.5329 16.781 5.46758 16.781 2.34339 13.6569Z" fill="#1B1B21"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M8.70696 8.00014L11.1033 10.3967L10.3962 11.1038L7.99985 8.70725L5.6033 11.1038L4.89619 10.3967L7.29278 8.00011L4.89642 5.60354L5.60356 4.89646L7.99989 7.293L10.3962 4.8967L11.1033 5.6038L8.70696 8.00014Z" fill="#1B1B21"/>\n</g>\n<defs>\n<clipPath id="clip0_3895_4637">\n<rect width="16" height="16" fill="white"/>\n</clipPath>\n</defs>\n</svg>\n`, Hs = {
    width: 251,
    height: 46
  }, Us = {
    width: 126,
    height: 31
  }, Zs = {
    width: 24,
    height: 24
  }, Js = {
    width: 14,
    height: 14
  }, qs = {
    width: 12,
    height: 9
  }, Xs = {
    width: 14,
    height: 14
  }, Ys = {
    width: 14,
    height: 14
  }, Qs = {
    width: 14,
    height: 12
  }, en = {
    width: 12,
    height: 8
  }, tn = {
    width: 12,
    height: 8
  }, rn = {
    width: 16,
    height: 16
  }, an = {
    width: 16,
    height: 16
  }, sn = {
    scale: e => js(Es[e.dimensionId].dimensions, Is, e),
    stars: e => js(Hs, zs, e),
    logo: () => js(Us, Ds),
    arrowSlider: () => js(Zs, Ws),
    arrowSliderCircle: () => js(Js, Bs),
    replyArrow: e => js(qs, Ms, e),
    verifiedReview: e => js(Xs, As, e),
    verifiedReviewFlex: e => js(Xs, $s, e),
    invitedReview: e => js(Ys, Fs, e),
    redirectedReview: e => js(Qs, _s, e),
    checkmark: e => js(en, Ks, e),
    caret: e => js(tn, Vs, e),
    search: e => js(rn, Ps, e),
    close: e => js(an, Gs, e)
  }, nn = (e, t, ...i) => {
    return `<${e} ${(e=>Object.keys(e).map(t=>`${t}="${Za(e[t])}"`).join(" "))(t)}>${(r=i,[].concat(...r)).join("\n")}</${e}>`;
    var r
  }, on = (e, ...t) => nn("a", e, ...t), ln = (e, ...t) => nn("div", e, ...t), un = (e, t = "", i = {}) => {
    const {
      ariaHideSvg: r,
      ...a
    } = i;
    return ln({
      class: t,
      ...r ? {
        "aria-hidden": "true"
      } : {}
    }, sn[e](a))
  }, cn = () => un("logo"), dn = e => e ? {
    rel: "nofollow"
  } : {}, vn = e => {
    const {
      title: t,
      url: i,
      nofollow: r
    } = e, a = ((e, ...t) => nn("span", e, ...t))({
      class: "tp-widget-empty-horizontal__title"
    }, Xa({}, t)), s = ln({
      class: "tp-widget-empty-horizontal__logo"
    }, cn()), n = ln({
      class: "tp-widget-empty-horizontal"
    }, a, s);
    return on({
      href: i,
      target: "_blank",
      ...dn(r)
    }, n)
  }, mn = ["left", "right", "center"], pn = ["1", "2", "3"], gn = ["1", "2"];
  class hn {
    root;
    translationsMain;
    locale;
    baseData;
    addUtm;
    minReviewCount;
    withoutReviewsPreferredStringId;
    constructor({
      root: e,
      translationsMain: t,
      locale: i,
      baseData: r,
      utmMedium: a,
      minReviewCount: s,
      withoutReviewsPreferredStringId: n
    }) {
      var o;
      this.root = e, this.locale = i, this.baseData = r, this.addUtm = (o = a, e => `${(e=>`${e}${-1===e.indexOf("?")?"?":"&"}`)(e)}utm_medium=trustbox&utm_source=${o}`), this.minReviewCount = s, this.withoutReviewsPreferredStringId = n, this.translationsMain = t
    }
    render() {
      const {
        total: e
      } = this.baseData.businessEntity.numberOfReviews;
      e > 0 ? this.renderRegular() : this.renderEmpty()
    }
    renderReviewText(e, t, i) {
      if (this.translationsMain) {
        if (e >= this.minReviewCount) {
          const e = Xa({
            "[SEEOUR]": i.seeour,
            "[NOREVIEWS]": t,
            "[REVIEWSON]": i.reviewson
          }, i.main);
          return void qa(this.translationsMain, e, 0)
        }
        qa(this.translationsMain, i.seeourreviewson, 0)
      }
    }
    configureProfileLink(e, t, i, r) {
      const a = this.root.querySelector("#profile-link");
      if (!a) return;
      a.href = e;
      const s = t >= this.minReviewCount ? i : "";
      if (!r.a11yProfileLinkLabel) return;
      const n = Xa({
        "[NOREVIEWS]": s
      }, r.a11yProfileLinkLabel);
      n && a.setAttribute("aria-label", s ? n : n.replace(/\s+/g, " ").trim())
    }
    renderRegular() {
      const {
        businessEntity: {
          numberOfReviews: {
            total: e
          }
        },
        links: {
          profileUrl: t
        },
        translations: i
      } = this.baseData, r = this.addUtm(t);
      if (!this.translationsMain) return;
      const a = function(e, t) {
        try {
          e.toLocaleString()
        } catch (t) {
          return e
        }
        return e.toLocaleString(t || "en-US")
      }(e, this.locale);
      this.renderReviewText(e, a, i), this.configureProfileLink(r, e, a, i)
    }
    renderEmpty() {
      const {
        translations: e,
        businessEntity: {
          displayName: t
        },
        links: {
          evaluateUrl: i,
          profileUrl: r
        }
      } = this.baseData;
      let a = "firstreviewer";
      pn.includes(this.withoutReviewsPreferredStringId) && (a = `${a}${this.withoutReviewsPreferredStringId}`);
      const s = gn.includes(this.withoutReviewsPreferredStringId) ? this.addUtm(r) : this.addUtm(i),
        n = (o = {
          title: Xa({
            "[COMPANYNAME]": t
          }, e[a]),
          url: s
        }, vn(o));
      var o;
      qa(this.root, n, 0)
    }
  }
  Ua(window, "message", function(e) {
    if ("string" != typeof e.data) return;
    let t;
    try {
      t = {
        data: JSON.parse(e.data)
      }
    } catch (e) {
      return
    }
    if ("setId" === t.data.command) return os = t.data.widgetId, void window.parent.postMessage(JSON.stringify({
      command: "impression",
      widgetId: os
    }), "*");
    "impression-received" === t.data.command && (delete t.data.command, ns("TrustboxImpression", t.data)), "trustbox-in-viewport" === t.data.command && (delete t.data.command, function(e) {
      ns("TrustboxView", e)
    }(t.data))
  });
  const {
    businessunitId: wn,
    locale: bn,
    theme: fn = "light",
    location: Rn,
    templateId: Ln,
    fontFamily: Sn,
    textColor: Tn,
    minReviewCount: yn = "0",
    withoutReviewsPreferredStringId: Nn = "",
    styleAlignment: xn = "center"
  } = i(), kn = () => {
    Sn && (e => {
      const t = r(),
        i = e.replace(/\s/g, "-").toLowerCase(),
        a = document.createElement("link");
      a.rel = "stylesheet", a.href = `${t}/fonts/${i}.css`, document.head.appendChild(a);
      const s = e.replace(/\+/g, " "),
        n = document.createElement("style");
      n.appendChild(document.createTextNode(`\n    * {\n      font-family: inherit !important;\n    }\n    body {\n      font-family: "${s}", sans-serif !important;\n    }\n    `)), document.head.appendChild(n)
    })(Sn), Tn && (e => {
      const t = document.createElement("style");
      t.appendChild(document.createTextNode(`\n      * {\n        color: inherit !important;\n      }\n      body {\n        color: ${e} !important;\n      }\n      .bold-underline {\n        border-bottom-color: ${e} !important;\n      }\n      .bold-underline:hover {\n        border-color: ${Qa(e,-30)} !important;\n      }\n      .secondary-text {\n        /* Fallback for browsers that don't support oklch() - Light mode: lighter */\n        color: ${Qa(e,51)} !important;\n        /* Light mode: L + 0.2 */\n        color: oklch(from ${e} calc(l + 0.2) c h) !important;\n      }\n      .dark .secondary-text {\n        /* Fallback for browsers that don't support oklch() - Dark mode: darker */\n        color: ${Qa(e,-51)} !important;\n        /* Dark mode: L - 0.2 */\n        color: oklch(from ${e} calc(l - 0.2) c h) !important;\n      }\n      .secondary-text-arrow {\n        /* Fallback for browsers that don't support oklch() - Light mode: lighter */\n        border-color: ${Qa(e,51)} transparent transparent transparent !important;\n        /* Light mode: L + 0.2 */\n        border-color: oklch(from ${e} calc(l + 0.2) c h) transparent transparent transparent !important;\n      }\n      .dark .secondary-text-arrow {\n        /* Fallback for browsers that don't support oklch() - Dark mode: darker */\n        border-color: ${Qa(e,-51)} transparent transparent transparent !important;\n        /* Dark mode: L - 0.2 */\n        border-color: oklch(from ${e} calc(l - 0.2) c h) transparent transparent transparent !important;\n      }\n      .read-more {\n        color: ${e} !important;\n      }\n    `)), document.head.appendChild(t)
    })(Tn), xn && (e => {
      if (!mn.includes(e)) return;
      const t = "tp-widget-wrapper",
        i = document.getElementById(t);
      i && i.classList.add(`${t}--${e}`)
    })(xn)
  }, Cn = ({
    baseData: e,
    locale: t
  }) => {
    const {
      translations: i,
      settings: {
        customStylesAllowed: r
      }
    } = e;
    var a;
    a = t, document.documentElement.setAttribute("lang", a);
    const n = document.getElementById("tp-widget-wrapper");
    if (!n) return;
    const o = n.querySelector("#translations-main"),
      l = document.getElementById("tp-widget-title");
    l && i.trustpilotCustomWidget && (l.innerHTML = i.trustpilotCustomWidget), r && kn(), ((e = "tp-widget-logo") => {
      const t = "string" == typeof e ? document.getElementById(e) : e;
      s([{
        element: t,
        string: cn()
      }])
    })();
    const u = parseInt(yn, 10) || 0;
    new hn({
      root: n,
      translationsMain: o,
      locale: t,
      baseData: e,
      utmMedium: "MicroReviewCount",
      minReviewCount: u,
      withoutReviewsPreferredStringId: Nn
    }).render()
  }, jn = {
    businessUnitId: wn,
    locale: bn,
    theme: fn,
    location: Rn
  };
  (e => {
    let t = 0;
    var i;
    i = () => {
      t = 1, "function" == typeof e && e()
    }, ps(e => {
      "pong" === e.data.command && i(e)
    }), vs({
      command: "ping"
    }), setTimeout(() => {
      t || ((e = "tp-widget-fallback") => {
        const t = document.getElementById(e);
        s([{
          element: t,
          string: on({
            href: "https://www.trustpilot.com?utm_medium=trustboxfallback",
            target: "_blank",
            rel: "noopener noreferrer"
          }, un("logo", "fallback-logo"))
        }])
      })()
    }, 500)
  })(() => ks(Ln)(jn, Cn, null))
}(); //# sourceMappingURL=main.js.map