import { User } from './mongoose/user';
import { UserModel } from './mongoose/models';


(async () => {
    const u = new UserModel({ name: 'JohnDoe' });
    await u.save();
    const user = await UserModel.findOne();

    console.log(user);
  })();
