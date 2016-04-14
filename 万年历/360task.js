//获取当前日期年月日
var nowDate=new Date();
var thisYear=nowDate.getFullYear();
var thisMonth=nowDate.getMonth();
var thisDay=nowDate.getDate();
//从1900年至2100年的农历年份信息（闰年、大小月、闰月）的16进制表示数组
var lunar_year=new Array(
0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,
0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,
0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,
0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,
0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,
0x06ca0,0x0b550,0x15355,0x04da0,0x0a5d0,0x14573,0x052d0,0x0a9a8,0x0e950,0x06aa0,
0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,
0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b5a0,0x195a6,
0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,
0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x055c0,0x0ab60,0x096d5,0x092e0,
0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,
0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,
0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,
0x05aa0,0x076a3,0x096d0,0x04bd7,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,
0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0,
0x14b63,0x09370,0x049f8,0x04970,0x064b0,0x168a6,0x0ea50,0x06b20,0x1a6c4,0x0aae0,
0x0a2e0,0x0d2e3,0x0c960,0x0d557,0x0d4a0,0x0da50,0x05d55,0x056a0,0x0a6d0,0x055d4,
0x052d0,0x0a9b8,0x0a950,0x0b4a0,0x0b6a6,0x0ad50,0x055a0,0x0aba4,0x0a5b0,0x052b0,
0x0b273,0x06930,0x07337,0x06aa0,0x0ad50,0x14b55,0x04b60,0x0a570,0x054e4,0x0d160,
0x0e968,0x0d520,0x0daa0,0x16aa6,0x056d0,0x04ae0,0x0a9d4,0x0a2d0,0x0d150,0x0f252,
0x0d520);
 //阳历平年的每月天数
var solarMonth=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
//生肖
var Animals=new Array("鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪");
//农历节气 每个月的节气按顺序排列
var solarTerm = new Array("小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至");

//（各个节气到小寒的分钟数）
var SolarTerms = new Array(0,21208,42467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758);
//阴历中将数字转化为汉字所需要的数组
var number_str1 = new Array('日','一','二','三','四','五','六','七','八','九','十');
var number_str2 = new Array('初','十','廿','卅');
//阳历节日
var solarHoliday = new Array(
"0101 元旦",
"0214 情人节",
"0308 妇女节",
"0312 植树节",
"0315 消费者权益日",
"0401 愚人节",
"0501 五一劳动节",
"0504 青年节",
"0512 护士节",
"0531 世界无烟日",
"0601 儿童节",
"0701 建党节",
"0801 建军节",
"0903 抗战胜利纪念日",
"0910 教师节",
"0928 孔子诞辰",
"1001 国庆节",
"1006 老人节",
"1024 联合国日",
"1201 世界艾滋病日",
"1213 国家公祭日",
"1224 平安夜",
"1225 圣诞节")
//2016年国家放假日期，前两位表示月份后两位表示具体的日
var holiday2016 = new Array("0101","0102","0103","0207","0208","0209","0210","0211","0211",
  "0212","0213","0402","0403","0404","0430","0501","0502","0609","0610","0611",
  "0915","0916","0917","1001","1002","1003","1004","1005","1006","1007"
  )
//农历节日
var lunarHoliday = new Array(
"0101 春节",
"0115 元宵节",
"0505 端午节",
"0707 七夕情人节",
"0715 中元节",
"0815 中秋节",
"0909 重阳节",
"1208 腊八节",
"1223 北方小年",
"1224 南方小年");

