import { Prisma } from "../generated/prisma/index.js";

export type CreateUserProps = Prisma.UserCreateInput;

export type UpdateUserProps = Prisma.UserUpdateInput;

export type DeleteUserProps = Prisma.UserWhereUniqueInput;

export type GetUserByIdProps = Prisma.UserWhereUniqueInput;
