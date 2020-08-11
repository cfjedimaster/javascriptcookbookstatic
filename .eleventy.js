const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
	
	eleventyConfig.addPassthroughCopy("img");
	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addPassthroughCopy("js");
	eleventyConfig.addPassthroughCopy("favicon.ico");
	eleventyConfig.addPassthroughCopy("_redirects");
	
	eleventyConfig.addCollection("articles", function(collection) {
		return collection.getFilteredByGlob("**/article/*.md").sort((a, b) => {
			let aDate = new Date(a.data.published);
			let bDate = new Date(b.data.published);
			if(aDate.getTime() < bDate.getTime()) return 1;
			if (aDate.getTime() > bDate.getTime()) return -1;
			return 0;
		});
	});

  let titleArticleCache = {};
  eleventyConfig.addFilter('toData', (p, articles) => {
    if(titleArticleCache[p]) return titleArticleCache[p];
    for(let i=0;i<articles.length;i++) {
      if(articles[i].url == p) {
        titleArticleCache[p] = { title: articles[i].data.title, published: articles[i].data.published};
        return titleArticleCache[p];
      }
    }
    // cache that we couldn't match
    titleArticleCache[p] = { title: ''};
    return titleArticleCache[p];
  });

	eleventyConfig.addFilter('my_jsonify', s => {
		return s.replace(/&/g, '&amp;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
	});

	eleventyConfig.addShortcode('dateFormat', function(d) {
		if(!Intl) return d;
		if(!d) return '';
		return new Intl.DateTimeFormat('en-US').format(new Date(d));	
	});

	// Credit: https://github.com/11ty/eleventy-base-blog/blob/master/.eleventy.js
	eleventyConfig.addCollection("tagList", function(collection) {
		let tagSet = new Set();
		collection.getAll().forEach(function(item) {
		  if( "tags" in item.data ) {
			let tags = item.data.tags;
			/*
			tags = tags.filter(function(item) {
				console.log('item', item);
			  switch(item) {
				// this list should match the `filter` list in tags.njk
				case "all":
				case "nav":
				case "post":
				case "posts":
				  return false;
			  }
			  return true;
			});
			*/

			for (const tag of tags) {
			  tagSet.add(tag);
			}
		  }
		});
	  
		// returning an array in addCollection works in Eleventy 0.5.3
		return [...tagSet];
	});

	eleventyConfig.addPlugin(pluginRss);  

	eleventyConfig.addShortcode('excerpt', article => extractExcerpt(article));

	// https://keepinguptodate.com/pages/2019/06/creating-blog-with-eleventy/
	function extractExcerpt(article) {
		if (!article.hasOwnProperty('templateContent')) {
			return null;
		}
	
		let excerpt = null;
		const content = article.templateContent;

		// The start and end separators to try and match to extract the excerpt
		const separatorsList = [
		{ start: '<!-- Excerpt Start -->', end: '<!-- Excerpt End -->' },
		{ start: '<p>', end: '</p>' }
		];
	
		separatorsList.some(separators => {
		const startPosition = content.indexOf(separators.start);
		const endPosition = content.indexOf(separators.end);
	
		if (startPosition !== -1 && endPosition !== -1) {
			excerpt = content.substring(startPosition + separators.start.length, endPosition).trim();
			return true; // Exit out of array loop on first match
		}
		});
		return JSON.stringify(excerpt);
	}	

};