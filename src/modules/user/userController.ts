import { Request, Response } from "express";
import { randomUUID } from "crypto";

interface IUser {
    id: string;
    name: string;
    email: string;
}

const userMemory: IUser[] = [];

export const userIndex = async (req: Request, res: Response) => {
    res.json(userMemory);
};

export const userCreate = async (req: Request, res: Response) => {
    const { name, email } = req.body;

    const id = randomUUID();

    const user: IUser = {
        id,
        name,
        email,
    };

    userMemory.push(user);
    res.json(user);
};

export const userShow = async (req: Request, res: Response) => {
    const { user_id } = req.params;

    const user = userMemory.find((user) => user.id === user_id);

    res.json(user);
};

export const userDelete = async (req: Request, res: Response) => {
    const { user_id } = req.params;

    const userIndex = userMemory.findIndex((user) => user.id === user_id);

    userMemory.splice(userIndex, 1);

    res.json({ menssage: "User deleted" });
};
