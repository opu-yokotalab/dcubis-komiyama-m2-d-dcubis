readme
	1.�ʒu�E�R���e���c�쓮�ɂ���
	2.���A���^�C���R���g���[���ɂ���


�@1.�ʒu�E�R���e���c�쓮�ɂ���

(���C�ς݃G���W����html,JavaScript�A�o�[�W����11�ȏ�H��shockwave player���K�v)

 (html��URL)?posx=(X���W)&posy=(Y���W)&posz=(Z���W)&rotx=(X��])&roty=(Y��])&rotz=(Z��])&rot=(Y��])&cid=(�R���e���cID)&sfs=(�utrue�v�܂��͂���ȊO)
��
http://localhost/D-Cubis2-1.html?posx=-525&posy=10&rot=60
http://localhost/D-Cubis2-1.html?cid=s002

posx,posy,posz�͏����ʒu�����_�Ƃ���shockwave movie��̍��W�B(�����l����̋���)�B
�R���e���cID��COD�ŕt�^�������́B


cid�Ŏw�肵���ꍇ�ɂ��ẮA�ړ���ɃX�y�[�X���Ȃ��ꍇ�͈ړ������ʏ�̏����ʒu�ƂȂ�B


���W�w������R���e���c�w�肪�D�悳���B

sfs�̓t���X�N���[���ŊJ�n������̂ł��B


�@2.���A���^�C���R���g���[���ɂ���
(���C�ς݃G���W����html,JavaScript�A�o�[�W����11�ȏ�H��shockwave player�AFlash player���K�v)
html(javascript��html���Flash(external interface)�A
html���Flash��D-Cubis�G���W������Flash�ł̒ʐM(localconnection)���s�����ƂŊO������̃R���g���[�����������Ă��܂��B)

��{�͎��̊֐��ł��B(Localconnection)
(Flash�̗v�f).DCubisJ2F(order,suborder,posy,posz,rotx,roty,rotz);


�EfullScreen()
	�S��ʃ��[�h�ɐ؂�ւ��܂��B

�EnormalScreen()
	�ʏ��ʂɕύX�B

�Erestart()
	�����ʒu�֖߂�B

�Eforward(posz)
	�O�i�B

�Eback(posz)
	��ށB

�Eup(posy)
	�㏸�B

�Edown(posy)
	���~�B

�Eright(posx)
	�E�ցB

�Eleft(posx)
	���ցB

�EturnR(rot)
	�E��]�B

�EturnL(rot)
	����]�B

�Ecid(cid)
	�R���e���c�ֈړ��B

�Eabsolute(posx,posy,posz,rotx,roty,rotz)
	��ԓ��̍��W���Έʒu�ړ��B

�Eabsolute2(posx,posy,posz,rotx,roty,rotz)
	��Έʒu�ړ�����{���J�n�̍�������ɏC�������ړ��B

�Erelative(posx,posy,posz,rotx,roty,rotz)
	���Έړ��B


�Eposx(posx)
	�{���Ҏ��_�ō��E������posx�ړ����܂��B�E�����ł��B

�Eposy(posy)
	�{���Ҏ��_�ŏ㉺������posy�ړ����܂��B�オ���ł��B

�Eposz(posz)
	�{���Ҏ��_�őO�������posz�ړ����܂��B��낪���ł��B

�Erot(rot)
	�{���Ҏ��_��(������)rot����]���܂��B�����v��肪���ł��B

�Ecid(cid)
	�w�肵��cid�̃R���e���c��������ʒu�Ɉړ����܂��B

����
	command : 
		"screen"	:��ʕ\���̃R���g���[��
		"absolute"	:��΍��W�n
		"absolute2"	:�{���J�n����̐�΍��W�B��΍��W������-50
		"relative"	:���Έʒu�Ɉړ�
		"restart"	:�J�n�ʒu�ֈړ�
		"cid"		:�R���e���c�ֈړ�
	subcommand(posx) :
		command = "screen"�̏ꍇ
			"full"		:�S��ʕ\���ɕύX
			"normal"	:�ʏ��ʂɕύX
		command = "cid"�̏ꍇ
					:�R���e���cid(cod���cid)���w�肵�Ă��������B
		command	= "absolute"�܂���"absolute2"�A"relative"
					:�E�����ւ̈ʒu
	posy : �c�����ʒu
	posz : �������ʒu
	rotx : x��](�g��Ȃ������ǂ�)
	roty : �����v������]
	rotz : z��](�g��Ȃ������ǂ�)




�EFlash�̃Z�L�����e�B�|���V�[�ɏ]�����삵�܂��B
�@http�v���g�R���ŃA�N�Z�X���A����h���C�����Flash��D-Cubis�G���W�������݂���ꍇ�͓��ɖ��Ȃ����삷��͂��ł��B
  �t�@�C���V�X�e����œ��삳����ꍇ�ɂ̓Z�L�����e�B�̐ݒ�
�@(http://www.macromedia.com/support/documentation/jp/flashplayer/help/settings_manager04.html�@�ł̃p�X�̋���)
�@���K�v�ł��B
�E����jump�������͂���܂���B



















