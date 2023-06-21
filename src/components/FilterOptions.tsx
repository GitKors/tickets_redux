import React, { useState, useEffect } from 'react';
import '../Styles/filter.css';

interface FilterOptionsProps {
  selectedCompanies: string[];
  selectedStops: string[];
  sortTickets: (option: string) => void;
  onCompanyFilterChange: (companies: string[]) => void;
  onStopsFilterChange: (stops: string[]) => void;
}

const FilterOptions: React.FC<FilterOptionsProps> = ({
  selectedCompanies,
  selectedStops,
  sortTickets,
  onCompanyFilterChange,
  onStopsFilterChange,
}) => {
  const [activeButton, setActiveButton] = useState('');
  const [showFilters, setShowFilters] = useState(window.innerWidth > 768);

  const handleCompanyCheckboxChange = (company: string) => {
    const updatedCompanies = selectedCompanies.includes(company)
      ? selectedCompanies.filter((c) => c !== company)
      : [...selectedCompanies, company];
    onCompanyFilterChange(updatedCompanies);
  };

  const handleStopsCheckboxChange = (stops: string) => {
    const updatedStops = selectedStops.includes(stops)
      ? selectedStops.filter((s) => s !== stops)
      : [...selectedStops, stops];
    onStopsFilterChange(updatedStops);
  };

  const handleButtonClick = (option: string) => {
    if (activeButton === option) {
      setActiveButton('');
      // Сбросить фильтрацию
      onCompanyFilterChange([]);
      onStopsFilterChange([]);
    } else {
      setActiveButton(option);
      sortTickets(option);
    }
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setShowFilters(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);


  const toggleFilters = () => {
    setShowFilters(!showFilters);
    setArrowDirection(prevDirection => prevDirection === 'down' ? 'up' : 'down');
  };

  const [arrowDirection, setArrowDirection] = useState<'up' | 'down'>('down');


  return (
    <>
      <div className={`mob_option${showFilters ? ' active' : ''}`} onClick={toggleFilters}>
        <div className="left-content">
          <span>Любая авиакомпания, любое кол-во пересадок</span>
        </div>
        <div className="right-content">
          <span className="settings-label">Открыть настройки</span>
          <div className={`arrow-${arrowDirection}`}></div>
        </div>
      </div>

      <div className="filter_net">
        <div className={`filter_transfer${showFilters ? '' : ' hidden'}`}>
          <h3 className="title_transfer">Количество пересадок</h3>
          <div className="list-check-transfer">
            <ul>
              <li>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedStops.includes('0')}
                    onChange={() => handleStopsCheckboxChange('0')}
                  />
                  <span className="checkbox-label">Без пересадок</span>
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedStops.includes('1')}
                    onChange={() => handleStopsCheckboxChange('1')}
                  />
                  <span className="checkbox-label">1 пересадка</span>
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedStops.includes('2')}
                    onChange={() => handleStopsCheckboxChange('2')}
                  />
                  <span className="checkbox-label">2 пересадки</span>
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedStops.includes('3')}
                    onChange={() => handleStopsCheckboxChange('3')}
                  />
                  <span className="checkbox-label">3 пересадки</span>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div className={`filter_avia${showFilters ? '' : ' hidden'}`}>
          <h3 className="title-company">Компании</h3>
          <div className="list-check">
            <ul>
              <li>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedCompanies.includes('Победа')}
                    onChange={() => handleCompanyCheckboxChange('Победа')}
                  />
                  <span className="checkbox-label">Победа</span>
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedCompanies.includes('Red Wings')}
                    onChange={() => handleCompanyCheckboxChange('Red Wings')}
                  />
                  <span className="checkbox-label">Red Wings</span>
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedCompanies.includes('S7 Airlines')}
                    onChange={() => handleCompanyCheckboxChange('S7 Airlines')}
                  />
                  <span className="checkbox-label">S7 Airlines</span>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div className="filter-more">
          <button
            id="butt1"
            onClick={() => handleButtonClick('price')}
            className={activeButton === 'price' ? 'active' : ''}
          >
            Самый дешевый
          </button>
          <button
            id="butt3"
            onClick={() => handleButtonClick('duration')}
            className={activeButton === 'duration' ? 'active' : ''}
          >
            Самый быстрый
          </button>
          <button
            id="butt2"
            onClick={() => handleButtonClick('optimal')}
            className={activeButton === 'optimal' ? 'active' : ''}
          >
            Самый оптимальный
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterOptions;
