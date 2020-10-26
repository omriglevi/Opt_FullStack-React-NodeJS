import React from 'react' ;

 export default function CheckoutSteps(props){
    return <div dir='rtl'>
        < div className='checkout-steps'> 
            <div className={props.step1? 'active': ''}>  התחברות</div>
            <div className={props.step2? 'active': ''}> משלוח </div>
            <div className={props.step3? 'active': ''}> תשלום</div>
            <div className={props.step4? 'active': ''}> סיום</div>
    </div>
    </div>
}