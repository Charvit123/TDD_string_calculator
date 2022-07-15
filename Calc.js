function Calc(string_number){

    if(string_number.startsWith("//")){
        let delims = string_number.substring(2,string_number.indexOf("\n"));
        string_number=string_number.substring(string_number.indexOf("\n")+1);
    }
    string_number=string_number.replace(/(\r\n|\n|\r|;|%|\*|\$)/g,",");

    if(string_number==""){
        return 0;
    }
    else if(string_number.length === 1){
        return string_number;
    }
    else{
        var total=0;
        var negative='';
        var result_array=string_number.split(',')
        for(var j=0;j<result_array.length;j++){
            if(result_array[j]>1000){
                result_array[j]=0;
            }
            if(parseInt(result_array[j])<0)
            {
                negative+=' '+result_array[j];
            }    
            total=total+parseInt(result_array[j]);
        }
        if(negative.length > 0){
            throw  'negatives not allowed' + negative;
        }
        return total;
    }       
}

module.exports = Calc;