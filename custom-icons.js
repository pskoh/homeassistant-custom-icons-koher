var icons = {
  "koher_logo":[0,0,24,24,"M4.0 7.0 H20.0 V10.0 H4.0 V7.0z M4.0 14.0 H20.0 V17.0 H4.0 V14.0z "],
  "lamele_dol":[0,0,24,24,"M 3.0, 2.5 a 1.0,1.0 0 1,0 2.0,0 a 1.0,1.0 0 1,0 -2.0,0 M 19.0, 9.5 a 1.0,1.0 0 1,0 2.0,0 a 1.0,1.0 0 1,0 -2.0,0 M 3.0, 8.5 a 1.0,1.0 0 1,0 2.0,0 a 1.0,1.0 0 1,0 -2.0,0 M 19.0, 15.5 a 1.0,1.0 0 1,0 2.0,0 a 1.0,1.0 0 1,0 -2.0,0 M 3.0, 14.5 a 1.0,1.0 0 1,0 2.0,0 a 1.0,1.0 0 1,0 -2.0,0 M 19.0, 21.5 a 1.0,1.0 0 1,0 2.0,0 a 1.0,1.0 0 1,0 -2.0,0 M4,1.5 20,8.5 20,10.5 4,3.5z M4,7.5 20,14.5 20,16.5 4,9.5z M4,13.5 20,20.5 20,22.5 4,15.5z "],
  "lamele_gora":[0,0,24,24,"M 3.0, 9.5 a 1.0,1.0 0 1,0 2.0,0 a 1.0,1.0 0 1,0 -2.0,0 M 19.0, 2.5 a 1.0,1.0 0 1,0 2.0,0 a 1.0,1.0 0 1,0 -2.0,0 M 3.0, 15.5 a 1.0,1.0 0 1,0 2.0,0 a 1.0,1.0 0 1,0 -2.0,0 M 19.0, 8.5 a 1.0,1.0 0 1,0 2.0,0 a 1.0,1.0 0 1,0 -2.0,0 M 3.0, 21.5 a 1.0,1.0 0 1,0 2.0,0 a 1.0,1.0 0 1,0 -2.0,0 M 19.0, 14.5 a 1.0,1.0 0 1,0 2.0,0 a 1.0,1.0 0 1,0 -2.0,0 M4,8.5 20,1.5 20,3.5 4,10.5z M4,14.5 20,7.5 20,9.5 4,16.5z M4,20.5 20,13.5 20,15.5 4,22.5z "],
  "zaluzje_otworz":[0,0,24,24,"M2.0 2.0 H22.0 V4.0 H2.0 V2.0z M2.0 5.0 H22.0 V6.6 H2.0 V5.0z M2.0 7.2 H22.0 V8.8 H2.0 V7.2z M2.0 9.4 H22.0 V11.0 H2.0 V9.4z M1.5 2.0 H3.0 V22.0 H1.5 V2.0z M21.0 2.0 H22.5 V22.0 H21.0 V2.0z "],
  "zaluzje_stop":[0,0,24,24,"M6.0 6.0 H18.0 V18.0 H6.0 V6.0z "],
  "zaluzje_zamknij":[0,0,24,24,"M2.0 2.0 H22.0 V4.0 H2.0 V2.0z M2.0 5.0 H22.0 V7.2 H2.0 V5.0z M2.0 8.0 H22.0 V10.2 H2.0 V8.0z M2.0 11.0 H22.0 V13.2 H2.0 V11.0z M2.0 14.0 H22.0 V16.2 H2.0 V14.0z M2.0 17.0 H22.0 V19.2 H2.0 V17.0z M2.0 20.0 H22.0 V22.2 H2.0 V20.0z M1.5 2.0 H3.0 V22.7 H1.5 V2.0z M21.0 2.0 H22.5 V22.7 H21.0 V2.0z "],
  }

async function getIcon(name) {
  if (!(name in icons)) {
    console.log(`Icon "${name}" not available`);
    return '';
  }

  var svgDef = icons[name];
  var primaryPath = svgDef[4];
  return {
    path: primaryPath,
    viewBox: svgDef[0] + " " + svgDef[1] + " " + svgDef[2] + " " + svgDef[3]
  }

}

async function getIconList() {
  return Object.entries(icons).map(([icon]) => ({
    name: icon
  }));
}

window.customIconsets = window.customIconsets || {};
window.customIconsets["custom"] = getIcon;

window.customIcons = window.customIcons || {};
window.customIcons["custom"] = { getIcon, getIconList };
