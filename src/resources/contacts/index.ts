import { ResourceManager } from '../../common/classes/resourceManager';
import { Contact, ContactFilters } from './types';

export class Contacts extends ResourceManager<Contact, ContactFilters> {
  protected apiRoute = 'contacts';
}
