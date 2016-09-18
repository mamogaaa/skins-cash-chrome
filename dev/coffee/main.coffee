console.log 123
$.get 'https://api.csgofast.com/price/all', (data) ->
  prices = data
  setInterval ->
    $(".megaslider a[data-hashname]").each ->
      if $(@).hasClass("edited") then return
      marketHashName = $(@).attr('data-hashname')
      price = $(@).find(".absoluteprice span").html()/1
      _price = prices[marketHashName]*65
      $(@).addClass("edited")
      $(@).find(".absoluteprice").html "<i>p</i><span>#{(price).toFixed(2)}</span><span>/ #{(_price).toFixed(2)} #{(price/_price*100).toFixed(2)}%</span>"
  , 1000