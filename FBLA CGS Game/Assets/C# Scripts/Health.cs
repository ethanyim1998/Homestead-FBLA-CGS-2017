using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Health : MonoBehaviour {

    /// <summary>
    /// Let your barrel set this value on initialization, since only barrel knows what it's max hp should be
    /// </summary>
    public float currentHP = 100f;

    public event System.Action<float> OnDamageReceived = delegate { };
    public event System.Action<float> OnHealingReceived = delegate { };

    public void ModifyHealth(float val) {
        currentHP += val;
        if (val < 0f) {
            OnDamageReceived(val);
        }
        else
            OnHealingReceived(val);
    }
}