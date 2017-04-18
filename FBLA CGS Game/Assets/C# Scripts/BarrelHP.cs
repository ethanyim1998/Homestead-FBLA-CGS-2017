using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BarrelHP : MonoBehaviour {

	private Rigidbody2D rb;
	public int maxHP = 1;
	private int currentHP;
	// Use this for initialization
	void Start () {
		rb = GetComponent<Rigidbody2D>();
		currentHP = maxHP;
	}
	
	// Update is called once per frame
	void Update () {
		
	}
}
