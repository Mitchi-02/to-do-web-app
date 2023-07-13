import { ObjectId } from "mongoose";

export interface IUser {
    _id: ObjectId;
    email:string;
    username:string;
    image:string;
}

export const labels = [
  'work',
  'events',
  'sports',
  'study',
  'health',
  'others',
] as const
export const statuses = ['to do', 'in progress', 'completed'] as const
export const priorities = ['low', 'medium', 'high'] as const
export type Label = (typeof labels)[number]
export type Status = (typeof statuses)[number]
export type Priority = (typeof priorities)[number]