$(document).ready(function(){
  //生成年份的选择下拉列表
  var chooseYear=$("#chooseYear");
     for(var i=1900;i<=2100;i++){
      var option_year=$("<option>"+i+"年"+"</option><br/>")
      chooseYear.append(option_year);
    }
    //选择月份的选择下拉列表
  var  chooseMonth=$("#chooseMonth");
   for(var i=1;i<=12;i++){
     var option_month=$("<option>"+i+"月"+"</option><br/>")
     chooseMonth.append(option_month);
    }
     //点击年份的左侧按钮，年份减1,并根据select的值重新生成日历表格
     $("#down-year").on("click",function(){
         minusYear();
     }) ;
     //点击年份的右侧按钮，年份加1，并根据select的值重新生成日历表格
     $("#up-year").on("click",function(){
       addYear();
     }) ;
     //点击月份选择的左边按钮，月份减一，并根据select的值重新生成日历表格
     $("#down-month").on("click",function(){
        minusMonth();
     }) ;
      //点击月份的右侧按钮，则月份相应的加一
     $("#up-month").on("click",function(){
         addMonth();
     });
    //点击2016年假期选择下拉框，则根据下拉框的值重新显示假期所在月份的日历
      $("#holiday").on("click",function(){
         var hol=$("#holiday").val();
         chooseMonth.val(hol);
         chooseYear.val("2016年")
         redrawCalendar();
     }) ;
      //点击返回今天重新显示当前的信息
     $("#return_today").on("click",function(){

       // location.reload();
         chooseYear.val(nowYear);
         chooseMonth.val(nowMonth); 
         $("#holiday").val(nowMonth);
         redrawCalendar();
          showDetailDate(thisYear,thisMonth,thisDay,lunar_day);
     });
     //给select元素绑定change事件 select的值发生变化则需要根据select的值重新生成日历
    $("#chooseYear").on("change",function(){
      redrawCalendar();
    });
    $("#chooseMonth").on("change",function(){
     redrawCalendar();
    });
    
    //获取日历表格
     var calendarTable=$(".calendarShow");
    // 动态生成日历表格的六行七列
     for(var i=0;i<6;i++){
       var tr=$("<tr align=center class='tr-cal'></tr>")//创建tr元素
       for(var j=0;j<7;j++){
        var id_end=i*7+j;
        var td_id="td"+id_end;
        var lunar_id="lunar"+id_end;
        var solar_id="solar"+id_end
        var td=$("<td id="+td_id+" class='td_cal'></td>");
        //创建p元素分别放阳历、阴历的日期
         var solar_P=$("<p id="+solar_id+"></p>")
         var lunar_p=$("<p id="+lunar_id+"></p>");
        //将 阳历和阴历放置到单元格内
        td.append(solar_P).append(lunar_p);
        //将单元格添加到tr元素中
        tr.append(td);
        //将行元素tr添加到表格中
        calendarTable.append(tr);
      }
   }
   //为日历动态创建的单元格，添加事件，该事件是为了获取点击的单元格的具体详细日历在右侧显示
   $(".calendarShow").on("click",'.td_cal',function(){
    //获取当前的点击单元格的阳历日期 ，阴历日期
    var solar_d=$(this).find("p:first").html();
    var lunar_d=$(this).find("p:last").html();
    var y=chooseYear.val();
    var m=chooseMonth.val();
    var year=parseInt(y.match(/\d+/g));
    var month=parseInt(m.match(/\d+/g))-1;
  //如果当前点击的单元格有lastMonth类标记，说明是当前月份的上个月末的尾部
  //如果点击上个月尾部日历的部分单元格，则相应要重新生成上个月的日历
    if($(this).hasClass("lastMonth"))
    {    //如果月份为1月份，则需要生成上年的12月份的日历，
        if(month==0){
          month=11;
          year=year-1;
          //年份和月份下拉框对应的发生变化，重新生成
         chooseYear.val(year+"年") 
         chooseMonth.val((month+1)+"月");
         redrawCalendar();
        }
         //如果月份不为1月份，则只需要生成上个月的日历，
        else{
         month=month-1;
         choosmonth=month-1;
         chooseMonth.val((month+1)+"月");
         redrawCalendar();
        }
        
    }
    //如果当前点击的单元格有nextMonth类标记，说明是当前月份的下个月的开始部分
  //如果点击下个月的起始日历的部分单元格，则相应要重新生成下个月的日历
     if($(this).hasClass("nextMonth"))
    {    
      //如果月份为12月份，则需要生成下一年的1月份的日历，
         if(month==11)
         {
           month=0;
           year=year+1;
         chooseYear.val(year+"年") 
         chooseMonth.val((month+1)+"月");
         redrawCalendar();
         }
           //如果月份不为12月份，则只需要生成下个月的日历，
         else{
          month=month+1;
         chooseMonth.val((month+1)+"月");
         redrawCalendar();
         }
    }
    //在日历表格显示当前点击的单元格具体的日期信息
     showDetailDate(year,month,solar_d,lunar_d); 
  });
    //为2016年假期安排下拉框添加子节点
  var holiday=$("#holiday");

    var option1=$("<option value='1月'>"+"元旦"+"</option><br/>");
   var option2=$("<option value='2月'>"+"春节"+"</option><br/>");
   var option3=$("<option value='3月'>"+"清明节"+"</option><br/>");
   var option4=$("<option value='5月'>"+"劳动节"+"</option><br/>");
   var option5=$("<option value='6月'>"+"端午节"+"</option><br/>");
   var option6=$("<option value='9月'>"+"中秋节"+"</option><br/>");
   var option7=$("<option value='10月'>"+"国庆节"+"</option><br/>");

 holiday.append(option1).append(option2).append(option3).append(option4).append(option5).append(option6).append(option7);

     var nowYear=nowDate.getFullYear()+"年";
     var nowMonth=nowDate.getMonth()+1+"月";
      $("#first").val(nowMonth)
     chooseYear.val(nowYear);
     chooseMonth.val(nowMonth); 
    //在日历表格的右侧显示具体的日期信息，阳历、阴历等
     var showCal= new calendar(thisYear,thisMonth);
     var lunar_day=showCal[thisDay].lDay;
     showDetailDate(thisYear,thisMonth,thisDay,lunar_day);
  //页面加载时,调用时间函数，显示当前的北京时间
   showTime();
   //页面加载时，生成当前年月的日历
   drawCalendar(thisYear,thisMonth);
})

