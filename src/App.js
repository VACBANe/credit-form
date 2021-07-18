import './App.css';
import {useState} from "react";

function App() {

    const [cardNum, setCardNum] = useState('');
    const [modalCvv, setModalCvv] = useState(false);
    const [cvv, setCvv] = useState('');
    const [month, setMonth] = useState('month');
    const [year, setYear] = useState('year');

    //Card number
    const onCardNumChange = (e) => {
        let num = e.target.value;
        if (num.length < 20) {
            let res = +(num.split(' ').join(''));
            if (res.length > 14) return;
            if (Number.isInteger(res)) {
                let arr = res.toString().match(/.{1,4}/g);
                setCardNum(arr.join(' '));
            }
            if (!num) {
                setCardNum('');
            }
        }
    }

    //---------DATE---------//
    //Month
    const onChangeMonth = (e) => {
        setMonth(e.target.value);
    }
    //Year
    const onChangeYear = (e) => {
        setYear(e.target.value);
    }
    //CVV
    const toggleModalCvv = () => {
        setModalCvv(!modalCvv);
    }
    const onChangeCvv = (e) => {
        let newState = cvv;
        if (newState.length > 2 && e.target.value !== 'C') return;
        if (e.target.value === 'C') {
            newState = newState.slice(0, newState.length - 1)
        } else
            newState += e.target.value;
        setCvv(newState);
        if (newState.length === 3)
            toggleModalCvv();
    }
    //Result
    const resultFunc = () => {
        if (cardNum.length < 14) {
            alert('Card Number error');
            return;
        } else if (cvv.length < 3) {
            alert('CVV error');
            return;
        }
        alert(
            `Card Number: ${cardNum} \nExpiration Date: ${month}/${year} \nCVV: ${cvv}`
        );
        window.location.reload();
    }
    return (
        <div className="jumbotron d-flex align-items-center min-vh-100">
            <div className={'container border p-5'}>
                <div className={'row'}>
                    <div className={"container-inner row"}>
                        <img className={'card-img m-auto'}
                             src={'https://www.pinclipart.com/picdir/big/567-5679765_credit-card-vector-png-clipart.png'}
                             alt={"Card"}/>
                    </div>
                    <form>
                        <label className={'form-label'}>Card Number</label>
                        <input className={'form-control mb-3'} type={"text"} value={cardNum} onChange={onCardNumChange}
                               required/>
                        <label className={'form-label'}>Expiration Date</label>
                        <div className={"input-group mb-3"}>
                            <select className="form-select" onChange={onChangeMonth} value={month} required>
                                <option value={'month'}></option>
                                <option value={'Jan'}>January</option>
                                <option value={'Feb'}>February</option>
                                <option value={'Mar'}>March</option>
                                <option value={'Apr'}>April</option>
                                <option value={'May'}>May</option>
                                <option value={'May'}>June</option>
                                <option value={'May'}>July</option>
                                <option value={'May'}>August</option>
                                <option value={'May'}>September</option>
                                <option value={'May'}>October</option>
                                <option value={'May'}>November</option>
                                <option value={'May'}>December</option>
                            </select>
                            <span className={'input-group-text'}>/</span>
                            <select className={"form-select"} value={year} onChange={onChangeYear} required>
                                <option className={'select'}></option>
                                <option>2021</option>
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
                                <option>2025</option>
                                <option>2026</option>
                            </select>
                        </div>
                        <label className={'form-label'}>CVV</label>
                        <input className={'form-control readonly-cvv mb-3'} readOnly={'readonly'} type={"password"}
                               value={cvv} onClick={toggleModalCvv} required/>
                        {modalCvv && <Cvv toggleModalCvv={toggleModalCvv} onChangeCvv={onChangeCvv}/>}
                        <input className={"btn btn-primary"} type={"button"} onClick={resultFunc} value={'Send'}/>
                    </form>
                </div>
            </div>
        </div>
    );
}

const Cvv = ({toggleModalCvv, onChangeCvv}) => {
    return (
        <div>
            <div className={'bg-modal'} onClick={toggleModalCvv}></div>
            <div className={'modal-cvv'}>
                <div className={"row"}>
                    <input type={'button'} className={'col btn btn-primary border'} value={'1'} onClick={onChangeCvv}/>
                    <input type={'button'} className={'col btn btn-primary border'} value={'2'} onClick={onChangeCvv}/>
                    <input type={'button'} className={'col btn btn-primary border'} value={'3'} onClick={onChangeCvv}/>
                </div>
                <div className={"row"}>
                    <input type={'button'} className={'col btn btn-primary border'} value={'4'} onClick={onChangeCvv}/>
                    <input type={'button'} className={'col btn btn-primary border'} value={'5'} onClick={onChangeCvv}/>
                    <input type={'button'} className={'col btn btn-primary border'} value={'6'} onClick={onChangeCvv}/>
                </div>
                <div className={"row"}>
                    <input type={'button'} className={'col btn btn-primary border'} value={'7'} onClick={onChangeCvv}/>
                    <input type={'button'} className={'col btn btn-primary border'} value={'8'} onClick={onChangeCvv}/>
                    <input type={'button'} className={'col btn btn-primary border'} value={'9'} onClick={onChangeCvv}/>
                </div>
                <div className={"row"}>
                    <input type={'button'} className={'col btn btn-primary border'} value={'C'} onClick={onChangeCvv}/>
                    <input type={'button'} className={'col btn btn-primary border'} value={'0'} onClick={onChangeCvv}/>
                </div>
            </div>
        </div>
    );
}

export default App;
