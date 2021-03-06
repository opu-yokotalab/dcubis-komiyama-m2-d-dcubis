﻿function startFullScreen(waitTime){
  if(waitTime == undefined){
    waitTime = 2000;
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
function DCubisAPI(mode,posx,posy,posz,rotx,roty,rotz,cid){
	var theArgs;
	theArgs = mode + "," + posx + "," + posy + "," + posz + "," + rotx + "," + roty + "," + rotz;
	window.DCubis2.EvalScript(theArgs); 
}


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
