export var ipList = [
	'::1',
]
// mode: 'allow','deny'
export var options = {
	mode: 'allow',
	denys: [],
	allows: ipList,
	forceConnectionAddress: false,
	log: function(clientIp, access) {
		console.log(clientIp + (access ? ' accessed.' : ' denied.'));
	},
	statusCode: 401,
	redirectTo: '',
	message: 'Unauthorized'
};
