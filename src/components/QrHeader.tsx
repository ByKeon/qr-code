import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowTurnLeftUpIcon } from '@heroicons/react/24/outline';

interface If_QrHeader {
  name: string;
  desc: string;
}

export function QrHeader({ name, desc }: If_QrHeader) {
  const { i18n, t } = useTranslation();
  return (
    <div className="flex items-start space-x-4">
      <Link
        to={`/${i18n.language}`}
        title={t('global.goBack')}
        className="p-1 rounded bg-blue-500 text-white hover-base"
      >
        <ArrowTurnLeftUpIcon className="w-6 h-6" />
      </Link>

      <div>
        <h1 className="text-2xl font-bold">{name}</h1>
        <h2 className="text-sm ml-1 mt-2">{desc}</h2>
      </div>
    </div>
  );
}
