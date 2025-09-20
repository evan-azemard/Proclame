import { NewSound, Sound, UpdateSound } from "@/entities";
import { Request, Response } from "express";

export interface SoundController {
	getAll: (
		req: Request,
		res: Response<Sound[] | { message: string }>
	) => Promise<void>;
	create: (
		req: Request<{}, {}, NewSound>,
		res: Response<Sound | { message: string }>
	) => Promise<void>;
	update: (
		req: Request<{ id: string }, {}, UpdateSound>,
		res: Response<Sound | { message: string }>
	) => Promise<void>;
	remove: (
		req: Request<{ id: string }>,
		res: Response<{ message: string }>
	) => Promise<void>;
}

