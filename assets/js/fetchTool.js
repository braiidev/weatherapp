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
