const getCookie = (name) => {
  return document.cookie.split(';').some((c) => {
    return c.trim().startsWith(name + '=');
  });
};
const deleteCookie = (name, path, domain) => {
  if (getCookie(name)) {
    document.cookie =
      name +
      '=' +
      (path ? ';path=' + path : '') +
      (domain ? ';domain=' + domain : '') +
      ';expires=Thu, 01 Jan 1970 00:00:01 GMT';
  }
};
document.cookie = 'xyz=abc;';
document.cookie = 'abc=abc;';
document.cookie = 'foo=abc;';
document.cookie = 'bar=abc;';
//deleteCookie('foo');
