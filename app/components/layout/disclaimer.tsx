import { Link } from 'react-router';

export default function Disclaimer() {
  return (
    <div
      className="row text-center"
      style={{ marginTop: '3em' }}
    >
      <div className="col">
        <p>
          <i>
            Statements made herein are the views of Terra Magma and do not imply the endorsement by any person or
            organization.
          </i>
        </p>
        <p>
          <i>
            Please <Link to="/Contact/Contact.stm">inform us</Link> of any factual errors so that we may correct them.
          </i>
        </p>
      </div>
    </div>
  );
}
