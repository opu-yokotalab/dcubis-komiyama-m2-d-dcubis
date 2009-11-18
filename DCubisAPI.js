function posx(posx){
  window.DCubis2.EvalScript(posx + ",,,,,,");
}
function posy(posy){
  window.DCubis2.EvalScript("," + posy + ",,,,,");
}
function posz(posz){
  window.DCubis2.EvalScript(",," + posz + ",,,,");
}
function rot(rot){
  window.DCubis2.EvalScript(",,,," + rot + ",,");
}

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
function DCubisAPI(posx,posy,posz,rotx,roty,rotz,cid){
	var theArgs;
	theArgs = posx + "," + posy + "," + posz + "," + rotx + "," + roty + "," + rotz + "," + cid;
	window.DCubis2.EvalScript(theArgs); 
}


function ArgArray(sSource) {
	/* 初期化処理 */
	var sAry = new Array();	/* アイテム配列を追加 */
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
