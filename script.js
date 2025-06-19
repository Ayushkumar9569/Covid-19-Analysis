$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });


    $(window).on('load scroll',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');



        if($(window).scrollTop() > 0){
            $('header').addClass('sticky');
        }
        else{
            $('header').removeClass('sticky');

        }
        if($(window).scrollTop() > 0){
            $('.scroll-top').show();
        }
        else{
            $('.scroll-top').hide();
        }


        $('section').each(function () {
            let top = $(window).scrollTop();
            let offset = $(this).offset().top - 200 ;
            let id = $(this).attr('id');
            let height = $(this).height();

            if(top > offset && top < offset + height){
                $('.navbar a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
            
        });
    });

    $('a[href*="#"]').on('click',function(e){
        $('html , body').animate({
            scrollTop :$($(this).attr('href')).offset().top,
        },
        500,'linear'
        );
    });
});
const form = document.getElementById('Form');
const outputTextarea = document.getElementById('output-textarea');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const state = document.querySelector('#state select').value;
  const ageGroup = document.querySelector('#age-group select').value;
  const gender = document.querySelector('#gender select').value;
  const vaccineType = document.querySelector('#vaccine-type select').value;


  if (state === 'Select State' || ageGroup === 'Age Group' || gender === 'Gender' || vaccineType === 'Vaccine Type') {
    outputTextarea.value = 'All fields are required!';
  } else if (state === 'Assam' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
    outputTextarea.value =999552;}
    else if (state === 'Assam' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
        outputTextarea.value =1262520;}
        else if (state === 'Assam'  && ageGroup === '19-59' && vaccineType === 'Covishield') {
            outputTextarea.value = 2108179;}
            else if (state === 'Assam'  && ageGroup === '60+' && vaccineType === 'Covishield') {
                outputTextarea.value = 1264332;}
    else if (state === 'Assam' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
        outputTextarea.value = 602283;}
        else if (state === 'Assam' && gender === 'Female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
            outputTextarea.value =972402;}
    

    else if (state === 'Andhra pradesh' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
        outputTextarea.value = 1537424;}
        else if (state === 'Andhra pradesh' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
            outputTextarea.value = 1496426;}
            else if (state === 'Andhra pradesh' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                outputTextarea.value = 2535344;}
                else if (state === 'Andhra pradesh' && gender === 'Female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                    outputTextarea.value = 2527613;}
                    else if (state === 'Andhra pradesh' && ageGroup === '19-59' && vaccineType === 'Covishield') {
                        outputTextarea.value = 12121669;}
                        else if (state === 'Andhra pradesh' && ageGroup === '60+' && vaccineType === 'Covishield') {
                            outputTextarea.value = 6625325;}

     else if (state === 'A&N Islands' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
            outputTextarea.value =15124 ;}
            else if (state === 'A&N Islands' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                outputTextarea.value =19208;}
            else if (state === 'A&N Islands' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                outputTextarea.value =14042;}
                else if (state === 'A&N Islands' && gender === 'Female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                    outputTextarea.value =18860;}
                    else if (state === 'A&N Islands' && ageGroup === '19-59' && vaccineType === 'Covishield') {
                        outputTextarea.value =236936;}
                        else if (state === 'A&N Islands' && ageGroup === '60+' && vaccineType === 'Covishield') {
                            outputTextarea.value =53427;}
           
            else if (state === 'Arunachal Pradesh' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                outputTextarea.value = 40852;}
                else if (state === 'Arunachal Pradesh' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                    outputTextarea.value = 59100;}
                else if (state === 'Arunachal Pradesh' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                    outputTextarea.value = 28445;}
                    else if (state === 'Arunachal Pradesh' && gender === 'Female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                        outputTextarea.value = 44869;}
                        else if (state === 'Arunachal Pradesh'  && ageGroup === '19-59' && vaccineType === 'Covishield') {
                            outputTextarea.value = 81191;}
                            else if (state === 'Arunachal Pradesh'  && ageGroup === '60+' && vaccineType === 'Covishield') {
                                outputTextarea.value = 60226;}

                else if (state === 'Bihar' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                    outputTextarea.value = 4288630;}
                    else if (state === 'Bihar' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                        outputTextarea.value = 6240650;}
                    else if (state === 'Bihar' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                        outputTextarea.value = 3403195;}
                        else if (state === 'Bihar' && gender === 'Female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                            outputTextarea.value = 5348480;}
                        else if (state === 'Bihar' && ageGroup === '19-56' && vaccineType === 'Covishield') {
                            outputTextarea.value = 12022680;}
                            else if (state === 'Bihar' && ageGroup === '60+' && vaccineType === 'Covishield') {
                                outputTextarea.value = 3871907;}

                    else if (state === 'Chandigarh' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                        outputTextarea.value = 38217;}
                        else if (state === 'Chandigarh' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                            outputTextarea.value = 57715;}
                            else if (state === 'Chandigarh' && gender === 'Female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                outputTextarea.value = 43914;}
                        else if (state === 'Chandigarh' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                            outputTextarea.value = 26058;}
                            else if (state === 'Chandigarh' && ageGroup === '19-59' && vaccineType === 'Covishield') {
                                outputTextarea.value = 51144;}
                                else if (state === 'Chandigarh' && ageGroup === '60+' && vaccineType === 'Covishield') {
                                    outputTextarea.value = 63769;}
                            
                        else if (state === 'Chattisgarh' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                            outputTextarea.value = 1076071;}
                            else if (state === 'Chattisgarh' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                outputTextarea.value = 1234990;}
                            else if (state === 'Chattisgarh' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                outputTextarea.value = 752571;}
                                else if (state === 'Chattisgarh' && gender === 'Female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                    outputTextarea.value = 1053338;}
                                else if (state === 'Chattisgarh' && gender === 'Female' && ageGroup === '19-59' && vaccineType === 'Covishield') {
                                    outputTextarea.value = 5750424;}
                                    else if (state === 'Chattisgarh' && gender === 'Female' && ageGroup === '60+' && vaccineType === 'Covishield') {
                                        outputTextarea.value = 1805960;}
                                       
                            else if (state === 'Dadar & Nagar Haveli' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                outputTextarea.value = 12366;}
                                else if (state === 'Dadar & Nagar Haveli' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                    outputTextarea.value = 19657;}
                                else if (state === 'Dadar & Nagar Haveli' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                    outputTextarea.value = 7992;}
                                    else if (state === 'Dadar & Nagar Haveli' && gender === 'Female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                        outputTextarea.value = 16331;}
                                        else if (state === 'Dadar & Nagar Haveli'  && ageGroup === '19-59' && vaccineType === 'Covishield') {
                                            outputTextarea.value = 70151;}
                                            else if (state === 'Dadar & Nagar Haveli'  && ageGroup === '60+' && vaccineType === 'Covishield') {
                                                outputTextarea.value = 10387;}

                                else if (state === 'Daman & Diu' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                    outputTextarea.value = 7623;}
                                    else if (state === 'Daman & Diu' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                        outputTextarea.value = 11852;}
                                    else if (state === 'Daman & Diu' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                        outputTextarea.value = 6937;}
                                        else if (state === 'Daman & Diu' && gender === 'Female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                            outputTextarea.value = 10612;}
                                            else if (state === 'Daman & Diu'  && ageGroup === '19-59' && vaccineType === 'Covishield') {
                                                outputTextarea.value = 67986;}
                                                else if (state === 'Daman & Diu' && ageGroup === '60+' && vaccineType === 'Covishield') {
                                                    outputTextarea.value = 12221;}
                                    

                                    else if (state === 'Delhi' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                        outputTextarea.value = 683795;}
                                        else if (state === 'Delhi' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                            outputTextarea.value = 1008985;}
                                        else if (state === 'Delhi' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                            outputTextarea.value = 490676;}
                                            else if (state === 'Delhi' && gender === 'Female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                outputTextarea.value = 870800;}
                                                else if (state === 'Delhi' && ageGroup === '19-59' && vaccineType === 'Covishield') {
                                                    outputTextarea.value = 2337608;}
                                                    else if (state === 'Delhi'  && ageGroup === '60+' && vaccineType === 'Covishield') {
                                                        outputTextarea.value = 1056674;}
        

                                                    

                                        else if (state === 'Goa' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                            outputTextarea.value = 33265;}
                                            else if (state === 'Goa' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                outputTextarea.value = 51734;}
                                            else if (state === 'Goa' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                outputTextarea.value = 26640;}
                                                else if (state === 'Goa' && gender === 'Female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                    outputTextarea.value = 44551;}
                                                    else if (state === 'Goa' && ageGroup === '19-59' && vaccineType === 'Covishield') {
                                                        outputTextarea.value = 61966;}
                                                        else if (state === 'Goa'  && ageGroup === '60+' && vaccineType === 'Covishield') {
                                                            outputTextarea.value = 76733;}

                                            else if (state === 'Gujrat' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                outputTextarea.value = 1941637;}
                                                else if (state === 'Gujrat' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                    outputTextarea.value = 3131920;}
                                                else if (state === 'Gujrat' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                    outputTextarea.value = 1677880;}
                                                    else if (state === 'Gujrat' && gender === 'Female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                        outputTextarea.value = 2906699;}
                                                        else if (state === 'Gujrat' && ageGroup === '19-59' && vaccineType === 'Covishield') {
                                                            outputTextarea.value = 13702954;}
                                                            else if (state === 'Gujrat' && ageGroup === '60+' && vaccineType === 'Covishield') {
                                                                outputTextarea.value = 5971634;}

                                                else if (state === 'Haryana' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                    outputTextarea.value = 559947;}
                                                    else if (state === 'Haryana' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                        outputTextarea.value = 1158529;}
                                                    else if (state === 'Haryana' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                        outputTextarea.value = 327809;}
                                                        else if (state === 'Haryana' && gender === 'Female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                            outputTextarea.value = 771892;}
                                                            else if (state === 'Haryana' && ageGroup === '19-59' && vaccineType === 'Covishield') {
                                                                outputTextarea.value = 1306787;}
                                                                else if (state === 'Haryana'  && ageGroup === '60+' && vaccineType === 'Covishield') {
                                                                    outputTextarea.value = 708954;}

                                                    else if (state === 'Himachal Pradesh' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                        outputTextarea.value = 272064;}
                                                        else if (state === 'Himachal Pradesh' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                            outputTextarea.value = 331826;}
                                                        else if (state === 'Himachal Pradesh' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                            outputTextarea.value = 235002;}
                                                            else if (state === 'Himachal Pradesh' && gender === 'Female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                outputTextarea.value = 309613;}
                                                                else if (state === 'Himachal Pradesh' && gender === 'Female' && ageGroup === '19-59' && vaccineType === 'Covishield') {
                                                                    outputTextarea.value = 1520001;}
                                                                    else if (state === 'Himachal Pradesh' && gender === 'Female' && ageGroup === '60+' && vaccineType === 'Covishield') {
                                                                        outputTextarea.value = 830625;}

                                                        else if (state === 'Jammu & Kashmir' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                            outputTextarea.value = 553845;}
                                                            else if (state === 'Jammu & Kashmir' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                outputTextarea.value = 876049;}
                                                            else if (state === 'Jammu & Kashmir' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                outputTextarea.value = 517818;}
                                                                else if (state === 'Jammu & Kashmir' && gender === 'Female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                    outputTextarea.value = 861731;}
                                                                    else if (state === 'Jammu & Kashmir' && ageGroup === '19-59' && vaccineType === 'Covishield') {
                                                                        outputTextarea.value = 965200;}
                                                                        else if (state === 'Jammu & Kashmir'  && ageGroup === '60+' && vaccineType === 'Covishield') {
                                                                            outputTextarea.value = 676319;}

                                                            else if (state === 'Jharkhand' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                outputTextarea.value = 1062630;}
                                                                else if (state === 'Jharkhand' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                    outputTextarea.value = 1596112;}
                                                                else if (state === 'Jharkhand' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                    outputTextarea.value = 622673;}
                                                                    else if (state === 'Jharkhand' && gender === 'Female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                        outputTextarea.value = 1125458;}
                                                                        else if (state === 'Jharkhand'  && ageGroup === '19-59' && vaccineType === 'Covishield') {
                                                                            outputTextarea.value = 1371673;}
                                                                            else if (state === 'Jharkhand'  && ageGroup === '60+' && vaccineType === 'Covishield') {
                                                                                outputTextarea.value = 674316;}

                                                                else if (state === 'Karnataka' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                    outputTextarea.value = 2325490;}
                                                                    else if (state === 'Karnataka' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                        outputTextarea.value = 2816444;}
                                                                    else if (state === 'Karnataka' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                        outputTextarea.value = 2151318;}
                                                                        else if (state === 'Karnataka' && gender === 'Female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                            outputTextarea.value = 2719866;}
                                                                            else if (state === 'Karnataka' && ageGroup === '19-59' && vaccineType === 'Covishield') {
                                                                                outputTextarea.value = 6728511;}
                                                                                else if (state === 'Karnataka'  && ageGroup === '60+' && vaccineType === 'Covishield') {
                                                                                    outputTextarea.value = 4872684;}

                                                                    else if (state === 'Kerela' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                        outputTextarea.value = 810966;}
                                                                        else if (state === 'Kerela' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                            outputTextarea.value = 1322859;}
                                                                        else if (state === 'Kerela' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                            outputTextarea.value = 511910;}
                                                                            else if (state === 'Kerela' && gender === 'Female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                outputTextarea.value = 957277;}
                                                                                else if (state === 'Kerela'  && ageGroup === '19-59' && vaccineType === 'Covishield') {
                                                                                    outputTextarea.value = 869655;}
                                                                                    else if (state === 'Kerela'  && ageGroup === '60+' && vaccineType === 'Covishield') {
                                                                                        outputTextarea.value = 2218704;}

                                                                        else if (state === 'Ladakh' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                            outputTextarea.value = 8627;}
                                                                            else if (state === 'Ladakh' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                outputTextarea.value = 10072;}
                                                                            else if (state === 'Ladakh' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                outputTextarea.value = 7758;}
                                                                                else if (state === 'Ladakh' && gender === 'Female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                    outputTextarea.value = 9261;}
                                                                                    else if (state === 'Ladakh'  && ageGroup === '19-59' && vaccineType === 'Covishield') {
                                                                                        outputTextarea.value = 70299;}
                                                                                        else if (state === 'Ladakh' && ageGroup === '60+' && vaccineType === 'Covishield') {
                                                                                            outputTextarea.value = 54417;}

                                                                            else if (state === 'Lakshadweep' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                outputTextarea.value = 1988;}
                                                                                else if (state === 'Lakshadweep' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                    outputTextarea.value = 2911;}
                                                                                else if (state === 'Lakshadweep' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                    outputTextarea.value = 1724;}
                                                                                    else if (state === 'Lakshadweep' && gender === 'Female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                        outputTextarea.value = 2782;}
                                                                                        else if (state === 'Lakshadweep'  && ageGroup === '19-59' && vaccineType === 'Covishield') {
                                                                                            outputTextarea.value = 15990;}
                                                                                            else if (state === 'Lakshadweep'  && ageGroup === '60+' && vaccineType === 'Covishield') {
                                                                                                outputTextarea.value = 6985;}

                                                                                else if (state === 'Madhya Pradesh' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                    outputTextarea.value = 2410963;}
                                                                                    else if (state === 'Madhya Pradesh' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                        outputTextarea.value = 4194631;}
                                                                                    else if (state === 'Madhya Pradesh' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                        outputTextarea.value = 1698672;}
                                                                                        else if (state === 'Madhya Pradesh' && gender === 'Female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                            outputTextarea.value = 3472826;}
                                                                                            else if (state === 'Madhya Pradesh' && ageGroup === '19-59' && vaccineType === 'Covishield') {
                                                                                                outputTextarea.value = 127783;}
                                                                                                else if (state === 'Madhya Pradesh' && ageGroup === '60+' && vaccineType === 'Covishield') {
                                                                                                    outputTextarea.value = 3829826;}

                                                                                    else if (state === 'Maharashtra' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                        outputTextarea.value = 2891355;}
                                                                                        else if (state === 'Maharashtra' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                            outputTextarea.value = 4119184;}
                                                                                        else if (state === 'Maharashtra' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                            outputTextarea.value = 1870829;}
                                                                                            else if (state === 'Maharashtra' && gender === 'Female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                                outputTextarea.value = 3108884;}
                                                                                                else if (state === 'Maharashtra' && ageGroup === '19-59' && vaccineType === 'Covishield') {
                                                                                                    outputTextarea.value = 5192595;}
                                                                                                    else if (state === 'Maharashtra'  && ageGroup === '60+' && vaccineType === 'Covishield') {
                                                                                                        outputTextarea.value = 4484505;}

                                                                                        else if (state === 'Manipur' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                            outputTextarea.value = 75428;}
                                                                                            else if (state === 'Manipur' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                                outputTextarea.value = 109660;}
                                                                                            else if (state === 'Manipur' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                                outputTextarea.value = 44336;}
                                                                                                else if (state === 'Manipur' && gender === 'Female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                                    outputTextarea.value = 68560;}
                                                                                                    else if (state === 'Manipur' && ageGroup === '19-59' && vaccineType === 'Covishield') {
                                                                                                        outputTextarea.value = 115095;}
                                                                                                        else if (state === 'Manipur'  && ageGroup === '60+' && vaccineType === 'Covishield') {
                                                                                                            outputTextarea.value = 165373;}

                                                                                        else if (state === 'Meghalaya' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                            outputTextarea.value = 37399;}
                                                                                            else if (state === 'Meghalaya' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                                outputTextarea.value = 77157;}
                                                                                            else if (state === 'Meghalaya' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                                outputTextarea.value = 19556;}
                                                                                                else if (state === 'Meghalaya' && gender === 'Female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                                    outputTextarea.value = 42858;}
                                                                                                    else if (state === 'Meghalaya' && ageGroup === '19-59' && vaccineType === 'Covishield') {
                                                                                                        outputTextarea.value = 33397;}
                                                                                                        else if (state === 'Meghalaya' && ageGroup === '60+' && vaccineType === 'Covishield') {
                                                                                                            outputTextarea.value = 57726;}

                                                                                            else if (state === 'Mizoram' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                                outputTextarea.value = 48360;}
                                                                                                else if (state === 'Mizoram' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                                    outputTextarea.value = 60098;}
                                                                                                else if (state === 'Mizoram' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                                    outputTextarea.value = 33595;}
                                                                                                    else if (state === 'Mizoram' && gender === 'Female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                                        outputTextarea.value = 47010;}
                                                                                                        else if (state === 'Mizoram' && ageGroup === '19-59' && vaccineType === 'Covishield') {
                                                                                                            outputTextarea.value = 80888;}
                                                                                                            else if (state === 'Mizoram'  && ageGroup === '60+' && vaccineType === 'Covishield') {
                                                                                                                outputTextarea.value = 67915;}

                                                                                                else if (state === 'Nagaland' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                                    outputTextarea.value = 26012}
                                                                                                    else if (state === 'Nagaland' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                                        outputTextarea.value = 59974}
                                                                                                    else if (state === 'Nagaland' && gender === 'female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                                        outputTextarea.value = 19889;}
                                                                                                        else if (state === 'Nagaland' && gender === 'female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                                            outputTextarea.value = 40347;}
                                                                                                            else if (state === 'Nagaland' && ageGroup === '19-59' && vaccineType === 'Covishield') {
                                                                                                                outputTextarea.value = 26877;}
                                                                                                                else if (state === 'Nagaland'  && ageGroup === '60+' && vaccineType === 'Covishield') {
                                                                                                                    outputTextarea.value = 44022;}

                                                                                                    else if (state === 'Odisha' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                                        outputTextarea.value = 1601002;}
                                                                                                        else if (state === 'Odisha' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                                            outputTextarea.value = 2195563;}
                                                                                                        else if (state === 'Odisha' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                                            outputTextarea.value = 1206692;}
                                                                                                            else if (state === 'Odisha' && gender === 'Female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                                                outputTextarea.value = 1844432;}
                                                                                                                else if (state === 'Odisha' && ageGroup === '19-59' && vaccineType === 'Covishield') {
                                                                                                                    outputTextarea.value = 10069825;}
                                                                                                                    else if (state === 'Odisha' && gender === 'Female' && ageGroup === '60+' && vaccineType === 'Covishield') {
                                                                                                                        outputTextarea.value = 3213102;}

                                                                                                        else if (state === 'Puducherry' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                                            outputTextarea.value = 30980;}
                                                                                                            else if (state === 'Puducherry' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                                                outputTextarea.value = 50694;}
                                                                                                            else if (state === 'Puducherry' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                                                outputTextarea.value = 21305;}
                                                                                                                else if (state === 'Puducherry' && gender === 'Female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                                                    outputTextarea.value = 44616;}
                                                                                                                    else if (state === 'Puducherry' && ageGroup === '19-59' && vaccineType === 'Covishield') {
                                                                                                                        outputTextarea.value = 304392;}
                                                                                                                        else if (state === 'Puducherry' && ageGroup === '60+' && vaccineType === 'Covishield') {
                                                                                                                            outputTextarea.value = 107203
                                                                                                                            ;}

                                                                                                            else if (state === 'Punjab' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                                                outputTextarea.value = 685995;}
                                                                                                                else if (state === 'Punjab' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                                                    outputTextarea.value = 1117521;}
                                                                                                                else if (state === 'Punjab' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                                                    outputTextarea.value = 497814;}
                                                                                                                    else if (state === 'Punjab' && gender === 'Female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                                                        outputTextarea.value = 878106;}
                                                                                                                        else if (state === 'Punjab' && ageGroup === '19-59' && vaccineType === 'Covishield') {
                                                                                                                            outputTextarea.value = 842455;}
                                                                                                                            else if (state === 'Punjab' && ageGroup === '60+' && vaccineType === 'Covishield') {
                                                                                                                                outputTextarea.value = 1051501;}

                                                                                                                else if (state === 'Rajasthan' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                                                    outputTextarea.value = 2343992;}
                                                                                                                    else if (state === 'Rajasthan' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                                                        outputTextarea.value = 3576050;}
                                                                                                                    else if (state === 'Rajasthan' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                                                        outputTextarea.value =1496849 ;}
                                                                                                                        else if (state === 'Rajasthan' && gender === 'Female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                                                            outputTextarea.value =2955049 ;}
                                                                                                                            else if (state === 'Rajasthan' && ageGroup === '19-59' && vaccineType === 'Covishield') {
                                                                                                                                outputTextarea.value =4631968 ;}
                                                                                                                                else if (state === 'Rajasthan' && ageGroup === '60+' && vaccineType === 'Covishield') {
                                                                                                                                    outputTextarea.value =3015566 ;}

                                                                                                                    else if (state === 'Sikkim' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                                                        outputTextarea.value = 21899;}
                                                                                                                        else if (state === 'Sikkim' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                                                            outputTextarea.value = 30049;}
                                                                                                                        else if (state === 'Sikkim' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                                                            outputTextarea.value = 19007;}
                                                                                                                            else if (state === 'Sikkim' && gender === 'Female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                                                                outputTextarea.value = 26515;}
                                                                                                                                else if (state === 'Sikkim' && ageGroup === '19-59' && vaccineType === 'Covishield') {
                                                                                                                                    outputTextarea.value = 158301;}
                                                                                                                                    else if (state === 'Sikkim' &&  ageGroup === '60+' && vaccineType === 'Covishield') {
                                                                                                                                        outputTextarea.value = 55643;}

                                                                                                                        else if (state === 'Tamil Nadu' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                                                            outputTextarea.value = 1917161;}
                                                                                                                            else if (state === 'Tamil Nadu' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                                                                outputTextarea.value = 2627755;}
                                                                                                                            else if (state === 'Tamil Nadu' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                                                                outputTextarea.value = 1465301;}
                                                                                                                                else if (state === 'Tamil Nadu' && gender === 'Female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                                                                    outputTextarea.value = 2224046;}
                                                                                                                                    else if (state === 'Tamil Nadu' && ageGroup === '19-59' && vaccineType === 'Covishield') {
                                                                                                                                        outputTextarea.value = 6066684;}
                                                                                                                                        else if (state === 'Tamil Nadu' && ageGroup === '60+' && vaccineType === 'Covishield') {
                                                                                                                                            outputTextarea.value = 3029951;}

                                                                                                                            else if (state === 'Telangana' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                                                                outputTextarea.value = 1107845;}
                                                                                                                                else if (state === 'Telangana' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                                                                    outputTextarea.value = 1724107;}
                                                                                                                                else if (state === 'Telangana' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                                                                    outputTextarea.value = 906510;}
                                                                                                                                    else if (state === 'Telangana' && gender === 'Female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                                                                        outputTextarea.value = 1582426;}
                                                                                                                                        else if (state === 'Telangana' && ageGroup === '19-59' && vaccineType === 'Covishield') {
                                                                                                                                            outputTextarea.value = 10860438;}
                                                                                                                                            else if (state === 'Telangana' && ageGroup === '60+' && vaccineType === 'Covishield') {
                                                                                                                                                outputTextarea.value = 2752717;}

                                                                                                                                else if (state === 'Tripura' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                                                                    outputTextarea.value = 112965;}
                                                                                                                                    else if (state === 'Tripura' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                                                                        outputTextarea.value = 144833;}
                                                                                                                                    else if (state === 'Tripura' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                                                                        outputTextarea.value = 79612;}
                                                                                                                                        else if (state === 'Tripura' && gender === 'Female' && ageGroup === '13-19' && vaccineType === 'Covishield') {
                                                                                                                                            outputTextarea.value = 115278;}
                                                                                                                                            else if (state === 'Tripura' &&ageGroup === '19-59' && vaccineType === 'Covishield') {
                                                                                                                                                outputTextarea.value = 273061;}
                                                                                                                                                else if (state === 'Tripura' && ageGroup === '60+' && vaccineType === 'Covishield') {
                                                                                                                                                    outputTextarea.value = 205262;}

                                                                                                                                    else if (state === 'Uttar Pradesh' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                                                                        outputTextarea.value = 8709912;}
                                                                                                                                        else if (state === 'Uttar Pradesh' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                                                                            outputTextarea.value = 14193675;}
                                                                                                                                        else if (state === 'Uttar Pradesh' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                                                                            outputTextarea.value = 7876133;}
                                                                                                                                            else if (state === 'Uttar Pradesh' && gender === 'Female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                                                                                outputTextarea.value = 13227425;}
                                                                                                                                                else if (state === 'Uttar Pradesh' && ageGroup === '19-59' && vaccineType === 'Covishield') {
                                                                                                                                                    outputTextarea.value = 36643646;}
                                                                                                                                                    else if (state === 'Uttar Pradesh' && ageGroup === '60+' && vaccineType === 'Covishield') {
                                                                                                                                                        outputTextarea.value = 9397281;}

                                                                                                                                        else if (state === 'Uttarakhand' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                                                                            outputTextarea.value = 402315;}
                                                                                                                                            else if (state === 'Uttarakhand' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                                                                                outputTextarea.value = 532985;}
                                                                                                                                            else if (state === 'Uttarakhand' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                                                                                outputTextarea.value = 315986;}
                                                                                                                                                else if (state === 'Uttarakhand' && gender === 'Female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                                                                                    outputTextarea.value = 467837;}
                                                                                                                                                    else if (state === 'Uttarakhand'  && ageGroup === '19-59' && vaccineType === 'Covishield') {
                                                                                                                                                        outputTextarea.value = 1417240;}
                                                                                                                                                        else if (state === 'Uttarakhand'  && ageGroup === '60+' && vaccineType === 'Covishield') {
                                                                                                                                                            outputTextarea.value = 874751;}
                                                                                                                                                            
                                                                                                                                                                
                                                                                                                                                                else if (state === 'West Bengal' && gender === 'Male' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                                                                                outputTextarea.value = 2622517;}
                                                                                                                                                else if (state === 'West Bengal' && gender === 'Male' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                                                                                    outputTextarea.value = 3599989;}
                                                                                                                                                else if (state === 'West Bengal' && gender === 'Female' && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                                                                                    outputTextarea.value = 2059430;}
                                                                                                                                                    else if (state === 'West Bengal' && gender === 'Female' && ageGroup === '13-18' && vaccineType === 'Covishield') {
                                                                                                                                                        outputTextarea.value = 3041542;}
                                                                                                                                                        else if (state === 'West Bengal' && ageGroup === '19-59' && vaccineType === 'Covishield') {
                                                                                                                                                            outputTextarea.value = 10358563;}
                                                                                                                                                            else if (state === 'West Bengal' && ageGroup === '60+' && vaccineType === 'Covishield') {
                                                                                                                                                                outputTextarea.value = 5506144;}

                                                                                                                                                else if (state === 'Miscellaneous'  && ageGroup === '1-12' && vaccineType === 'Covishield') {
                                                                                                                                                    outputTextarea.value = 0}
                                                                                                                                                    else if (state === 'Miscellaneous'  && ageGroup === '60+' && vaccineType === 'Covishield') {
                                                                                                                                                        outputTextarea.value = 1473499}
                                                                                                                                                   
   else {
    outputTextarea.value = 'No match found!';
  }
});


