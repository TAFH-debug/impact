import UserModel, { IUser } from '../auth/models/User';

class AdminService {
  async changeUserRole(userId: string, role: string): Promise<IUser | null> {
    try {
      const user = await UserModel.findByIdAndUpdate(userId, { role }, { new: true });
      return user;
    } catch (error) {
      console.error('Failed to update user role:', error);
      throw error;
    }
  }

  async getAllUsers(): Promise<IUser[]> {
    try {
      const users = await UserModel.find();
      return users;
    } catch (error) {
      console.error('Failed to fetch users:', error);
      throw error;
    }
  }
}

export default new AdminService();
