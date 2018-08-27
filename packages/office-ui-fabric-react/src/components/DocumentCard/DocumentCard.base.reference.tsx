import { styled } from '../../Utilities';
import { IDocumentCardProps, IDocumentCardStyleProps, IDocumentCardStyles } from './DocumentCard.types';
import { DocumentCardBase } from './DocumentCard.base';
import { getStyles } from './DocumentCard.styles';

/**
 * DocumentCard description
 */
export const DocumentCard = styled<IDocumentCardProps, IDocumentCardStyleProps, IDocumentCardStyles>(
  DocumentCardBase,
  getStyles
);
