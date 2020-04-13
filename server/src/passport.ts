import passport from 'passport-jwt';
import { UserModel } from './models/User';
import keys from './secret/keys';

const JwtStrategy = passport.Strategy;
const { ExtractJwt } = passport;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.jwtStrategy
};

export default (passport: any) => passport.use(
  new JwtStrategy(opts, async (jwt_payload: any, done: any) => {
    try{
      console.log(`JWT: ${JSON.stringify(jwt_payload)}`);
      console.log(`id: ${jwt_payload.name}, user: ${jwt_payload.name}`);
      const user = await UserModel.findById(jwt_payload.id);
      return (user) ? done(null, user) : done(null, false);
    } catch (error) {
      console.log(error);
    }
  }));