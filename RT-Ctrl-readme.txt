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
	posx : �E�����ʒu
		mode = "screen"�̏ꍇ
		"full"		:�S��ʕ\���ɕύX
		"normal"	:�ʏ��ʂɕύX
		"startFull"	:�{���J�n���Ƀt���X�N���[���ɐ؂�ւ��܂��B
				 �����������ɕύX�����̂̓t���O�݂̂ŁA���ۂ̕ύX�͍Đ��t���[���̍Ō�ɓ��B�������_�ł��B
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
�E�����l�܂���NULL("")�݈̂����Ƃ��Ă��������B(cid,mode,posx������)
�E����jump�������͂���܂���B
�E�{�d�l�͎b��ł��B����啝�ɕύX����\��������܂��B
