import React from 'react';
import '../components/component.css';

export default function footer() {
    return (
      <div className="containers">

        <div className="cfooter">
            {/*Footer Bottom*/}
            <div className="footer-bottom">
              <p className="text-xs-center">
                &copy;{new Date().getFullYear()} CMPS-420 :All Rights Reserved
              </p>
            </div>
          </div>
          </div>
    )
}