//年份减1,并根据select的值重新生成日历表格
  function minusYear(){
     var chooseYear=$("#chooseYear");
     var year_select=parseInt(chooseYear.val().match(/\d+/g));
         if(year_select==1900)
          chooseYear.val("1900年");
         else{
          var y1=(year_select-1)+"年";
            chooseYear.val(y1);
         }
          redrawCalendar();
  }
 //年份加1，并根据select的值重新生成日历表格
  function addYear(){
      var chooseYear=$("#chooseYear");
      var year_select=parseInt(chooseYear.val().match(/\d+/g));
          if(year_select==2100)
          chooseYear.val("2100年");
         else{
           var y1=(year_select+1)+"年";
              chooseYear.val(y1);
         }
        redrawCalendar();
  }
 // 月份减一，并根据select的值重新生成日历表格
 function minusMonth(){
   var chooseYear=$("#chooseYear");
    var chooseMonth=$("#chooseMonth");
   var month_select=parseInt(chooseMonth.val().match(/\d+/g));
       // 如果当前的月份为1，则点击的时候，年份减1，月份跳转为12
         if(month_select==1)
          {
           var m1=12+"月";
           var year_select=parseInt(chooseYear.val().match(/\d+/g));
           //如果当前的年份是1900年且月份为1，则一直显示1900年 1月，
             if(year_select==1900)
                {
                  chooseYear.val("1900年");
                  chooseMonth.val("1月"); 
                }
            else{
               var y1=(year_select-1)+"年";
                chooseYear.val(y1);
                chooseMonth.val(m1); 
                }
           }
       else{
            var m1=(month_select-1)+"月";
            chooseMonth.val(m1); 
          }
            redrawCalendar();
 }
 //月份加一，并根据select的值重新生成日历表格
 function addMonth(){
    var chooseYear=$("#chooseYear");
    var chooseMonth=$("#chooseMonth");
    var month_select=parseInt(chooseMonth.val().match(/\d+/g));
         //如果当前的月份为12 ，则点击时候年份加1 ，月份跳转为1
          if(month_select==12)
          {
           var m1=1+"月";
           var year_select=parseInt(chooseYear.val().match(/\d+/g));
           //如果当前的年份是2100 ，且月份为12月，则显示2100年 12月
              if(year_select==2100)
           {
             chooseYear.val("2100年");
             chooseMonth.val("12月"); 
           } 
          else{
            var y1=(year_select+1)+"年";
               chooseYear.val(y1);
               chooseMonth.val(m1); 
              }
            }
         else{
               var m1=(month_select+1)+"月";
                 chooseMonth.val(m1); 
            }
            redrawCalendar();
 }
//每隔1秒向id为beijing-timep标签添加时间
  function showTime(){   
  var today=new Date();//获取今天的日期
  var hh=today.getHours();//获取当前的小时  
  var mm=today.getMinutes();//获取当前的分钟     
  var ss=today.getSeconds();//获取当前的秒    
// 如果分钟或小时的值小于10，则在其值前加0
  mm=timeCheck(mm);   
  ss=timeCheck(ss);    
  document.getElementById('beijing-time').innerHTML="北京时间:" +hh+":"+mm+":"+ss ;   
  setTimeout('showTime()',1000);//每隔一秒加载showTime()方法 
}   

//  校验时间为两位数 
  function timeCheck(para){   
    if (para<10){
      para="0" + para;
    }   
      return para;
  }  

//返回农历y年的总天数
function lYearDays(y) {
   var i, sum = 0;
   //每循环一次16进制i的值向右移动一位 ，整个for循环执行12次
   //如果遇到位数为1 表示为大月，则加30，否则加29
   for(i=0x8000; i>0x8; i>>=1){
  //  农历年份的每一月用0 1 表示,与0x8000相与得到是否为大月还是小月
    if((lunar_year[y-1900]&i)==0)
      sum+=29;
    else sum+=30
   }
   return(sum+leapDays(y));//如果闰月则需加上闰月天数
}

//返回农历y年闰月的天数
function leapDays(y) {
  // 判断是闰大月还是小月，润大月则加上30天，闰小月则加上29天
   if(leapMonth(y))  return((lunar_year[y-1900] & 0x10000)? 30: 29);
   else return(0);
}

//判断y年的农历中哪个月是闰月,不是闰月返回0
function leapMonth(y){
  //与后四位0000 0000 0000 1111相与 
   return(lunar_year[y-1900]&0xf);
}
//返回农历y年m月的总天数
function monthDays(y,m){
  // 即判断当年的二进制对应的月份的位是否为1，如果为1 ，则表示为大月，则为30天
   return((lunar_year[y-1900]&(0x10000>>m))?30:29);
}

