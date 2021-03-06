// The directions said to fix any style or functionality problems, IMO using
// ES5 pseudo-classes and passing a callback is a style problem in the current
// JS ecosystem. This is a dramatic change, but it's equivalent and standard.
class Api {
  constructor() {
    this.baseUrl = 'https://dea.staging.credsimple.com';
    this.path = '/v1/clients_providers/';
    this.token = '3ad6aef59ee542ec881c5bc6593ba9c3';
    this.id = 20;
  }
  getData() {
    const { baseUrl, path, token, id } = this;
    const requestUrl = baseUrl + path + id + '?token=' + token;

    return fetch(requestUrl)
      .then(res => res.json())
  }
}

export default new Api();
