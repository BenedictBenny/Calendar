import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { dateDetailsActions } from './store/date-slice';
import { findNextDay, findPrevDay }  from './utils/helper-functions';

const left='<';
const right='>';
const time=['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM','1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM' ]

function HomePage() {
  const dateDetails = useSelector(state=>state.dateDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(dateDetails.data[0].startTime);
  // console.log(dateDetails);

  const startTimeFinder = (date) => {
    let timeVar = date.startTime.split(' ');
    return timeVar[4].split(':');
  }
  const eventWidth = (date) => {
    let startTime = startTimeFinder(date);
    let endTimeVar = date.endTime.split(' ');
    let endTime = endTimeVar[4].split(':');
    let timeDiff = [];
    timeDiff[0] = endTime[0]-startTime[0];
    timeDiff[1] = endTime[1]-startTime[1];
    if(timeDiff[1] < 0) {
      timeDiff[0]--;
      timeDiff[1]= Math.abs(timeDiff[1]);
    }
    return (timeDiff[0] + (timeDiff[1])/60)*4.16;
  }

  const eventPosition = (day) => {
    let startTime = startTimeFinder(day);
    return (0.7 + ((+startTime[0] + +(startTime[1]/60)))*1.51);
  }

  const dayEvents = dateDetails.data.filter((data)=>{
    return(data.startTime.includes(dateDetails.date));
  });

  const deleteHandler = (id) => {
    dispatch(dateDetailsActions.deleteEvent(id))
  }

  const editHandler = () => {

  }
  const prevDayHandler = () => {
    const prevDay = findPrevDay(dateDetails.date);
    console.log(prevDay);
    dispatch(dateDetailsActions.updateDateDetails(prevDay));
  }

  const nextDayHandler = () => {
    const nextDay = findNextDay(dateDetails.date);
    console.log(nextDay);
    dispatch(dateDetailsActions.updateDateDetails(nextDay))
  }

  const addEventHandler = () => {
    navigate("/Add");
  }

  
  console.log(dayEvents);
  return (
    <div className="text-2xl bg-slate-600 w-full h-screen "  >
      <div className='h-1/6 flex flex-row p-28 w-full'>
        <div className='w-1/3 h-10'>
          <button className="w-24 bg-gray-50 m-1 rounded-lg origin-center hover:rotate-12" onClick={prevDayHandler}>{left}</button>
          <button className="w-24 bg-gray-50 rounded-lg origin-center hover:rotate-12" onClick={nextDayHandler}>{right}</button>
        </div>
        <div className='ml-48 w-64 bg-gray-200 h-10 rounded-lg text-center p-1 '>{dateDetails.date}</div>
        <button className='ml-48 w-64 bg-gray-200 h-10 rounded-lg origin-center hover:rotate-12 text-center p-1' onClick={addEventHandler}>Add</button>
      </div>
      <div className='flex flex-row h-5/6'>
        <div className='flex flex-col w-1/4 h-full bg-slate-400' >
        {time.map((time, index)=>{
          return <div key={index} className="text-right h-[4.16%]">{time} -</div>
        })}
        </div>
        <div className='w-3/4 h-full bg-slate-300'>
          {dayEvents.map((day, index)=>{
            let eventWid = eventWidth(day);
            eventWid= `bg-slate-100 w-3/4 absolute rounded-lg flex flex-row justify-between hover:border-indigo-400 hover:z-10 hover:cursor-pointer border-2 border-indigo-200 h-[${eventWid}%]`;
            console.log(day);
            let eventPos = eventPosition(day);
            console.log(eventPos, "eventPos")
          return <div className={eventWid} style={{marginTop:`${eventPos}em`}} key={day.id}>{day.title}
            <div>
              <button className='shadow-xl bg-slate-400 rounded-lg w-32 h-10 origin-center hover:rotate-12 mx-px ml-1.5' style={{right:"2em"}} onClick={editHandler}> Edit</button>
              <button className='shadow-xl bg-slate-400 rounded-lg w-32 h-10 origin-center hover:rotate-12 mx-px' onClick={()=>{deleteHandler(day.id)}}> Delete</button>
              </div>
              </div>})}
          </div>
      </div>
    </div>
  );
}

export default HomePage;
