export enum UserRole {
	ADMIN = 'admin',
	USER = 'user',
	PERSONNEL = 'personnel',
	DIRECTOR = 'director'
}

// export interface UserEnum
export interface UserAttributes {
	id?: string;
	username: string;
	password: string;
	// email?: string;
	status?: string;
	createdAt?: Date;
	updatedAt?: Date;
}

export interface TokenPayload {
	sub: number;
	sid: string;
	pid: string;
	status: string;
	exp: number;
}