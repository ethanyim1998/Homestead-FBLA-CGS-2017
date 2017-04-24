#pragma strict

function Start () {
	changeScene();
}


public static function changeScene() {
	yield WaitForSeconds(1);
	if (PlayerController.loadedLevelName == "Scene 1")
		SceneManager.LoadScene("Scene 2");
	else if (PlayerController.loadedLevelName == "Scene 2")
		SceneManager.LoadScene("Scene 3");

}