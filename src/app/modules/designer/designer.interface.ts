export interface IUpdateDesignerPayload {
  designer?: {
    name?: string;
    profilePhoto?: string;
    contactNumber?: string;
    address?: string;
    displayName?: string;
    bio?: string;
    expertise?: string;
    portfolioUrl?: string;
  };
}
