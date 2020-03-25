const EditHelpers = {
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
    ////////////////////////////////////////////////////colors
    ColorChange: function(){
    document.getElementsByTagName("body")[0].style.backgroundColor = document.getElementsByClassName("ColorPickerName")[0].value;
    },
    FontChange: function(){
        document.getElementsByTagName("body")[0].style.color = document.getElementsByClassName("FontColorInput")[0].value;
    },
    
}

export default EditHelpers;