
export interface ICreateDesignerPayload {
  password: string;
  designer: {
    name: string;
    email: string;
    profilePhoto?: string;
    contactNumber?: string;
    address?: string;
    displayName?: string;
    bio?: string;
    expertise?: string;
    portfolioUrl?: string;
  }

}