using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GroundControl : MonoBehaviour
{
    private Player player;

	private float groundTime;

	public float delayTime = 0.04f;
    void Start()
    {
        player = gameObject.GetComponentInParent<Player>();
    }

    /// <summary>
    /// Sent when another object enters a trigger collider attached to this
    /// object (2D physics only).
    /// </summary>
    /// <param name="other">The other Collider2D involved in this collision.</param>
    void OnTriggerEnter2D(Collider2D other)
    {
        if (other.gameObject.tag != "Portal" && other.gameObject.tag != "Question" && other.gameObject.tag != "Wall" && other.gameObject.tag != "Flag" && other.gameObject.tag != "Barrel")
        {
            //StartCoroutine(Delay(1f));  Does not work
			print("Clock started");
			groundTime = Time.realtimeSinceStartup;
        }
    }

    IEnumerator Delay(float delay)
    {
        print(Time.timeSinceLevelLoad);
        yield return new WaitForSeconds(delay);
        print(Time.timeSinceLevelLoad);

    }

    void /// <summary>
         /// Sent when another object leaves a trigger collider attached to
         /// this object (2D physics only).
         /// </summary>
         /// <param name="other">The other Collider2D involved in this collision.</param>
   OnTriggerExit2D(Collider2D other)
    {
        if (other.gameObject.tag != "Portal" && other.gameObject.tag != "Question" && other.gameObject.tag != "Wall" && other.gameObject.tag != "Flag" && other.gameObject.tag != "Barrel") {
			print("left ground");
			groundTime = 0;
			player.grounded = false;
		}
    }

	void Update() {
		if (groundTime != 0 && groundTime  + delayTime  <= Time.realtimeSinceStartup) {
			print("Time passed");
			groundTime = 0;
			player.grounded = true;
		}
	}

}
