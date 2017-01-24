﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour {

	public float speed = 50f;
	public float maxSpeed = 4;
	public float jumpPower = 150f;
	public bool grounded;

	private Rigidbody2D rb;
	//private Animator anim;

	// Use this for initialization
	void Start () {
		
		rb = gameObject.GetComponent<Rigidbody2D>();
		//anim = gameObject.GetComponent<Animator>();
		
	}
	
	// Update is called once per frame
	void Update () {
		//anim.SetBool("Grounded", grounded);
		//anim.SetFloat("Speed", Mathf.Abs(Input.GetAxis("Horizontal")));

		if (Input.GetAxis("Horizontal") < -0.1f)
			transform.localScale = new Vector3(-1, 1, 1);

		if (Input.GetAxis("Horizontal") > 0.1f)
			transform.localScale = new Vector3(1, 1, 1);
	}

	void /// <summary>
	/// This function is called every fixed framerate frame, if the MonoBehaviour is enabled.
	/// </summary>
	FixedUpdate()
	{
		float horiz = Input.GetAxis("Horizontal");

		rb.AddForce(Vector2.right * horiz * speed);
		if (rb.velocity.x >= maxSpeed) {
			rb.velocity = new Vector2(maxSpeed, rb.velocity.y);
		}
		else if (rb.velocity.x <= -maxSpeed) {
			rb.velocity = new Vector2(-maxSpeed, rb.velocity.y);
		}
	}
}
