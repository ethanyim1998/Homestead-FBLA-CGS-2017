using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Bullet : MonoBehaviour
{

    public Rigidbody2D rb;
    public GameObject player;

    public float bulletSpeed = 1000;
    // Use this for initialization
    void Start()
    {
        rb = this.GetComponent<Rigidbody2D>();

        Vector3 pos = new Vector3(player.transform.position.x, player.transform.position.y, player.transform.position.z);
        this.transform.position = pos;

        if (player.transform.localScale.x >= 0)
            rb.velocity = new Vector2(bulletSpeed, 0);
        else
            rb.velocity = new Vector2(-bulletSpeed, 0);

    }

    // Update is called once per frame
    void Update()
    {
        if (rb.velocity.magnitude >= 0)
            rb.velocity = new Vector2(bulletSpeed, 0);
        else
            rb.velocity = new Vector2(-bulletSpeed, 0);
          
    }
}
