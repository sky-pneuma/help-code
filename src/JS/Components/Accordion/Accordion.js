import React, { useState } from 'react';
import cn from 'classnames';
import * as Icons from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

import AccordionItem from './AccordionItem';
import { handleObjectChange } from '../../Functions/handleObjectChange';

import './Accordion.scss';
import '../MainMenu/MainMenu.scss';

const Accordion = ({ items, className, itemClassName, isMenuHovered, isOpen }) => {
  const [data, setData] = useState(items);

  const onChange = handleObjectChange(setData, () => setData([...data]));

  const handleArrayChange = (e, index, prop) => {
    data[index][prop] = e;
    onChange(data);
  };

  return (
    <div className={cn('accordion', className)}>
      {items?.map((item, index) => {
        const Icon = Icons[item.icon];
        return item.link ? (
          <NavLink key={index} to={item.link} className={cn('main-menu--item main-menu--items-box-title')}>
            {item?.icon && <Icon className={cn('mr5', item?.className)} />}
            <span className={cn({ hidden: !isOpen && !isMenuHovered })}>{item?.title || 'Link'}</span>
          </NavLink>
        ) : (
          <AccordionItem
            key={index}
            className={itemClassName}
            item={item}
            isOpen={item.isOpen}
            onClick={(e) => handleArrayChange(e, index, 'isOpen')}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
