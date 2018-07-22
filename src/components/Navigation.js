import React from "react";
import { NavLink } from 'react-router-dom';
import '../Home.css'

const Navigation = () => {
  return (
    <div>
      <div id = 'cssmenu' class = 'h-150' >
          <ul>
                <NavLink to="../Home">Get Predictions</NavLink>
                <NavLink to="/urea">urea</NavLink>
                <NavLink to="/MOP">Muriate of potash (M.O.P.)</NavLink>
                <NavLink to="/CES">Commercial Epson Salt (C.E.S.)</NavLink>
                <NavLink to="/TSP">Triple Super Phosphate (T.S.P) </NavLink>
                <NavLink to="/ZS">Zinc Sulphate</NavLink>
                <NavLink to="/SOP">Sulphate of Potash (S.O.P) </NavLink>
                <NavLink to="/BOR">Borate</NavLink>
                <NavLink to="/NIF">Nitrogen fertilizers </NavLink>
                <NavLink to="/PHF">phosphorus fertilizer</NavLink>
                <NavLink to="/POS">potassium fertilizer</NavLink>       
          </ul>
      </div>
    </div>
  );
};

export default Navigation;
