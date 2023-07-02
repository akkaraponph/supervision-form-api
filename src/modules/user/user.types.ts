export enum UserRole {
	ADMIN = 'admin',
	USER = 'user',
	PERSONNEL = 'personnel'
}

// export interface UserEnum
export interface UserAttributes {
	id?: string;
	username: string;
	password: string;
	email?: string;
	status?: string;
	createdAt?: Date;
	updatedAt?: Date;
}

export interface TokenPayload {
	sub: number;
	status: string;
	exp: number;
}