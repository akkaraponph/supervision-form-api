import { JWT_SECRET, JWT_EXPRIES } from '../constants/common.constants';
import jwt from 'jsonwebtoken'

export const createJwtToken = (claims: object): string => {

	const token: string = jwt.sign(
		{
			...claims
		},
		JWT_SECRET as string,
		{
			expiresIn: JWT_EXPRIES as string,
		},
	)
	return token
}