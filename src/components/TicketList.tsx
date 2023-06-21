import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { fetchTicketsAsync } from '../features/tickets/ticketsSlice';
import TicketItem from './TicketItem';
import FilterOptions from './FilterOptions';
import '../Styles/ticketlist.css'

const TicketList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const tickets = useSelector((state: RootState) => state.tickets.tickets);
  const loading = useSelector((state: RootState) => state.tickets.loading);
  const error = useSelector((state: RootState) => state.tickets.error);
  const [filteredTickets, setFilteredTickets] = useState(tickets);
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const [selectedStops, setSelectedStops] = useState<string[]>([]);
  const [visibleTickets, setVisibleTickets] = useState(3);

  useEffect(() => {
    dispatch(fetchTicketsAsync());
  }, [dispatch]);

  useEffect(() => {
    setFilteredTickets(tickets);
  }, [tickets]);

  const filterTickets = (companies: string[], stops: string[]) => {
    setSelectedCompanies(companies);
    setSelectedStops(stops);

    const filtered = tickets.filter((ticket) => {
      const hasCompany =
        companies.length === 0 || companies.includes(ticket.company);
      const hasStops =
        stops.length === 0 ||
        (ticket.connectionAmount !== null &&
          stops.includes(ticket.connectionAmount.toString()));
      return hasCompany && hasStops;
    });

    setFilteredTickets(filtered);
    setVisibleTickets(3); 
  };

  const sortTickets = (option: string) => {
    let sorted: typeof filteredTickets;
    if (option === 'price') {
      sorted = [...filteredTickets].sort((a, b) => a.price - b.price);
    } else if (option === 'duration') {
      sorted = [...filteredTickets].sort((a, b) => a.duration - b.duration);
    } else if (option === 'optimal') {
      sorted = [...filteredTickets].sort((a, b) => {
        const aOptimal = a.price / a.duration;
        const bOptimal = b.price / b.duration;
        return aOptimal - bOptimal;
      });
    } else {
      sorted = filteredTickets;
    }
    setFilteredTickets(sorted);
    setVisibleTickets(3); 
  };

  const handleCompanyFilterChange = (companies: string[]) => {
    setSelectedCompanies(companies);
    filterTickets(companies, selectedStops);
  };

  const handleStopsFilterChange = (stops: string[]) => {
    setSelectedStops(stops);
    filterTickets(selectedCompanies, stops);
  };

  const handleLoadMore = () => {
    setVisibleTickets((prevVisibleTickets) => prevVisibleTickets + 3);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
        <div className="ticket-list">
        </div>

    <div className='grid'>
      <FilterOptions
        selectedCompanies={selectedCompanies}
        selectedStops={selectedStops}
        sortTickets={sortTickets}
        onCompanyFilterChange={handleCompanyFilterChange}
        onStopsFilterChange={handleStopsFilterChange}
      />
      {filteredTickets.slice(0, visibleTickets).map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
      {visibleTickets < filteredTickets.length && (
        <button className='load_more' onClick={handleLoadMore}>Загрузить ещё</button>
      )}
    </div>
    
    </>
    
  );
};

export default TicketList;
