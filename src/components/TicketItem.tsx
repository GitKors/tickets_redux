import React from 'react';
import { Ticket } from '../types';
import '../Styles/ticketitem.css'




interface TicketProps {
  ticket: Ticket;
}

const TicketItem: React.FC<TicketProps> = ({ ticket }) => {


//время в пути
  const a = Number(ticket.time.endTime.replace(':', ''))
  const b = Number(ticket.time.startTime.replace(':', ''))
  let x = a - b
  const hours = Math.floor(x / 100); 
  const minutes = x % 100; 
  const formattedTime = `${hours} ч ${minutes} мин`;


//Пересадки
  
function getTransplantsLabel(transplants: number | null): string {
  if (transplants === 0) {
    return 'Без пересадок';
  } else if (transplants === 1) {
    return transplants + ' пересадка';
  } else if (transplants! > 1) {
    return transplants! + ' пересадки';
  } else if (transplants !== null) {
    return transplants.toString();
  } else {
    return '';
  }
}


const transplants = ticket.connectionAmount;
const transplantsLabel = getTransplantsLabel(transplants);

//icon

const iconFrom = ticket.iconFrom
const iconTo = ticket.iconTo
const iconRight = ticket.right



  return (

      <div className='ticket'>
          <div className='div1'>
            <p className='price'>{ticket.price} {ticket.currency}</p>
          </div>

          <div className='div2'>
            <img className='logo_avia' src={ticket.imageUrl} alt="Airline logo" />
          </div>
          
          <div className='div3'>
            <p className='xz'>SVO - LED</p>
            <p className='time'>{ticket.time.startTime} - {ticket.time.endTime}</p>
          </div>

          <div className='div4'>
            <p className='path'>В пути: </p>
            <p className='path_time'>{formattedTime}</p>
          </div>
          
          <div className='div6'>
            <p className='road'><img  src={iconFrom} alt="iconcity" /> {ticket.from}
            <img className='right_img' src={iconRight}/><br />
            <img className='icon_to_img'  src={iconTo} alt="iconcity" />{ticket.to}</p>
          </div>

          <div className='div5'>
            <p className='trans'>Пересадки</p>
            <p className='lab_trans'>{transplantsLabel}</p>
          </div>

        </div>
 
  );
};

export default TicketItem;

  