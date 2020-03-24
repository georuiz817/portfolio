const EditHelpers = {
    /////////////////////////////////////////////////////////////////////////////Backgrounds
    PinkBack: function(){
        document.getElementsByTagName('body')[0].style.backgroundColor = 'pink'
    },
    OrangeBack: function(){
        document.getElementsByTagName('body')[0].style.backgroundColor = 'green'
    },
    GreenBack: function(){
        document.getElementsByTagName('body')[0].style.backgroundColor = 'orange'
    },
    YellowBack: function(){
        document.getElementsByTagName('body')[0].style.backgroundColor = 'yellow'
    },
    BlueBack: function(param1){
        document.getElementsByTagName('body')[0].style.backgroundColor = 'blue'
    },
    //////////////////////////////////////////////////////////////////////////////Fonts
    PinkFont: function(){
        document.getElementsByTagName('body')[0].style.color = 'pink'
    },
    GreenFont: function(){
        document.getElementsByTagName('body')[0].style.color = 'green'
    },
    OrangeFont: function(){
        document.getElementsByTagName('body')[0].style.color = 'orange'
    },
    YellowFont: function(){
        document.getElementsByTagName('body')[0].style.color = 'yellow'
    },
    BlueFont: function(param1){
        document.getElementsByTagName('body')[0].style.color = 'blue'
    },
    ///////////////////////////////////////////////////////////////////////////////font-family
    Arial: function(){
        document.getElementsByTagName('body')[0].style.fontFamily = 'Arial'
    },
    Script: function(){
        document.getElementsByTagName('body')[0].style.fontFamily = 'Brush Script MT, Brush Script Std, cursive'
    },
    Console: function(){
        document.getElementsByTagName('body')[0].style.fontFamily = '"Lucida Console", Monaco, monospace'
    },
    Impact: function(){
        document.getElementsByTagName('body')[0].style.fontFamily = 'Impact, Charcoal, sans-serif'
    },
    Cursive: function(param1){
        document.getElementsByTagName('body')[0].style.fontFamily = 'Impact, Charcoal, sans-serif'
    },
    /////////////////////////////////////////////////////////////////////////////////////cursors
    CrossHair: function(){
        document.getElementsByTagName('body')[0].style.cursor = 'crosshair'
    },
    cell: function(){
        document.getElementsByTagName('body')[0].style.cursor = 'cell'
    },
    original: function(param1){
        document.getElementsByTagName('body')[0].style.cursor = 'default'
    },
}

export default EditHelpers;