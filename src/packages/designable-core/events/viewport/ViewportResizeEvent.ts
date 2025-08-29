import { ICustomEvent } from '@/packages/designable-shared';
import { AbstractViewportEvent } from './AbstractViewportEvent';

export class ViewportResizeEvent
  extends AbstractViewportEvent
  implements ICustomEvent
{
  type = 'viewport:resize';
}
