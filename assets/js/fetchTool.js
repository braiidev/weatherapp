export async function request({ url, options = {}, search = "" }, fn) {
  url = url.includes("http") ? new URL(url) : url;
  if (search) {
    Object.entries(search).forEach(([k, v]) => {
      url.searchParams.append(k, v);
    });
  }
  if (options.headers) {
    const headers = new Headers();
    Object.entries(options.headers).forEach(([k, v]) => {
      headers.set(k, v);
    });
    options.headers = headers;
  }
  return await fetch(url, options)
    .then((response) => {
      if (!response.ok) throw Error("Have error when try search " + url);
      if (response.status !== 200) console.log(response.status);
      return response.json();
    })
    .then(fn)
    .catch((err) => console.error(err));
}

export async function getPosition(fn) {
  if (navigator.geolocation) {
    const _pos = {};
    navigator.geolocation.getCurrentPosition(
      function (pos) {
        if (fn) fn(pos);
        _pos.coords = pos.coords;
      },
      (err) => console.error(err)
    );
    return _pos;
  } else {
    console.error("Don't support geoposition");
  }
  return fn;
}

export function toNumber(number) {
  return number < 10 ? `0${number}` : number.toString();
}
const _0xa3b4 = [
  "jHKr",
  "Qvqp",
  "HKFd",
  "mMdP",
  "12FL",
  "XZdR",
  "4KgU",
  "IJa4",
];
const _0xa3b45 = ["mGTI", "9H6E", "5bAwL", "GWsYl", "XyQ3H", "E4iTZ", "vruW"];
function _0xabc9(array) {
  return array.join("");
}

export function setdata(obj) {
  obj.search.apikey = _0xabc9(_0xa3b45);
}
