import cn from 'classnames';

import './Status.scss';

const Status = ({ value, status, disabled, type, active = 0, pause = 0, className, noBackground }) => {
  const label = (value || status)?.[0].toUpperCase() + (value || status)?.slice(1);

  return (
    <div className={cn({ disabled }, className)}>
      {type === 'number' ? (
        <div>
          {active === 0 && pause === 0 ? (
            <div className="status status--error">
              <span>{active}</span>
            </div>
          ) : (
            <div className="status status--warning">
              <span className="status--number-active">{active}</span>
              <span className="color--gray-gull"> / </span>
              <span className={`${pause > 0 ? 'color--froly' : 'color--gray-gull'}`}>{pause}</span>
            </div>
          )}
        </div>
      ) : (
        <div
          className={cn(
            `status status--${status} ${className || ''}`,
            { 'status--no-bg': noBackground },
            { 'color--gray-gull': noBackground && status === 'pause' && !className }
          )}
        >
          {label}
        </div>
      )}
    </div>
  );
};

export default Status;
