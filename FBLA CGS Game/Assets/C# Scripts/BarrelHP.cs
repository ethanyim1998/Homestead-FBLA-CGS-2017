using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BarrelHP : MonoBehaviour {

    public float MaxHealth = 50f;

    public float ExplodeDamageThreshold = 25f;
    Health health;
    void Awake() {
        health = GetComponent<Health>();
        //inject barrell health
        health.currentHP = MaxHealth;
        health.OnDamageReceived += ProcessDamage;

    }

    void ProcessDamage(float value) {
        float damage = Mathf.Abs(value);
        if(damage > ExplodeDamageThreshold) {
            //possible features
            return;
        }
        if(health.currentHP <= 0) {
            Destroy(gameObject);
        }
    }

}
