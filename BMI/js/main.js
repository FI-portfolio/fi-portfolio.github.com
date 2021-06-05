'use strict';

{
    const btn = document.getElementById('btn');
    const txt = document.getElementById('result');
    
    btn.addEventListener('click', () => {
        let weight = document.getElementById('i1');
        let length = document.getElementById('i0');
        let result = document.getElementById('result');
        // BMI ＝ 体重kg ÷ (身長m)2

        const n = parseFloat(weight.value) / (Math.pow(parseFloat(length.value), 2));
        result.textContent = n;
    });
}