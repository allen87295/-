
// $(function () {



var cot = 0;
var tempProductNum = 0;
var tempProductPrice = 0;
var tempProductName = 0;

$(document).ready(function(){
  $('.carousel').carousel({
    interval: 2000
  })
  
})

function nex(elm) {
  if (cot <= ($('.imgsOfRolling').children().length - 2)) {
    $('.imgsOfRolling img').eq(cot)
      .animate({ 'margin-left': `${elm}px` }, 500); cot++;
  }
  
}

function pre() {
  if (cot > 0) {
    cot--; $('.imgsOfRolling img').eq(cot)
      .animate({ 'margin-left': '0' }, 500);
  }
 
}



$('.previewPic').each(function (index) {
  $(this).on('click', function () {
    if (index > cot) {
      var temp = index - cot
      for (i = 0; i < temp; i++) {
        $('.imgsOfRolling img').eq(cot)
          .animate({ 'margin-left': '-505px' }, 500);
        cot++;
      }
      return cot = index;
    } else if (index < cot) {
      for (i = cot; i > index; i--) {
        cot--; $('.imgsOfRolling img').eq(cot)
          .animate({ 'margin-left': '0' }, 500);
      }
      return cot = index;
    }

  })
})

$('.previewImg').each(function (index) {
  $(this).on('mouseover', function () {
    if (index > cot) {
      var temp = index - cot
      for (i = 0; i < temp; i++) {
        $('.imgsOfRolling img').eq(cot)
          .animate({ 'margin-left': '-405px' }, 500);
        cot++;
      }
      return cot = index;
    } else if (index < cot) {
      for (i = cot; i > index; i--) {
        cot--; $('.imgsOfRolling img').eq(cot)
          .animate({ 'margin-left': '0' }, 500);
      }
      return cot = index;
    }

  })

})





$(window).scroll(function () {
  if ($(this).scrollTop() > 871) {
    $('.navOfProduct').addClass('navOfProductfixed');
    $('#goToTop').css('visibility', 'visible').css('opacity', '1').css('transition', '3s');
  } else {
    $('.navOfProduct').removeClass('navOfProductfixed');
    $('#goToTop').css('visibility', 'hidden').css('opacity', '0').css('transition', '1s');;
  }
});




$('#numPlus').on('click', function () {
  var temp = $('#buyNum').prop('value');
  $('#buyNum').prop('value', parseInt(temp) + 1);

})



$('#numLess').on('click', function () {
  var temp = $('#buyNum').prop('value');
  if (temp > 1)
    $('#buyNum').prop('value', parseInt(temp) - 1);
})



$('.navOfProduct').children().eq(0).on('click', function () {
  $('html,body').animate({ scrollTop: $('.productDes').children().eq(0).offset().top }, 1500);
})


$('.navOfProduct').children().eq(1).on('click', function () {
  $('html,body').animate({ scrollTop: $('.productDes').children().eq(3).offset().top }, 1500);
})

$('.navOfProduct').children().eq(2).on('click', function () {
  $('html,body').animate({ scrollTop: $('.productDes').children().eq(4).offset().top }, 1500);
})


$('#goToTop').on('click', function () {
  $('html,body').animate({ scrollTop: $('.saleList').offset().top }, 1000);
})




$('#topWearLi').on('click', function () {
  $('.topWear').slideToggle(300);

  if ($("#downImg1").prop('class') == 'rotateZImg') {
    $("#downImg1").removeClass('rotateZImg');
  } else {
    $("#downImg1").addClass('rotateZImg');
  }

})


$('#bottomWearLI').on('click', function () {
  $('.bottomWear').slideToggle(300);

  if ($("#downImg2").prop('class') == 'rotateZImg') {
    $("#downImg2").removeClass('rotateZImg');
  } else {
    $("#downImg2").addClass('rotateZImg');
  }

})


$('#eyeWearLI').on('click', function () {
  $('.eyeWear').slideToggle(300);

  if ($("#downImg3").prop('class') == 'rotateZImg') {
    $("#downImg3").removeClass('rotateZImg');
  } else {
    $("#downImg3").addClass('rotateZImg');
  }

})


$('.products').on('mouseenter', function () {
  $(this).find('.hoverFeatures').css('visibility', 'visible');
  $(this).find('.hoverProduct').css('opacity', '0.4')
})

$('.products').on('mouseleave', function () {
  $(this).find('.hoverFeatures').css('visibility', 'hidden');
  $(this).find('.hoverProduct').css('opacity', '1')
})


$('.putInCart').each(function (index) {
  $(this).on('click', function () {

    tempProductNum = $(this).parents().find('.hoverProduct').find('.productAll').eq(index).attr('src')
    tempProductPrice = $(this).parents().find('.thisProductPrice').eq(index).text();
    tempProductName = $(this).parents().find('.thisProductName').eq(index).text();
    return tempProductPrice, tempProductNum ,tempProductName;


  })
})


