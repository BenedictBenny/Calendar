import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
function Add(){
    const [selectedDate, setSelectedDate] = useState(null);
    const [stMin, setStMin] = useState(0);
    const [stHour, setStHour] = useState(0);
    const [endMin, setEndMin] = useState(0);
    const [endHour, setEndHour] = useState(0);
    const num60 = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60'];
    const num24 = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'];
    const submitHandler = () => {
        console.log(selectedDate, stMin, stHour, endMin, endHour);
    }
    return (
        <div className="m-1  flex flex-row p-64 border-slate-800 w-full h-screen">
            <form className="bg-slate-200 w-1/2 rounded-lg h-1/2">
                <div>
                    <div className="p-4 ">
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
                            scrollableMonthYearDropdown >Click</DatePicker>
                    </div>
                    <div>
                    <div className="mx-4 my-2 font-semibold">StartTime : </div>
                        <label className="ml-4 "> Hours : </label>
                        <select onChange={(e)=>{setStHour(e.target.value)}} name="hour" id="hour">
                            {num24.map((num)=>{
                                return <option key={num} value="min">{num}</option>
                            })}
                        </select>
                        <label onChange={(e)=>{setStMin(e.target.value)}} className="ml-12 ">Minutes : </label>
                        <select name="min" id="min">
                            {num60.map((num)=>{
                                return <option key={num} value="min">{num}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        <div className="mx-4 my-2 font-semibold">EndTime : </div>
                        <label className="ml-4 "> Hours : </label>
                        <select onChange={(e)=>{setEndHour(e.target.value)}} name="hour" id="hour">
                            {num24.map((num)=>{
                                return <option key={num} value="min">{num}</option>
                            })}
                        </select>
                        <label onChange={(e)=>{setEndMin(e.target.value)}} className="ml-12 ">Minutes : </label>
                        <select name="min" id="min">
                            {num60.map((num)=>{
                                return <option key={num} value="min">{num}</option>
                            })}
                        </select>
                    </div>
                </div>
                <input onSubmit={submitHandler} className="ml-64 mt-4 bg-slate-400 w-1/4 rounded-lg hover:cursor-pointer" type="submit" value="Submit"/>
            </form>
        </div>
    )
}
export default Add;