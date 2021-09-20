import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import * as Icons from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

import Status from '../Status/Status';

import './Accordion.scss';

const AccordionItem = ({ item, onClick, isOpen, className, children, noChevron, variant }) => {
  const Icon = Icons[item.icon];
  const [maxHeight, setMaxHeight] = useState(0);
  const ref = useRef(null);

  const getItemsHeight = () => {
    let itemHeight = 0;
    ref.current.childNodes.forEach((el) => {
      itemHeight += el.offsetHeight;
    });

    return itemHeight + 20;
  };

  useEffect(() => {
    setMaxHeight(isOpen ? getItemsHeight() : 0);
  }, [isOpen]);

  //https://i.imgur.com/TaScp0h.png
  const calculateStatusCount = () => {
    return item?.rows?.reduce(
      //sum rows
      (acc, row) => {
        const result = row.cols.reduce(
          //sum cols
          (accum, col) => ({
            active: accum.active + (col.status === 'active' ? 1 : 0),
            pause: accum.pause + (col.status === 'pause' ? 1 : 0),
          }),
          { active: 0, pause: 0 }
        );

        return {
          // rows result + cols result
          active: acc.active + result.active,
          pause: acc.pause + result.pause,
        };
      },
      { active: 0, pause: 0 }
    );
  };

  return (
    <div className={cn('accordion--item', className)}>
      <div className={cn('accordion--title-box', { 'accordion--title-open': isOpen })} onClick={() => onClick(!isOpen)}>
        <div className="j4 no-wrap">
          {item?.icon && <Icon className={cn('mr5', item?.className)} />}
          <span className="accordion--title">{item.title || 'Menu Chapter'}</span>
        </div>

        <div className="j6 accordion-title__right-box">
          {item.status && (
            <div className="mr5">
              <Status
                type={item?.status.type}
                value={item?.status.value}
                status={item?.status.status}
                active={calculateStatusCount()?.active}
                pause={calculateStatusCount()?.pause} />
            </div>
          )}

          {!noChevron && <Icons.FiChevronRight className={cn('accordion--title-chevron', { 'accordion--title-chevron-open': isOpen })} />}
        </div>
      </div>

      <div ref={ref} style={{ maxHeight }} className={cn('accordion--content', { 'accordion--content-is-open': isOpen })}>
        {item.children
          ? item.children.map((el) => {
            return (
              <NavLink to={el.link} key={el.id} className="accordion--content-item accordion--menu-link">
                {el?.title || 'Menu item'}
              </NavLink>
            );
          })
          : children}
      </div>
    </div>
  );
};

export default AccordionItem;
