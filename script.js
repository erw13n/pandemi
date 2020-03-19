var a = {
	data : {
		q: [
			'Pernah kontak dengan pasien positif COVID-19 (berada dalam satu ruangan yang sama/kontak dalam jarak 1 meter) ATAU Pernah berkunjung ke negara/daerah endemis COVID-19 dalam 14 hari terakhir?',
			`Sedang atau pernah mengalami :
				<ul style="text-align: left; margin: 0 auto; max-width: 200px;"><li>demam (> 38&#176; C)</li><li>pilek</li><li>batuk</li><li>sesak napas</li></ul>`,
			'Karantida diri anda selama 14 hari terhitung setelah kontak/kunjungan',
			`Selama 14 hari karantina diri, Anda mengalami :
				<ul style="text-align: left; margin: 0 auto; max-width: 200px;"><li>demam (> 38&#176; C)</li><li>pilek</li><li>batuk</li><li>sesak napas</li></ul>`,
		],
		a: [
			'Hubungi 119 EXT 9 atau periksakan diri ke rumah sakit rujukan COVID-19 di daerah anda',
			'Periksakan diri ke dokter terdekat dan istirahat yang cukup.',
			'Anda tidak perlu memeriksakan diri ke rumah sakit.<br/><br/>Selalu jaga kesehatan Anda.'
		]
	},
	ele : {
		$q : $('<p class="lead" />'),
		$y : $('<a href="javascript:;" class="btn btn-lg btn-danger" /a>'),
		$t : $('<a href="javascript:;" class="btn btn-lg btn-secondary" /a>'),
		$main : $('<div />')
	},
	q: (q, y, t) => {
		a.ele.$main.empty();
		$('#main').empty();
		a.ele.$q.html(q);
		a.ele.$y.text('YA').click(() => y());
		a.ele.$t.text('TIDAK').click(() => t());
		a.ele.$main.append(
			a.ele.$q,
			$('<p class="lead" />').append(
				a.ele.$y,
				a.ele.$t
			)
		);
		
		$('#main').append(a.ele.$main);
	},
	a: (q, next) => {
		a.ele.$main.empty();
		$('#main').empty();
		a.ele.$q.html(`<b>${q}</b>`);
		a.ele.$t.text('OK').click(() => a.load());
		if (next)
			a.ele.$t.text('LALU').click(() => next());
		a.ele.$main.append(
			a.ele.$q,
			$('<p class="lead" />').append(
				a.ele.$t,
			)
		);
		
		$('#main').append(a.ele.$main);
	},
	load: () => {
		a.q(a.data.q[0], 
		function() {
			a.q(a.data.q[1], () => {
				a.a(a.data.a[0])
			}, () => {
				a.a(a.data.q[2], () => {
					a.q(a.data.q[3], () => {
						a.a(a.data.a[0])
					}, () => {
						a.a(a.data.a[2])
					})
				})
			})
		},
		function() {
			a.q(a.data.q[1], () => {
				a.a(a.data.a[1])
			}, () => {
				a.a(a.data.a[2])
			})
		})
	},
	init: () => {
		a.load();
	}
}