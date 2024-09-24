//Global Function
const sectionOne = document.getElementById('section-one');
const sectionTwo = document.getElementById('section-two');
const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');
const footer = document.getElementById('footer');

//common utilities function for input
function gettingInputElemnt(id) {
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}

//common utilities function for innerText
function gettingInnerText(id) {
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
}
//Doante for Noakhali 
let donateForNoakhali = 0;
document.getElementById('donate-one').addEventListener('click', function () {
    const inputValueNumber = gettingInputElemnt('text-input-1');
    const mainBalance = gettingInnerText('actual-money');
    const storeOneMoney = gettingInnerText('store-one-money');

    if (isNaN(inputValueNumber)) {
        alert("Invalid Donation Amount");
        document.getElementById('text-input-1').value = '';
        return
    }
    else if (inputValueNumber < 1) {
        alert("Invalid! Amount must be greater than Zero");
        document.getElementById('text-input-1').value = '';
        return
    }
    else if (mainBalance < inputValueNumber) {
        alert("Insufficient balance in your account");
        document.getElementById('text-input-1').value = '';
        return
    }
    else {
        let firstDonate = mainBalance - inputValueNumber;
        donateForNoakhali += inputValueNumber;
        document.getElementById('actual-money').innerText = firstDonate;
        document.getElementById('store-one-money').innerText = donateForNoakhali;
        document.getElementById('text-input-1').value = '';

        const d = new Date();
        const div = document.createElement('div');
        div.classList.add('max-w-6xl', 'mx-auto',  'mt-10', 'border', 'p-5', 'sm:p-8', 'rounded-xl');
        div.innerHTML = `
            <h1 class="text-base font-bold">${inputValueNumber} Taka is Donated for Flood at Noakhali,Bangladesh</h1>
            <p>${d}</p>
        `;
        sectionTwo.appendChild(div);

        const modal = document.getElementById('my_modal_1');
        modal.showModal()
    }
});

//Doante for Feni
let donateForFeni = 0;
document.getElementById('donate-two').addEventListener('click', function () {
    const inputValueNumber = gettingInputElemnt('text-input-2');
    const mainBalance = gettingInnerText('actual-money');
    const storeTwoMoney = gettingInnerText('store-two-money');

    if (isNaN(inputValueNumber)) {
        alert("Invalid Donation Amount");
        document.getElementById('text-input-2').value = '';
        return
    }
    else if (inputValueNumber < 1) {
        alert("Invalid! Amount must be greater than Zero");
        document.getElementById('text-input-2').value = '';
        return
    }
    else if (mainBalance < inputValueNumber) {
        alert("Insufficient balance in your account");
        document.getElementById('text-input-2').value = '';
        return
    }
    else {
        let firstDonate = mainBalance - inputValueNumber;
        donateForFeni += inputValueNumber;
        document.getElementById('actual-money').innerText = firstDonate;
        document.getElementById('store-two-money').innerText = donateForFeni;
        document.getElementById('text-input-2').value = '';

        const d = new Date();
        const div = document.createElement('div');
        div.classList.add('max-w-6xl', 'mx-auto',  'mt-10', 'border', 'p-5', 'sm:p-8', 'rounded-xl');
        div.innerHTML = `
            <h1 class="text-base font-bold">${inputValueNumber} Taka is Donated for Flood at Feni,Bangladesh</h1>
            <p>${d}</p>
        `;
        sectionTwo.appendChild(div);

        const modal = document.getElementById('my_modal_2');
        modal.showModal()
    }
});

// Aid for Injured
let donateAid = 0;
document.getElementById('donate-three').addEventListener('click', function () {
    const inputValueNumber = gettingInputElemnt('text-input-3');
    const mainBalance = gettingInnerText('actual-money');
    const storeTwoMoney = gettingInnerText('store-three-money');

    if (isNaN(inputValueNumber)) {
        alert("Invalid Donation Amount");
        document.getElementById('text-input-3').value = '';
        return
    }
    else if (inputValueNumber < 1) {
        alert("Invalid! Amount must be greater than Zero");
        document.getElementById('text-input-3').value = '';
        return
    }
    else if (mainBalance < inputValueNumber) {
        alert("Insufficient balance in your account");
        document.getElementById('text-input-3').value = '';
        return
    }
    else {
        let firstDonate = mainBalance - inputValueNumber;
        donateAid += inputValueNumber;
        document.getElementById('actual-money').innerText = firstDonate;
        document.getElementById('store-three-money').innerText = donateAid;
        document.getElementById('text-input-3').value = '';

        const d = new Date();
        const div = document.createElement('div');
        div.classList.add('max-w-6xl', 'mx-auto',  'mt-10', 'border', 'p-5', 'sm:p-8', 'rounded-xl');
        div.innerHTML = `
            <h1 class="text-base font-bold">${inputValueNumber} Taka is Donated for Aid for Injured in the Quota Movement</h1>
            <p>${d}</p>
        `;
        sectionTwo.appendChild(div);

        const modal = document.getElementById('my_modal_3');
        modal.showModal()
    }
});


//History btn
document.getElementById('history-btn').addEventListener('click', function(){
    historyBtn.classList.add('bg-buttonColor');
    historyBtn.classList.remove('bg-white');
    donationBtn.classList.add('bg-white');
    donationBtn.classList.remove('bg-buttonColor');

    sectionTwo.classList.remove('hidden');
    sectionOne.classList.add('hidden');
    footer.classList.add('hidden');
});

//Donation btn
document.getElementById('donation-btn').addEventListener('click', function(){
    donationBtn.classList.remove('bg-white');
    donationBtn.classList.add('bg-buttonColor');
    historyBtn.classList.remove('bg-buttonColor');
    historyBtn.classList.add('bg-white');

    sectionTwo.classList.add('hidden');
    sectionOne.classList.remove('hidden');
    footer.classList.remove('hidden');
});
