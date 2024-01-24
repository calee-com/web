// BMI Calculator Function
function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    var bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);

    document.getElementById('result').innerHTML = 'Your BMI: ' + bmi;
}

// Email Sending Function 
function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    alert('Email Sent!');
}
document.getElementById('home').addEventListener('mouseover', function () {
    this.style.animation = 'none';
    this.style.transform = 'translateY(-50px)';
    this.style.opacity = 0;
    setTimeout(() => {
        this.style.animation = 'slideUp 1s ease-in-out';
        this.style.transform = 'translateY(0)';
        this.style.opacity = 1;
    }, 10);
});
