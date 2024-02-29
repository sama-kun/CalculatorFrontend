import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Header from './Header';

function MainLayout({ children }) {
  const { t } = useTranslation();
  return (<>
    <Header/>
    <div className="text-white font-inter">
      <div className="mx-auto" style={{ width: '90%' }}>
        
          {children}
        </div>
    </div>
  </>);
}

export default MainLayout;
