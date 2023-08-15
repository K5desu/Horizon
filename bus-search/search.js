function clickBtn() {
    var date,week,hour,minute,time;//現在時刻用変数
    date = new Date();
    week = date.getDay();//曜日を取得
    //week = 6;
    hour = date.getHours();
    minute = date.getMinutes();
    time = hour*60 + minute;//比較用に分に変換
    //console.log(time);

    //バス時刻表示プログラム
    const str = document.getElementById("ch-line").value;

    if (0 < week && week < 6 ) {//平日
        if (str == "seta-ryu") {
            //csvファイルから時刻を取り出し配列化する
        fetch("../bus-search/csv/seta-ryu-we.csv")//htmlファイルからの相対パスを書く
        .then(response => response.text())
        .then(data => {
            const values = data.split(',').map(Number);
            //console.log(values);
        
            const filtered1 = values.filter( function( schedule1 ) {
                return schedule1 >= time//現在時刻を含む未来の時刻を抽出
            })
            var result1 = Math.min(...filtered1);//最も近い時間を選択

            //時間を分から直す
            var jikan1 = Math.floor(result1 / 60);
            jikan1 = ("0" + jikan1).slice(-2);//slice()で常に二桁で表示する
            var hun1 = Math.floor(result1 % 60);
            hun1 = ("0" + hun1).slice(-2);

            if(result1 === Infinity) {//エラー防止
                document.getElementById("bus1").textContent = "バスが見つかりません";
            }else{
                document.getElementById("bus1").textContent = jikan1 + ":" + hun1;
            }
            //二番目に近いバス
            var filtered2 = values.filter( function( schedule2 ){
                return schedule2 > result1//直近よりもさらに未来の時刻
            }) 
            var result2 = Math.min(...filtered2);

            var jikan2 = Math.floor(result2 / 60);
            jikan2 = ("0" + jikan2).slice(-2);
            var hun2 = Math.floor(result2 % 60);
            hun2 = ("0" + hun2).slice(-2);

            if(result2 === Infinity) {
                document.getElementById("bus2").textContent = "バスが見つかりません";
            }else{
                document.getElementById("bus2").textContent = jikan2 + ":" + hun2;
            }
        })
        .catch(error => {
            document.getElementById("bus1").textContent = "エラーが発生しました";
        })


        
        }else if (str == "ishi-ryu") {//石山龍大間
        fetch("../bus-search/csv/ishi-ryu-we.csv")//htmlファイルからの相対パスを書く
        .then(response => response.text())
        .then(data => {
            const values = data.split(',').map(Number);
            //console.log(values);
        
            const filtered1 = values.filter( function( schedule1 ) {
                return schedule1 >= time//現在時刻を含む未来の時刻を抽出
            })
            var result1 = Math.min(...filtered1);//最も近い時間を選択

            //時間を分から直す
            var jikan1 = Math.floor(result1 / 60);
            jikan1 = ("0" + jikan1).slice(-2);//slice()で常に二桁で表示する
            var hun1 = Math.floor(result1 % 60);
            hun1 = ("0" + hun1).slice(-2);

            if(result1 === Infinity) {//エラー防止
                document.getElementById("bus1").textContent = "バスが見つかりません";
            }else{
                document.getElementById("bus1").textContent = jikan1 + ":" + hun1;
            }
            //二番目に近いバス
            var filtered2 = values.filter( function( schedule2 ){
                return schedule2 > result1//直近よりもさらに未来の時刻
            }) 
            var result2 = Math.min(...filtered2);

            var jikan2 = Math.floor(result2 / 60);
            jikan2 = ("0" + jikan2).slice(-2);
            var hun2 = Math.floor(result2 % 60);
            hun2 = ("0" + hun2).slice(-2);

            if(result2 === Infinity) {
                document.getElementById("bus2").textContent = "バスが見つかりません";
            }else{
                document.getElementById("bus2").textContent = jikan2 + ":" + hun2;
            }
        })
        .catch(error => {
            document.getElementById("bus1").textContent = "エラーが発生しました";
        })



        }else if (str == "ryu-seta") {//龍大瀬田間
        fetch("../bus-search/csv/ryu-seta-we.csv")//htmlファイルからの相対パスを書く
        .then(response => response.text())
        .then(data => {
            const values = data.split(',').map(Number);
            //console.log(values);
        
            const filtered1 = values.filter( function( schedule1 ) {
                return schedule1 >= time//現在時刻を含む未来の時刻を抽出
            })
            var result1 = Math.min(...filtered1);//最も近い時間を選択

            //時間を分から直す
            var jikan1 = Math.floor(result1 / 60);
            jikan1 = ("0" + jikan1).slice(-2);//slice()で常に二桁で表示する
            var hun1 = Math.floor(result1 % 60);
            hun1 = ("0" + hun1).slice(-2);

            if(result1 === Infinity) {//エラー防止
                document.getElementById("bus1").textContent = "バスが見つかりません";
            }else{
                document.getElementById("bus1").textContent = jikan1 + ":" + hun1;
            }
            //二番目に近いバス
            var filtered2 = values.filter( function( schedule2 ){
                return schedule2 > result1//直近よりもさらに未来の時刻
            }) 
            var result2 = Math.min(...filtered2);

            var jikan2 = Math.floor(result2 / 60);
            jikan2 = ("0" + jikan2).slice(-2);
            var hun2 = Math.floor(result2 % 60);
            hun2 = ("0" + hun2).slice(-2);

            if(result2 === Infinity) {
                document.getElementById("bus2").textContent = "バスが見つかりません";
            }else{
                document.getElementById("bus2").textContent = jikan2 + ":" + hun2;
            }
        })
        .catch(error => {
            document.getElementById("bus1").textContent = "エラーが発生しました";
        })



        }else if (str == "ryu-ishi") {//龍大石山間
            fetch("../bus-search/csv/ryu-ishi-we.csv")//htmlファイルからの相対パスを書く
        .then(response => response.text())
        .then(data => {
            const values = data.split(',').map(Number);
            //console.log(values);
        
            const filtered1 = values.filter( function( schedule1 ) {
                return schedule1 >= time//現在時刻を含む未来の時刻を抽出
            })
            var result1 = Math.min(...filtered1);//最も近い時間を選択

            //時間を分から直す
            var jikan1 = Math.floor(result1 / 60);
            jikan1 = ("0" + jikan1).slice(-2);//slice()で常に二桁で表示する
            var hun1 = Math.floor(result1 % 60);
            hun1 = ("0" + hun1).slice(-2);

            if(result1 === Infinity) {//エラー防止
                document.getElementById("bus1").textContent = "バスが見つかりません";
            }else{
                document.getElementById("bus1").textContent = jikan1 + ":" + hun1;
            }
            //二番目に近いバス
            var filtered2 = values.filter( function( schedule2 ){
                return schedule2 > result1//直近よりもさらに未来の時刻
            }) 
            var result2 = Math.min(...filtered2);

            var jikan2 = Math.floor(result2 / 60);
            jikan2 = ("0" + jikan2).slice(-2);
            var hun2 = Math.floor(result2 % 60);
            hun2 = ("0" + hun2).slice(-2);

            if(result2 === Infinity) {
                document.getElementById("bus2").textContent = "バスが見つかりません";
            }else{
                document.getElementById("bus2").textContent = jikan2 + ":" + hun2;
            }
        })
        .catch(error => {
            document.getElementById("bus1").textContent = "エラーが発生しました";
        })



        } else {//プルダウンを選択しないで検索を押した場合警告を出す
            alert("バスを選択して下さい")
        }

//ここから土曜日用プログラム
    }else if (week == 6){
        if (str == "seta-ryu") {//瀬田龍大間
            //csvファイルから時刻を取り出し配列化する
        fetch("../bus-search/csv/seta-ryu-sa.csv")//htmlファイルからの相対パスを書く
        .then(response => response.text())
        .then(data => {
            const values = data.split(',').map(Number);
            //console.log(values);
        
            const filtered1 = values.filter( function( schedule1 ) {
                return schedule1 >= time//現在時刻を含む未来の時刻を抽出
            })
            var result1 = Math.min(...filtered1);//最も近い時間を選択

            //時間を分から直す
            var jikan1 = Math.floor(result1 / 60);
            jikan1 = ("0" + jikan1).slice(-2);//slice()で常に二桁で表示する
            var hun1 = Math.floor(result1 % 60);
            hun1 = ("0" + hun1).slice(-2);

            if(result1 === Infinity) {//エラー防止
                document.getElementById("bus1").textContent = "バスが見つかりません";
            }else{
                document.getElementById("bus1").textContent = jikan1 + ":" + hun1;
            }
            //二番目に近いバス
            var filtered2 = values.filter( function( schedule2 ){
                return schedule2 > result1//直近よりもさらに未来の時刻
            }) 
            var result2 = Math.min(...filtered2);

            var jikan2 = Math.floor(result2 / 60);
            jikan2 = ("0" + jikan2).slice(-2);
            var hun2 = Math.floor(result2 % 60);
            hun2 = ("0" + hun2).slice(-2);

            if(result2 === Infinity) {
                document.getElementById("bus2").textContent = "バスが見つかりません";
            }else{
                document.getElementById("bus2").textContent = jikan2 + ":" + hun2;
            }
        })
        .catch(error => {
            document.getElementById("bus1").textContent = "エラーが発生しました";
        })



        }else if (str == "ryu-seta") {//龍大瀬田間
        fetch("../bus-search/csv/ryu-seta-sa.csv")//htmlファイルからの相対パスを書く
        .then(response => response.text())
        .then(data => {
            const values = data.split(',').map(Number);
            //console.log(values);
        
            const filtered1 = values.filter( function( schedule1 ) {
                return schedule1 >= time//現在時刻を含む未来の時刻を抽出
            })
            var result1 = Math.min(...filtered1);//最も近い時間を選択

            //時間を分から直す
            var jikan1 = Math.floor(result1 / 60);
            jikan1 = ("0" + jikan1).slice(-2);//slice()で常に二桁で表示する
            var hun1 = Math.floor(result1 % 60);
            hun1 = ("0" + hun1).slice(-2);

            if(result1 === Infinity) {//エラー防止
                document.getElementById("bus1").textContent = "バスが見つかりません";
            }else{
                document.getElementById("bus1").textContent = jikan1 + ":" + hun1;
            }
            //二番目に近いバス
            var filtered2 = values.filter( function( schedule2 ){
                return schedule2 > result1//直近よりもさらに未来の時刻
            }) 
            var result2 = Math.min(...filtered2);

            var jikan2 = Math.floor(result2 / 60);
            jikan2 = ("0" + jikan2).slice(-2);
            var hun2 = Math.floor(result2 % 60);
            hun2 = ("0" + hun2).slice(-2);

            if(result2 === Infinity) {
                document.getElementById("bus2").textContent = "バスが見つかりません";
            }else{
                document.getElementById("bus2").textContent = jikan2 + ":" + hun2;
            }
        })
        .catch(error => {
            document.getElementById("bus1").textContent = "エラーが発生しました";
        })

        } else if (str == "ishi-ryu" || str == "ryu-ishi") {
            document.getElementById("bus1").textContent = "運休";
            document.getElementById("bus2").textContent = "運休";
        } else {//プルダウンを選択しないで検索を押した場合警告を出す
            alert("バスを選択して下さい")
        }

//ここから日曜日用プログラム
    }else{
        if (str == "seta-ryu") {//瀬田龍大間
            //csvファイルから時刻を取り出し配列化する
        fetch("../bus-search/csv/seta-ryu-su.csv")//htmlファイルからの相対パスを書く
        .then(response => response.text())
        .then(data => {
            const values = data.split(',').map(Number);
            //console.log(values);
        
            const filtered1 = values.filter( function( schedule1 ) {
                return schedule1 >= time//現在時刻を含む未来の時刻を抽出
            })
            var result1 = Math.min(...filtered1);//最も近い時間を選択

            //時間を分から直す
            var jikan1 = Math.floor(result1 / 60);
            jikan1 = ("0" + jikan1).slice(-2);//slice()で常に二桁で表示する
            var hun1 = Math.floor(result1 % 60);
            hun1 = ("0" + hun1).slice(-2);

            if(result1 === Infinity) {//エラー防止
                document.getElementById("bus1").textContent = "バスが見つかりません";
            }else{
                document.getElementById("bus1").textContent = jikan1 + ":" + hun1;
            }
            //二番目に近いバス
            var filtered2 = values.filter( function( schedule2 ){
                return schedule2 > result1//直近よりもさらに未来の時刻
            }) 
            var result2 = Math.min(...filtered2);

            var jikan2 = Math.floor(result2 / 60);
            jikan2 = ("0" + jikan2).slice(-2);
            var hun2 = Math.floor(result2 % 60);
            hun2 = ("0" + hun2).slice(-2);

            if(result2 === Infinity) {
                document.getElementById("bus2").textContent = "バスが見つかりません";
            }else{
                document.getElementById("bus2").textContent = jikan2 + ":" + hun2;
            }
        })
        .catch(error => {
            document.getElementById("bus1").textContent = "エラーが発生しました";
        })



        }else if (str == "ryu-seta") {//龍大瀬田間
        fetch("../bus-search/csv/ryu-seta-su.csv")//htmlファイルからの相対パスを書く
        .then(response => response.text())
        .then(data => {
            const values = data.split(',').map(Number);
            //console.log(values);
        
            const filtered1 = values.filter( function( schedule1 ) {
                return schedule1 >= time//現在時刻を含む未来の時刻を抽出
            })
            var result1 = Math.min(...filtered1);//最も近い時間を選択

            //時間を分から直す
            var jikan1 = Math.floor(result1 / 60);
            jikan1 = ("0" + jikan1).slice(-2);//slice()で常に二桁で表示する
            var hun1 = Math.floor(result1 % 60);
            hun1 = ("0" + hun1).slice(-2);

            if(result1 === Infinity) {//エラー防止
                document.getElementById("bus1").textContent = "バスが見つかりません";
            }else{
                document.getElementById("bus1").textContent = jikan1 + ":" + hun1;
            }
            //二番目に近いバス
            var filtered2 = values.filter( function( schedule2 ){
                return schedule2 > result1//直近よりもさらに未来の時刻
            }) 
            var result2 = Math.min(...filtered2);

            var jikan2 = Math.floor(result2 / 60);
            jikan2 = ("0" + jikan2).slice(-2);
            var hun2 = Math.floor(result2 % 60);
            hun2 = ("0" + hun2).slice(-2);

            if(result2 === Infinity) {
                document.getElementById("bus2").textContent = "バスが見つかりません";
            }else{
                document.getElementById("bus2").textContent = jikan2 + ":" + hun2;
            }
        })
        .catch(error => {
            document.getElementById("bus1").textContent = "エラーが発生しました";
        })

        } else if (str == "ishi-ryu" || str == "ryu-ishi") {
            document.getElementById("bus1").textContent = "運休";
            document.getElementById("bus2").textContent = "運休";
        } else {//プルダウンを選択しないで検索を押した場合警告を出す
            alert("バスを選択して下さい")
        }
        
    }

}
