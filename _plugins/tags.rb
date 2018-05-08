module Jekyll
  class TagListTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
    end

    def render(context)
      tags = []
      context.registers[:site].pages.each do |page| 
        if page.data.key?'layout' and page.data["layout"] == 'article'
          if page.data.key?'tags'
            page.data["tags"].each do |tag|
              if !tags.include?tag
                tags.push(tag)
              end
            end
          end
        end
      end
      tags = tags.sort
      #now output list
      s = ""
      tags.each do |tag|
        s += "<li><a href='/tag/" + tag + "'>" + tag + "</a></li>"
      end
      return s
    end

  end
end

Liquid::Template.register_tag('taglist', Jekyll::TagListTag)