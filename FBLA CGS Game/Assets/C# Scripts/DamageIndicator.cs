using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DamageIndicator : MonoBehaviour
{

    public float fadeRate = 0.4f;
    public float speed;

    // Use this for initialization
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        Vector3 pos = GetComponent<TextMesh>().transform.position;

        pos.y += speed * Time.deltaTime;

        GetComponent<TextMesh>().transform.position = pos;
        TextMesh txt = GetComponent<TextMesh>();
        Color col = txt.color;
        col.a -= fadeRate * Time.deltaTime;
        txt.color = col;


        if (col.a <= 0)
            Destroy(this.gameObject);
    }
}
