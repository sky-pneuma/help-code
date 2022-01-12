import React, { useState } from 'react';
import cn from 'classnames';
import * as Icons from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

import Accordion from '../Accordion/Accordion';
import Langs from '../../../Langs';

import './MainMenu.scss';

const classNames = require('classnames');

const MainMenu = (props) => {
  const { items, className } = props;
  const txt = Langs[global.lng];
  const [isOpen, setIsOpen] = useState(true);
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const [isMenuIconHovered, setIsMenuIconHovered] = useState(false);

  const chapterClass = classNames('main-menu--items-box-chapter', { 'main-menu--items-box-chapter-hidden': !isOpen && !isMenuHovered });
  const accordionClass = classNames('main-menu--accordion', { 'main-menu--accordion-hidden': !isOpen && !isMenuHovered });
  const itemsBoxClass = classNames('main-menu--items-box', { 'main-menu--items-box-closed': !isOpen && !isMenuHovered });
  const mainMenuClass = classNames('main-menu', className, { 'main-menu--closed': !isOpen && !isMenuHovered });

  const onMenuHover = () => {
    if (!isOpen) {
      setIsMenuHovered(!isMenuHovered);
      items.branch.forEach((item) => {
        item.isOpen = false;
      });
      items.branch2.forEach((item) => {
        item.isOpen = false;
      });
      items.branch3.forEach((item) => {
        item.isOpen = false;
      });
    }
  };

  const onCloseMenu = () => {
    setIsOpen(!isOpen);
    items.branch.forEach((item) => {
      item.isOpen = false;
    });
    items.branch2.forEach((item) => {
      item.isOpen = false;
    });
    items.branch3.forEach((item) => {
      item.isOpen = false;
    });
  };

  const changeMenuIcon = () => {
    if (isOpen && !isMenuIconHovered) return <Icons.FiMenu />;
    else if (isOpen && isMenuIconHovered) return <Icons.FiChevronLeft />;
    else if (!isOpen && isMenuHovered) return <Icons.FiChevronRight />;
    else if (!isOpen) return <Icons.FiX />;
    // else if (!isOpen) return <div className="main-menu--logo-close" />;
  };

  return (
    <div className={mainMenuClass} onMouseEnter={() => onMenuHover()} onMouseLeave={() => setIsMenuHovered(false)}>
      <div className={cn('main-menu--header', { 'main-menu--header-closed': !isOpen && !isMenuHovered })}>
        <div className={cn('main-menu--logo', { 'main-menu--logo-none': !isOpen && !isMenuHovered })} />
        <div className="main-menu--header-btn" onClick={() => onCloseMenu()}>
          <div className="j5" onMouseEnter={() => setIsMenuIconHovered(true)} onMouseLeave={() => setIsMenuIconHovered(false)}>
            {changeMenuIcon()}
          </div>
        </div>
      </div>

      <div className={itemsBoxClass}>
        <div className={cn('main-menu--items-box-main')}>
          {items.main.map((item, index) => {
            const Icon = Icons[item.icon];
            return item.link ? (
              <NavLink to={item.link} key={index} className={cn('main-menu--items-box-title')}>
                <div className="main-menu--item">
                  <div className="df">
                    <Icon className={cn('mr5', item.className)} />
                  </div>
                  <span className={cn({ hidden: !isOpen && !isMenuHovered })}>{item?.title || 'Link'}</span>
                </div>
              </NavLink>
            ) : (
              <span key={index} className={cn('main-menu--items-box-title', { hidden: !isOpen && !isMenuHovered })}>
                {txt?.titles[item?.title]}
              </span>
            );
          })}
        </div>

        <div className={chapterClass}>
          <span>Branch</span>
        </div>
        <Accordion className={accordionClass} items={items.branch} onClick={() => { }} />

        <div className={chapterClass}>
          <span>Branch 2</span>
        </div>
        <Accordion isOpen={isOpen} isMenuHovered={isMenuHovered} className={accordionClass} items={items.branch2} onClick={() => { }} />

        <div className={chapterClass}>
          <span>Branch 3</span>
        </div>
        <Accordion className={accordionClass} isOpen={isOpen} isMenuHovered={isMenuHovered} items={items.branch3} onClick={() => { }} />
      </div>
    </div>
  );
};

export default MainMenu;
