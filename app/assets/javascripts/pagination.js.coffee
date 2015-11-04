$(document).on 'ready page:load', ->
  if $('#infinite-scrolling').size() > 0
    $(window).on 'scroll', ->
      if $('#tag').val()
        more_posts_url = $('#infinite-scrolling .next_page a').attr('href')
        if more_posts_url
          more_posts_url=more_posts_url+"&tag="+$('#tag').val()
      else
        more_posts_url = $('#infinite-scrolling .next_page a').attr('href')

      if more_posts_url && $(window).scrollTop() > $(document).height() - $(window).height() - 350
        $('.pagination').html('<div id="anim_load"><img src="/assets/103.GIF" alt="Loading..." title="Loading..." /></div>')
        setTimeout (-> $.getScript more_posts_url, ->), 2000
      return
  return
