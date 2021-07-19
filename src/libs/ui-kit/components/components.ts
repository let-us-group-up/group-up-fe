import {
  buildTitle as buildDesignSystemTitle,
} from '../designSystem';

export const title = 'components';

export const buildTitle = (
  storyName: string,
): string => `${storyName}/${buildDesignSystemTitle(title)}`;

