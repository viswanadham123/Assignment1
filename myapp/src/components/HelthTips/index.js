import React, { useState } from 'react';
import Header from '../Header';
import '../HelthTips/index.css';

const HealthTips = () => {
  const [checkedTips, setCheckedTips] = useState([]);

  const handleTipChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedTips((prevTips) => [...prevTips, value]);
    } else {
      setCheckedTips((prevTips) => prevTips.filter((tip) => tip !== value));
    }
  };

  return (
    <div>
      <Header />
      <div className="tips-container">
        <h1 className="tips-head">Health Tips</h1>
        <ul>
          <li>
            <label>
            <input
                type="checkbox"
                value="Stay physically active"
                checked={checkedTips.includes('Stay physically active')}
                onChange={handleTipChange}
              />
              Stay physically active
            </label>
            
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="Eat a balanced diet"
                checked={checkedTips.includes('Eat a balanced diet')}
                onChange={handleTipChange}
              />
              Eat a balanced diet
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="Stay hydrated"
                checked={checkedTips.includes('Stay hydrated')}
                onChange={handleTipChange}
              />
              Stay hydrated
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="Get regular check-ups and screenings"
                checked={checkedTips.includes('Get regular check-ups and screenings')}
                onChange={handleTipChange}
              />
              Get regular check-ups and screenings
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="Get enough sleep"
                checked={checkedTips.includes('Get enough sleep')}
                onChange={handleTipChange}
              />
              Get enough sleep
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="Maintain a healthy weight"
                checked={checkedTips.includes('Maintain a healthy weight')}
                onChange={handleTipChange}
              />
              Maintain a healthy weight
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="Manage stress"
                checked={checkedTips.includes('Manage stress')}
                onChange={handleTipChange}
              />
              Manage stress
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="Stay socially engaged"
                checked={checkedTips.includes('Stay socially engaged')}
                onChange={handleTipChange}
              />
              Stay socially engaged
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="Avoid smoking and excessive alcohol consumption"
                checked={checkedTips.includes('Avoid smoking and excessive alcohol consumption')}
                onChange={handleTipChange}
              />
              Avoid smoking and excessive alcohol consumption
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="Practice good hygiene"
                checked={checkedTips.includes('Practice good hygiene')}
                onChange={handleTipChange}
              />
              Practice good hygiene
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="Protect your skin from sun damage"
                checked={checkedTips.includes('Protect your skin from sun damage')}
                onChange={handleTipChange}
              />
              Protect your skin from sun damage
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="Engage in brain-stimulating activities"
                checked={checkedTips.includes('Engage in brain-stimulating activities')}
                onChange={handleTipChange}
              />
              Engage in brain-stimulating activities
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="Take medications as prescribed"
                checked={checkedTips.includes('Take medications as prescribed')}
                onChange={handleTipChange}
              />
              Take medications as prescribed
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="Manage chronic conditions effectively"
                checked={checkedTips.includes('Manage chronic conditions effectively')}
                onChange={handleTipChange}
              />
              Manage chronic conditions effectively
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="Avoid falls and maintain a safe environment"
                checked={checkedTips.includes('Avoid falls and maintain a safe environment')}
                onChange={handleTipChange}
              />
              Avoid falls and maintain a safe environment
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="Stay mentally and emotionally healthy"
                checked={checkedTips.includes('Stay mentally and emotionally healthy')}
                onChange={handleTipChange}
              />
              Stay mentally and emotionally healthy
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="Keep up with vaccinations"
                checked={checkedTips.includes('Keep up with vaccinations')}
                onChange={handleTipChange}
              />
              Keep up with vaccinations
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="Limit processed foods and added sugars"
                checked={checkedTips.includes('Limit processed foods and added sugars')}
                onChange={handleTipChange}
              />
              Limit processed foods and added sugars
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="Engage in regular strength and flexibility exercises"
                checked={checkedTips.includes('Engage in regular strength and flexibility exercises')}
                onChange={handleTipChange}
              />
              Engage in regular strength and flexibility exercises
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="Stay connected with loved ones"
                checked={checkedTips.includes('Stay connected with loved ones')}
                onChange={handleTipChange}
              />
              Stay connected with loved ones
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HealthTips;
