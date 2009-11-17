TheDoc= window;
function evalSample() {
	var theArgs;
	theArgs = document.theForm.entry1.value + "," + document.theForm.entry2.value;
	TheDoc.DCubis2.EvalScript(theArgs); 
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
