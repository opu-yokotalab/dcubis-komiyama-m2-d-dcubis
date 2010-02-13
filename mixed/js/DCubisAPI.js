//初期位置へ戻る
function restart(){
  getMovieName("DCubisAPIinHTML").DCubisJ2F("restart","","","","","",""); 
}
//フルスクリーンに変更
function fullScreen(){
  getMovieName("DCubisAPIinHTML").DCubisJ2F("screen","full","","","","","");
}
//通常画面に変更
function normalScreen(){
  getMovieName("DCubisAPIinHTML").DCubisJ2F("screen","normal","","","","","");
}
//前へ
function forward(posz){
  getMovieName("DCubisAPIinHTML").DCubisJ2F("relative","","",-posz,"","","");
}
//後ろへ
function back(posz){
  getMovieName("DCubisAPIinHTML").DCubisJ2F("relative","","",posz,"","","");
}
//上へ
function up(posy){
  getMovieName("DCubisAPIinHTML").DCubisJ2F("relative","",posy,"","","","");
}
//下へ
function down(posy){
  getMovieName("DCubisAPIinHTML").DCubisJ2F("relative","",-posy,"","","","");
}
//右へ
function right(posx){
  getMovieName("DCubisAPIinHTML").DCubisJ2F("relative",posx,"","","","","");
}
//左へ
function left(posx){
  getMovieName("DCubisAPIinHTML").DCubisJ2F("relative",-posx,"","","","","");
}
//右回転
function turnR(rot){
  getMovieName("DCubisAPIinHTML").DCubisJ2F("relative","","","","",-rot,"");
}
//左回転
function turnL(rot){
  getMovieName("DCubisAPIinHTML").DCubisJ2F("relative","","","","",rot,"");
}
//コンテンツへ移動
function cid(cid){
  getMovieName("DCubisAPIinHTML").DCubisJ2F("cid",cid ,"","","","","");
}
//空間内の座標基準絶対位置移動
function absolute(posx,posy,posz,rotx,roty,rotz){
  getMovieName("DCubisAPIinHTML").DCubisJ2F("absolute",posx,posy,posz,rotx,roty,rotz);
}
//絶対位置移動から閲覧開始の高さを基準に修正した移動
function absolute2(posx,posy,posz,rotx,roty,rotz){
  getMovieName("DCubisAPIinHTML").DCubisJ2F("absolute2",posx,posy,posz,rotx,roty,rotz);
}
//相対移動
function relative(posx,posy,posz,rotx,roty,rotz){
  getMovieName("DCubisAPIinHTML").DCubisJ2F("relative",posx,posy,posz,rotx,roty,rotz);
}


//localconnection
function getMovieName(movieName) {
    if (navigator.appName.indexOf("Microsoft") != -1) {
        return window[movieName]
   }
   else {
       return document[movieName]
   }
//	return document.getElementById("DCubisAPIinHTML");
}

//以前の互換
function restart(){
  getMovieName("DCubisAPIinHTML").DCubisJ2F("restart","","","","","",""); 
}
function fullScreen(){
  getMovieName("DCubisAPIinHTML").DCubisJ2F("screen","full","","","","","");
}
function normalScreen(){
  getMovieName("DCubisAPIinHTML").DCubisJ2F("screen","normal","","","","","");
}
function posx(posx){
  getMovieName("DCubisAPIinHTML").DCubisJ2F("relative",posx,"","","","","");
}
function posy(posy){
  getMovieName("DCubisAPIinHTML").DCubisJ2F("relative","",posy,"","","","");
}
function posz(posz){
  getMovieName("DCubisAPIinHTML").DCubisJ2F("relative","","",posz,"","","");
}
function rot(rot){
  getMovieName("DCubisAPIinHTML").DCubisJ2F("relative","","","","",rot,"");
}
function cid(cid){
  getMovieName("DCubisAPIinHTML").DCubisJ2F("cid",cid ,"","","","","");
}


/*
//live connect
function evalSample() {
	var roty;
	if(document.theForm.roty.value != ""){
		roty = document.theForm.roty.value;
	}else{
		roty = document.theForm.rot.value;
	}
	DCubisAPI(document.theForm.posx.value, 
			document.theForm.posy.value,
			document.theForm.posz.value,
			document.theForm.rotx.value,
			roty,
			document.theForm.rotz.value,
			document.theForm.cid.value);
}
function startFullScreen(waitTime){
  if(waitTime == undefined){
    waitTime = 10000;
  }
  setTimeout("StartPing()",waitTime);
}
function restart(){
  window.DCubis2.EvalScript("restart,,,,,,");
}
function fullScreen(){
  window.DCubis2.EvalScript("screen,full,,,,,");
}
function normalScreen(){
  window.DCubis2.EvalScript("screen,normal,,,,,");
}
function posx(posx){
  window.DCubis2.EvalScript("," + posx + ",,,,,");
}
function posy(posy){
  window.DCubis2.EvalScript(",," + posy + ",,,,");
}
function posz(posz){
  window.DCubis2.EvalScript(",,," + posz + ",,,");
}
function rot(rot){
  window.DCubis2.EvalScript(",,,,," + rot + ",");
}
function cid(cid){
  window.DCubis2.EvalScript("cid," + cid + ",,,,,");
}
function StartPing(){
  var flag = false;
    while(!flag){
      try{
    window.DCubis2.EvalScript("screen,startFull,,,,,");
        flag = true;
      }catch(e){
      }
    }
}
function DCubisAPI(mode,posx,posy,posz,rotx,roty,rotz){
	var theArgs;
	theArgs = mode + "," + posx + "," + posy + "," + posz + "," + rotx + "," + roty + "," + rotz;
	window.DCubis2.EvalScript(theArgs); 
}
*/
//URL引数を処理
function ArgArray(sSource) {
	/* 初期化処理 */
	var sAry = new Array();
	{
		var nCur = 0, nRet = 0;
		var sSearch = sSource.substr(1);
		var sName, sValue;
		nRet = sSearch.indexOf('=', nCur)		// 最初の'='を検索
		while(nRet >= 0) {
			// '='以前が変数名
			sName = sSearch.substring(nCur, nRet);
			nCur = nRet + 1;
			
			// 値を取り出す
			nRet = sSearch.indexOf('&', nCur);	// 変数の区切りを検索
			if (nRet == -1) nRet = sSearch.length + 1;		// なければ最後まで
			sValue = sSearch.substring(nCur, nRet);
			
			// 配列に格納
			sAry[sName] = sValue;
			
			// 次を検索
			nCur = nRet + 1;
			nRet = sSearch.indexOf('=', nCur);
		}
	}
	/* 値を取り出すメソッド */
	this.item = function (sVarname) {
		try {
			return sAry[sVarname];	//あれば返す
		} catch(e) {
			return '';				//なければ空文字を返す
		}
	}
}
