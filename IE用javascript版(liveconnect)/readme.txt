readme
	1.�ʒu�E�R���e���c�쓮�ɂ���
	2.���A���^�C���R���g���[���ɂ���




�@1.�ʒu�E�R���e���c�쓮�ɂ���

(���C�ς݃G���W����html,JavaScript�A�o�[�W����11�ȏ�H��shockwave player���K�v)

 (html��URL)?posx=(X���W)&posy=(Y���W)&posz=(Z���W)&rotx=(X��])&roty=(Y��])&rotz=(Z��])&rot=(Y��])&cid=(�R���e���cID)
��
http://localhost/D-Cubis2-1.html?posx=-525&posy=10&rot=60
http://localhost/D-Cubis2-1.html?cid=s002

posx,posy,posz�͏����ʒu�����_�Ƃ������W�B(�����l����̋���)
�R���e���cID��COD�ŕt�^�������́B


cid�Ŏw�肵���ꍇ�ɂ��ẮA�ړ���ɃX�y�[�X���Ȃ��ꍇ�͈ړ������ʏ�̏����ʒu�ƂȂ�B


���W�w������R���e���c�w�肪�D�悳���B




�@2.���A���^�C���R���g���[���ɂ���
D-CubisAPI�b��d�l

�֐�
�EstartFullScreen(waitTime)
	�{���J�n���ɑS��ʃ��[�h�ɐ؂�ւ��܂��B�܂��͎w�萔�b��ɑS��ʂɕύX�������Ƃ��ɗ��p���܂��B
	���גጸ�̂��߂Ɉ���waitTime�Ƀ~���b��shockwave movie�J�n�܂ł̎��Ԃ��w�肵�Ă��������B
	�w�莞�Ԍォ��movie�ւ̃A�N�Z�X���s���J�n���܂��B

�EfullScreen()
	�S��ʃ��[�h�ɐ؂�ւ��܂��B

�EnormalScreen()
	�S��ʃ��[�h����ʏ��ʕ\���ɐ؂�ւ��܂��B

�Eposx(posx)
	�{���Ҏ��_�ō��E������posx�ړ����܂��B�E�����ł��B

�Eposy(posy)
	�{���Ҏ��_�ŏ㉺������posy�ړ����܂��B�オ���ł��B

�Eposz(posz)
	�{���Ҏ��_�őO�������posz�ړ����܂��B��낪���ł��B

�Erot(rot)
	�{���Ҏ��_��(������)rot����]���܂��B�����v��肪���ł��B

�EDCubisAPI(mode,posx,posy,posz,rotx,roty,rotz,cid)
	�{�֐��ɂ��D-Cubis�G���W��(D-Cubis2.dcr)�փf�[�^�𑗐M���܂��B

�Ecid(cid)
	�w�肵��cid�̃R���e���c��������ʒu�Ɉړ����܂��B

����
	mode : 
		"screen"	:��ʕ\���̃R���g���[��
		"absolute"	:��΍��W�n
		"absolute2"	:�{���J�n����̐�΍��W�B��΍��W������-50
		"relative"	:���Έʒu�Ɉړ�
		""		:relative�Ɠ���
		"restart"	:�J�n�ʒu�ֈړ�
		"cid"		:�R���e���c�ֈړ�
	posx : �E�����ʒu
		mode = "screen"�̏ꍇ
		"full"		:�S��ʕ\���ɕύX
		"normal"	:�ʏ��ʂɕύX
		"startFull"	:�{���J�n���Ƀt���X�N���[���ɐ؂�ւ��܂��B
		mode = "cid"�̏ꍇ
				:�R���e���cid���w�肵�Ă��������B	
	posy : �c�����ʒu
	posz : �������ʒu
	rotx : x��](�g��Ȃ������ǂ�)
	roty : �����v������]
	rotz : z��](�g��Ȃ������ǂ�)
	cid  : �R���e���cID�iCOD�Ŏw��j


��{�͈ȉ��̊֐��ł��B(live connect)
window.DCubis2.EvalScript(theArgs);
	theArgs : "mode,posx,posy,posz,rotx,roty,rotz,cid"�����̕�����(���p�J���}��؂�)

�EIE�݂̂œ��삵�܂��B
�E���p�����l�܂���NULL("")�݈̂����Ƃ��Ă��������B(cid,mode,posx������)
�E����jump�������͂���܂���B
�E�{�d�l�͎b��ł��B����啝�ɕύX����\��������܂��B



















