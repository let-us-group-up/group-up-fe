/* eslint-disable @typescript-eslint/no-empty-interface */
import { FC, VFC } from 'react';


interface MessageDescriptor {
  description: string;
  defaultMessage: string;
}
type PrimitiveType = string | number | boolean | null | undefined | Date;
type Values = Record<string, PrimitiveType>;


interface Formatters {
  formatMessage(
    descriptor: MessageDescriptor,
    values?: Values,
  ): string;
  formatDecimal(value: number): string;
  formatCurrency(value: number, currency: string): string;
  formatDateTimeRange(from: Date, to: Date): string;
  formatDate(value: Date): string;
  formatTime(value: Date): string;
}

export interface IIntl extends Formatters {}


export type FormattedMessage = VFC<MessageDescriptor & {
  values?: Values;
}>;


export type IntlProvider<ProviderMessages> = FC<{
  messages: ProviderMessages;
  locale: string;
  defaultLocale: string;
}>
