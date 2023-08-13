//バスサーチの原型
function clickBtn() {
    /*
    //動作テスト用
    const str = document.getElementById("ch-line").value;
    if (str == "seta-ryu") {
        document.getElementById("bus1").textContent = str;

    }
    */
    const str = document.getElementById("ch-line").value;
    var date,hour,minute,time;
    date = new Date();
    hour = date.getHours();
    minute = date.getMinutes();
    time = hour*60 + minute;
    //document.getElementById("bus1").textContent = time;

    if (str == "seta-ryu") {
        //現在時刻に最も近いバスを表示
        var timetable = [555,570,585,1000,1007,1020,1200,1300];//時刻表(分表示)
        var filtered1 = timetable.filter( function( schedule1 ) {
            return schedule1 >= time//現在時刻とそれよりも未来の時間を抽出
        })
        var result1 = Math.min(...filtered1);//一番近い時間を選択
            
        //時間を直す
        var jikan1 = Math.floor(result1 / 60);
        jikan1 = ("0" + jikan1).slice(-2);
        var hun1 = Math.floor(result1 % 60);
        hun1 = ("0" + hun1).slice(-2);

        if(result1 === Infinity) {//エラー防止
            document.getElementById("bus1").textContent = "バスが見つかりません";
        }else{
            document.getElementById("bus1").textContent = jikan1 + ":" + hun1;
        }

        //二番目に近いバス
        var filtered2 = timetable.filter( function( schedule2 ){
            return schedule2 > result1//直近よりもさらに未来の時刻
        }) 
        var result2 = Math.min(...filtered2);
        //時間を直す
        var jikan2 = Math.floor(result2 / 60);
        jikan2 = ("0" + jikan2).slice(-2);
        var hun2 = Math.floor(result2 % 60);
        hun2 = ("0" + hun2).slice(-2);
        if(result2 === Infinity) {
            document.getElementById("bus2").textContent = "バスが見つかりません";
        }else{
            document.getElementById("bus2").textContent = jikan2 + ":" + hun2;
        }

    }else if (str == "ishi-ryu") {

    }








}