$('.putInCart').on('click', function () {
  $('.cartcontainer').append(`
<div id="backgroundContainer">
<div class="productContainer">
    <img class="leftOfImg" onclick="pre()" src="../picture/left.png" alt="">
    <div class="productsRollImg">
        <div class="imgsOfRolling" style="width: max-content;">
            <img class="productsImg" src="../picture/TshirtGif.gif" />
            <img class="productsImg" src="../picture/tshirtA1.jpeg" />
            <img class="productsImg" src="../picture/tshirtA2.jpeg" />
            <img class="productsImg" src="../picture/tshirtA3.jpeg" />
            <img class="productsImg" src="../picture/tshirtA4.jpeg" />
            <img class="productsImg" src="../picture/tshirtA5.jpeg" />
            <img class="productsImg" src="../picture/tshirtA6.jpeg" />
            <img class="productsImg" src="../picture/shirt1-1.jpg" />
            <img class="productsImg" src="../picture/shirt2-1.jpg" />
        </div>
    </div>
    <img class="rightOfImg" onclick="nex(-405)" src="../picture/right.png" alt="">
    
    
    <div class="productDescription">
        <h2>任選2件$600/預購/熱賣款韓國春夏素面短T 25色</h2>
        <span>買一送一 兩件$600 ! 素色基本款 優質棉T 新色注入 共25色</span>
        <span>衣櫃內超級需要的百搭單品 戶外麻豆 183/73 著L 室內麻豆 175/63 著M</span>
        <span>此為預購商品，需約7-14個工作天(不含假日)出貨</span>
        <span>下單後請勿任意取消訂單，謝謝您</span>
        <span>
            
            <div class="previewContainer">
                <div class="imgsOfScroll" style="width: max-content;">
                    <img class="previewImg"  src="../picture/TshirtGif.gif" />
                    <img class="previewImg"  src="../picture/tshirtA1.jpeg" />
                    <img class="previewImg"  src="../picture/tshirtA2.jpeg" />
                    <img class="previewImg"  src="../picture/tshirtA3.jpeg" />
                    <img class="previewImg"  src="../picture/tshirtA4.jpeg" />
                    <img class="previewImg"  src="../picture/tshirtA5.jpeg" />
                    <img class="previewImg"  src="../picture/tshirtA6.jpeg" />
                    <img class="previewImg"  src="../picture/shirt1-1.jpg" />
                    <img class="previewImg"  src="../picture/shirt2-1.jpg" />
                </div>
            </div>
            <p>售價：<b> NT$600 </b></p>
        </span>
        <div>
            <select class="productList">
                <option value="米色 / S">米色 / S</option>
                <option value="米色 / M">米色 / M</option>
                <option value="米色 / L">米色 / L</option>
                <option value="黑色 / S">黑色 / S</option>
                <option value="黑色 / M">黑色 / M</option>
                <option value="黑色 / L">黑色 / L</option>
            </select>
        </div>
        <div class="buyNumContainer">
            <button id="numLess">-</button>
            <input id="buyNum" type="text" value="1">
            <button id="numPlus">+</button>
        </div>
        
        <div>
            <button class="joinCart">加入購物車</button>
        </div>
    </div>
    
    <div id="x">
        <button id="xbutton" ><img class="xImg" src="../picture/X.jpg" alt=""></button>
    </div>
</div>

</div>
 `)

  $('#xbutton').on('click', function () {

    $('#backgroundContainer').remove();

  })


  $('.previewPic').each(function (index) {
    $(this).on('click', function () {
      if (index > cot) {
        var temp = index - cot
        for (i = 0; i < temp; i++) {
          $('.imgsOfRolling img').eq(cot)
            .animate({ 'margin-left': '-505px' }, 500);
          cot++;
        }
        return cot = index;
      } else if (index < cot) {
        for (i = cot; i > index; i--) {
          cot--; $('.imgsOfRolling img').eq(cot)
            .animate({ 'margin-left': '0' }, 500);
        }
        return cot = index;
      }

    })
  })

  $('.previewImg').each(function (index) {
    $(this).on('mouseover', function () {
      if (index > cot) {
        var temp = index - cot
        for (i = 0; i < temp; i++) {
          $('.imgsOfRolling img').eq(cot)
            .animate({ 'margin-left': '-405px' }, 500);
          cot++;
        }
        return cot = index;
      } else if (index < cot) {
        for (i = cot; i > index; i--) {
          cot--; $('.imgsOfRolling img').eq(cot)
            .animate({ 'margin-left': '0' }, 500);
        }
        return cot = index;
      }

    })

  })



  $('#numPlus').on('click', function () {
    var temp = $('#buyNum').prop('value');
    $('#buyNum').prop('value', parseInt(temp) + 1);

  })



  $('#numLess').on('click', function () {
    var temp = $('#buyNum').prop('value');
    if (temp > 1)
      $('#buyNum').prop('value', parseInt(temp) - 1);
  })


  $('.joinCart').on('click', function () {
    $('.productInCart').append(`<div class="Cartproduct">
  <div>
      <img src="${tempProductNum}" alt="">
  </div>
  <div>
      <div class="productName">${tempProductName}</div>
      <div class="productSize">${$(this).parents().find('.productList').prop('value')}</div>
      <div class="countNumPrice">
          <div class="productNum">${$(this).parents().find('#buyNum').prop('value')}</div>
          <div>x</div>   
          <div class="productPrice">${tempProductPrice}</div>
      </div>
  </div>
  <div class="productDel">刪除</div>
</div>`
    )

    $('#backgroundContainer').remove();
    $('#cartSwitch').prop('checked', 'checked')


    $('.productDel').on('click', function () {
      $(this).parent().remove('.Cartproduct')

    })

  })

})

$('.productDel').on('click', function () {
  (this).parent().remove('.Cartproduct')

})


$('#registeredMem').on('click',function(){
$('.loginContainer').toggle();
$('.registeredContainer').toggle();
})

$('#loginMemR').on('click',function(){
  $('.loginContainer').toggle();
  $('.registeredContainer').toggle();
  })
  



