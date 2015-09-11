var input = (function(){
	var query = {}, Input = {},
		search = window.location.search.substr(1).split('&');
	for(var i = 0; i < search.length; i++) {
		var q, v, t, s;
		s = search[i];
		if(!s) continue;
		t = s.split('=');
		q = t[0]; v = t[1];
		query[q] = v;
	}

	Object.defineProperties(Input, {
		param: {
			get: function() {
				var qstr = '';
				for(var q in this) {
					qstr += q + '=' + this[q] + '&';
				}
				return qstr.replace(/\&$/, '');
			}
		},
		not: {
			value: function(names) {
				if(typeof names == 'string') {
					delete this[names];
				} else {
					for(var i = 0; i < names.length; i++) {
						delete this[names[i]];
					}
				}
				return this;
			}
		},
		append: {
			value: function(qrs) {
				for(var q in qrs) {
					this[q] = qrs[q];
				}
				return this;
			}
		}
	});
	return function(names) {
		var qstr = Object.create(Input);
		if(typeof names == 'string') return query[names];
		for(var q in query) {
			if(names instanceof Array) {
				if(names.indexOf(q) !== -1) {
					qstr[q] = query[q];
				}
			} else {
				qstr[q] = query[q];
			}
		}
		return qstr;
	}
})();