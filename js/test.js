$('#input-text').on('keyup',function(){
    if(this.value.length==1){
        this.value=this.value.replace(/[^0-9]/g,'')
    }else{
        this.value=this.value.replace(/\D/g,'')
    }
    
})
    

$('#input-text').on('paste',function(e){
    // if(this.value.length==1){
        e.replace(/[^0-9]/g,'')
    // }else{
        // this.value=this.value.replace(/\D/g,'')
    // }
    // e.preventDefault();
    // if(true){
    //     console.log('愛賴欣')
    //     this.value='';
    // }else{
    //     this.value=this.value.replace(/\D/g,'')
    // }
})
