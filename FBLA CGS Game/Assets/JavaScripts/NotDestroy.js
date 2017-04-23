#pragma strict

function Start () {
	DontDestroyOnLoad(this.gameObject);
}

function Update () {
	if (Input.GetKey ("escape")) {
		Application.Quit();
	}
}