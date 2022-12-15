import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { dateDetailsActions } from '../store/date-slice';
import TimeInput from './TimeInput';

function Add() {

    const eventType = localStorage.getItem("Page");
    const [selectedDate, setSelectedDate] = useState(null);
    const [stMin, setStMin] = useState('00');
    const [stHour, setStHour] = useState('00');
    const [endMin, setEndMin] = useState('00');
    const [endHour, setEndHour] = useState('00');
    const [title, setTitle] = useState(eventType==="Edit" ? localStorage.getItem("DayTitle") : '');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        const dateSplit = selectedDate.toString().split(" ");
        const startTime = `${dateSplit[0]} ${dateSplit[1]} ${dateSplit[2]} ${dateSplit[3]} ${stHour}:${stMin}:00 GMT+0530 (IST)`;
        const endTime = `${dateSplit[0]} ${dateSplit[1]} ${dateSplit[2]} ${dateSplit[3]} ${endHour}:${endMin}:00 GMT+0530 (IST)`;
        if(eventType === "Add"){
            dispatch(dateDetailsActions.addEvent({title,startTime,endTime}));
        }
        if(eventType === "Edit"){
            const id = +localStorage.getItem("DayId");
            dispatch(dateDetailsActions.editEvent({id, startTime, endTime, title }))
        }
        localStorage.setItem("Page", "Home");
        navigate("/");
    }

    return (
        <div className="m-1  flex flex-col p-32 border-slate-800 w-full h-screen">
            <form onSubmit={submitHandler}  className=" bg-slate-200 w-1/2 p-4 rounded-lg h-3/4">
                <div className='ml-3 p-1'>Title : </div>
                <input className="ml-4 w-44 h-6" value={title} onChange={(e)=>{setTitle(e.target.value)}}></input>
                    <div>
                        <div className="p-4 w-52 ">
                            <label className="" >Pick a date: </label>
                            <DatePicker 
                                label="click"
                                minDate={new Date('05/23/2017')} 
                                maxDate={new Date('06/22/2018')} 
                                isClearable dateFormat='MM/dd/yyyy' 
                                className="border-slate-800" 
                                selected={selectedDate} 
                                onChange={(date)=>setSelectedDate(date)}
                                showYearDropdown
                                scrollableMonthYearDropdown ></DatePicker>
                        </div>
                        <TimeInput timing="StartTime" hour={stHour} min={stMin} setHour={setStHour} setMin={setStMin} />
                        <TimeInput timing="EndtTime" hour={endHour} min={endMin} setHour={setEndHour} setMin={setEndMin} />
                    </div>
                    <input className="ml-80  bg-slate-400 w-1/4 rounded-lg hover:cursor-pointer" type="submit" value="Submit"/>
                </form>
        </div>
    )
}
export default Add;