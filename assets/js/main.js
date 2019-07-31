$(window).resize(function(){
    $('#researchList').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-item',
    })
})
$(window).on('load',function(){
    $('#researchList').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-item',
    })
})

$(window).on('scrollstart',function(){
    $('#insideIcon').css(
        {'animation-play-state':'running'}
    )
})
$(window).on('scrollstop',function(){
    $('#insideIcon').css(
        {'animation-play-state':'paused'}
    )
})
// function for research see more
$(document).ready(function () {
    var seeMoreBtn = document.querySelectorAll('.seeMore')
    for(i=0; i<seeMoreBtn.length;i++){
        seeMoreBtn[i].addEventListener('click',function(){
            this.style.display = 'none';
            var li = this.parentNode
            li.classList.add('open')
            $('#researchList').masonry({
                itemSelector: '.grid-item',
                columnWidth: '.grid-item',
            })
        })
    }
})

// header hamburger select show and close
var hamburgerClick = document.getElementById('hamburgerClick')
var selectList = document.getElementById('selectList')
hamburgerClick.addEventListener('click',function(){
    selectList.classList.toggle('active')
})

// scroll bar
var isRoll = false
function goToPosition(target){
    document.body.onmousewheel = function(){
        return false
    }
    isRoll = true
    var scrollT = document.body.scrollTop|| document.documentElement.scrollTop
    if (scrollT >target) {
        var timer = setInterval(function(){
            var scrollT = document.body.scrollTop|| document.documentElement.scrollTop
            var step = Math.floor(-scrollT/10)
            document.documentElement.scrollTop = document.body.scrollTop = step + scrollT
            if(scrollT <= target){
                document.body.scrollTop = document.documentElement.scrollTop = target
                document.body.onmousewheel = function(){
                    return true
                }
                isRoll = false
                clearTimeout(timer)
            }
        },20)
    }else if(scrollT == 0){
        var timer = setInterval(function(){
            var scrollT = document.body.scrollTop|| document.documentElement.scrollTop
            var step = Math.floor(300/3*0.7)*2
            document.documentElement.scrollTop = document.body.scrollTop = step + scrollT
            if(scrollT >= target){
                document.body.scrollTop = document.documentElement.scrollTop = target
                document.body.onmousewheel = function(){
                    return true
                }
                isRoll = false
                clearTimeout(timer)
            }
        },1)
    }else if(scrollT < target){
        var timer = setInterval(function(){
            var scrollT = document.body.scrollTop|| document.documentElement.scrollTop
            var step = Math.floor(scrollT/10)
            document.documentElement.scrollTop = document.body.scrollTop = step + scrollT
            if(scrollT >= target){
                document.body.scrollTop = document.documentElement.scrollTop = target
                document.body.onmousewheel = function(){
                    return true
                }
                isRoll = false
                clearTimeout(timer)
            }
        },20)
    }else if(target == scrollT){
        return false
    }
}
// position select(mobile)
var homePosition_Mobile = document.getElementById('homePosition_mobile')
var portfolioPosition_mobile = document.getElementById('portfolioPosition_mobile')
var researchPosition_mobile = document.getElementById('researchPosition_mobile')
var teamPosition_mobile = document.getElementById('teamPosition_mobile')
var partnershipPosition_mobile = document.getElementById('partnershipPosition_mobile')
var mediaPosition_mobile = document.getElementById('mediaPosition_mobile')
var contactPosition_mobile = document.getElementById('contactPosition_mobile')
// position select(web)
var homePosition = document.getElementById('homePosition')
var portfolioPosition = document.getElementById('portfolioPosition')
var researchPosition = document.getElementById('researchPosition')
var teamPosition = document.getElementById('teamPosition')
var partnershipPosition = document.getElementById('partnershipPosition')
var mediaPosition = document.getElementById('mediaPosition')
var contactPosition = document.getElementById('contactPosition')

