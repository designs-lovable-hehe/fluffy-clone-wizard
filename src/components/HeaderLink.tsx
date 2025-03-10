
import React from 'react';

interface HeaderLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ href, className, children }) => {
  const pathname = window.location.pathname;
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === '/' + (subpath?.[0] || '');

  return (
    <a 
      href={href} 
      className={`${className || ''} ${isActive ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}`}
    >
      {children}
    </a>
  );
};

export default HeaderLink;
