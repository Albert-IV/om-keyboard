module.exports = {
  nets: {
    pos: undefined,
    neg: undefined,
  },
  params: {
    class: "JST",
    reversible: false,
  },
  body: (p) => {
    const frontSilks = `
        ${"" /* Outline */}
        (fp_line (start -2.25 0.25)  (end -2.25 -1.35) (layer F.SilkS) (width 0.15))
        (fp_line (start -2.25 -1.35) (end -2.95 -1.35) (layer F.SilkS) (width 0.15))
        (fp_line (start -2.95 -1.35) (end -2.95 6.25)  (layer F.SilkS) (width 0.15))
        (fp_line (start -2.95 6.25)  (end 2.95 6.25)   (layer F.SilkS) (width 0.15))
        (fp_line (start 2.95 6.25)   (end 2.95 -1.35)  (layer F.SilkS) (width 0.15))
        (fp_line (start 2.95 -1.35)  (end 2.25 -1.35)  (layer F.SilkS) (width 0.15))
        (fp_line (start 2.25 -1.35)  (end 2.25 0.25)   (layer F.SilkS) (width 0.15))
        (fp_line (start 2.25 0.25)   (end -2.25 0.25)  (layer F.SilkS) (width 0.15))

        ${"" /* Plus sign */}
        (fp_line (start -1 1.5) (end -1 2.0) (layer F.SilkS) (width 0.15))
        (fp_line (start -1.25 1.75) (end -0.75 1.75) (layer F.SilkS) (width 0.15))`;

    const backSilks = `
        ${"" /* Outline */}
        (fp_line (start -4.25 -1.35) (end -4.25 0.25)  (layer "B.SilkS") (width 0.15))
        (fp_line (start -4.25 -1.35) (end -4.95 -1.35) (layer "B.SilkS") (width 0.15))
        (fp_line (start -4.95 -1.35) (end -4.95 6.25)  (layer "B.SilkS") (width 0.15))
        (fp_line (start -4.25 0.25)  (end 0.25 0.25)   (layer "B.SilkS") (width 0.15))
        (fp_line (start 0.95 6.25)   (end 0.95 -1.35)  (layer "B.SilkS") (width 0.15))
        (fp_line (start 0.95 -1.35)  (end 0.25 -1.35)  (layer "B.SilkS") (width 0.15))
        (fp_line (start 0.25 -1.35)  (end 0.25 0.25)   (layer "B.SilkS") (width 0.15))
        (fp_line (start 0.95 6.25)   (end -4.95 6.25)  (layer "B.SilkS") (width 0.15))

        ${"" /* Plus sign */}
        (fp_line (start -1 1.5)      (end -1 2)        (layer "B.SilkS") (width 0.15))
        (fp_line (start -1.25 1.75)  (end -0.75 1.75)  (layer "B.SilkS") (width 0.15))`;

    const frontHoles = `
        (pad 1 thru_hole rect (at -1 0 ${p.rot}) (size 1.2 1.7) (drill 0.75) (layers *.Cu *.Mask) ${p.net.pos.str})
        (pad 2 thru_hole oval (at 1 0 ${p.rot}) (size 1.2 1.7) (drill 0.75) (layers *.Cu *.Mask) ${p.net.neg.str})`;

    const backHoles = `
        (pad 1 thru_hole oval (at -3 0 ${p.rot}) (size 1.2 1.7) (drill 0.75) (layers *.Cu *.Mask) ${p.net.neg.str})`;

    return `
    (module JST_PH_S2B-PH-K_02x2.00mm_Angled (layer F.Cu) (tedit 58D3FE32)

        (descr "JST PH series connector, S2B-PH-K, side entry type, through hole, Datasheet: http://www.jst-mfg.com/product/pdf/eng/ePH.pdf")
        (tags "connector jst ph")

        ${p.at /* parametric position */}

        ${"" /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${
      p.ref_hide
    } (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

        ${frontSilks}
        ${p.param.reversible ? backSilks : ""}

        ${frontHoles}
        ${p.param.reversible ? backHoles : ""}
    )`;
  },
};