//算出当前月第一天的农历日期和当前农历日期下一个月农历的第一天日期
function calateLun_Date(objDate) {
   var i, leap=0, temp=0;
  //创建一个日期对象 1900-01-31
   var baseDate = new Date(1900,0,31);
   //当前某年的某月1号距离设定时期的天数
   var totalDays   = (objDate - baseDate)/86400000;//
   for(i=1900; i<2100 && totalDays>0; i++) {
      temp = lYearDays(i)//这一年的总天数
      totalDays -= temp;//totalDays减去这一年的天数
      this.monCyl += 12;//monCy1每次加12，记下当到那一年的时候 monCy1 累加的值
   }
   if(totalDays<0) {
      totalDays += temp;
      i--;
      this.monCyl -= 12;
   }
    this.year = i;
   leap = leapMonth(i); //闰哪个月
   this.isLeap = false;//设定闰年标志位false
   for(i=1; i<13 && totalDays>0; i++) {
      if(leap>0 && i==(leap+1) && this.isLeap==false)
      {    
          --i; 
          this.isLeap = true; 
          temp = leapDays(this.year);//计算当年闰月的天数
        }

      else{
         temp = monthDays(this.year, i);//当前年份的 i月的天数

       }
      if(this.isLeap==true && i==(leap+1)) 
           //解除闰月 便于下次计算
           this.isLeap = false;  
          //用totalDays减去闰月的天数
        totalDays -= temp;
        //如果这之间没有闰月，则月份加一
    if(this.isLeap == false) 
           this.monCyl++ ;
   }
   //for循环结束 
   //如果正好这一天是是农历的月末 
     if(totalDays==0 && leap>0 && i==leap+1)
          if(this.isLeap)
        { 
          this.isLeap = false;
        }
      else
        {
          this.isLeap=true;
          --i;
          --this.monCyl;
        }
       if(totalDays<0)
        {
         totalDays+=temp;
         --i;
        --this.monCyl;
    }  

     this.month=i;
     this.day=totalDays+1;

}

//返回阳历y年(m+1)月的天数
function solarDays(y,m){
   if(m==1)
    //即判断是否闰年
      return(((y%4==0)&&(y%100!=0)||(y%400==0))?29:28);
   else
      return(solarMonth[m]);
}

//创建一个类calendarMsg,
function calendarMsg(sYear,sMonth,sDateay,week,lYear,lMonth,lDay,isLeap) {
  //该类包括阳历的的年月日，阴历的年月日，是否闰月，以及阳历阴历的节假日等属性
      this.isToday = false;//是否为今天？
      //阳历
      this.sYear = sYear;
      this.sMonth = sMonth;
      this.sDateay = sDateay;
      this.week = week;
      //农历
      this.lYear = lYear;
      this.lMonth = lMonth;
      this.lDay = lDay;
      this.isLeap = isLeap;
      //节日记录
      this.lunarFestival = ''; //农历节日
      this.solarFestival = ''; //阳历节日
      this.solarTerms = ''; //节气
}

//返回某年的第n个节气为哪一天
function sTerm(y,n) {
  //1900年的小寒到现在的毫秒数
var sec1=31556925974.7*(y-1900)+SolarTerms[n]*60000;
//1970 年1月1日到1900年的小寒的毫秒数。
var sec2=Date.UTC(1900,0,6,2,5);//负值
//1900年的小寒到现在的毫秒数减去1970 年1月1日到1900年的小寒的毫秒数
 var totalSec=sec1+sec2;
 //根据这个毫秒数建一个date对象,（标准日期对象从1970年1月1日开始）
 var offDate = new Date(totalSec);
  //返回具体的哪一天
 return(offDate.getUTCDate())

}

