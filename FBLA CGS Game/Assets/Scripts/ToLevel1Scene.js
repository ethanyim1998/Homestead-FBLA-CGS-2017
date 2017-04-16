#pragma strict

function Start () {
	
}

function Update () {
	if (Input.GetKeyDown(KeyCode.Return))
		changeScene();
}

function changeScene(){
	yield WaitForSeconds(.5);
	SceneManager.LoadScene("Scene 1");


}
