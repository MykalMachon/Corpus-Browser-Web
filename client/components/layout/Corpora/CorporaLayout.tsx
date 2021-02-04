import { FC } from 'react';
import CorporaNav from './CorporaNav';
import CorporaTable from './CorporaTable';

type CorporaLayoutProps = {
  corporaData: any;
};

const CorporaLayout: FC<CorporaLayoutProps> = ({ corporaData }) => {
  return (
    <div>
      <CorporaNav />
      <CorporaTable rows={corporaData} />
    </div>
  );
};

export default CorporaLayout;
