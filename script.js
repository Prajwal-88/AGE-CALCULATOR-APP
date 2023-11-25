const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const form = document.querySelector("#form");
const day_holder = document.querySelector("#day_holder");
const year_holder = document.querySelector("#year_holder");
const month_holder = document.querySelector("#month_holder");
const submit = document.querySelector("#submit");
const inputs = document.querySelectorAll(".input");
const fields = document.querySelectorAll('.field');

const day_regex = /^(0[1-9]|[12][0-9]|3[01])$/;
const month_regex = /^(0[1-9]|1[0-2])$/;
const year_regex = /^([12][0-9]{3})$/;

window.addEventListener("load",()=>{

    day.value=month.value=year.value=""

})

fields.forEach(f=>{
    f.addEventListener('input',e =>{
        clear_input(f)
        if(e.target === day && !day_regex.test(e.target.value)){
            add_alert(inputs[0],"MUST BE A VALID DAY");
        }else if(e.target===month && !month_regex.test(e.target.value)){
            add_alert(inputs[1],"MUST BE A VALID MONTH")
        }else if(e.target===year && !year_regex.test(e.target.value)){
            add_alert(inputs[2],"MUST BE A VALID YEAR");
        }else if(e.target === year && e.target.value > date('year')){
            add_alert(inputs[2],"MUST BE IN PAST")
        }
    })
})

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const date = new Date();

    if(year.value.trim()===""||month.value.trim()===""||day.value.trim()===""||!day_regex.test(day.value)||!month_regex.test(month.value)||!year_regex.test(year.value)||year.value > date.getFullYear()){
        showalert(date);
    }else{
        calculateAge(new Date(`${year.value}-${month.value}-${day.value}`))
    }
})

function showalert(date){
    if(day.value.trim()===""){
        add_alert(inputs[0],"This field is required")
        console.log("Day is empty")

    }else if(month.value.trim()===""){
        add_alert(inputs[1],"This field is requried")
        console.log("Month is empty")

    }else if(year.value.trim()===""){
        add_alert(inputs[2],"This field is requried")
        console.log("Year is empty")
    }else if(!day_regex.test(day.value)){
        add_alert(inputs[0],"Must be a valid day");
        console.log("Day is not valid")
    }else if(!month_regex.test(month.value)){
        add_alert(inputs[1],"Must be valid month");
        console.log("month is not valid")
    }else if(!year_regex.test(year.value)){
        add_alert(inputs[2],"Must be a valid year")
    }else if(year.value > date.getFullYear()){
        console.log('year is greater than current year')
        add_alert(inputs[2],"Must be in the past")
    }
}

function add_alert(inpute,message){

    const div = document.createElement("div");
    div.className = 'alert_ text-[8px] block text-Light_red font-pop_italic'
    div.append(message);

    inpute.firstElementChild.classList.replace('text-Smokey_grey','text-Light_red');
    inpute.lastElementChild.classList.add('mb-1.5');
    inpute.lastElementChild.classList.add('border-Light_red');

    inpute.append(div);

    submit.disabled=true;
    submit.classList.add('cursor-not-allowed');

}



function clear_input(f){
    f.previousElementSibling.classList.replace('text-Light_red','text-Smokey_grey')
        f.classList.remove('mb-1.5');
        f.classList.remove('border-Light_red');

        document.querySelector('.alert_').remove();

        submit.disabled=false;
        submit.classList.remove('cursor-not-allowed');
}
fields.forEach(f=>{
    f.addEventListener('focus',()=>{
        clear_input(f);

    })

})




function calculateAge(birthDate){
    const now = new Date();
    let years = now.getFullYear() - birthDate.getFullYear();
    let month = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    if(month<0||(month === 0 && days < 0)){
        years--;
        month +=12;
    }

    if(days<0){
        month--;
        const previousMonth = new Date(now.getFullYear(),now.getMonth(),0);
        days +=previousMonth.getDate();
    }

    day_holder.innerText = days;
    month_holder.innerText = month;
    year_holder.innerText = years;

    console.log(`all ok`);
    
}



