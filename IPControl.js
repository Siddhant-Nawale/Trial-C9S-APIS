var ipList = [
	'::21',
]
// mode: 'allow','deny'
var options = {
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


module.exports= {
    ipList,options
}
