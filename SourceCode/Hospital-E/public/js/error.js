(function ($) {
    function randomNum(){
        "use strict";
        return Math.floor(Math.random() * 9)+1;
    }
    var number = $('#codeError').val(),
        number1 = number[0],
        number2 = number[1],
        number3 = number[2],
        loop1,loop2,loop3,time=30, i=0;
    loop3 = setInterval(function()
    {
      "use strict";
        if(i > 40)
        {
            clearInterval(loop3);
            $('.thirdDigit').text(number1);
        }else
        {
            $('.thirdDigit').text(randomNum());
            i++;
        }
    }, time);
    loop2 = setInterval(function()
    {
      "use strict";
        if(i > 80)
        {
            clearInterval(loop2);
            $('.secondDigit').text(number2);
        }else
        {
            $('.secondDigit').text(randomNum());
            i++;
        }
    }, time);
    loop1 = setInterval(function()
    {
      "use strict";
        if(i > 100)
        {
            clearInterval(loop1);
            $('.firstDigit').text(number3);
        }else
        {
            $('.firstDigit').text(randomNum());
            i++;
        }
    }, time);
})(jQuery);