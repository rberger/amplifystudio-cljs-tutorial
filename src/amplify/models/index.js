// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Rental } = initSchema(schema);

export {
  Rental
};