require('dotenv').config();

const {google} = require('googleapis');
let creds = JSON.parse(process.env.GOOGLE_AUTH);

const auth = new google.auth.GoogleAuth({
	credentials:creds,
	scopes: ['https://www.googleapis.com/auth/analytics.readonly']
});

const ap = google.analyticsreporting({
	version:'v4',
	auth:auth
});

module.exports = function() {

	return new Promise(async (resolve, reject) => {

		const res = await ap.reports.batchGet({
			requestBody: {
			reportRequests: [
				{
				viewId: '73496341',
				dateRanges: [
					{
					startDate: '7daysAgo',
					endDate: 'yesterday',
					},
				],
				dimensions:[
					{ "name": 'ga:pagePath' },
				],
				metrics: [
					{
					expression: 'ga:pageviews',
					},
				],
				orderBys:[
					{ fieldName: "ga:pageviews", sortOrder:'DESCENDING' }
				],
				pageSize:10
				},
			],
			},
		});

		let report = res.data.reports[0].data;
		let data = report.rows.map(r => {
			return { path: r.dimensions[0], views: r.metrics[0].values[0]};
		}).filter(d => {
			if(d.path.indexOf('article') === -1) return false;
			return true;
		});;

		//console.log('DATA', JSON.stringify(data, null, '\t'));
		resolve(data);

	});

};