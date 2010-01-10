readme
	1.位置・コンテンツ駆動について
	2.リアルタイムコントロールについて




　1.位置・コンテンツ駆動について

(改修済みエンジンとhtml,JavaScript、バージョン11以上？のshockwave playerが必要)

 (htmlのURL)?posx=(X座標)&posy=(Y座標)&posz=(Z座標)&rotx=(X回転)&roty=(Y回転)&rotz=(Z回転)&rot=(Y回転)&cid=(コンテンツID)
例
http://localhost/D-Cubis2-1.html?posx=-525&posy=10&rot=60
http://localhost/D-Cubis2-1.html?cid=s002

posx,posy,poszは初期位置を原点とした座標。(初期値からの距離)
コンテンツIDはCODで付与したもの。


cidで指定した場合については、移動先にスペースがない場合は移動せず通常の初期位置となる。


座標指定よりもコンテンツ指定が優先される。




　2.リアルタイムコントロールについて
D-CubisAPI暫定仕様

関数
・startFullScreen(waitTime)
	閲覧開始時に全画面モードに切り替えます。または指定数秒後に全画面に変更したいときに利用します。
	負荷低減のために引数waitTimeにミリ秒でshockwave movie開始までの時間を指定してください。
	指定時間後からmovieへのアクセス試行を開始します。

・fullScreen()
	全画面モードに切り替えます。

・normalScreen()
	全画面モードから通常画面表示に切り替えます。

・posx(posx)
	閲覧者視点で左右方向へposx移動します。右が正です。

・posy(posy)
	閲覧者視点で上下方向にposy移動します。上が正です。

・posz(posz)
	閲覧者視点で前後方向にposz移動します。後ろが正です。

・rot(rot)
	閲覧者視点で(水平に)rot°回転します。反時計回りが正です。

・DCubisAPI(mode,posx,posy,posz,rotx,roty,rotz,cid)
	本関数によりD-Cubisエンジン(D-Cubis2.dcr)へデータを送信します。

・cid(cid)
	指定したcidのコンテンツが見える位置に移動します。

引数
	mode : 
		"screen"	:画面表示のコントロール
		"absolute"	:絶対座標系
		"absolute2"	:閲覧開始時基準の絶対座標。絶対座標から上に-50
		"relative"	:相対位置に移動
		""		:relativeと同じ
		"restart"	:開始位置へ移動
		"cid"		:コンテンツへ移動
	posx : 右方向位置
		mode = "screen"の場合
		"full"		:全画面表示に変更
		"normal"	:通常画面に変更
		"startFull"	:閲覧開始時にフルスクリーンに切り替えます。
		mode = "cid"の場合
				:コンテンツidを指定してください。	
	posy : 縦方向位置
	posz : 後ろ方向位置
	rotx : x回転(使わない方が良い)
	roty : 反時計方向回転
	rotz : z回転(使わない方が良い)
	cid  : コンテンツID（CODで指定）


基本は以下の関数です。(live connect)
window.DCubis2.EvalScript(theArgs);
	theArgs : "mode,posx,posy,posz,rotx,roty,rotz,cid"書式の文字列(半角カンマ区切り)

・IEのみで動作します。
・半角整数値またはNULL("")のみ引数としてください。(cid,mode,posxを除く)
・現在jump処理等はありません。
・本仕様は暫定です。今後大幅に変更する可能性があります。



















