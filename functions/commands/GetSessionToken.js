const Cookie = require('tough-cookie').Cookie;

const GetSessionToken = class {

	static call(req) {
		let session;
		if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
			session = req.headers.authorization.split('Bearer ')[1];
			if (session)
				return session;
		}

		session = req.cookies && req.cookies.__session;
		if (session)
			return session;

		const raw_cookies = req.get('cookie');
		if (!raw_cookies)
			return null;
		let cookies = {};
		for (let rc of raw_cookies.split('; ')) {
			let c = Cookie.parse(rc);
			cookies[c.key] = c;
		}
		session = cookies && cookies['__session'];
		return session;
	}

};
module.exports = GetSessionToken;
