readme
	1.位置・コンテンツ駆動について
	2.リアルタイムコントロールについて


　1.位置・コンテンツ駆動について

(改修済みエンジンとhtml,JavaScript、バージョン11以上？のshockwave playerが必要)

 (htmlのURL)?posx=(X座標)&posy=(Y座標)&posz=(Z座標)&rotx=(X回転)&roty=(Y回転)&rotz=(Z回転)&rot=(Y回転)&cid=(コンテンツID)&sfs=(「true」またはそれ以外)
例
http://localhost/D-Cubis2-1.html?posx=-525&posy=10&rot=60
http://localhost/D-Cubis2-1.html?cid=s002

posx,posy,poszは初期位置を原点としたshockwave movie上の座標。(初期値からの距離)。
コンテンツIDはCODで付与したもの。


cidで指定した場合については、移動先にスペースがない場合は移動せず通常の初期位置となる。


座標指定よりもコンテンツ指定が優先される。

sfsはフルスクリーンで開始するものです。


　2.リアルタイムコントロールについて
(改修済みエンジンとhtml,JavaScript、バージョン11以上？のshockwave player、Flash playerが必要)
html(javascriptとhtml上のFlash(external interface)、
html上のFlashとD-Cubisエンジン内のFlashでの通信(localconnection)を行うことで外部からのコントロールを実現しています。)

基本は次の関数です。(Localconnection)
(Flashの要素).DCubisJ2F(order,suborder,posy,posz,rotx,roty,rotz);


・fullScreen()
	全画面モードに切り替えます。

・normalScreen()
	通常画面に変更。

・restart()
	初期位置へ戻る。

・forward(posz)
	前進。

・back(posz)
	後退。

・up(posy)
	上昇。

・down(posy)
	下降。

・right(posx)
	右へ。

・left(posx)
	左へ。

・turnR(rot)
	右回転。

・turnL(rot)
	左回転。

・cid(cid)
	コンテンツへ移動。

・absolute(posx,posy,posz,rotx,roty,rotz)
	空間内の座標基準絶対位置移動。

・absolute2(posx,posy,posz,rotx,roty,rotz)
	絶対位置移動から閲覧開始の高さを基準に修正した移動。

・relative(posx,posy,posz,rotx,roty,rotz)
	相対移動。


・posx(posx)
	閲覧者視点で左右方向へposx移動します。右が正です。

・posy(posy)
	閲覧者視点で上下方向にposy移動します。上が正です。

・posz(posz)
	閲覧者視点で前後方向にposz移動します。後ろが正です。

・rot(rot)
	閲覧者視点で(水平に)rot°回転します。反時計回りが正です。

・cid(cid)
	指定したcidのコンテンツが見える位置に移動します。

引数
	command : 
		"screen"	:画面表示のコントロール
		"absolute"	:絶対座標系
		"absolute2"	:閲覧開始時基準の絶対座標。絶対座標から上に-50
		"relative"	:相対位置に移動
		"restart"	:開始位置へ移動
		"cid"		:コンテンツへ移動
	subcommand(posx) :
		command = "screen"の場合
			"full"		:全画面表示に変更
			"normal"	:通常画面に変更
		command = "cid"の場合
					:コンテンツid(cod上のcid)を指定してください。
		command	= "absolute"または"absolute2"、"relative"
					:右方向への位置
	posy : 縦方向位置
	posz : 後ろ方向位置
	rotx : x回転(使わない方が良い)
	roty : 反時計方向回転
	rotz : z回転(使わない方が良い)




・Flashのセキュリティポリシーに従い動作します。
　httpプロトコルでアクセスし、同一ドメイン上にFlashとD-Cubisエンジンが存在する場合は特に問題なく動作するはずです。
  ファイルシステム上で動作させる場合にはセキュリティの設定
　(http://www.macromedia.com/support/documentation/jp/flashplayer/help/settings_manager04.html　でのパスの許可)
　が必要です。
・現在jump処理等はありません。



















