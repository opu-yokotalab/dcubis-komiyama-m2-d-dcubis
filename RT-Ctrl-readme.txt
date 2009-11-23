D-CubisAPI暫定仕様

関数
・posx(posx)
	閲覧者視点で左右方向へposx移動します。右が正です。

・posy(posy)
	閲覧者視点で上下方向にposy移動します。上が正です。

・posz(posz)
	閲覧者視点で前後方向にposz移動します。後ろが正です。

・rot(rot)
	閲覧者視点で(水平に)rot°回転します。反時計回りが正です。

・DCubisAPI(posx,posy,posz,rotx,roty,rotz,cid)
	本関数によりD-Cubisエンジン(D-Cubis2.dcr)へデータを送信します。
・cid(cid)
	指定したcidのコンテンツが見える位置に移動します。

引数
	posx : 右方向位置
	posy : 縦方向位置
	posz : 後ろ方向位置
	rotx : x回転(使わない方が良い)
	roty : 反時計方向回転
	rotz : z回転(使わない方が良い)
	cid  : コンテンツID（CODで指定）


基本は以下の関数です。(live connect)
window.DCubis2.EvalScript(theArgs);
	theArgs : "posx,posy,posz,rotx,roty,rotz,cid"の書式の文字列(半角カンマ区切り)

・IEのみで動作します。
・整数値またはNULL("")のみ引数としてください。(cidを除く)
・現在エラー処理がありません。(衝突判定、jump処理含む)。
・コンテンツ位置へ移動機能は未実装です。
・本仕様は暫定です。今後大幅に変更する可能性があります。
・閲覧者基準・絶対座標基準等についても未確定です。