function Dimension(elmID) {
    var elmHeight, elmMargin, elm = document.getElementById(elmID)
    if(document.all) {// IE
        elmHeight = parseInt(elm.currentStyle.height)
        elmMargin = parseInt(elm.currentStyle.marginTop, 10) + parseInt(elm.currentStyle.marginBottom, 10)
    } else {// Mozilla
        elmHeight = parseInt(document.defaultView.getComputedStyle(elm, '').getPropertyValue('height'))
        elmMargin = parseInt(document.defaultView.getComputedStyle(elm, '').getPropertyValue('margin-top')) + parseInt(document.defaultView.getComputedStyle(elm, '').getPropertyValue('margin-bottom'))
    }
    return (elmHeight + elmMargin)
}
// marginTop
function DimensionMarginTop(elmID) {
    var elmMargin, elm = document.getElementById(elmID)
    if(document.all) {// IE
        elmMargin = parseInt(elm.currentStyle.marginTop, 10)
    } else {// Mozilla
        elmMargin = parseInt(document.defaultView.getComputedStyle(elm, '').getPropertyValue('margin-top'))
    }
    return (elmMargin)
}
// paddingtop
function DimensionPaddingTop(elmID) {
    var elmPadding, elm = document.getElementById(elmID)
    if(document.all) {// IE
        elmPadding = parseInt(elm.currentStyle.paddingTop, 10)
    } else {// Mozilla
        elmPadding = parseInt(document.defaultView.getComputedStyle(elm, '').getPropertyValue('padding-top'))
    }
    return (elmPadding)
}
// btns
// ------------------------------------------------------------------------------------

