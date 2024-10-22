import { REGIONS } from '../../../constant/filter';

import Button from '../../atoms/Button';

interface RegionProps {
  region: string;
  handleRegionChange: (title: string) => void;
}
const RegionFilter = ({ region, handleRegionChange }: RegionProps) => {
  return (
    <div className='flex flex-col gap-1'>
      <p className='font-semibold'>Regions</p>
      <div className='flex gap-4'>
        {REGIONS.map((REGION) => (
          <Button
            key={REGION.id}
            title={REGION.title}
            className={`flex justify-center items-center p-2 px-4 rounded-md ${
              region === REGION.title
                ? 'bg-blue-500 text-white' // 현재 선택된 region일 경우 파란색
                : 'bg-gray-300 text-gray-700' // 선택되지 않은 경우 회색
            }`}
            onClick={() => handleRegionChange(REGION.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default RegionFilter;
