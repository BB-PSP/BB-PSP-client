import React from 'react';
import { useMediaQuery } from 'react-responsive';

const Small: React.FC = ({ children }) => {
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });
  return <React.Fragment>{isMobile && children}</React.Fragment>;
};

const Medium: React.FC = ({ children }) => {
  const isTablet = useMediaQuery({
    query: '(max-width: 1024px) and (min-width: 768px)',
  });
  return <React.Fragment>{isTablet && children}</React.Fragment>;
};

const Large: React.FC = ({ children }) => {
  const isPc = useMediaQuery({
    query: '(min-width:1025px) ',
  });
  return <React.Fragment>{isPc && children}</React.Fragment>;
};

export { Small, Medium, Large };