//y年(m+1)月的相关信息
var eve=0;
function calendar(y,m) {
   var sDateObj,lDObj,lY,lM,lD=1,lL,lX=0,tmp1,tmp2;
   var lDPOS = new Array(3);//创建一个含有3个元素的数组
   var n = 0;
   var firstLM = 0;
   sDateObj = new Date(y,m,1);    //当月第一天的日期
   this.length = solarDays(y,m);    //阳历当月天数
   this.firstWeekday = sDateObj.getDay();//第一天是星期几
   if(this.firstWeekday==0) 
    this.firstWeekday=7;
   for(var i=0;i<=this.length;i++) {
      if(lD>lX) {   //执行一次
         sDateObj = new Date(y,m,i+1);   //当月第一天的日期
         lDObj = new calateLun_Date(sDateObj); //根据阳历推算农历
         lY = lDObj.year;           //农历年
         lM = lDObj.month;          //农历月
         lD = lDObj.day;            //农历日
         lL = lDObj.isLeap;         //农历是否闰月
      //   如果是当年有闰月，计算当月的天数，否则按普通方法计算当月天数
         lX = lL? leapDays(lY): monthDays(lY,lM); //农历当月最後一天
         //如果当月为12月份，则 eve赋值为当月的天数，即最后一天
         if (lM==12){eve=lX}
         if(n==0) firstLM = lM;///如果n为0 ，则firstLM赋值为当月的当前月份
          lDPOS[n++] = i-lD+1; //lDPOS[0] lDPOS[1] lDPOS[2] 
      }
     //每个数组的子元素表示记录该月每一天的信息阴历的信息
      this[i] = new calendarMsg(y,m+1,i+1,number_str1[(i+this.firstWeekday)%7],lY,lM,lD++,lL);
     
   }//for循环结束

   //节气  每个月有两个节气
   tmp1=sTerm(y,m*2)-1;//节气的那一天日期 当月的第一个节气
   tmp2=sTerm(y,m*2+1)-1;//当月的第二个节气
   this[tmp1].solarTerms = solarTerm[m*2];//取出节气的名称
   this[tmp2].solarTerms = solarTerm[m*2+1];
   if((this.firstWeekday+12)%7==5)    //黑色星期五
      this[12].solarFestival += '黑色星期五';
   if(y==thisYear && m==thisMonth) this[thisDay-1].isToday = true;    //今日
 
}
//用中文显示农历的日期
function cDay(d){
   var s;
   switch (d) {
      case 10:
         s = '初十'; break;
      case 20:
         s = '二十'; break;
         break;
      case 30:
         s = '三十'; break;
         break;
      default :
         s = number_str2[Math.floor(d/10)];
         s += number_str1[d%10];
   }
   return(s);
}
//日历右侧显示具详细的信息
function showDetailDate(year,month,solar_d,lunar_d){
   //获取select元素里面的值
    var chooseYear=$("#chooseYear");
    var chooseMonth=$("#chooseMonth");
   //根据参数年月日创建一个日期对象、
    var date=new Date(year,month,solar_d);
    var weekDay=new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
    //获取星期
    var weekday=date.getDay();
    //根据星期数组，转化中文星期
    var week_day=weekDay[weekday];
    var show_solar=$("#solarDate");
    var mm=timeCheck((month+1));
    var dd=timeCheck(solar_d);
    //显示年月日、以及星期几
    show_solar.html(year+"-"+(month+1)+"-"+solar_d+" "+week_day);
    var show_solarDate=$("#date");
    //创建一个calendar对象，获取日期对应的阴历月和日
    var showCal= new calendar(year,month);
    var lunar_month=showCal[solar_d-1].lMonth;
    var lunarDay=cDay(showCal[solar_d-1].lDay);
    show_solarDate.html(solar_d);
    var show_lunarDate=$("#lunarDate");
    show_lunarDate.html("农历"+lunar_month+"月"+lunarDay);
    //显示生肖
    $("#lunarYear").html(Animals[(year-4)%12]+"年")
   
}


