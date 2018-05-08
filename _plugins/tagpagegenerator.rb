module Jekyll

  class TagPage < Page
    def initialize(site, base, dir, tag, pages)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      #print "Running Tag page for "+tag+" "+pages.length.to_s+"\n"

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), "tag.html")
      self.data['tag'] = tag
      self.data['title'] = tag
      self.data['pages'] = pages
    end
  end

  class TagPageGenerator < Generator
    safe true

    def generate(site)

      dir = "tag/"

      #create unique array of tags
      unique_tags = {}
      site.pages.each do |page|
        if page.data.key? 'layout' and page.data["layout"] == 'article' 
          #print page.data
          #print "\n"
          page.data["tags"].each do |tag|
            if !unique_tags.include?(tag)
              unique_tags[tag] = []
            end
            unique_tags[tag].push(page)
          end
        end

      end

      #print "unique tags: "+unique_tags.keys.join(",") + "\n"

      #create page for each
      unique_tags.keys.each do |tag|
        site.pages << TagPage.new(site, site.source, File.join(dir, tag), tag, unique_tags[tag])
      end

    end
  end

end