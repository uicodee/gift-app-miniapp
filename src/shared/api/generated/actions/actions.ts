/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * Gift App
 * Crypto Gift App contest
 * OpenAPI spec version: 1.0
 */
import type {
  CreateActionDto
} from '../../model'
import { createInstance } from '../../http/index';
import type { BodyType } from '../../http/index';


type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


  export const getActions = () => {
const actionsControllerCreate = (
    createActionDto: BodyType<CreateActionDto>,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/actions`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: createActionDto
    },
      options);
    }
  const actionsControllerFindAll = (
    
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/actions`, method: 'GET'
    },
      options);
    }
  const actionsControllerFindOne = (
    id: string,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/actions/${id}`, method: 'GET'
    },
      options);
    }
  return {actionsControllerCreate,actionsControllerFindAll,actionsControllerFindOne}};
export type ActionsControllerCreateResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getActions>['actionsControllerCreate']>>>
export type ActionsControllerFindAllResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getActions>['actionsControllerFindAll']>>>
export type ActionsControllerFindOneResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getActions>['actionsControllerFindOne']>>>