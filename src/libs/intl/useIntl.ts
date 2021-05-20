import { useMemo } from 'react';
import {
  useIntl as useReactIntl,
} from 'react-intl';
import { IIntl } from './IIntl';

const useIntl = (): IIntl => {
  const reactIntl = useReactIntl();

  const intl: IIntl = useMemo(() => ({
    formatMessage: reactIntl.formatMessage,
    formatDecimal: reactIntl.formatNumber,
    formatCurrency: (value, currency) => reactIntl.formatNumber(
      value, { style: 'currency', currency },
    ),
    formatDateTimeRange: reactIntl.formatDateTimeRange,
    formatDate: reactIntl.formatDate,
    formatTime: reactIntl.formatTime,
  }), [reactIntl]);

  return intl;
};

export default useIntl;