// home(mobile)
homePosition_Mobile.addEventListener('click',function(){
    var scrollT = document.body.scrollTop|| document.documentElement.scrollTop
    if(isRoll || scrollT == 0){
        return
    }
    if(!isRoll){
        goToPosition(0),selectList.classList.remove('active')
    }
})
// home(web)
homePosition.addEventListener('click',function(){
    var scrollT = document.body.scrollTop|| document.documentElement.scrollTop
    if(isRoll || scrollT == 0){
        return
    }
    if(!isRoll){
        goToPosition(0),selectList.classList.remove('active')
    }
})
// portfolio(mobile)
portfolioPosition_mobile.addEventListener('click',function(){
    var headerHeight = Dimension('header')
    var homeHeight = Dimension('mainLogo-area')
    var thisPosition = homeHeight-headerHeight
    var scrollT = document.body.scrollTop|| document.documentElement.scrollTop
    if(isRoll || scrollT == thisPosition){
        return
    }
    if(!isRoll){
        goToPosition(thisPosition)
        selectList.classList.remove('active')
    }
})
// portfolio(web)
portfolioPosition.addEventListener('click',function(){
    var headerHeight = Dimension('header')
    var homeHeight = Dimension('mainLogo-area')
    var thisPosition = homeHeight-headerHeight
    var scrollT = document.body.scrollTop|| document.documentElement.scrollTop
    if(isRoll || scrollT == thisPosition){
        return
    }
    if(!isRoll){
        goToPosition(thisPosition)
        selectList.classList.remove('active')
    }
})
// research(mobile)
// researchPosition_mobile.addEventListener('click',function(){
//     var headerHeight = Dimension('header')
//     var homeHeight = Dimension('mainLogo-area')
//     var portfolioHeight = Dimension('portfolio-area')
//     var thisMarginTop = DimensionMarginTop('research-area')
//     var thisPosition = homeHeight+portfolioHeight+thisMarginTop-headerHeight
//     var scrollT = document.body.scrollTop|| document.documentElement.scrollTop
//     if(isRoll || scrollT == thisPosition){
//         return
//     }
//     if(!isRoll){
//         goToPosition(thisPosition)
//         selectList.classList.remove('active')
//     }
// })
// research(web)
// researchPosition.addEventListener('click',function(){
//     var headerHeight = Dimension('header')
//     var homeHeight = Dimension('mainLogo-area')
//     var portfolioHeight = Dimension('portfolio-area')
//     var thisMarginTop = DimensionMarginTop('research-area')
//     var thisPosition = homeHeight+portfolioHeight+thisMarginTop-headerHeight
//     var scrollT = document.body.scrollTop|| document.documentElement.scrollTop
//     if(isRoll || scrollT == thisPosition){
//         return
//     }
//     if(!isRoll){
//         goToPosition(thisPosition)
//         selectList.classList.remove('active')
//     }
// })
// team(mobile)
teamPosition_mobile.addEventListener('click',function(){
    var headerHeight = Dimension('header')
    var homeHeight = Dimension('mainLogo-area')
    var portfolioHeight = Dimension('portfolio-area')
    var researchHeight = Dimension('research-area')
    var thisPosition = homeHeight+portfolioHeight+researchHeight-headerHeight
    var scrollT = document.body.scrollTop|| document.documentElement.scrollTop
    if(isRoll || scrollT == thisPosition){
        return
    }
    if(!isRoll){
        goToPosition(thisPosition)
        selectList.classList.remove('active')
    }
})
// team(web)
teamPosition.addEventListener('click',function(){
    var headerHeight = Dimension('header')
    var homeHeight = Dimension('mainLogo-area')
    var portfolioHeight = Dimension('portfolio-area')
    var researchHeight = Dimension('research-area')
    var thisPosition = homeHeight+portfolioHeight+researchHeight-headerHeight
    var scrollT = document.body.scrollTop|| document.documentElement.scrollTop
    if(isRoll || scrollT == thisPosition){
        return
    }
    if(!isRoll){
        goToPosition(thisPosition)
        selectList.classList.remove('active')
    }
})
// partnership(mobile)
partnershipPosition_mobile.addEventListener('click',function(){
    var headerHeight = Dimension('header')
    var homeHeight = Dimension('mainLogo-area')
    var portfolioHeight = Dimension('portfolio-area')
    var researchHeight = Dimension('research-area')
    var teamHeight = Dimension('team-area')
    var thisPaddingTop = DimensionPaddingTop('partnership-area')
    var thisPosition = homeHeight+portfolioHeight+researchHeight+teamHeight+thisPaddingTop-headerHeight
    var scrollT = document.body.scrollTop|| document.documentElement.scrollTop
    if(isRoll || scrollT == thisPosition){
        return
    }
    if(!isRoll){
        goToPosition(thisPosition)
        selectList.classList.remove('active')
    }
})
// partnership(web)
partnershipPosition.addEventListener('click',function(){
    var headerHeight = Dimension('header')
    var homeHeight = Dimension('mainLogo-area')
    var portfolioHeight = Dimension('portfolio-area')
    var researchHeight = Dimension('research-area')
    var teamHeight = Dimension('team-area')
    var thisPaddingTop = DimensionPaddingTop('partnership-area')
    var thisPosition = homeHeight+portfolioHeight+researchHeight+teamHeight+thisPaddingTop-headerHeight
    var scrollT = document.body.scrollTop|| document.documentElement.scrollTop
    if(isRoll || scrollT == thisPosition){
        return
    }
    if(!isRoll){
        goToPosition(thisPosition)
        selectList.classList.remove('active')
    }
})
// media(mobile)
mediaPosition_mobile.addEventListener('click',function(){
    var headerHeight = Dimension('header')
    var homeHeight = Dimension('mainLogo-area')
    var portfolioHeight = Dimension('portfolio-area')
    var researchHeight = Dimension('research-area')
    var teamHeight = Dimension('team-area')
    var partnershipHeight = Dimension('partnership-area')
    var thisPosition = homeHeight+portfolioHeight+researchHeight+teamHeight+partnershipHeight-headerHeight
    var scrollT = document.body.scrollTop|| document.documentElement.scrollTop
    if(isRoll || scrollT == thisPosition){
        return
    }
    if(!isRoll){
        goToPosition(thisPosition)
        selectList.classList.remove('active')
    }
})
// media(web)
mediaPosition.addEventListener('click',function(){
    var headerHeight = Dimension('header')
    var homeHeight = Dimension('mainLogo-area')
    var portfolioHeight = Dimension('portfolio-area')
    var researchHeight = Dimension('research-area')
    var teamHeight = Dimension('team-area')
    var partnershipHeight = Dimension('partnership-area')
    var thisPosition = homeHeight+portfolioHeight+researchHeight+teamHeight+partnershipHeight-headerHeight
    var scrollT = document.body.scrollTop|| document.documentElement.scrollTop
    if(isRoll || scrollT == thisPosition){
        return
    }
    if(!isRoll){
        goToPosition(thisPosition)
        selectList.classList.remove('active')
    }
})
// contact(mobile)
contactPosition_mobile.addEventListener('click',function(){
    var total = document.body.offsetHeight
    var vh = window.screen.height
    var bottomPosition = total-vh
    var scrollT = document.body.scrollTop|| document.documentElement.scrollTop
    if(isRoll || scrollT == bottomPosition){
        return
    }
    if(!isRoll){
        goToPosition(bottomPosition),selectList.classList.remove('active')
    }
})
// contact(web)
contactPosition.addEventListener('click',function(){
    var total = document.body.offsetHeight
    var vh = window.screen.height
    var bottomPosition = total-vh
    var scrollT = document.body.scrollTop|| document.documentElement.scrollTop
    if(isRoll || scrollT == bottomPosition){
        return
    }
    if(!isRoll){
        goToPosition(bottomPosition),selectList.classList.remove('active')
    }
})

