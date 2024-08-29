import { UserSchema } from 'entites/User';
import { LoginSchema } from 'features/AuthByUserName';

export interface StateSchema {
    user: UserSchema,
    login: LoginSchema
}
