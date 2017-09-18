const API_URL = "http://localhost:3000",
  ROUTE_URL = `${API_URL}/routes`;

const API = {
  fetchSpeedRunRoutes() {
    console.info('fetchSpeedRunRoutes');
    return new Promise((res, rej) => { res([{
  		id: 1,
  		name: 'SM64 16 Star',
  		sections: [
  			{ id: 1, name: 'BOB (1)', stats: { gold: 0, pb: 119500 } },
  			{ id: 2, name: 'WF (6)', stats: { gold: 0, pb: 183400 } },
  			{ id: 3, name: 'CCM (8)', stats: { gold: 0, pb: 139900 } },
  			{ id: 4, name: 'Key 1 (9)', stats: { gold: 0, pb: 132400 } }
  		]
  	}]) });
  },
  fetchUrlExample() {
    let fetch = window.fetch(ROUTE_URL)
    return fetch.then(r => { return r.json() })
  },
}

export default API
