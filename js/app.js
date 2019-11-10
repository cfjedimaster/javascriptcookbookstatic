const app = new Vue({
	el:'#app',
	data: {
		searchEnabled:false,
		docs:null,
		idx:null,
		term:'',
		results:null
	},
	async created() {
		let search = window.document.location.search;
		if(!search || search.indexOf('?search=') !== 0 ) return;
		this.term = search.split('?search=')[1];
		
		let result = await fetch('/index.json');
		let docs = await result.json();
		// assign an ID so it's easier to look up later, it will be the same as index
		this.idx = lunr(function () {
			this.ref('id');
			this.field('title');
			this.field('content');
			docs.forEach(function (doc, idx) {
				doc.id = idx;
				this.add(doc); 
			}, this);
		});
		// um should this be inside the cb above? I think maybe so perhaps...
		this.docs = docs;
		this.searchEnabled = true;
		this.search();
	},
	computed: {
		noResults() {
			return this.results.length === 0;
		}
	},
	methods:{
		search() {
			console.log('search', this.term);
			let results = this.idx.search(this.term);
			// we need to add title, url from ref
			results.forEach(r => {
				r.title = this.docs[r.ref].title;
				r.url = this.docs[r.ref].url;
			});
			this.results = results;			
		}
	}
});