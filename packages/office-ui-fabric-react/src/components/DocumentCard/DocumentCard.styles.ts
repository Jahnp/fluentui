import { IDocumentCardStyleProps, IDocumentCardStyles } from './DocumentCard.types';
import { IStyle, ITheme } from '../../Styling';

export const getStyles = (props: IDocumentCardStyleProps): IDocumentCardStyles => {
  const { className, theme } = props;

  const { palette, semanticColors } = theme;

  return {
    root: [
      'ms-DocumentCard',
      {
        // Insert css properties
      },
      className
    ]

    // Insert className styles
  };
};
