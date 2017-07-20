module.exports = function main(a)
  // Write your cade here
{  
    var m = parseInt(a)
    var t= m%100    
    var y=(m-t)/100 
    var u= (m-100*y)%10 //3
    var w= (m-100*y-u)/10
    var result= y+u+w
    return result;
}