//在表格中显示阳历和农历的日期
function drawCalendar(year,month) {
   var i,sDate,s,size,t1 ,t2;
 //  创建当前calendar对象
   thisMonth_cal = new calendar(year,month);
 // 一张日历表全部填满中可能出现上一个月的末尾部分日历信息，
 //故创建上一个月的日历对象 
 //如果当前的月份为0 ，即创建上一年的12月份的calendar对象
    if(month==0)
      {
        lastMonth_cal=new calendar(year-1,11);
      }
    else  lastMonth_cal = new calendar(year,month-1);
  // 一张日历表全部填满中可能出现下一个月的头部部分日历信息，
 //故创建下个月的日历对象 
 //如果当前的月份为12 ，即创建下一年的1月份的calendar对象
    if(month==11){
       nextMonth_cal = new calendar(year+1,0);
    }
     else nextMonth_cal = new calendar(year,month+1);

//根据日历表格的6行7列，每次循环获取每个单元格的id值
   for(i=0;i<42;i++) {
//获取单元格中的 id分别为'solar'+ i、'lunar'+ i 的DOM对象
      solar=eval('solar'+ i);
      lunar=eval('lunar'+ i);
  //将DOM对象转化为jQuery对象 方便操作
      p_solar=$(solar);
      p_lunar=$(lunar);
      //设置阳历日期为粗体
      p_solar.css("font-weight","bold");
      //设置周六周日为红色 ，日历表格的第六列和第七列表示星期六和星期日
       if(i%7==5||i%7==6)
      { 
        p_solar.css("color","red");
       }

     //控制阳历日期的输出值
      sDate = i-thisMonth_cal.firstWeekday+1;
      //如果sDate值小于0，则输出上一个月的末尾部分
        if(sDate<0)   
        { 
         
          //上一个月的天数加上sDate+1 即表示上个月末尾部分
          t1= sDate+lastMonth_cal.length+1;
          p_solar.html(t1);//阳历日期的值
          //上个月的末尾部分在本月的日历中显示，背景颜色为灰色
         p_solar.parents("td").addClass("td_background1");
          p_solar.parents("td").addClass("lastMonth");

         //判断这一天是否为农历的第一天，如果为第一天
          if(lastMonth_cal[t1-1].lDay==1)
         {
          //判断判断该月是否闰月，若闰月，则取“闰”
          var lun_date=lastMonth_cal[t1-1].isLeap?'闰':'';
         //这一天是哪个月份
          lun_date+=lastMonth_cal[t1-1].lMonth + '月';
         // 判断该月是为大月还是小月 ，若这一月为30天，则为大月
          lun_date+=monthDays(lastMonth_cal[t1-1].lYear,lastMonth_cal[t1-1].lMonth)==29?'小':'大';
          p_lunar.html('<b>'+lun_date+'</b>')
         }
        else
        { 
          p_lunar.html(cDay(lastMonth_cal[t1-1].lDay));
        } 
       var lun_holiday_last=sol_holiday_last=null;//农历节日和阳历节日两个变量
       var  s_last=lastMonth_cal[t1-1].solarFestival;//用s_last表示当天的阳历节日
         for (var k=0;k<lunarHoliday.length;k++){  
          // 判断当前的月份值是否与农历的节日数组lunarHoliday前面前两个数字相等
            if (parseInt(lunarHoliday[k].substr(0,2))==(lastMonth_cal[t1-1].lMonth)){
         //如果 月份相等，则比较后面两位数字，后面数字如果相等，则当天即为该农历节日 并显示
                if (parseInt(lunarHoliday[k].substr(2,4))==(lastMonth_cal[t1-1].lDay)){
                    p_lunar.html(lunarHoliday[k].substr(5));
                    p_lunar.addClass("red");
                    lun_holiday_last=lunarHoliday[k].substr(5);
                }
            }

            //判断除夕
            if (12==(lastMonth_cal[t1-1].lMonth)){   
                if (eve==(lastMonth_cal[t1-1].lDay))
                  {
                   p_lunar.html("除夕")
                   lun_holiday_last="除夕";}
            }
        }
     // 判断当前的月份值是否与阳历的节日数组solarHoliday前面前两个数字相等
        for (var m=0;m<solarHoliday.length;m++){  
        //如果月份相等，则比较后面两位数字，后面数字如果相等，则当天即为该阳历节日 并显示  
           if (parseInt(solarHoliday[m].substr(0,2))==(month)){
            if (parseInt(solarHoliday[m].substr(2,4))==(t1)){
                   p_lunar.html(solarHoliday[m].substr(5));
                   p_lunar.addClass("red");
                   sol_holiday_last=solarHoliday[m].substr(5);
                }
            }
        }
        if(year==2016){
          for (var mm=0;mm<holiday2016.length;mm++){  
       
        //如果月份相等，则比较后面两位数字，后面数字如果相等，则当天即为该阳历节日 并显示  
           if (parseInt(holiday2016[mm].substr(0,2))==(month)){
            if (parseInt(holiday2016[mm].substr(2,4))==(t1)){
                   p_lunar.parents("td").addClass("freeDay")
                }
            }
        }
      }
      // 如果当天阳历没有节日,则用s_last表示当天的节气
         if (s_last.length<=0){   
          s_last=lastMonth_cal[t1-1].solarTerms;
          if(s_last.length>0) 
         //如果当天的有节气的话，则设置节气的字体颜色
            s_last = s_last.fontcolor('limegreen');        
         }
          // 如果当天阳历有节日 则添加到对应的p元素中
         if(s_last.length>0) 
         {
          p_lunar.html(s_last);
         lun_holiday_last=s_last;
         } 
         //如果当天既有阴历节日又有阳历节日的话，同时输出
         if ((lun_holiday_last!=null)&&(sol_holiday_last!=null)){
            p_lunar(lun_holiday_last+"/"+sol_holiday_last)
         }                        
      //如果sDate大于0 ，则输出本月的相应的日历部分
       }

       if(sDate>-1 && sDate<thisMonth_cal.length) { //日期内

            p_solar.html(sDate+1);
        //如果日期为今天的日期 ，则添加背景，突出显示
           if(thisMonth_cal[sDate].isToday)
           {
             p_solar.parents("td").addClass("today_background");
            // p_solar.parents("td").addClass("nextMonth");
           } 
         //判断这一天是否为农历的第一天，如果为第一天
          if(thisMonth_cal[sDate].lDay==1)
          { 
           //判断判断该月是否闰月，若闰月，则取“闰”
          var lun_date=thisMonth_cal[sDate].isLeap?'闰':'';
         //这一天是哪个月份
          lun_date+=thisMonth_cal[sDate].lMonth + '月';
         // 判断该月是为大月还是小月 ，若这一月为30天，则为大月
          lun_date+=monthDays(thisMonth_cal[sDate].lYear,thisMonth_cal[sDate].lMonth)==29?'小':'大';
          p_lunar.html('<b>'+lun_date+'</b>')
          }
         else
          {
            p_lunar.html(cDay(thisMonth_cal[sDate].lDay));
          }  
          //农历节日和阳历节日两个变量
         var lun_holiday=sol_holiday=null;
         //用s表示当天的阳历节日
         s=thisMonth_cal[sDate].solarFestival;
         for (var n=0;n<lunarHoliday.length;n++){  
            // 判断当前的月份值是否与农历的节日数组lunarHoliday前面前两个数字相等
            if (parseInt(lunarHoliday[n].substr(0,2))==(thisMonth_cal[sDate].lMonth)){
               //如果 月份相等，则比较后面两位数字，后面数字如果相等，则当天即为该农历节日 并显示
                if (parseInt(lunarHoliday[n].substr(2,4))==(thisMonth_cal[sDate].lDay)){
                   p_lunar.html(lunarHoliday[n].substr(5));
                   p_lunar.addClass("red");
                  lun_holiday=lunarHoliday[n].substr(5);
                }
            }
            //判断是否为除夕
            if (12==(thisMonth_cal[sDate].lMonth)){    
                if (eve==(thisMonth_cal[sDate].lDay))
                  {
                    p_lunar.html("除夕");
                    lun_holiday="除夕";
                  }
            }
        }
      // 判断当前的月份值是否与阳历的节日数组solarHoliday前面前两个数字相等
        for (var x=0;x<solarHoliday.length;x++){  
      //如果月份相等，则比较后面两位数字，后面数字如果相等，则当天即为该阳历节日 并显示  
            if (parseInt(solarHoliday[x].substr(0,2))==(month+1)){
                if (parseInt(solarHoliday[x].substr(2,4))==(sDate+1)){
                   p_lunar.html(solarHoliday[x].substr(5));
                     p_lunar.addClass("red");
                    sol_holiday=solarHoliday[x].substr(5);
                }
            }
        }
        if(year==2016){
        for (var mm=0;mm<holiday2016.length;mm++){  
        //如果月份相等，则比较后面两位数字，后面数字如果相等，则当天即为该阳历节日 并显示  
           if (parseInt(holiday2016[mm].substr(0,2))==(month+1)){
            if (parseInt(holiday2016[mm].substr(2,4))==(sDate+1)){
                   p_lunar.parents("td").addClass("freeDay")
                }
            }
        }
      }
    //母亲节出现在5月第二个星期日 
        if ((month+1)==5){ 
        //第二个星期天出现在日历表格的第二行最后一列即i=13   
            if(i==13)
              {
                sol_holiday="母亲节";
                p_lunar.html("母亲节");
                p_lunar.addClass("red");
              }
        }
    //父亲节出现在6月第3个星期日 
        if ((month+1)==6){   
    //第三个星期天出现在日历表格的第三行最后一列即i=20   
             if(i==20)
              {sol_holiday="父亲节";
              p_lunar.html("父亲节");
               p_lunar.addClass("red");
           }
         }
     //感恩节出现在11月第4个星期四
        if((month+1)==11){
          //观察发现如果11月1号的星期数小于4.则第四个星期四出现在第三行第4个元素 i=24
           if(thisMonth_cal.firstWeekday<4&&i==24)
            {
              sol_holiday="感恩节";
              p_lunar.html("感恩节");
              p_lunar.addClass("red");
            }
          //观察发现如果11月1号的星期数大于4.则第四个星期四出现在第四行第4个元素 i=31
          else if(i==31)
             { 
              sol_holiday="感恩节";
              p_lunar.html("感恩节");
               p_lunar.addClass("red");
            }

         }
        

    // 如果当天阳历没有节日,则用s表示当天的节气
         if (s.length<=0){    
            s=thisMonth_cal[sDate].solarTerms;
        //如果当天的有节气的话，则设置节气的字体颜色
            if(s.length>0) 
           s = s.fontcolor('limegreen');        
         }
          // 如果当天阳历有节日 则添加到对应的p元素中
         if(s.length>0)
          {
            p_lunar.html(s)
          lun_holiday=s;
        }  
         //如果当天既有阴历节日又有阳历节日的话，同时输出
         if ((lun_holiday!=null)&&(sol_holiday!=null)){
        
            p_lunar.html(lun_holiday+"/"+sol_holiday);
         }                        
      }
   //如果sDate值大于这个月的天数，则表明该月日历输出结束，输出下一个月的起始部分
   else if(sDate>=thisMonth_cal.length) { 
  
     t2=sDate-thisMonth_cal.length+1;
     
         p_solar.html(t2);

         p_solar.parents("td").addClass("td_background1");
         //用nextMonth标记下个月的日历部分
          p_solar.parents("td").addClass("nextMonth");

         p_lunar.html(cDay(nextMonth_cal[t2-1].lDay));
           //判断这一天是否为农历的第一天，如果为第一天
          if(nextMonth_cal[t2-1].lDay==1)
          { 
           //判断判断该月是否闰月，若闰月，则取“闰”
          var lun_date=nextMonth_cal[t2-1].isLeap?'闰':'';
         //这一天是哪个月份
          lun_date+=nextMonth_cal[t2-1].lMonth + '月';
         // 判断该月是为大月还是小月 ，若这一月为30天，则为大月
          lun_date+=monthDays(nextMonth_cal[t2-1].lYear,nextMonth_cal[t2-1].lMonth)==29?'小':'大';
          p_lunar.html('<b>'+lun_date+'</b>')
          }
         else
           {
             p_lunar.html(cDay(nextMonth_cal[t2-1].lDay));
            } 

       var lun_holiday_next=sol_holiday_next=null;
       var  s_next=nextMonth_cal[t2-1].solarFestival;
    
         for (var y=0;y<lunarHoliday.length;y++){  
          // 判断当前的月份值是否与农历的节日数组lunarHoliday前面前两个数字相等
            if (parseInt(lunarHoliday[y].substr(0,2))==(nextMonth_cal[t2-1].lMonth)){
            //如果 月份相等，则比较后面两位数字，后面数字如果相等，则当天即为该农历节日 并显示
                if (parseInt(lunarHoliday[y].substr(2,4))==(nextMonth_cal[t2-1].lDay)){
                    p_lunar.html(lunarHoliday[y].substr(5));
                    p_lunar.addClass("red");
                    lun_holiday_next=lunarHoliday[y].substr(5);
                }
            }
             //判断是否为除夕
            if (12==(nextMonth_cal[t2-1].lMonth)){   
                if (eve==(nextMonth_cal[t2-1].lDay))
                  {
                    p_lunar.html("除夕");
                    lun_holiday_next="除夕";}
            }
        }

        if(year==2016){
        for (var mm=0;mm<holiday2016.length;mm++){  
        //如果月份相等，则比较后面两位数字，后面数字如果相等，则当天即为该阳历节日 并显示  
           if (parseInt(holiday2016[mm].substr(0,2))==(month+2)){
            if (parseInt(holiday2016[mm].substr(2,4))==(t2)){
                   p_lunar.parents("td").addClass("freeDay")
                }
            }
        }
      }
         // 判断当前的月份值是否与阳历的节日数组solarHoliday前面前两个数字相等
        for (var z=0;z<solarHoliday.length;z++){   
            if (parseInt(solarHoliday[z].substr(0,2))==(month+2)){
               //如果月份相等，则比较后面两位数字，后面数字如果相等，则当天即为该阳历节日 并显示  
                if (parseInt(solarHoliday[z].substr(2,4))==(t2)){
                    p_lunar.html(solarHoliday[z].substr(5));
                     p_lunar.addClass("red")
                    sol_holiday_next=solarHoliday[z].substr(5);
                }
            }
        }
     //如果当前的月份是4月份，
        if ((month)==3){ 
      // 四月份的日历的尾部出现五月份的部分的日历
      //当在四月份日历中尾部出现五月份的天数超过8天，则最后一个单元格就为母亲节
        if(t2>=8&&i==41){
             sol_holiday="母亲节";
           p_lunar.html("母亲节");
            p_lunar.addClass("red");
          }  
        }
      //注意：父亲节是6月第三个星期天，他不可能出现在一个月份的日历的起始部分和结束部分，感恩节也不可能 


          // 如果当天阳历没有节日,则用s表示当天的节气
         if (s_next.length<=0){   
             //如果当天的有节气的话，则设置节气的字体颜色
            s_next=nextMonth_cal[t2-1].solarTerms;
            if(s_next.length>0) s_next = s_next.fontcolor('limegreen');        
         }
         if(s_next.length>0) {
        p_lunar.html(s_next);
         lun_holiday_next=s_next;
         }   
         //如果当天既有阴历节日又有阳历节日的话，同时输出
         if ((lun_holiday_next!=null)&&(sol_holiday_next!=null)){
            p_lunar.html(lun_holiday_next+"/"+sol_holiday_next)
         }                        

      }


   }
}
  //获取select元素的年份值和月份值，重新生成
 function redrawCalendar(){
    var chooseYear=$("#chooseYear");
    var chooseMonth=$("#chooseMonth");
    var y=parseInt(chooseYear.val().match(/\d+/g));
    var m=parseInt(chooseMonth.val().match(/\d+/g))-1;
     //清空之前单元格添加类，不对生成的单元格有影响
    $(".calendarShow").find(".td_background1").removeClass("td_background1");
    $(".calendarShow").find(".today_background").removeClass("today_background");
    $(".calendarShow").find(".freeDay").removeClass("freeDay");
    $(".calendarShow").find(".red").removeClass("red");
    $(".calendarShow").find(".lastMonth").removeClass("lastMonth");
   $(".calendarShow").find(".nextMonth").removeClass("nextMonth");
    drawCalendar(y,m);
 }

