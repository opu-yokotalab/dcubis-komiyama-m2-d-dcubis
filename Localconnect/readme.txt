
位置・コンテンツ駆動について

(改修済みエンジンとhtml,JavaScript、バージョン11以上？のshockwave playerが必要)

 (htmlのURL)?posx=(X座標)&posy=(Y座標)&posz=(Z座標)&rotx=(X回転)&roty=(Y回転)&rotz=(Z回転)&rot=(Y回転)&cid=(コンテンツID)
例
http://localhost/D-Cubis2-1.html?posx=-525&posy=10&rot=60
http://localhost/D-Cubis2-1.html?cid=s002

posx,posy,poszは初期位置を原点とした座標。(初期値からの距離)
コンテンツIDはCODで付与したもの。


cidで指定した場合については、移動先にスペースがない場合は移動せず通常の初期位置となる。


座標指定よりもコンテンツ指定が優先される。