window.addEventListener('scroll',function(){
    var scrollT = document.body.scrollTop|| document.documentElement.scrollTop
    var headerHeight = Dimension('header')
    var homeHeight = Dimension('mainLogo-area')
    var portfolioHeight = Dimension('portfolio-area')
    var researchHeight = Dimension('research-area')
    var researchMarginTop = DimensionMarginTop('research-area')
    var teamHeight = Dimension('team-area')
    var partnershipHeight = Dimension('partnership-area')
    var partnershipPaddingTop = DimensionPaddingTop('partnership-area')
    // position
    var portfolioPH = homeHeight-headerHeight
    var researchPH = homeHeight+portfolioHeight+researchMarginTop-headerHeight
    var teamPH = homeHeight+portfolioHeight+researchHeight-headerHeight
    var partnershipPH = homeHeight+portfolioHeight+researchHeight+teamHeight+partnershipPaddingTop-headerHeight
    var mediaPH = homeHeight+portfolioHeight+researchHeight+teamHeight+partnershipHeight-headerHeight
    var total = document.body.offsetHeight
    var vh = window.screen.height
    var contactPH = total-vh
    
    
    // home
    if(scrollT >= 0 && scrollT <portfolioPH){
        homePosition.classList.add('active')
        homePosition_Mobile.classList.add('active')
    }else{
        homePosition.classList.remove('active')
        homePosition_Mobile.classList.remove('active')
    }
    // portfolio
    if(scrollT >= portfolioPH && scrollT<teamPH){
        portfolioPosition.classList.add('active')
        portfolioPosition_mobile.classList.add('active')
    }else{
        portfolioPosition.classList.remove('active')
        portfolioPosition_mobile.classList.remove('active')
    }
    // researchPH
    // if(scrollT >= researchPH && scrollT < teamPH){
    //     researchPosition.classList.add('active')
    //     researchPosition_mobile.classList.add('active')
    // }else{
    //     researchPosition.classList.remove('active')
    //     researchPosition_mobile.classList.remove('active')
    // }
    // team
    if(scrollT >= teamPH && scrollT<partnershipPH){
        teamPosition.classList.add('active')
        teamPosition_mobile.classList.add('active')
    }else{
        teamPosition.classList.remove('active')
        teamPosition_mobile.classList.remove('active')
    }
    // partnership
    if(scrollT >= partnershipPH && scrollT < mediaPH){
        partnershipPosition.classList.add('active')
        partnershipPosition_mobile.classList.add('active')
    }else{
        partnershipPosition.classList.remove('active')
        partnershipPosition_mobile.classList.remove('active')
    }
    // media
    if(scrollT >= mediaPH && scrollT < contactPH){
        mediaPosition.classList.add('active')
        mediaPosition_mobile.classList.add('active')
    }else{
        mediaPosition.classList.remove('active')
        mediaPosition_mobile.classList.remove('active')
    }
    // contact
    if(scrollT >= contactPH){
        contactPosition.classList.add('active')
        contactPosition_mobile.classList.add('active')
    }else{
        contactPosition.classList.remove('active')
        contactPosition_mobile.classList.remove('active')
    }
})

