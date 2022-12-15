import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { dateDetailsActions } from '../store/date-slice';
import { findNextDay, findPrevDay }  from '../utils/helper-functions';
import TopSection from './TopSection';
import EventList from './EventList';
import { useEffect } from 'react';


const time=['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM','1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM' ]

function HomePage() {

  const dateDetails = useSelector(state=>state.dateDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dayEvents = dateDetails.data.filter((data)=>{
    return(data.startTime.includes(dateDetails.date));
  });

  const deleteHandler = (id) => {
    dispatch(dateDetailsActions.deleteEvent(id))
  }

  const prevDayHandler = () => {
    const prevDay = findPrevDay(dateDetails.date);
    dispatch(dateDetailsActions.updateDateDetails(prevDay));
  }

  const nextDayHandler = () => {
    const nextDay = findNextDay(dateDetails.date);
    dispatch(dateDetailsActions.updateDateDetails(nextDay))
  }

  const addEventHandler = () => {
    localStorage.setItem("Page", "Add");
    navigate("/AddorEdit");
  }

  const editHandler = (day) => {
    localStorage.setItem("DayId", day.id);
    localStorage.setItem("Page", "Edit");
    localStorage.setItem("DayTitle", day.title);
    navigate("/AddorEdit");
  }
  
  useEffect(()=>{
    localStorage.setItem("data",JSON.stringify(dateDetails));
  },[dateDetails]);

  return (
    <div className="text-2xl w-full h-screen flex flex-col"  >
      <TopSection 
        prevDayHandler={prevDayHandler} 
        nextDayHandler={nextDayHandler} 
        dateDetails={dateDetails} 
        addEventHandler={addEventHandler} />
      <div className='flex flex-row h-[90%]'>
        <div className='flex flex-col w-1/6 h-full' style={{backgroundImage:"linear-gradient(to right, #E5E8F0, #E5E8F0)"}} >
        {time.map((time, index)=>{
          return <div key={index} className="text-right h-[4.16%]">{time} -</div>
        })}
        </div>
        <EventList deleteHandler={deleteHandler} editHandler={editHandler} dayEvents={dayEvents}/>
      </div>
    </div>
  );
}

export default HomePage;
